import { useContext } from 'react'
import { AppContext } from '../App'

export default function Detail() {
  const {
    currentTheme,
    openLesson,
    nav,
    progress,
    QUIZZES,
    startQuiz,
  } = useContext(AppContext)

  if (!currentTheme) return null

  const t = currentTheme

  function getLevelData(themeId) {
    if (!progress.levels) return { currentLevel: 0, levelScores: [], inProgress: null }
    return progress.levels[themeId] || { currentLevel: 0, levelScores: [], inProgress: null }
  }

  function getTotalLevels(themeId) {
    return Math.min(3, Math.ceil((QUIZZES[themeId] || []).length / 7))
  }

  function isLevelUnlocked(themeId, level) {
    if (level === 0) return true
    const ld = getLevelData(themeId)
    return ld.levelScores.length >= level && ld.levelScores[level - 1] >= 0.70
  }

  function getLevelBadge(level) {
    return ['🟢', '🟡', '🔴'][level] || '⭐'
  }

  function getLevelScore(themeId, level) {
    const ld = getLevelData(themeId)
    const score = ld.levelScores[level]
    return score !== undefined ? Math.round(score * 100) : null
  }

  const hasQuiz = !!QUIZZES[t.id]
  const totalLevels = hasQuiz ? getTotalLevels(t.id) : 0

  return (
    <div style={{ maxWidth: "100%" }}>

      {/* Header du thème */}
      <div style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        padding: '20px 22px',
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}>
        <div style={{
          width: 50, height: 50, borderRadius: 14,
          background: `var(--${t.col}-dim)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.6rem', flexShrink: 0,
        }}>
          {t.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.3rem', color: 'var(--ink)' }}>
            {t.name}
          </div>
          <div style={{ fontSize: '.8rem', color: 'var(--ink2)', marginTop: 3 }}>
            {t.lessons.length} Lerneinheiten
          </div>
        </div>
        <button
          onClick={() => nav('home')}
          style={{
            background: 'var(--bg3)', border: '1px solid var(--border)',
            color: 'var(--ink2)', padding: '7px 14px', borderRadius: 9,
            cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
            fontSize: '.78rem', fontWeight: 600, whiteSpace: 'nowrap',
          }}
        >
          ← Zurück
        </button>
      </div>

      {/* Lerneinheiten */}
      <div style={{
        fontSize: '.7rem', fontWeight: 700, letterSpacing: '.7px',
        textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: 12
      }}>
        📖 Lerneinheiten
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
        {t.lessons.map((lessonName, i) => (
          <div
            key={i}
            onClick={() => openLesson(t.id, lessonName)}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              cursor: 'pointer',
              transition: 'all .2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(45,212,191,.25)'
              e.currentTarget.style.background = 'var(--teal-dim)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.background = 'var(--card)'
            }}
          >
            <div style={{
              width: 28, height: 28, borderRadius: 7,
              background: 'var(--bg3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '.7rem', fontWeight: 700, color: 'var(--ink2)', flexShrink: 0,
            }}>
              {i + 1}
            </div>
            <div style={{ flex: 1, fontWeight: 500, fontSize: '.85rem', color: 'var(--ink)' }}>
              {lessonName}
            </div>
            <span style={{
              fontSize: '.67rem', fontWeight: 700, padding: '2px 8px', borderRadius: 6,
              background: 'var(--teal-dim)', color: 'var(--teal)',
            }}>
              Bereit
            </span>
          </div>
        ))}
      </div>

      {/* Quiz Niveaux */}
      {hasQuiz && (
        <>
          <div style={{
            fontSize: '.7rem', fontWeight: 700, letterSpacing: '.7px',
            textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: 12
          }}>
            🎯 Quiz — Niveaux
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {Array.from({ length: totalLevels }, (_, lvl) => {
              const unlocked = isLevelUnlocked(t.id, lvl)
              const score = getLevelScore(t.id, lvl)
              const passed = score !== null && score >= 70
              const ld = getLevelData(t.id)
              const hasPrev = ld.inProgress && ld.inProgress.level === lvl
              const levelNames = ['Niveau 1 – Basis', 'Niveau 2 – Fortgeschritten', 'Niveau 3 – Experte']

              return (
                <div
                  key={lvl}
                  onClick={() => unlocked && startQuiz(t.id, lvl)}
                  style={{
                    background: 'var(--card)',
                    border: `1px solid ${passed ? 'rgba(74,222,128,.3)' : 'var(--border)'}`,
                    borderRadius: 14,
                    padding: '16px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    cursor: unlocked ? 'pointer' : 'default',
                    opacity: unlocked ? 1 : 0.5,
                    transition: 'all .2s',
                  }}
                  onMouseEnter={e => { if (unlocked) e.currentTarget.style.borderColor = 'rgba(45,212,191,.3)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = passed ? 'rgba(74,222,128,.3)' : 'var(--border)' }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: 11,
                    background: unlocked ? (passed ? 'var(--green-dim)' : 'var(--teal-dim)') : 'var(--bg3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', flexShrink: 0,
                  }}>
                    {unlocked ? getLevelBadge(lvl) : '🔒'}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '.88rem', color: 'var(--ink)', marginBottom: 2 }}>
                      {levelNames[lvl]}
                    </div>
                    <div style={{ fontSize: '.72rem', color: 'var(--ink2)' }}>
                      {!unlocked
                        ? 'Niveau ' + lvl + ' bestehen um freizuschalten'
                        : hasPrev ? '▶ Fortgesetzt'
                        : score !== null ? (passed ? '✓ Bestanden' : 'Wiederholen')
                        : 'Starten'}
                    </div>
                  </div>

                  {score !== null ? (
                    <div style={{
                      width: 48, height: 48, borderRadius: '50%',
                      border: `3px solid ${passed ? 'var(--green)' : 'var(--teal)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Fraunces, serif', fontSize: '.95rem',
                      color: passed ? 'var(--green)' : 'var(--teal)',
                    }}>
                      {score}%
                    </div>
                  ) : (
                    unlocked && <span style={{ color: 'var(--ink3)', fontSize: '1.2rem' }}>›</span>
                  )}
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
