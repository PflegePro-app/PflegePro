import React, { useContext } from 'react'
import { AppContext } from '../App.jsx'

export default function Home() {
  const { progress, userName, THEMES, openDetail } = useContext(AppContext)

  const mastered = progress.mastered?.length || 0
  const avgScore = progress.scores?.length
    ? Math.round(progress.scores.reduce((a,b) => a+b, 0) / progress.scores.length)
    : 0

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Guten Morgen' : hour < 18 ? 'Guten Tag' : 'Guten Abend'

  return (
    <div className="screen active" id="screen-home">
      {/* Salutation */}
      <div style={{ marginBottom:24 }}>
        <div style={{ fontFamily:'Fraunces,serif', fontSize:'clamp(1.3rem,3vw,1.8rem)', color:'var(--ink)', lineHeight:1.2 }}>
          {greeting}{userName ? `, ${userName}` : ''}! 👋
        </div>
        <div style={{ fontSize:'.85rem', color:'var(--ink2)', marginTop:6 }}>
          Bereit für deine Pflegeausbildung?
        </div>
      </div>

      {/* Stats */}
      <div className="stats-row" style={{ display:'grid', gap:12, marginBottom:28 }}>
        {[
          { label:'Quiz gemacht', value:progress.quizDone || 0, color:'teal' },
          { label:'Ø Score', value:avgScore+'%', color:'amber' },
          { label:'Streak', value:(progress.streak||0)+' 🔥', color:'rose' },
          { label:'Gemeistert', value:mastered+' 🏆', color:'green' },
        ].map(s => (
          <div key={s.label} className={`stat-card stat-card-${s.color === 'teal' ? 'quiz' : s.color === 'amber' ? 'score' : s.color === 'rose' ? 'streak' : 'master'}`}
            style={{ background:`var(--${s.color}-dim)`, border:`1px solid rgba(var(--${s.color}-rgb),.2)`, borderRadius:14, padding:'14px 16px' }}>
            <div style={{ fontSize:'1.3rem', fontWeight:800, color:`var(--${s.color})` }}>{s.value}</div>
            <div style={{ fontSize:'.72rem', color:'var(--ink2)', marginTop:2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Thèmes */}
      <div style={{ fontFamily:'Fraunces,serif', fontSize:'1.1rem', color:'var(--ink)', marginBottom:14 }}>
        📚 Lernthemen
      </div>
      <div className="theme-grid">
        {THEMES.map(t => (
          <div key={t.id} className="theme-card" onClick={() => openDetail(t)}
            style={{ cursor:'pointer' }}>
            <div className="theme-icon" style={{ background:`var(--${t.col}-dim)`, fontSize:'1.6rem', borderRadius:12, width:48, height:48, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:10 }}>
              {t.icon}
            </div>
            <div style={{ fontWeight:700, fontSize:'.88rem', color:'var(--ink)', marginBottom:4 }}>{t.name}</div>
            <div style={{ fontSize:'.72rem', color:'var(--ink2)' }}>{t.lessons.length} Lerneinheiten</div>
          </div>
        ))}
      </div>
    </div>
  )
}
