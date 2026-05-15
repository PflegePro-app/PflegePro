import { useState } from 'react'

export default function WelcomeModal({ onSave }) {
  const [name, setName] = useState('')

  const handleSubmit = () => {
    const trimmed = name.trim()
    if (!trimmed) return
    onSave(trimmed)
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(0,0,0,0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: 24,
        padding: '40px 32px',
        maxWidth: 400,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
        animation: 'fadeUp .4s ease',
      }}>
        {/* Logo */}
        <div style={{ fontSize: '3.5rem', marginBottom: 16 }}>🏥</div>

        {/* Titre */}
        <div style={{
          fontFamily: "'Fraunces', serif",
          fontSize: '1.8rem',
          fontWeight: 700,
          color: 'var(--ink)',
          marginBottom: 10,
          lineHeight: 1.2,
        }}>
          Willkommen bei<br/>
          <span style={{ color: 'var(--ink)' }}>Pflege</span><span style={{ color: 'var(--teal)' }}>Pro</span>!
        </div>

        {/* Sous-titre */}
        <div style={{
          fontSize: '.88rem',
          color: 'var(--ink2)',
          marginBottom: 28,
          lineHeight: 1.6,
        }}>
          Deine persönliche Lernapp für die<br/>Pflegeausbildung. Wie heißt du?
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Dein Vorname..."
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          autoFocus
          style={{
            width: '100%',
            background: 'var(--bg3)',
            border: '2px solid var(--teal)',
            borderRadius: 12,
            padding: '14px 18px',
            fontSize: '1rem',
            color: 'var(--ink)',
            fontFamily: "'DM Sans', sans-serif",
            outline: 'none',
            marginBottom: 14,
            boxSizing: 'border-box',
            textAlign: 'center',
          }}
        />

        {/* Bouton */}
        <button
          onClick={handleSubmit}
          disabled={!name.trim()}
          style={{
            width: '100%',
            background: name.trim() ? 'var(--teal)' : 'var(--bg3)',
            color: name.trim() ? 'var(--bg)' : 'var(--ink3)',
            border: 'none',
            borderRadius: 12,
            padding: '15px',
            fontSize: '1rem',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            cursor: name.trim() ? 'pointer' : 'not-allowed',
            transition: 'all .2s',
            boxShadow: name.trim() ? '0 4px 16px rgba(45,212,191,.3)' : 'none',
          }}
        >
          Los geht's →
        </button>

        {/* Note */}
        <div style={{
          fontSize: '.72rem',
          color: 'var(--ink3)',
          marginTop: 14,
        }}>
          Wird lokal gespeichert · Keine Registrierung nötig
        </div>
      </div>
    </div>
  )
}
