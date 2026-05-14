import { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../App'

function initBusWidget(container) {
  const slider = container.querySelector('input[type="range"]')
  if (!slider) return

  function lBusUpdate(val) {
    val = parseInt(val)
    const bzVal = container.querySelector('#lbz-val')
    const bus = container.querySelector('#lbus')
    const seats = container.querySelector('#lbus-seats')
    const road = container.querySelector('#lbus-road')
    const info = container.querySelector('#lbus-info')

    if (bzVal) bzVal.textContent = val + ' mg/dl'

    const total = 20
    const filled = Math.min(total, Math.round((val - 50) / (420 - 50) * total))
    const overThreshold = val > 180
    const spill = overThreshold ? Math.round((val - 180) / (420 - 180) * 8) : 0

    if (seats) {
      seats.innerHTML = Array.from({ length: total }, (_, i) => {
        if (i < filled - spill) return '<span style="font-size:1.1rem">🩸</span>'
        if (i < filled) return '<span style="font-size:1.1rem;opacity:.3">🩸</span>'
        return '<span style="font-size:1.1rem;opacity:.15">⬜</span>'
      }).join('')
    }

    if (road) {
      road.style.background = overThreshold
        ? 'linear-gradient(90deg,#dc2626,#f87171)'
        : 'linear-gradient(90deg,#2dd4bf,#0f9688)'
    }

    if (bus) {
      bus.style.transform = overThreshold ? 'rotate(-3deg) scale(1.1)' : 'none'
    }

    if (info) {
      if (val < 70) {
        info.innerHTML = '⚠️ <strong style="color:#f87171">Hypoglykämie!</strong> BZ zu niedrig — Niere reabsorbiert alles. <span style="color:var(--ink2)">Kein Zucker im Urin.</span>'
      } else if (val <= 180) {
        info.innerHTML = '✅ <strong style="color:#4ade80">BZ = ' + val + ' mg/dl</strong> — Niere kann alles rückresorieren. <span style="color:#2dd4bf">Kein Zucker im Urin.</span>'
      } else {
        info.innerHTML = '🚨 <strong style="color:#f87171">Glukosurie!</strong> BZ > 180 — Niere überlastet, Zucker läuft über! <span style="color:#fbbf24">Zucker im Urin → Wasser folgt → Polydipsie!</span>'
      }
    }
  }

  slider.removeAttribute('oninput')
  slider.addEventListener('input', (e) => lBusUpdate(e.target.value))
  lBusUpdate(slider.value)
}

export default function Lektion() {
  const {
    currentTheme,
    currentLesson,
    startQuiz,
    LESSON_CONTENT,
    markLessonRead,
  } = useContext(AppContext)

  const scrollRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [currentLesson])

  useEffect(() => {
    if (currentTheme && currentLesson) {
      markLessonRead(currentTheme.id, currentLesson)
    }
  }, [currentTheme?.id, currentLesson])

  useEffect(() => {
    if (!contentRef.current || !currentTheme) return

    // Fix bouton Quiz starten
    const buttons = contentRef.current.querySelectorAll('button, .lekt-quiz-btn')
    buttons.forEach(btn => {
      const text = btn.textContent || ''
      if (text.includes('Quiz') || text.includes('starten') || text.includes('Starten')) {
        btn.removeAttribute('onclick')
        btn.addEventListener('click', (e) => {
          e.preventDefault()
          e.stopPropagation()
          startQuiz(currentTheme.id, 0, 'lektion')
        })
        btn.style.cursor = 'pointer'
      }
    })

    // Fix widget Bus Blutzucker
    if (contentRef.current.querySelector('#lbus')) {
      initBusWidget(contentRef.current)
    }

  }, [currentTheme, currentLesson, startQuiz])

  if (!currentTheme || !currentLesson) return null

  const t = currentTheme
  const themeContent = LESSON_CONTENT[t.id]
  const lessonFn = themeContent && themeContent[currentLesson]
  const html = lessonFn ? lessonFn() : null

  return (
    <div ref={scrollRef} style={{ maxWidth: '100%' }}>
      {html ? (
        <div
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ width: '100%' }}
        />
      ) : (
        <div style={{
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 16, padding: '40px 28px', textAlign: 'center',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🚧</div>
          <div style={{
            fontFamily: 'Fraunces, serif', fontSize: '1.2rem',
            color: 'var(--ink)', marginBottom: 8,
          }}>
            {currentLesson}
          </div>
          <div style={{ fontSize: '.85rem', color: 'var(--ink2)' }}>
            Dieser Inhalt wird bald verfügbar sein.
          </div>
        </div>
      )}
    </div>
  )
}
