import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Volume2,
  Mic,
  MicOff,
  Check,
  ChevronLeft,
  ChevronRight,
  Type,
  BookOpen,
  MessageCircle,
  Trophy,
  RotateCcw,
  Send,
} from 'lucide-react'
import { lessons, practice, replyTo } from './lessons.js'
import {
  speak,
  stopSpeaking,
  getRecognition,
  speechRecognitionSupported,
  scoreMatch,
} from './speech.js'

const PROGRESS_KEY = 'bolchal-progress-v1'
const BIGTEXT_KEY = 'bolchal-bigtext-v1'

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}')
  } catch {
    return {}
  }
}

export default function App() {
  const [view, setView] = useState('home') // home | lesson | practice
  const [activeLessonId, setActiveLessonId] = useState(null)
  const [bigText, setBigText] = useState(
    () => localStorage.getItem(BIGTEXT_KEY) === '1'
  )
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => {
    localStorage.setItem(BIGTEXT_KEY, bigText ? '1' : '0')
  }, [bigText])

  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
  }, [progress])

  // Preload voices (Chrome loads them async)
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices()
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices()
      }
    }
    return () => stopSpeaking()
  }, [])

  const markPhraseDone = (lessonId, index) => {
    setProgress((prev) => {
      const done = new Set(prev[lessonId] || [])
      done.add(index)
      return { ...prev, [lessonId]: Array.from(done) }
    })
  }

  const resetProgress = () => {
    if (confirm('Kya aap apni progress reset karna chahte hain?')) {
      setProgress({})
    }
  }

  const totalPhrases = useMemo(
    () => lessons.reduce((n, l) => n + l.phrases.length, 0),
    []
  )
  const donePhrases = useMemo(
    () =>
      lessons.reduce(
        (n, l) => n + (progress[l.id] ? progress[l.id].length : 0),
        0
      ),
    [progress]
  )

  const activeLesson = lessons.find((l) => l.id === activeLessonId) || null

  return (
    <div className={bigText ? 'app big-text' : 'app'}>
      <header className="topbar">
        <button
          className="brand"
          onClick={() => {
            setView('home')
            setActiveLessonId(null)
          }}
        >
          <span className="brand-mark" aria-hidden="true">
            {'\u{1F5E3}\uFE0F'}
          </span>
          <span className="brand-text">BolChal English</span>
        </button>
        <button
          className={bigText ? 'text-toggle on' : 'text-toggle'}
          onClick={() => setBigText((v) => !v)}
          aria-pressed={bigText}
        >
          <Type size={22} aria-hidden="true" />
          <span>Bada Text</span>
        </button>
      </header>

      <main className="content">
        {view === 'home' && (
          <HomeView
            progress={progress}
            donePhrases={donePhrases}
            totalPhrases={totalPhrases}
            onOpenLesson={(id) => {
              setActiveLessonId(id)
              setView('lesson')
            }}
            onOpenPractice={() => setView('practice')}
            onReset={resetProgress}
          />
        )}

        {view === 'lesson' && activeLesson && (
          <LessonView
            lesson={activeLesson}
            done={new Set(progress[activeLesson.id] || [])}
            onDone={(i) => markPhraseDone(activeLesson.id, i)}
            onBack={() => {
              setView('home')
              setActiveLessonId(null)
            }}
          />
        )}

        {view === 'practice' && (
          <PracticeView onBack={() => setView('home')} />
        )}
      </main>

      <footer className="footer">
        <p>Hindi se aasaan English bolna seekhen</p>
      </footer>
    </div>
  )
}

