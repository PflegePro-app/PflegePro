import { useContext } from 'react'
import { AppContext } from '../App'
import { MODULES } from '../data/themes'

// ── INFIRMIÈRE (6h–14h) ──
function NurseF() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"
      style={{ width:80, height:80, filter:'drop-shadow(0 4px 12px rgba(0,0,0,0.15))' }}>
      <style>{`
        #nfb { animation: nurseBob 2.5s ease-in-out infinite; }
        #nfh { animation: nurseBob 2.5s ease-in-out infinite; }
        #nfel { animation: nurseBlink 4s ease-in-out infinite; transform-origin:32px 27px; }
        #nfer { animation: nurseBlink 4s ease-in-out infinite; transform-origin:48px 27px; }
        #nfc  { animation: nursePulse 2s ease-in-out infinite; }
        @keyframes nurseBob   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes nurseBlink { 0%,88%,100%{transform:scaleY(1)} 93%{transform:scaleY(0.08)} }
        @keyframes nursePulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.55;transform:scale(.85)} }
      `}</style>
      <g id="nfb">
        <rect x="22" y="47" width="36" height="26" rx="10" fill="white" stroke="#dde4ee" strokeWidth="1"/>
        <path d="M33 47 L40 56 L47 47" fill="none" stroke="#c8d4e8" strokeWidth="1.5" strokeLinecap="round"/>
        <g id="nfc">
          <rect x="37.5" y="61" width="5" height="9" rx="1.5" fill="#ef4444"/>
          <rect x="35" y="63.5" width="10" height="4" rx="1.5" fill="#ef4444"/>
        </g>
        <circle cx="40" cy="57.5" r="1" fill="#c8d4e8"/>
        <rect x="11" y="49" width="13" height="18" rx="6" fill="white" stroke="#dde4ee" strokeWidth="1"/>
        <ellipse cx="17.5" cy="68" rx="5" ry="3.5" fill="#f5c5a3"/>
        <rect x="56" y="49" width="13" height="18" rx="6" fill="white" stroke="#dde4ee" strokeWidth="1"/>
        <ellipse cx="62.5" cy="68" rx="5" ry="3.5" fill="#f5c5a3"/>
        <path d="M25 53 Q18 60 20 67 Q22 72 27 72" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="27" cy="72" r="2.8" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
        <circle cx="25" cy="52" r="1.8" fill="#94a3b8"/>
      </g>
      <g id="nfh">
        <rect x="36" y="38" width="8" height="11" rx="4" fill="#f5c5a3"/>
        <ellipse cx="40" cy="28" rx="16" ry="15" fill="#f5c5a3"/>
        <ellipse cx="28.5" cy="32" rx="4" ry="3" fill="rgba(240,130,130,.3)"/>
        <ellipse cx="51.5" cy="32" rx="4" ry="3" fill="rgba(240,130,130,.3)"/>
        <ellipse cx="40" cy="33" rx="2" ry="1.5" fill="#e8a882"/>
        <path d="M35 37 Q40 42 45 37" stroke="#c0725a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <g id="nfel">
          <ellipse cx="32" cy="27" rx="3.5" ry="4" fill="white"/>
          <circle cx="32.5" cy="27.5" r="2.3" fill="#3d2314"/>
          <circle cx="33.5" cy="26.5" r=".8" fill="white"/>
          <path d="M29 24.5 L28 22.5" stroke="#3d2314" strokeWidth="1" strokeLinecap="round"/>
          <path d="M31.5 23.5 L31.5 21.5" stroke="#3d2314" strokeWidth="1" strokeLinecap="round"/>
          <path d="M34 24 L34.5 22" stroke="#3d2314" strokeWidth="1" strokeLinecap="round"/>
        </g>
        <g id="nfer">
          <ellipse cx="48" cy="27" rx="3.5" ry="4" fill="white"/>
          <circle cx="48.5" cy="27.5" r="2.3" fill="#3d2314"/>
          <circle cx="49.5" cy="26.5" r=".8" fill="white"/>
          <path d="M45 24.5 L44 22.5" stroke="#3d2314" strokeWidth="1" strokeLinecap="round"/>
          <path d="M47.5 23.5 L47.5 21.5" stroke="#3d2314" strokeWidth="1" strokeLinecap="round"/>
          <path d="M50 24 L50.5 22" stroke="#3d2314" strokeWidth="1" strokeLinecap="round"/>
        </g>
        {/* Cheveux longs + queue de cheval */}
        <ellipse cx="40" cy="14" rx="16" ry="9" fill="#3d2314"/>
        <ellipse cx="25" cy="24" rx="5" ry="9" fill="#3d2314"/>
        <ellipse cx="55" cy="24" rx="5" ry="9" fill="#3d2314"/>
        <path d="M56 20 Q68 18 65 30 Q62 38 56 35" fill="#3d2314"/>
        {/* Bonnet */}
        <rect x="27" y="8" width="26" height="10" rx="4" fill="white" stroke="#dde4ee" strokeWidth="1"/>
        <rect x="27" y="13" width="26" height="3.5" fill="#2dd4bf"/>
        <rect x="38" y="9" width="4" height="8" rx="1" fill="#ef4444"/>
        <rect x="36" y="11.5" width="8" height="3.5" rx="1" fill="#ef4444"/>
      </g>
    </svg>
  )
}

