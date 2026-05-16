import { useContext, useState, useMemo, useEffect, useRef } from 'react'
import { AppContext } from '../App'

export default function SearchModal({ onClose }) {
  const { THEMES, LESSON_CONTENT, FACHBEGRIFFE, openLesson, nav } = useContext(AppContext)
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 100)
  }, [])

  // ESC pour fermer
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const results = useMemo(() => {
    if (!query || query.length < 2) return { lessons: [], fachbegriffe: [] }
    const q = query.toLowerCase()
    const lessons = []
    const fachbegriffe = []

    // Helper: extrait le texte propre depuis HTML via DOMParser
    const cleanText = (html) => {
      try {
        const doc = new DOMParser().parseFromString(html, 'text/html')
        doc.querySelectorAll('script, style').forEach(el => el.remove())
        let text = doc.body ? doc.body.textContent : ''
        return text.replace(/\s+/g, ' ').trim()
      } catch (e) {
        return ''
      }
    }

    // Recherche dans les leçons
    THEMES.forEach(theme => {
      theme.lessons.forEach(lessonName => {
        let rawHtml = ''
        try {
          const c = LESSON_CONTENT?.[theme.id]?.[lessonName]
          rawHtml = typeof c === 'function' ? c() : (c || '')
        } catch (e) { rawHtml = '' }
        const cleanContent = cleanText(rawHtml)
        const matchTitle = lessonName.toLowerCase().includes(q)
        const matchContent = cleanContent.toLowerCase().includes(q)
        if (matchTitle || matchContent) {
          let snippet = ''
          if (matchContent) {
            const idx = cleanContent.toLowerCase().indexOf(q)
            const start = Math.max(0, idx - 50)
            const end = Math.min(cleanContent.length, idx + q.length + 80)
            snippet = (start > 0 ? '...' : '') + cleanContent.slice(start, end) + (end < cleanContent.length ? '...' : '')
          }
          lessons.push({ theme, lessonName, snippet, matchTitle })
        }
      })
    })

    // Recherche dans Fachbegriffe
    if (Array.isArray(FACHBEGRIFFE)) {
      FACHBEGRIFFE.forEach(f => {
        if (f.term?.toLowerCase().includes(q) || f.def?.toLowerCase().includes(q)) {
          fachbegriffe.push(f)
        }
      })
    }

    return { lessons: lessons.slice(0, 20), fachbegriffe: fachbegriffe.slice(0, 15) }
  }, [query, THEMES, LESSON_CONTENT, FACHBEGRIFFE])

  const handleLessonClick = (theme, lessonName) => {
    openLesson(theme.id, lessonName)
    onClose()
    // Après l'ouverture, scroller vers le mot trouvé
    setTimeout(() => {
      const term = query.trim()
      if (!term) return
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
      let node
      while (node = walker.nextNode()) {
        if (node.nodeValue && node.nodeValue.toLowerCase().includes(term.toLowerCase())) {
          const el = node.parentElement
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 100
            window.scrollTo({ top, behavior: 'smooth' })
            // Highlight temporaire
            const oldBg = el.style.background
            const oldTrans = el.style.transition
            el.style.transition = 'background .3s'
            el.style.background = 'rgba(245,158,11,.35)'
            setTimeout(() => {
              el.style.background = oldBg
              setTimeout(() => { el.style.transition = oldTrans }, 400)
            }, 2500)
            break
          }
        }
      }
    }, 600)
  }

  const handleFachClick = () => {
    nav('fachbegriffe')
    onClose()
  }

  const highlight = (text, q) => {
    if (!q || !text) return text
    const idx = text.toLowerCase().indexOf(q.toLowerCase())
    if (idx === -1) return text
    return (
      <>
        {text.slice(0, idx)}
        <mark style={{ background: 'var(--amber)', color: 'var(--ink)', padding: '0 2px', borderRadius: 3 }}>
          {text.slice(idx, idx + q.length)}
        </mark>
        {text.slice(idx + q.length)}
      </>
    )
  }

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)', zIndex: 9999,
      display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
      padding: '60px 16px 16px', backdropFilter: 'blur(4px)',
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: 'var(--bg)', borderRadius: 16,
        width: '100%', maxWidth: 600, maxHeight: '80vh',
        display: 'flex', flexDirection: 'column',
        boxShadow: '0 20px 60px rgba(0,0,0,.4)',
        border: '1px solid var(--border)',
      }}>
        {/* Search Input */}
        <div style={{
          padding: '14px 16px', borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ fontSize: '1.2rem' }}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Suchen in Lektionen & Fachbegriffe..."
            style={{
              flex: 1, background: 'transparent', border: 'none', outline: 'none',
              color: 'var(--ink)', fontSize: '1rem', fontFamily: 'DM Sans,sans-serif',
            }}
          />
          <button onClick={onClose} style={{
            background: 'var(--bg3)', border: 'none', color: 'var(--ink2)',
            borderRadius: 8, padding: '4px 10px', cursor: 'pointer',
            fontSize: '.75rem', fontWeight: 600,
          }}>ESC</button>
        </div>

        {/* Results */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
          {!query || query.length < 2 ? (
            <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--ink3)', fontSize: '.9rem' }}>
              Tippe mindestens 2 Buchstaben...
            </div>
          ) : (
            <>
              {results.lessons.length === 0 && results.fachbegriffe.length === 0 && (
                <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--ink3)' }}>
                  Keine Ergebnisse für "<strong>{query}</strong>"
                </div>
              )}

              {results.lessons.length > 0 && (
                <div>
                  <div style={{
                    padding: '8px 16px', fontSize: '.7rem', fontWeight: 700,
                    color: 'var(--ink3)', textTransform: 'uppercase', letterSpacing: '.5px',
                  }}>📖 Lektionen ({results.lessons.length})</div>
                  {results.lessons.map((r, i) => (
                    <div key={i} onClick={() => handleLessonClick(r.theme, r.lessonName)} style={{
                      padding: '10px 16px', cursor: 'pointer',
                      borderBottom: '1px solid var(--border)',
                      transition: 'background .15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                        <span style={{ fontSize: '1rem' }}>{r.theme.icon}</span>
                        <span style={{
                          fontSize: '.7rem', color: 'var(--ink3)', fontWeight: 600,
                          padding: '2px 6px', borderRadius: 4, background: `var(--${r.theme.col}-dim)`,
                        }}>{r.theme.name}</span>
                      </div>
                      <div style={{
                        fontFamily: "'Fraunces',serif", fontSize: '.95rem',
                        fontWeight: 600, color: 'var(--ink)', marginBottom: 2,
                      }}>{highlight(r.lessonName, query)}</div>
                      {r.snippet && (
                        <div style={{ fontSize: '.78rem', color: 'var(--ink2)', lineHeight: 1.4 }}>
                          {highlight(r.snippet, query)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {results.fachbegriffe.length > 0 && (
                <div>
                  <div style={{
                    padding: '12px 16px 8px', fontSize: '.7rem', fontWeight: 700,
                    color: 'var(--ink3)', textTransform: 'uppercase', letterSpacing: '.5px',
                  }}>📚 Fachbegriffe ({results.fachbegriffe.length})</div>
                  {results.fachbegriffe.map((f, i) => (
                    <div key={i} onClick={handleFachClick} style={{
                      padding: '10px 16px', cursor: 'pointer',
                      borderBottom: '1px solid var(--border)',
                      transition: 'background .15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <div style={{
                        fontFamily: "'Fraunces',serif", fontSize: '.92rem',
                        fontWeight: 700, color: 'var(--teal)', marginBottom: 2,
                      }}>{highlight(f.term, query)}</div>
                      <div style={{ fontSize: '.8rem', color: 'var(--ink2)', lineHeight: 1.4 }}>
                        {highlight(f.def, query)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
