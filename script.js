/* ============================================================
   JUNGLE RESCUE — SCRIPT.JS
   Game edukasi mengenal hewan untuk anak TK
   Kelompok 5 · Sistem Multimedia
   ============================================================ */

'use strict';

/* ──────────────────────────────────────────────────────────────
   0. ASSET PATH CONFIGURATION
   Centralized so you can swap files in one place.
   ────────────────────────────────────────────────────────────── */
const ASSETS = {
  images: {
    animals: {
      lion:     'assets/images/animals/lion.png',
      elephant: 'assets/images/animals/elephant.png',
      monkey:   'assets/images/animals/monkey.png',
      giraffe:  'assets/images/animals/giraffe.png',
      cow:      'assets/images/animals/cow.png',
      cat:      'assets/images/animals/cat.png',
      rabbit:   'assets/images/animals/rabbit.png',
      bird:     'assets/images/animals/bird.png',
      duck:     'assets/images/animals/duck.png',
      fish:     'assets/images/animals/fish.png',
    },
    food: {
      banana:      'assets/images/food/banana.png',
      carrot:      'assets/images/food/carrot.png',
      grass:       'assets/images/food/grass.png',
      'fish-food': 'assets/images/food/fish-food.png',
      seed:        'assets/images/food/seed.png',
      meat:        'assets/images/food/meat.png',
    },
    habitat: {
      forest:    'assets/images/habitat/forest.png',
      river:     'assets/images/habitat/river.png',
      grassland: 'assets/images/habitat/grassland.png',
      tree:      'assets/images/habitat/tree.png',
      farm:      'assets/images/habitat/farm.png',
    },
    backgrounds: {
      home:  'assets/images/background/jungle-home.png',
      level: 'assets/images/background/jungle-level.png',
      game:  'assets/images/background/jungle-game.png',
    },
  },
  sounds: {
    animals: {
      lion:     'assets/sounds/animals/lion.mp3',
      elephant: 'assets/sounds/animals/elephant.mp3',
      monkey:   'assets/sounds/animals/monkey.mp3',
      cow:      'assets/sounds/animals/cow.mp3',
      cat:      'assets/sounds/animals/cat.mp3',
      bird:     'assets/sounds/animals/bird.mp3',
      duck:     'assets/sounds/animals/duck.mp3',
    },
    effects: {
      click:   'assets/sounds/effects/click.mp3',
      correct: 'assets/sounds/effects/correct.mp3',
      wrong:   'assets/sounds/effects/wrong.mp3',
      yeay:    'assets/sounds/effects/yeay.mp3',
      win:     'assets/sounds/effects/win.mp3',
      unlock:  'assets/sounds/effects/unlock.mp3',
    },
    music: {
      bgm: 'assets/sounds/music/jungle-bgm.mp3',
    },
  },
};

/* ──────────────────────────────────────────────────────────────
   1. GAME DATA
   ────────────────────────────────────────────────────────────── */
const gameData = {
  animals: {
    lion:     { name: 'Singa',   emoji: '🦁', hasSound: true,  habitat: 'forest',    food: 'meat',      foodEmoji: '🥩', foodName: 'Daging' },
    elephant: { name: 'Gajah',   emoji: '🐘', hasSound: true,  habitat: 'forest',    food: 'grass',     foodEmoji: '🌿', foodName: 'Rumput' },
    monkey:   { name: 'Monyet',  emoji: '🐒', hasSound: true,  habitat: 'tree',      food: 'banana',    foodEmoji: '🍌', foodName: 'Pisang' },
    giraffe:  { name: 'Jerapah', emoji: '🦒', hasSound: false, habitat: 'grassland', food: 'grass',     foodEmoji: '🌿', foodName: 'Daun' },
    cow:      { name: 'Sapi',    emoji: '🐄', hasSound: true,  habitat: 'farm',      food: 'grass',     foodEmoji: '🌾', foodName: 'Rumput' },
    cat:      { name: 'Kucing',  emoji: '🐱', hasSound: true,  habitat: 'farm',      food: 'fish-food', foodEmoji: '🐟', foodName: 'Ikan' },
    rabbit:   { name: 'Kelinci', emoji: '🐰', hasSound: false, habitat: 'grassland', food: 'carrot',    foodEmoji: '🥕', foodName: 'Wortel' },
    bird:     { name: 'Burung',  emoji: '🐦', hasSound: true,  habitat: 'tree',      food: 'seed',      foodEmoji: '🌰', foodName: 'Biji' },
    duck:     { name: 'Bebek',   emoji: '🦆', hasSound: true,  habitat: 'river',     food: 'seed',      foodEmoji: '🌾', foodName: 'Biji' },
    fish:     { name: 'Ikan',    emoji: '🐟', hasSound: false, habitat: 'river',     food: 'fish-food', foodEmoji: '🫧', foodName: 'Plankton' },
  },

  habitats: {
    forest:    { name: 'Hutan',         emoji: '🌳' },
    river:     { name: 'Sungai',        emoji: '🏞️' },
    grassland: { name: 'Padang Rumput', emoji: '🌾' },
    tree:      { name: 'Pohon',         emoji: '🌲' },
    farm:      { name: 'Peternakan',    emoji: '🏡' },
  },

  foods: {
    banana:      { name: 'Pisang',      emoji: '🍌' },
    carrot:      { name: 'Wortel',      emoji: '🥕' },
    grass:       { name: 'Rumput',      emoji: '🌿' },
    'fish-food': { name: 'Ikan',        emoji: '🐟' },
    seed:        { name: 'Biji-bijian', emoji: '🌰' },
    meat:        { name: 'Daging',      emoji: '🥩' },
  },

  levels: [
    { id: 1, name: 'Tebak Suara Hewan', icon: '🔊', desc: 'Dengarkan dan tebak!' },
    { id: 2, name: 'Hewan & Habitat',    icon: '🏡', desc: 'Antar hewan pulang!' },
    { id: 3, name: 'Beri Makan Hewan',   icon: '🍎', desc: 'Kasih makan yang benar!' },
    { id: 4, name: 'Tebak Bayangan',     icon: '👤', desc: 'Siapa di balik bayangan?' },
    { id: 5, name: 'Misi Penyelamatan',  icon: '🎯', desc: 'Misi terakhir Ranger!' },
  ],
};

/* Animals that have audio files */
const ANIMALS_WITH_SOUND = Object.entries(gameData.animals)
  .filter(([, a]) => a.hasSound)
  .map(([key]) => key);

const ALL_ANIMAL_KEYS = Object.keys(gameData.animals);

