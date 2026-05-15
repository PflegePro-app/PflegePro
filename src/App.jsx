import React, { useState, useEffect } from 'react'
import { useProgress } from './store/useProgress.js'
import { THEMES } from './data/themes.js'
import { QUIZZES } from './data/quizzes.js'
import { LESSON_CONTENT } from './data/lessons.js'
import { FACHBEGRIFFE } from './data/fachbegriffe.js'
import { PRAXIS_DATA } from './data/praxis.js'

import Topbar from './components/Topbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import WelcomeModal from './components/WelcomeModal.jsx'
import Home from './screens/Home.jsx'
import Detail from './screens/Detail.jsx'
import Lektion from './screens/Lektion.jsx'
import Quiz from './screens/Quiz.jsx'
import Fachbegriffe from './screens/Fachbegriffe.jsx'
import Praxis from './screens/Praxis.jsx'
import Heute from './screens/Heute.jsx'
import Pruefung from './screens/Pruefung.jsx'

export const AppContext = React.createContext(null)

export default function App() {
  const { progress, saveProgress, theme, toggleTheme, checkStreak, markLessonRead, userName, saveName } = useProgress()

  const [screen, setScreen] = useState('home')
  const [currentTheme, setCurrentTheme] = useState(null)
  const [currentLesson, setCurrentLesson] = useState(null)
  const [quizState, setQuizState] = useState(null)
  const [quizOrigin, setQuizOrigin] = useState('detail')

  // Afficher le modal si pas de nom encore
  const [showWelcome, setShowWelcome] = useState(() => !localStorage.getItem('pflegepro_name'))

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => { checkStreak() }, [])

  const handleSaveName = (name) => {
    saveName(name)
    setShowWelcome(false)
  }

  const nav = (s) => setScreen(s)

  const openDetail = (t) => {
    if (t.lessons && t.lessons.length > 0) {
      setCurrentTheme(t)
      setCurrentLesson(t.lessons[0])
      setScreen("lektion")
      return
    }
    setCurrentTheme(t)
    setScreen('detail')
  }

  const openLesson = (themeId, lessonName) => {
    const t = THEMES.find(th => th.id === themeId)
    setCurrentTheme(t)
    setCurrentLesson(lessonName)
    setScreen('lektion')
  }

  const startQuiz = (themeId, level, origin) => {
    const allQ = QUIZZES[themeId] || []
    const perLevel = 12
    const totalLevels = Math.ceil(allQ.length / perLevel)
    const questions = allQ.slice(level * perLevel, (level + 1) * perLevel)
    const t = THEMES.find(th => th.id === themeId)
    setCurrentTheme(t)
    setQuizState({ themeId, level, questions })
    setQuizOrigin(origin || 'detail')
    setScreen('quiz')
  }

  const goBack = () => {
    if (screen === 'lektion') { setScreen('home') }
    else if (screen === 'quiz') { setScreen(quizOrigin) }
    else if (screen === 'detail') { setScreen('home') }
    else { setScreen('home') }
  }

  const ctx = {
    screen, nav, goBack,
    openDetail, openLesson, startQuiz,
    currentTheme, currentLesson, quizState,
    THEMES, QUIZZES, LESSON_CONTENT, FACHBEGRIFFE, PRAXIS_DATA,
    progress, saveProgress, theme, toggleTheme,
    markLessonRead,
    userName,
  }

  const inLektionMode = ['lektion', 'detail', 'quiz'].includes(screen)

  return (
    <AppContext.Provider value={ctx}>
      <div className="app" data-theme={theme}>

        {/* Modal de bienvenue — premier lancement */}
        {showWelcome && <WelcomeModal onSave={handleSaveName} />}

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
            {screen === 'home'         && <Home />}
            {screen === 'detail'       && <Detail />}
            {screen === 'lektion'      && <Lektion />}
            {screen === 'quiz'         && <Quiz key={JSON.stringify(quizState)} />}
            {screen === 'fachbegriffe' && <Fachbegriffe />}
            {screen === 'praxis'       && <Praxis />}
            {screen === 'heute'        && <Heute />}
            {screen === 'pruefung'     && <Pruefung />}
          </div>
        </main>
      </div>
    </AppContext.Provider>
  )
}
