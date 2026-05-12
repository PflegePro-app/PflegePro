import React, { useState, useEffect, useRef } from 'react'
import { useProgress } from './store/useProgress.js'
import { THEMES } from './data/themes.js'
import { QUIZZES } from './data/quizzes.js'
import { LESSON_CONTENT } from './data/lessons.js'
import { FACHBEGRIFFE } from './data/fachbegriffe.js'
import { PRAXIS_DATA } from './data/praxis.js'

// Screens
import Home        from './screens/Home.jsx'
import Pruefung    from './screens/Pruefung.jsx'
import Fachbegriffe from './screens/Fachbegriffe.jsx'
import Praxis      from './screens/Praxis.jsx'
import Heute       from './screens/Heute.jsx'
import Detail      from './screens/Detail.jsx'
import Lektion     from './screens/Lektion.jsx'
import Quiz        from './screens/Quiz.jsx'

// Components
import Topbar    from './components/Topbar.jsx'
import Sidebar   from './components/Sidebar.jsx'

export const AppContext = React.createContext(null)

export default function App() {
  const { progress, saveProgress, theme, toggleTheme, userName, saveName, checkStreak } = useProgress()
  const [screen, setScreen]         = useState('home')
  const [currentTheme, setCurrentTheme] = useState(null)
  const [currentLesson, setCurrentLesson] = useState(null)
  const [quizState, setQuizState]   = useState(null)

  // Appliquer le thème sur <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Vérifier streak au chargement
  useEffect(() => { checkStreak() }, [])

  // Navigation principale
  const nav = (s) => setScreen(s)

  const openDetail = (theme) => {
    setCurrentTheme(theme)
    setScreen('detail')
  }

  const openLesson = (themeId, lessonName) => {
    const t = THEMES.find(t => t.id === themeId)
    setCurrentTheme(t)
    setCurrentLesson(lessonName)
    setScreen('lektion')
  }

  const startQuiz = (themeId, level, fromLesson = false) => {
    const questions = (QUIZZES[themeId] || [])
      .filter(q => q.level === level + 1)
    setQuizState({ themeId, level, questions, fromLesson })
    setScreen('quiz')
  }

  const ctx = {
    screen, nav, theme, toggleTheme,
    progress, saveProgress,
    userName, saveName,
    THEMES, QUIZZES, LESSON_CONTENT, FACHBEGRIFFE, PRAXIS_DATA,
    openDetail, openLesson, startQuiz,
    currentTheme, currentLesson, quizState,
  }

  const isLektionMode = screen === 'lektion' || screen === 'detail' || screen === 'quiz'

  return (
    <AppContext.Provider value={ctx}>
      <div className="app" data-theme={theme}>
        <Topbar
          isLektionMode={isLektionMode}
          screen={screen}
          currentTheme={currentTheme}
          currentLesson={currentLesson}
          onBack={() => {
            if (screen === 'lektion') openDetail(currentTheme)
            else if (screen === 'quiz') {
              // Retour au level select
              setCurrentLesson(null)
              setScreen('detail')
            }
            else nav('home')
          }}
          onToggleTheme={toggleTheme}
          theme={theme}
          streak={progress.streak}
        />
        <Sidebar screen={screen} onNav={nav} />
        <main className="main">
          <div className="content">
            {screen === 'home'         && <Home />}
            {screen === 'pruefung'     && <Pruefung />}
            {screen === 'fachbegriffe' && <Fachbegriffe />}
            {screen === 'praxis'       && <Praxis />}
            {screen === 'heute'        && <Heute />}
            {screen === 'detail'       && <Detail />}
            {screen === 'lektion'      && <Lektion />}
            {screen === 'quiz'         && <Quiz />}
          </div>
        </main>
      </div>
    </AppContext.Provider>
  )
}
