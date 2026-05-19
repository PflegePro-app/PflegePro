import { useContext, useState } from 'react'
import { AppContext } from '../App'
import { MODULES } from '../data/themes'
import Revision from './Revision'

// === BADGES SYSTEM ===
const ALL_BADGES = [
  { id: 'champion_1',  cat: 'Champion', icon: '🏆', name: 'Erster Sieg',       desc: '1. Daily Challenge bestanden',  check: p => (p.challengeStreak || 0) >= 1 || (p.badges || []).includes('champion_1') },
  { id: 'champion_3',  cat: 'Champion', icon: '🥉', name: 'Bronze Champion',   desc: '3 Tage Challenge in Folge',     check: p => (p.challengeStreak || 0) >= 3 },
  { id: 'champion_7',  cat: 'Champion', icon: '🥈', name: 'Silber Champion',   desc: '7 Tage Challenge in Folge',     check: p => (p.challengeStreak || 0) >= 7 },
  { id: 'champion_14', cat: 'Champion', icon: '🥇', name: 'Gold Champion',     desc: '14 Tage Challenge in Folge',    check: p => (p.challengeStreak || 0) >= 14 },
  { id: 'champion_30', cat: 'Champion', icon: '💎', name: 'Diamant Champion',  desc: '30 Tage Challenge in Folge',    check: p => (p.challengeStreak || 0) >= 30 },
  { id: 'streak_3',    cat: 'Streak',   icon: '🔥', name: 'Heißer Start',      desc: '3 Tage Streak',                 check: p => (p.streak || 0) >= 3 },
  { id: 'streak_7',    cat: 'Streak',   icon: '🌟', name: 'Eine Woche!',       desc: '7 Tage Streak',                 check: p => (p.streak || 0) >= 7 },
  { id: 'streak_14',   cat: 'Streak',   icon: '⚡', name: 'Unaufhaltsam',      desc: '14 Tage Streak',                check: p => (p.streak || 0) >= 14 },
  { id: 'streak_30',   cat: 'Streak',   icon: '🚀', name: 'Pflege-Profi',      desc: '30 Tage Streak',                check: p => (p.streak || 0) >= 30 },
  { id: 'read_1',      cat: 'Lesen',    icon: '📖', name: 'Erste Lektion',     desc: '1 Lektion gelesen',             check: (p, r) => r >= 1 },
  { id: 'read_10',     cat: 'Lesen',    icon: '📚', name: 'Bücherwurm',        desc: '10 Lektionen gelesen',          check: (p, r) => r >= 10 },
  { id: 'read_25',     cat: 'Lesen',    icon: '🎓', name: 'Wissensdurst',      desc: '25 Lektionen gelesen',          check: (p, r) => r >= 25 },
  { id: 'read_50',     cat: 'Lesen',    icon: '🧠', name: 'Gelehrter',         desc: '50 Lektionen gelesen',          check: (p, r) => r >= 50 },
]

