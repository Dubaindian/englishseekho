// Small wrappers around the browser Web Speech APIs.

export function speak(text, { rate = 0.85, onEnd } = {}) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onEnd && onEnd()
    return
  }
  window.speechSynthesis.cancel()
  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = 'en-US'
  utter.rate = rate
  utter.pitch = 1
  const voices = window.speechSynthesis.getVoices()
  const enVoice = voices.find((v) => v.lang && v.lang.startsWith('en'))
  if (enVoice) utter.voice = enVoice
  if (onEnd) utter.onend = onEnd
  window.speechSynthesis.speak(utter)
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }
}

export function getRecognition() {
  if (typeof window === 'undefined') return null
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition
  if (!SR) return null
  const rec = new SR()
  rec.lang = 'en-US'
  rec.interimResults = false
  rec.maxAlternatives = 3
  rec.continuous = false
  return rec
}

export function speechRecognitionSupported() {
  if (typeof window === 'undefined') return false
  return Boolean(window.SpeechRecognition || window.webkitSpeechRecognition)
}

// Compare spoken text against a target, ignoring case and punctuation.
export function scoreMatch(target, spoken) {
  const clean = (s) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .split(/\s+/)
      .filter(Boolean)
  const t = clean(target)
  const s = clean(spoken)
  if (t.length === 0) return 0
  let hits = 0
  const pool = [...s]
  for (const word of t) {
    const idx = pool.indexOf(word)
    if (idx !== -1) {
      hits += 1
      pool.splice(idx, 1)
    }
  }
  return Math.round((hits / t.length) * 100)
}
