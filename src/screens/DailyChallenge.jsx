import { useContext, useState, useMemo, useEffect } from 'react'
import { AppContext } from '../App'

// Phrases motivantes du jour (rotation)
const MOTIVATIONS = [
  "Heute zeigst du, was du kannst! 💪",
  "5 Fragen — bist du bereit? 🎯",
  "Beweise dein Wissen! 🔥",
  "Jeden Tag ein Schritt weiter! ⭐",
  "Du schaffst das! 🌟",
  "Heute ist dein Tag! ⚡",
  "Wissen ist Pflege! 💙",
  "Mach dich stolz! 🏆",
  "Konzentration und los! 🚀",
  "Du bist ein Pflegeprofi! 👩‍⚕️",
]

export default function DailyChallenge() {
  const { QUIZZES, nav, completeChallenge, progress } = useContext(AppContext)
  const [retryKey, setRetryKey] = useState(0)
  
  // Tirer 5 questions aléatoires de tous les quiz, stable pendant la session
  const questions = useMemo(() => {
    const all = []
    Object.entries(QUIZZES).forEach(([themeId, qs]) => {
      qs.forEach(q => {
        if (q && Array.isArray(q.opts) && q.opts.length >= 2 && typeof q.correct === 'number') {
          const correctText = q.opts[q.correct]
          const shuffledOpts = [...q.opts].sort(() => Math.random() - 0.5)
          const newAnswerIdx = shuffledOpts.indexOf(correctText)
          all.push({ ...q, options: shuffledOpts, answer: newAnswerIdx, themeId })
        }
      })
    })
    const shuffled = [...all].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 5)
  }, [retryKey])

  const motivation = useMemo(() => 
    MOTIVATIONS[Math.floor(Date.now() / 86400000) % MOTIVATIONS.length]
  , [])

  const [step, setStep] = useState('intro') // intro | playing | result
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [combo, setCombo] = useState(0)
  const [maxCombo, setMaxCombo] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleRetry = () => {
    setCurrent(0)
    setSelected(null)
    setAnswered(false)
    setCorrectCount(0)
    setCombo(0)
    setMaxCombo(0)
    setShowFeedback(false)
    setRetryKey(k => k + 1)
    setStep('playing')
  }

  const q = questions[current]

  const handleSelect = (idx) => {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    setShowFeedback(true)
    if (idx === q.answer) {
      setCorrectCount(c => c + 1)
      const newCombo = combo + 1
      setCombo(newCombo)
      if (newCombo > maxCombo) setMaxCombo(newCombo)
    } else {
      setCombo(0)
    }
  }

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1)
      setSelected(null)
      setAnswered(false)
      setShowFeedback(false)
    } else {
      const score = correctCount / questions.length
      completeChallenge(score)
      setStep('result')
    }
  }

  // INTRO SCREEN
  if (step === 'intro') {
    return (

      <div style={{
        minHeight: '70vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', padding: '20px',
        background: 'linear-gradient(135deg, #f59e0b22, #ef444422)',
        borderRadius: 24, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          fontSize: '5rem', marginBottom: 20,
          animation: 'bounce 1.2s ease-in-out infinite',
        }}>🔥</div>
        <h1 style={{
          fontFamily: "'Fraunces',serif", fontSize: '2rem', fontWeight: 700,
          color: 'var(--ink)', marginBottom: 12, textAlign: 'center',
        }}>Tägliche Challenge</h1>
        <p style={{
          color: 'var(--ink2)', fontSize: '1.05rem', marginBottom: 8,
          textAlign: 'center', maxWidth: 400,
        }}>{motivation}</p>
        <div style={{
          marginTop: 20, padding: '12px 24px', borderRadius: 999,
          background: 'var(--card)', border: '1px solid var(--border)',
          fontSize: '.9rem', color: 'var(--ink2)',
        }}>
          5 Fragen · ≥80% für Badge 🏆
        </div>
        <button onClick={() => setStep('playing')} style={{
          marginTop: 32, padding: '16px 48px', borderRadius: 999,
          background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
          color: 'white', border: 'none', fontSize: '1.1rem', fontWeight: 700,
          cursor: 'pointer', boxShadow: '0 8px 24px rgba(239,68,68,.35)',
          letterSpacing: '.3px',
        }}>
          Los geht's! ⚡
        </button>
        <style>{`
          @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
        `}</style>
      </div>
    )
  }

  // PLAYING SCREEN
  if (step === 'playing') {
    if (!q) return <div style={{padding:30}}>Lade Fragen...</div>
    const isCorrect = selected === q.answer
    return (
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '10px' }}>
        {/* Progress dots */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 24 }}>
          {questions.map((_, i) => (
            <div key={i} style={{
              width: i === current ? 32 : 12, height: 8, borderRadius: 4,
              background: i < current ? '#10b981' : i === current ? '#f59e0b' : 'var(--bg3)',
              transition: 'all .3s',
            }}/>
          ))}
        </div>

        {/* Combo indicator */}
        {combo >= 2 && (
          <div style={{
            textAlign: 'center', marginBottom: 16,
            fontSize: '1.1rem', fontWeight: 700,
            color: '#f59e0b', animation: 'pulse 0.5s ease-out',
          }}>
            🔥 Combo x{combo}!
          </div>
        )}

        {/* Question */}
        <div style={{
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 20, padding: '24px 20px', marginBottom: 20,
        }}>
          <div style={{
            fontSize: '.75rem', color: 'var(--ink3)', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 10,
          }}>
            Frage {current + 1} / {questions.length}
          </div>
          <div style={{
            fontFamily: "'Fraunces',serif", fontSize: '1.25rem',
            color: 'var(--ink)', lineHeight: 1.4, fontWeight: 600,
          }}>
            {q.q}
          </div>
        </div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {q.options.map((opt, i) => {
            const isSel = selected === i
            const isAns = i === q.answer
            let bg = 'var(--card)', border = 'var(--border)', color = 'var(--ink)'
            if (answered) {
              if (isAns) { bg = '#10b98122'; border = '#10b981'; color = 'var(--ink)' }
              else if (isSel) { bg = '#ef444422'; border = '#ef4444'; color = 'var(--ink)' }
            } else if (isSel) {
              bg = 'var(--teal-dim)'; border = 'var(--teal)'
            }
            return (
              <button key={i} onClick={() => handleSelect(i)} disabled={answered} style={{
                padding: '16px 18px', borderRadius: 14, textAlign: 'left',
                background: bg, border: `2px solid ${border}`, color,
                cursor: answered ? 'default' : 'pointer',
                fontSize: '.95rem', fontWeight: 500,
                transition: 'all .2s', display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: 'var(--bg3)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '.85rem', fontWeight: 700, flexShrink: 0,
                }}>{String.fromCharCode(65 + i)}</span>
                <span style={{ flex: 1 }}>{opt}</span>
                {answered && isAns && <span style={{ fontSize: '1.2rem' }}>✅</span>}
                {answered && isSel && !isAns && <span style={{ fontSize: '1.2rem' }}>❌</span>}
              </button>
            )
          })}
        </div>

        {/* Feedback + Next */}
        {showFeedback && (
          <div style={{
            marginTop: 20, padding: '16px 18px', borderRadius: 14,
            background: isCorrect ? '#10b98115' : '#ef444415',
            border: `1.5px solid ${isCorrect ? '#10b981' : '#ef4444'}`,
            animation: 'slideUp .3s ease-out',
          }}>
            <div style={{
              fontWeight: 700, fontSize: '1rem', marginBottom: 6,
              color: isCorrect ? '#10b981' : '#ef4444',
            }}>
              {isCorrect ? '🎉 Richtig!' : '❌ Falsch'}
            </div>
            {q.explanation && (
              <div style={{ fontSize: '.88rem', color: 'var(--ink2)', lineHeight: 1.5 }}>
                {q.explanation}
              </div>
            )}
            <button onClick={handleNext} style={{
              marginTop: 14, padding: '12px 32px', borderRadius: 999,
              background: isCorrect ? '#10b981' : '#ef4444',
              color: 'white', border: 'none', fontWeight: 700,
              cursor: 'pointer', fontSize: '.95rem',
            }}>
              {current < questions.length - 1 ? 'Weiter →' : 'Ergebnis ansehen 🏆'}
            </button>
          </div>
        )}

        <style>{`
          @keyframes pulse { 0%{transform:scale(.95)} 50%{transform:scale(1.08)} 100%{transform:scale(1)} }
          @keyframes slideUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        `}</style>
      </div>
    )
  }

  // RESULT SCREEN
  const finalScore = Math.round(correctCount / questions.length * 100)
  const passed = finalScore >= 80
  return (
    <div style={{
      minHeight: '70vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', padding: '20px',
      textAlign: 'center',
    }}>
      <div style={{
        fontSize: '6rem', marginBottom: 16,
        animation: 'celebrate 1s ease-out',
      }}>
        {passed ? '🏆' : '💪'}
      </div>
      <h1 style={{
        fontFamily: "'Fraunces',serif", fontSize: '2.2rem',
        color: 'var(--ink)', marginBottom: 10,
      }}>
        {passed ? 'Champion!' : 'Nicht schlecht!'}
      </h1>
      <p style={{ color: 'var(--ink2)', marginBottom: 24, fontSize: '1rem' }}>
        {passed ? 'Du hast deine tägliche Challenge gemeistert!' : 'Versuche es morgen erneut!'}
      </p>
      
      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 20, padding: '24px 32px', marginBottom: 20,
        display: 'flex', gap: 32, alignItems: 'center',
      }}>
        <div>
          <div style={{ fontSize: '.7rem', color: 'var(--ink3)', textTransform: 'uppercase', letterSpacing: '.5px', fontWeight: 600 }}>Score</div>
          <div style={{ fontFamily: "'Fraunces',serif", fontSize: '2.2rem', fontWeight: 700, color: passed ? '#10b981' : '#f59e0b' }}>{finalScore}%</div>
        </div>
        <div style={{ width: 1, height: 50, background: 'var(--border)' }}/>
        <div>
          <div style={{ fontSize: '.7rem', color: 'var(--ink3)', textTransform: 'uppercase', letterSpacing: '.5px', fontWeight: 600 }}>Combo</div>
          <div style={{ fontFamily: "'Fraunces',serif", fontSize: '2.2rem', fontWeight: 700, color: '#f59e0b' }}>x{maxCombo}</div>
        </div>
      </div>

      {passed && (
        <div style={{
          padding: '14px 24px', borderRadius: 16,
          background: 'linear-gradient(135deg, #f59e0b22, #ef444422)',
          border: '1.5px solid #f59e0b', marginBottom: 24,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ fontSize: '1.5rem' }}>🏆</span>
          <span style={{ fontWeight: 700, color: 'var(--ink)' }}>Badge "Champion #{progress.challengeStreak || 1}" verdient!</span>
        </div>
      )}

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        {!passed && (
          <button onClick={handleRetry} style={{
            padding: '14px 32px', borderRadius: 999,
            background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
            color: 'white', border: 'none', fontWeight: 700, fontSize: '1rem',
            cursor: 'pointer', boxShadow: '0 6px 18px rgba(239,68,68,.3)',
          }}>
            🔄 Wiederholen
          </button>
        )}
        <button onClick={() => nav('home')} style={{
          padding: '14px 32px', borderRadius: 999,
          background: passed ? 'var(--teal)' : 'var(--card)',
          color: passed ? 'white' : 'var(--ink)',
          border: passed ? 'none' : '1px solid var(--border)',
          fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
        }}>
          Zur Startseite
        </button>
      </div>

      <style>{`
        @keyframes celebrate { 0%{transform:scale(0) rotate(-180deg)} 60%{transform:scale(1.2) rotate(10deg)} 100%{transform:scale(1) rotate(0)} }
      `}</style>
    </div>
  )
}
