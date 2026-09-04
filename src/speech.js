// Small wrappers around the browser Web Speech APIs.

// Names commonly used for Indian English female voices across platforms.
const PREFERRED_VOICE_NAMES = [
  'Google UK English Female',
  'Microsoft Heera',
  'Microsoft Heera Online',
  'Heera',
  'Veena',
  'Rishi', // sometimes the only en-IN voice; still better than en-US
  'Google हिन्दी',
]

// Pick the best available voice, preferring Indian English female voices,
// then any en-IN voice, then any English voice.
export function pickVoice() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null
  const voices = window.speechSynthesis.getVoices()
  if (!voices || voices.length === 0) return null

  // 1. Preferred named voices.
  for (const name of PREFERRED_VOICE_NAMES) {
    const match = voices.find((v) => v.name && v.name.includes(name))
    if (match) return match
  }

  // 2. Any en-IN voice whose name hints "female".
  const enIN = voices.filter((v) => v.lang && v.lang.toLowerCase() === 'en-in')
  const femaleIN = enIN.find((v) => /female|woman|heera|veena|priya|neha/i.test(v.name))
  if (femaleIN) return femaleIN
  if (enIN.length) return enIN[0]

  // 3. Any English voice hinting female.
  const en = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith('en'))
  const femaleEN = en.find((v) => /female|woman|samantha|zira|susan|karen/i.test(v.name))
  if (femaleEN) return femaleEN

  // 4. Fallback: first English voice, else first voice.
  return en[0] || voices[0]
}

export function speak(text, { rate = 0.85, onEnd } = {}) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onEnd && onEnd()
    return
  }
  window.speechSynthesis.cancel()
  const utter = new SpeechSynthesisUtterance(text)
  const voice = pickVoice()
  utter.lang = voice?.lang || 'en-IN'
  if (voice) utter.voice = voice
  utter.rate = rate
  utter.pitch = 1.05
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
  rec.lang = 'en-IN'
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