/* ──────────────────────────────────────────────────────────────
   2. STATE
   ────────────────────────────────────────────────────────────── */
const state = {
  currentScreen: 'loading',
  currentLevel: 0,
  currentQuestion: 0,
  totalQuestions: 5,
  errors: 0,
  questions: [],
  answered: false,

  /* Level 5 mission state */
  missionRound: 0,
  missionStep: 0,      // 0=sound, 1=food, 2=habitat
  missionAnimals: [],

  /* Progress saved to localStorage */
  progress: {
    levels: {
      1: { unlocked: true,  stars: 0 },
      2: { unlocked: false, stars: 0 },
      3: { unlocked: false, stars: 0 },
      4: { unlocked: false, stars: 0 },
      5: { unlocked: false, stars: 0 },
    },
  },
};

/* ──────────────────────────────────────────────────────────────
   3. DOM REFERENCES
   ────────────────────────────────────────────────────────────── */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

const screens = {
  loading: $('#screen-loading'),
  home:    $('#screen-home'),
  levels:  $('#screen-levels'),
  game:    $('#screen-game'),
  victory: $('#screen-victory'),
};

const dom = {
  loadingBarFill:   $('#loading-bar-fill'),
  levelsGrid:       $('#levels-grid'),
  gameLevelName:    $('#game-level-name'),
  gameProgressFill: $('#game-progress-fill'),
  gameContent:      $('#game-content'),
  qCurrent:         $('#q-current'),
  qTotal:           $('#q-total'),
  errorCount:       $('#error-count'),
  feedbackOverlay:  $('#feedback-overlay'),
  feedbackBox:      $('#feedback-box'),
  feedbackIcon:     $('#feedback-icon'),
  feedbackText:     $('#feedback-text'),
  victoryStars:     $('#victory-stars'),
  victoryScoreText: $('#victory-score-text'),
  confetti:         $('#confetti-container'),
  toast:            $('#toast'),
};

/* ──────────────────────────────────────────────────────────────
   4. AUDIO MANAGER
   ────────────────────────────────────────────────────────────── */
const AudioManager = {
  bgm: null,
  enabled: true,
  bgmVolume: 0.25,
  sfxVolume: 0.65,
  _cache: {},

  init() {
    const saved = localStorage.getItem('jr_sound');
    if (saved !== null) this.enabled = saved === '1';
    this._updateSoundBtns();
  },

  _getAudio(src) {
    if (this._cache[src]) return this._cache[src];
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = src;
    this._cache[src] = audio;
    return audio;
  },

  playBGM() {
    if (!this.enabled) return;
    try {
      if (!this.bgm) {
        this.bgm = this._getAudio(ASSETS.sounds.music.bgm);
        this.bgm.loop = true;
        this.bgm.volume = 0;
      }
      const p = this.bgm.play();
      if (p && p.catch) p.catch(() => {});
      this._fadeIn(this.bgm, this.bgmVolume, 1000);
    } catch (e) { /* audio not available */ }
  },

  stopBGM() {
    if (this.bgm) {
      this._fadeOut(this.bgm, 500);
    }
  },

  playSFX(name) {
    if (!this.enabled) return;
    try {
      const src = ASSETS.sounds.effects[name];
      if (!src) return;
      // Use cached audio template and clone for overlapping playback
      if (!this._cache[src]) {
        this._cache[src] = new Audio(src);
        this._cache[src].preload = 'auto';
      }
      const audio = this._cache[src].cloneNode();
      audio.volume = this.sfxVolume;
      const p = audio.play();
      if (p && p.catch) p.catch(() => {});
    } catch (e) { /* sfx not available */ }
  },

  playAnimalSound(animalKey) {
    if (!this.enabled) return;
    try {
      const src = ASSETS.sounds.animals[animalKey];
      if (!src) return;
      const audio = new Audio(src);
      audio.volume = this.sfxVolume;
      const p = audio.play();
      if (p && p.catch) p.catch(() => {});
    } catch (e) { /* animal sound not available */ }
  },

  toggleSound() {
    this.enabled = !this.enabled;
    localStorage.setItem('jr_sound', this.enabled ? '1' : '0');
    if (this.enabled) {
      this.playBGM();
    } else {
      this.stopBGM();
    }
    this._updateSoundBtns();
    showToast(this.enabled ? '🔊 Suara dinyalakan' : '🔇 Suara dimatikan', 'info');
  },

  _updateSoundBtns() {
    const icon = this.enabled ? '🔊' : '🔇';
    $$('#btn-sound-home, #btn-sound-level, #btn-sound-game').forEach(btn => {
      if (btn) btn.textContent = icon;
    });
  },

  _fadeIn(audio, targetVol, ms) {
    audio.volume = 0;
    const steps = 20;
    const stepTime = ms / steps;
    const volStep = targetVol / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += volStep;
      if (current >= targetVol) {
        try { audio.volume = targetVol; } catch(e) {}
        clearInterval(interval);
      } else {
        try { audio.volume = current; } catch(e) {}
      }
    }, stepTime);
  },

  _fadeOut(audio, ms) {
    const steps = 20;
    const stepTime = ms / steps;
    const startVol = audio.volume;
    const volStep = startVol / steps;
    if (startVol <= 0) { audio.pause(); return; }
    const interval = setInterval(() => {
      const newVol = audio.volume - volStep;
      if (newVol <= 0.01) {
        try { audio.volume = 0; } catch(e) {}
        audio.pause();
        clearInterval(interval);
      } else {
        try { audio.volume = newVol; } catch(e) {}
      }
    }, stepTime);
  },
};

/* ──────────────────────────────────────────────────────────────
   5. UTILITY FUNCTIONS
   ────────────────────────────────────────────────────────────── */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getRandomItems(arr, n, exclude) {
  let pool = exclude != null ? arr.filter(x => x !== exclude) : [...arr];
  return shuffleArray(pool).slice(0, n);
}

/**
 * Create an image element with emoji fallback.
 * Returns a wrapper <div style="display:contents"> with <img> + hidden <span>.
 */
function createAnimalImg(animalKey, extraClass) {
  const data = gameData.animals[animalKey];
  if (!data) return document.createElement('span');

  const wrapper = document.createElement('div');
  wrapper.style.display = 'contents';

  const img = document.createElement('img');
  img.src = ASSETS.images.animals[animalKey] || '';
  img.alt = data.name;
  img.className = extraClass || '';
  img.loading = 'lazy';

  const emoji = document.createElement('span');
  emoji.className = (extraClass || '') + ' fallback-emoji';
  emoji.textContent = data.emoji;
  emoji.style.display = 'none';

  img.onerror = () => {
    img.style.display = 'none';
    emoji.style.display = 'block';
  };

  wrapper.appendChild(img);
  wrapper.appendChild(emoji);
  return wrapper;
}

