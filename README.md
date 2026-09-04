# BolChal English

A senior-friendly Hindi-to-English speaking practice Progressive Web App.

## Features

- Six beginner lessons with Hindi meaning, English text, and Hindi pronunciation help
- English text-to-speech playback
- Browser speech recognition for speaking practice
- Guided live-conversation practice
- Large-text mode and simple mobile-friendly controls
- Progress saved locally
- Installable PWA configuration

## Requirements

- Node.js 20 or newer
- npm
- Chrome or Microsoft Edge recommended for microphone practice

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

Import the repository into Vercel. The Vite defaults are sufficient:

- Build command: `npm run build`
- Output directory: `dist`

After deployment, open the HTTPS site on the phone and use the browser's **Add to Home Screen** or **Install app** option.

## Microphone note

Speech recognition depends on browser support and microphone permission. Production deployment should use HTTPS.
