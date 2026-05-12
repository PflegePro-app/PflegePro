import React, { useContext, useState } from 'react'
import { AppContext } from '../App.jsx'

export default function Pruefung() {
  const { THEMES, QUIZZES, openDetail } = useContext(AppContext)
  const themes = THEMES.filter(t => QUIZZES[t.id])

  return (
    <div>
      <div style={{ fontFamily:'Fraunces,serif', fontSize:'1.3rem', color:'var(--ink)', marginBottom:6 }}>🎯 Quiz & Prüfung</div>
      <div style={{ fontSize:'.82rem', color:'var(--ink2)', marginBottom:20 }}>Wähle ein Thema und starte dein Quiz.</div>
      <div className="theme-grid">
        {themes.map(t => (
          <div key={t.id} className="theme-card" onClick={() => openDetail(t)} style={{ cursor:'pointer' }}>
            <div style={{ fontSize:'1.8rem', marginBottom:8 }}>{t.icon}</div>
            <div style={{ fontWeight:700, fontSize:'.88rem', color:'var(--ink)', marginBottom:4 }}>{t.name}</div>
            <div style={{ fontSize:'.72rem', color:'var(--ink2)' }}>{QUIZZES[t.id]?.length || 0} Fragen</div>
          </div>
        ))}
      </div>
    </div>
  )
}
