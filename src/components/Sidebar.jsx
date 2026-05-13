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
    <nav className="sidebar">
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
  )
}
