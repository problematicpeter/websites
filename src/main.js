import './style.css'
import { animate, stagger } from 'animejs'

document.querySelector('#app').innerHTML = `
  <nav>
    <a href="#" class="nav-logo">Problematic</a>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#music">Music</a></li>
      <li><a href="#connect">Connect</a></li>
    </ul>
  </nav>

  <section id="hero">
    <div class="hero-bg">
      <img src="${import.meta.env.BASE_URL}artist-bg.png" alt="" class="hero-bg-img" />
      <div class="hero-bg-overlay"></div>
      <img src="${import.meta.env.BASE_URL}artist-subject.png" alt="" class="hero-subject" />
    </div>
    <div class="hero-content">
      <p class="hero-tag">DJ · Producer</p>
      <h1 class="hero-title">PROBLEMATIC</h1>
      <div class="hero-genres">
        <span class="genre-pill">Euro Trance</span>
        <span class="genre-pill">Techno</span>
        <span class="genre-pill">EDM</span>
      </div>
      <div class="hero-cta">
        <a href="#music" class="btn btn-primary">Listen Now</a>
        <a href="#connect" class="btn btn-outline">Get in Touch</a>
      </div>
      <div class="equalizer">
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
      </div>
    </div>
  </section>

  <section id="about">
    <div class="section-inner">
      <p class="section-label">About</p>
      <h2 class="section-title">The Sound of PROBLEMATIC</h2>
      <p class="section-body">
        Driving basslines, euphoric synths, and relentless energy.
        PROBLEMATIC is a DJ and producer carving out a space at the intersection of
        Euro Trance and Techno — building sets that move bodies and bend time.
      </p>
      <div class="about-grid">
        <div class="about-stat">
          <div class="stat-num">EDM</div>
          <div class="stat-label">Genre roots</div>
        </div>
        <div class="about-stat">
          <div class="stat-num">Euro Trance</div>
          <div class="stat-label">Uplifting / Melodic</div>
        </div>
        <div class="about-stat">
          <div class="stat-num">Techno</div>
          <div class="stat-label">Dark &amp; Driving</div>
        </div>
        <div class="about-stat">
          <div class="stat-num">@probs.dj</div>
          <div class="stat-label">Follow on Instagram</div>
        </div>
      </div>
    </div>
  </section>

  <section id="works">
    <div class="section-inner">
      <p class="section-label">Works</p>
      <h2 class="section-title">Latest Tracks</h2>
      <div class="tracks-list">

        <div class="track-row" data-src="${import.meta.env.BASE_URL}you-problematic-edit.wav" data-title="Y.O.U. (Problematic Edit)" data-genre="Euro Trance">
          <span class="track-num">01</span>
          <div class="track-info">
            <div class="track-title">Y.O.U. (Problematic Edit)</div>
            <div class="track-genre">Euro Trance</div>
          </div>
          <button class="track-trigger" aria-label="Play track">
            <svg class="trigger-play" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M8 5v14l11-7z"/></svg>
            <svg class="trigger-pause" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style="display:none"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
          </button>
        </div>

      </div>
    </div>
  </section>

  <section id="music">
    <div class="section-inner">
      <p class="section-label">Music</p>
      <h2 class="section-title">Listen &amp; Follow</h2>
      <p class="section-body">Find sets, mixes, and releases across all platforms.</p>
      <div class="music-grid">
        <a href="YOUR_SPOTIFY_URL" target="_blank" class="music-card">
          <div class="music-platform platform-spotify">Spotify</div>
          <div class="music-card-title">Spotify</div>
          <p class="music-card-desc">Stream releases and follow for new drops straight to your queue.</p>
          <span class="music-card-action">Open Spotify →</span>
        </a>
        <a href="https://soundcloud.com/problematicofficial" target="_blank" class="music-card">
          <div class="music-platform platform-soundcloud">SoundCloud</div>
          <div class="music-card-title">SoundCloud</div>
          <p class="music-card-desc">Full mixes, live sets, and exclusive tracks free to stream.</p>
          <span class="music-card-action">Open SoundCloud →</span>
        </a>
        <a href="YOUR_YOUTUBE_URL" target="_blank" class="music-card">
          <div class="music-platform platform-youtube">YouTube</div>
          <div class="music-card-title">YouTube / Mixcloud</div>
          <p class="music-card-desc">Recorded sessions and live set footage.</p>
          <span class="music-card-action">Watch Now →</span>
        </a>
      </div>
    </div>
  </section>

  <section id="connect">
    <div class="section-inner">
      <p class="section-label">Connect</p>
      <h2 class="section-title">Stay in the loop.</h2>
      <p class="section-body">Follow along, reach out for bookings, or just come say hi.</p>
      <div class="social-grid">
        <a href="https://www.instagram.com/probs.dj/" target="_blank" class="social-link">
          Instagram &nbsp;·&nbsp; @probs.dj
        </a>
        <a href="https://soundcloud.com/problematicofficial" target="_blank" class="social-link">
          SoundCloud
        </a>
        <a href="YOUR_SPOTIFY_URL" target="_blank" class="social-link">
          Spotify
        </a>
        <a href="YOUR_YOUTUBE_URL" target="_blank" class="social-link">
          YouTube / Mixcloud
        </a>
      </div>
    </div>
  </section>

  <footer>
    PROBLEMATIC &nbsp;·&nbsp; @probs.dj &nbsp;·&nbsp; ${new Date().getFullYear()}
  </footer>

  <div id="player-bar">
    <div class="pb-info">
      <div class="pb-title">Y.O.U. (Problematic Edit)</div>
      <div class="pb-genre">Euro Trance</div>
    </div>
    <div class="pb-center">
      <div class="pb-controls">
        <div class="pb-vol-wrap">
          <button class="pb-vol-btn" aria-label="Volume">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
          </button>
          <div class="pb-vol-popup">
            <input type="range" class="pb-vol-slider" min="0" max="1" step="0.01" value="1" />
          </div>
        </div>
        <button class="pb-play-btn" aria-label="Play / Pause">
          <svg class="pb-icon-play"  viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M8 5v14l11-7z"/></svg>
          <svg class="pb-icon-pause" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style="display:none"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
        </button>
      </div>
      <div class="pb-progress-wrap">
        <div class="pb-bar-wrap">
          <div class="pb-bar"><div class="pb-fill"></div></div>
        </div>
        <div class="pb-times">
          <span class="pb-cur">0:00</span>
          <span class="pb-total">—</span>
        </div>
      </div>
    </div>
    <div class="pb-right"></div>
  </div>
`