// ── INFIRMIER (14h–6h) ──
function NurseM() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"
      style={{ width:80, height:80, filter:'drop-shadow(0 4px 12px rgba(0,0,0,0.15))' }}>
      <style>{`
        #nmb { animation: nurseBob 2.5s ease-in-out infinite; }
        #nmh { animation: nurseBob 2.5s ease-in-out infinite; }
        #nmel { animation: nurseBlink 4s ease-in-out infinite; transform-origin:32px 27px; }
        #nmer { animation: nurseBlink 4s ease-in-out infinite; transform-origin:48px 27px; }
        #nmc  { animation: nursePulse 2s ease-in-out infinite; }
        @keyframes nurseBob   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes nurseBlink { 0%,88%,100%{transform:scaleY(1)} 93%{transform:scaleY(0.08)} }
        @keyframes nursePulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.55;transform:scale(.85)} }
      `}</style>
      <g id="nmb">
        <rect x="22" y="47" width="36" height="26" rx="10" fill="#1e40af" stroke="#1e3a8a" strokeWidth="1"/>
        <path d="M33 47 L40 56 L47 47" fill="none" stroke="#3b5fc0" strokeWidth="1.5" strokeLinecap="round"/>
        <g id="nmc">
          <rect x="37.5" y="61" width="5" height="9" rx="1.5" fill="white"/>
          <rect x="35" y="63.5" width="10" height="4" rx="1.5" fill="white"/>
        </g>
        {/* Poche stylo */}
        <rect x="52" y="50" width="4" height="10" rx="2" fill="#3b82f6" stroke="#2563eb" strokeWidth=".5"/>
        <rect x="53" y="49" width="2" height="3" rx="1" fill="#93c5fd"/>
        <rect x="11" y="49" width="13" height="18" rx="6" fill="#1e40af" stroke="#1e3a8a" strokeWidth="1"/>
        <ellipse cx="17.5" cy="68" rx="5" ry="3.5" fill="#d4a574"/>
        <rect x="56" y="49" width="13" height="18" rx="6" fill="#1e40af" stroke="#1e3a8a" strokeWidth="1"/>
        <ellipse cx="62.5" cy="68" rx="5" ry="3.5" fill="#d4a574"/>
        <path d="M25 53 Q18 60 20 67 Q22 72 27 72" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="27" cy="72" r="2.8" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
        <circle cx="25" cy="52" r="1.8" fill="#94a3b8"/>
      </g>
      <g id="nmh">
        <rect x="36" y="38" width="8" height="11" rx="4" fill="#d4a574"/>
        <ellipse cx="40" cy="28" rx="16" ry="15" fill="#d4a574"/>
        <ellipse cx="28.5" cy="33" rx="3.5" ry="2.5" fill="rgba(200,100,80,.25)"/>
        <ellipse cx="51.5" cy="33" rx="3.5" ry="2.5" fill="rgba(200,100,80,.25)"/>
        <ellipse cx="40" cy="33" rx="2" ry="1.5" fill="#c08050"/>
        <path d="M35 37 Q40 42 45 37" stroke="#a0623a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        {/* Légère barbe */}
        <path d="M33 37 Q40 44 47 37" fill="rgba(80,50,30,.15)"/>
        <g id="nmel">
          <ellipse cx="32" cy="27" rx="3.5" ry="4" fill="white"/>
          <circle cx="32.5" cy="27.5" r="2.3" fill="#3d2314"/>
          <circle cx="33.5" cy="26.5" r=".8" fill="white"/>
        </g>
        <g id="nmer">
          <ellipse cx="48" cy="27" rx="3.5" ry="4" fill="white"/>
          <circle cx="48.5" cy="27.5" r="2.3" fill="#3d2314"/>
          <circle cx="49.5" cy="26.5" r=".8" fill="white"/>
        </g>
        {/* Cheveux courts */}
        <ellipse cx="40" cy="13" rx="16" ry="8" fill="#5c3d1e"/>
        <ellipse cx="25" cy="22" rx="4" ry="7" fill="#5c3d1e"/>
        <ellipse cx="55" cy="22" rx="4" ry="7" fill="#5c3d1e"/>
        {/* Casquette médicale */}
        <rect x="25" y="10" width="30" height="8" rx="4" fill="#1e40af" stroke="#1e3a8a" strokeWidth="1"/>
        <rect x="23" y="16" width="34" height="3" rx="1.5" fill="#1e3a8a"/>
        <rect x="38" y="11" width="4" height="6" rx="1" fill="white"/>
        <rect x="36" y="13" width="8" height="2.5" rx="1" fill="white"/>
      </g>
    </svg>
  )
}

