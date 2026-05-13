import React, { useContext, useState } from 'react'
import { AppContext } from '../App.jsx'

export default function Fachbegriffe() {
  const { FACHBEGRIFFE } = useContext(AppContext)
  const [search, setSearch] = useState('')
  const [flipped, setFlipped] = useState({})

  const filtered = FACHBEGRIFFE.filter(f =>
    f.term.toLowerCase().includes(search.toLowerCase()) ||
    f.def.toLowerCase().includes(search.toLowerCase())
  )

  const toggle = (i) => setFlipped(p => ({ ...p, [i]: !p[i] }))

  return (
    <div>
      <div style={{ fontFamily:'Fraunces,serif', fontSize:'1.3rem', color:'var(--ink)', marginBottom:6 }}>🔤 Fachbegriffe</div>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Begriff suchen…"
        style={{ width:'100%', background:'var(--bg3)', border:'1.5px solid var(--border)', borderRadius:12, padding:'11px 16px', fontSize:'.88rem', color:'var(--ink)', fontFamily:'DM Sans,sans-serif', outline:'none', marginBottom:20, boxSizing:'border-box' }}
      />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:12 }}>
        {filtered.map((f, i) => (
          <div key={i} className="fach-card"
            onClick={() => toggle(i)}
            style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:14, padding:'16px', cursor:'pointer', minHeight:100, display:'flex', flexDirection:'column', justifyContent:'center', transition:'all .2s' }}>
            {flipped[i] ? (
              <div style={{ fontSize:'.78rem', color:'var(--ink2)', lineHeight:1.6 }}>{f.def}</div>
            ) : (
              <div style={{ fontWeight:700, fontSize:'.9rem', color:'var(--ink)' }}>{f.term}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
