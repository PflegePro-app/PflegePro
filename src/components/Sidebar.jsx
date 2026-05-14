import React from 'react'

const NAV = [
  { id:'home',         icon:'🏠', label:'Home' },
  { id:'pruefung',     icon:'🎯', label:'Quiz' },
  { id:'fachbegriffe', icon:'🔤', label:'Begriffe' },
  { id:'praxis',       icon:'🏨', label:'Praxis' },
  { id:'heute',        icon:'📅', label:'Heute' },
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
            <span style={{ fontSize:'1.4rem' }}>{item.icon}</span>
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
            <span className="bnav-icon">{item.icon}</span>
            <span className="bnav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}