function createFoodImg(foodKey, extraClass) {
  const data = gameData.foods[foodKey];
  if (!data) return document.createElement('span');

  const wrapper = document.createElement('div');
  wrapper.style.display = 'contents';

  const img = document.createElement('img');
  img.src = ASSETS.images.food[foodKey] || '';
  img.alt = data.name;
  img.className = extraClass || '';
  img.loading = 'lazy';

  const emoji = document.createElement('span');
  emoji.className = (extraClass || '') + ' fallback-emoji';
  emoji.textContent = data.emoji;
  emoji.style.display = 'none';

  img.onerror = () => {
    img.style.display = 'none';
    emoji.style.display = 'block';
  };

  wrapper.appendChild(img);
  wrapper.appendChild(emoji);
  return wrapper;
}

function createHabitatImg(habitatKey, extraClass) {
  const data = gameData.habitats[habitatKey];
  if (!data) return document.createElement('span');

  const wrapper = document.createElement('div');
  wrapper.style.display = 'contents';

  const img = document.createElement('img');
  img.src = ASSETS.images.habitat[habitatKey] || '';
  img.alt = data.name;
  img.className = extraClass || '';
  img.loading = 'lazy';

  const emoji = document.createElement('span');
  emoji.className = (extraClass || '') + ' fallback-emoji';
  emoji.textContent = data.emoji;
  emoji.style.display = 'none';

  img.onerror = () => {
    img.style.display = 'none';
    emoji.style.display = 'block';
  };

  wrapper.appendChild(img);
  wrapper.appendChild(emoji);
  return wrapper;
}

/* ──────────────────────────────────────────────────────────────
   6. SCREEN NAVIGATION
   ────────────────────────────────────────────────────────────── */
function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => {
    el.classList.remove('active', 'entering');
  });
  const target = screens[name];
  if (target) {
    target.classList.add('active', 'entering');
    state.currentScreen = name;

    // Remove shadow mode when leaving game
    if (name !== 'game') {
      screens.game.classList.remove('shadow-mode');
    }

    // Remove 'entering' class after animation so it doesn't interfere
    setTimeout(() => target.classList.remove('entering'), 400);

    // Focus management: move focus to main interactive element
    setTimeout(() => {
      const focusMap = {
        home: '#btn-play',
        levels: '#levels-grid',
        game: '#game-content',
        victory: '#btn-victory-replay',
      };
      const sel = focusMap[name];
      if (sel) {
        const el = target.querySelector(sel) || $(sel);
        if (el) el.focus({ preventScroll: true });
      }
    }, 450);
  }
}

/* ──────────────────────────────────────────────────────────────
   7. TOAST NOTIFICATION
   ────────────────────────────────────────────────────────────── */
let toastTimer = null;
function showToast(message, type) {
  type = type || 'info';
  dom.toast.textContent = message;
  dom.toast.className = 'toast show ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    dom.toast.classList.remove('show');
  }, 2200);
}

/* ──────────────────────────────────────────────────────────────
   8. CONFETTI SPAWNER
   ────────────────────────────────────────────────────────────── */
function spawnConfetti(count) {
  count = count || 40;
  dom.confetti.innerHTML = '';
  const colors = ['#FFC928','#FF9800','#F44336','#4CAF50','#2196F3','#9C27B0','#7ED957','#FF5722'];
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'confetti';
    el.style.left = Math.random() * 100 + '%';
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDuration = (2 + Math.random() * 2) + 's';
    el.style.animationDelay = (Math.random() * 1.5) + 's';
    el.style.width = (6 + Math.random() * 8) + 'px';
    el.style.height = (6 + Math.random() * 8) + 'px';
    if (Math.random() > 0.5) el.style.borderRadius = '50%';
    dom.confetti.appendChild(el);
  }
  // Auto-cleanup confetti after 5 seconds
  setTimeout(() => { dom.confetti.innerHTML = ''; }, 5000);
}

/* ──────────────────────────────────────────────────────────────
   9. PROGRESS MANAGEMENT (localStorage)
   ────────────────────────────────────────────────────────────── */
const STORAGE_KEY = 'jr_progress';

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  } catch (e) { /* localStorage full or unavailable */ }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.levels) {
        state.progress = parsed;
        // Ensure level 1 is always unlocked
        state.progress.levels[1].unlocked = true;
      }
    }
  } catch (e) { /* corrupted data — use defaults */ }
}

function resetProgress() {
  state.progress = {
    levels: {
      1: { unlocked: true,  stars: 0 },
      2: { unlocked: false, stars: 0 },
      3: { unlocked: false, stars: 0 },
      4: { unlocked: false, stars: 0 },
      5: { unlocked: false, stars: 0 },
    },
  };
  saveProgress();
}

/* ──────────────────────────────────────────────────────────────
   10. LOADING SCREEN
   ────────────────────────────────────────────────────────────── */
function runLoadingScreen() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 12 + 3;
    if (progress > 100) progress = 100;
    dom.loadingBarFill.style.width = progress + '%';
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        showScreen('home');
        AudioManager.playBGM();
      }, 500);
    }
  }, 200);
}

/* ──────────────────────────────────────────────────────────────
   11. LEVEL SELECT
   ────────────────────────────────────────────────────────────── */
function renderLevelSelect() {
  dom.levelsGrid.innerHTML = '';
  gameData.levels.forEach((level) => {
    const info = state.progress.levels[level.id];
    const unlocked = info.unlocked;
    const stars = info.stars || 0;

    const card = document.createElement('div');
    card.className = 'level-card ' + (unlocked ? 'unlocked' : 'locked');
    card.setAttribute('role', 'listitem');
    card.setAttribute('aria-label', level.name + (unlocked ? '' : ' (terkunci)'));

    card.innerHTML = `
      <div class="level-card__icon">${level.icon}</div>
      <div class="level-card__body">
        <div class="level-card__num">Level ${level.id}</div>
        <div class="level-card__name">${level.name}</div>
        <div class="level-card__desc">${level.desc}</div>
        <div class="level-card__stars">
          ${[1,2,3].map(i =>
            `<span class="level-card__star ${i <= stars ? 'earned' : ''}">⭐</span>`
          ).join('')}
        </div>
      </div>
      ${unlocked ? '' : '<div class="level-card__lock">🔒</div>'}
    `;

    if (unlocked) {
      card.addEventListener('click', () => {
        AudioManager.playSFX('click');
        startLevel(level.id);
      });
    } else {
      card.addEventListener('click', () => {
        showToast('🔒 Selesaikan level sebelumnya dulu!', 'error');
      });
    }

    dom.levelsGrid.appendChild(card);
  });
}

