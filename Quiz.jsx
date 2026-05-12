import React, { useContext, useState, useEffect, useCallback } from 'react'
import { AppContext } from '../App.jsx'

const PASS_THRESHOLD = 0.7
const LEVEL_SIZE = 7

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function getLevelName(l) {
  return ['Niveau 1 – Basis', 'Niveau 2 – Fortgeschritten', 'Niveau 3 – Experte'][l] || `Niveau ${l+1}`
}

function getLevelLabel(l) {
  return ['🟢', '🟡', '🔴'][l] || '⭐'
}

function getQuestionsForLevel(questions, level) {
  return questions.filter(q => q.level === level + 1)
}

export default function Quiz() {
  const { quizState, setQuizState, progress, saveProgress, openDetail, nav, THEMES, QUIZZES, startQuiz } = useContext(AppContext)

  const [phase, setPhase] = useState('levelSelect') // levelSelect | question | results
  const [activeLevel, setActiveLevel] = useState(null)
  const [questions, setQuestions] = useState([])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(null) // index réponse choisie ou null
  const [wrongLessons, setWrongLessons] = useState([])

  const t = quizState ? THEMES.find(th => th.id === quizState.themeId) : null
  const allQuizzes = t ? (QUIZZES[t.id] || []) : []
  const totalLevels = Math.min(3, Math.ceil(allQuizzes.length / LEVEL_SIZE))

  // Récupérer les scores des niveaux depuis le progress
  const getLevelScores = () => {
    return progress.levels?.[t?.id] || {}
  }

  const isLevelUnlocked = (lvl) => {
    if (lvl === 0) return true
    const scores = getLevelScores()
    return (scores[lvl-1] ?? -1) >= PASS_THRESHOLD
  }

  const startLevel = (lvl) => {
    const qs = shuffle(getQuestionsForLevel(allQuizzes, lvl))
    setActiveLevel(lvl)
    setQuestions(qs)
    setIdx(0)
    setScore(0)
    setAnswered(null)
    setWrongLessons([])
    setPhase('question')
  }

  const handleAnswer = (i) => {
    if (answered !== null) return
    setAnswered(i)
    const q = questions[idx]
    if (i === q.correct) {
      setScore(s => s + 1)
    } else {
      setWrongLessons(wl => {
        if (!wl.find(x => x.lesson === q.lesson)) return [...wl, { lesson: q.lesson, theme: q.theme }]
        return wl
      })
    }
  }

  const next = () => {
    if (idx + 1 >= questions.length) {
      finishLevel()
    } else {
      setIdx(i => i + 1)
      setAnswered(null)
    }
  }

  const finishLevel = () => {
    const total = questions.length
    const pct = score / total
    // Sauvegarder le score
    const newP = { ...progress }
    if (!newP.levels) newP.levels = {}
    if (!newP.levels[t.id]) newP.levels[t.id] = {}
    newP.levels[t.id][activeLevel] = pct
    newP.quizDone = (newP.quizDone || 0) + 1
    newP.scores = [...(newP.scores || []), Math.round(pct*100)]
    // Maîtrise si tous les niveaux passés
    const allPassed = Array.from({length:totalLevels}, (_,i) => newP.levels[t.id][i] >= PASS_THRESHOLD).every(Boolean)
    if (allPassed && !newP.mastered?.includes(t.id)) {
      newP.mastered = [...(newP.mastered || []), t.id]
    }
    saveProgress(newP)
    setPhase('results')
  }

  if (!t) return null

  // ── LEVEL SELECT ──
  if (phase === 'levelSelect') {
    const levelScores = getLevelScores()
    return (
      <div style={{ maxWidth:500, margin:'0 auto', padding:'8px 0' }}>
        <div style={{ fontFamily:'Fraunces,serif', fontSize:'1.2rem', color:'var(--ink)', marginBottom:6 }}>
          🎯 Niveau wählen
        </div>
        <div style={{ fontSize:'.82rem', color:'var(--ink2)', marginBottom:24 }}>
          Schließe Niveau 1 mit 70%+ ab, um Niveau 2 freizuschalten.
        </div>
        {Array.from({length: totalLevels}, (_, lvl) => {
          const unlocked = isLevelUnlocked(lvl)
          const sc = levelScores[lvl]
          const pct = sc !== undefined ? Math.round(sc * 100) : null
          const passed = pct !== null && pct >= 70
          const qs = getQuestionsForLevel(allQuizzes, lvl)
          return (
            <div key={lvl}
              className={`level-card${unlocked ? '' : ' locked'}`}
              onClick={() => unlocked && startLevel(lvl)}
            >
              <div className="level-card-left">
                <div className="level-badge" style={{
                  background: unlocked ? (passed ? 'var(--green-dim)' : 'var(--teal-dim)') : 'var(--bg3)',
                  color: unlocked ? (passed ? 'var(--green)' : 'var(--teal)') : 'var(--ink3)'
                }}>
                  {unlocked ? getLevelLabel(lvl) : '🔒'}
                </div>
                <div>
                  <div className="level-name">{getLevelName(lvl)}</div>
                  <div className="level-sub">{qs.length} Fragen</div>
                </div>
              </div>
              <div className="level-right">
                {pct !== null
                  ? <div className={`level-score-ring${passed ? ' passed' : ''}`}>{pct}%</div>
                  : unlocked ? <span style={{ color:'var(--ink3)', fontSize:'1.1rem' }}>›</span> : null
                }
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  // ── QUESTION ──
  if (phase === 'question') {
    const q = questions[idx]
    return (
      <div style={{ maxWidth:600, margin:'0 auto' }}>
        {/* Progression */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16 }}>
          <span style={{ fontSize:'.78rem', color:'var(--ink2)' }}>{idx+1}/{questions.length}</span>
          <div style={{ flex:1, height:4, background:'var(--bg3)', borderRadius:2, margin:'0 12px', overflow:'hidden' }}>
            <div style={{ height:'100%', background:'var(--teal)', width:`${((idx+1)/questions.length)*100}%`, borderRadius:2, transition:'width .3s' }}/>
          </div>
          <span style={{ fontSize:'.78rem', color:'var(--teal)', fontWeight:700 }}>{getLevelName(activeLevel)}</span>
        </div>

        {/* Question */}
        <div className="q-box" style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:16, padding:'20px 22px', marginBottom:14 }}>
          <div style={{ fontSize:'.7rem', fontWeight:700, color:`var(--${t.col})`, letterSpacing:'.7px', textTransform:'uppercase', marginBottom:10 }}>
            {t.name}
          </div>
          <div style={{ fontFamily:'Fraunces,serif', fontSize:'1.1rem', color:'var(--ink)', lineHeight:1.4 }}>
            {q.q}
          </div>
        </div>

        {/* Options */}
        {q.opts.map((opt, i) => {
          let bg = 'var(--card)'
          let border = '1px solid var(--border)'
          let color = 'var(--ink)'
          if (answered !== null) {
            if (i === q.correct) { bg = 'rgba(74,222,128,.1)'; border = '2px solid var(--green)'; color = 'var(--green)' }
            else if (i === answered) { bg = 'rgba(248,113,113,.1)'; border = '2px solid var(--rose)'; color = 'var(--rose)' }
          }
          const letter = ['A','B','C','D'][i]
          return (
            <div key={i} className="opt"
              onClick={() => handleAnswer(i)}
              style={{ display:'flex', alignItems:'center', gap:14, padding:'13px 16px', background:bg, border, borderRadius:12, marginBottom:8, cursor: answered === null ? 'pointer' : 'default', transition:'all .2s', color }}
            >
              <div style={{ width:28, height:28, borderRadius:8, background: answered !== null && i === q.correct ? 'var(--green)' : answered === i ? 'var(--rose)' : 'var(--bg3)', color: answered !== null && (i === q.correct || i === answered) ? 'white' : 'var(--ink2)', fontWeight:700, fontSize:'.8rem', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                {letter}
              </div>
              <span style={{ fontSize:'.88rem' }}>{opt}</span>
            </div>
          )
        })}

        {/* Explication */}
        {answered !== null && (
          <div style={{ padding:'14px 16px', borderRadius:12, background: answered === q.correct ? 'rgba(74,222,128,.08)' : 'rgba(248,113,113,.08)', border:`1px solid ${answered === q.correct ? 'rgba(74,222,128,.2)' : 'rgba(248,113,113,.2)'}`, marginTop:8 }}>
            <div style={{ fontWeight:700, color: answered === q.correct ? 'var(--green)' : 'var(--rose)', marginBottom:6, fontSize:'.82rem' }}>
              {answered === q.correct ? '✓ Richtig!' : '✗ Falsch'}
            </div>
            <div style={{ fontSize:'.82rem', color:'var(--ink2)', lineHeight:1.6 }}>{q.explanation}</div>
          </div>
        )}

        {/* Bouton suivant */}
        {answered !== null && (
          <button onClick={next}
            style={{ width:'100%', padding:'14px', borderRadius:12, border:'none', background:'var(--teal)', color:'var(--bg)', fontFamily:'DM Sans,sans-serif', fontWeight:700, fontSize:'.9rem', cursor:'pointer', marginTop:12, transition:'all .2s' }}>
            {idx + 1 >= questions.length ? 'Ergebnis anzeigen →' : 'Weiter →'}
          </button>
        )}
      </div>
    )
  }

  // ── RESULTS ──
  const total = questions.length
  const pct = Math.round((score / total) * 100)
  const passed = pct >= 70
  const nextLvl = activeLevel + 1
  const hasNext = nextLvl < totalLevels

  return (
    <div style={{ maxWidth:500, margin:'0 auto' }}>
      <div className="r-card" style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:20, padding:'28px 24px', textAlign:'center', marginBottom:16 }}>
        <div style={{ fontSize:'3rem', fontWeight:900, color: passed ? 'var(--green)' : 'var(--rose)', marginBottom:8 }}>{pct}%</div>
        <div style={{ fontFamily:'Fraunces,serif', fontSize:'1.3rem', color:'var(--ink)', marginBottom:8 }}>
          {pct === 100 ? '🏆 Perfekt!' : pct >= 80 ? '🎉 Sehr gut!' : passed ? '👍 Bestanden!' : '📖 Noch üben'}
        </div>
        <div style={{ fontSize:'.82rem', color:'var(--ink2)' }}>
          {score} von {total} richtig · {getLevelName(activeLevel)}
        </div>

        <div style={{ display:'flex', gap:8, marginTop:20 }}>
          <button onClick={() => setPhase('levelSelect')}
            style={{ flex:1, padding:'12px', borderRadius:10, border:'1.5px solid var(--border)', background:'none', color:'var(--ink2)', fontFamily:'DM Sans,sans-serif', fontWeight:700, fontSize:'.82rem', cursor:'pointer' }}>
            ← Themen
          </button>
          <button onClick={() => startLevel(activeLevel)}
            style={{ flex:1, padding:'12px', borderRadius:10, border:'none', background:'var(--bg3)', color:'var(--ink)', fontFamily:'DM Sans,sans-serif', fontWeight:700, fontSize:'.82rem', cursor:'pointer' }}>
            Wiederholen 🔄
          </button>
        </div>
      </div>

      {/* Action contextuelle */}
      {passed && hasNext && (
        <button onClick={() => startLevel(nextLvl)}
          style={{ width:'100%', padding:'14px', borderRadius:12, border:'none', background:'linear-gradient(135deg,var(--teal-dark),var(--teal))', color:'var(--bg)', fontFamily:'DM Sans,sans-serif', fontWeight:700, fontSize:'.9rem', cursor:'pointer' }}>
          🚀 {getLevelName(nextLvl)} starten →
        </button>
      )}
      {passed && !hasNext && (
        <div style={{ padding:'14px', borderRadius:12, background:'rgba(74,222,128,.1)', border:'1px solid rgba(74,222,128,.25)', color:'var(--green)', fontWeight:700, textAlign:'center', fontSize:'.88rem' }}>
          🏆 Thema gemeistert! Alle Niveaus abgeschlossen.
        </div>
      )}
      {!passed && wrongLessons.length > 0 && (
        <div>
          <div style={{ fontSize:'.78rem', fontWeight:700, color:'var(--rose)', marginBottom:8 }}>
            💡 Diese Lektionen wiederholen:
          </div>
          {wrongLessons.slice(0,3).map(wl => (
            <button key={wl.lesson}
              style={{ width:'100%', padding:'11px 14px', borderRadius:10, border:'1.5px solid rgba(248,113,113,.3)', background:'rgba(248,113,113,.08)', color:'var(--rose)', fontFamily:'DM Sans,sans-serif', fontSize:'.8rem', fontWeight:600, cursor:'pointer', display:'flex', alignItems:'center', gap:10, textAlign:'left', marginBottom:7 }}>
              <span>📖</span><span>{wl.lesson}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
