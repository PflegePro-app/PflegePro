import { useContext } from 'react'
import { AppContext } from '../App.jsx'
import { MODULES } from '../data/themes.js'

export default function Landing({ onStart }) {
  return (
    <div className="landing">
      {/* ── HERO ── */}
      <section className="lp-hero">
        <div className="lp-hero-glow" />
        <div className="lp-hero-inner">
          <div className="lp-badge">🩺 Für Pflege-Azubis in Deutschland</div>
          <h1 className="lp-title">
            Deine Pflegeausbildung,<br />
            <span className="lp-title-accent">einfach gemeistert.</span>
          </h1>
          <p className="lp-sub">
            Lerne Fachbegriffe, verstehe komplexe Themen und teste dein Wissen
            mit hunderten Quizfragen — kostenlos, jederzeit und überall.
          </p>
          <button className="lp-cta" onClick={onStart}>
            Kostenlos starten →
          </button>
          <div className="lp-stats">
            <div className="lp-stat"><strong>8</strong><span>Module</span></div>
            <div className="lp-stat-sep" />
            <div className="lp-stat"><strong>62</strong><span>Lektionen</span></div>
            <div className="lp-stat-sep" />
            <div className="lp-stat"><strong>467</strong><span>Quizfragen</span></div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="lp-section">
        <h2 className="lp-h2">Kommt dir das bekannt vor?</h2>
        <div className="lp-cards">
          <div className="lp-card">
            <div className="lp-card-icon">📚</div>
            <div className="lp-card-title">Schwere Fachsprache</div>
            <p>Unzählige medizinische Fachbegriffe, die man sich kaum merken kann.</p>
          </div>
          <div className="lp-card">
            <div className="lp-card-icon">⏰</div>
            <div className="lp-card-title">Wenig Zeit</div>
            <p>Zwischen Schichten, Schule und Privatleben bleibt kaum Zeit zum Lernen.</p>
          </div>
          <div className="lp-card">
            <div className="lp-card-icon">😰</div>
            <div className="lp-card-title">Prüfungsstress</div>
            <p>Die Angst, in der Prüfung wichtige Themen vergessen zu haben.</p>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="lp-section lp-section-alt">
        <h2 className="lp-h2">Themen aus der Pflegeausbildung</h2>
        <p className="lp-section-sub">
          Strukturierte Module mit Lektionen, Fachbegriffen und Quizfragen.
        </p>
        <div className="lp-modules">
          {MODULES.map((m) => (
            <div key={m.id} className={`lp-module lp-module-${m.color}`}>
              <span className="lp-module-icon">{m.icon}</span>
              <div className="lp-module-info">
                <div className="lp-module-name">{m.name}</div>
                <div className="lp-module-desc">{m.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="lp-section">
        <h2 className="lp-h2">So einfach geht's</h2>
        <div className="lp-steps">
          <div className="lp-step">
            <div className="lp-step-num">1</div>
            <div className="lp-step-title">Lektion lesen</div>
            <p>Verständliche Erklärungen mit klaren Beispielen.</p>
          </div>
          <div className="lp-step">
            <div className="lp-step-num">2</div>
            <div className="lp-step-title">Quiz machen</div>
            <p>Teste dein Wissen Level für Level.</p>
          </div>
          <div className="lp-step">
            <div className="lp-step-num">3</div>
            <div className="lp-step-title">Fortschritt sehen</div>
            <p>Verfolge deine Erfolge und bleib motiviert.</p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="lp-final">
        <div className="lp-final-glow" />
        <h2 className="lp-final-title">Bereit, durchzustarten?</h2>
        <p className="lp-final-sub">Kostenlos. Ohne Anmeldung. Sofort loslegen.</p>
        <button className="lp-cta" onClick={onStart}>
          Jetzt kostenlos starten →
        </button>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <div className="lp-footer-brand">PflegePro</div>
        <div className="lp-footer-links">
          <a href="#" onClick={(e) => { e.preventDefault(); onStart('impressum') }}>Impressum</a>
          <span>·</span>
          <a href="#" onClick={(e) => { e.preventDefault(); onStart('datenschutz') }}>Datenschutz</a>
        </div>
        <div className="lp-footer-copy">© 2026 PflegePro · Lernhilfe für die Pflegeausbildung</div>
      </footer>
    </div>
  )
}
