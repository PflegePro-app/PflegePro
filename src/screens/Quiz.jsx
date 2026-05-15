import { useContext, useState, useMemo } from 'react'
import { AppContext } from '../App'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function prepareQuestions(questions) {
  return questions.map(q => {
    const correctText = q.opts[q.correct]
    const shuffledOpts = shuffle(q.opts)
    const newCorrect = shuffledOpts.indexOf(correctText)
    return { ...q, opts: shuffledOpts, correct: newCorrect }
  })
}

export default function Quiz() {
  const {
    currentTheme,
    quizState,
    nav,
    progress,
    saveProgress,
    startQuiz,
    QUIZZES,
  } = useContext(AppContext)

  const rawQuestions = quizState?.questions || []
  const level = quizState?.level ?? 0
  const themeId = quizState?.themeId

  const questions = useMemo(() => prepareQuestions(rawQuestions), [quizState])

  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showExp, setShowExp] = useState(false)
  const [results, setResults] = useState([])
  const [finished, setFinished] = useState(false)
  const [finalScore, setFinalScore] = useState(0)

  if (!quizState || questions.length === 0) {
    return (
      <div style={{ padding: 30, color: 'var(--ink)', textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', marginBottom: 12 }}>⚠️</div>
        Keine Fragen verfügbar.
        <br /><br />
        <button onClick={() => nav('lektion')} style={btnStyle}>← Zurück</button>
      </div>
    )
  }

  const q = questions[idx]
  const total = questions.length
  const levelNames = ['Niveau 1 – Basis', 'Niveau 2 – Fortgeschritten', 'Niveau 3 – Experte']

  // Vérifie si le niveau suivant existe
  const allQ = QUIZZES[themeId] || []
  const totalLevels = Math.min(3, Math.ceil(allQ.length / 3))
  const hasNextLevel = level + 1 < totalLevels

  function handleSelect(i) {
    if (selected !== null) return
    setSelected(i)
    setShowExp(true)
  }

  function handleNext() {
    const correct = selected === q.correct
    const newResults = [...results, { correct }]
    setResults(newResults)

    if (idx + 1 >= total) {
      const correctCount = newResults.filter(r => r.correct).length
      const score = correctCount / total
      setFinalScore(score)
      setFinished(true)

      const newProgress = { ...progress }
      if (!newProgress.levels) newProgress.levels = {}
      if (!newProgress.levels[themeId]) newProgress.levels[themeId] = { levelScores: [] }
      const ls = [...(newProgress.levels[themeId].levelScores || [])]
      ls[level] = Math.max(ls[level] || 0, score)
      newProgress.levels[themeId].levelScores = ls
      newProgress.quizCount = (newProgress.quizCount || 0) + 1
      if (score >= 0.9 && level === 2) {
        newProgress.mastered = (newProgress.mastered || 0) + 1
      }
      saveProgress(newProgress)
    } else {
      setIdx(idx + 1)
      setSelected(null)
      setShowExp(false)
    }
  }

  // — Écran résultat —
  if (finished) {
    const pct = Math.round(finalScore * 100)
    const passed = pct >= 70
    const correctCount = results.filter(r => r.correct).length

    return (
      <div style={{ maxWidth: "100%" }}>
        <div style={{
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 20, padding: '36px 28px', textAlign: 'center', marginBottom: 20,
        }}>
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>
            {pct >= 90 ? '🏆' : pct >= 70 ? '✅' : '📚'}
          </div>
          <div style={{
            fontFamily: 'Fraunces, serif', fontSize: '2.2rem',
            color: passed ? 'var(--green)' : 'var(--teal)', marginBottom: 6,
          }}>
            {pct}%
          </div>
          <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--ink)', marginBottom: 4 }}>
            {passed ? 'Bestanden! 🎉' : 'Nicht bestanden'}
          </div>
          <div style={{ fontSize: '.82rem', color: 'var(--ink2)', marginBottom: 24 }}>
            {correctCount} / {total} richtige Antworten · {levelNames[level]}
          </div>

          {!passed && (
            <div style={{
              background: 'var(--rose-dim)', border: '1px solid rgba(251,113,133,.2)',
              borderRadius: 12, padding: '12px 16px', marginBottom: 20,
              fontSize: '.8rem', color: 'var(--rose)',
            }}>
              Mindestens 70% erforderlich um das nächste Niveau freizuschalten.
            </div>
          )}

          {/* Boutons */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => nav('lektion')} style={{
              ...btnStyle, background: 'var(--bg3)', color: 'var(--ink2)',
            }}>
              ← Thema
            </button>

            <button onClick={() => {
              setIdx(0); setSelected(null); setShowExp(false)
              setResults([]); setFinished(false); setFinalScore(0)
            }} style={{ ...btnStyle, background: 'var(--card)', color: 'var(--ink)' }}>
              🔄 Wiederholen
            </button>

            {/* Niveau suivant si réussi */}
            {passed && hasNextLevel && (
              <button
                onClick={() => startQuiz(themeId, level + 1)}
                style={{ ...btnStyle, background: 'var(--teal)', color: 'white' }}
              >
                {levelNames[level + 1]} →
              </button>
            )}
          </div>
        </div>

        {/* Résumé */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {questions.map((qu, i) => (
            <div key={i} style={{
              background: 'var(--card)',
              border: `1px solid ${results[i]?.correct ? 'rgba(74,222,128,.25)' : 'rgba(251,113,133,.25)'}`,
              borderRadius: 10, padding: '10px 14px',
              display: 'flex', alignItems: 'flex-start', gap: 10,
            }}>
              <span style={{ fontSize: '1rem', flexShrink: 0 }}>
                {results[i]?.correct ? '✅' : '❌'}
              </span>
              <span style={{ fontSize: '.78rem', color: 'var(--ink)', lineHeight: 1.4 }}>
                {qu.q}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // — Écran question —
  return (
    <div style={{ maxWidth: "100%" }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <button onClick={() => nav('lektion')} style={{
          ...btnStyle, padding: '6px 12px',
          background: 'var(--bg3)', color: 'var(--ink2)', fontSize: '.75rem',
        }}>
          ✕
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ height: 6, background: 'var(--bg3)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{
              height: '100%', borderRadius: 3, background: 'var(--teal)',
              width: `${(idx / total) * 100}%`, transition: 'width .3s',
            }} />
          </div>
          <div style={{ fontSize: '.7rem', color: 'var(--ink3)', marginTop: 4, textAlign: 'right' }}>
            {idx + 1} / {total}
          </div>
        </div>
      </div>

      {q.lesson && (
        <div style={{
          fontSize: '.68rem', fontWeight: 700, letterSpacing: '.5px',
          textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 10,
        }}>
          📖 {q.lesson}
        </div>
      )}

      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 16, padding: '22px 20px', marginBottom: 16,
      }}>
        <div style={{
          fontFamily: 'Fraunces, serif', fontSize: '1.05rem',
          color: 'var(--ink)', lineHeight: 1.5,
        }}>
          {q.q}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
        {q.opts.map((opt, i) => {
          let bg = 'var(--card)'
          let border = 'var(--border)'
          let color = 'var(--ink)'

          if (selected !== null) {
            if (i === q.correct) {
              bg = 'var(--green-dim)'; border = 'rgba(74,222,128,.4)'; color = 'var(--green)'
            } else if (i === selected) {
              bg = 'var(--rose-dim)'; border = 'rgba(251,113,133,.4)'; color = 'var(--rose)'
            } else {
              color = 'var(--ink3)'
            }
          }

          return (
            <div key={i} onClick={() => handleSelect(i)} style={{
              background: bg, border: `1px solid ${border}`,
              borderRadius: 12, padding: '14px 16px',
              cursor: selected === null ? 'pointer' : 'default',
              display: 'flex', alignItems: 'center', gap: 12,
              transition: 'all .2s', color,
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                background: selected === null ? 'var(--bg3)'
                  : i === q.correct ? 'rgba(74,222,128,.2)'
                  : i === selected ? 'rgba(251,113,133,.2)' : 'var(--bg3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '.75rem', fontWeight: 700,
              }}>
                {selected !== null
                  ? (i === q.correct ? '✓' : i === selected ? '✗' : ['A','B','C','D'][i])
                  : ['A','B','C','D'][i]}
              </div>
              <span style={{ fontSize: '.85rem', fontWeight: 500, lineHeight: 1.4 }}>{opt}</span>
            </div>
          )
        })}
      </div>

      {showExp && q.explanation && (
        <div style={{
          background: selected === q.correct ? 'var(--green-dim)' : 'var(--rose-dim)',
          border: `1px solid ${selected === q.correct ? 'rgba(74,222,128,.25)' : 'rgba(251,113,133,.25)'}`,
          borderRadius: 12, padding: '14px 16px', marginBottom: 16,
          fontSize: '.82rem', color: 'var(--ink)', lineHeight: 1.5,
        }}>
          <span style={{ fontWeight: 700, marginRight: 6 }}>
            {selected === q.correct ? '✅ Richtig!' : '❌ Falsch!'}
          </span>
          {q.explanation}
        </div>
      )}

      {showExp && (
        <button onClick={handleNext} style={{
          ...btnStyle, width: '100%', background: 'var(--teal)', color: 'white',
          fontSize: '.9rem', padding: '14px',
        }}>
          {idx + 1 >= total ? '📊 Ergebnis anzeigen' : 'Weiter →'}
        </button>
      )}
    </div>
  )
}

const btnStyle = {
  border: '1px solid var(--border)',
  borderRadius: 10, padding: '8px 16px',
  cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
  fontWeight: 600, fontSize: '.82rem',
  background: 'var(--card)', color: 'var(--ink)',
}
