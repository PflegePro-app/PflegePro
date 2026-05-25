import { useContext, useState, useMemo } from 'react'
import { AppContext } from '../App'
import { useSpeech } from '../hooks/useSpeech'
import { useSpacedRepetition } from '../hooks/useSpacedRepetition'

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
  'Hygiene':    { bg: 'var(--green-dim)',  color: 'var(--green)',  back: '#0d2e1a' },
  'Körperpflege': { bg: 'var(--purple-dim)', color: 'var(--purple)', back: '#2a1a4a' },
  'Pharmakologie': { bg: 'var(--indigo-dim)', color: 'var(--indigo)', back: '#1e1b4b' },
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
  'Hygiene':    '🧼',
  'Körperpflege': '🛁',
  'Pharmakologie': '💊',
  'Pflege':     '💙',
}

export default function Fachbegriffe() {
  const { FACHBEGRIFFE } = useContext(AppContext)
  const { speak, isSpeaking } = useSpeech()
  const { addCard, removeCard, hasCard } = useSpacedRepetition()

  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('Alle')
  const [flipped, setFlipped] = useState({})
  const [toast, setToast] = useState(null)
  const [seenIntro, setSeenIntro] = useState(() => localStorage.getItem('pflegepro_srs_intro') === 'true')

  const allTerms = useMemo(() => [...(Array.isArray(FACHBEGRIFFE) ? FACHBEGRIFFE : Object.values(FACHBEGRIFFE).flat())].sort(() => Math.random() - 0.5), [FACHBEGRIFFE])

  const categories = ['Alle', ...Object.keys(CAT_STYLES)]

  const filtered = (() => {
    const q = search.trim().toLowerCase()
    const results = allTerms.filter(t => {
      const matchSearch = !q ||
        t.term.toLowerCase().includes(q) ||
        t.def.toLowerCase().includes(q)
      const matchCat = activeFilter === 'Alle' || (t.category || 'Pflege') === activeFilter
      return matchSearch && matchCat
    })
    if (!q) return results
    // Tri par pertinence : exact > début de mot > term contient > def contient
    return results.sort((a, b) => {
      const aTerm = a.term.toLowerCase()
      const bTerm = b.term.toLowerCase()
      const aExact = aTerm === q ? 0 : 99
      const bExact = bTerm === q ? 0 : 99
      if (aExact !== bExact) return aExact - bExact
      const aStarts = aTerm.startsWith(q) ? 1 : 99
      const bStarts = bTerm.startsWith(q) ? 1 : 99
      if (aStarts !== bStarts) return aStarts - bStarts
      const aInTerm = aTerm.includes(q) ? 2 : 99
      const bInTerm = bTerm.includes(q) ? 2 : 99
      if (aInTerm !== bInTerm) return aInTerm - bInTerm
      return 0
    })
  })()

  const toggleFlip = (i) => {
    const wasFlipped = !!flipped[i]
    setFlipped(prev => ({ ...prev, [i]: !prev[i] }))
    // Auto-ajout au flip (uniquement quand on révèle, pas quand on referme)
    if (!wasFlipped) {
      const item = filtered[i]
      if (item && !hasCard(item.term)) {
        const added = addCard(item.term)
        if (added && !seenIntro) {
          // 1ère fois — afficher toast explicatif
          setToast({
            term: item.term,
            message: 'wurde zu deinen Wiederholungen hinzugefügt! Sieh sie unter "Heute".',
            isIntro: true,
          })
          localStorage.setItem('pflegepro_srs_intro', 'true')
          setSeenIntro(true)
        } else if (added) {
          // Toast plus discret pour les suivantes
          setToast({ term: item.term, message: 'hinzugefügt', isIntro: false })
        }
        setTimeout(() => setToast(null), seenIntro ? 2000 : 5000)
      }
    }
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
                      <div className="fach-term" style={{ marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                        <span>{item.term}</span>
                        <button
                          onClick={(e) => { e.stopPropagation(); speak(item.term); }}
                          style={{
                            background: 'rgba(255,255,255,.12)',
                            border: '1px solid rgba(255,255,255,.15)',
                            borderRadius: '50%',
                            width: 32, height: 32,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', padding: 0, fontSize: '1rem',
                            transition: 'transform .15s ease',
                          }}
                          title="Aussprache anhören"
                        >🔊</button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            if (hasCard(item.term)) removeCard(item.term)
                            else addCard(item.term)
                          }}
                          style={{
                            background: hasCard(item.term) ? 'rgba(16,185,129,.2)' : 'rgba(255,255,255,.12)',
                            border: hasCard(item.term) ? '1px solid rgba(16,185,129,.5)' : '1px solid rgba(255,255,255,.15)',
                            borderRadius: '50%',
                            width: 32, height: 32,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', padding: 0, fontSize: '1rem',
                            transition: 'transform .15s ease',
                          }}
                          title={hasCard(item.term) ? 'Aus Wiederholungen entfernen' : 'Zu Wiederholungen hinzufügen'}
                        >{hasCard(item.term) ? '✅' : '📌'}</button>
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
      {/* Toast notification */}
      {toast && (
        <div style={{
          position: 'fixed',
          bottom: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          background: toast.isIntro
            ? 'linear-gradient(135deg, #6366f1, #a855f7)'
            : 'var(--card)',
          color: toast.isIntro ? 'white' : 'var(--ink)',
          border: toast.isIntro ? 'none' : '1px solid var(--border)',
          borderRadius: 14,
          padding: toast.isIntro ? '14px 18px' : '10px 16px',
          boxShadow: '0 8px 24px rgba(0,0,0,.25)',
          zIndex: 1000,
          maxWidth: '90%',
          fontSize: toast.isIntro ? '.85rem' : '.8rem',
          fontWeight: 600,
          animation: 'toastSlideUp .3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <span style={{ fontSize: toast.isIntro ? '1.3rem' : '1rem' }}>
            {toast.isIntro ? '💡' : '✅'}
          </span>
          <div>
            {toast.isIntro && (
              <div style={{ fontWeight: 700, marginBottom: 4 }}>
                Tipp: Wiederholungen
              </div>
            )}
            <div>
              <strong>{toast.term}</strong> {toast.message}
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes toastSlideUp {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </div>
  )
}
