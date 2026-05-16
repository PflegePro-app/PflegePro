import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../App'

function initBusWidget(container) {
  const slider = container.querySelector('input[type="range"]')
  if (!slider) return
  function lBusUpdate(val) {
    val = parseInt(val)
    const bzVal = container.querySelector('#lbz-val')
    const bus = container.querySelector('#lbus')
    const seats = container.querySelector('#lbus-seats')
    const road = container.querySelector('#lbus-road')
    const info = container.querySelector('#lbus-info')
    if (bzVal) bzVal.textContent = val + ' mg/dl'
    const total = 20
    const filled = Math.min(total, Math.round((val - 50) / (420 - 50) * total))
    const overThreshold = val > 180
    const spill = overThreshold ? Math.round((val - 180) / (420 - 180) * 8) : 0
    if (seats) {
      seats.innerHTML = Array.from({ length: total }, (_, i) => {
        if (i < filled - spill) return '<span style="font-size:1.1rem">🩸</span>'
        if (i < filled) return '<span style="font-size:1.1rem;opacity:.3">🩸</span>'
        return '<span style="font-size:1.1rem;opacity:.15">⬜</span>'
      }).join('')
    }
    if (road) road.style.background = overThreshold ? 'linear-gradient(90deg,#dc2626,#f87171)' : 'linear-gradient(90deg,#2dd4bf,#0f9688)'
    if (bus) bus.style.transform = overThreshold ? 'rotate(-3deg) scale(1.1)' : 'none'
    if (info) {
      if (val < 70) info.innerHTML = '⚠️ <strong style="color:#f87171">Hypoglykämie!</strong> BZ zu niedrig.'
      else if (val <= 180) info.innerHTML = '✅ <strong style="color:#4ade80">BZ = ' + val + ' mg/dl</strong> — Kein Zucker im Urin.'
      else info.innerHTML = '🚨 <strong style="color:#f87171">Glukosurie!</strong> BZ > 180 — Zucker im Urin!'
    }
  }
  slider.removeAttribute('oninput')
  slider.addEventListener('input', (e) => lBusUpdate(e.target.value))
  lBusUpdate(slider.value)
}

