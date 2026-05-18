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


function StarBurst() {
  const stars = Array.from({ length: 8 })
  return (
    <div style={{
      position: 'fixed', top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none', zIndex: 9999,
      width: 0, height: 0,
    }}>
      {stars.map((_, i) => {
        const angle = (360 / stars.length) * i
        const distance = 80 + Math.random() * 40
        const dx = Math.cos((angle * Math.PI) / 180) * distance
        const dy = Math.sin((angle * Math.PI) / 180) * distance
        const emojis = ['⭐', '✨', '🌟', '💫']
        const emoji = emojis[i % emojis.length]
        return (
          <div key={i} style={{
            position: 'absolute',
            fontSize: '1.8rem',
            animation: `starFly_${i} .9s cubic-bezier(.2,.8,.4,1) forwards`,
            top: 0, left: 0,
          }}>
            {emoji}
            <style>{`
              @keyframes starFly_${i} {
                0%   { transform: translate(0, 0) scale(.3) rotate(0deg); opacity: 1; }
                30%  { transform: translate(${dx * 0.6}px, ${dy * 0.6}px) scale(1.3) rotate(${180 + i * 45}deg); opacity: 1; }
                100% { transform: translate(${dx * 1.5}px, ${dy * 1.5 + 60}px) scale(.4) rotate(${360 + i * 90}deg); opacity: 0; }
              }
            `}</style>
          </div>
        )
      })}
    </div>
  )
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
    userName,
    quizOrigin,
    goBack,
  } = useContext(AppContext)

  const rawQuestions = quizState?.questions || []
  const level = quizState?.level ?? 0
  const themeId = quizState?.themeId

  const questions = useMemo(() => prepareQuestions(rawQuestions), [quizState])

  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [combo, setCombo] = useState(0)
  const [showComboMsg, setShowComboMsg] = useState(false)
  const [shakeWrong, setShakeWrong] = useState(false)
  const [starBurst, setStarBurst] = useState(false)
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
        <button onClick={() => goBack()} style={btnStyle}>← Zurück</button>
      </div>
    )
  }

  const q = questions[idx]
  const total = questions.length
  const levelNames = ['Niveau 1 – Basis', 'Niveau 2 – Fortgeschritten', 'Niveau 3 – Experte', 'Niveau 4 – Meister', 'Niveau 5 – Champion']

  // Vérifie si le niveau suivant existe
  const allQ = QUIZZES[themeId] || []
  const totalLevels = Math.ceil(allQ.length / 12)
  const hasNextLevel = level + 1 < totalLevels

  function handleSelect(i) {
    if (selected !== null) return
    setSelected(i)
    setShowExp(true)
  }

  function handleNext() {
    const correct = selected === q.correct
    const newResults = [...results, { correct }]

    // Combo logic
    if (correct) {
      setCombo(c => {
        const newCombo = c + 1
        if (newCombo >= 3) {
          setShowComboMsg(true)
          setTimeout(() => setShowComboMsg(false), 1800)
        }
        return newCombo
      })
    } else {
      setCombo(0)
      setShakeWrong(true)
      setTimeout(() => setShakeWrong(false), 500)
    }
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
        {/* Card résultat ÉPIQUE */}
        <div style={{
          background: pct >= 90
            ? 'linear-gradient(135deg, rgba(251,191,36,.15), rgba(245,158,11,.05))'
            : passed
              ? 'linear-gradient(135deg, rgba(34,197,94,.15), rgba(20,184,166,.05))'
              : 'linear-gradient(135deg, rgba(167,139,250,.12), rgba(96,165,250,.05))',
          border: `2px solid ${pct >= 90 ? '#fbbf24' : passed ? 'var(--green)' : 'var(--teal)'}`,
          borderRadius: 24, padding: '36px 28px 28px', textAlign: 'center', marginBottom: 20,
          position: 'relative', overflow: 'hidden',
          animation: 'resultCardIn .5s cubic-bezier(.34,1.56,.64,1)',
        }}>
          {/* CONFETTIS si >= 80% */}
          {pct >= 80 && (
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '100%',
              pointerEvents: 'none', overflow: 'hidden',
            }}>
              {Array.from({ length: 20 }).map((_, i) => {
                const colors = ['#fbbf24', '#22c55e', '#60a5fa', '#fb7185', '#a78bfa', '#f59e0b']
                const color = colors[i % colors.length]
                const left = Math.random() * 100
                const delay = Math.random() * 0.8
                const duration = 1.5 + Math.random() * 1
                return (
                  <div key={i} style={{
                    position: 'absolute', top: '-10px', left: `${left}%`,
                    width: 8, height: 12, background: color,
                    borderRadius: 2,
                    animation: `confettiFall ${duration}s ${delay}s ease-in forwards`,
                  }} />
                )
              })}
            </div>
          )}

          {/* Icône géante animée */}
          <div style={{
            fontSize: '4rem', marginBottom: 10,
            animation: 'resultIconBounce .8s ease',
            position: 'relative', zIndex: 2,
          }}>
            {pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '💪' : '📚'}
          </div>

          {/* Score géant qui s'anime */}
          <div style={{
            fontFamily: 'Fraunces, serif', fontSize: '3.2rem',
            color: pct >= 90 ? '#f59e0b' : passed ? 'var(--green)' : 'var(--teal)',
            marginBottom: 4, fontWeight: 700, lineHeight: 1,
            animation: 'scoreNumberPop .9s cubic-bezier(.34,1.56,.64,1)',
            position: 'relative', zIndex: 2,
          }}>{pct}%</div>

          {/* Stars selon score */}
          <div style={{
            fontSize: '1.3rem', marginBottom: 14, letterSpacing: 4,
            position: 'relative', zIndex: 2,
          }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                opacity: pct >= (i + 1) * 33 ? 1 : 0.25,
                filter: pct >= (i + 1) * 33 ? 'none' : 'grayscale(1)',
                display: 'inline-block',
                animation: pct >= (i + 1) * 33 ? `starPop .5s ${0.3 + i * 0.15}s both` : 'none',
              }}>⭐</span>
            ))}
          </div>

          {/* Message personnalisé épique */}
          <div style={{
            fontFamily: 'Fraunces, serif', fontSize: '1.3rem',
            fontWeight: 700, color: 'var(--ink)', marginBottom: 6,
            position: 'relative', zIndex: 2,
            animation: 'resultMsgIn .6s .2s both',
          }}>
            {pct >= 90
              ? `${userName ? userName + ', ' : ''}du bist ein Champion! 🏆`
              : pct >= 70
                ? `${userName ? userName + ', ' : ''}du hast es geschafft! 🎉`
                : pct >= 50
                  ? `Fast geschafft${userName ? ', ' + userName : ''}! 💪`
                  : `Nicht aufgeben${userName ? ', ' + userName : ''}! 📚`
            }
          </div>

          <div style={{
            fontSize: '.85rem', color: 'var(--ink2)', marginBottom: 22,
            position: 'relative', zIndex: 2,
          }}>
            {correctCount} / {total} richtige Antworten · {levelNames[level]}
          </div>

          {!passed && (
            <div style={{
              background: 'rgba(167,139,250,.1)', border: '1px solid rgba(167,139,250,.3)',
              borderRadius: 12, padding: '12px 16px', marginBottom: 18,
              fontSize: '.82rem', color: 'var(--purple)',
              position: 'relative', zIndex: 2,
            }}>
              💡 Mindestens 70% erforderlich, um das nächste Niveau freizuschalten.
            </div>
          )}

          {/* Boutons */}
          <div style={{
            display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap',
            position: 'relative', zIndex: 2,
          }}>
            <button onClick={() => goBack()} style={{
              ...btnStyle, background: 'var(--bg3)', color: 'var(--ink2)',
            }}>
              ← Thema
            </button>

            <button onClick={() => {
              setIdx(0); setSelected(null); setShowExp(false)
              setResults([]); setFinished(false); setFinalScore(0)
              setCombo(0)
            }} style={{ ...btnStyle, background: 'var(--card)', color: 'var(--ink)' }}>
              🔄 Wiederholen
            </button>

            {passed && hasNextLevel && (
              <button
                onClick={() => startQuiz(themeId, level + 1, quizOrigin)}
                style={{
                  ...btnStyle,
                  background: 'linear-gradient(135deg, var(--teal), #0f766e)',
                  color: 'white', fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(20,184,166,.4)',
                }}
              >
                {levelNames[level + 1]} →
              </button>
            )}
          </div>

          <style>{`
            @keyframes resultCardIn {
              from { opacity: 0; transform: scale(.92) translateY(20px); }
              to   { opacity: 1; transform: scale(1) translateY(0); }
            }
            @keyframes resultIconBounce {
              0%   { transform: scale(.3) rotate(-20deg); opacity: 0; }
              50%  { transform: scale(1.2) rotate(10deg); }
              100% { transform: scale(1) rotate(0); opacity: 1; }
            }
            @keyframes scoreNumberPop {
              0%   { transform: scale(.5); opacity: 0; }
              60%  { transform: scale(1.15); opacity: 1; }
              100% { transform: scale(1); }
            }
            @keyframes starPop {
              0%   { transform: scale(0) rotate(-180deg); }
              60%  { transform: scale(1.3) rotate(15deg); }
              100% { transform: scale(1) rotate(0); }
            }
            @keyframes resultMsgIn {
              from { opacity: 0; transform: translateY(10px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            @keyframes confettiFall {
              0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
              100% { transform: translateY(400px) rotate(720deg); opacity: 0; }
            }
          `}</style>
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
      {starBurst && <StarBurst />}

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <button onClick={() => goBack()} style={{
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
            {selected === q.correct
              ? `✅ ${(['Genau', 'Stark', 'Perfekt', 'Top', 'Bravo'][Math.floor(Math.random() * 5)])}${userName ? ', ' + userName : ''}!`
              : `❌ Schade${userName ? ', ' + userName : ''}! Beim nächsten Mal! 💪`}
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
