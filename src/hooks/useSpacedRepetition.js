import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'pflegepro_srs'

/**
 * Hook Spaced Repetition System (algo SM-2)
 *
 * Structure d'une carte stockée:
 * {
 *   id: string (ex: "Hyperglykämie"),
 *   interval: number (jours avant prochaine révision),
 *   ease: number (1.3 à 2.5, facteur de difficulté),
 *   repetitions: number (nb de révisions réussies consécutives),
 *   nextReview: ISO date string,
 *   addedAt: ISO date string
 * }
 */

function loadCards() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
    return data
  } catch {
    return {}
  }
}

function saveCards(cards) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards))
}

// Date helpers (sans heure, juste le jour)
function todayStr() {
  return new Date().toISOString().split('T')[0]
}

function addDays(dateStr, days) {
  const d = new Date(dateStr)
  d.setDate(d.getDate() + days)
  return d.toISOString().split('T')[0]
}

function isDueToday(card) {
  return card.nextReview <= todayStr()
}

export function useSpacedRepetition() {
  const [cards, setCards] = useState(loadCards)
  
  // Recharger depuis localStorage si modifié ailleurs
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) setCards(loadCards())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])
  
  // Ajouter une carte au système (si pas déjà présente)
  const addCard = useCallback((cardId) => {
    const current = loadCards()
    if (current[cardId]) return false // déjà présente
    
    current[cardId] = {
      id: cardId,
      interval: 1,
      ease: 2.5,
      repetitions: 0,
      nextReview: todayStr(), // disponible immédiatement
      addedAt: todayStr(),
    }
    saveCards(current)
    setCards(current)
    return true
  }, [])
  
  // Retirer une carte du système
  const removeCard = useCallback((cardId) => {
    const current = loadCards()
    if (!current[cardId]) return false
    delete current[cardId]
    saveCards(current)
    setCards(current)
    return true
  }, [])
  
  // Vérifier si une carte est dans le système
  const hasCard = useCallback((cardId) => {
    return !!cards[cardId]
  }, [cards])
  
  // Algo SM-2 : enregistrer la réponse à une carte
  // quality: 'easy' (🟢 ich kenne) | 'hard' (🟡 schwierig) | 'forgot' (🔴 vergessen)
  const reviewCard = useCallback((cardId, quality) => {
    const current = loadCards()
    const card = current[cardId]
    if (!card) return
    
    let { interval, ease, repetitions } = card
    
    if (quality === 'forgot') {
      // Reset
      repetitions = 0
      interval = 1
      ease = Math.max(1.3, ease - 0.2)
    } else if (quality === 'hard') {
      // Un peu plus long, ease diminue légèrement
      repetitions += 1
      interval = Math.max(1, Math.round(interval * 1.2))
      ease = Math.max(1.3, ease - 0.15)
    } else if (quality === 'easy') {
      // Algo SM-2 standard
      repetitions += 1
      if (repetitions === 1) interval = 1
      else if (repetitions === 2) interval = 3
      else interval = Math.round(interval * ease)
      ease = Math.min(2.5, ease + 0.1)
    }
    
    current[cardId] = {
      ...card,
      interval,
      ease,
      repetitions,
      nextReview: addDays(todayStr(), interval),
      lastReviewed: todayStr(),
    }
    saveCards(current)
    setCards(current)
  }, [])
  
  // Liste des cartes à réviser aujourd'hui
  const dueCards = Object.values(cards).filter(isDueToday)
  
  // Stats
  const totalCards = Object.keys(cards).length
  const dueCount = dueCards.length
  const masteredCount = Object.values(cards).filter(c => c.repetitions >= 5).length
  
  return {
    cards,
    dueCards,
    dueCount,
    totalCards,
    masteredCount,
    addCard,
    removeCard,
    hasCard,
    reviewCard,
  }
}
