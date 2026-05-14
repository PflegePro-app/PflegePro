import { useContext } from 'react'
import { AppContext } from '../App'

export default function Pruefung() {
  const {
    progress,
    THEMES,
    QUIZZES,
    startQuiz,
  } = useContext(AppContext)

  const levels = progress.levels || {}
  const levelNames = ['Niveau 1 – Basis', 'Niveau 2 – Fortgeschritten', 'Niveau 3 – Experte']
  const levelIcons = ['🟢', '🟡', '🔴']

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

  // Stats globales quiz
  const allScores = Object.values(levels).flatMap(l => l.levelScores || []).filter(s => s !== undefined)
  const avgScore = allScores.length > 0
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length * 100)
    : 0
  const quizCount = progress.quizCount || 0

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
          background: 'var(--rose-dim)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem', flexShrink: 0,
        }}>
          🎯
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.2rem', color: 'var(--ink)' }}>
            Quiz — Alle Themen
          </div>
          <div style={{ fontSize: '.78rem', color: 'var(--ink2)', marginTop: 2 }}>
            3 Niveaux pro Thema
          </div>
        </div>
        {/* Stats */}
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.2rem', color: 'var(--teal)' }}>
            {avgScore}%
          </div>
          <div style={{ fontSize: '.7rem', color: 'var(--ink3)' }}>Ø Score</div>
        </div>
      </div>

      {/* Stats rapides */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
        <div style={{
          flex: 1, background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 12, padding: '14px', textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.5rem', color: 'var(--ink)' }}>
            {quizCount}
          </div>
          <div style={{ fontSize: '.72rem', color: 'var(--ink3)' }}>Quiz gemacht</div>
        </div>
        <div style={{
          flex: 1, background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 12, padding: '14px', textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.5rem', color: 'var(--ink)' }}>
            {allScores.filter(s => s >= 0.70).length}
          </div>
          <div style={{ fontSize: '.72rem', color: 'var(--ink3)' }}>Bestanden</div>
        </div>
        <div style={{
          flex: 1, background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 12, padding: '14px', textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.5rem', color: 'var(--ink)' }}>
            {progress.mastered || 0}
          </div>
          <div style={{ fontSize: '.72rem', color: 'var(--ink3)' }}>🏆 Gemeistert</div>
        </div>
      </div>

      {/* Thèmes */}
      {THEMES.map(t => {
        const totalLvl = getTotalLevels(t.id)

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
                <div style={{ fontWeight: 700, fontSize: '.88rem', color: 'var(--ink)' }}>
                  {t.name}
                </div>
                <div style={{ fontSize: '.72rem', color: 'var(--ink3)', marginTop: 2 }}>
                  {totalLvl} Niveaux verfügbar
                </div>
              </div>
            </div>

            {/* Niveaux */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {Array.from({ length: totalLvl }, (_, lvl) => {
                const score = getLevelScore(t.id, lvl)
                const unlocked = isLevelUnlocked(t.id, lvl)
                const passed = score !== null && score >= 70

                let bg = 'var(--bg3)'
                let borderCol = 'var(--border)'
                let badgeBg = 'var(--bg3)'
                let label = '🔒 Gesperrt'
                let labelColor = 'var(--ink3)'

                if (unlocked) {
                  if (score === null) {
                    bg = 'var(--card)'
                    borderCol = 'rgba(45,212,191,.3)'
                    badgeBg = 'var(--teal-dim)'
                    label = '▶ Starten'
                    labelColor = 'var(--teal)'
                  } else if (passed) {
                    bg = 'var(--green-dim)'
                    borderCol = 'rgba(74,222,128,.3)'
                    badgeBg = 'var(--green-dim)'
                    label = '✓ Bestanden'
                    labelColor = 'var(--green)'
                  } else {
                    bg = 'var(--rose-dim)'
                    borderCol = 'rgba(251,113,133,.2)'
                    badgeBg = 'var(--rose-dim)'
                    label = '↺ Wiederholen'
                    labelColor = 'var(--rose)'
                  }
                }

                return (
                  <div
                    key={lvl}
                    onClick={() => unlocked && startQuiz(t.id, lvl, 'pruefung')}
                    style={{
                      background: bg,
                      border: `1px solid ${borderCol}`,
                      borderRadius: 12, padding: '14px 16px',
                      display: 'flex', alignItems: 'center', gap: 14,
                      cursor: unlocked ? 'pointer' : 'default',
                      opacity: unlocked ? 1 : 0.5,
                      transition: 'all .2s',
                    }}
                  >
                    {/* Badge niveau */}
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: badgeBg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1rem', flexShrink: 0,
                    }}>
                      {unlocked ? levelIcons[lvl] : '🔒'}
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: '.88rem', color: 'var(--ink)', marginBottom: 2 }}>
                        {levelNames[lvl]}
                      </div>
                      <div style={{ fontSize: '.72rem', color: labelColor, fontWeight: 600 }}>
                        {label}
                      </div>
                    </div>

                    {/* Score */}
                    {score !== null ? (
                      <div style={{
                        width: 46, height: 46, borderRadius: '50%',
                        border: `3px solid ${passed ? 'var(--green)' : 'var(--rose)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'Fraunces, serif', fontSize: '.9rem',
                        color: passed ? 'var(--green)' : 'var(--rose)',
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
          </div>
        )
      })}
    </div>
  )
}
