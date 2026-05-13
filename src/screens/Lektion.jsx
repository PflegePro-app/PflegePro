import { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../App'

export default function Lektion() {
  const {
    currentTheme,
    currentLesson,
    nav,
    LESSON_CONTENT,
  } = useContext(AppContext)

  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [currentLesson])

  if (!currentTheme || !currentLesson) return null

  const t = currentTheme
  const themeContent = LESSON_CONTENT[t.id]
  const lessonFn = themeContent && themeContent[currentLesson]
  const html = lessonFn ? lessonFn() : null

  return (
    <div
      ref={scrollRef}
      style={{
        maxWidth: 760,
        margin: '0 auto',
      }}
    >
      {/* Bouton retour */}
      <button
        onClick={() => nav('detail')}
        style={{
          background: 'var(--bg3)',
          border: '1px solid var(--border)',
          color: 'var(--ink2)',
          padding: '7px 14px',
          borderRadius: 9,
          cursor: 'pointer',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '.78rem',
          fontWeight: 600,
          marginBottom: 20,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        ← {t.name}
      </button>

      {/* Contenu de la leçon */}
      {html ? (
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ width: '100%' }}
        />
      ) : (
        /* Leçon sans contenu encore */
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: '40px 28px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🚧</div>
          <div style={{
            fontFamily: 'Fraunces, serif',
            fontSize: '1.2rem',
            color: 'var(--ink)',
            marginBottom: 8,
          }}>
            {currentLesson}
          </div>
          <div style={{ fontSize: '.85rem', color: 'var(--ink2)' }}>
            Dieser Inhalt wird bald verfügbar sein.
          </div>
        </div>
      )}
    </div>
  )
}
