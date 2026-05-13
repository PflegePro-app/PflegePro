import React, { useContext } from 'react'
import { AppContext } from '../App.jsx'

export default function Heute() {
  const { progress, THEMES, openLesson } = useContext(AppContext)
  const today = new Date()
  const days = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag']
  const months = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember']

  // Suggérer 3 leçons à réviser
  const suggestions = THEMES.filter(t => t.lessons.length > 0).slice(0, 3).map(t => ({
    theme: t,
    lesson: t.lessons[0]
  }))

  return (
    <div>
      <div style={{ fontFamily:'Fraunces,serif', fontSize:'1.3rem', color:'var(--ink)', marginBottom:4 }}>
        📅 Heute lernen
      </div>
      <div style={{ fontSize:'.85rem', color:'var(--ink2)', marginBottom:24 }}>
        {days[today.getDay()]}, {today.getDate()}. {months[today.getMonth()]} {today.getFullYear()}
      </div>

      <div style={{ background:'linear-gradient(135deg,var(--teal-dark),var(--teal))', borderRadius:16, padding:'20px 22px', marginBottom:24 }}>
        <div style={{ fontSize:'.72rem', fontWeight:700, color:'rgba(255,255,255,.7)', letterSpacing:'.7px', textTransform:'uppercase', marginBottom:8 }}>Tagesfortschritt</div>
        <div style={{ display:'flex', gap:24 }}>
          <div><div style={{ fontSize:'1.4rem', fontWeight:900, color:'white' }}>{progress.quizDone || 0}</div><div style={{ fontSize:'.7rem', color:'rgba(255,255,255,.7)' }}>Quiz heute</div></div>
          <div><div style={{ fontSize:'1.4rem', fontWeight:900, color:'white' }}>{progress.streak || 0}🔥</div><div style={{ fontSize:'.7rem', color:'rgba(255,255,255,.7)' }}>Streak</div></div>
        </div>
      </div>

      <div style={{ fontFamily:'Fraunces,serif', fontSize:'1rem', color:'var(--ink)', marginBottom:14 }}>
        📚 Heute empfohlen
      </div>
      {suggestions.map(({ theme:t, lesson }) => (
        <div key={t.id+lesson} onClick={() => openLesson(t.id, lesson)}
          style={{ display:'flex', alignItems:'center', gap:14, padding:'14px 16px', background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, marginBottom:10, cursor:'pointer', transition:'all .2s' }}>
          <div style={{ fontSize:'1.5rem' }}>{t.icon}</div>
          <div>
            <div style={{ fontWeight:700, fontSize:'.85rem', color:'var(--ink)' }}>{lesson}</div>
            <div style={{ fontSize:'.72rem', color:'var(--ink2)', marginTop:2 }}>{t.name}</div>
          </div>
          <span style={{ marginLeft:'auto', color:'var(--teal)', fontSize:'.82rem', fontWeight:600 }}>Starten →</span>
        </div>
      ))}
    </div>
  )
}