// ─── Hero entrance ───
animate('nav', {
  opacity: [0, 1],
  translateY: [-16, 0],
  duration: 700,
  easing: 'easeOutQuart',
})

animate('.hero-tag', {
  opacity: [0, 1],
  translateY: [10, 0],
  delay: 300,
  duration: 600,
  easing: 'easeOutQuart',
})

animate('.hero-title', {
  opacity: [0, 1],
  scale: [0.94, 1],
  delay: 450,
  duration: 900,
  easing: 'easeOutQuart',
})

animate('.hero-genres', {
  opacity: [0, 1],
  translateY: [14, 0],
  delay: 700,
  duration: 600,
  easing: 'easeOutQuart',
})

animate('.hero-cta', {
  opacity: [0, 1],
  translateY: [14, 0],
  delay: 850,
  duration: 600,
  easing: 'easeOutQuart',
})

animate('.equalizer', {
  opacity: [0, 1],
  delay: 1050,
  duration: 700,
  easing: 'easeOutQuart',
})

// ─── Scroll reveal: section headers ───
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    animate(entry.target, {
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 600,
      easing: 'easeOutQuart',
    })
    revealObserver.unobserve(entry.target)
  })
}, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' })

document.querySelectorAll('.section-label, .section-title, .section-body').forEach(el => {
  revealObserver.observe(el)
})

// ─── Scroll reveal: staggered grids ───
const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    const items = entry.target.querySelectorAll('.music-card, .about-stat, .social-link')
    animate(items, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 500,
      delay: stagger(100),
      easing: 'easeOutQuart',
    })
    staggerObserver.unobserve(entry.target)
  })
}, { threshold: 0.1 })

document.querySelectorAll('.music-grid, .about-grid, .social-grid').forEach(el => {
  staggerObserver.observe(el)
})

// ─── Track rows scroll reveal ───
const trackObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    animate(entry.target, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      easing: 'easeOutQuart',
    })
    trackObserver.unobserve(entry.target)
  })
}, { threshold: 0.15 })

document.querySelectorAll('.track-row').forEach(el => trackObserver.observe(el))

// ─── Global audio player ───
function fmt(s) {
  if (!isFinite(s)) return '—'
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
}

const audio       = new Audio()
const bar         = document.getElementById('player-bar')
const pbPlayBtn   = bar.querySelector('.pb-play-btn')
const pbIconPlay  = bar.querySelector('.pb-icon-play')
const pbIconPause = bar.querySelector('.pb-icon-pause')
const pbFill      = bar.querySelector('.pb-fill')
const pbBar       = bar.querySelector('.pb-bar')
const pbCur       = bar.querySelector('.pb-cur')
const pbTotal     = bar.querySelector('.pb-total')
const pbWrap      = bar.querySelector('.pb-progress-wrap')
const pbVolSlider = bar.querySelector('.pb-vol-slider')
const pbVolBtn    = bar.querySelector('.pb-vol-btn')
const pbVolPopup  = bar.querySelector('.pb-vol-popup')

let currentSrc = ''
let activeRow  = null

// ─── Web Audio beat detection ───
let audioCtx = null
let analyser = null
let freqData = null

function initWebAudio() {
  if (audioCtx) { audioCtx.resume(); return }
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    const src = audioCtx.createMediaElementSource(audio)
    analyser  = audioCtx.createAnalyser()
    analyser.fftSize = 256
    src.connect(analyser)
    analyser.connect(audioCtx.destination)
    freqData = new Uint8Array(analyser.frequencyBinCount)
  } catch (e) {
    console.warn('WebAudio unavailable', e)
  }
}

