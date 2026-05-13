import React, { useState, useEffect } from 'react'
import { useProgress } from './store/useProgress.js'
import { THEMES } from './data/themes.js'
import { QUIZZES } from './data/quizzes.js'
import { LESSON_CONTENT } from './data/lessons.js'
import { FACHBEGRIFFE } from './data/fachbegriffe.js'
import { PRAXIS_DATA } from './data/praxis.js'

import Topbar from './components/Topbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Home from './screens/Home.jsx'
import Detail from './screens/Detail.jsx'

export const AppContext = React.createContext(null)

export default function App() {
  const { progress, saveProgress, theme, toggleTheme, checkStreak } = useProgress()

  // — Navigation —
  const [screen, setScreen] = useState('home')
  const [currentTheme, setCurrentTheme] = useState(null)
  const [currentLesson, setCurrentLesson] = useState(null)
  const [quizState, setQuizState] = useState(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => { checkStreak() }, [])

  // — Fonctions navigation —
  const nav = (s) => setScreen(s)

  const openDetail = (t) => {
    setCurrentTheme(t)
    setScreen('detail')
  }

  const openLesson = (themeId, lessonName) => {
    const t = THEMES.find(th => th.id === themeId)
    setCurrentTheme(t)
    setCurrentLesson(lessonName)
    setScreen('lektion')
  }

  const startQuiz = (themeId, level) => {
    setScreen('quiz')
  }

  const goBack = () => {
    if (screen === 'lektion') { setScreen('detail') }
    else if (screen === 'quiz') { setScreen('detail') }
    else if (screen === 'detail') { setScreen('home') }
    else { setScreen('home') }
  }

  const ctx = {
    // Navigation
    screen, nav, goBack,
    openDetail, openLesson, startQuiz,
    // État
    currentTheme, currentLesson, quizState,
    // Données
    THEMES, QUIZZES, LESSON_CONTENT, FACHBEGRIFFE, PRAXIS_DATA,
    // Progress
    progress, saveProgress, theme, toggleTheme,
  }

  const inLektionMode = ['lektion', 'detail', 'quiz'].includes(screen)

  return (
    <AppContext.Provider value={ctx}>
      <div className="app" data-theme={theme}>
        <Topbar
          screen={screen}
          currentTheme={currentTheme}
          currentLesson={currentLesson}
          inLektionMode={inLektionMode}
          onBack={goBack}
          onToggleTheme={toggleTheme}
          theme={theme}
          streak={progress.streak || 0}
        />
        <Sidebar screen={screen} onNav={nav} />
        <main className="main">
          <div className="content">
            {screen === 'home'        && <Home />}
            {screen === 'detail'      && <Detail />}
            {screen === 'pruefung'    && <div style={{padding:20,color:'var(--ink)'}}>Quiz — bald verfügbar</div>}
            {screen === 'fachbegriffe'&& <div style={{padding:20,color:'var(--ink)'}}>Fachbegriffe — bald verfügbar</div>}
            {screen === 'praxis'      && <div style={{padding:20,color:'var(--ink)'}}>Praxis — bald verfügbar</div>}
            {screen === 'heute'       && <div style={{padding:20,color:'var(--ink)'}}>Heute — bald verfügbar</div>}
            {screen === 'lektion'     && <div style={{padding:20,color:'var(--ink)'}}>Lektion — bald verfügbar</div>}
            {screen === 'quiz'        && <div style={{padding:20,color:'var(--ink)'}}>Quiz — bald verfügbar</div>}
          </div>
        </main>
      </div>
    </AppContext.Provider>
  )
}
