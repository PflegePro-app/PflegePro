import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../App.jsx'

// Renard animé
function Mascot({ name }) {
  const [frame, setFrame] = useState(0)
  const frames = ['🦊', '🦊', '🦊']

  useEffect(() => {
    const t = setInterval(() => setFrame(f => (f + 1) % frames.length), 800)
    return () => clearInterval(t)
  }, [])

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Guten Morgen' : hour < 18 ? 'Guten Tag' : 'Guten Abend'

  return (
    <div style={{
      background: 'linear-gradient(135deg,#0d7377,#2dd4bf)',
      borderRadius: 20, padding:'20px 22px',
      marginBottom: 20, position:'relative', overflow:'hidden'
    }}>
      {/* Cercles déco */}
      <div style={{ position:'absolute', right:-20, top:-20, width:100, height:100, borderRadius:'50%', background:'rgba(255,255,255,0.06)' }}/>
      <div style={{ position:'absolute', right:20, bottom:-30, width:140, height:140, borderRadius:'50%', background:'rgba(255,255,255,0.04)' }}/>

      <div style={{ display:'flex', alignItems:'center', gap:16, position:'relative' }}>
        <div style={{ fontSize:'3rem', filter:'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}>
          {frames[frame]}
        </div>
        <div>
          <div style={{ fontFamily:'Fraunces,serif', fontSize:'1.15rem', color:'white', fontWeight:700 }}>
            {greeting}{name ? `, ${name}` : ''}!
          </div>
          <div style={{ fontSize:'.8rem', color:'rgba(255,255,255,0.75)', marginTop:4 }}>
            Bereit für deine Pflegeausbildung?
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { progress, THEMES, QUIZZES, openDetail } = useContext(AppContext)

  const avgScore = progress.scores?.length
    ? Math.round(progress.scores.reduce((a,b) => a+b, 0) / progress.scores.length)
    : 0

  // Stats
  const stats = [
    { label:'Quiz gemacht', value: progress.quizDone || 0, col:'teal' },
    { label:'Ø Score',      value: avgScore + '%',          col:'amber' },
    { label:'Streak',       value: (progress.streak||0) + ' 🔥', col:'rose' },
    { label:'Gemeistert',   value: (progress.mastered?.length||0) + ' 🏆', col:'green' },
  ]

  return (
    <div>
      <Mascot />

      {/* Stats */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:24 }}>
        {stats.map(s => (
          <div key={s.label} style={{
            background:`var(--${s.col}-dim)`,
            border:`1px solid var(--${s.col}-dim)`,
            borderRadius:14, padding:'14px 16px'
          }}>
            <div style={{ fontSize:'1.3rem', fontWeight:800, color:`var(--${s.col})` }}>{s.value}</div>
            <div style={{ fontSize:'.72rem', color:'var(--ink2)', marginTop:2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Thèmes */}
      <div style={{ fontFamily:'Fraunces,serif', fontSize:'1.1rem', color:'var(--ink)', marginBottom:14 }}>
        📚 Lernthemen
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
        {THEMES.map(t => {
          const levels = progress.levels?.[t.id] || {}
          const passed = Object.values(levels).filter(s => s >= 0.7).length
          const total = Math.min(3, Math.ceil((QUIZZES[t.id]?.length || 0) / 7))
          const hasQuiz = !!QUIZZES[t.id]

          return (
            <div key={t.id}
              onClick={() => openDetail(t)}
              style={{
                background:'var(--card)', border:'1px solid var(--border)',
                borderRadius:16, padding:'16px 14px',
                cursor:'pointer', transition:'all .2s'
              }}
            >
              {/* Icône */}
              <div style={{
                width:44, height:44, borderRadius:12,
                background:`var(--${t.col}-dim)`,
                display:'flex', alignItems:'center',
                justifyContent:'center', fontSize:'1.4rem',
                marginBottom:10
              }}>
                {t.icon}
              </div>
              {/* Nom */}
              <div style={{ fontWeight:700, fontSize:'.82rem', color:'var(--ink)', marginBottom:4, lineHeight:1.3 }}>
                {t.name}
              </div>
              <div style={{ fontSize:'.72rem', color:'var(--ink2)', marginBottom:8 }}>
                {t.lessons.length} Lerneinheiten
              </div>
              {/* Progression quiz */}
              {hasQuiz && total > 0 && (
                <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                  {Array.from({length: total}, (_,i) => (
                    <div key={i} style={{
                      width:18, height:18, borderRadius:'50%',
                      background: (levels[i] >= 0.7) ? 'var(--green)' : 'var(--bg3)',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      fontSize:'.6rem', color: (levels[i] >= 0.7) ? 'white' : 'var(--ink3)',
                      fontWeight:700
                    }}>
                      {i+1}
                    </div>
                  ))}
                  <span style={{ fontSize:'.68rem', color:'var(--ink3)', marginLeft:2 }}>
                    {passed}/{total} Niveau
                  </span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
