import { useState, useEffect } from 'react'

const GA_ID = 'G-M6MCMF6TFT'
const CONSENT_KEY = 'pflegepro_cookie_consent'

// Charge Google Analytics dynamiquement
function loadGoogleAnalytics() {
  if (window.__gaLoaded) return
  window.__gaLoaded = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_ID)
}

export default function CookieBanner({ openLegal }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent === 'accepted') {
      loadGoogleAnalytics()
    } else if (!consent) {
      // Pas encore de choix → afficher le bandeau
      setVisible(true)
    }
    // Si 'rejected' → ne rien faire, pas de bandeau, pas de GA
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    loadGoogleAnalytics()
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-text">
          <strong>🍪 Cookies & Datenschutz</strong>
          <p>
            Wir nutzen Google Analytics, um die Nutzung von PflegePro zu verstehen
            und die App zu verbessern. Du entscheidest frei.{' '}
            {openLegal && (
              <a onClick={() => openLegal('datenschutz')}>Mehr erfahren</a>
            )}
          </p>
        </div>
        <div className="cookie-actions">
          <button className="cookie-reject" onClick={reject}>Ablehnen</button>
          <button className="cookie-accept" onClick={accept}>Akzeptieren</button>
        </div>
      </div>
    </div>
  )
}