function Mascot({ name }) {
  const hour = new Date().getHours()

  // 6h–14h = infirmière, 14h–6h = infirmier
  const isMorning = hour >= 6 && hour < 14

  const greeting =
    hour < 6  ? '🌙 Gute Nacht' :
    hour < 12 ? '🌅 Guten Morgen' :
    hour < 18 ? '☀️ Guten Tag' :
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

      <div style={{ flexShrink:0, width:80, height:80 }}>
        {isMorning ? <NurseF /> : <NurseM />}
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

function StatsBar({ quizCount, avgScore, streak, mastered }) {
  const stats = [
    { icon:'✅', value: quizCount,      label:'Quiz',       color:'var(--teal)',  bar: Math.min(quizCount*10,100) },
    { icon:'📊', value: `${avgScore}%`, label:'Score',      color:'var(--amber)', bar: avgScore },
    { icon:'🔥', value: streak,         label:'Streak',     color:'var(--rose)',  bar: Math.min(streak*14,100) },
    { icon:'🏆', value: mastered,       label:'Gemeistert', color:'var(--green)', bar: Math.min(mastered*33,100) },
  ]
  return (
    <div style={{
      background: 'var(--card)', border: '1px solid var(--border)',
      borderRadius: 16, padding: '14px 18px', marginBottom: 20,
      display: 'flex', alignItems: 'center',
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:4,
          padding:'0 8px',
          borderRight: i < stats.length-1 ? '1px solid var(--border)' : 'none',
        }}>
          <div style={{ display:'flex', alignItems:'center', gap:5 }}>
            <span style={{ fontFamily:"'Fraunces',serif", fontSize:'1.3rem', fontWeight:700, color:s.color, lineHeight:1 }}>
              {s.value}
            </span>
            <span style={{ fontSize:'.85rem' }}>{s.icon}</span>
          </div>
          <div style={{ fontSize:'.6rem', color:'var(--ink3)', fontWeight:600, letterSpacing:'.2px', textTransform:'uppercase' }}>
            {s.label}
          </div>
          <div style={{ width:'100%', height:3, borderRadius:2, background:'var(--bg3)', overflow:'hidden', marginTop:2 }}>
            <div style={{ height:'100%', borderRadius:2, background:s.color, width:`${s.bar}%`, transition:'width 1s ease' }}/>
          </div>
        </div>
      ))}
    </div>
  )
}

function DailyChallengeCard() {
  const { nav, isChallengeCompletedToday, progress } = useContext(AppContext)
  const done = isChallengeCompletedToday()
  const score = progress.dailyChallenge?.score || 0
  const challengeStreak = progress.challengeStreak || 0

  if (done) {
    return (
      <div style={{
        marginBottom: 18, padding: '16px 20px',
        background: 'linear-gradient(135deg, #10b98115, #10b98108)',
        border: '1.5px solid #10b98140',
        borderRadius: 20, display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{ fontSize: '2rem' }}>✅</div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: "'Fraunces',serif", fontSize: '1.05rem',
            fontWeight: 700, color: 'var(--ink)', marginBottom: 2,
          }}>Heute geschafft! 🏆</div>
          <div style={{ fontSize: '.85rem', color: 'var(--ink2)' }}>
            Score: {score}% · Streak {challengeStreak}🔥
          </div>
        </div>
      </div>
    )
  }

  return (
    <div onClick={() => nav('challenge')} style={{
      marginBottom: 18, padding: '18px 20px', cursor: 'pointer',
      background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      borderRadius: 20, display: 'flex', alignItems: 'center', gap: 14,
      position: 'relative', overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(239,68,68,.25)',
    }}>
      <div style={{
        position: 'absolute', top: -20, right: -10, width: 100, height: 100,
        borderRadius: '50%', background: 'rgba(255,255,255,.1)',
        pointerEvents: 'none',
      }}/>
      <div style={{ fontSize: '2.4rem', animation: 'flameBounce 1.5s ease-in-out infinite', zIndex: 1 }}>🔥</div>
      <div style={{ flex: 1, zIndex: 1 }}>
        <div style={{
          fontFamily: "'Fraunces',serif", fontSize: '1.15rem',
          fontWeight: 700, color: 'white', marginBottom: 3,
        }}>Tägliche Challenge</div>
        <div style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.92)' }}>
          5 Fragen · Schaffst du es? ⚡
        </div>
      </div>
      <div style={{
        fontSize: '1.4rem', color: 'white', zIndex: 1,
        background: 'rgba(255,255,255,.2)', borderRadius: '50%',
        width: 36, height: 36, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
      }}>›</div>
      <style>{`
        @keyframes flameBounce { 0%,100%{transform:scale(1) rotate(-3deg)} 50%{transform:scale(1.1) rotate(3deg)} }
      `}</style>
    </div>
  )
}

