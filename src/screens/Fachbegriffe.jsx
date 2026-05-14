import { useContext, useState } from 'react'
import { AppContext } from '../App'

export default function Fachbegriffe() {
  const { FACHBEGRIFFE } = useContext(AppContext)

  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState(null)

  // Aplatir tous les termes en un seul tableau
  const allTerms = Array.isArray(FACHBEGRIFFE)
    ? FACHBEGRIFFE
    : Object.values(FACHBEGRIFFE).flat()

  // Filtrer par recherche
  const filtered = search.trim()
    ? allTerms.filter(t =>
        t.term.toLowerCase().includes(search.toLowerCase()) ||
        t.def.toLowerCase().includes(search.toLowerCase())
      )
    : allTerms

  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>

      {/* Header */}
      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 16, padding: '18px 20px', marginBottom: 20,
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{
          width: 46, height: 46, borderRadius: 12,
          background: 'var(--purple-dim)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem', flexShrink: 0,
        }}>
          📖
        </div>
        <div>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.2rem', color: 'var(--ink)' }}>
            Fachbegriffe
          </div>
          <div style={{ fontSize: '.78rem', color: 'var(--ink2)', marginTop: 2 }}>
            {allTerms.length} Begriffe
          </div>
        </div>
      </div>

      {/* Barre de recherche */}
      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 12, padding: '10px 16px',
        display: 'flex', alignItems: 'center', gap: 10,
        marginBottom: 16,
      }}>
        <span style={{ color: 'var(--ink3)', fontSize: '1rem' }}>🔍</span>
        <input
          type="text"
          placeholder="Begriff suchen..."
          value={search}
          onChange={e => { setSearch(e.target.value); setExpanded(null) }}
          style={{
            flex: 1, border: 'none', outline: 'none',
            background: 'transparent',
            fontFamily: 'DM Sans, sans-serif', fontSize: '.88rem',
            color: 'var(--ink)',
          }}
        />
        {search && (
          <button
            onClick={() => { setSearch(''); setExpanded(null) }}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--ink3)', fontSize: '1rem', padding: 0,
            }}
          >
            ✕
          </button>
        )}
      </div>

      {/* Résultats */}
      {search && (
        <div style={{ fontSize: '.72rem', color: 'var(--ink3)', marginBottom: 10 }}>
          {filtered.length} Ergebnis{filtered.length !== 1 ? 'se' : ''}
        </div>
      )}

      {/* Liste des termes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {filtered.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '40px 20px',
            color: 'var(--ink3)', fontSize: '.85rem',
          }}>
            Kein Begriff gefunden für „{search}"
          </div>
        ) : (
          filtered.map((item, i) => {
            const isOpen = expanded === i
            return (
              <div
                key={i}
                onClick={() => setExpanded(isOpen ? null : i)}
                style={{
                  background: 'var(--card)',
                  border: `1px solid ${isOpen ? 'rgba(45,212,191,.3)' : 'var(--border)'}`,
                  borderRadius: 12,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all .2s',
                }}
              >
                {/* Term header */}
                <div style={{
                  padding: '13px 16px',
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                    background: isOpen ? 'var(--teal-dim)' : 'var(--bg3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '.72rem', fontWeight: 700,
                    color: isOpen ? 'var(--teal)' : 'var(--ink3)',
                    transition: 'all .2s',
                  }}>
                    {item.term.slice(0, 2).toUpperCase()}
                  </div>
                  <div style={{
                    flex: 1, fontWeight: 600, fontSize: '.88rem',
                    color: isOpen ? 'var(--teal)' : 'var(--ink)',
                    transition: 'color .2s',
                  }}>
                    {item.term}
                  </div>
                  <span style={{
                    color: 'var(--ink3)', fontSize: '.9rem',
                    transform: isOpen ? 'rotate(90deg)' : 'none',
                    transition: 'transform .2s', display: 'inline-block',
                  }}>
                    ›
                  </span>
                </div>

                {/* Définition */}
                {isOpen && (
                  <div style={{
                    padding: '0 16px 14px 60px',
                    fontSize: '.82rem', color: 'var(--ink)',
                    lineHeight: 1.6,
                    borderTop: '1px solid var(--border)',
                    paddingTop: 12,
                  }}>
                    {item.def}
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
