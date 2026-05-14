import { useContext } from 'react'
import { AppContext } from '../App'

function Mascot({ name }) {
  const hour = new Date().getHours()
  const greeting =
    hour < 6  ? '🌙 Gute Nacht' :
    hour < 12 ? '🌅 Guten Morgen' :
    hour < 17 ? '☀️ Guten Tag' :
    hour < 21 ? '🌆 Guten Abend' : '🌙 Gute Nacht'

  const motivations = [
    '🩺 Jede Frage bringt dich deinem Examen näher.',
    '💙 Die Pflege braucht dich — lern weiter!',
    '📚 Wissen schützt Patienten — dein Wissen zählt.',
    '⭐ Du investierst heute in deine Zukunft!',
    '🌱 Schritt für Schritt zum Pflegeprofi.',
  ]
  const motiv = motivations[Math.floor(Date.now() / 86400000) % motivations.length]

  return (
    <div style={{
      marginBottom: 18, padding: '20px 22px',
      background: 'linear-gradient(135deg,rgba(45,212,191,.12),rgba(45,212,191,.04))',
      border: '1.5px solid rgba(45,212,191,.25)',
      borderRadius: 20, position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', gap: 18,
    }}>
      <div style={{
        position:'absolute', top:-20, right:80, width:120, height:120,
        borderRadius:'50%', background:'radial-gradient(circle,rgba(45,212,191,.08),transparent)',
        animation:'floatCell 6s ease-in-out infinite', pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute', bottom:-30, right:20, width:90, height:90,
        borderRadius:'50%', background:'radial-gradient(circle,rgba(251,191,36,.06),transparent)',
        animation:'floatCell 8s ease-in-out 2s infinite', pointerEvents:'none',
      }}/>

      <div style={{ flexShrink:0, position:'relative', width:80, height:80 }}>
        <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"
          style={{ width:80, height:80, filter:'drop-shadow(0 4px 12px rgba(0,0,0,0.2))' }}>
          <style>{`
            #mb{animation:mascotBob 2.5s ease-in-out infinite}
            #me{animation:mascotBob 2.5s ease-in-out infinite}
            #mel,#mer{animation:mascotBlink 4s ease-in-out infinite}
            #mt{animation:mascotTail 2s ease-in-out infinite;transform-origin:15px 65px}
            #mc{animation:mascotPulse 2s ease-in-out infinite}
            @keyframes mascotBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
            @keyframes mascotBlink{0%,90%,100%{transform:scaleY(1)}95%{transform:scaleY(0.1)}}
            @keyframes mascotTail{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}
            @keyframes mascotPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.7;transform:scale(.9)}}
          `}</style>
          <g id="mt">
            <path d="M18 62 Q5 55 8 45 Q11 38 18 42 Q22 50 18 62Z" fill="#e8834a"/>
            <path d="M10 46 Q7 40 13 39 Q17 44 14 50Z" fill="white"/>
          </g>
          <g id="mb">
            <rect x="22" y="44" width="36" height="26" rx="10" fill="white" stroke="#e0e8f0" strokeWidth="1"/>
            <g id="mc">
              <rect x="37" y="51" width="6" height="12" rx="2" fill="#ef4444"/>
              <rect x="34" y="54" width="12" height="6" rx="2" fill="#ef4444"/>
            </g>
            <circle cx="30" cy="56" r="1.5" fill="#d0d8e8"/>
            <circle cx="30" cy="62" r="1.5" fill="#d0d8e8"/>
            <ellipse cx="40" cy="50" rx="14" ry="8" fill="#e8834a"/>
          </g>
          <g id="me">
            <path d="M24 28 L18 10 L30 22Z" fill="#e8834a"/>
            <path d="M24 28 L20 14 L28 22Z" fill="#f4a261"/>
            <path d="M56 28 L62 10 L50 22Z" fill="#e8834a"/>
            <path d="M56 28 L60 14 L52 22Z" fill="#f4a261"/>
            <ellipse cx="40" cy="32" rx="16" ry="15" fill="#e8834a"/>
            <ellipse cx="40" cy="38" rx="8" ry="6" fill="#f4a261"/>
            <ellipse cx="40" cy="35" rx="2.5" ry="2" fill="#c45e2a"/>
            <path d="M36 39 Q40 43 44 39" stroke="#c45e2a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <ellipse cx="30" cy="37" rx="4" ry="3" fill="rgba(255,150,100,.3)"/>
            <ellipse cx="50" cy="37" rx="4" ry="3" fill="rgba(255,150,100,.3)"/>
            <g id="mel">
              <ellipse cx="34" cy="30" rx="3" ry="3.5" fill="white"/>
              <circle cx="34.5" cy="30.5" r="2" fill="#2d3748"/>
              <circle cx="35.5" cy="29.5" r=".7" fill="white"/>
            </g>
            <g id="mer">
              <ellipse cx="46" cy="30" rx="3" ry="3.5" fill="white"/>
              <circle cx="46.5" cy="30.5" r="2" fill="#2d3748"/>
              <circle cx="47.5" cy="29.5" r=".7" fill="white"/>
            </g>
            <path d="M30 44 Q26 52 30 56 Q34 58 36 54" stroke="#718096" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
            <circle cx="36" cy="54" r="3" fill="none" stroke="#718096" strokeWidth="1.5"/>
          </g>
        </svg>
      </div>

      <div style={{ flex:1, minWidth:0, position:'relative', zIndex:1 }}>
        <div style={{
          fontFamily:"'Fraunces',serif", fontSize:'1.2rem',
          color:'var(--ink)', marginBottom:5, lineHeight:1.3, fontWeight:600,
        }}>
          {greeting}{name ? `, ${name}` : ''}!
        </div>
        <div style={{ fontSize:'.8rem', color:'var(--ink2)', lineHeight:1.6 }}>
          {motiv}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { progress, THEMES, QUIZZES, openDetail } = useContext(AppContext)

  const levels = progress.levels || {}
  const allScores = Object.values(levels)
    .flatMap(l => l.levelScores || [])
    .filter(s => s !== undefined)
  const avgScore = allScores.length > 0
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length * 100)
    : 0
  const quizCount = progress.quizCount || 0
  const streak = progress.streak || 0
  const mastered = progress.mastered || 0

  function getRealLevel(themeId) {
    const ld = levels[themeId]
    if (!ld?.levelScores || ld.levelScores.length === 0) return 0
    return ld.levelScores.filter(s => s >= 0.70).length
  }
  function getTotalLevels(themeId) {
    return Math.min(3, Math.ceil((QUIZZES[themeId] || []).length / 3))
  }

  const stats = [
    { cls:'stat-card-quiz',   icon:'✅', iconBg:'rgba(45,212,191,.2)',  color:'var(--teal)',  value:quizCount,      label:'Quiz gemacht', barColor:'var(--teal)',  barW:Math.min(quizCount*10,100) },
    { cls:'stat-card-score',  icon:'📊', iconBg:'rgba(251,191,36,.2)',  color:'var(--amber)', value:`${avgScore}%`, label:'Ø Score',      barColor:'var(--amber)', barW:avgScore },
    { cls:'stat-card-streak', icon:'🔥', iconBg:'rgba(248,113,113,.2)', color:'var(--rose)',  value:streak,         label:'Streak 🔥',    barColor:'var(--rose)',  barW:Math.min(streak*14,100) },
    { cls:'stat-card-master', icon:'🏆', iconBg:'rgba(74,222,128,.2)',  color:'var(--green)', value:mastered,       label:'Gemeistert',   barColor:'var(--green)', barW:Math.min(mastered*33,100) },
  ]

  return (
    <div style={{ maxWidth:'100%' }}>

      <Mascot name={progress.userName} />

      {/* STAT CARDS */}
      <div className="stats-row">
        {stats.map((s, i) => (
          <div key={i} className={`stat-card ${s.cls}`}>
            <div className="stat-top">
              <div>
                <div className="stat-num" style={{ color:s.color }}>{s.value}</div>
                <div className="stat-lbl">{s.label}</div>
              </div>
              <div className="stat-icon" style={{ background:s.iconBg }}>{s.icon}</div>
            </div>
            <div className="stat-mini-bar">
              <div className="stat-mini-fill" style={{ width:`${s.barW}%`, background:s.barColor }}/>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION TITRE */}
      <div className="sec-title">📚 Lernthemen</div>

      {/* THEME CARDS */}
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {THEMES.map(t => {
          const realLevel = getRealLevel(t.id)
          const totalLvl = getTotalLevels(t.id)
          const ld = levels[t.id]
          const topScore = ld?.levelScores?.length > 0
            ? Math.round(Math.max(...ld.levelScores.filter(s => s !== undefined)) * 100)
            : null

          return (
            <div key={t.id} className="theme-card" onClick={() => openDetail(t)}>
              <div className="t-icon" style={{ background:`var(--${t.col}-dim)` }}>
                {t.icon}
              </div>
              <div className="t-info">
                <div className="t-name">{t.name}</div>
                <div className="t-sub">{t.lessons.length} Lerneinheiten</div>
                <div style={{ display:'flex', alignItems:'center', gap:5, marginTop:6 }}>
                  {Array.from({ length: totalLvl }, (_, i) => {
                    const passed = realLevel > i
                    const isCurrent = realLevel === i
                    return (
                      <div key={i} style={{
                        width:20, height:20, borderRadius:5,
                        background: passed ? 'var(--green)' : isCurrent ? 'var(--teal-dim)' : 'var(--bg3)',
                        border:`1px solid ${passed ? 'var(--green)' : isCurrent ? 'var(--teal)' : 'var(--border)'}`,
                        display:'flex', alignItems:'center', justifyContent:'center',
                        fontSize:'.58rem', fontWeight:700,
                        color: passed ? 'white' : isCurrent ? 'var(--teal)' : 'var(--ink3)',
                      }}>
                        {i + 1}
                      </div>
                    )
                  })}
                  {topScore !== null && (
                    <span style={{ fontSize:'.68rem', color:'var(--ink3)', marginLeft:3 }}>
                      Best: {topScore}%
                    </span>
                  )}
                </div>
              </div>
              <div className="t-arrow">›</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