/* ──────────────────────────────────────────────────────────────
   12. START LEVEL
   ────────────────────────────────────────────────────────────── */
function startLevel(levelNum) {
  state.currentLevel = levelNum;
  state.currentQuestion = 0;
  state.errors = 0;
  state.answered = false;

  const levelInfo = gameData.levels[levelNum - 1];

  // Level 5 special setup
  if (levelNum === 5) {
    state.totalQuestions = 3; // 3 mission rounds
    state.missionRound = 0;
    state.missionStep = 0;
    state.missionAnimals = shuffleArray(
      ALL_ANIMAL_KEYS.filter(k => gameData.animals[k].hasSound)
    ).slice(0, 3);
  } else {
    state.totalQuestions = 5;
    state.questions = generateQuestions(levelNum);
  }

  // Apply shadow mode for Level 4
  screens.game.classList.toggle('shadow-mode', levelNum === 4);

  dom.gameLevelName.textContent = `Level ${levelNum}: ${levelInfo.name}`;
  dom.qTotal.textContent = state.totalQuestions;

  showScreen('game');
  updateGameUI();
  renderQuestion();
}

/* ──────────────────────────────────────────────────────────────
   13. QUESTION GENERATION
   ────────────────────────────────────────────────────────────── */
function generateQuestions(level) {
  let pool, questions = [];

  switch (level) {
    case 1: // Tebak Suara — only animals with sounds
      pool = shuffleArray(ANIMALS_WITH_SOUND).slice(0, 5);
      pool.forEach(key => {
        const distractors = getRandomItems(ALL_ANIMAL_KEYS, 3, key);
        questions.push({
          type: 'sound',
          animal: key,
          options: shuffleArray([key, ...distractors]),
        });
      });
      break;

    case 2: // Habitat
      pool = shuffleArray(ALL_ANIMAL_KEYS).slice(0, 5);
      pool.forEach(key => {
        const correctHabitat = gameData.animals[key].habitat;
        const allHabs = Object.keys(gameData.habitats);
        const distractors = getRandomItems(allHabs, 2, correctHabitat);
        questions.push({
          type: 'habitat',
          animal: key,
          correct: correctHabitat,
          options: shuffleArray([correctHabitat, ...distractors]),
        });
      });
      break;

    case 3: // Beri Makan
      pool = shuffleArray(ALL_ANIMAL_KEYS).slice(0, 5);
      pool.forEach(key => {
        const correctFood = gameData.animals[key].food;
        const allFoods = Object.keys(gameData.foods);
        const distractors = getRandomItems(allFoods, 2, correctFood);
        questions.push({
          type: 'food',
          animal: key,
          correct: correctFood,
          options: shuffleArray([correctFood, ...distractors]),
        });
      });
      break;

    case 4: // Bayangan
      pool = shuffleArray(ALL_ANIMAL_KEYS).slice(0, 5);
      pool.forEach(key => {
        const distractors = getRandomItems(ALL_ANIMAL_KEYS, 3, key);
        questions.push({
          type: 'shadow',
          animal: key,
          options: shuffleArray([key, ...distractors]),
        });
      });
      break;
  }

  return questions;
}

/* ──────────────────────────────────────────────────────────────
   14. RENDER QUESTION
   ────────────────────────────────────────────────────────────── */
function renderQuestion() {
  state.answered = false;
  updateGameUI();

  if (state.currentLevel === 5) {
    renderMissionQuestion();
    return;
  }

  const q = state.questions[state.currentQuestion];
  if (!q) return;

  switch (q.type) {
    case 'sound':   renderSoundQuestion(q);   break;
    case 'habitat': renderHabitatQuestion(q); break;
    case 'food':    renderFoodQuestion(q);    break;
    case 'shadow':  renderShadowQuestion(q);  break;
  }
}

/* ──────────────────────────────────────────────────────────────
   14a. LEVEL 1 — Tebak Suara
   ────────────────────────────────────────────────────────────── */
function renderSoundQuestion(q) {
  dom.gameContent.innerHTML = `
    <div class="game-instruction">
      <span class="game-instruction__icon">🔊</span>
      Siapakah aku?
    </div>
    <button class="btn-listen" id="btn-listen-sound">
      <span class="btn-listen__icon">🔊</span>
      Dengarkan Suara
    </button>
    <div class="answer-grid" id="answer-grid"></div>
  `;

  // Listen button
  $('#btn-listen-sound').addEventListener('click', () => {
    AudioManager.playAnimalSound(q.animal);
    $('#btn-listen-sound').classList.add('bounce-big');
    setTimeout(() => {
      const btn = $('#btn-listen-sound');
      if (btn) btn.classList.remove('bounce-big');
    }, 500);
  });

  // Answer cards
  renderAnimalAnswerCards(q.options, q.animal);

  // Auto-play sound after short delay
  setTimeout(() => AudioManager.playAnimalSound(q.animal), 600);
}

/* ──────────────────────────────────────────────────────────────
   14b. LEVEL 2 — Habitat
   ────────────────────────────────────────────────────────────── */
function renderHabitatQuestion(q) {
  const animal = gameData.animals[q.animal];
  dom.gameContent.innerHTML = `
    <div class="game-instruction">
      <span class="game-instruction__icon">🏡</span>
      Antarkan hewan ke rumahnya!
    </div>
    <div class="animal-display" id="animal-display">
      <div id="animal-img-wrap"></div>
    </div>
    <div class="animal-name-badge">${animal.emoji} ${animal.name}</div>
    <div class="answer-grid answer-grid--3" id="answer-grid"></div>
  `;

  // Animal image
  const imgWrap = $('#animal-img-wrap');
  imgWrap.appendChild(createAnimalImg(q.animal, 'answer-card__img'));

  // Habitat cards
  const grid = $('#answer-grid');
  q.options.forEach(habKey => {
    const hab = gameData.habitats[habKey];
    const card = document.createElement('button');
    card.className = 'answer-card';
    card.setAttribute('aria-label', hab.name);

    card.innerHTML = `
      <img src="${ASSETS.images.habitat[habKey] || ''}" alt="${hab.name}" class="answer-card__img"
           onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <span class="answer-card__emoji" style="display:none">${hab.emoji}</span>
      <span class="answer-card__text">${hab.name}</span>
    `;

    card.addEventListener('click', () => handleAnswer(habKey, q.correct, card));
    grid.appendChild(card);
  });
}

