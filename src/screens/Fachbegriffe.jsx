import { useContext, useState, useMemo } from 'react'
import { AppContext } from '../App'

// Couleurs exactes des thèmes PflegePro
const CAT_STYLES = {
  'Haut':       { bg: 'var(--green-dim)',  color: 'var(--green)',  back: '#0d2e1a' },
  'Dekubitus':  { bg: 'var(--rose-dim)',   color: 'var(--rose)',   back: '#3f1515' },
  'Blutzucker': { bg: 'var(--teal-dim)',   color: 'var(--teal)',   back: '#0d3330' },
  'Niere':      { bg: 'var(--blue-dim)',   color: 'var(--blue)',   back: '#1e3a5f' },
  'Gefäße':     { bg: 'var(--rose-dim)',   color: 'var(--rose)',   back: '#3f1515' },
  'Herz':       { bg: 'var(--rose-dim)',   color: 'var(--rose)',   back: '#3f1515' },
  'EKG':        { bg: 'var(--purple-dim)', color: 'var(--purple)', back: '#2a1a3f' },
  'Atmung':     { bg: 'var(--blue-dim)',   color: 'var(--blue)',   back: '#1e3a5f' },
  'Pflege':     { bg: 'var(--purple-dim)', color: 'var(--purple)', back: '#2a1a3f' },
}

const CAT_ICONS = {
  'Haut':       '🩹',
  'Dekubitus':  '🩺',
  'Blutzucker': '🩸',
  'Niere':      '💧',
  'Gefäße':     '🩸',
  'Herz':       '🫀',
  'EKG':        '⚡',
  'Atmung':     '🫁',
  'Pflege':     '💙',
}

export default function Fachbegriffe() {
  const { FACHBEGRIFFE } = useContext(AppContext)

  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('Alle')
  const [flipped, setFlipped] = useState({})

  const allTerms = useMemo(() => [...(Array.isArray(FACHBEGRIFFE) ? FACHBEGRIFFE : Object.values(FACHBEGRIFFE).flat())].sort(() => Math.random() - 0.5), [FACHBEGRIFFE])

  const categories = ['Alle', ...Object.keys(CAT_STYLES)]

  const filtered = allTerms.filter(t => {
    const matchSearch = !search.trim() ||
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.def.toLowerCase().includes(search.toLowerCase())
    const matchCat = activeFilter === 'Alle' || (t.category || 'Pflege') === activeFilter
    return matchSearch && matchCat
  })

  const toggleFlip = (i) => {
    setFlipped(prev => ({ ...prev, [i]: !prev[i] }))
  }

  function getCatStyle(cat) {
    return CAT_STYLES[cat] || CAT_STYLES['Pflege']
  }

  return (
    <div style={{ maxWidth: '100%' }}>

      {/* Header */}
      <div className="fach-header">
        <div className="fach-search-wrap">
          <span className="fach-search-icon">🔍</span>
          <input
            className="fach-search"
            type="text"
            placeholder="Begriff suchen..."
            value={search}
            onChange={e => { setSearch(e.target.value); setFlipped({}) }}
          />
          {search && (
            <button
              onClick={() => { setSearch(''); setFlipped({}) }}
              style={{ position:'absolute', right:14, top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', color:'var(--ink3)', fontSize:'1rem', padding:0 }}
            >✕</button>
          )}
        </div>
        <div className="fach-stats">{filtered.length} / {allTerms.length} Begriffe</div>
      </div>

      {/* Filtres par catégorie avec icônes */}
      <div className="fach-filter">
        <button
          className={`fach-filter-btn${activeFilter === 'Alle' ? ' active' : ''}`}
          onClick={() => { setActiveFilter('Alle'); setFlipped({}) }}
        >
          Alle
        </button>
        {Object.keys(CAT_STYLES).map(cat => {
          const cs = CAT_STYLES[cat]
          const isActive = activeFilter === cat
          return (
            <button
              key={cat}
              onClick={() => { setActiveFilter(cat); setFlipped({}) }}
              style={{
                background: isActive ? cs.color : 'var(--bg3)',
                border: `1.5px solid ${isActive ? cs.color : 'var(--border)'}`,
                color: isActive ? 'white' : 'var(--ink2)',
                padding: '5px 14px',
                borderRadius: 20,
                cursor: 'pointer',
                fontSize: '.72rem',
                fontWeight: 600,
                transition: 'all .2s',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {CAT_ICONS[cat]} {cat}
            </button>
          )
        })}
      </div>

      {/* Grille flip cards */}
      {filtered.length === 0 ? (
        <div className="fach-empty">
          Kein Begriff gefunden für „{search}"
        </div>
      ) : (
        <div className="fach-grid">
          {filtered.map((item, i) => {
            const cat = item.category || 'Pflege'
            const cs = getCatStyle(cat)
            const isFlipped = !!flipped[i]

            return (
              <div
                key={i}
                className={`fach-card${isFlipped ? ' flipped' : ''}`}
                onClick={() => toggleFlip(i)}
                style={{ animationDelay: `${(i % 12) * 40}ms` }}
              >
                <div className="fach-card-inner">

                  {/* FACE AVANT */}
                  <div className="fach-front">
                    <div>
                      <div
                        className="fach-category"
                        style={{ background: cs.bg, color: cs.color }}
                      >
                        {CAT_ICONS[cat]} {cat}
                      </div>
                      <div className="fach-term" style={{ marginTop: 8 }}>
                        {item.term}
                      </div>
                    </div>
                    <div className="fach-hint-txt">
                      👆 Tippen zum Aufdecken
                    </div>
                  </div>

                  {/* FACE ARRIÈRE */}
                  <div
                    className="fach-back"
                    style={{
                      background: cs.back,
                      border: `1.5px solid ${cs.color}40`,
                    }}
                  >
                    <div className="fach-def">{item.def}</div>
                    <div
                      className="fach-term-small"
                      style={{ color: cs.color }}
                    >
                      {item.term}
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
