import { useState, useCallback } from 'react'

const STORAGE_KEY = 'pflegepro_progress'
const THEME_KEY   = 'pflegepro_theme'
const NAME_KEY    = 'pflegepro_name'

function loadProgress() {
  const defaults = {
    quizDone: 0, scores: [], streak: 0, lastDate: null,
    mastered: [], levels: {}, lessonsRead: [],
    dailyChallenge: { date: null, completed: false, score: 0 },
    badges: [], challengeStreak: 0, challengeBest: 0,
  }
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
    return { ...defaults, ...saved }
  } catch { return defaults }
}

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress)
  const [theme, setThemeState]  = useState(() => localStorage.getItem(THEME_KEY) || 'dark')
  const [userName, setUserName] = useState(() => localStorage.getItem(NAME_KEY) || '')

  const saveProgress = useCallback((newP) => {
    // S'assurer que lessonsRead existe toujours
    if (!newP.lessonsRead) newP.lessonsRead = []
    setProgress(newP)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newP))
  }, [])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setThemeState(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem(THEME_KEY, next)
  }, [theme])

  const saveName = useCallback((name) => {
    setUserName(name)
    localStorage.setItem(NAME_KEY, name)
  }, [])

  // Marquer une leçon comme lue
  const markLessonRead = useCallback((themeId, lessonName) => {
    const key = `${themeId}::${lessonName}`
    const current = loadProgress()
    if (!current.lessonsRead) current.lessonsRead = []
    if (!current.lessonsRead.includes(key)) {
      current.lessonsRead = [...current.lessonsRead, key]
      saveProgress(current)
    }
  }, [saveProgress])

  const checkStreak = useCallback(() => {
    const today = new Date().toDateString()
    const newP = { ...progress }
    if (newP.lastDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString()
      newP.streak = newP.lastDate === yesterday ? newP.streak + 1 : 1
      newP.lastDate = today
      saveProgress(newP)
    }
    return newP.streak
  }, [progress, saveProgress])

  // Compléter le Daily Challenge
  const completeChallenge = useCallback((score) => {
    const today = new Date().toDateString()
    const current = loadProgress()
    const passed = score >= 0.8
    // Only mark as completed if passed (allow retries if failed)
    current.dailyChallenge = { date: today, completed: passed, score: Math.round(score * 100) }
    if (passed) {
      const yesterday = new Date(Date.now() - 86400000).toDateString()
      current.challengeStreak = current.dailyChallenge?.date === yesterday
        ? (current.challengeStreak || 0) + 1
        : 1
      const newBadge = `champion_${current.challengeStreak}`
      if (!current.badges.includes(newBadge)) {
        current.badges = [...current.badges, newBadge]
      }
      if (Math.round(score * 100) > (current.challengeBest || 0)) {
        current.challengeBest = Math.round(score * 100)
      }
    }
    saveProgress(current)
    return passed
  }, [saveProgress])

  // Vérifier si Challenge fait aujourd'hui
  const isChallengeCompletedToday = useCallback(() => {
    const today = new Date().toDateString()
    return progress.dailyChallenge?.date === today && progress.dailyChallenge?.completed
  }, [progress])

  return { progress, saveProgress, theme, toggleTheme, userName, saveName, checkStreak, markLessonRead, completeChallenge, isChallengeCompletedToday }
}
