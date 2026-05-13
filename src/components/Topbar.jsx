import React from 'react'

export default function Topbar({ screen, currentTheme, currentLesson, inLektionMode, onBack, onToggleTheme, theme, streak }) {

  const backLabel = screen === 'lektion' ? currentLesson
    : screen === 'quiz' ? 'Quiz'
    : screen === 'detail' ? currentTheme?.name || ''
    : ''

  return (
    <header className="topbar">
      {inLektionMode ? (
        // ── Mode leçon/detail/quiz ──
        <div style={{ display:'flex', alignItems:'center', width:'100%', gap:12 }}>
          <button
            onClick={onBack}
            style={{
              display:'flex', alignItems:'center', gap:6,
              background:'linear-gradient(135deg,#0d7377,#2dd4bf)',
              border:'none', color:'#fff', borderRadius:50,
              padding:'7px 16px 7px 12px',
              fontSize:'.8rem', fontWeight:700,
              fontFamily:'DM Sans,sans-serif',
              cursor:'pointer', whiteSpace:'nowrap',
              flexShrink:0, boxShadow:'0 2px 10px rgba(0,0,0,0.2)',
              transition:'all .2s'
            }}
          >
            ← Zurück
          </button>
          <div style={{
            fontFamily:'DM Sans,sans-serif', fontSize:'.85rem',
            fontWeight:700, color:'var(--ink)',
            whiteSpace:'nowrap', overflow:'hidden',
            textOverflow:'ellipsis', flex:1, textAlign:'center'
          }}>
            {backLabel}
          </div>
          <div className="streak-badge" style={{ fontSize:'.72rem', flexShrink:0 }}>
            🔥 {streak}
          </div>
        </div>
      ) : (
        // ── Mode normal ──
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%' }}>
          <div className="t-title">
            <div className="t-logo">🏥</div>
            Pflege<span>Pro</span>
          </div>
          <div className="t-right">
            <span className="theme-mode-label">
              {theme === 'dark' ? '🌙 Dunkel' : '☀️ Hell'}
            </span>
            <button className="theme-toggle" onClick={onToggleTheme}>
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