/* ──────────────────────────────────────────────────────────────
   14c. LEVEL 3 — Beri Makan
   ────────────────────────────────────────────────────────────── */
function renderFoodQuestion(q) {
  const animal = gameData.animals[q.animal];
  dom.gameContent.innerHTML = `
    <div class="game-instruction">
      <span class="game-instruction__icon">🍎</span>
      Hewan ini lapar. Pilih makanannya!
    </div>
    <div class="animal-display" id="animal-display">
      <div id="animal-img-wrap"></div>
    </div>
    <div class="animal-name-badge">${animal.emoji} ${animal.name}</div>
    <div class="answer-grid answer-grid--3" id="answer-grid"></div>
  `;

  const imgWrap = $('#animal-img-wrap');
  imgWrap.appendChild(createAnimalImg(q.animal, 'answer-card__img'));

  const grid = $('#answer-grid');
  q.options.forEach(foodKey => {
    const food = gameData.foods[foodKey];
    const card = document.createElement('button');
    card.className = 'answer-card';
    card.setAttribute('aria-label', food.name);

    card.innerHTML = `
      <img src="${ASSETS.images.food[foodKey] || ''}" alt="${food.name}" class="answer-card__img"
           onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <span class="answer-card__emoji" style="display:none">${food.emoji}</span>
      <span class="answer-card__text">${food.name}</span>
    `;

    card.addEventListener('click', () => handleAnswer(foodKey, q.correct, card));
    grid.appendChild(card);
  });
}

/* ──────────────────────────────────────────────────────────────
   14d. LEVEL 4 — Tebak Bayangan
   ────────────────────────────────────────────────────────────── */
function renderShadowQuestion(q) {
  const animal = gameData.animals[q.animal];
  dom.gameContent.innerHTML = `
    <div class="game-instruction">
      <span class="game-instruction__icon">👤</span>
      Siapa di balik bayangan?
    </div>
    <div class="animal-display silhouette" id="animal-display">
      <div id="animal-img-wrap"></div>
    </div>
    <div class="answer-grid" id="answer-grid"></div>
  `;

  // Silhouette animal image
  const imgWrap = $('#animal-img-wrap');
  const animalSrc = ASSETS.images.animals[q.animal];
  if (animalSrc) {
    const img = document.createElement('img');
    img.src = animalSrc;
    img.alt = '???';
    img.className = 'answer-card__img';
    img.style.width = '85px';
    img.style.height = '85px';
    img.onerror = function() {
      this.style.display = 'none';
      const em = document.createElement('span');
      em.className = 'animal-display__emoji';
      em.textContent = animal.emoji;
      imgWrap.appendChild(em);
    };
    imgWrap.appendChild(img);
  } else {
    const em = document.createElement('span');
    em.className = 'animal-display__emoji';
    em.textContent = animal.emoji;
    imgWrap.appendChild(em);
  }

  // Answer cards
  renderAnimalAnswerCards(q.options, q.animal, true);
}

/* ──────────────────────────────────────────────────────────────
   14e. LEVEL 5 — Misi Penyelamatan
   ────────────────────────────────────────────────────────────── */
function renderMissionQuestion() {
  state.answered = false; // FIX: ensure answered is reset for each step
  const animalKey = state.missionAnimals[state.missionRound];
  if (!animalKey) return;
  const animal = gameData.animals[animalKey];
  const step = state.missionStep;

  // Step labels
  const stepLabels = ['🔊 Kenali Suaranya', '🍎 Beri Makan', '🏡 Antar Pulang'];

  dom.gameContent.innerHTML = `
    <div class="mission-story">
      🆘 Ada hewan tersesat di hutan!<br>Ayo bantu dia pulang. 🌿
    </div>
    <div class="mission-steps">
      ${[0,1,2].map(i =>
        `<div class="mission-step ${i === step ? 'active' : (i < step ? 'done' : '')}">${i < step ? '✓' : (i+1)}</div>`
      ).join('')}
    </div>
    <div class="game-instruction">
      <span class="game-instruction__icon">${stepLabels[step].split(' ')[0]}</span>
      ${step === 0 ? 'Dengarkan! Siapa dia?' : step === 1 ? `Beri makan ${animal.name}!` : `Antar ${animal.name} pulang!`}
    </div>
  `;

  if (step === 0) {
    // Sound identification
    const listenBtn = document.createElement('button');
    listenBtn.className = 'btn-listen';
    listenBtn.innerHTML = '<span class="btn-listen__icon">🔊</span> Dengarkan Suara';
    listenBtn.addEventListener('click', () => {
      AudioManager.playAnimalSound(animalKey);
      listenBtn.classList.add('bounce-big');
      setTimeout(() => listenBtn.classList.remove('bounce-big'), 500);
    });
    dom.gameContent.appendChild(listenBtn);

    const grid = document.createElement('div');
    grid.className = 'answer-grid';
    grid.id = 'answer-grid';
    dom.gameContent.appendChild(grid);

    const distractors = getRandomItems(ALL_ANIMAL_KEYS, 3, animalKey);
    const options = shuffleArray([animalKey, ...distractors]);
    renderAnimalAnswerCards(options, animalKey, false, 'mission-sound');

    setTimeout(() => AudioManager.playAnimalSound(animalKey), 600);

  } else if (step === 1) {
    // Food selection
    const display = document.createElement('div');
    display.className = 'animal-display';
    display.innerHTML = '<div id="animal-img-wrap"></div>';
    dom.gameContent.appendChild(display);
    display.querySelector('#animal-img-wrap').appendChild(
      createAnimalImg(animalKey, 'answer-card__img')
    );

    const badge = document.createElement('div');
    badge.className = 'animal-name-badge';
    badge.textContent = animal.emoji + ' ' + animal.name;
    dom.gameContent.appendChild(badge);

    const grid = document.createElement('div');
    grid.className = 'answer-grid answer-grid--3';
    grid.id = 'answer-grid';
    dom.gameContent.appendChild(grid);

    const correctFood = animal.food;
    const allFoods = Object.keys(gameData.foods);
    const distractors = getRandomItems(allFoods, 2, correctFood);
    const options = shuffleArray([correctFood, ...distractors]);

    options.forEach(foodKey => {
      const food = gameData.foods[foodKey];
      const card = document.createElement('button');
      card.className = 'answer-card';
      card.setAttribute('aria-label', food.name);
      card.innerHTML = `
        <img src="${ASSETS.images.food[foodKey] || ''}" alt="${food.name}" class="answer-card__img"
             onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <span class="answer-card__emoji" style="display:none">${food.emoji}</span>
        <span class="answer-card__text">${food.name}</span>
      `;
      card.addEventListener('click', () => handleMissionAnswer(foodKey, correctFood, card));
      grid.appendChild(card);
    });

  } else if (step === 2) {
    // Habitat selection
    const display = document.createElement('div');
    display.className = 'animal-display';
    display.innerHTML = '<div id="animal-img-wrap"></div>';
    dom.gameContent.appendChild(display);
    display.querySelector('#animal-img-wrap').appendChild(
      createAnimalImg(animalKey, 'answer-card__img')
    );

    const badge = document.createElement('div');
    badge.className = 'animal-name-badge';
    badge.textContent = animal.emoji + ' ' + animal.name;
    dom.gameContent.appendChild(badge);

    const grid = document.createElement('div');
    grid.className = 'answer-grid answer-grid--3';
    grid.id = 'answer-grid';
    dom.gameContent.appendChild(grid);

    const correctHabitat = animal.habitat;
    const allHabs = Object.keys(gameData.habitats);
    const distractors = getRandomItems(allHabs, 2, correctHabitat);
    const options = shuffleArray([correctHabitat, ...distractors]);

    options.forEach(habKey => {
      const hab = gameData.habitats[habKey];
      const card = document.createElement('button');
      card.className = 'answer-card';
      card.setAttribute('aria-label', hab.name);
      card.innerHTML = `
        <img src="${ASSETS.images.habitat[habKey] || ''}" alt="${hab.name}" class="answer-card__img"
             onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <span class="answer-card__emoji" style="display:none">${hab.emoji}</span>
        <span class="answer-card__text">${hab.name}</span>
      `;
      card.addEventListener('click', () => handleMissionAnswer(habKey, correctHabitat, card));
      grid.appendChild(card);
    });
  }
}

