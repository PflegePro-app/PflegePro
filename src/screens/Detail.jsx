import React, { useContext } from 'react'
import { AppContext } from '../App.jsx'

export default function Detail() {
  const { currentTheme, openLesson, startQuiz, QUIZZES, progress } = useContext(AppContext)
  if (!currentTheme) return null

  const t = currentTheme
  const hasQuiz = !!QUIZZES[t.id]

  return (
    <div style={{ maxWidth:640, margin:'0 auto', padding:'8px 0' }}>
      {/* Header thème */}
      <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:24, padding:'18px 20px', background:'var(--card)', border:'1px solid var(--border)', borderRadius:16 }}>
        <div style={{ width:52, height:52, borderRadius:14, background:`var(--${t.col}-dim)`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.6rem', flexShrink:0 }}>
          {t.icon}
        </div>
        <div>
          <div style={{ fontFamily:'Fraunces,serif', fontSize:'1.1rem', color:'var(--ink)' }}>{t.name}</div>
          <div style={{ fontSize:'.78rem', color:'var(--ink2)', marginTop:3 }}>{t.lessons.length} Lerneinheiten</div>
        </div>
      </div>

      {/* Bouton Quiz */}
      {hasQuiz && (
        <button
          onClick={() => startQuiz(t.id, 0, false)}
          style={{ width:'100%', padding:'13px', borderRadius:12, border:'none', background:`linear-gradient(135deg,var(--${t.col}-dark,var(--teal-dark)),var(--${t.col},var(--teal)))`, color:'var(--bg)', fontFamily:'DM Sans,sans-serif', fontWeight:700, fontSize:'.9rem', cursor:'pointer', marginBottom:20, transition:'all .2s' }}
        >
          🎯 Quiz starten
        </button>
      )}

      {/* Liste leçons */}
      <div style={{ fontFamily:'Fraunces,serif', fontSize:'1rem', color:'var(--ink)', marginBottom:12 }}>
        Lerneinheiten
      </div>
      <div className="lesson-list" id="lesson-list">
        {t.lessons.map((lesson, i) => (
          <div
            key={lesson}
            className="lesson-row"
            onClick={() => openLesson(t.id, lesson)}
            style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 16px', background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, marginBottom:8, cursor:'pointer', transition:'all .2s' }}
          >
            <div style={{ display:'flex', alignItems:'center', gap:14 }}>
              <div style={{ width:28, height:28, borderRadius:8, background:`var(--${t.col}-dim)`, color:`var(--${t.col})`, fontSize:'.72rem', fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                {String(i+1).padStart(2,'0')}
              </div>
              <span style={{ fontSize:'.88rem', color:'var(--ink)', fontWeight:500 }}>{lesson}</span>
            </div>
            <span style={{ color:`var(--${t.col})`, fontSize:'.82rem', fontWeight:600 }}>Öffnen →</span>
          </div>
        ))}
      </div>
    </div>
  )
}
