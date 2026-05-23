import { IMPRESSUM_HTML, DATENSCHUTZ_HTML } from '../data/legal.js'

export default function Legal({ type, onClose }) {
  const html = type === 'impressum' ? IMPRESSUM_HTML : DATENSCHUTZ_HTML

  return (
    <div className="legal-page">
      <div className="legal-topbar">
        <button className="legal-back" onClick={onClose}>← Zurück</button>
        <span className="legal-brand">PflegePro</span>
      </div>
      <div className="legal-content" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
