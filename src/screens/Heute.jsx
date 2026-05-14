import { useContext } from 'react'
import { AppContext } from '../App'

export default function Heute() {
  const {
    progress,
    THEMES,
    QUIZZES,
    openDetail,
    openLesson,
    startQuiz,
  } = useContext(AppContext)

  const lessonsRead = progress.lessonsRead || []
  const levels = progress.levels || {}

  // Stats globales
  const totalLessons = THEMES.reduce((acc, t) => acc + t.lessons.length, 0)
  const readCount = lessonsRead.length
  const quizCount = progress.quizCount || 0

  const allScores = Object.values(levels).flatMap(l => l.levelScores || []).filter(s => s !== undefined)
  const avgScore = allScores.length > 0
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length * 100)
    : 0

  function getLevelScore(themeId, lvl) {
    const ld = levels[themeId]
    if (!ld?.levelScores) return null
    const s = ld.levelScores[lvl]
    return s !== undefined ? Math.round(s * 100) : null
  }

  function isLevelUnlocked(themeId, lvl) {
    if (lvl === 0) return true
    const ld = levels[themeId]
    if (!ld?.levelScores) return false
    return (ld.levelScores[lvl - 1] || 0) >= 0.70
  }

  function getTotalLevels(themeId) {
    return Math.min(3, Math.ceil((QUIZZES[themeId] || []).length / 3))
  }

  const levelNames = ['Basis', 'Fortgeschritten', 'Experte']

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
          background: 'var(--amber-dim)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem', flexShrink: 0,
        }}>
          📅
        </div>
        <div>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.2rem', color: 'var(--ink)' }}>
            Mein Fortschritt
          </div>
          <div style={{ fontSize: '.78rem', color: 'var(--ink2)', marginTop: 2 }}>
            Übersicht · Stand heute
          </div>
        </div>
      </div>

      {/* Stats globales */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
        {[
          { label: 'Lektionen gelesen', value: `${readCount} / ${totalLessons}`, icon: '📖' },
          { label: 'Quiz gemacht', value: quizCount, icon: '🎯' },
          { label: 'Ø Score', value: `${avgScore}%`, icon: '📊' },
          { label: 'Streak', value: `${progress.streak || 0} 🔥`, icon: '🔥' },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 14, padding: '16px',
          }}>
            <div style={{ fontSize: '1.4rem', marginBottom: 6 }}>{s.icon}</div>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.5rem', color: 'var(--ink)', marginBottom: 2 }}>
              {s.value}
            </div>
            <div style={{ fontSize: '.72rem', color: 'var(--ink3)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Par thème */}
      {THEMES.map(t => {
        const totalLvl = getTotalLevels(t.id)
        const readLessons = t.lessons.filter(l => lessonsRead.includes(`${t.id}::${l}`))
        const lessonPct = Math.round(readLessons.length / t.lessons.length * 100)

        return (
          <div key={t.id} style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 16, padding: '18px 20px', marginBottom: 16,
          }}>
            {/* Thème header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: `var(--${t.col}-dim)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', flexShrink: 0,
              }}>
                {t.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '.88rem', color: 'var(--ink)' }}>{t.name}</div>
                <div style={{ fontSize: '.72rem', color: 'var(--ink3)', marginTop: 2 }}>
                  {readLessons.length} / {t.lessons.length} Lerneinheiten gelesen
                </div>
              </div>
              <button
                onClick={() => openDetail(t)}
                style={{
                  background: 'var(--bg3)', border: '1px solid var(--border)',
                  color: 'var(--ink2)', padding: '5px 10px', borderRadius: 8,
                  cursor: 'pointer', fontSize: '.72rem', fontWeight: 600,
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                Öffnen →
              </button>
            </div>

            {/* Barre progression leçons */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: '.7rem', color: 'var(--ink3)' }}>📖 Lerneinheiten</span>
                <span style={{ fontSize: '.7rem', color: 'var(--ink2)', fontWeight: 700 }}>{lessonPct}%</span>
              </div>
              <div style={{ height: 6, background: 'var(--bg3)', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', borderRadius: 3,
                  background: lessonPct === 100 ? 'var(--green)' : 'var(--teal)',
                  width: `${lessonPct}%`, transition: 'width .5s',
                }} />
              </div>
            </div>

            {/* Leçons liste */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 16 }}>
              {t.lessons.map((lesson, i) => {
                const isRead = lessonsRead.includes(`${t.id}::${lesson}`)
                return (
                  <div
                    key={i}
                    onClick={() => openLesson(t.id, lesson)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '8px 10px', borderRadius: 9,
                      background: isRead ? 'var(--green-dim)' : 'var(--bg3)',
                      cursor: 'pointer', transition: 'all .2s',
                    }}
                  >
                    <span style={{ fontSize: '.85rem' }}>{isRead ? '✅' : '🔲'}</span>
                    <span style={{ fontSize: '.78rem', color: 'var(--ink)', fontWeight: isRead ? 500 : 400 }}>
                      {lesson}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Quiz niveaux */}
            <div style={{
              fontSize: '.7rem', fontWeight: 700, color: 'var(--ink3)',
              marginBottom: 8, letterSpacing: '.5px', textTransform: 'uppercase',
            }}>
              🎯 Quiz
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {Array.from({ length: totalLvl }, (_, lvl) => {
                const score = getLevelScore(t.id, lvl)
                const unlocked = isLevelUnlocked(t.id, lvl)
                const passed = score !== null && score >= 70

                let bg = 'var(--bg3)'
                let borderCol = 'var(--border)'
                let scoreColor = 'var(--ink3)'
                let statusText = '🔒 Gesperrt'

                if (unlocked) {
                  if (score === null) {
                    bg = 'var(--card)'
                    borderCol = 'var(--teal)'
                    scoreColor = 'var(--teal)'
                    statusText = '▶ Starten'
                  } else if (passed) {
                    bg = 'var(--green-dim)'
                    borderCol = 'rgba(74,222,128,.3)'
                    scoreColor = 'var(--green)'
                    statusText = '✓ Bestanden'
                  } else {
                    bg = 'var(--rose-dim)'
                    borderCol = 'rgba(251,113,133,.2)'
                    scoreColor = 'var(--rose)'
                    statusText = '↺ Wiederholen'
                  }
                }

                return (
                  <div
                    key={lvl}
                    onClick={() => unlocked && startQuiz(t.id, lvl, 'heute')}
                    style={{
                      flex: 1, minWidth: 80,
                      background: bg,
                      border: `1px solid ${borderCol}`,
                      borderRadius: 10, padding: '10px 8px',
                      textAlign: 'center',
                      cursor: unlocked ? 'pointer' : 'default',
                      opacity: unlocked ? 1 : 0.5,
                      transition: 'all .2s',
                    }}
                  >
                    <div style={{ fontSize: '.7rem', color: 'var(--ink3)', marginBottom: 4 }}>
                      {levelNames[lvl]}
                    </div>
                    <div style={{
                      fontFamily: 'Fraunces, serif', fontSize: '1.1rem',
                      color: scoreColor,
                    }}>
                      {!unlocked ? '🔒' : score !== null ? `${score}%` : '—'}
                    </div>
                    <div style={{ fontSize: '.65rem', color: scoreColor, marginTop: 2, fontWeight: 600 }}>
                      {statusText}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