function HomeView({
  progress,
  donePhrases,
  totalPhrases,
  onOpenLesson,
  onOpenPractice,
  onReset,
}) {
  const pct = totalPhrases ? Math.round((donePhrases / totalPhrases) * 100) : 0
  return (
    <section>
      <div className="hero">
        <h1>Aaj kya bolna seekhein?</h1>
        <p>Har lesson mein Hindi matlab, English vaakya, aur uchaaran hai.</p>
      </div>

      <div className="progress-card">
        <div className="progress-head">
          <Trophy size={26} aria-hidden="true" />
          <div>
            <strong>Aapki Progress</strong>
            <span>
              {donePhrases} / {totalPhrases} vaakya poore
            </span>
          </div>
          <button className="reset-btn" onClick={onReset}>
            <RotateCcw size={18} aria-hidden="true" />
            Reset
          </button>
        </div>
        <div className="progress-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <span style={{ width: pct + '%' }} />
        </div>
      </div>

      <button className="practice-cta" onClick={onOpenPractice}>
        <MessageCircle size={28} aria-hidden="true" />
        <span>
          <strong>Live Baat-cheet Practice</strong>
          <small>Jo chahe bolein ya likhein</small>
        </span>
        <ChevronRight size={24} aria-hidden="true" />
      </button>

      <h2 className="section-title">
        <BookOpen size={22} aria-hidden="true" /> Lessons
      </h2>
      <div className="lesson-grid">
        {lessons.map((lesson) => {
          const done = progress[lesson.id]?.length || 0
          const total = lesson.phrases.length
          const complete = done >= total
          return (
            <button
              key={lesson.id}
              className={complete ? 'lesson-card complete' : 'lesson-card'}
              onClick={() => onOpenLesson(lesson.id)}
            >
              <span className="lesson-emoji" aria-hidden="true">
                {lesson.emoji}
              </span>
              <span className="lesson-info">
                <strong>{lesson.title}</strong>
                <small>{lesson.subtitle}</small>
              </span>
              <span className="lesson-count">
                {complete ? <Check size={20} aria-hidden="true" /> : `${done}/${total}`}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

function LessonView({ lesson, done, onDone, onBack }) {
  const [index, setIndex] = useState(0)
  const phrase = lesson.phrases[index]
  const isFirst = index === 0
  const isLast = index === lesson.phrases.length - 1

  const supported = speechRecognitionSupported()
  const [listening, setListening] = useState(false)
  const [result, setResult] = useState(null) // { score, heard }
  const [typed, setTyped] = useState('')

  const handleListen = () => {
    const rec = getRecognition()
    if (!rec) return
    setResult(null)
    setListening(true)
    rec.onresult = (e) => {
      const heard = e.results[0][0].transcript
      const best = Math.max(
        ...Array.from(e.results[0]).map((alt) =>
          scoreMatch(phrase.english, alt.transcript)
        )
      )
      setResult({ score: best, heard })
      if (best >= 60) onDone(index)
    }
    rec.onerror = () => setListening(false)
    rec.onend = () => setListening(false)
    rec.start()
  }

  const handleTypedCheck = () => {
    if (!typed.trim()) return
    const score = scoreMatch(phrase.english, typed)
    setResult({ score, heard: typed })
    if (score >= 60) onDone(index)
  }

  const goTo = (i) => {
    stopSpeaking()
    setResult(null)
    setListening(false)
    setTyped('')
    setIndex(i)
  }

  return (
    <section className="lesson-view">
      <button className="back-btn" onClick={onBack}>
        <ChevronLeft size={22} aria-hidden="true" /> Wapas
      </button>

      <div className="lesson-header">
        <span className="lesson-emoji big" aria-hidden="true">
          {lesson.emoji}
        </span>
        <div>
          <h1>{lesson.title}</h1>
          <p>{lesson.subtitle}</p>
        </div>
      </div>

      <div className="step-dots" aria-hidden="true">
        {lesson.phrases.map((_, i) => (
          <span
            key={i}
            className={
              i === index
                ? 'dot active'
                : done.has(i)
                  ? 'dot done'
                  : 'dot'
            }
          />
        ))}
      </div>

      <div className="phrase-card">
        <span className="label">Hindi matlab</span>
        <p className="hindi-text">{phrase.hindi}</p>

        <span className="label">English bolein</span>
        <p className="english-text">{phrase.english}</p>

        <span className="label">Uchaaran (Hindi mein)</span>
        <p className="pron-text" lang="hi">{phrase.pronunciation}</p>

        <div className="phrase-actions">
          <button
            className="speak-btn"
            onClick={() => speak(phrase.english)}
          >
            <Volume2 size={26} aria-hidden="true" />
            Suniye
          </button>

          {supported ? (
            <button
              className={listening ? 'mic-btn listening' : 'mic-btn'}
              onClick={handleListen}
              disabled={listening}
            >
              {listening ? (
                <>
                  <MicOff size={26} aria-hidden="true" />
                  Sun raha hoon...
                </>
              ) : (
                <>
                  <Mic size={26} aria-hidden="true" />
                  Bolkar Practice
                </>
              )}
            </button>
          ) : (
            <button
              className="done-btn"
              onClick={() => onDone(index)}
            >
              <Check size={26} aria-hidden="true" />
              Ho gaya
            </button>
          )}
        </div>

        {!supported && (
          <div className="typed-fallback">
            <label htmlFor="lesson-typed" className="note">
              Microphone nahi hai? Yahan English likhkar practice karein:
            </label>
            <div className="typed-row">
              <input
                id="lesson-typed"
                className="typed-input"
                type="text"
                value={typed}
                placeholder={phrase.english}
                onChange={(e) => setTyped(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.nativeEvent.isComposing && e.keyCode !== 229) {
                    handleTypedCheck()
                  }
                }}
              />
              <button className="typed-send" onClick={handleTypedCheck} aria-label="Check">
                <Send size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {result && (
          <div className={result.score >= 60 ? 'feedback good' : 'feedback poor'}>
            {result.score >= 60 ? (
              <p>
                <Check size={20} aria-hidden="true" /> Shaabaash! {result.score}% sahi
              </p>
            ) : (
              <p>Phir se koshish karein. {result.score}% sahi</p>
            )}
            <small>Aapne kaha: &ldquo;{result.heard}&rdquo;</small>
          </div>
        )}
      </div>

      <div className="nav-row">
        <button
          className="nav-btn"
          onClick={() => goTo(index - 1)}
          disabled={isFirst}
        >
          <ChevronLeft size={22} aria-hidden="true" /> Pichhla
        </button>
        <button
          className="nav-btn primary"
          onClick={() => (isLast ? onBack() : goTo(index + 1))}
        >
          {isLast ? 'Poora hua' : 'Agla'}
          {!isLast && <ChevronRight size={22} aria-hidden="true" />}
        </button>
      </div>
    </section>
  )
}

function PracticeView({ onBack }) {
  const supported = speechRecognitionSupported()
  const [listening, setListening] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(() => [
    { from: 'them', english: practice.opener.english, hindi: practice.opener.hindi },
  ])
  const chatRef = useRef(null)

  // Greet with voice on first mount.
  useEffect(() => {
    speak(practice.opener.english)
    return () => stopSpeaking()
  }, [])

  // Keep the chat scrolled to the newest message.
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  const sendText = (text) => {
    const trimmed = (text || '').trim()
    if (!trimmed) return
    const reply = replyTo(trimmed)
    setMessages((prev) => [
      ...prev,
      { from: 'you', english: trimmed },
      { from: 'them', english: reply.english, hindi: reply.hindi },
    ])
    setInput('')
    stopSpeaking()
    speak(reply.english)
  }

  const handleListen = () => {
    const rec = getRecognition()
    if (!rec) return
    setListening(true)
    rec.onresult = (e) => {
      const heard = e.results[0][0].transcript
      sendText(heard)
    }
    rec.onerror = () => setListening(false)
    rec.onend = () => setListening(false)
    rec.start()
  }

  const restart = () => {
    stopSpeaking()
    setInput('')
    setMessages([
      { from: 'them', english: practice.opener.english, hindi: practice.opener.hindi },
    ])
    speak(practice.opener.english)
  }

  return (
    <section className="practice-view">
      <button className="back-btn" onClick={onBack}>
        <ChevronLeft size={22} aria-hidden="true" /> Wapas
      </button>

      <div className="lesson-header">
        <span className="lesson-emoji big" aria-hidden="true">
          {'\u2615'}
        </span>
        <div>
          <h1>{practice.title}</h1>
          <p>{practice.subtitle}</p>
        </div>
      </div>

      <div className="chat" ref={chatRef}>
        {messages.map((m, i) => (
          <div key={i} className={m.from === 'you' ? 'bubble you' : 'bubble them'}>
            <span className="bubble-role">
              {m.from === 'you' ? 'Aap' : 'Dukaandaar'}
            </span>
            <p className="bubble-en">{m.english}</p>
            {m.hindi && <p className="bubble-hi">{m.hindi}</p>}
            <button
              className="mini-speak"
              onClick={() => speak(m.english)}
              aria-label="Suniye"
            >
              <Volume2 size={18} aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>

      <div className="suggestions">
        <span className="note">Ye bol kar dekhein:</span>
        <div className="suggestion-chips">
          {practice.suggestions.map((s, i) => (
            <button key={i} className="chip" onClick={() => sendText(s.english)}>
              <strong>{s.english}</strong>
              <small>{s.hindi}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="practice-input">
        <input
          className="typed-input"
          type="text"
          value={input}
          placeholder="English mein likhein..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing && e.keyCode !== 229) {
              sendText(input)
            }
          }}
        />
        {supported && (
          <button
            className={listening ? 'mic-btn round listening' : 'mic-btn round'}
            onClick={handleListen}
            disabled={listening}
            aria-label={listening ? 'Sun raha hoon' : 'Bolkar jawaab dein'}
          >
            {listening ? <MicOff size={22} aria-hidden="true" /> : <Mic size={22} aria-hidden="true" />}
          </button>
        )}
        <button
          className="typed-send"
          onClick={() => sendText(input)}
          aria-label="Bhejein"
        >
          <Send size={22} aria-hidden="true" />
        </button>
      </div>

      {!supported && (
        <p className="note center">
          Bolkar practice ke liye Chrome ya Edge istemaal karein. Tab tak upar likhkar baat karein.
        </p>
      )}

      <button className="nav-btn primary full" onClick={restart}>
        <RotateCcw size={20} aria-hidden="true" /> Nayi baat-cheet shuru karein
      </button>
    </section>
  )
}