/* ──────────────────────────────────────────────────────────────
   15. ANSWER CARD RENDERER (Animals)
   ────────────────────────────────────────────────────────────── */
function renderAnimalAnswerCards(options, correctKey, isShadow, missionType) {
  const grid = $('#answer-grid');
  if (!grid) return;
  grid.innerHTML = '';

  options.forEach(key => {
    const animal = gameData.animals[key];
    if (!animal) return;
    const card = document.createElement('button');
    card.className = 'answer-card';
    card.setAttribute('aria-label', animal.name);

    const animalSrc = ASSETS.images.animals[key];
    card.innerHTML = `
      <img src="${animalSrc || ''}" alt="${animal.name}" class="answer-card__img"
           onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <span class="answer-card__emoji" style="display:none">${animal.emoji}</span>
      <span class="answer-card__text">${animal.name}</span>
    `;

    if (missionType) {
      card.addEventListener('click', () => handleMissionAnswer(key, correctKey, card));
    } else {
      card.addEventListener('click', () => handleAnswer(key, correctKey, card, isShadow));
    }

    grid.appendChild(card);
  });
}

/* ──────────────────────────────────────────────────────────────
   16. ANSWER HANDLING
   ────────────────────────────────────────────────────────────── */
function handleAnswer(selected, correct, cardEl, isShadow) {
  if (state.answered) return;
  state.answered = true;

  const isCorrect = selected === correct;

  // Snapshot current cards for proper re-enable
  const allCards = $$('#answer-grid .answer-card');

  // Disable all cards
  allCards.forEach(c => c.classList.add('disabled'));

  if (isCorrect) {
    cardEl.classList.add('correct');
    AudioManager.playSFX('correct');
    showFeedback(true);

    // Shadow reveal
    if (isShadow) {
      const display = $('#animal-display');
      if (display) {
        display.classList.add('revealed');
        addSparkles(display);
      }
    }

    // Level 3 eating animation
    if (state.currentLevel === 3) {
      const animalDisplay = $('#animal-display');
      if (animalDisplay) animalDisplay.classList.add('animal-eating');
    }

    setTimeout(() => nextQuestion(), 1500);
  } else {
    cardEl.classList.add('wrong');
    state.errors++;
    updateGameUI();
    AudioManager.playSFX('wrong');
    showFeedback(false);

    // Count remaining enabled cards (excluding the one just clicked)
    const remainingCards = allCards.filter(c => c !== cardEl && !c.classList.contains('disabled') && !c.classList.contains('wrong'));

    // FIX: Use a Set to track which cards should stay disabled
    setTimeout(() => {
      state.answered = false;
      // Re-enable all cards except: correct ones and the clicked wrong card
      allCards.forEach(c => {
        if (c === cardEl) {
          c.classList.add('disabled');
          c.classList.remove('wrong');
        } else if (!c.classList.contains('correct')) {
          c.classList.remove('disabled');
        }
      });

      // If only the correct answer remains, auto-reveal it
      if (remainingCards.length <= 1) {
        allCards.forEach(c => {
          // Find the correct card by checking its aria-label or data
          const label = c.getAttribute('aria-label');
          // Highlight all non-disabled, non-wrong cards as correct-reveal
          if (!c.classList.contains('disabled') && !c.classList.contains('wrong')) {
            c.classList.add('correct-reveal', 'disabled');
          }
        });
        state.answered = true;
        setTimeout(() => nextQuestion(), 1500);
      }
    }, 1000);
  }
}

function handleMissionAnswer(selected, correct, cardEl) {
  if (state.answered) return;
  state.answered = true;

  const isCorrect = selected === correct;
  const allCards = $$('#answer-grid .answer-card');
  allCards.forEach(c => c.classList.add('disabled'));

  if (isCorrect) {
    cardEl.classList.add('correct');
    AudioManager.playSFX('correct');
    showFeedback(true);

    setTimeout(() => {
      state.missionStep++;
      if (state.missionStep >= 3) {
        // Round complete
        state.missionRound++;
        state.missionStep = 0;
        state.currentQuestion = state.missionRound;

        if (state.missionRound >= state.missionAnimals.length) {
          // All rounds done
          completeLevel();
        } else {
          updateGameUI();
          renderMissionQuestion();
        }
      } else {
        renderMissionQuestion();
      }
    }, 1200);
  } else {
    cardEl.classList.add('wrong');
    state.errors++;
    updateGameUI();
    AudioManager.playSFX('wrong');
    showFeedback(false);

    // Count remaining enabled cards
    const remainingCards = allCards.filter(c => c !== cardEl && !c.classList.contains('disabled') && !c.classList.contains('wrong'));

    setTimeout(() => {
      state.answered = false;
      allCards.forEach(c => {
        if (c === cardEl) {
          c.classList.add('disabled');
          c.classList.remove('wrong');
        } else if (!c.classList.contains('correct')) {
          c.classList.remove('disabled');
        }
      });

      // If only the correct answer remains, auto-reveal it
      if (remainingCards.length <= 1) {
        allCards.forEach(c => {
          if (!c.classList.contains('disabled') && !c.classList.contains('wrong')) {
            c.classList.add('correct-reveal', 'disabled');
          }
        });
        state.answered = true;
        // Advance mission step after reveal
        setTimeout(() => {
          state.missionStep++;
          if (state.missionStep >= 3) {
            state.missionRound++;
            state.missionStep = 0;
            state.currentQuestion = state.missionRound;
            if (state.missionRound >= state.missionAnimals.length) {
              completeLevel();
            } else {
              updateGameUI();
              renderMissionQuestion();
            }
          } else {
            renderMissionQuestion();
          }
        }, 1500);
      }
    }, 1000);
  }
}

