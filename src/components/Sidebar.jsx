import React from 'react'

function CalendarIcon() {
  const day = new Date().getDate()
  return (
    <div style={{
      width: 28, height: 28,
      borderRadius: 7,
      background: 'var(--rose)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      <div style={{
        height: 8,
        background: '#c0392b',
      }}/>
      <div style={{
        flex: 1,
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '.65rem',
        fontWeight: 800,
        color: '#c0392b',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {day}
      </div>
    </div>
  )
}

const NAV = [
  { id:'home',         icon:'🏠',  label:'Home' },
  { id:'pruefung',     icon:'🎯',  label:'Quiz' },
  { id:'fachbegriffe', icon:'🔤',  label:'Begriffe' },
  { id:'praxis',       icon:'🏨',  label:'Praxis' },
  { id:'heute',        icon:null,  label:'Heute', customIcon: true },
]

export default function Sidebar({ screen, onNav }) {
  const active = ['lektion','detail','quiz'].includes(screen) ? null : screen

  return (
    <>
      {/* ── SIDEBAR gauche — tablette/desktop ── */}
      <nav className="sidebar sidebar-desktop">
        {NAV.map(item => (
          <button
            key={item.id}
            className={`s-btn${active === item.id ? ' active' : ''}`}
            onClick={() => onNav(item.id)}
          >
            {item.customIcon
              ? <CalendarIcon />
              : <span style={{ fontSize:'1.4rem' }}>{item.icon}</span>
            }
            <span className="s-label">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* ── BOTTOM NAV — mobile ── */}
      <nav className="bottom-nav">
        {NAV.map(item => (
          <button
            key={item.id}
            className={`bnav-btn${active === item.id ? ' active' : ''}`}
            onClick={() => onNav(item.id)}
          >
            <span className="bnav-icon">
              {item.customIcon ? <CalendarIcon /> : item.icon}
            </span>
            <span className="bnav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}
