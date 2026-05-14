import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../App'

// Renard animé
function Mascot({ name }) {
  const [frame, setFrame] = useState(0)
  const frames = ['🦊', '🦊', '🦊']

  useEffect(() => {
    const t = setInterval(() => setFrame(f => (f + 1) % frames.length), 800)
    return () => clearInterval(t)
  }, [])

  const hour = new Date().getHours()
  const greeting =
    hour < 6  ? 'Gute Nacht' :
    hour < 12 ? 'Guten Morgen' :
    hour < 18 ? 'Guten Tag' :
    hour < 22 ? 'Guten Abend' : 'Gute Nacht'

  return (
    <div style={{
      background: 'linear-gradient(135deg,#0d7377,#2dd4bf)',
      borderRadius: 20, padding: '20px 22px',
      marginBottom: 20, position: 'relative', overflow: 'hidden'
    }}>
      <div style={{ position:'absolute', right:-20, top:-20, width:100, height:100, borderRadius:'50%', background:'rgba(255,255,255,0.06)' }}/>
      <div style={{ position:'absolute', right:20, bottom:-30, width:140, height:140, borderRadius:'50%', background:'rgba(255,255,255,0.04)' }}/>
      <div style={{ display:'flex', alignItems:'center', gap:16, position:'relative' }}>
        <div style={{ fontSize:'3rem', filter:'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}>
          {frames[frame]}
        </div>
        <div>
          <div style={{ fontFamily:'Fraunces,serif', fontSize:'1.15rem', color:'white', fontWeight:700 }}>
            {greeting}{name ? `, ${name}` : ''}!
          </div>
          <div style={{ fontSize:'.8rem', color:'rgba(255,255,255,0.75)', marginTop:4 }}>
            Bereit für deine Pflegeausbildung?
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { progress, THEMES, QUIZZES, openDetail } = useContext(AppContext)

  // Stats correctes
  const levels = progress.levels || {}
  const allScores = Object.values(levels).flatMap(l => l.levelScores || []).filter(s => s !== undefined)
  const avgScore = allScores.length > 0
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length * 100)
    : 0
  const quizCount = progress.quizCount || 0
  const streak = progress.streak || 0
  const mastered = progress.mastered || 0

  // Niveaux réels par thème
  function getRealLevel(themeId) {
    const ld = levels[themeId]
    if (!ld?.levelScores || ld.levelScores.length === 0) return 0
    const passed = ld.levelScores.filter(s => s >= 0.70).length
    return passed
  }

  function getTotalLevels(themeId) {
    return Math.min(3, Math.ceil((QUIZZES[themeId] || []).length / 3))
  }

  return (
    <div style={{ maxWidth: 720, margin: '0 auto' }}>

      <Mascot name={progress.userName} />

      {/* Stats compactes — barre horizontale */}
      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 14, padding: '14px 20px',
        display: 'flex', justifyContent: 'space-around',
        alignItems: 'center', marginBottom: 24, gap: 8,
      }}>
        {[
          { icon: '🎯', value: quizCount, label: 'Quiz' },
          { icon: '📊', value: `${avgScore}%`, label: 'Ø Score' },
          { icon: '🔥', value: streak, label: 'Streak' },
          { icon: '🏆', value: mastered, label: 'Gemeistert' },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '1.1rem', marginBottom: 2 }}>{s.icon}</div>
            <div style={{ fontFamily: 'Fraunces,serif', fontSize: '1.2rem', color: 'var(--ink)', fontWeight: 700 }}>
              {s.value}
            </div>
            <div style={{ fontSize: '.65rem', color: 'var(--ink3)', marginTop: 1 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Lernthemen */}
      <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.7px', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: 14 }}>
        📚 Lernthemen
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {THEMES.map(t => {
          const realLevel = getRealLevel(t.id)
          const totalLvl = getTotalLevels(t.id)
          const ld = levels[t.id]
          const topScore = ld?.levelScores?.length > 0
            ? Math.round(Math.max(...ld.levelScores.filter(s => s !== undefined)) * 100)
            : null

          return (
            <div
              key={t.id}
              onClick={() => openDetail(t)}
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 16, padding: '18px 16px',
                cursor: 'pointer', transition: 'all .2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(45,212,191,.3)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              {/* Icône */}
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: `var(--${t.col}-dim)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem', marginBottom: 12,
              }}>
                {t.icon}
              </div>

              {/* Nom */}
              <div style={{ fontWeight: 700, fontSize: '.85rem', color: 'var(--ink)', marginBottom: 4, lineHeight: 1.3 }}>
                {t.name}
              </div>

              {/* Lerneinheiten */}
              <div style={{ fontSize: '.72rem', color: 'var(--ink3)', marginBottom: 10 }}>
                {t.lessons.length} Lerneinheiten
              </div>

              {/* Niveaux réels */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {Array.from({ length: totalLvl }, (_, i) => {
                  const passed = realLevel > i
                  const isCurrent = realLevel === i
                  return (
                    <div
                      key={i}
                      style={{
                        width: 22, height: 22, borderRadius: 6,
                        background: passed ? 'var(--green)' : isCurrent ? 'var(--teal-dim)' : 'var(--bg3)',
                        border: `1px solid ${passed ? 'var(--green)' : isCurrent ? 'var(--teal)' : 'var(--border)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '.6rem', fontWeight: 700,
                        color: passed ? 'white' : isCurrent ? 'var(--teal)' : 'var(--ink3)',
                      }}
                    >
                      {i + 1}
                    </div>
                  )
                })}
                {topScore !== null && (
                  <span style={{ fontSize: '.7rem', color: 'var(--ink3)', marginLeft: 4 }}>
                    Best: {topScore}%
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
