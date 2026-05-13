import { useState, useCallback } from 'react'

const STORAGE_KEY = 'pflegepro_progress'
const THEME_KEY   = 'pflegepro_theme'
const NAME_KEY    = 'pflegepro_name'

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      quizDone: 0, scores: [], streak: 0, lastDate: null,
      mastered: [], levels: {}
    }
  } catch { return { quizDone:0, scores:[], streak:0, lastDate:null, mastered:[], levels:{} } }
}

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress)
  const [theme, setThemeState]  = useState(() => localStorage.getItem(THEME_KEY) || 'dark')
  const [userName, setUserName] = useState(() => localStorage.getItem(NAME_KEY) || '')

  const saveProgress = useCallback((newP) => {
    setProgress(newP)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newP))
  }, [])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setThemeState(next)
    localStorage.setItem(THEME_KEY, next)
    document.documentElement.setAttribute('data-theme', next)
  }, [theme])

  const saveName = useCallback((name) => {
    setUserName(name)
    localStorage.setItem(NAME_KEY, name)
  }, [])

  const checkStreak = useCallback(() => {
    const today = new Date().toDateString()
    const newP = { ...progress }
    if (newP.lastDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString()
      newP.streak = newP.lastDate === yesterday ? newP.streak + 1 : 1
      newP.lastDate = today
      saveProgress(newP)
    }
    return newP.streak
  }, [progress, saveProgress])

  return { progress, saveProgress, theme, toggleTheme, userName, saveName, checkStreak }
}
