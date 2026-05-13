import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../App.jsx'

export default function Lektion() {
  const { currentTheme, currentLesson, LESSON_CONTENT } = useContext(AppContext)
  const bodyRef = useRef(null)

  const t = currentTheme
  const contentFn = t && currentLesson ? LESSON_CONTENT[t.id]?.[currentLesson] : null

  useEffect(() => {
    if (!bodyRef.current || !contentFn) return

    // Injecter le HTML
    bodyRef.current.innerHTML = contentFn()

    // Réexécuter tous les scripts inline pour les animations
    const scripts = bodyRef.current.querySelectorAll('script')
    scripts.forEach(oldScript => {
      const newScript = document.createElement('script')
      // Copier les attributs
      Array.from(oldScript.attributes).forEach(attr => {
        newScript.setAttribute(attr.name, attr.value)
      })
      // Copier le contenu
      newScript.textContent = oldScript.textContent
      oldScript.parentNode.replaceChild(newScript, oldScript)
    })

    // Scroll en haut
    bodyRef.current.scrollTop = 0

  }, [currentLesson, currentTheme])

  if (!t || !currentLesson) return null

  return (
    <div className="lekt-layout">
      <div
        ref={bodyRef}
        style={{ padding:'0 0 60px 0' }}
      />
    </div>
  )
}
