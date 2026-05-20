import { useContext, useState, useMemo, useRef } from 'react'
import { useSpeech } from '../hooks/useSpeech'
import { AppContext } from '../App'
import { LESSON_CONTENT } from '../data/lessons.js'
import { FACHBEGRIFFE } from '../data/fachbegriffe.js'
import { getLessonForDay, getYesterdayLesson } from '../data/lessonSequence.js'

const MOTIVATIONS = [
  "Heute zeigst du, was du kannst!",
  "Schritt für Schritt zum Profi!",
  "Beweise dein Wissen!",
  "Jeden Tag ein Schritt weiter!",
  "Du schaffst das!",
  "Heute ist dein Tag!",
  "Wissen ist Pflege!",
  "Mach dich stolz!",
  "Konzentration und los!",
  "Du bist ein Pflegeprofi!",
]

const FACHBEGRIFFE_PER_DAY = 3

function pickStable(array, count, seed) {
  if (!array.length) return []
  const arr = [...array]
  let s = seed
  for (let i = arr.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280
    const j = Math.floor((s / 233280) * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr.slice(0, Math.min(count, arr.length))
}

export default function DailyChallenge() {
  const { QUIZZES, completeChallenge, getCurrentDayIndex, markLessonRead, nav } = useContext(AppContext)
  const { speak } = useSpeech()

  const [dayIndex] = useState(() => getCurrentDayIndex())
  const todayLesson = useMemo(() => getLessonForDay(dayIndex), [dayIndex])
  const yesterdayLesson = useMemo(() => getYesterdayLesson(dayIndex), [dayIndex])
  const isFirstDay = dayIndex === 0

  const motivation = useMemo(() =>
    MOTIVATIONS[Math.floor(Date.now() / 86400000) % MOTIVATIONS.length]
  , [])

  const lessonHTML = useMemo(() => {
    if (!todayLesson) return ''
    const fn = LESSON_CONTENT[todayLesson.themeId]?.[todayLesson.lessonName]
    return typeof fn === 'function' ? fn() : ''
  }, [todayLesson])

  const todayFachbegriffe = useMemo(() => {
    if (!todayLesson) return []
    const filtered = FACHBEGRIFFE.filter(f => f.category === todayLesson.category)
    return pickStable(filtered, FACHBEGRIFFE_PER_DAY, dayIndex + 1)
  }, [todayLesson, dayIndex])

  const quizQuestions = useMemo(() => {
    if (!yesterdayLesson) return []
    const themeQuizzes = QUIZZES[yesterdayLesson.themeId] || []
    const valid = themeQuizzes.filter(q =>
      q && Array.isArray(q.opts) && q.opts.length >= 2 && typeof q.correct === 'number'
    )
    const shuffled = pickStable(valid, 5, dayIndex + 999)
    return shuffled.map(q => {
      const correctText = q.opts[q.correct]
      const optsCopy = [...q.opts]
      let s = dayIndex + 7
      for (let i = optsCopy.length - 1; i > 0; i--) {
        s = (s * 9301 + 49297) % 233280
        const j = Math.floor((s / 233280) * (i + 1))
        ;[optsCopy[i], optsCopy[j]] = [optsCopy[j], optsCopy[i]]
      }
      return { ...q, options: optsCopy, answer: optsCopy.indexOf(correctText) }
    })
  }, [yesterdayLesson, dayIndex, QUIZZES])

  const [phase, setPhase] = useState('intro')
  const [fbIndex, setFbIndex] = useState(0)
  const [fbFlipped, setFbFlipped] = useState(false)
  const [qIdx, setQIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [combo, setCombo] = useState(0)
  const [maxCombo, setMaxCombo] = useState(0)

  if (!todayLesson) {
    return (
      <div style={{ padding: 30, textAlign: 'center', color: 'var(--ink2)' }}>
        Keine Lektion verfügbar.
      </div>
    )
  }

  // INTRO
  if (phase === 'intro') {
    return (
      <div style={{
        minHeight: '70vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', padding: '20px',
        background: 'linear-gradient(135deg, #f59e0b22, #ef444422)',
        borderRadius: 24,
      }}>
        <div style={{ fontSize: '5rem', marginBottom: 16 }}>🔥</div>
        <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: '2rem', color: 'var(--ink)', marginBottom: 10, textAlign: 'center' }}>
          Tag {dayIndex + 1}
        </h1>
        <p style={{ color: 'var(--ink2)', fontSize: '1rem', marginBottom: 20, textAlign: 'center', maxWidth: 400 }}>
          {motivation}
        </p>

        <div style={{
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 16, padding: '18px 20px', maxWidth: 440, width: '100%',
          marginBottom: 24,
        }}>
          <div style={{ fontSize: '.7rem', color: 'var(--ink3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 10 }}>
            Dein Programm
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: '1.4rem' }}>📖</span>
              <div style={{ fontSize: '.9rem', color: 'var(--ink)' }}>
                <strong>Lesen:</strong> {todayLesson.lessonName}
                <div style={{ fontSize: '.75rem', color: 'var(--ink3)' }}>{todayLesson.themeLabel}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: '1.4rem' }}>🧠</span>
              <div style={{ fontSize: '.9rem', color: 'var(--ink)' }}>
                <strong>Fachbegriffe:</strong> {todayFachbegriffe.length} Begriffe
              </div>
            </div>
            {!isFirstDay && yesterdayLesson && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: '1.4rem' }}>❓</span>
                <div style={{ fontSize: '.9rem', color: 'var(--ink)' }}>
                  <strong>Quiz:</strong> {quizQuestions.length} Fragen zu gestern
                </div>
              </div>
            )}
            {isFirstDay && (
              <div style={{
                marginTop: 4, padding: '8px 12px', borderRadius: 10,
                background: 'rgba(96,165,250,.1)', border: '1px solid rgba(96,165,250,.25)',
                fontSize: '.75rem', color: 'var(--ink2)',
              }}>
                💡 Morgen wartet dein erstes Quiz!
              </div>
            )}
          </div>
        </div>

        <button onClick={() => setPhase('lesen')} style={{
          padding: '16px 48px', borderRadius: 999,
          background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
          color: 'white', border: 'none', fontSize: '1.1rem', fontWeight: 700,
          cursor: 'pointer', boxShadow: '0 8px 24px rgba(239,68,68,.35)',
        }}>
          Los geht es! ⚡
        </button>
      </div>
    )
  }

  // LESEN
  if (phase === 'lesen') {
    return (
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '10px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          marginBottom: 16, padding: '10px 14px',
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 12,
        }}>
          <span style={{ fontSize: '1.5rem' }}>📖</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '.7rem', color: 'var(--ink3)', fontWeight: 700, textTransform: 'uppercase' }}>
              Schritt 1 · Lesen
            </div>
            <div style={{ fontSize: '.85rem', color: 'var(--ink)', fontWeight: 600 }}>
              {todayLesson.themeLabel}
            </div>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: lessonHTML }} style={{ marginBottom: 24 }} />

        <div style={{ position: 'sticky', bottom: 16, padding: '0 0 8px', display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => {
            markLessonRead(todayLesson.themeId, todayLesson.lessonName)
            if (todayFachbegriffe.length > 0) {
              setPhase('fachbegriffe')
            } else if (quizQuestions.length > 0) {
              setPhase('quiz')
            } else {
              completeChallenge(1)
              setPhase('result')
            }
          }} style={{
            padding: '14px 36px', borderRadius: 999,
            background: 'linear-gradient(135deg, #10b981, #059669)',
            color: 'white', border: 'none', fontSize: '1rem', fontWeight: 700,
            cursor: 'pointer', boxShadow: '0 6px 20px rgba(16,185,129,.4)',
          }}>
            Ich habe gelesen ✓
          </button>
        </div>
      </div>
    )
  }

  // FACHBEGRIFFE
  if (phase === 'fachbegriffe') {
    const fb = todayFachbegriffe[fbIndex]
    const isLast = fbIndex === todayFachbegriffe.length - 1

    return (
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '10px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          marginBottom: 16, padding: '10px 14px',
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 12,
        }}>
          <span style={{ fontSize: '1.5rem' }}>🧠</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '.7rem', color: 'var(--ink3)', fontWeight: 700, textTransform: 'uppercase' }}>
              Schritt 2 · Fachbegriffe
            </div>
            <div style={{ fontSize: '.85rem', color: 'var(--ink)', fontWeight: 600 }}>
              {fbIndex + 1} / {todayFachbegriffe.length}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 20 }}>
          {todayFachbegriffe.map((_, i) => (
            <div key={i} style={{
              width: i === fbIndex ? 32 : 12, height: 8, borderRadius: 4,
              background: i < fbIndex ? '#10b981' : i === fbIndex ? '#f59e0b' : 'var(--bg3)',
              transition: 'all .3s',
            }}/>
          ))}
        </div>

        <div
          className={`dc-flip-card${fbFlipped ? ' flipped' : ''}`}
          onClick={() => setFbFlipped(f => !f)}
        >
          <div className="dc-flip-inner">
            {/* FACE AVANT */}
            <div className="dc-flip-front">
              <div style={{ fontSize: '.7rem', color: 'var(--ink3)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '.5px', marginBottom: 16 }}>
                Begriff
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: "'Fraunces',serif", fontSize: '1.7rem',
                  color: 'var(--ink)', lineHeight: 1.3, fontWeight: 600, textAlign: 'center',
                }}>{fb.term}</span>
                <button
                  onClick={(e) => { e.stopPropagation(); speak(fb.term) }}
                  style={{
                    background: 'rgba(59,130,246,.15)',
                    border: '1px solid rgba(59,130,246,.35)',
                    borderRadius: '50%',
                    width: 40, height: 40,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', padding: 0, fontSize: '1.1rem',
                    transition: 'transform .15s ease',
                  }}
                  onMouseDown={e => e.currentTarget.style.transform = 'scale(.9)'}
                  onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                  title="Aussprache anhören"
                >🔊</button>
              </div>
              <div style={{ marginTop: 20, fontSize: '.75rem', color: 'var(--ink3)' }}>
                👆 Tippen zum Aufdecken
              </div>
            </div>
            {/* FACE ARRIÈRE */}
            <div className="dc-flip-back">
              <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.7)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '.5px', marginBottom: 14 }}>
                Definition
              </div>
              <div style={{
                fontFamily: "'Fraunces',serif", fontSize: '.95rem',
                color: 'white', lineHeight: 1.55, textAlign: 'center', fontWeight: 400,
              }}>{fb.def}</div>
              <div style={{ marginTop: 14, fontSize: '.7rem', color: 'rgba(255,255,255,.55)' }}>
                👆 Tippen zum Umdrehen
              </div>
            </div>
          </div>
        </div>

        <button onClick={() => {
          if (isLast) {
            if (quizQuestions.length > 0) {
              setPhase('quiz')
            } else {
              completeChallenge(1)
              setPhase('result')
            }
          } else {
            setFbIndex(i => i + 1)
            setFbFlipped(false)
          }
        }} style={{
          width: '100%', padding: '14px', borderRadius: 14,
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          color: 'white', border: 'none', fontSize: '1rem', fontWeight: 700,
          cursor: 'pointer',
        }}>
          {isLast ? (quizQuestions.length > 0 ? 'Weiter zum Quiz →' : 'Fertig 🏆') : 'Nächster Begriff →'}
        </button>
      </div>
    )
  }

  // QUIZ
  if (phase === 'quiz') {
    const q = quizQuestions[qIdx]
    if (!q) {
      return (
        <div style={{ padding: 30, textAlign: 'center' }}>
          <p style={{ color: 'var(--ink2)' }}>Kein Quiz verfügbar.</p>
          <button onClick={() => { completeChallenge(1); setPhase('result') }} style={{
            marginTop: 16, padding: '12px 28px', borderRadius: 999,
            background: '#10b981', color: 'white', border: 'none', fontWeight: 700, cursor: 'pointer',
          }}>Zum Ergebnis →</button>
        </div>
      )
    }

    const isCorrect = selected === q.answer

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
      if (qIdx < quizQuestions.length - 1) {
        setQIdx(qIdx + 1)
        setSelected(null)
        setAnswered(false)
        setShowFeedback(false)
      } else {
        const score = correctCount / quizQuestions.length
        completeChallenge(score)
        setPhase('result')
      }
    }

    return (
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '10px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          marginBottom: 16, padding: '10px 14px',
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 12,
        }}>
          <span style={{ fontSize: '1.5rem' }}>❓</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '.7rem', color: 'var(--ink3)', fontWeight: 700, textTransform: 'uppercase' }}>
              Schritt 3 · Quiz zu gestern
            </div>
            <div style={{ fontSize: '.85rem', color: 'var(--ink)', fontWeight: 600 }}>
              {yesterdayLesson?.lessonName}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 20 }}>
          {quizQuestions.map((_, i) => (
            <div key={i} style={{
              width: i === qIdx ? 32 : 12, height: 8, borderRadius: 4,
              background: i < qIdx ? '#10b981' : i === qIdx ? '#f59e0b' : 'var(--bg3)',
            }}/>
          ))}
        </div>

        <div style={{
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 20, padding: '24px 20px', marginBottom: 20,
        }}>
          <div style={{ fontSize: '.75rem', color: 'var(--ink3)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 10 }}>
            Frage {qIdx + 1} / {quizQuestions.length}
          </div>
          <div style={{ fontFamily: "'Fraunces',serif", fontSize: '1.25rem', color: 'var(--ink)', lineHeight: 1.4, fontWeight: 600 }}>
            {q.q}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {q.options.map((opt, i) => {
            const isSel = selected === i
            const isAns = i === q.answer
            let bg = 'var(--card)', border = 'var(--border)'
            if (answered) {
              if (isAns) { bg = '#10b98122'; border = '#10b981' }
              else if (isSel) { bg = '#ef444422'; border = '#ef4444' }
            } else if (isSel) {
              bg = 'var(--teal-dim)'; border = 'var(--teal)'
            }
            return (
              <button key={i} onClick={() => handleSelect(i)} disabled={answered} style={{
                padding: '16px 18px', borderRadius: 14, textAlign: 'left',
                background: bg, border: `2px solid ${border}`, color: 'var(--ink)',
                cursor: answered ? 'default' : 'pointer',
                fontSize: '.95rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: 'var(--bg3)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '.85rem', fontWeight: 700, flexShrink: 0,
                }}>{String.fromCharCode(65 + i)}</span>
                <span style={{ flex: 1 }}>{opt}</span>
                {answered && isAns && <span>✅</span>}
                {answered && isSel && !isAns && <span>❌</span>}
              </button>
            )
          })}
        </div>

        {showFeedback && (
          <div style={{
            marginTop: 20, padding: '16px 18px', borderRadius: 14,
            background: isCorrect ? '#10b98115' : '#ef444415',
            border: `1.5px solid ${isCorrect ? '#10b981' : '#ef4444'}`,
          }}>
            <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 6, color: isCorrect ? '#10b981' : '#ef4444' }}>
              {isCorrect ? '🎉 Richtig!' : '❌ Falsch'}
            </div>
            {q.explanation && (
              <div style={{ fontSize: '.88rem', color: 'var(--ink2)', lineHeight: 1.5 }}>{q.explanation}</div>
            )}
            <button onClick={handleNext} style={{
              marginTop: 14, padding: '12px 32px', borderRadius: 999,
              background: isCorrect ? '#10b981' : '#ef4444',
              color: 'white', border: 'none', fontWeight: 700, cursor: 'pointer',
            }}>
              {qIdx < quizQuestions.length - 1 ? 'Weiter →' : 'Ergebnis 🏆'}
            </button>
          </div>
        )}
      </div>
    )
  }


  // REVISION (relire la leçon d'hier avant de refaire le quiz)
  if (phase === 'revision') {
    const yesterdayHTML = yesterdayLesson
      ? (LESSON_CONTENT[yesterdayLesson.themeId]?.[yesterdayLesson.lessonName]?.() || '')
      : ''
    return (
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '10px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          marginBottom: 16, padding: '10px 14px',
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 12,
        }}>
          <span style={{ fontSize: '1.5rem' }}>🔁</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '.7rem', color: 'var(--ink3)', fontWeight: 700, textTransform: 'uppercase' }}>
              Wiederholung
            </div>
            <div style={{ fontSize: '.85rem', color: 'var(--ink)', fontWeight: 600 }}>
              {yesterdayLesson?.lessonName}
            </div>
          </div>
        </div>

        <div style={{
          padding: '10px 14px', marginBottom: 16, borderRadius: 12,
          background: 'rgba(251,191,36,.1)', border: '1px solid rgba(251,191,36,.25)',
          fontSize: '.85rem', color: 'var(--ink2)',
        }}>
          💡 Lies die Lektion noch einmal in Ruhe — danach machst du das Quiz erneut!
        </div>

        <div dangerouslySetInnerHTML={{ __html: yesterdayHTML }} style={{ marginBottom: 24 }} />

        <div style={{ position: 'sticky', bottom: 16, padding: '0 0 8px', display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => setPhase('quiz')} style={{
            padding: '14px 36px', borderRadius: 999,
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            color: 'white', border: 'none', fontSize: '1rem', fontWeight: 700,
            cursor: 'pointer', boxShadow: '0 6px 20px rgba(59,130,246,.4)',
          }}>
            Verstanden! Quiz starten →
          </button>
        </div>
      </div>
    )
  }

  // RESULT
  const hasQuiz = quizQuestions.length > 0
  const finalScore = hasQuiz ? Math.round(correctCount / quizQuestions.length * 100) : 100
  const passed = finalScore >= 80
  const tomorrow = getLessonForDay(dayIndex + 1)

  return (
    <div style={{
      minHeight: '70vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center',
    }}>
            <div style={{ fontSize: "6rem", marginBottom: 16 }}>{passed ? "🏆" : "💪"}</div>
      <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: '2.2rem', color: 'var(--ink)', marginBottom: 10 }}>
        {hasQuiz ? (passed ? 'Champion!' : 'Nicht schlecht!') : 'Super Start!'}
      </h1>
      <p style={{ color: 'var(--ink2)', marginBottom: 20, fontSize: '1rem', maxWidth: 400 }}>
        {!hasQuiz
          ? 'Du hast deinen ersten Tag gemeistert. Morgen geht es weiter!'
          : (passed ? 'Du hast deine tägliche Challenge gemeistert!' : 'Komm morgen wieder!')}
      </p>

      {hasQuiz && (
        <div style={{
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 16, padding: '20px 28px', marginBottom: 16,
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: passed ? '#10b981' : '#f59e0b' }}>
            {finalScore}%
          </div>
          <div style={{ fontSize: '.85rem', color: 'var(--ink3)' }}>
            {correctCount} / {quizQuestions.length} richtig
          </div>
        </div>
      )}

      {tomorrow && (
        <div style={{
          padding: '10px 18px', borderRadius: 12,
          background: 'rgba(96,165,250,.1)', border: '1px solid rgba(96,165,250,.25)',
          fontSize: '.85rem', color: 'var(--ink2)', maxWidth: 360,
        }}>
          📅 Morgen: <strong>{tomorrow.lessonName}</strong>
        </div>
      )}

      {hasQuiz && !passed && (
        <button onClick={() => {
          setQIdx(0)
          setSelected(null)
          setAnswered(false)
          setShowFeedback(false)
          setCorrectCount(0)
          setCombo(0)
          setPhase('revision')
        }} style={{
          marginTop: 20, padding: '14px 32px', borderRadius: 999,
          background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
          color: 'white', border: 'none', fontSize: '.95rem', fontWeight: 700,
          cursor: 'pointer', boxShadow: '0 6px 20px rgba(239,68,68,.3)',
        }}>
          📖 Lektion wiederholen
        </button>
      )}

      <button onClick={() => nav('home')} style={{
        marginTop: 16, padding: '14px 36px', borderRadius: 999,
        background: hasQuiz && !passed ? 'var(--card)' : 'linear-gradient(135deg, #10b981, #059669)',
        color: hasQuiz && !passed ? 'var(--ink2)' : 'white',
        border: hasQuiz && !passed ? '1px solid var(--border)' : 'none',
        fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
        boxShadow: hasQuiz && !passed ? 'none' : '0 6px 20px rgba(16,185,129,.4)',
      }}>
        Alles klar! ✓
      </button>
    </div>
  )
}
