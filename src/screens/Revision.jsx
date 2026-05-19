import { useState, useMemo } from 'react'
import { useSpacedRepetition } from '../hooks/useSpacedRepetition'
import { FACHBEGRIFFE } from '../data/fachbegriffe'
import { useSpeech } from '../hooks/useSpeech'

export default function Revision() {
  const { dueCards, reviewCard, totalCards, masteredCount } = useSpacedRepetition()
  const { speak } = useSpeech()
  const [flipped, setFlipped] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [reviewedToday, setReviewedToday] = useState(0)
  
  // Recharger les cartes complètes (term + def) depuis FACHBEGRIFFE
  const cardsWithData = useMemo(() => {
    return dueCards.map(dc => {
      const full = FACHBEGRIFFE.find(f => f.term === dc.id)
      return full ? { ...dc, ...full } : null
    }).filter(Boolean)
  }, [dueCards])
  
  const current = cardsWithData[currentIdx]
  const remaining = cardsWithData.length - currentIdx
  
  // Si plus rien à réviser
  if (cardsWithData.length === 0 || currentIdx >= cardsWithData.length) {
    // Cas 1 : l'utilisateur a fini ses révisions du jour (motivation positive)
    if (reviewedToday > 0) {
      return (
        <div style={{
          background: 'linear-gradient(135deg, rgba(16,185,129,.15), rgba(20,184,166,.06))',
          border: '1px solid rgba(16,185,129,.3)',
          borderRadius: 16, padding: '24px 20px', marginBottom: 16, textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.8rem', marginBottom: 8 }}>🎉</div>
          <div style={{ fontFamily: "'Fraunces',serif", fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>
            Alles erledigt für heute!
          </div>
          <div style={{ fontSize: '.88rem', color: 'var(--ink2)', marginBottom: 14 }}>
            Du hast {reviewedToday} {reviewedToday === 1 ? 'Karte' : 'Karten'} wiederholt. Komm morgen wieder! 🌟
          </div>
          <div style={{ display: 'inline-flex', gap: 16, fontSize: '.75rem', color: 'var(--ink3)', background: 'var(--card)', padding: '8px 14px', borderRadius: 10, border: '1px solid var(--border)' }}>
            <span>📚 {totalCards} im System</span>
            <span>✨ {masteredCount} gemeistert</span>
          </div>
        </div>
      )
    }
    
    // Cas 2 : utilisateur a des cartes dans le système mais aucune n'est due aujourd'hui
    if (totalCards > 0) {
      return (
        <div style={{
          background: 'linear-gradient(135deg, rgba(20,184,166,.1), rgba(16,185,129,.04))',
          border: '1px solid rgba(20,184,166,.25)',
          borderRadius: 16, padding: '20px', marginBottom: 16, textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: 6 }}>☕</div>
          <div style={{ fontFamily: "'Fraunces',serif", fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
            Heute keine Wiederholungen fällig
          </div>
          <div style={{ fontSize: '.8rem', color: 'var(--ink2)', marginBottom: 12 }}>
            Komm später wieder. Bis dahin: neue Fachbegriffe entdecken!
          </div>
          <div style={{ display: 'inline-flex', gap: 16, fontSize: '.72rem', color: 'var(--ink3)' }}>
            <span>📚 {totalCards} gespeichert</span>
            <span>✨ {masteredCount} gemeistert</span>
          </div>
        </div>
      )
    }
    
    // Cas 3 : utilisateur tout nouveau, jamais ajouté de carte → onboarding pédagogique
    return (
      <div style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,.12), rgba(168,85,247,.06))',
        border: '1px solid rgba(168,85,247,.25)',
        borderRadius: 16, padding: '20px', marginBottom: 16
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: '1.8rem' }}>📚</span>
          <div style={{ fontFamily: "'Fraunces',serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)' }}>
            Wie funktionieren Wiederholungen?
          </div>
        </div>
        <div style={{ fontSize: '.85rem', color: 'var(--ink2)', lineHeight: 1.6, marginBottom: 14 }}>
          Wenn du Fachbegriffe aufdeckst oder anklickst, werden sie automatisch hier gespeichert.
          Komm täglich zurück, um sie zu wiederholen — basierend auf wissenschaftlich erprobten Intervallen
          für langfristiges Lernen. 🧠
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 8,
          fontSize: '.78rem', color: 'var(--ink2)',
          background: 'rgba(255,255,255,.04)', padding: '12px', borderRadius: 10,
          border: '1px solid rgba(255,255,255,.06)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>🟢</span><span><strong>Ich kenne</strong> — Wiedersehen in einigen Tagen</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>🟡</span><span><strong>Schwierig</strong> — bald wieder</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>🔴</span><span><strong>Vergessen</strong> — morgen erneut</span>
          </div>
        </div>
        <div style={{
          marginTop: 12, padding: '10px 12px',
          background: 'rgba(168,85,247,.08)', borderRadius: 10,
          fontSize: '.78rem', color: 'var(--ink2)', textAlign: 'center'
        }}>
          👉 Geh zu <strong style={{ color: '#a855f7' }}>Fachbegriffe</strong> und decke deine erste Karte auf!
        </div>
      </div>
    )
  }
  
  const handleReview = (quality) => {
    reviewCard(current.id, quality)
    setReviewedToday(r => r + 1)
    setFlipped(false)
    setCurrentIdx(i => i + 1)
  }
  
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(99,102,241,.12), rgba(168,85,247,.06))',
      border: '1px solid rgba(168,85,247,.2)',
      borderRadius: 16, padding: 18, marginBottom: 16
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: '1.3rem' }}>📚</span>
          <div>
            <div style={{ fontFamily: "'Fraunces',serif", fontSize: '1rem', fontWeight: 700, color: 'var(--ink)' }}>
              Heute zu wiederholen
            </div>
            <div style={{ fontSize: '.7rem', color: 'var(--ink2)' }}>
              {remaining} {remaining === 1 ? 'Karte' : 'Karten'} übrig · {reviewedToday} fertig
            </div>
          </div>
        </div>
        <div style={{
          background: 'rgba(168,85,247,.2)', color: '#a855f7',
          padding: '4px 10px', borderRadius: 12, fontSize: '.75rem', fontWeight: 700
        }}>
          {currentIdx + 1}/{cardsWithData.length}
        </div>
      </div>
      
      {/* Barre de progression */}
      <div style={{ height: 4, background: 'rgba(255,255,255,.06)', borderRadius: 2, marginBottom: 16, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${(currentIdx / cardsWithData.length) * 100}%`,
          background: 'linear-gradient(90deg, #6366f1, #a855f7)',
          transition: 'width .4s ease'
        }} />
      </div>
      
      {/* Flashcard */}
      <div
        onClick={() => setFlipped(!flipped)}
        style={{
          background: 'var(--card)',
          border: '1.5px solid var(--border)',
          borderRadius: 14, padding: '24px 18px',
          minHeight: 140, cursor: 'pointer',
          marginBottom: 14, position: 'relative',
          transition: 'border-color .2s',
        }}
      >
        {!flipped ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '.7rem', color: 'var(--ink3)', textTransform: 'uppercase',
              letterSpacing: '1px', marginBottom: 12
            }}>{current.category}</div>
            <div style={{
              fontFamily: "'Fraunces',serif", fontSize: '1.3rem', fontWeight: 700,
              color: 'var(--ink)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: 10
            }}>
              <span>{current.term}</span>
              <button
                onClick={(e) => { e.stopPropagation(); speak(current.term); }}
                style={{
                  background: 'var(--teal-dim)', border: '1px solid var(--teal)',
                  borderRadius: '50%', width: 28, height: 28,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', padding: 0, fontSize: '.8rem',
                }}
              >🔊</button>
            </div>
            <div style={{ fontSize: '.7rem', color: 'var(--ink3)', marginTop: 16 }}>
              👆 Tippen für Definition
            </div>
          </div>
        ) : (
          <div>
            <div style={{
              fontSize: '.7rem', color: 'var(--ink3)', textTransform: 'uppercase',
              letterSpacing: '1px', marginBottom: 10
            }}>Definition</div>
            <div style={{
              fontSize: '.9rem', color: 'var(--ink)',
              lineHeight: 1.55,
            }}>{current.def}</div>
          </div>
        )}
      </div>
      
      {/* Boutons de review (uniquement après flip) */}
      {flipped && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          <button
            onClick={() => handleReview('forgot')}
            style={{
              background: 'rgba(239,68,68,.15)', border: '1px solid rgba(239,68,68,.4)',
              color: '#ef4444', padding: '10px 6px', borderRadius: 10,
              fontSize: '.75rem', fontWeight: 700, cursor: 'pointer',
            }}
          >
            🔴<div style={{ marginTop: 3 }}>Vergessen</div>
          </button>
          <button
            onClick={() => handleReview('hard')}
            style={{
              background: 'rgba(245,158,11,.15)', border: '1px solid rgba(245,158,11,.4)',
              color: '#f59e0b', padding: '10px 6px', borderRadius: 10,
              fontSize: '.75rem', fontWeight: 700, cursor: 'pointer',
            }}
          >
            🟡<div style={{ marginTop: 3 }}>Schwierig</div>
          </button>
          <button
            onClick={() => handleReview('easy')}
            style={{
              background: 'rgba(16,185,129,.15)', border: '1px solid rgba(16,185,129,.4)',
              color: '#10b981', padding: '10px 6px', borderRadius: 10,
              fontSize: '.75rem', fontWeight: 700, cursor: 'pointer',
            }}
          >
            🟢<div style={{ marginTop: 3 }}>Ich kenne</div>
          </button>
        </div>
      )}
    </div>
  )
}
