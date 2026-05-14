import { useContext, useState } from 'react'
import { AppContext } from '../App'

export default function Praxis() {
  const { PRAXIS_DATA } = useContext(AppContext)

  const contexts = Object.entries(PRAXIS_DATA)
  const [activeCtx, setActiveCtx] = useState(contexts[0]?.[0] || '')
  const [showFr, setShowFr] = useState(false)
  const [tab, setTab] = useState('expressions') // 'expressions' | 'material'

  const current = PRAXIS_DATA[activeCtx]
  if (!current) return null

  return (
    <div style={{ maxWidth: "100%" }}>

      {/* Header */}
      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 16, padding: '18px 20px', marginBottom: 20,
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{
          width: 46, height: 46, borderRadius: 12,
          background: 'var(--teal-dim)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem', flexShrink: 0,
        }}>
          🏥
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.2rem', color: 'var(--ink)' }}>
            Praxis-Ausdrücke
          </div>
          <div style={{ fontSize: '.78rem', color: 'var(--ink2)', marginTop: 2 }}>
            Deutsch ↔ Français
          </div>
        </div>
        {/* Toggle langue */}
        <button
          onClick={() => setShowFr(!showFr)}
          style={{
            background: showFr ? 'var(--teal)' : 'var(--bg3)',
            color: showFr ? 'white' : 'var(--ink2)',
            border: '1px solid var(--border)',
            borderRadius: 9, padding: '6px 12px',
            cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
            fontSize: '.75rem', fontWeight: 700,
          }}
        >
          {showFr ? '🇫🇷 FR' : '🇩🇪 DE'}
        </button>
      </div>

      {/* Sélecteur de contexte */}
      <div style={{
        display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16,
      }}>
        {contexts.map(([key, val]) => (
          <button
            key={key}
            onClick={() => { setActiveCtx(key); setTab('expressions') }}
            style={{
              background: activeCtx === key ? 'var(--teal)' : 'var(--card)',
              color: activeCtx === key ? 'white' : 'var(--ink2)',
              border: `1px solid ${activeCtx === key ? 'var(--teal)' : 'var(--border)'}`,
              borderRadius: 10, padding: '7px 14px',
              cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
              fontSize: '.78rem', fontWeight: 600,
              transition: 'all .2s',
            }}
          >
            {val.label}
          </button>
        ))}
      </div>

      {/* Tabs expressions / matériel */}
      <div style={{
        display: 'flex', gap: 0, marginBottom: 16,
        background: 'var(--bg3)', borderRadius: 10, padding: 3,
      }}>
        {['expressions', 'material'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              flex: 1,
              background: tab === t ? 'var(--card)' : 'transparent',
              color: tab === t ? 'var(--ink)' : 'var(--ink3)',
              border: 'none', borderRadius: 8,
              padding: '8px', cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '.8rem', fontWeight: 600,
              transition: 'all .2s',
            }}
          >
            {t === 'expressions' ? '💬 Ausdrücke' : '🧰 Material'}
          </button>
        ))}
      </div>

      {/* Contenu */}
      {tab === 'expressions' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {(current.expressions || []).map((expr, i) => (
            <div key={i} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '14px 16px',
            }}>
              {/* Allemand */}
              <div style={{
                fontWeight: 600, fontSize: '.88rem', color: 'var(--ink)',
                marginBottom: showFr ? 8 : 0,
              }}>
                🇩🇪 {expr.de}
              </div>
              {/* Français (toggle) */}
              {showFr && (
                <div style={{
                  fontSize: '.82rem', color: 'var(--teal)',
                  paddingTop: 6, borderTop: '1px solid var(--border)',
                }}>
                  🇫🇷 {expr.fr}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === 'material' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {(current.material || []).length === 0 ? (
            <div style={{
              textAlign: 'center', padding: '30px',
              color: 'var(--ink3)', fontSize: '.85rem',
            }}>
              Kein Material für diesen Kontext.
            </div>
          ) : (
            (current.material || []).map((item, i) => (
              <div key={i} style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 12, padding: '14px 16px',
                display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'var(--teal-dim)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '.88rem', color: 'var(--ink)' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '.76rem', color: 'var(--ink2)', marginTop: 2 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
