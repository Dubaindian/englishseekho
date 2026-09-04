# BolChal English

A mobile-first Hindi-to-English learning Progressive Web App for beginners, senior users, and homemakers.

## Features

- Six practical beginner lessons
- Hindi meanings and Hindi-script pronunciation help
- Speech recognition for speaking practice
- Open-ended, rule-based live conversation practice
- Typed reply fallback for unsupported browsers
- Indian English (`en-IN`) female voice preference using installed device voices
- Large-text mode
- Local progress tracking
- Installable PWA setup

> The selected spoken voice depends on voices installed on the user's device. The app prioritizes Indian English female voice names and falls back safely.

## Local setup

```bash
npm install
npm run dev
```

## Production check

```bash
npm run build
npm run preview
```

## Vercel

- Framework preset: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

The app requires HTTPS and microphone permission for speech recognition. Chrome or Microsoft Edge is recommended on Android.
