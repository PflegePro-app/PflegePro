import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../App.jsx'

export default function Lektion() {
  const { currentTheme, currentLesson, LESSON_CONTENT, startQuiz } = useContext(AppContext)
  const bodyRef = useRef(null)

  const t = currentTheme
  const contentFn = t && currentLesson ? LESSON_CONTENT[t.id]?.[currentLesson] : null

  useEffect(() => {
    if (bodyRef.current && contentFn) {
      bodyRef.current.innerHTML = contentFn()
    }
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