/* ──────────────────────────────────────────────────────────────
   17. FEEDBACK OVERLAY
   ────────────────────────────────────────────────────────────── */
function showFeedback(isCorrect) {
  const overlay = dom.feedbackOverlay;
  overlay.className = 'feedback-overlay show ' + (isCorrect ? 'correct' : 'wrong');

  if (isCorrect) {
    dom.feedbackIcon.textContent = '🎉';
    const texts = ['Benar!', 'Hebat!', 'Pintar!', 'Keren!', 'Yeay!'];
    dom.feedbackText.textContent = texts[Math.floor(Math.random() * texts.length)];
  } else {
    dom.feedbackIcon.textContent = '😅';
    const texts = ['Coba lagi ya!', 'Hmm, bukan itu', 'Ayo coba lagi!'];
    dom.feedbackText.textContent = texts[Math.floor(Math.random() * texts.length)];
  }

  setTimeout(() => {
    overlay.classList.remove('show', 'correct', 'wrong');
  }, isCorrect ? 1000 : 800);
}

/* ──────────────────────────────────────────────────────────────
   18. NEXT QUESTION / COMPLETE LEVEL
   ────────────────────────────────────────────────────────────── */
function nextQuestion() {
  state.currentQuestion++;
  if (state.currentQuestion >= state.totalQuestions) {
    completeLevel();
  } else {
    renderQuestion();
  }
}

function completeLevel() {
  const stars = calculateStars(state.errors);
  const levelNum = state.currentLevel;

  // Update progress
  const current = state.progress.levels[levelNum];
  if (stars > current.stars) {
    current.stars = stars;
  }

  // Unlock next level
  if (levelNum < 5) {
    state.progress.levels[levelNum + 1].unlocked = true;
  }

  saveProgress();

  // Show victory / level complete
  if (levelNum === 5) {
    showVictoryScreen(stars);
  } else {
    showLevelComplete(stars, levelNum);
  }
}

function calculateStars(errors) {
  if (errors === 0) return 3;
  if (errors <= 2) return 2;
  return 1;
}

/* ──────────────────────────────────────────────────────────────
   19. LEVEL COMPLETE (in-game)
   ────────────────────────────────────────────────────────────── */
function showLevelComplete(stars, levelNum) {
  AudioManager.playSFX('win');
  spawnConfetti(30);

  const nextLevel = levelNum + 1;
  const hasNext = nextLevel <= 5;

  dom.gameContent.innerHTML = `
    <div class="level-complete">
      <div class="level-complete__icon">🎊</div>
      <div class="level-complete__title">Level Selesai!</div>
      <div class="level-complete__subtitle">Kamu mendapat:</div>
      <div class="level-complete__stars" id="lc-stars"></div>
      <div class="level-complete__actions">
        ${hasNext ? `<button class="btn-action btn-action--primary" id="btn-lc-next">➡️ Level Berikutnya</button>` : ''}
        <button class="btn-action btn-action--secondary" id="btn-lc-replay">🔄 Main Lagi</button>
        <button class="btn-action btn-action--outline" id="btn-lc-levels">🗺️ Pilih Level</button>
      </div>
    </div>
  `;

  // Animate stars
  const starsContainer = $('#lc-stars');
  [1,2,3].forEach((i, idx) => {
    const s = document.createElement('span');
    s.className = 'victory__star' + (i <= stars ? ' show' : ' show empty');
    s.textContent = '⭐';
    s.style.animationDelay = (idx * 0.2) + 's';
    starsContainer.appendChild(s);
  });

  // Buttons
  const btnNext = $('#btn-lc-next');
  const btnReplay = $('#btn-lc-replay');
  const btnLevels = $('#btn-lc-levels');

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      AudioManager.playSFX('click');
      startLevel(nextLevel);
    });
  }
  if (btnReplay) {
    btnReplay.addEventListener('click', () => {
      AudioManager.playSFX('click');
      startLevel(levelNum);
    });
  }
  if (btnLevels) {
    btnLevels.addEventListener('click', () => {
      AudioManager.playSFX('click');
      renderLevelSelect();
      showScreen('levels');
    });
  }
}

/* ──────────────────────────────────────────────────────────────
   20. VICTORY SCREEN (after Level 5)
   ────────────────────────────────────────────────────────────── */
function showVictoryScreen(stars) {
  AudioManager.playSFX('win');
  showScreen('victory');
  spawnConfetti(60);

  // Stars
  dom.victoryStars.innerHTML = '';
  [1,2,3].forEach((i, idx) => {
    const s = document.createElement('span');
    s.className = 'victory__star' + (i <= stars ? ' show' : ' show empty');
    s.textContent = '⭐';
    s.style.animationDelay = (idx * 0.25) + 's';
    dom.victoryStars.appendChild(s);
  });

  dom.victoryScoreText.textContent = `Kesalahan: ${state.errors} · Bintang: ${stars}/3`;

  // Hide next button (no next after level 5)
  const btnNext = $('#btn-victory-next');
  if (btnNext) btnNext.style.display = 'none';
}

/* ──────────────────────────────────────────────────────────────
   21. GAME UI UPDATE
   ────────────────────────────────────────────────────────────── */
function updateGameUI() {
  dom.errorCount.textContent = state.errors;

  // Progress bar — Level 5 tracks per-step (3 rounds × 3 steps = 9 total)
  let pct, currentDisplay, totalDisplay;
  if (state.currentLevel === 5) {
    const totalSteps = state.missionAnimals.length * 3; // 9
    const completedSteps = (state.missionRound * 3) + state.missionStep;
    pct = (completedSteps / totalSteps) * 100;
    currentDisplay = state.missionRound + 1;
    totalDisplay = state.missionAnimals.length || state.totalQuestions;
  } else {
    pct = (state.currentQuestion / state.totalQuestions) * 100;
    currentDisplay = state.currentQuestion + 1;
    totalDisplay = state.totalQuestions;
  }

  dom.qCurrent.textContent = currentDisplay;
  dom.qTotal.textContent = totalDisplay;
  dom.gameProgressFill.style.width = pct + '%';

  // Live stars
  const starsToShow = calculateStars(state.errors);
  [1,2,3].forEach(i => {
    const el = $(`#star-${i}`);
    if (el) {
      el.classList.toggle('lost', i > starsToShow);
    }
  });
}

