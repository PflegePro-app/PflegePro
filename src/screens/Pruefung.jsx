import React, { useContext } from 'react'
import { AppContext } from '../App.jsx'

export default function Pruefung() {
  const { THEMES, QUIZZES, nav, setCurrentTheme, openDetail } = useContext(AppContext)
  const themes = THEMES.filter(t => QUIZZES[t.id])

  return (
    <div>
      <div style={{ fontFamily:'Fraunces,serif', fontSize:'1.3rem', color:'var(--ink)', marginBottom:6 }}>🎯 Quiz & Prüfung</div>
      <div style={{ fontSize:'.82rem', color:'var(--ink2)', marginBottom:20 }}>Wähle ein Thema und starte dein Quiz.</div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
        {themes.map(t => (
          <div key={t.id}
            onClick={() => openDetail(t)}
            style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:16, padding:'18px 16px', cursor:'pointer', transition:'all .2s', display:'flex', flexDirection:'column', gap:10 }}>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ width:44, height:44, borderRadius:12, background:`var(--${t.col}-dim)`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.4rem', flexShrink:0 }}>
                {t.icon}
              </div>
              <div>
                <div style={{ fontWeight:700, fontSize:'.85rem', color:'var(--ink)', lineHeight:1.3 }}>{t.name}</div>
                <div style={{ fontSize:'.72rem', color:'var(--ink2)', marginTop:2 }}>{QUIZZES[t.id]?.length || 0} Fragen</div>
              </div>
            </div>
            <div style={{ background:`var(--${t.col}-dim)`, color:`var(--${t.col})`, borderRadius:8, padding:'6px 12px', fontSize:'.75rem', fontWeight:700, textAlign:'center' }}>
              🎯 Quiz starten →
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
