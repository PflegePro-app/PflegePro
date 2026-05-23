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
import SearchModal from './components/SearchModal.jsx'
import Home from './screens/Home.jsx'
import Detail from './screens/Detail.jsx'
import Lektion from './screens/Lektion.jsx'
import Quiz from './screens/Quiz.jsx'
import Fachbegriffe from './screens/Fachbegriffe.jsx'
import Praxis from './screens/Praxis.jsx'
import Heute from './screens/Heute.jsx'
import Pruefung from './screens/Pruefung.jsx'
import DailyChallenge from './screens/DailyChallenge.jsx'
import Landing from './screens/Landing.jsx'
import Legal from './screens/Legal.jsx'
import CookieBanner from './components/CookieBanner.jsx'

export const AppContext = React.createContext(null)

export default function App() {
  const { progress, saveProgress, theme, toggleTheme, checkStreak, markLessonRead, userName, saveName, completeChallenge, isChallengeCompletedToday, getCurrentDayIndex } = useProgress()

  const [screen, setScreen] = useState('home')
  const [currentTheme, setCurrentTheme] = useState(null)
  const [currentLesson, setCurrentLesson] = useState(null)
  const [quizState, setQuizState] = useState(null)
  const [quizOrigin, setQuizOrigin] = useState('detail')
  const [lastLessonContext, setLastLessonContext] = useState(null)

  // Afficher le modal si pas de nom encore
  const [showWelcome, setShowWelcome] = useState(false)
  const [showLanding, setShowLanding] = useState(() => !localStorage.getItem('pflegepro_name'))
  const [legalScreen, setLegalScreen] = useState(null)
  const [showSearch, setShowSearch] = useState(false)
  const [focusMode, setFocusMode] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => { checkStreak() }, [])

  // Auto-focus mode : cacher les barres pendant le scroll, les remontrer à l'arrêt
  useEffect(() => {
    if (screen !== 'lektion') {
      setFocusMode(false)
      return
    }
    let scrollTimer = null
    let lastScrollY = window.scrollY
    const onScroll = () => {
      const currentY = window.scrollY
      const diff = Math.abs(currentY - lastScrollY)
      // Cacher seulement si scroll significatif (>5px) et pas en haut de page
      if (diff > 5 && currentY > 100) {
        setFocusMode(true)
      }
      lastScrollY = currentY
      if (scrollTimer) clearTimeout(scrollTimer)
      // Remontrer les barres après 800ms sans scroll
      scrollTimer = setTimeout(() => setFocusMode(false), 800)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (scrollTimer) clearTimeout(scrollTimer)
    }
  }, [screen])

  const handleStartFromLanding = (target) => {
    // Si on clique un lien légal du footer
    if (target === 'impressum' || target === 'datenschutz') {
      setLegalScreen(target)
      return
    }
    // Sinon : démarrer l'app → afficher le modal prénom
    setShowLanding(false)
    setShowWelcome(true)
  }

  const openLegal = (type) => setLegalScreen(type)

  const handleSaveName = (name) => {
    saveName(name)
    setShowWelcome(false)
  }

  const nav = (s) => {
    // Si on est dans une leçon et qu'on quitte vers un autre onglet → mémoriser
    if (screen === 'lektion' && s !== 'lektion' && s !== 'home') {
      setLastLessonContext({ theme: currentTheme, lesson: currentLesson, scrollY: window.scrollY })
    }
    // Si on clique sur HOME depuis un autre onglet et qu'on a une leçon en cours → retour leçon
    if (s === 'home' && lastLessonContext && screen !== 'lektion' && screen !== 'home') {
      window.__skipNextScroll = true
      window.__restoreScroll = lastLessonContext.scrollY || 0
      setCurrentTheme(lastLessonContext.theme)
      setCurrentLesson(lastLessonContext.lesson)
      setScreen('lektion')
      // Attendre que le DOM soit rendu et que la page ait sa hauteur finale
      const tryRestore = (attempts = 0) => {
        const targetY = window.__restoreScroll
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        if (maxScroll >= targetY || attempts > 20) {
          window.scrollTo(0, targetY)
        } else {
          setTimeout(() => tryRestore(attempts + 1), 30)
        }
      }
      requestAnimationFrame(() => tryRestore())
      return
    }
    setScreen(s)
  }

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
    if (screen === 'lektion') {
      setLastLessonContext(null)
      setFocusMode(false)
      setScreen('home')
    }
    else if (screen === 'quiz') { setScreen(quizOrigin) }
    else if (screen === 'detail') { setScreen('home') }
    else { setScreen('home') }
  }

  const ctx = {
    screen, nav, goBack, quizOrigin,
    openDetail, openLesson, startQuiz,
    currentTheme, currentLesson, quizState,
    THEMES, QUIZZES, LESSON_CONTENT, FACHBEGRIFFE, PRAXIS_DATA,
    progress, saveProgress, theme, toggleTheme,
    markLessonRead,
    userName,
    openLegal,
    completeChallenge,
    isChallengeCompletedToday, getCurrentDayIndex,
  }

  const inLektionMode = ['lektion', 'detail', 'quiz'].includes(screen)

  // Early return : tant que la Landing est affichée, on ne monte PAS toute l'app
  // (évite que le contenu de la Home apparaisse derrière au scroll)
  if (showLanding) {
    return (
      <AppContext.Provider value={ctx}>
        <div data-theme={theme}>
          <Landing onStart={handleStartFromLanding} />
          {legalScreen && <Legal type={legalScreen} onClose={() => setLegalScreen(null)} />}
          <CookieBanner openLegal={openLegal} />
        </div>
      </AppContext.Provider>
    )
  }

  return (
    <AppContext.Provider value={ctx}>
      <div className={`app ${focusMode ? 'focus-mode' : ''}`} data-theme={theme}>

        {/* Pages légales (Impressum / Datenschutz) */}
        {legalScreen && <Legal type={legalScreen} onClose={() => setLegalScreen(null)} />}

        {/* Cookie-Banner — Consentement Google Analytics */}
        <CookieBanner openLegal={openLegal} />

        {/* Modal de bienvenue — après la landing */}
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
          onSearch={() => setShowSearch(true)}
          focusMode={focusMode}
          onToggleFocus={() => setFocusMode(f => !f)}
        />
        {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
        {!focusMode && <Sidebar screen={screen} onNav={nav} />}
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
            {screen === 'challenge'    && <DailyChallenge />}
          </div>
        </main>
      </div>
    </AppContext.Provider>
  )
}