export default function Home() {
  const { progress, THEMES, QUIZZES, openDetail, userName } = useContext(AppContext)

  const levels = progress.levels || {}
  const allScores = Object.values(levels)
    .flatMap(l => l.levelScores || [])
    .filter(s => s !== undefined)
  const avgScore = allScores.length > 0
    ? Math.round(allScores.reduce((a,b) => a+b, 0) / allScores.length * 100) : 0
  const quizCount = progress.quizCount || 0
  const streak    = progress.streak || 0
  const mastered  = progress.mastered || 0

  function getRealLevel(themeId) {
    const ld = levels[themeId]
    if (!ld?.levelScores || ld.levelScores.length === 0) return 0
    return ld.levelScores.filter(s => s >= 0.70).length
  }
  function getTotalLevels(themeId) {
    return Math.ceil((QUIZZES[themeId] || []).length / 12)
  }

  return (
    <div style={{ maxWidth:'100%' }}>
      <Mascot name={userName} />
      <DailyChallengeCard />
      <StatsBar quizCount={quizCount} avgScore={avgScore} streak={streak} mastered={mastered} />
      {/* Groupement par modules */}
      {MODULES.map(mod => {
        const themesInModule = THEMES.filter(t => t.module === mod.id)
        if (themesInModule.length === 0) return null
        return (
          <div key={mod.id} style={{ marginBottom: 24 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10,
              padding: '8px 12px', borderRadius: 12,
              background: `var(--${mod.color}-dim)`,
              borderLeft: `4px solid var(--${mod.color})`,
            }}>
              <span style={{ fontSize: '1.4rem' }}>{mod.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: "'Fraunces',serif", fontSize: '1.05rem',
                  fontWeight: 700, color: 'var(--ink)', lineHeight: 1.2,
                }}>{mod.name}</div>
                <div style={{ fontSize: '.72rem', color: 'var(--ink2)', marginTop: 1 }}>
                  {mod.description}
                </div>
              </div>
              <div style={{
                fontSize: '.7rem', color: 'var(--ink3)', fontWeight: 600,
                background: 'var(--card)', padding: '3px 8px', borderRadius: 999,
              }}>{themesInModule.length}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingLeft: 14, marginTop: 4 }}>
              {themesInModule.map(t => {
                const realLevel = getRealLevel(t.id)
                const totalLvl  = getTotalLevels(t.id)
                const ld        = levels[t.id]
                const topScore  = ld?.levelScores?.length > 0
                  ? Math.round(Math.max(...ld.levelScores.filter(s => s !== undefined)) * 100) : null
                return (
                  <div key={t.id} onClick={() => openDetail(t)} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '7px 12px', borderRadius: 10,
                    background: 'var(--card)', border: '1px solid var(--border)',
                    borderLeft: `3px solid var(--${t.col})`,
                    cursor: 'pointer', transition: 'transform .15s, box-shadow .15s',
                  }}>
                    <div style={{
                      width: 26, height: 26, borderRadius: 7,
                      background: `var(--${t.col}-dim)`, display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      fontSize: '.9rem', flexShrink: 0,
                    }}>{t.icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontFamily: "'Fraunces',serif", fontSize: '.85rem',
                        fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2,
                        marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}>{t.name}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '.72rem', color: 'var(--ink2)' }}>
                        <span>{t.lessons.length} Lektionen</span>
                        <span style={{ display: 'flex', gap: 3 }}>
                          {Array.from({ length: totalLvl }, (_, i) => {
                            const passed = realLevel > i
                            const isCurrent = realLevel === i
                            return (
                              <span key={i} style={{
                                width: 14, height: 14, borderRadius: 4,
                                background: passed ? 'var(--green)' : isCurrent ? 'var(--teal-dim)' : 'var(--bg3)',
                                border: `1px solid ${passed ? 'var(--green)' : isCurrent ? 'var(--teal)' : 'var(--border)'}`,
                                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '.5rem', fontWeight: 700,
                                color: passed ? 'white' : isCurrent ? 'var(--teal)' : 'var(--ink3)',
                              }}>{i+1}</span>
                            )
                          })}
                        </span>
                        {topScore !== null && (
                          <span style={{ marginLeft: 'auto', fontSize: '.68rem', color: 'var(--ink3)' }}>{topScore}%</span>
                        )}
                      </div>
                    </div>
                    <div style={{ color: 'var(--ink3)', fontSize: '1.2rem', flexShrink: 0 }}>›</div>
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
