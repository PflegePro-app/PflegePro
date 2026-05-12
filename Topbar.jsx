import React from 'react'

export default function Topbar({ isLektionMode, screen, currentTheme, currentLesson, onBack, onToggleTheme, theme, streak }) {
  const isLesson = screen === 'lektion'
  const isQuiz   = screen === 'quiz'
  const isDetail = screen === 'detail'

  const showBack = isLesson || isQuiz || isDetail

  const backLabel = isLesson ? currentLesson
    : isQuiz    ? (currentTheme?.name || 'Quiz')
    : isDetail  ? (currentTheme?.name || '')
    : ''

  return (
    <header className="topbar" id="topbar">
      {showBack ? (
        /* ── Mode leçon/quiz — topbar transformée ── */
        <div style={{ display:'flex', alignItems:'center', width:'100%', gap:12 }}>
          <button
            onClick={onBack}
            className="topbar-back-btn"
            style={{
              display:'flex', alignItems:'center', gap:6,
              background:'linear-gradient(135deg,var(--teal-dark),var(--teal))',
              border:'none', color:'#fff', borderRadius:50,
              padding:'7px 16px 7px 12px', fontSize:'.8rem', fontWeight:700,
              fontFamily:'DM Sans,sans-serif', cursor:'pointer',
              whiteSpace:'nowrap', transition:'all .2s', flexShrink:0,
              boxShadow:'0 2px 10px rgba(0,0,0,0.2)'
            }}
          >
            ← Zurück
          </button>
          <div style={{
            fontFamily:'DM Sans,sans-serif', fontSize:'.85rem', fontWeight:700,
            color:'var(--ink)', whiteSpace:'nowrap', overflow:'hidden',
            textOverflow:'ellipsis', flex:1, textAlign:'center'
          }}>
            {backLabel}
          </div>
          <div style={{ flexShrink:0, minWidth:60, display:'flex', justifyContent:'flex-end' }}>
            <div className="streak-badge" style={{ fontSize:'.72rem' }}>
              🔥 {streak}
            </div>
          </div>
        </div>
      ) : (
        /* ── Mode normal ── */
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%' }}>
          <div className="t-title">
            <div className="t-logo">🏥</div>
            Pflege<span>Pro</span>
          </div>
          <div className="t-right">
            <span className="theme-mode-label">
              {theme === 'dark' ? '🌙 Dunkel' : '☀️ Hell'}
            </span>
            <button className="theme-toggle" onClick={onToggleTheme} aria-label="Theme wechseln">
              <div className="theme-toggle-knob">
                {theme === 'dark' ? '🌙' : '☀️'}
              </div>
            </button>
            <div className="streak-badge">
              🔥 <span>{streak}</span> Tage
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