/* ──────────────────────────────────────────────────────────────
   22. SPARKLE EFFECT
   ────────────────────────────────────────────────────────────── */
function addSparkles(container) {
  for (let i = 0; i < 6; i++) {
    const sp = document.createElement('div');
    sp.className = 'sparkle';
    sp.style.top = (20 + Math.random() * 60) + '%';
    sp.style.left = (10 + Math.random() * 80) + '%';
    sp.style.animationDelay = (Math.random() * 0.5) + 's';
    container.appendChild(sp);
    setTimeout(() => sp.remove(), 1000);
  }
}

/* ──────────────────────────────────────────────────────────────
   23. FULLSCREEN TOGGLE
   ────────────────────────────────────────────────────────────── */
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

/* ──────────────────────────────────────────────────────────────
   24. MODAL MANAGEMENT
   ────────────────────────────────────────────────────────────── */
function showModal(id) {
  const modal = $('#' + id);
  if (modal) modal.classList.add('show');
}

function hideModal(id) {
  const modal = $('#' + id);
  if (modal) modal.classList.remove('show');
}

/* ──────────────────────────────────────────────────────────────
   25. EVENT BINDINGS
   ────────────────────────────────────────────────────────────── */
function bindEvents() {
  // Sound toggles — use explicit IDs to avoid querySelectorAll issues
  ['btn-sound-home', 'btn-sound-level', 'btn-sound-game'].forEach(id => {
    const btn = $('#' + id);
    if (btn) btn.addEventListener('click', () => AudioManager.toggleSound());
  });

  // Play button
  const btnPlay = $('#btn-play');
  if (btnPlay) {
    btnPlay.addEventListener('click', () => {
      AudioManager.playSFX('click');
      renderLevelSelect();
      showScreen('levels');
    });
  }

  // Back buttons
  const btnBackHome = $('#btn-back-home');
  if (btnBackHome) {
    btnBackHome.addEventListener('click', () => {
      AudioManager.playSFX('click');
      showScreen('home');
    });
  }

  const btnBackLevels = $('#btn-back-levels');
  if (btnBackLevels) {
    btnBackLevels.addEventListener('click', () => {
      AudioManager.playSFX('click');
      renderLevelSelect();
      showScreen('levels');
    });
  }

  // Fullscreen
  const btnFullscreen = $('#btn-fullscreen');
  if (btnFullscreen) {
    btnFullscreen.addEventListener('click', () => {
      AudioManager.playSFX('click');
      toggleFullscreen();
    });
  }

  // Info modal
  const btnInfo = $('#btn-info');
  if (btnInfo) {
    btnInfo.addEventListener('click', () => {
      AudioManager.playSFX('click');
      showModal('modal-info');
    });
  }
  const btnCloseInfo = $('#btn-close-info');
  if (btnCloseInfo) btnCloseInfo.addEventListener('click', () => hideModal('modal-info'));
  const btnInfoOk = $('#btn-info-ok');
  if (btnInfoOk) btnInfoOk.addEventListener('click', () => hideModal('modal-info'));

  // Reset progress
  const btnResetProgress = $('#btn-reset-progress');
  if (btnResetProgress) {
    btnResetProgress.addEventListener('click', () => {
      AudioManager.playSFX('click');
      showModal('modal-reset');
    });
  }
  const btnResetCancel = $('#btn-reset-cancel');
  if (btnResetCancel) btnResetCancel.addEventListener('click', () => hideModal('modal-reset'));
  const btnResetConfirm = $('#btn-reset-confirm');
  if (btnResetConfirm) {
    btnResetConfirm.addEventListener('click', () => {
      resetProgress();
      hideModal('modal-reset');
      renderLevelSelect();
      showToast('🔄 Progress direset!', 'info');
    });
  }

  // Restart level
  const btnRestartLevel = $('#btn-restart-level');
  if (btnRestartLevel) {
    btnRestartLevel.addEventListener('click', () => {
      AudioManager.playSFX('click');
      if (state.currentLevel) startLevel(state.currentLevel);
    });
  }

  // Victory buttons
  const btnVictoryReplay = $('#btn-victory-replay');
  if (btnVictoryReplay) {
    btnVictoryReplay.addEventListener('click', () => {
      AudioManager.playSFX('click');
      startLevel(state.currentLevel);
    });
  }
  const btnVictoryLevels = $('#btn-victory-levels');
  if (btnVictoryLevels) {
    btnVictoryLevels.addEventListener('click', () => {
      AudioManager.playSFX('click');
      renderLevelSelect();
      showScreen('levels');
    });
  }
  const btnVictoryNext = $('#btn-victory-next');
  if (btnVictoryNext) {
    btnVictoryNext.addEventListener('click', () => {
      AudioManager.playSFX('click');
      const next = state.currentLevel + 1;
      if (next <= 5) startLevel(next);
    });
  }

  // Close modals on backdrop click
  $$('.modal__backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', () => {
      const modal = backdrop.closest('.modal');
      if (modal) modal.classList.remove('show');
    });
  });

  // Ensure audio starts on first user interaction (mobile autoplay policy)
  const startAudioOnInteraction = () => {
    AudioManager.playBGM();
    document.removeEventListener('touchstart', startAudioOnInteraction);
    document.removeEventListener('click', startAudioOnInteraction);
  };
  document.addEventListener('touchstart', startAudioOnInteraction, { once: true });
  document.addEventListener('click', startAudioOnInteraction, { once: true });
}

/* ──────────────────────────────────────────────────────────────
   26. PRELOAD CRITICAL ASSETS
   ────────────────────────────────────────────────────────────── */
function preloadAssets() {
  // Preload animal images
  Object.values(ASSETS.images.animals).forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Preload food images
  Object.values(ASSETS.images.food).forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Preload habitat images
  Object.values(ASSETS.images.habitat).forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

/* ──────────────────────────────────────────────────────────────
   27. INITIALIZATION
   ────────────────────────────────────────────────────────────── */
function init() {
  loadProgress();
  AudioManager.init();
  bindEvents();
  preloadAssets();
  runLoadingScreen();
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
