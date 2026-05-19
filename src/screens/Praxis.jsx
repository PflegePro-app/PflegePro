import { useContext, useState, useMemo } from 'react'
import { AppContext } from '../App'
import { useSpeech } from '../hooks/useSpeech'

function MaterialFlipCard({ item, index, speak }) {
  const [flipped, setFlipped] = useState(false)
  const hasImage = !!item.image

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="praxis-flip-wrapper"
      style={{
        perspective: 1000,
        animation: `praxisPopIn .4s ease ${index * 0.05}s both`,
        cursor: 'pointer',
        height: 200,
      }}
    >
      <div style={{
        position: 'relative', width: '100%', height: '100%',
        transition: 'transform .6s',
        transformStyle: 'preserve-3d',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
      }}>
        {/* RECTO — Image + Nom */}
        <div style={{
          position: 'absolute', width: '100%', height: '100%',
          backfaceVisibility: 'hidden',
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: '14px 10px',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'space-between',
          gap: 8,
          transition: 'border-color .2s, box-shadow .2s',
        }} className="praxis-flip-front">
          <div style={{
            flex: 1, width: '100%',
            borderRadius: 10,
            background: hasImage ? 'white' : 'linear-gradient(135deg, var(--teal-dim), rgba(20,184,166,.05))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden', position: 'relative',
            border: hasImage ? '1px solid rgba(0,0,0,.05)' : '1px solid rgba(20,184,166,.2)',
          }}>
            {hasImage ? (
              <img src={item.image} alt={item.name} style={{
                width: '100%', height: '100%', objectFit: 'contain', padding: 8,
              }} />
            ) : (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem' }}>{item.icon}</div>
                <div style={{
                  fontSize: '.62rem', color: 'var(--ink3)',
                  marginTop: 6, padding: '2px 8px',
                  background: 'var(--bg3)', borderRadius: 6,
                  display: 'inline-block',
                }}>📸 bald verfügbar</div>
              </div>
            )}
          </div>
          <div style={{
            fontWeight: 700, fontSize: '.85rem', color: 'var(--ink)',
            lineHeight: 1.25, textAlign: 'center',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            <span>{item.name}</span>
            {speak && (
              <button
                onClick={(e) => { e.stopPropagation(); speak(item.name); }}
                style={{
                  background: 'var(--teal-dim)', border: '1px solid var(--teal)',
                  borderRadius: '50%', width: 26, height: 26,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', padding: 0, fontSize: '.75rem',
                  flexShrink: 0,
                }}
                title="Aussprache anhören"
              >🔊</button>
            )}
          </div>
        </div>

        {/* VERSO — Description */}
        <div style={{
          position: 'absolute', width: '100%', height: '100%',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: 'linear-gradient(135deg, var(--teal-dim), var(--card))',
          border: '1px solid var(--teal)',
          borderRadius: 14,
          padding: '16px 14px',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          textAlign: 'center', gap: 10,
        }}>
          <div style={{
            fontSize: '1.4rem',
          }}>💡</div>
          <div style={{
            fontWeight: 700, fontSize: '.82rem', color: 'var(--teal)',
            lineHeight: 1.3,
          }}>
            {item.name}
          </div>
          <div style={{
            fontSize: '.78rem', color: 'var(--ink)', lineHeight: 1.5,
          }}>
            {item.desc}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Praxis() {
  const { PRAXIS_DATA } = useContext(AppContext)

  const contexts = Object.entries(PRAXIS_DATA)
  const [activeCtx, setActiveCtx] = useState(contexts[0]?.[0] || '')
  const [showFr, setShowFr] = useState(false)
  const [tab, setTab] = useState('expressions')
  const { speak } = useSpeech()
  const [search, setSearch] = useState('')

  const current = PRAXIS_DATA[activeCtx]
  if (!current) return null

  // Filtrage par recherche
  const filteredExpressions = useMemo(() => {
    if (!search.trim()) return current.expressions || []
    const q = search.toLowerCase()
    return (current.expressions || []).filter(e =>
      e.de.toLowerCase().includes(q) || e.fr.toLowerCase().includes(q)
    )
  }, [current, search])

  const filteredMaterial = useMemo(() => {
    if (!search.trim()) return current.material || []
    const q = search.toLowerCase()
    return (current.material || []).filter(m =>
      m.name.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q)
    )
  }, [current, search])

  const exprCount = (current.expressions || []).length
  const matCount = (current.material || []).length

  return (
    <div style={{ maxWidth: '100%' }}>

      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #134e4a, #0f766e, #0d1117)',
        borderRadius: 18,
        padding: '24px 22px',
        marginBottom: 20,
        position: 'relative',
        overflow: 'hidden',
        animation: 'praxisHero .6s ease',
      }}>
        {/* Glow décoratif */}
        <div style={{
          position: 'absolute',
          top: -40, right: -40,
          width: 140, height: 140,
          background: 'radial-gradient(circle, rgba(45,212,191,.25), transparent 70%)',
          borderRadius: '50%',
        }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'rgba(45,212,191,.2)',
            border: '1px solid rgba(45,212,191,.3)',
            borderRadius: 20,
            padding: '4px 12px',
            fontSize: '.68rem', fontWeight: 700,
            letterSpacing: '.5px', textTransform: 'uppercase',
            color: 'rgba(167,243,208,.95)',
            marginBottom: 12,
          }}>
            🏥 Praxis
          </div>
          <div style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(1.4rem,3vw,1.8rem)',
            color: 'white', lineHeight: 1.2, marginBottom: 6,
          }}>
            Praxis-Ausdrücke & Material
          </div>
          <div style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.65)' }}>
            Deutsch ↔ Français · Auf der Station perfekt vorbereitet
          </div>
        </div>
      </div>

      {/* Sélecteur de contexte (scroll horizontal) */}
      <div style={{
        display: 'flex', gap: 8,
        overflowX: 'auto', overflowY: 'hidden',
        paddingBottom: 8, marginBottom: 14,
        scrollbarWidth: 'none', msOverflowStyle: 'none',
      }} className="praxis-ctx-scroll">
        {contexts.map(([key, val]) => (
          <button
            key={key}
            onClick={() => { setActiveCtx(key); setTab('expressions'); setSearch('') }}
            style={{
              background: activeCtx === key
                ? 'linear-gradient(135deg, var(--teal), #0f766e)'
                : 'var(--card)',
              color: activeCtx === key ? 'white' : 'var(--ink2)',
              border: `1px solid ${activeCtx === key ? 'var(--teal)' : 'var(--border)'}`,
              borderRadius: 11,
              padding: '9px 16px',
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '.8rem', fontWeight: 600,
              whiteSpace: 'nowrap', flexShrink: 0,
              transition: 'all .2s',
              boxShadow: activeCtx === key ? '0 4px 12px rgba(20,184,166,.3)' : 'none',
            }}
          >
            {val.label}
          </button>
        ))}
      </div>

      {/* Tabs avec compteurs */}
      <div style={{
        display: 'flex', gap: 0, marginBottom: 14,
        background: 'var(--bg3)', borderRadius: 12, padding: 4,
      }}>
        {[
          { id: 'expressions', icon: '💬', label: 'Ausdrücke', count: exprCount },
          { id: 'material', icon: '🧰', label: 'Material', count: matCount },
        ].map(t => (
          <button
            key={t.id}
            onClick={() => { setTab(t.id); setSearch('') }}
            style={{
              flex: 1,
              background: tab === t.id ? 'var(--card)' : 'transparent',
              color: tab === t.id ? 'var(--ink)' : 'var(--ink3)',
              border: 'none', borderRadius: 9,
              padding: '10px 8px', cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '.83rem', fontWeight: 600,
              transition: 'all .25s',
              boxShadow: tab === t.id ? '0 2px 6px rgba(0,0,0,.15)' : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}
          >
            <span>{t.icon}</span>
            <span>{t.label}</span>
            <span style={{
              background: tab === t.id ? 'var(--teal-dim)' : 'transparent',
              color: tab === t.id ? 'var(--teal)' : 'var(--ink3)',
              borderRadius: 8, padding: '1px 7px',
              fontSize: '.7rem', fontWeight: 700,
            }}>{t.count}</span>
          </button>
        ))}
      </div>

      {/* Barre recherche + Toggle FR */}
      <div style={{
        display: 'flex', gap: 8, marginBottom: 16,
      }}>
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', gap: 8,
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 11, padding: '9px 14px',
        }}>
          <span style={{ fontSize: '.95rem' }}>🔍</span>
          <input
            type="text" value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={tab === 'expressions' ? 'Ausdruck suchen...' : 'Material suchen...'}
            style={{
              flex: 1, background: 'transparent', border: 'none', outline: 'none',
              color: 'var(--ink)', fontFamily: 'DM Sans, sans-serif',
              fontSize: '.85rem',
            }}
          />
          {search && (
            <button onClick={() => setSearch('')} style={{
              background: 'transparent', border: 'none', color: 'var(--ink3)',
              cursor: 'pointer', fontSize: '.9rem', padding: 0,
            }}>✕</button>
          )}
        </div>
        {tab === 'expressions' && (
          <button onClick={() => setShowFr(!showFr)} style={{
            background: showFr ? 'var(--teal)' : 'var(--card)',
            color: showFr ? 'white' : 'var(--ink2)',
            border: `1px solid ${showFr ? 'var(--teal)' : 'var(--border)'}`,
            borderRadius: 11, padding: '0 14px', cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif', fontSize: '.78rem', fontWeight: 700,
            flexShrink: 0, transition: 'all .2s',
            boxShadow: showFr ? '0 2px 8px rgba(20,184,166,.3)' : 'none',
          }}>
            {showFr ? '🇫🇷 FR' : '🇩🇪 DE'}
          </button>
        )}
      </div>

      {/* Contenu Expressions */}
      {tab === 'expressions' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {filteredExpressions.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 40, color: 'var(--ink3)', fontSize: '.85rem' }}>
              {search ? `Keine Ergebnisse für "${search}"` : 'Keine Ausdrücke'}
            </div>
          ) : filteredExpressions.map((expr, i) => (
            <div key={i} className="praxis-expr-card" style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 13, padding: '14px 16px',
              animation: `praxisFadeIn .35s ease ${i * 0.04}s both`,
              transition: 'transform .15s ease, border-color .2s',
            }}>
              <div style={{
                fontWeight: 600, fontSize: '.9rem', color: 'var(--ink)',
                lineHeight: 1.5, marginBottom: showFr ? 8 : 0,
              }}>
                <span style={{
                  display: 'inline-block', marginRight: 6,
                  fontSize: '.78rem', padding: '1px 7px',
                  background: 'var(--bg3)', borderRadius: 6, color: 'var(--ink3)',
                }}>DE</span>
                <span>{expr.de}</span>
                <button
                  onClick={(e) => { e.stopPropagation(); speak(expr.de); }}
                  style={{
                    marginLeft: 8, background: 'var(--teal-dim)',
                    border: '1px solid var(--teal)', borderRadius: '50%',
                    width: 26, height: 26, display: 'inline-flex',
                    alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', padding: 0, fontSize: '.75rem',
                    verticalAlign: 'middle',
                  }}
                  title="Aussprache anhören"
                >🔊</button>
              </div>
              {showFr && (
                <div style={{
                  fontSize: '.83rem', color: 'var(--teal)',
                  paddingTop: 8, borderTop: '1px solid var(--border)',
                  lineHeight: 1.5,
                }}>
                  <span style={{
                    display: 'inline-block', marginRight: 6,
                    fontSize: '.78rem', padding: '1px 7px',
                    background: 'var(--teal-dim)', borderRadius: 6,
                  }}>FR</span>
                  {expr.fr}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Contenu Material - Flip cards */}
      {tab === 'material' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: 12,
        }}>
          {filteredMaterial.length === 0 ? (
            <div style={{
              gridColumn: '1/-1', textAlign: 'center', padding: 40,
              color: 'var(--ink3)', fontSize: '.85rem',
            }}>
              {search ? `Keine Ergebnisse für "${search}"` : 'Kein Material'}
            </div>
          ) : filteredMaterial.map((item, i) => (
            <MaterialFlipCard key={i} item={item} index={i} speak={speak} />
          ))}
        </div>
      )}

      {/* Animations CSS inline */}
      <style>{`
        .praxis-ctx-scroll::-webkit-scrollbar { display: none; }
        .praxis-expr-card:hover {
          border-color: var(--teal) !important;
          transform: translateX(3px);
        }
        .praxis-flip-wrapper:hover .praxis-flip-front {
          border-color: var(--teal) !important;
          box-shadow: 0 6px 16px rgba(20,184,166,.15);
        }
        @keyframes praxisHero {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes praxisFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes praxisPopIn {
          from { opacity: 0; transform: scale(.9); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
