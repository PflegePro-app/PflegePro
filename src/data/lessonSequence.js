// Daily Challenge — séquence ordonnée des Lerneinheiten
// Se construit automatiquement à partir de LESSON_CONTENT
// Quand tu ajoutes une nouvelle leçon dans lessons.js, elle est ajoutée à la séquence.

import { LESSON_CONTENT } from './lessons.js'

// Mapping theme → category Fachbegriffe
export const THEME_TO_CATEGORY = {
  dekubitus: 'Dekubitus',
  blutzuck: 'Blutzucker',
  haut: 'Haut',
  niere: 'Niere',
  gefaesse: 'Gefäße',
  herz: 'Herz',
  ekg: 'EKG',
  blutkreislauf: 'Gefäße',
  atmung: 'Atmung',
}

// Labels lisibles pour les themes (pour l'affichage)
export const THEME_LABELS = {
  dekubitus: 'Dekubitus',
  blutzuck: 'Blutzucker',
  haut: 'Haut & Wunden',
  niere: 'Niere & Inkontinenz',
  gefaesse: 'Gefäße',
  herz: 'Herz',
  ekg: 'EKG',
  blutkreislauf: 'Blutkreislauf',
  atmung: 'Atmung',
}

// Construction automatique de la séquence plate
// [{ themeId, lessonName, category, themeLabel }, ...]
export const LESSON_SEQUENCE = (() => {
  const seq = []
  Object.entries(LESSON_CONTENT).forEach(([themeId, lessons]) => {
    Object.keys(lessons).forEach(lessonName => {
      seq.push({
        themeId,
        lessonName,
        category: THEME_TO_CATEGORY[themeId] || 'Pflege',
        themeLabel: THEME_LABELS[themeId] || themeId,
      })
    })
  })
  return seq
})()

// Renvoie la Lerneinheit pour un dayIndex donné (boucle si on dépasse)
export function getLessonForDay(dayIndex) {
  if (LESSON_SEQUENCE.length === 0) return null
  const idx = ((dayIndex % LESSON_SEQUENCE.length) + LESSON_SEQUENCE.length) % LESSON_SEQUENCE.length
  return { ...LESSON_SEQUENCE[idx], index: idx }
}

// Renvoie la Lerneinheit d'hier (pour le quiz)
export function getYesterdayLesson(dayIndex) {
  if (dayIndex <= 0) return null
  return getLessonForDay(dayIndex - 1)
}
