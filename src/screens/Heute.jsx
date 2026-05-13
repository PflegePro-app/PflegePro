import React, { useContext } from 'react'
import { AppContext } from '../App.jsx'

export default function Heute() {
  const { progress, THEMES, openLesson, openDetail } = useContext(AppContext)

  const today = new Date()
  const days = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag']
  const months = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember']

  // 3 leçons suggérées — une par thème
  const suggestions = THEMES
    .filter(t => t.lessons.length > 0)
    .slice(0, 3)
    .map(t => ({ theme: t, lesson: t.lessons[0] }))

  return (
    <div>
      <div style={{ fontFamily:'Fraunces,serif', fontSize:'1.3rem', color:'var(--ink)', marginBottom:4 }}>
        📅 Heute lernen
      </div>
      <div style={{ fontSize:'.85rem', color:'var(--ink2)', marginBottom:24 }}>
        {days[today.getDay()]}, {today.getDate()}. {months[today.getMonth()]} {today.getFullYear()}
      </div>

      {/* Tagesfortschritt */}
      <div style={{ background:'linear-gradient(135deg,#0d7377,#2dd4bf)', borderRadius:16, padding:'20px 22px', marginBottom:24 }}>
        <div style={{ fontSize:'.72rem', fontWeight:700, color:'rgba(255,255,255,.7)', letterSpacing:'.7px', textTransform:'uppercase', marginBottom:12 }}>
          Tagesfortschritt
        </div>
        <div style={{ display:'flex', gap:32 }}>
          <div>
            <div style={{ fontSize:'1.6rem', fontWeight:900, color:'white' }}>{progress.quizDone || 0}</div>
            <div style={{ fontSize:'.72rem', color:'rgba(255,255,255,.7)' }}>Quiz heute</div>
          </div>
          <div>
            <div style={{ fontSize:'1.6rem', fontWeight:900, color:'white' }}>{progress.streak || 0} 🔥</div>
            <div style={{ fontSize:'.72rem', color:'rgba(255,255,255,.7)' }}>Streak</div>
          </div>
        </div>
      </div>

      {/* Heute empfohlen */}
      <div style={{ fontFamily:'Fraunces,serif', fontSize:'1rem', color:'var(--ink)', marginBottom:14 }}>
        📚 Heute empfohlen
      </div>
      {suggestions.map(({ theme: t, lesson }) => (
        <div
          key={t.id + lesson}
          onClick={() => openLesson(t.id, lesson)}
          style={{ display:'flex', alignItems:'center', gap:14, padding:'14px 16px', background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, marginBottom:10, cursor:'pointer', transition:'all .2s' }}
        >
          <div style={{ width:40, height:40, borderRadius:10, background:`var(--${t.col}-dim)`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem', flexShrink:0 }}>
            {t.icon}
          </div>
          <div style={{ flex:1 }}>
            <div style={{ fontWeight:700, fontSize:'.85rem', color:'var(--ink)' }}>{lesson}</div>
            <div style={{ fontSize:'.72rem', color:'var(--ink2)', marginTop:2 }}>{t.name}</div>
          </div>
          <span style={{ color:'var(--teal)', fontSize:'.82rem', fontWeight:600, flexShrink:0 }}>Starten →</span>
        </div>
      ))}

      {/* Quiz empfohlen */}
      <div style={{ fontFamily:'Fraunces,serif', fontSize:'1rem', color:'var(--ink)', marginBottom:14, marginTop:24 }}>
        🎯 Quiz empfohlen
      </div>
      {THEMES.filter(t => t.lessons.length > 0).slice(0,2).map(t => (
        <div
          key={'quiz-'+t.id}
          onClick={() => openDetail(t)}
          style={{ display:'flex', alignItems:'center', gap:14, padding:'14px 16px', background:`var(--${t.col}-dim)`, border:`1px solid var(--${t.col}-dim)`, borderRadius:12, marginBottom:10, cursor:'pointer', transition:'all .2s' }}
        >
          <div style={{ fontSize:'1.3rem' }}>{t.icon}</div>
          <div style={{ flex:1 }}>
            <div style={{ fontWeight:700, fontSize:'.85rem', color:`var(--${t.col})` }}>{t.name}</div>
            <div style={{ fontSize:'.72rem', color:'var(--ink2)', marginTop:2 }}>Quiz starten</div>
          </div>
          <span style={{ color:`var(--${t.col})`, fontSize:'.82rem', fontWeight:600 }}>→</span>
        </div>
      ))}
    </div>
  )
}