export default function Lektion() {
  const {
    currentTheme, currentLesson, startQuiz, openDetail, THEMES,
    LESSON_CONTENT, QUIZZES, markLessonRead, progress,
  } = useContext(AppContext)

  const lessonRefs = useRef({})
  const [activeLesson, setActiveLesson] = useState(currentLesson)
  const [readProgress, setReadProgress] = useState(0)

  // Scroll to current lesson when it changes (disabled - only on explicit click)
  useEffect(() => {
    setActiveLesson(currentLesson)
  }, [currentLesson, currentTheme])

  useEffect(() => {
    if (currentTheme && currentLesson) markLessonRead(currentTheme.id, currentLesson)
  }, [currentTheme?.id, currentLesson])






  // Init widgets after render
  useEffect(() => {
    if (!currentTheme) return
    const t = currentTheme
    const themeContent = LESSON_CONTENT[t.id]
    if (!themeContent) return

    setTimeout(() => {
      t.lessons.forEach(lessonName => {
        const el = lessonRefs.current[lessonName]
        if (!el) return
        el.querySelectorAll('button, .lekt-quiz-btn').forEach(btn => {
          if ((btn.textContent || '').match(/Quiz|starten/i)) {
            btn.removeAttribute('onclick')
            btn.onclick = null
            btn.addEventListener('click', e => {
              e.preventDefault()
              e.stopPropagation()
              const ld = progress?.levels?.[t.id] || {}
              const levelScores = ld.levelScores || []
              const nextLevel = Math.min(levelScores.filter(s => s >= 0.70).length, 2)
              startQuiz(t.id, nextLevel, 'lektion')
            })
            btn.style.cursor = 'pointer'
          }
        })
        if (el.querySelector('#lbus')) initBusWidget(el)
      })
    }, 200)
  }, [currentTheme, progress])

  // Track scroll
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setReadProgress(Math.min(100, Math.round(scrolled / Math.max(1, total) * 100)))
      if (!currentTheme) return
      let current = currentTheme.lessons[0]
      currentTheme.lessons.forEach(lessonName => {
        const el = lessonRefs.current[lessonName]
        if (el && el.getBoundingClientRect().top < 150) current = lessonName
      })
      setActiveLesson(current)
      // Marquer comme lue si visible à plus de 80%
      currentTheme.lessons.forEach(lessonName => {
        const el = lessonRefs.current[lessonName]
        if (el) {
          const rect = el.getBoundingClientRect()
          const visible = (rect.bottom - rect.top) > 0
          const readEnough = rect.bottom < 100
          if (visible && readEnough) markLessonRead(currentTheme.id, lessonName)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [currentTheme])

  const scrollToLesson = (lessonName) => {
    const el = lessonRefs.current[lessonName]
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  if (!currentTheme || !currentLesson) return null

  const t = currentTheme
  const themeContent = LESSON_CONTENT[t.id]
  const lessons = t.lessons || []
  const hasQuiz = !!QUIZZES[t.id]

  // Calculer le bon niveau quiz
  const ld = progress?.levels?.[t.id] || {}
  const levelScores = ld.levelScores || []
  const quizLevel = Math.min(levelScores.filter(s => s >= 0.70).length, 2)

  return (
    <div style={{ display:'flex', gap:0, maxWidth:'100%', alignItems:'flex-start' }}>

      {/* ── TOUTES LES LEÇONS EN UNE PAGE ── */}
      <div style={{ flex:1, minWidth:0 }}>

        {/* Barre progression */}
        <div style={{ height:3, background:'var(--bg3)', marginBottom:20, borderRadius:2, overflow:'hidden' }}>
          <div style={{ height:'100%', borderRadius:2, background:'var(--teal)', width:`${readProgress}%`, transition:'width .3s' }}/>
        </div>

        {lessons.map((lessonName, i) => {
          const lessonFn = themeContent?.[lessonName]
          const html = lessonFn ? lessonFn() : null

          return (
            <div key={lessonName} ref={el => lessonRefs.current[lessonName] = el} style={{ marginBottom:48 }}>
              {html ? (
                <div dangerouslySetInnerHTML={{ __html: html }} style={{ width:'100%' }}/>
              ) : (
                <div style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:16, padding:'32px 28px', textAlign:'center' }}>
                  <div style={{ fontSize:'2rem', marginBottom:12 }}>🚧</div>
                  <div style={{ fontFamily:'Fraunces,serif', fontSize:'1.1rem', color:'var(--ink)', marginBottom:6 }}>{lessonName}</div>
                  <div style={{ fontSize:'.82rem', color:'var(--ink2)' }}>Dieser Inhalt wird bald verfügbar sein.</div>
                </div>
              )}

              {/* Séparateur */}
              {i < lessons.length - 1 && (
                <div style={{ marginTop:32, display:'flex', alignItems:'center', gap:12 }}>
                  <div style={{ flex:1, height:1, background:'var(--border)' }}/>
                  <div style={{ fontSize:'.7rem', fontWeight:700, color:'var(--ink3)', letterSpacing:'.5px', textTransform:'uppercase', padding:'4px 12px', background:'var(--bg3)', borderRadius:20 }}>
                    {lessons[i+1]}
                  </div>
                  <div style={{ flex:1, height:1, background:'var(--border)' }}/>
                </div>
              )}
            </div>
          )
        })}

        {/* Verwandte Themen */}
        {t.related && t.related.length > 0 && (
          <div style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 14, padding: '16px 18px', marginBottom: 16,
          }}>
            <div style={{
              fontSize: '.72rem', fontWeight: 700, letterSpacing: '.5px',
              textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: 10,
            }}>🔗 Verwandte Themen</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {t.related.map(relId => {
                const rt = THEMES.find(th => th.id === relId)
                if (!rt) return null
                return (
                  <div key={relId} onClick={() => { openDetail(rt); setTimeout(() => window.scrollTo(0, 0), 50) }} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '8px 12px', borderRadius: 999,
                    background: `var(--${rt.col}-dim)`,
                    border: `1px solid var(--${rt.col})`,
                    cursor: 'pointer', transition: 'transform .15s',
                    fontSize: '.82rem', fontWeight: 600, color: 'var(--ink)',
                  }}>
                    <span style={{ fontSize: '1rem' }}>{rt.icon}</span>
                    <span>{rt.name}</span>
                    <span style={{ color: 'var(--ink3)', fontSize: '.9rem' }}>→</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Bouton Quiz à la fin */}
        {hasQuiz && (
          <div style={{
            background:'linear-gradient(135deg,rgba(45,212,191,.12),rgba(45,212,191,.04))',
            border:'1.5px solid rgba(45,212,191,.25)',
            borderRadius:16, padding:'24px', textAlign:'center', marginBottom:32,
          }}>
            <div style={{ fontFamily:'Fraunces,serif', fontSize:'1.1rem', color:'var(--ink)', marginBottom:8 }}>
              🎯 Alle Lerneinheiten abgeschlossen!
            </div>
            <div style={{ fontSize:'.82rem', color:'var(--ink2)', marginBottom:16 }}>
              {quizLevel === 0 ? 'Starte jetzt mit dem Quiz!' : quizLevel === 1 ? 'Weiter mit Niveau 2 — Fortgeschritten!' : 'Meistere Niveau 3 — Experte!'}
            </div>
            <button onClick={() => startQuiz(t.id, quizLevel, 'lektion')} style={{
              background:'var(--teal)', color:'var(--bg)',
              border:'none', borderRadius:12, padding:'14px 32px',
              fontFamily:"'DM Sans',sans-serif", fontWeight:700, fontSize:'.92rem',
              cursor:'pointer', boxShadow:'0 4px 16px rgba(45,212,191,.25)',
            }}>
              {quizLevel === 0 ? 'Quiz starten →' : `Niveau ${quizLevel + 1} starten →`}
            </button>
          </div>
        )}
      </div>

      {/* ── SIDEBAR LERNEINHEITEN FLOTTANT ── */}
      <div className="inhalt-sidebar" style={{
        width:190, flexShrink:0,
        position:'sticky', top:72,
        alignSelf:'flex-start',
        marginLeft:16,
        maxHeight:'calc(100vh - 90px)',
        overflowY:'auto',
      }}>
        <div style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:14, overflow:'hidden' }}>
          <div style={{ padding:'10px 14px', fontSize:'.68rem', fontWeight:800, letterSpacing:'.8px', textTransform:'uppercase', color:'var(--ink2)', borderBottom:'1px solid var(--border)' }}>
            📚 Lerneinheiten
          </div>
          <div style={{ padding:'6px 0' }}>
            {lessons.map((lesson, i) => {
              const isActive = activeLesson === lesson
              return (
                <div key={i} onClick={() => scrollToLesson(lesson)} style={{
                  padding:'8px 14px', cursor:'pointer', transition:'all .2s',
                  background: isActive ? 'var(--teal-dim)' : 'transparent',
                  borderLeft: isActive ? '3px solid var(--teal)' : '3px solid transparent',
                  fontSize:'.72rem', fontWeight: isActive ? 700 : 400,
                  color: isActive ? 'var(--teal)' : 'var(--ink2)',
                  lineHeight:1.4,
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'var(--bg3)' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
                >
                  {lesson}
                </div>
              )
            })}
          </div>
          <div style={{ padding:'8px 14px 10px', borderTop:'1px solid var(--border)' }}>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:'.62rem', color:'var(--ink3)', marginBottom:4 }}>
              <span>Lesefortschritt</span>
              <span style={{ color:'var(--teal)' }}>{readProgress}%</span>
            </div>
            <div style={{ height:3, background:'var(--bg3)', borderRadius:2, overflow:'hidden' }}>
              <div style={{ height:'100%', background:'var(--teal)', width:`${readProgress}%`, borderRadius:2, transition:'width .3s' }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
