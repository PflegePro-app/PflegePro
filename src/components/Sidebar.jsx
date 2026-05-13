import React from 'react'

const NAV_ITEMS = [
  { id: 'home',         icon: '🏠', label: 'Home',     tip: 'Übersicht' },
  { id: 'pruefung',     icon: '🎯', label: 'Quiz',     tip: 'Prüfung' },
  { id: 'fachbegriffe', icon: '🔤', label: 'Begriffe', tip: 'Fachbegriffe' },
  { id: 'praxis',       icon: '🏨', label: 'Praxis',   tip: 'Praxis Modus' },
  { id: 'heute',        icon: '📅', label: 'Heute',    tip: 'Heute lernen' },
]

export default function Sidebar({ screen, onNav }) {
  const activeBase = ['lektion','detail','quiz'].includes(screen) ? null : screen

  return (
    <nav className="sidebar">
      {NAV_ITEMS.map(item => (
        <button
          key={item.id}
          className={`s-btn${activeBase === item.id ? ' active' : ''}`}
          onClick={() => onNav(item.id)}
        >
          <span style={{ fontSize:'1.4rem' }}>{item.icon}</span>
          <span className="s-label">{item.label}</span>
          <span className="s-tip">{item.tip}</span>
        </button>
      ))}
    </nav>
  )
}
