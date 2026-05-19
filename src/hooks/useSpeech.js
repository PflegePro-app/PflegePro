import { useCallback, useEffect, useState } from 'react'

/**
 * Hook pour la synthèse vocale allemande (Web Speech API)
 */
export function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [germanVoice, setGermanVoice] = useState(null)
  
  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window
  
  useEffect(() => {
    if (!isSupported) return
    
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices()
      const germanVoices = voices.filter(v => v.lang.startsWith('de'))
      
      // LOG pour debug (visible dans console Chrome)
      if (germanVoices.length > 0) {
        console.log('🎤 Voix allemandes disponibles:')
        germanVoices.forEach(v => console.log(`   - ${v.name} (${v.lang}) ${v.localService ? '[local]' : '[network]'}`))
      }
      
      // Priorité de sélection (du meilleur au moins bon):
      // 1. Voix Google de-DE (la plus naturelle)
      // 2. Voix Microsoft de-DE
      // 3. N'importe quelle voix marquée "enhanced" ou "premium"
      // 4. Voix réseau de-DE (souvent meilleure que locale)
      // 5. Première voix de-DE trouvée
      const priorities = [
        v => v.name.toLowerCase().includes('google') && v.lang === 'de-DE',
        v => v.name.toLowerCase().includes('microsoft') && v.lang === 'de-DE',
        v => /enhanced|premium|natural|neural/i.test(v.name) && v.lang.startsWith('de'),
        v => !v.localService && v.lang === 'de-DE',
        v => v.lang === 'de-DE',
        v => v.lang.startsWith('de'),
      ]
      
      let best = null
      for (const test of priorities) {
        best = germanVoices.find(test)
        if (best) break
      }
      
      if (best) {
        console.log(`✅ Voix sélectionnée: ${best.name}`)
        setGermanVoice(best)
      }
    }
    
    loadVoices()
    window.speechSynthesis.onvoiceschanged = loadVoices
    
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel()
    }
  }, [isSupported])
  
  const speak = useCallback((text, options = {}) => {
    if (!isSupported || !text) return
    window.speechSynthesis.cancel()
    
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'de-DE'
    utterance.rate = options.slow ? 0.8 : 1.05  // plus vif par défaut
    utterance.pitch = 1.05  // légèrement plus haut = plus chaleureux
    utterance.volume = 1
    
    if (germanVoice) utterance.voice = germanVoice
    
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    
    window.speechSynthesis.speak(utterance)
  }, [isSupported, germanVoice])
  
  const stop = useCallback(() => {
    if (isSupported) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }, [isSupported])
  
  return { speak, stop, isSpeaking, isSupported }
}
