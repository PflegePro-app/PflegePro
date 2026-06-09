import { useContext, useState } from 'react'
import { AppContext } from '../App'
import { MODULES } from '../data/themes'

export default function Pruefung() {
  const {
    progress,
    THEMES,
    QUIZZES,
    startQuiz,
  } = useContext(AppContext)

  const levels = progress.levels || {}
  const levelNames = ['Niveau 1 – Basis', 'Niveau 2 – Fortgeschritten', 'Niveau 3 – Experte', 'Niveau 4 – Meister', 'Niveau 5 – Champion', 'Niveau 6 – Legende', 'Niveau 7 – Mythos', 'Niveau 8 – Titan', 'Niveau 9 – Phönix', 'Niveau 10 – Olymp']
  const levelIcons = ['🟢', '🟡', '🟠', '🔴', '💎', '🏅']

  // Modules pliables persistants
  const [openModules, setOpenModules] = useState(() => {
    try {
      const saved = localStorage.getItem('pflegepro_open_modules_pruefung')
      return saved ? JSON.parse(saved) : {}
    } catch { return {} }
  })

  function toggleModule(modId) {
    setOpenModules(prev => {
      const next = { ...prev, [modId]: prev[modId] === false ? true : false }
      try { localStorage.setItem('pflegepro_open_modules_pruefung', JSON.stringify(next)) } catch {}
      return next
    })
  }

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
    return Math.ceil((QUIZZES[themeId] || []).length / 12)
  }

  const allScores = Object.values(levels).flatMap(l => l.levelScores || []).filter(s => s !== undefined)
  const avgScore = allScores.length > 0
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length * 100)
    : 0
  const quizCount = progress.quizCount || 0
  const passedCount = allScores.filter(s => s >= 0.70).length

  return (
    <div style={{ maxWidth: '100%' }}>

      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #7f1d1d, #991b1b, #0d1117)',
        borderRadius: 18, padding: '22px 22px 18px',
        marginBottom: 16, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -30, right: -30,
          width: 120, height: 120,
          background: 'radial-gradient(circle, rgba(251,113,133,.3), transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'rgba(251,113,133,.2)',
            border: '1px solid rgba(251,113,133,.3)',
            borderRadius: 20, padding: '4px 12px',
            fontSize: '.68rem', fontWeight: 700,
            letterSpacing: '.5px', textTransform: 'uppercase',
            color: 'rgba(254,202,202,.95)', marginBottom: 10,
          }}>🎯 Prüfung</div>
          <div style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(1.4rem,3vw,1.8rem)',
            color: 'white', lineHeight: 1.2, marginBottom: 4,
          }}>Alle Quiz-Niveaus</div>
          <div style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.65)' }}>
            Trainiere dein Wissen und werde Champion!
          </div>
        </div>
      </div>

      {/* Mini stats compactes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 18 }}>
        <div style={{
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 12, padding: '12px 8px', textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.4rem', color: 'var(--ink)', lineHeight: 1 }}>{quizCount}</div>
          <div style={{ fontSize: '.65rem', color: 'var(--ink3)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '.3px' }}>Gemacht</div>
        </div>
        <div style={{
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 12, padding: '12px 8px', textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.4rem', color: 'var(--green)', lineHeight: 1 }}>{passedCount}</div>
          <div style={{ fontSize: '.65rem', color: 'var(--ink3)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '.3px' }}>Bestanden</div>
        </div>
        <div style={{
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 12, padding: '12px 8px', textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.4rem', color: 'var(--teal)', lineHeight: 1 }}>{avgScore}%</div>
          <div style={{ fontSize: '.65rem', color: 'var(--ink3)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '.3px' }}>Ø Score</div>
        </div>
      </div>

      {/* Modules pliables */}
      {MODULES.map(mod => {
        const themesInModule = THEMES.filter(t => t.module === mod.id)
        if (themesInModule.length === 0) return null
        const isOpen = openModules[mod.id] === true

        // Stats du module
        let totalLevelsInMod = 0
        let passedLevelsInMod = 0
        themesInModule.forEach(t => {
          const totalLvl = getTotalLevels(t.id)
          totalLevelsInMod += totalLvl
          for (let lvl = 0; lvl < totalLvl; lvl++) {
            const score = getLevelScore(t.id, lvl)
            if (score !== null && score >= 70) passedLevelsInMod++
          }
        })

        return (
          <div key={mod.id} style={{ marginBottom: 12 }}>
            <div
              onClick={() => toggleModule(mod.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 14px', borderRadius: 12,
                background: `var(--${mod.color}-dim)`,
                borderLeft: `4px solid var(--${mod.color})`,
                cursor: 'pointer', userSelect: 'none',
                marginBottom: isOpen ? 8 : 0,
                transition: 'all .2s',
              }}
            >
              <span style={{ fontSize: '1.3rem' }}>{mod.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Fraunces',serif", fontSize: '.95rem', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.2 }}>
                  {mod.name}
                </div>
                <div style={{ fontSize: '.7rem', color: 'var(--ink2)', marginTop: 1 }}>
                  {passedLevelsInMod}/{totalLevelsInMod} Niveaus bestanden
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  fontSize: '.7rem', color: 'var(--ink3)', fontWeight: 700,
                  background: 'var(--card)', padding: '3px 8px', borderRadius: 999,
                }}>{themesInModule.length}</div>
                <div style={{
                  fontSize: '.85rem', color: 'var(--ink2)',
                  transition: 'transform .3s ease',
                  transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
                }}>▼</div>
              </div>
            </div>

            {isOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingLeft: 10 }}>
                {themesInModule.map(t => {
                  const totalLvl = getTotalLevels(t.id)
                  return (
                    <div key={t.id} style={{
                      background: 'var(--card)', border: '1px solid var(--border)',
                      borderLeft: `3px solid var(--${t.col})`,
                      borderRadius: 12, padding: '12px 14px',
                    }}>
                      {/* Header thème compact */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                        <div style={{
                          width: 32, height: 32, borderRadius: 9,
                          background: `var(--${t.col}-dim)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '1rem', flexShrink: 0,
                        }}>{t.icon}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            fontWeight: 700, fontSize: '.85rem', color: 'var(--ink)',
                            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                          }}>{t.name}</div>
                          <div style={{ fontSize: '.68rem', color: 'var(--ink3)', marginTop: 1 }}>
                            {totalLvl} {totalLvl > 1 ? 'Niveaus' : 'Niveau'}
                          </div>
                        </div>
                      </div>

                      {/* Niveaux en grille */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${totalLvl}, 1fr)`,
                        gap: 6,
                      }}>
                        {Array.from({ length: totalLvl }, (_, lvl) => {
                          const score = getLevelScore(t.id, lvl)
                          const unlocked = isLevelUnlocked(t.id, lvl)
                          const passed = score !== null && score >= 70

                          let bg = 'var(--bg3)'
                          let borderCol = 'var(--border)'
                          let textColor = 'var(--ink3)'

                          if (unlocked) {
                            if (score === null) {
                              bg = 'var(--card)'
                              borderCol = 'var(--teal)'
                              textColor = 'var(--teal)'
                            } else if (passed) {
                              bg = 'var(--green-dim)'
                              borderCol = 'rgba(74,222,128,.4)'
                              textColor = 'var(--green)'
                            } else {
                              bg = 'var(--rose-dim)'
                              borderCol = 'rgba(251,113,133,.3)'
                              textColor = 'var(--rose)'
                            }
                          }

                          return (
                            <div
                              key={lvl}
                              onClick={() => unlocked && startQuiz(t.id, lvl, 'pruefung')}
                              style={{
                                background: bg,
                                border: `1.5px solid ${borderCol}`,
                                borderRadius: 9, padding: '8px 4px',
                                textAlign: 'center',
                                cursor: unlocked ? 'pointer' : 'default',
                                opacity: unlocked ? 1 : 0.45,
                                transition: 'all .2s',
                              }}
                              onMouseEnter={e => { if (unlocked) e.currentTarget.style.transform = 'translateY(-2px)' }}
                              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
                            >
                              <div style={{ fontSize: '1rem', marginBottom: 2 }}>
                                {!unlocked ? '🔒' : passed ? '✓' : score === null ? levelIcons[lvl] : '↺'}
                              </div>
                              <div style={{
                                fontSize: '.6rem', fontWeight: 700, color: textColor,
                                fontFamily: 'DM Sans, sans-serif',
                                lineHeight: 1.15,
                              }}>
                                {score !== null ? `${score}%` : ['Basis', 'Fortg.', 'Experte', 'Meister', 'Champ.', 'Legende', 'Mythos', 'Titan', 'Phönix', 'Olymp'][lvl]}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
