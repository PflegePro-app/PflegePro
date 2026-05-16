import { useContext } from 'react'
import { AppContext } from '../App'

// === BADGES SYSTEM ===
const ALL_BADGES = [
  // Champion (Daily Challenge)
  { id: 'champion_1',  cat: 'Champion', icon: '🏆', name: 'Erster Sieg',       desc: '1. Daily Challenge bestanden',  check: p => (p.challengeStreak || 0) >= 1 || (p.badges || []).includes('champion_1') },
  { id: 'champion_3',  cat: 'Champion', icon: '🥉', name: 'Bronze Champion',   desc: '3 Tage Challenge in Folge',     check: p => (p.challengeStreak || 0) >= 3 },
  { id: 'champion_7',  cat: 'Champion', icon: '🥈', name: 'Silber Champion',   desc: '7 Tage Challenge in Folge',     check: p => (p.challengeStreak || 0) >= 7 },
  { id: 'champion_14', cat: 'Champion', icon: '🥇', name: 'Gold Champion',     desc: '14 Tage Challenge in Folge',    check: p => (p.challengeStreak || 0) >= 14 },
  { id: 'champion_30', cat: 'Champion', icon: '💎', name: 'Diamant Champion',  desc: '30 Tage Challenge in Folge',    check: p => (p.challengeStreak || 0) >= 30 },
  // Streak
  { id: 'streak_3',    cat: 'Streak',   icon: '🔥', name: 'Heißer Start',      desc: '3 Tage Streak',                 check: p => (p.streak || 0) >= 3 },
  { id: 'streak_7',    cat: 'Streak',   icon: '🌟', name: 'Eine Woche!',       desc: '7 Tage Streak',                 check: p => (p.streak || 0) >= 7 },
  { id: 'streak_14',   cat: 'Streak',   icon: '⚡', name: 'Unaufhaltsam',      desc: '14 Tage Streak',                check: p => (p.streak || 0) >= 14 },
  { id: 'streak_30',   cat: 'Streak',   icon: '🚀', name: 'Pflege-Profi',      desc: '30 Tage Streak',                check: p => (p.streak || 0) >= 30 },
  // Lecture
  { id: 'read_1',      cat: 'Lesen',    icon: '📖', name: 'Erste Lektion',     desc: '1 Lektion gelesen',             check: (p, r) => r >= 1 },
  { id: 'read_10',     cat: 'Lesen',    icon: '📚', name: 'Bücherwurm',        desc: '10 Lektionen gelesen',          check: (p, r) => r >= 10 },
  { id: 'read_25',     cat: 'Lesen',    icon: '🎓', name: 'Wissensdurst',      desc: '25 Lektionen gelesen',          check: (p, r) => r >= 25 },
  { id: 'read_50',     cat: 'Lesen',    icon: '🧠', name: 'Gelehrter',         desc: '50 Lektionen gelesen',          check: (p, r) => r >= 50 },
]

function BadgesSection({ progress, readCount }) {
  const unlocked = ALL_BADGES.filter(b => b.check(progress, readCount))
  const total = ALL_BADGES.length

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(245,158,11,.08), rgba(245,158,11,.02))',
      border: '1px solid rgba(245,158,11,.25)',
      borderRadius: 16, padding: '16px 18px', marginBottom: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '1.4rem' }}>🏆</span>
          <div>
            <div style={{ fontFamily: 'Fraunces,serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)' }}>
              Meine Abzeichen
            </div>
            <div style={{ fontSize: '.72rem', color: 'var(--ink2)' }}>
              {unlocked.length} von {total} freigeschaltet
            </div>
          </div>
        </div>
        <div style={{
          background: 'var(--card)', padding: '6px 12px', borderRadius: 999,
          fontSize: '.85rem', fontWeight: 700, color: '#f59e0b',
          border: '1px solid rgba(245,158,11,.3)',
        }}>{unlocked.length}/{total}</div>
      </div>

      {/* Progress bar globale */}
      <div style={{ height: 6, background: 'var(--bg3)', borderRadius: 3, overflow: 'hidden', marginBottom: 14 }}>
        <div style={{
          height: '100%', borderRadius: 3,
          background: 'linear-gradient(90deg, #f59e0b, #ef4444)',
          width: `${(unlocked.length / total) * 100}%`,
          transition: 'width .5s ease',
        }}/>
      </div>

      {/* Grille des badges */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: 8,
      }}>
        {ALL_BADGES.map(b => {
          const isUnlocked = b.check(progress, readCount)
          return (
            <div key={b.id} title={`${b.name} - ${b.desc}`} style={{
              background: isUnlocked ? 'var(--card)' : 'var(--bg3)',
              border: `1.5px solid ${isUnlocked ? '#f59e0b' : 'var(--border)'}`,
              borderRadius: 10, padding: '10px 6px', textAlign: 'center',
              opacity: isUnlocked ? 1 : 0.4,
              transition: 'transform .15s ease',
              cursor: 'help',
            }}
            onMouseEnter={e => { if (isUnlocked) e.currentTarget.style.transform = 'scale(1.08)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <div style={{
                fontSize: '1.6rem', marginBottom: 4,
                filter: isUnlocked ? 'none' : 'grayscale(1)',
              }}>{isUnlocked ? b.icon : '🔒'}</div>
              <div style={{
                fontSize: '.62rem', fontWeight: 700,
                color: isUnlocked ? 'var(--ink)' : 'var(--ink3)',
                lineHeight: 1.2, marginBottom: 2,
              }}>{b.name}</div>
              <div style={{ fontSize: '.55rem', color: 'var(--ink3)', lineHeight: 1.2 }}>
                {b.desc}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

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
    return Math.ceil((QUIZZES[themeId] || []).length / 12)
  }

  const levelNames = ['Basis', 'Fortgeschritten', 'Experte', 'Meister', 'Champion']

  return (
    <div style={{ maxWidth: "100%" }}>

      {/* Header */}
      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 16, padding: '18px 20px', marginBottom: 20,
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{
          width: 46, height: 46, borderRadius: 12,
          background: 'white', border: '1.5px solid var(--rose)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, overflow: 'hidden',
          boxShadow: '0 2px 6px rgba(0,0,0,.08)',
        }}>
          <div style={{
            width: '100%', background: 'var(--rose)', color: 'white',
            fontSize: '.55rem', fontWeight: 700, textAlign: 'center',
            padding: '2px 0', letterSpacing: '.3px', textTransform: 'uppercase',
          }}>
            {new Date().toLocaleDateString('de-DE', { month: 'short' })}
          </div>
          <div style={{
            fontFamily: 'Fraunces,serif', fontSize: '1.2rem',
            fontWeight: 700, color: '#1f2937', lineHeight: 1,
            marginTop: 3,
          }}>
            {new Date().getDate()}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.2rem', color: 'var(--ink)' }}>
            Mein Fortschritt
          </div>
          <div style={{ fontSize: '.78rem', color: 'var(--ink2)', marginTop: 2 }}>
            Übersicht · {new Date().toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
        </div>
      </div>

      {/* === SECTION BADGES === */}
      <BadgesSection progress={progress} readCount={readCount} />

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