function beatLoop() {
  requestAnimationFrame(beatLoop)
  if (!analyser || audio.paused) {
    pbBar.style.transform = 'scaleY(1)'
    pbFill.style.boxShadow = ''
    return
  }
  analyser.getByteFrequencyData(freqData)
  const bassEnd = Math.floor(freqData.length * 0.12)
  let sum = 0
  for (let i = 0; i < bassEnd; i++) sum += freqData[i]
  const bass = (sum / bassEnd) / 255

  pbBar.style.transform = `scaleY(${1 + bass * 3.5})`
  if (bass > 0.06) {
    pbFill.style.boxShadow =
      `0 0 ${(bass * 22).toFixed(0)}px rgba(124,58,237,${(bass * 0.9).toFixed(2)}),` +
      `0 0 ${(bass * 14).toFixed(0)}px rgba(96,165,250,${(bass * 0.6).toFixed(2)})`
  } else {
    pbFill.style.boxShadow = ''
  }
}

beatLoop()

// ─── Volume ───
pbVolSlider.addEventListener('input', () => {
  audio.volume = parseFloat(pbVolSlider.value)
})

pbVolBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  pbVolPopup.classList.toggle('open')
})

pbVolPopup.addEventListener('click', (e) => e.stopPropagation())

document.addEventListener('click', () => pbVolPopup.classList.remove('open'))

// ─── Play state ───
function setPlayState(playing) {
  pbIconPlay.style.display  = playing ? 'none' : ''
  pbIconPause.style.display = playing ? '' : 'none'
  pbPlayBtn.classList.toggle('playing', playing)
  if (activeRow) {
    activeRow.querySelector('.trigger-play').style.display  = playing ? 'none' : ''
    activeRow.querySelector('.trigger-pause').style.display = playing ? '' : 'none'
    activeRow.classList.toggle('is-playing', playing)
  }
}

function loadTrack(row) {
  bar.querySelector('.pb-title').textContent = row.dataset.title
  bar.querySelector('.pb-genre').textContent = row.dataset.genre
  if (currentSrc !== row.dataset.src) {
    currentSrc = row.dataset.src
    audio.src  = currentSrc
    pbFill.style.width = '0%'
    pbCur.textContent  = '0:00'
    pbTotal.textContent = '—'
  }
}

audio.addEventListener('loadedmetadata', () => { pbTotal.textContent = fmt(audio.duration) })
audio.addEventListener('timeupdate', () => {
  const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0
  pbFill.style.width = pct + '%'
  pbCur.textContent  = fmt(audio.currentTime)
})
audio.addEventListener('ended', () => setPlayState(false))

pbPlayBtn.addEventListener('click', () => {
  initWebAudio()
  if (audio.paused) { audio.play(); setPlayState(true) }
  else              { audio.pause(); setPlayState(false) }
})

pbWrap.addEventListener('click', (e) => {
  if (!audio.duration) return
  const r = pbWrap.getBoundingClientRect()
  audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration
})

document.querySelectorAll('.track-row').forEach(row => {
  row.querySelector('.track-trigger').addEventListener('click', () => {
    initWebAudio()
    const isSame     = activeRow === row
    const wasPlaying = !audio.paused

    if (activeRow && activeRow !== row) {
      activeRow.querySelector('.trigger-play').style.display  = ''
      activeRow.querySelector('.trigger-pause').style.display = 'none'
      activeRow.classList.remove('is-playing')
    }

    loadTrack(row)
    activeRow = row

    if (isSame && wasPlaying) { audio.pause(); setPlayState(false) }
    else                       { audio.play();  setPlayState(true)  }
  })
})

const firstRow = document.querySelector('.track-row')
if (firstRow) loadTrack(firstRow)

// ─── Hero parallax ───
const heroBgImg   = document.querySelector('.hero-bg-img')
const heroSubject = document.querySelector('.hero-subject')

let tBgX = 0, tBgY = 0, tSubX = 0, tSubY = 0
let cBgX = 0, cBgY = 0, cSubX = 0, cSubY = 0

document.addEventListener('mousemove', (e) => {
  const nx = (e.clientX / window.innerWidth  - 0.5) * 2
  const ny = (e.clientY / window.innerHeight - 0.5) * 2
  tBgX  = nx * -28
  tBgY  = ny * -16
  tSubX = nx * -10
  tSubY = ny * -7
});

(function parallaxTick() {
  requestAnimationFrame(parallaxTick)
  const ease = 0.07
  cBgX  += (tBgX  - cBgX)  * ease
  cBgY  += (tBgY  - cBgY)  * ease
  cSubX += (tSubX - cSubX) * ease
  cSubY += (tSubY - cSubY) * ease
  heroBgImg.style.transform   = `translate(${cBgX.toFixed(2)}px,${cBgY.toFixed(2)}px) scale(1.1)`
  heroSubject.style.transform = `translate(${cSubX.toFixed(2)}px,${cSubY.toFixed(2)}px) scale(1.04)`
})()