function BadgesSection({ progress, readCount, quizCount, avgScore, streak }) {
  const unlocked = ALL_BADGES.filter(b => b.check(progress, readCount))
  const total = ALL_BADGES.length
  const [selectedBadge, setSelectedBadge] = useState(null)

  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: 'linear-gradient(135deg, rgba(245,158,11,.12), rgba(245,158,11,.04))',
      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(245,158,11,.25)',
      borderRadius: 14, padding: '12px 14px', marginBottom: 16,
      boxShadow: '0 4px 20px rgba(0,0,0,.12)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <span style={{ fontSize: '1.1rem' }}>🏆</span>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: '.95rem', fontWeight: 700, color: 'var(--ink)', flex: 1 }}>
          Meine Abzeichen
        </div>
        <div style={{ fontSize: '.7rem', color: '#f59e0b', fontWeight: 700, background: 'rgba(245,158,11,.15)', padding: '3px 8px', borderRadius: 999 }}>
          {unlocked.length}/{total}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginBottom: 10 }}>
        <div style={{ background: 'var(--card)', borderRadius: 8, padding: '6px 4px', textAlign: 'center', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: '.95rem', fontWeight: 700, color: 'var(--teal)', lineHeight: 1 }}>{readCount}</div>
          <div style={{ fontSize: '.58rem', color: 'var(--ink3)', marginTop: 2, textTransform: 'uppercase', letterSpacing: '.3px' }}>Lekt.</div>
        </div>
        <div style={{ background: 'var(--card)', borderRadius: 8, padding: '6px 4px', textAlign: 'center', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: '.95rem', fontWeight: 700, color: 'var(--purple)', lineHeight: 1 }}>{quizCount}</div>
          <div style={{ fontSize: '.58rem', color: 'var(--ink3)', marginTop: 2, textTransform: 'uppercase', letterSpacing: '.3px' }}>Quiz</div>
        </div>
        <div style={{ background: 'var(--card)', borderRadius: 8, padding: '6px 4px', textAlign: 'center', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: '.95rem', fontWeight: 700, color: 'var(--green)', lineHeight: 1 }}>{avgScore}%</div>
          <div style={{ fontSize: '.58rem', color: 'var(--ink3)', marginTop: 2, textTransform: 'uppercase', letterSpacing: '.3px' }}>Score</div>
        </div>
        <div style={{ background: 'var(--card)', borderRadius: 8, padding: '6px 4px', textAlign: 'center', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: '.95rem', fontWeight: 700, color: '#ef4444', lineHeight: 1 }}>🔥{streak}</div>
          <div style={{ fontSize: '.58rem', color: 'var(--ink3)', marginTop: 2, textTransform: 'uppercase', letterSpacing: '.3px' }}>Streak</div>
        </div>
      </div>

      <div style={{ height: 4, background: 'var(--bg3)', borderRadius: 2, overflow: 'hidden', marginBottom: 10 }}>
        <div style={{ height: '100%', borderRadius: 2, background: 'linear-gradient(90deg, #f59e0b, #ef4444)', width: `${(unlocked.length / total) * 100}%`, transition: 'width .5s ease' }}/>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(48px, 1fr))', gap: 6 }}>
        {ALL_BADGES.map(b => {
          const isUnlocked = b.check(progress, readCount)
          return (
            <div key={b.id} onClick={() => setSelectedBadge({ ...b, isUnlocked })} style={{
              background: isUnlocked ? 'var(--card)' : 'var(--bg3)',
              border: `1.5px solid ${isUnlocked ? '#f59e0b' : 'var(--border)'}`,
              borderRadius: 9, padding: '6px 3px', textAlign: 'center',
              opacity: isUnlocked ? 1 : 0.45, transition: 'transform .15s ease', cursor: 'pointer',
            }}
              onMouseEnter={e => { if (isUnlocked) e.currentTarget.style.transform = 'scale(1.12)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <div style={{ fontSize: '1.3rem', lineHeight: 1, filter: isUnlocked ? 'none' : 'grayscale(1)' }}>
                {isUnlocked ? b.icon : '🔒'}
              </div>
            </div>
          )
        })}
      </div>

      {/* MODAL Badge */}
      {selectedBadge && (
        <div onClick={() => setSelectedBadge(null)} style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,.6)', backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000, padding: 20,
          animation: 'badgeModalFade .25s ease',
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: selectedBadge.isUnlocked
              ? 'linear-gradient(135deg, rgba(245,158,11,.15), var(--card))'
              : 'var(--card)',
            border: `2px solid ${selectedBadge.isUnlocked ? '#f59e0b' : 'var(--border)'}`,
            borderRadius: 20, padding: '30px 24px',
            maxWidth: 340, width: '100%',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,.4)',
            animation: 'badgeModalPop .35s cubic-bezier(.34,1.56,.64,1)',
          }}>
            <div style={{
              fontSize: '4rem', marginBottom: 12,
              filter: selectedBadge.isUnlocked ? 'none' : 'grayscale(1)',
              opacity: selectedBadge.isUnlocked ? 1 : 0.4,
              animation: selectedBadge.isUnlocked ? 'badgeIconBounce .6s ease' : 'none',
            }}>
              {selectedBadge.isUnlocked ? selectedBadge.icon : '🔒'}
            </div>

            <div style={{
              display: 'inline-block', fontSize: '.65rem', fontWeight: 700,
              color: '#f59e0b', background: 'rgba(245,158,11,.15)',
              padding: '3px 10px', borderRadius: 999,
              textTransform: 'uppercase', letterSpacing: '.5px',
              marginBottom: 8,
            }}>{selectedBadge.cat}</div>

            <div style={{
              fontFamily: 'Fraunces, serif', fontSize: '1.3rem',
              fontWeight: 700, color: 'var(--ink)', marginBottom: 8,
            }}>{selectedBadge.name}</div>

            <div style={{
              fontSize: '.88rem', color: 'var(--ink2)', lineHeight: 1.5,
              marginBottom: 16,
            }}>{selectedBadge.desc}</div>

            <div style={{
              background: selectedBadge.isUnlocked ? 'rgba(34,197,94,.12)' : 'var(--bg3)',
              border: `1px solid ${selectedBadge.isUnlocked ? 'rgba(34,197,94,.3)' : 'var(--border)'}`,
              borderRadius: 10, padding: '10px 14px',
              fontSize: '.82rem', fontWeight: 700,
              color: selectedBadge.isUnlocked ? 'var(--green)' : 'var(--ink3)',
              marginBottom: 16,
            }}>
              {selectedBadge.isUnlocked ? '✓ Freigeschaltet!' : '🔒 Noch nicht freigeschaltet'}
            </div>

            <button onClick={() => setSelectedBadge(null)} style={{
              background: 'var(--bg3)', border: '1px solid var(--border)',
              color: 'var(--ink)', padding: '10px 24px', borderRadius: 10,
              cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
              fontSize: '.85rem', fontWeight: 600, width: '100%',
            }}>Schließen</button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes badgeModalFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes badgeModalPop {
          from { opacity: 0; transform: scale(.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes badgeIconBounce {
          0%   { transform: scale(.5) rotate(-15deg); }
          50%  { transform: scale(1.15) rotate(8deg); }
          100% { transform: scale(1) rotate(0); }
        }
      `}</style>
    </div>
  )
}

export default function Heute() {
  const { progress, THEMES, QUIZZES, openDetail } = useContext(AppContext)

  const lessonsRead = progress.lessonsRead || []
  const readCount = lessonsRead.length
  const levels = progress.levels || {}
  const quizCount = progress.quizCount || 0
  const streak = progress.streak || 0

  const [openModules, setOpenModules] = useState(() => {
    try {
      const saved = localStorage.getItem('pflegepro_open_modules_heute')
      return saved ? JSON.parse(saved) : {}
    } catch { return {} }
  })

  function toggleModule(modId) {
    setOpenModules(prev => {
      const next = { ...prev, [modId]: prev[modId] === false ? true : false }
      try { localStorage.setItem('pflegepro_open_modules_heute', JSON.stringify(next)) } catch {}
      return next
    })
  }

  const allScores = []
  Object.values(levels).forEach(ld => {
    if (ld.levelScores) {
      ld.levelScores.forEach(s => { if (s !== undefined) allScores.push(s) })
    }
  })
  const avgScore = allScores.length > 0
    ? Math.round((allScores.reduce((a, b) => a + b, 0) / allScores.length) * 100)
    : 0

  function getTotalLevels(themeId) {
    return Math.ceil((QUIZZES[themeId] || []).length / 12)
  }
  function getLevelScore(themeId, lvl) {
    const ld = levels[themeId]
    if (!ld || !ld.levelScores || ld.levelScores[lvl] === undefined) return null
    return Math.round(ld.levelScores[lvl] * 100)
  }

  function getThemeStats(t) {
    const totalLvl = getTotalLevels(t.id)
    const readLessons = t.lessons.filter(l => lessonsRead.includes(`${t.id}::${l}`))
    const lessonPct = Math.round(readLessons.length / t.lessons.length * 100)
    let quizPassed = 0
    for (let lvl = 0; lvl < totalLvl; lvl++) {
      const score = getLevelScore(t.id, lvl)
      if (score !== null && score >= 70) quizPassed++
    }
    const quizPct = totalLvl > 0 ? Math.round((quizPassed / totalLvl) * 100) : 0
    const globalPct = Math.round((lessonPct + quizPct) / 2)
    return { lessonPct, quizPct, globalPct }
  }

  return (
    <div style={{ maxWidth: '100%' }}>

      {/* Header date */}
      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 16, padding: '14px 18px', marginBottom: 14,
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{
          width: 50, height: 56, borderRadius: 11,
          background: 'var(--card)', border: '1px solid var(--border)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, overflow: 'hidden',
        }}>
          <div style={{
            background: 'var(--rose)', color: 'white',
            fontSize: '.55rem', fontWeight: 700, padding: '2px 0',
            width: '100%', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px',
          }}>
            {new Date().toLocaleDateString('de-DE', { month: 'short' }).replace('.', '')}
          </div>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.4rem', fontWeight: 700, color: 'var(--ink)', lineHeight: 1, marginTop: 3 }}>
            {new Date().getDate()}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.2rem', color: 'var(--ink)' }}>
            Mein Fortschritt
          </div>
          <div style={{ fontSize: '.78rem', color: 'var(--ink2)', marginTop: 2 }}>
            {new Date().toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
        </div>
      </div>

      <BadgesSection progress={progress} readCount={readCount} quizCount={quizCount} avgScore={avgScore} streak={streak} />

      <Revision />

      {/* Modules pliables */}
      {MODULES.map(mod => {
        const themesInModule = THEMES.filter(t => t.module === mod.id)
        if (themesInModule.length === 0) return null
        const isOpen = openModules[mod.id] !== false

        let totalPct = 0
        themesInModule.forEach(t => {
          totalPct += getThemeStats(t).globalPct
        })
        const modulePct = Math.round(totalPct / themesInModule.length)

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
                  {themesInModule.length} {themesInModule.length > 1 ? 'Themen' : 'Thema'} · {modulePct}%
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  fontSize: '.95rem', fontWeight: 700,
                  fontFamily: "'Fraunces', serif",
                  color: modulePct === 100 ? 'var(--green)' : modulePct >= 50 ? `var(--${mod.color})` : 'var(--ink2)',
                }}>{modulePct}%</div>
                <div style={{
                  fontSize: '.85rem', color: 'var(--ink2)',
                  transition: 'transform .3s ease',
                  transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
                }}>▼</div>
              </div>
            </div>

            {isOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingLeft: 10 }}>
                {themesInModule.map(t => {
                  const { lessonPct, quizPct, globalPct } = getThemeStats(t)
                  return (
                    <div
                      key={t.id}
                      onClick={() => openDetail(t)}
                      style={{
                        background: 'var(--card)', border: '1px solid var(--border)',
                        borderLeft: `3px solid var(--${t.col})`,
                        borderRadius: 12, padding: '10px 12px',
                        display: 'flex', alignItems: 'center', gap: 12,
                        cursor: 'pointer', transition: 'all .15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(3px)' }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)' }}
                    >
                      <div style={{
                        width: 36, height: 36, borderRadius: 10,
                        background: `var(--${t.col}-dim)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.1rem', flexShrink: 0,
                      }}>{t.icon}</div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontWeight: 700, fontSize: '.82rem', color: 'var(--ink)',
                          marginBottom: 5, overflow: 'hidden', textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}>{t.name}</div>

                        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                          <span style={{ fontSize: '.65rem', color: 'var(--ink3)', minWidth: 18 }}>📖</span>
                          <div style={{ flex: 1, height: 4, background: 'var(--bg3)', borderRadius: 2, overflow: 'hidden' }}>
                            <div style={{ height: '100%', borderRadius: 2, background: lessonPct === 100 ? 'var(--green)' : 'var(--teal)', width: `${lessonPct}%`, transition: 'width .5s' }} />
                          </div>
                          <span style={{ fontSize: '.65rem', color: 'var(--ink2)', fontWeight: 700, minWidth: 30, textAlign: 'right' }}>{lessonPct}%</span>
                        </div>
                        <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 3 }}>
                          <span style={{ fontSize: '.65rem', color: 'var(--ink3)', minWidth: 18 }}>🎯</span>
                          <div style={{ flex: 1, height: 4, background: 'var(--bg3)', borderRadius: 2, overflow: 'hidden' }}>
                            <div style={{ height: '100%', borderRadius: 2, background: quizPct === 100 ? 'var(--green)' : 'var(--purple)', width: `${quizPct}%`, transition: 'width .5s' }} />
                          </div>
                          <span style={{ fontSize: '.65rem', color: 'var(--ink2)', fontWeight: 700, minWidth: 30, textAlign: 'right' }}>{quizPct}%</span>
                        </div>
                      </div>

                      <div style={{
                        fontSize: '1.1rem', fontWeight: 800,
                        fontFamily: "'Fraunces', serif",
                        color: globalPct === 100 ? 'var(--green)' : globalPct >= 50 ? 'var(--teal)' : 'var(--ink2)',
                        minWidth: 42, textAlign: 'right',
                      }}>{globalPct}%</div>
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
