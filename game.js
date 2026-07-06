const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const coinsEl = document.getElementById('coins');
const hazardHitsEl = document.getElementById('hazard-hits');
const shopCoinsEl = document.getElementById('shop-coins');
const overlay = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlay-title');
const overlayMsg = document.getElementById('overlay-msg');
const startScreen = document.getElementById('start-screen');
const shopModal = document.getElementById('shop-modal');
const shopGrid = document.getElementById('shop-grid');
const shopBtn = document.getElementById('shop-btn');
const shopClose = document.getElementById('shop-close');
const codesBtn = document.getElementById('codes-btn');
const codesModal = document.getElementById('codes-modal');
const codesClose = document.getElementById('codes-close');
const codeInput = document.getElementById('code-input');
const codeSubmit = document.getElementById('code-submit');
const codeError = document.getElementById('code-error');
const abilityNameEl = document.getElementById('ability-name');
const abilityStatusEl = document.getElementById('ability-status');
const amplifyHud = document.getElementById('amplify-hud');
const amplifyTimerEl = document.getElementById('amplify-timer');
const codeToast = document.getElementById('code-toast');
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const settingsClose = document.getElementById('settings-close');
const musicVolumeSlider = document.getElementById('music-volume');
const musicVolumeValue = document.getElementById('music-volume-value');
const musicPrevBtn = document.getElementById('music-prev');
const musicNextBtn = document.getElementById('music-next');
const themeDarkBtn = document.getElementById('theme-dark');
const themeLightBtn = document.getElementById('theme-light');
const modeEasyBtn = document.getElementById('mode-easy');
const modeNormalBtn = document.getElementById('mode-normal');
const modeHardBtn = document.getElementById('mode-hard');
const modeExtremeBtn = document.getElementById('mode-extreme');
const languageSelect = document.getElementById('language-select');
const phoenixModal = document.getElementById('phoenix-modal');
const phoenixMsg = document.getElementById('phoenix-msg');
const phoenixPenalty = document.getElementById('phoenix-penalty');
const phoenixYes = document.getElementById('phoenix-yes');
const phoenixNo = document.getElementById('phoenix-no');
const detonatorModal = document.getElementById('detonator-modal');
const detonatorDetonateBtn = document.getElementById('detonator-detonate');
const detonatorOverBtn = document.getElementById('detonator-over');
const pauseBtn = document.getElementById('pause-btn');
const pauseModal = document.getElementById('pause-modal');
const settingsSingleBtn = document.getElementById('settings-single-btn');
const settingsMultiBtn = document.getElementById('settings-multi-btn');
const settingsMultiSubmodes = document.getElementById('settings-multi-submodes');
const settingsLobbyBtn = document.getElementById('settings-lobby-btn');
const settingsBotsBtn = document.getElementById('settings-bots-btn');
const botsModeModal = document.getElementById('bots-mode-modal');
const botsModeCloseBtn = document.getElementById('bots-mode-close');
const botsModeAppleHuntBtn = document.getElementById('bots-mode-apple-hunt');
const botsModeCobraBattleBtn = document.getElementById('bots-mode-cobra-battle');
const botsHud = document.getElementById('bots-hud');
const botsRankEl = document.getElementById('bots-rank');
const botsLengthEl = document.getElementById('bots-length');
const botsTimerEl = document.getElementById('bots-timer');
const deviceModal = document.getElementById('device-modal');
const devicePhoneBtn = document.getElementById('device-phone-btn');
const deviceTabletBtn = document.getElementById('device-tablet-btn');
const deviceComputerBtn = document.getElementById('device-computer-btn');
const settingsDevicePhoneBtn = document.getElementById('settings-device-phone');
const settingsDeviceTabletBtn = document.getElementById('settings-device-tablet');
const settingsDeviceComputerBtn = document.getElementById('settings-device-computer');
const hazardBoard = document.querySelector('.hazard-board');
const abilityHud = document.getElementById('ability-hud');
const abilityTouchControls = document.getElementById('ability-touch-controls');
const skillPrimaryBtn = document.getElementById('skill-primary-btn');
const skillSecondaryBtn = document.getElementById('skill-secondary-btn');

const SAVE_KEY = 'pixelSnakeSave';
const SAVE_VERSION = 1;
const AUTO_SAVE_MS = 15000;
const SETTINGS_KEY = 'pixelSnakeSettings';
const DEFAULT_SETTINGS = { musicVolume: 50, theme: 'dark', language: 'en', gameMode: 'normal', deviceProfile: null };
const DEVICE_PROFILES = ['phone', 'tablet', 'computer'];
const SPEED_MODE_EASY_MULT = 1.35;
const SPEED_MODE_HARD_MULT = 0.69;
const SPEED_MODE_EXTREME_MULT = 0.28;
const MUSIC_TRACKS = [
  "Can't Stop Rockin.mp3",
  'Venom Coil Run.mp3',
  'Venom Coil Run (1).mp3',
  'Venom Coil Run (2).mp3',
];
const REDEEM_CODE = 'artificial';
const PYTHON_CODE = 'python';
const AGGREGATE_CODE = 'aggregate';
const STEEL_CODE = 'steel';
const SUPPORT_CODE = 'support';
const SUPPORT_COIN_REWARD = 150;
const AMPLIFY_CODE = 'amplify';
const AMPLIFY_DURATION_MS = 65000;
const BASE_GRID_SIZE = 20;
const POCKET_DIMENSION_GRID_BONUS = 5;
const POCKET_DIMENSION_DURATION = 30000;
const POCKET_DIMENSION_COOLDOWN = 45000;
const POCKET_DIMENSION_MAX_APPLES = 16;
const RIFT_ABSORB_DURATION = 8000;
const RIFT_ABSORB_COOLDOWN = 35000;
const RIFT_ABSORB_PULL_MS = 55;
const RIFT_SCORE_MULTIPLIER = 7;
const RIFT_TELEPORT_EFFECT_MS = 1400;
const PHOENIX_REBIRTH_EFFECT_MS = 1500;

let GRID_SIZE = BASE_GRID_SIZE;
let CELL = canvas.width / BASE_GRID_SIZE;
const BASE_TICK_MS = 220;
const SPEED_DECREASE_PER_APPLE = 7;
const GLASS_SPEED_PER_APPLE = 7;
const GLASS_SEGMENTS_PER_APPLE = 2;
const MIN_TICK_MS = 65;
const SCORE_SPEED_MILESTONE = 65;
const SCORE_SPEED_MILESTONE_MULT = 0.85;
const GOLDEN_APPLE_CHANCE = 0.1;
const LUCKY_GOLDEN_CHANCE = 0.17;
const HOARDER_BONUS_INTERVAL = 5;
const HOARDER_BASE_BONUS_COINS = 6;
const GOLDEN_PITY_SPAWNS = 12;
const APPLE_COUNT = 3;
const HAZARD_HITS_BY_MODE = {
  easy: 3,
  normal: 3,
  hard: 2,
  extreme: 1,
};
const HAZARD_SUBSTITUTE_CHANCE = 0.23;
const ITEM_DESPAWN_MS = 15000;
const PERIODIC_HAZARD_INTERVAL = 20000;
const FIRE_AUTO_COOLDOWN = 350;
const CHRONO_DILATION_MS = {
  easy: 8000,
  normal: 11000,
  hard: 14000,
  extreme: 17000,
};
const CHRONO_SLOW_MULT_EASY = 1 / 0.6;
const CHRONO_SLOW_MULT_NORMAL = 1 / 0.42;
const CHRONO_SLOW_MULT_INTENSE = 1 / 0.2;
const CHRONO_SLOW_RAMP_MS = 280;
const CHRONO_COOLDOWN = 32000;
const ANCHOR_CAP_APPLES = {
  easy: 15,
  normal: 10,
  hard: 6,
  extreme: 4,
};
const GOLD_ABILITY_COOLDOWN = 31000;
const PROJECTILE_SPEED_MS = 80;
const FIREBALL_WIDTH = 3;
const FORCEFIELD_DURATION = 12000;
const FORCEFIELD_COOLDOWN = 8500;
const FORCEFIELD_PADDING = 2;
const PHANTOM_WAVE_COOLDOWN = 13000;
const WAVE_EXPAND_MS = 55;
const ROYAL_GUARD_DURATION = 15000;
const ROYAL_GUARD_MOVE_MS = 150;
const ROYAL_GUARD_COOLDOWN = 43000;
const SHADOW_ABILITY_DURATION = 5000;
const SHADOW_PULL_MS = 180;
const SHADOW_BURST_MS = 380;
const FROST_BARRICADE_DURATION = 15000;
const FROST_BARRICADE_COOLDOWN = 25000;
const EARTH_BOUNTY_DURATION = 23000;
const EARTH_BOUNTY_COOLDOWN = 45000;
const EARTH_MAX_APPLES = 14;
const EARTH_SPAWN_MS = 1400;
const EARTH_SPAWN_RADIUS = 5;
const EARTH_SPAWN_BURST_MS = 950;
const EARTH_GROW_MS = 900;
const GODZILLA_ATOMIC_COOLDOWN = 20000;
const GODZILLA_ATOMIC_DURATION = 3800;
const GODZILLA_ATOMIC_STEPS = 72;
const GODZILLA_ATOMIC_TRAIL_SECTORS = 10;
const GODZILLA_ATOMIC_VISUAL_HOLD = 180;
const GODZILLA_PULSE_COOLDOWN = 27000;
const GODZILLA_PULSE_DELAY = 800;
const GODZILLA_PULSE_WAVE_COUNT = 3;
const ATOMIC_BREATH_BURST_MS = 400;
const ITEM_HIT_BURST_MS = 360;
const COMET_DUST_DESPAWN_MS = 7000;
const COMET_DUST_PER_APPLE = 2;
const MIN_CANVAS_PX = 280;
const MAX_CANVAS_WINDOWED_PX = 640;
const MAX_CANVAS_FULLSCREEN_PX = 900;
const LAYOUT_CHROME_MIN_PX = 160;
const MIN_FREE_CELLS = 1;
const PLAY_MODE_SINGLE = 'single';
const PLAY_MODE_BOTS = 'bots';
const BOTS_WORLD_SIZE = 48;
const BOTS_VIEW_CELLS = 22;
const BOTS_BOT_COUNT = 14;
const BOTS_APPLE_COUNT = 45;
const BOTS_TICK_MS = 150;
const BOTS_MIN_SNAKE_LENGTH = 3;
const BOTS_FORCEFIELD_HITS = 3;
const BOTS_PHANTOM_WAVE_DAMAGE = 2;
const BOTS_GODZILLA_PULSE_TOTAL_DAMAGE = 4;
const BOTS_GODZILLA_ATOMIC_DAMAGE = 6;
const BOTS_FIRE_HITS_PER_BLOCK = 2;
const BOTS_GOLDEN_APPLE_CHANCE = 0.14;
const BOTS_PULSE_UNLOCK_MS = 27000;
const BOTS_ATOMIC_BREATH_RANGE = 13;
const BOTS_ATOMIC_BREATH_BOT_DAMAGE = 2;
const BOTS_SUB_MODE_APPLE_HUNT = 'apple-hunt';
const BOTS_SUB_MODE_COBRAS = 'cobra-battle';
const BOTS_APPLE_HUNT_DURATION_MS = 60000;
const MULTIPLAYER_BANNED_SKINS = new Set(['ironclad', 'riftweaver']);
const TEMPORARILY_DISABLED_SKINS = new Set(['ironclad']);
const BOTS_PALETTE = [
  { body: '#e43b44', head: '#ffcd75', dark: '#a22633', name: 'Crimson' },
  { body: '#3b5dc9', head: '#a8d8ff', dark: '#29366f', name: 'Azure' },
  { body: '#9b5de5', head: '#f9c5ff', dark: '#5a189a', name: 'Violet' },
  { body: '#c9971a', head: '#fff5a0', dark: '#8a6914', name: 'Amber' },
  { body: '#38b764', head: '#a7f070', dark: '#257953', name: 'Jade' },
  { body: '#e25822', head: '#ffcc33', dark: '#c0392b', name: 'Ember' },
  { body: '#4a4a6a', head: '#9d9dc7', dark: '#2d2d44', name: 'Onyx' },
];

// Keep SKINS sorted by cost (cheapest → most expensive).
const SKINS = [
  { id: 'classic', name: 'Classic', cost: 0, body: '#38b764', head: '#a7f070', dark: '#257953' },
  { id: 'detonator', name: 'Detonator', cost: 25, body: '#8b2500', head: '#ff4500', dark: '#4a0000' },
  { id: 'ice', name: 'Ice', cost: 50, body: '#3b5dc9', head: '#a8d8ff', dark: '#29366f' },
  { id: 'fire', name: 'Fire', cost: 55, body: '#e43b44', head: '#ffcd75', dark: '#a22633' },
  { id: 'steady', name: 'Steady', cost: 65, body: '#546e7a', head: '#b0bec5', dark: '#37474f' },
  { id: 'anchor', name: 'Anchor', cost: 85, body: '#1c313a', head: '#ffd54f', dark: '#0d1b21' },
  { id: 'chrono', name: 'Chrono', cost: 95, body: '#283593', head: '#80deea', dark: '#1a237e' },
  { id: 'hoarder', name: 'Hoarder', cost: 100, body: '#8d6e63', head: '#ffca28', dark: '#5d4037' },
  { id: 'lucky', name: 'Lucky', cost: 100, body: '#2e7d32', head: '#ffd700', dark: '#1b5e20' },
  { id: 'gold', name: 'Gold', cost: 200, body: '#c9971a', head: '#fff5a0', dark: '#8a6914' },
  { id: 'phoenix', name: 'Phoenix', cost: 250, body: '#e25822', head: '#ffcc33', dark: '#c0392b' },
  { id: 'cometstreak', name: 'Comet Streak', cost: 325, body: '#1565c0', head: '#ffd54f', dark: '#0d47a1' },
  { id: 'shadow', name: 'Shadow', cost: 350, body: '#4a4a6a', head: '#9d9dc7', dark: '#2d2d44' },
  { id: 'royal', name: 'Royal', cost: 400, body: '#6a0dad', head: '#ffd700', dark: '#4a0080' },
  { id: 'shielder', name: 'Shielder', cost: 450, body: '#4ecdc4', head: '#e8fffe', dark: '#2a9d8f' },
  { id: 'earth', name: 'Earth', cost: 475, body: '#6b4423', head: '#7cfc00', dark: '#3d2817' },
  { id: 'enhancer', name: 'Enhancer', cost: 475, body: '#9b59b6', head: '#f1c40f', dark: '#6c3483' },
  { id: 'glass', name: 'Glass Cannon', cost: 500, body: '#a8e6ff', head: '#e8f4ff', dark: '#5dade2' },
  { id: 'ironclad', name: 'Ironclad', cost: 525, body: '#7a7a8a', head: '#c0c0d0', dark: '#4a4a5a' },
  { id: 'phantom', name: 'Phantom', cost: 550, body: '#240046', head: '#9d4edd', dark: '#10002b' },
  { id: 'godzilla', name: 'Godzilla', cost: 900, body: '#1b4332', head: '#52b788', dark: '#081c15' },
  { id: 'riftweaver', name: 'Rift Weaver', cost: 925, body: '#7b2cbf', head: '#e0aaff', dark: '#3c096c' },
];

const SKIN_ABILITIES = {
  classic: {
    name: 'Surge',
    desc: 'Press F: speed boost for 4 seconds',
    cooldown: 20000,
    manual: true,
    key: 'f',
  },
  fire: {
    name: 'Fireball',
    desc: 'Auto-shoots fireballs every 0.35 seconds',
    cooldown: FIRE_AUTO_COOLDOWN,
    auto: true,
  },
  ice: {
    name: 'Frost Barricade',
    desc: 'Press F: ice wall barrier — bump safely for 15s',
    cooldown: FROST_BARRICADE_COOLDOWN,
    manual: true,
    key: 'f',
  },
  detonator: {
    name: 'Detonate',
    desc: 'Passive: on self-bite, blow off tail or game over',
    passive: true,
  },
  lucky: {
    name: 'Stardust Luck',
    desc: 'Passive: 17% chance for golden apples (was 10%)',
    passive: true,
  },
  hoarder: {
    name: 'Coin Cache',
    desc: 'Passive: doubling bonus every 5 apples (+6, +12, +24…)',
    passive: true,
  },
  steady: {
    name: 'Even Pace',
    desc: 'Passive: speed increases half as fast per apple',
    passive: true,
  },
  anchor: {
    name: 'Cruise Control',
    desc: 'Passive: top speed cap scales with difficulty (4–15 apples)',
    passive: true,
  },
  chrono: {
    name: 'Time Dilation',
    desc: 'Press F: time dilation — 8s easy / 11s normal / 14s hard / 17s extreme',
    cooldown: CHRONO_COOLDOWN,
    manual: true,
    key: 'f',
  },
  royal: {
    name: 'Royal Guards',
    desc: 'Press F: spawn 2 guards for 15 seconds',
    cooldown: ROYAL_GUARD_COOLDOWN,
    manual: true,
    key: 'f',
  },
  gold: {
    name: 'Midas Touch',
    desc: 'Press F: turn all items into golden apples',
    cooldown: GOLD_ABILITY_COOLDOWN,
    manual: true,
    key: 'f',
  },
  shadow: {
    name: 'Shadow Pull',
    desc: 'Press F: pull apples in, repel hazards for 5s',
    cooldown: 25000,
    manual: true,
    key: 'f',
  },
  glass: {
    name: 'Glass Cannon',
    desc: 'Passive: score ×3, faster speed per apple, and +2 length per apple eaten',
    passive: true,
  },
  phoenix: {
    name: 'Rebirth',
    desc: 'Passive: revive on death; 1st free, then score ÷ deaths',
    passive: true,
  },
  cometstreak: {
    name: 'Stardust Trail',
    desc: 'Passive: each apple spawns 2 dust particles (+1 pt, despawn in 7s)',
    passive: true,
  },
  ironclad: {
    name: 'Iron Hide',
    desc: 'Passive: immune to walls, self-bites, and hazards',
    passive: true,
  },
  shielder: {
    name: 'Forcefield',
    desc: 'Press F: forcefield erases hazards for 12 seconds',
    cooldown: FORCEFIELD_COOLDOWN,
    duration: FORCEFIELD_DURATION,
    manual: true,
    key: 'f',
  },
  enhancer: {
    name: 'Score Boost',
    desc: 'Passive: 37.5% 2x, 15.5% 3x, 5% 12x score on apples',
    passive: true,
  },
  phantom: {
    name: 'Energy Wave',
    desc: 'Press F: purple energy wave',
    cooldown: PHANTOM_WAVE_COOLDOWN,
    manual: true,
    key: 'f',
  },
  earth: {
    name: 'Earth Bounty',
    desc: 'Press F: spawn apples near you for 23s (max 14 on screen)',
    cooldown: EARTH_BOUNTY_COOLDOWN,
    manual: true,
    key: 'f',
  },
  godzilla: {
    name: 'Atomic Breath / Nuclear Pulse',
    desc: 'Press F: 360° atomic breath erases all items. Press T: three blue energy waves (0.8s apart)',
    dual: true,
    atomicCooldown: GODZILLA_ATOMIC_COOLDOWN,
    pulseCooldown: GODZILLA_PULSE_COOLDOWN,
  },
  riftweaver: {
    name: 'Pocket Dimension / Rift Absorb',
    desc: 'Press F: expand board +5 for 30s (max 16 items). Press T: 7× mouth absorb for 8s',
    dual: true,
    pocketCooldown: POCKET_DIMENSION_COOLDOWN,
    absorbCooldown: RIFT_ABSORB_COOLDOWN,
  },
};

const COLORS = {
  grid: '#2a2f4a',
  apple: '#ef7d57',
  appleDark: '#b13e53',
  appleLeaf: '#38b764',
  goldenApple: '#ffcc33',
  goldenAppleDark: '#c9971a',
  blackApple: '#2d2d44',
  blackAppleDark: '#0f1020',
  bomb: '#4a4a6a',
  bombFuse: '#ef7d57',
};

let snake;
let direction;
let nextDirection;
let apples;
let score;
let coins;
let baseCoins;
let applesEaten;
let hazardHits;
let drySpawns;
let lastHazardReplace;
let frameCount = 0;
let gameLoop;
let animFrame;
let state;
let userPauseActive = false;
let unlockedSkins;
let baseUnlockedSkins;
let selectedSkin;
let highScore;
let projectiles;
let abilityCooldowns;
let lastFireAuto;
let lastProjectileMove;
let surgeUntil;
let chronoUntil;
let chronoStart;
let chronoRemainingMs;
let chronoElapsedMs;
let chronoLastUpdate;
let chronoActivationBursts;
let lastChronoTimerSync;
let frostBarricadeUntil;
let shadowUntil;
let lastShadowPull;
let forcefieldUntil;
let forcefieldHitsRemaining;
let playerFireHitCount;
let energyWaves;
let pendingPhantomWaves;
let pendingGodzillaWaves;
let atomicBreathUntil;
let atomicBreathStart;
let atomicBreathLastSweepAngle;
let pocketDimensionUntil;
let riftAbsorbUntil;
let lastRiftPull;
let riftTeleportEffectUntil;
let phoenixRebirthEffectUntil;
let riftAbsorbBursts;
let atomicBreathBursts;
let atomicBreathDamagedBotIds;
let itemHitBursts;
let shadowPullBursts;
let cometDust;
let royalGuards;
let lastGuardMove;
let lastWaveExpand;
let earthBountyUntil;
let lastEarthSpawn;
let earthSpawnBursts;
let phoenixDeathCount;
let glassSpeedStacks;
let pendingPhoenixMessageKey;
let lastGameOverOverlay;
let pendingDetonatorHead;
let pendingDetonatorBiteIndex;
let codeRedeemed;
let codePythonRedeemed;
let codeAggregateRedeemed;
let codeSteelRedeemed;
let supportCodeRedeemed;
let amplifyCodeRedeemed;
let amplifyPending;
let amplifyActive;
let amplifyRemainingMs;
let amplifyLastUpdate;
let sessionCoinSpend;
let saveProgressTimer;
let lastAutoSave = 0;
let codeToastTimer;
let settings;
let musicAudio;
let musicQueue;
let musicQueueIndex;
let playMode = PLAY_MODE_SINGLE;
let savedSkinBeforeBots = null;
let settingsMultiExpanded = false;
let botSnakes = [];
let botsCamera = { x: 0, y: 0 };
let botsGameStartedAt = 0;
let botsSubMode = BOTS_SUB_MODE_COBRAS;
let botsMatchEndsAt = 0;

function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    settings = raw
      ? { ...DEFAULT_SETTINGS, ...JSON.parse(raw) }
      : { ...DEFAULT_SETTINGS };
  } catch {
    settings = { ...DEFAULT_SETTINGS };
  }

  if (!TRANSLATIONS[settings.language]) {
    settings.language = 'en';
  }

  setLanguage(settings.language);
  document.documentElement.dataset.theme = settings.theme;
  musicVolumeSlider.value = String(settings.musicVolume);
  musicVolumeValue.textContent = `${settings.musicVolume}%`;
  themeDarkBtn.classList.toggle('active', settings.theme === 'dark');
  themeLightBtn.classList.toggle('active', settings.theme === 'light');
  if (languageSelect) languageSelect.value = settings.language;
  applyGameMode(settings.gameMode ?? 'normal');
  applyMusicVolume(settings.musicVolume / 100);
  if (settings.deviceProfile) {
    applyDeviceProfile(settings.deviceProfile);
  } else {
    updateDeviceToggleUI();
  }
}

function readDeviceCssPx(name, fallback) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const parsed = parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizeDeviceProfile(profile) {
  return DEVICE_PROFILES.includes(profile) ? profile : null;
}

function updateDeviceToggleUI() {
  const profile = settings.deviceProfile;
  if (settingsDevicePhoneBtn) {
    settingsDevicePhoneBtn.classList.toggle('active', profile === 'phone');
  }
  if (settingsDeviceTabletBtn) {
    settingsDeviceTabletBtn.classList.toggle('active', profile === 'tablet');
  }
  if (settingsDeviceComputerBtn) {
    settingsDeviceComputerBtn.classList.toggle('active', profile === 'computer');
  }
}

function applyDeviceProfile(profile, { persist = false } = {}) {
  const normalized = normalizeDeviceProfile(profile);
  if (!normalized) return false;

  settings.deviceProfile = normalized;
  document.documentElement.dataset.device = normalized;
  updateDeviceToggleUI();
  updateDeviceInputUI();
  if (persist) saveSettings();
  requestAnimationFrame(() => resizeGameLayout());
  return true;
}

function isTouchDeviceProfile() {
  return settings.deviceProfile === 'phone' || settings.deviceProfile === 'tablet';
}

function updateDeviceInputUI() {
  const touch = isTouchDeviceProfile();
  const startHint = document.querySelector('#start-screen .overlay-hint');
  const restartHint = document.querySelector('#overlay .overlay-hint');
  const controlsHint = document.querySelector('#start-screen .controls-hint');

  if (startHint) {
    startHint.textContent = t(touch ? 'ui.tapToStart' : 'ui.pressSpaceStart');
  }
  if (restartHint) {
    restartHint.textContent = t(touch ? 'ui.tapToRestart' : 'ui.pressSpaceRestart');
  }
  if (controlsHint) {
    controlsHint.classList.toggle('hidden', touch);
  }

  const footerKeyMap = {
    'ui.footerMove': 'ui.footerMoveTouch',
    'ui.footerSpace': 'ui.footerSpaceTouch',
    'ui.footerShop': 'ui.footerShopTouch',
    'ui.footerAbility': 'ui.footerAbilityTouch',
    'ui.footerSecondAbility': 'ui.footerSecondAbilityTouch',
    'ui.footerPause': 'ui.footerPauseTouch',
  };
  document.querySelectorAll('.footer [data-i18n]').forEach((el) => {
    const baseKey = el.dataset.i18n;
    const key = touch && footerKeyMap[baseKey] ? footerKeyMap[baseKey] : baseKey;
    el.textContent = t(key);
  });

  if (skillPrimaryBtn) skillPrimaryBtn.textContent = t('ui.skillPrimary');
  if (skillSecondaryBtn) skillSecondaryBtn.textContent = t('ui.skillSecondary');
  updateTouchAbilityControls();
}

function shouldBlockKeyboardGameControls() {
  return isTouchDeviceProfile() && !isTypingInField();
}

function usePrimaryAbility() {
  if (state !== 'playing' || userPauseActive || isGameModalOpen()) return;
  if (selectedSkin === 'godzilla') {
    useGodzillaAtomic();
  } else if (selectedSkin === 'riftweaver') {
    useRiftPocketDimension();
  } else {
    useManualAbility();
  }
}

function useSecondaryAbility() {
  if (state !== 'playing' || userPauseActive || isGameModalOpen()) return;
  if (selectedSkin === 'godzilla') {
    useGodzillaPulse();
  } else if (selectedSkin === 'riftweaver') {
    useRiftAbsorb();
  }
}

function updateTouchAbilityControls() {
  if (!abilityTouchControls) return;
  const touch = isTouchDeviceProfile();
  const ability = SKIN_ABILITIES[selectedSkin];
  const dualSkill = selectedSkin === 'godzilla' || selectedSkin === 'riftweaver';
  const hasPrimarySkill = dualSkill || ability?.manual;
  const showControls = touch && hasPrimarySkill;

  abilityTouchControls.classList.toggle('hidden', !showControls);

  if (skillPrimaryBtn) {
    skillPrimaryBtn.classList.toggle('hidden', !hasPrimarySkill);
  }
  if (skillSecondaryBtn) {
    skillSecondaryBtn.classList.toggle('hidden', !dualSkill);
  }
}

const TOUCH_TAP_MAX_PX = 16;
const TOUCH_DIR_MIN_PX = 16;
let touchActive = false;
let touchMoved = false;
let touchStartX = 0;
let touchStartY = 0;
let touchAnchorX = 0;
let touchAnchorY = 0;
let touchPointerId = null;

function canTouchControlGame() {
  return state === 'playing' && !userPauseActive && !isGameModalOpen();
}

function queueTouchDirection(dx, dy) {
  const absX = Math.abs(dx);
  const absY = Math.abs(dy);
  if (absX < TOUCH_DIR_MIN_PX && absY < TOUCH_DIR_MIN_PX) return false;

  const move = absX >= absY
    ? { x: dx > 0 ? 1 : -1, y: 0 }
    : { x: 0, y: dy > 0 ? 1 : -1 };

  const heading = direction || nextDirection || { x: 1, y: 0 };
  const isReverse = move.x === -heading.x && move.y === -heading.y;
  if (isReverse) return false;
  if (nextDirection.x === move.x && nextDirection.y === move.y) return false;

  nextDirection = move;
  return true;
}

function updateTouchDirection(clientX, clientY) {
  const dx = clientX - touchAnchorX;
  const dy = clientY - touchAnchorY;
  if (queueTouchDirection(dx, dy)) {
    touchAnchorX = clientX;
    touchAnchorY = clientY;
  }
}

function canTouchStartOrRestart() {
  if (isDevicePickerOpen()) return false;
  if (!phoenixModal.classList.contains('hidden')) return false;
  if (!detonatorModal.classList.contains('hidden')) return false;
  if (pauseModal && !pauseModal.classList.contains('hidden')) return false;
  if (!shopModal.classList.contains('hidden')) return false;
  if (!codesModal.classList.contains('hidden')) return false;
  if (!settingsModal.classList.contains('hidden')) return false;
  return state === 'over' || state === 'waiting';
}

function setTouchScrollLock(locked) {
  if (!isTouchDeviceProfile()) return;
  document.documentElement.classList.toggle('touch-scroll-lock', locked);
}

function releaseTouchTracking() {
  touchActive = false;
  touchPointerId = null;
  setTouchScrollLock(false);
}

const TOUCH_EVENT_OPTS = { passive: false };

function initTouchControls() {
  const frame = document.querySelector('.canvas-frame');
  if (!frame) return;

  frame.addEventListener('pointerdown', (e) => {
    if (!isTouchDeviceProfile()) return;
    touchActive = true;
    touchMoved = false;
    touchStartX = e.clientX;
    touchStartY = e.clientY;
    touchAnchorX = e.clientX;
    touchAnchorY = e.clientY;
    touchPointerId = e.pointerId;
    setTouchScrollLock(true);
    if (frame.setPointerCapture) frame.setPointerCapture(e.pointerId);
    if (e.pointerType === 'touch') e.preventDefault();
  }, TOUCH_EVENT_OPTS);

  frame.addEventListener('pointermove', (e) => {
    if (!touchActive || e.pointerId !== touchPointerId) return;
    if (!isTouchDeviceProfile()) return;

    const totalDx = e.clientX - touchStartX;
    const totalDy = e.clientY - touchStartY;
    if (Math.hypot(totalDx, totalDy) > TOUCH_TAP_MAX_PX) {
      touchMoved = true;
    }

    if (touchMoved) e.preventDefault();

    if (canTouchControlGame()) {
      updateTouchDirection(e.clientX, e.clientY);
    }
  }, TOUCH_EVENT_OPTS);

  frame.addEventListener('pointerup', (e) => {
    if (!touchActive || e.pointerId !== touchPointerId) return;
    if (frame.releasePointerCapture && frame.hasPointerCapture(e.pointerId)) {
      frame.releasePointerCapture(e.pointerId);
    }

    if (!isTouchDeviceProfile()) {
      releaseTouchTracking();
      return;
    }

    if (!touchMoved) {
      const dx = e.clientX - touchStartX;
      const dy = e.clientY - touchStartY;
      if (Math.hypot(dx, dy) <= TOUCH_TAP_MAX_PX && canTouchStartOrRestart()) {
        startGame();
      }
    } else if (canTouchControlGame()) {
      updateTouchDirection(e.clientX, e.clientY);
    }

    releaseTouchTracking();
  }, TOUCH_EVENT_OPTS);

  frame.addEventListener('pointercancel', (e) => {
    if (e.pointerId !== touchPointerId) return;
    releaseTouchTracking();
  });

  frame.addEventListener('touchmove', (e) => {
    if (!isTouchDeviceProfile() || !touchActive) return;
    e.preventDefault();
  }, TOUCH_EVENT_OPTS);

  document.addEventListener('touchmove', (e) => {
    if (!isTouchDeviceProfile() || !touchActive) return;
    e.preventDefault();
  }, TOUCH_EVENT_OPTS);
}

function suggestDeviceProfile() {
  const ua = navigator.userAgent || '';
  const width = window.innerWidth;
  if (/iPad|Tablet|PlayBook|Silk|(Android(?!.*Mobile))/i.test(ua)) return 'tablet';
  if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) return 'phone';
  if (width >= 768 && width <= 1100 && navigator.maxTouchPoints > 0) return 'tablet';
  if (width < 640) return 'phone';
  return 'computer';
}

function highlightDevicePickerChoices() {
  const highlight = settings.deviceProfile || suggestDeviceProfile();
  [devicePhoneBtn, deviceTabletBtn, deviceComputerBtn].forEach((btn) => {
    if (!btn) return;
    btn.classList.toggle('suggested', btn.dataset.device === highlight);
  });
}

function showDevicePicker() {
  if (!deviceModal) return;
  highlightDevicePickerChoices();
  deviceModal.classList.remove('hidden');
  updatePauseButton();
}

function closeDevicePicker() {
  if (!deviceModal) return;
  deviceModal.classList.add('hidden');
  updatePauseButton();
}

function selectDeviceProfile(profile) {
  if (!applyDeviceProfile(profile, { persist: true })) return;
  closeDevicePicker();
}

function isDevicePickerOpen() {
  return deviceModal && !deviceModal.classList.contains('hidden');
}

function applyGameMode(mode) {
  const valid = ['easy', 'normal', 'hard', 'extreme'];
  if (!valid.includes(mode)) mode = 'normal';
  settings.gameMode = mode;
  if (modeEasyBtn) modeEasyBtn.classList.toggle('active', mode === 'easy');
  if (modeNormalBtn) modeNormalBtn.classList.toggle('active', mode === 'normal');
  if (modeHardBtn) modeHardBtn.classList.toggle('active', mode === 'hard');
  if (modeExtremeBtn) modeExtremeBtn.classList.toggle('active', mode === 'extreme');
}

function getSpeedModeMultiplier() {
  switch (settings.gameMode) {
    case 'easy':
      return SPEED_MODE_EASY_MULT;
    case 'hard':
      return SPEED_MODE_HARD_MULT;
    case 'extreme':
      return SPEED_MODE_EXTREME_MULT;
    default:
      return 1;
  }
}

function getMaxHazardHits() {
  return HAZARD_HITS_BY_MODE[settings.gameMode] ?? HAZARD_HITS_BY_MODE.normal;
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function applyTheme(theme) {
  settings.theme = theme;
  document.documentElement.dataset.theme = theme;
  themeDarkBtn.classList.toggle('active', theme === 'dark');
  themeLightBtn.classList.toggle('active', theme === 'light');
  if (state) render();
}

function shuffleArray(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function initMusicPlayer() {
  if (musicAudio) return;
  musicAudio = new Audio();
  musicAudio.addEventListener('ended', playNextTrack);
}

function buildMusicQueue() {
  musicQueue = shuffleArray(MUSIC_TRACKS);
  musicQueueIndex = 0;
}

function playCurrentTrack() {
  if (settings.musicVolume <= 0 || !musicQueue?.length) return;

  initMusicPlayer();
  const track = musicQueue[musicQueueIndex];
  musicAudio.src = encodeURI(track);
  musicAudio.volume = settings.musicVolume / 100;
  musicAudio.play().catch(() => {});
}

function playNextTrack() {
  if (!musicQueue?.length || settings.musicVolume <= 0) return;

  musicQueueIndex++;
  if (musicQueueIndex >= musicQueue.length) {
    buildMusicQueue();
  }
  playCurrentTrack();
}

function ensureMusicQueue() {
  if (!musicQueue?.length) buildMusicQueue();
}

function skipToNextTrack() {
  if (settings.musicVolume <= 0) return;
  ensureMusicQueue();
  musicQueueIndex = (musicQueueIndex + 1) % musicQueue.length;
  playCurrentTrack();
}

function skipToPreviousTrack() {
  if (settings.musicVolume <= 0) return;
  ensureMusicQueue();
  musicQueueIndex = (musicQueueIndex - 1 + musicQueue.length) % musicQueue.length;
  playCurrentTrack();
}

function startGameMusic() {
  if (settings.musicVolume <= 0) return;

  initMusicPlayer();

  if (musicAudio.src) {
    musicAudio.volume = settings.musicVolume / 100;
    if (musicAudio.paused) {
      musicAudio.play().catch(() => {});
    }
    return;
  }

  buildMusicQueue();
  playCurrentTrack();
}

function pauseMusic() {
  if (!musicAudio) return;
  musicAudio.pause();
}

function shouldGameMusicPlay() {
  return settings.musicVolume > 0
    && state === 'playing'
    && !userPauseActive
    && !isGameModalOpen();
}

function syncGameMusicPlayback() {
  if (shouldGameMusicPlay()) {
    startGameMusic();
    return;
  }
  if (musicAudio?.src && !musicAudio.paused) {
    pauseMusic();
  }
}

function applyMusicVolume(volume) {
  if (volume > 0) initMusicPlayer();
  if (!musicAudio) return;

  musicAudio.volume = volume;
  if (volume <= 0) {
    pauseMusic();
    return;
  }

  if (shouldGameMusicPlay() && musicAudio.src && musicAudio.paused) {
    musicAudio.play().catch(() => {});
  }
}

function ensureMusicRunning() {
  if (!shouldGameMusicPlay()) return;
  startGameMusic();
}

function hasSessionAllSkins() {
  return codeRedeemed || codeAggregateRedeemed;
}

function applyProgressDisplay() {
  if (hasSessionAllSkins()) {
    coins = codeRedeemed
      ? baseCoins + Math.max(0, 500 - sessionCoinSpend)
      : baseCoins;
    unlockedSkins = SKINS.map((skin) => skin.id);
  } else {
    coins = baseCoins;
    unlockedSkins = [...baseUnlockedSkins];
  }
  if (isSkinTemporarilyDisabled(selectedSkin)) {
    selectedSkin = 'classic';
  }
}

function getAbilityKey(ability) {
  return (ability?.key ?? 'f').toUpperCase();
}

let layoutResizeTimer;
let lastChromeLayoutKey = '';

function scheduleLayoutResize() {
  clearTimeout(layoutResizeTimer);
  layoutResizeTimer = setTimeout(() => {
    requestAnimationFrame(resizeGameLayout);
  }, 0);
}

function updateHud() {
  scoreEl.textContent = String(score);
  coinsEl.textContent = String(coins);
  shopCoinsEl.textContent = String(coins);
  if (hazardHitsEl) hazardHitsEl.textContent = `${hazardHits}/${getMaxHazardHits()}`;
  if (hazardBoard) hazardBoard.classList.toggle('hidden', isBotsMode());
  if (abilityHud) abilityHud.classList.remove('hidden');
  if (botsHud) botsHud.classList.toggle('hidden', !isBotsMode() || state !== 'playing');
  if (isBotsMode()) {
    updateBotsHud();
    updateAbilityHud();
  } else {
    updateAbilityHud();
  }
  updatePauseButton();

  const chromeKey = [
    isBotsMode(),
    abilityHud?.classList.contains('hidden'),
    botsHud?.classList.contains('hidden'),
    amplifyHud?.classList.contains('hidden'),
    hazardBoard?.classList.contains('hidden'),
  ].join('|');
  if (chromeKey !== lastChromeLayoutKey) {
    lastChromeLayoutKey = chromeKey;
    scheduleLayoutResize();
  }
}

function isBotsMode() {
  return playMode === PLAY_MODE_BOTS;
}

function isAppleHuntMode() {
  return isBotsMode() && botsSubMode === BOTS_SUB_MODE_APPLE_HUNT;
}

function isCobraBattleMode() {
  return isBotsMode() && botsSubMode === BOTS_SUB_MODE_COBRAS;
}

function isSkinBannedInMultiplayer(skinId) {
  return MULTIPLAYER_BANNED_SKINS.has(skinId);
}

function isSkinTemporarilyDisabled(skinId) {
  return TEMPORARILY_DISABLED_SKINS.has(skinId);
}

function resolveMultiplayerSkin() {
  const playable = unlockedSkins.filter((id) => !isSkinBannedInMultiplayer(id));
  if (playable.includes('classic')) return 'classic';
  return playable[0] ?? 'classic';
}

function applyMultiplayerSkinRestrictions() {
  if (!isSkinBannedInMultiplayer(selectedSkin)) return;
  if (!savedSkinBeforeBots) savedSkinBeforeBots = selectedSkin;
  selectedSkin = resolveMultiplayerSkin();
}

function restoreSkinAfterBots() {
  if (savedSkinBeforeBots) {
    selectedSkin = savedSkinBeforeBots;
    savedSkinBeforeBots = null;
  }
}

function isGameModalOpen() {
  return (shopModal && !shopModal.classList.contains('hidden'))
    || (codesModal && !codesModal.classList.contains('hidden'))
    || (settingsModal && !settingsModal.classList.contains('hidden'))
    || (botsModeModal && !botsModeModal.classList.contains('hidden'))
    || isDevicePickerOpen();
}

function isTypingInField() {
  const el = document.activeElement;
  if (!el) return false;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
}

function updatePauseButton() {
  if (!pauseBtn) return;
  const modalOpen = isGameModalOpen();
  const canUse = (state === 'playing' || userPauseActive)
    && !modalOpen
    && state !== 'waiting'
    && state !== 'over';
  pauseBtn.disabled = !canUse;
  pauseBtn.textContent = userPauseActive ? t('ui.resume') : t('ui.pause');
}

function togglePause() {
  if (isGameModalOpen()) return;

  if (userPauseActive) {
    userPauseActive = false;
    pauseModal.classList.add('hidden');
    state = 'playing';
    resumeAmplifyTimer();
    startGameLoops();
    updatePauseButton();
    syncGameMusicPlayback();
    return;
  }

  if (state !== 'playing') return;

  userPauseActive = true;
  freezeAmplifyTimer();
  state = 'paused';
  clearTimeout(gameLoop);
  cancelAnimationFrame(animFrame);
  pauseModal.classList.remove('hidden');
  saveProgress();
  updatePauseButton();
  syncGameMusicPlayback();
}

function hasZeroCooldowns() {
  return codePythonRedeemed || codeAggregateRedeemed;
}

function isIronclad() {
  return selectedSkin === 'ironclad' || codeSteelRedeemed || codeAggregateRedeemed;
}

function applyEnhancerScoreBoost() {
  const roll = Math.random() * 100;
  if (roll < 5) {
    score *= 12;
  } else if (roll < 20.5) {
    score *= 3;
  } else if (roll < 58) {
    score *= 2;
  }
}

function getAbilityCooldown(ability) {
  return hasZeroCooldowns() ? 0 : ability.cooldown;
}

function formatAbilityLabel(skinId) {
  return `${t('ui.ability')}: ${getAbilityName(skinId)}`;
}

function updateAbilityHud() {
  const ability = SKIN_ABILITIES[selectedSkin];
  if (!ability) {
    abilityNameEl.textContent = `${t('ui.ability')}: ${t('ui.dash')}`;
    abilityStatusEl.textContent = t('ui.dash');
    return;
  }

  abilityNameEl.textContent = formatAbilityLabel(selectedSkin);

  if (selectedSkin === 'godzilla') {
    if (isAtomicBreathActive()) {
      abilityStatusEl.textContent = t('status.atomicBreathActive');
      abilityStatusEl.classList.remove('cooldown');
      updateTouchAbilityControls();
      return;
    }
    const atomicCd = hasZeroCooldowns()
      ? 0
      : Math.max(
          0,
          GODZILLA_ATOMIC_COOLDOWN - (Date.now() - (abilityCooldowns['godzilla-atomic'] ?? 0))
        );
    const pulseCd = hasZeroCooldowns()
      ? 0
      : Math.max(
          0,
          GODZILLA_PULSE_COOLDOWN - (Date.now() - (abilityCooldowns['godzilla-pulse'] ?? 0))
        );
    const fStatus = atomicCd <= 0
      ? t(isTouchDeviceProfile() ? 'status.fReadyTouch' : 'status.fReady')
      : t(isTouchDeviceProfile() ? 'status.fCooldownTouch' : 'status.fCooldown', { secs: Math.ceil(atomicCd / 1000) });
    const tStatus = pulseCd <= 0
      ? t(isTouchDeviceProfile() ? 'status.tReadyTouch' : 'status.tReady')
      : t(isTouchDeviceProfile() ? 'status.tCooldownTouch' : 'status.tCooldown', { secs: Math.ceil(pulseCd / 1000) });
    abilityStatusEl.textContent = `${fStatus} · ${tStatus}`;
    abilityStatusEl.classList.toggle('cooldown', atomicCd > 0 && pulseCd > 0);
    updateTouchAbilityControls();
    return;
  }

  if (selectedSkin === 'riftweaver') {
    if (isPocketDimensionActive()) {
      const remaining = Math.ceil((pocketDimensionUntil - Date.now()) / 1000);
      abilityStatusEl.textContent = t('status.pocketDimension', {
        remaining,
        count: apples.length,
        max: POCKET_DIMENSION_MAX_APPLES,
      });
      abilityStatusEl.classList.remove('cooldown');
      updateTouchAbilityControls();
      return;
    }
    if (isRiftAbsorbActive()) {
      const remaining = Math.ceil((riftAbsorbUntil - Date.now()) / 1000);
      abilityStatusEl.textContent = t('status.riftAbsorb', {
        mult: RIFT_SCORE_MULTIPLIER,
        remaining,
      });
      abilityStatusEl.classList.remove('cooldown');
      updateTouchAbilityControls();
      return;
    }
    const pocketCd = hasZeroCooldowns()
      ? 0
      : Math.max(
          0,
          POCKET_DIMENSION_COOLDOWN - (Date.now() - (abilityCooldowns['riftweaver-pocket'] ?? 0))
        );
    const absorbCd = hasZeroCooldowns()
      ? 0
      : Math.max(
          0,
          RIFT_ABSORB_COOLDOWN - (Date.now() - (abilityCooldowns['riftweaver-absorb'] ?? 0))
        );
    const fStatus = pocketCd <= 0
      ? t(isTouchDeviceProfile() ? 'status.fReadyTouch' : 'status.fReady')
      : t(isTouchDeviceProfile() ? 'status.fCooldownTouch' : 'status.fCooldown', { secs: Math.ceil(pocketCd / 1000) });
    const tStatus = absorbCd <= 0
      ? t(isTouchDeviceProfile() ? 'status.tReadyTouch' : 'status.tReady')
      : t(isTouchDeviceProfile() ? 'status.tCooldownTouch' : 'status.tCooldown', { secs: Math.ceil(absorbCd / 1000) });
    abilityStatusEl.textContent = `${fStatus} · ${tStatus}`;
    abilityStatusEl.classList.toggle('cooldown', pocketCd > 0 && absorbCd > 0);
    updateTouchAbilityControls();
    return;
  }

  if (ability.auto) {
    const fireCd = hasZeroCooldowns() ? 0 : FIRE_AUTO_COOLDOWN;
    const remaining = Math.max(0, fireCd - (Date.now() - lastFireAuto));
    if (remaining <= 0) {
      abilityStatusEl.textContent = hasZeroCooldowns()
        ? t('status.autoNoCooldown')
        : t('status.autoReady');
      abilityStatusEl.classList.remove('cooldown');
    } else {
      abilityStatusEl.textContent = t('status.autoCooldown', { time: (remaining / 1000).toFixed(1) });
      abilityStatusEl.classList.add('cooldown');
    }
    return;
  }

  if (ability.passive) {
    if (selectedSkin === 'phoenix' && phoenixDeathCount > 0) {
      const plural = phoenixDeathCount > 1
        ? (currentLang === 'la' ? 'ES' : currentLang === 'de' ? 'E' : ['en', 'fr', 'es', 'it'].includes(currentLang) ? 'S' : '')
        : '';
      abilityStatusEl.textContent = t('status.rebirth', { count: phoenixDeathCount, plural });
    } else if (selectedSkin === 'glass') {
      abilityStatusEl.textContent = t('status.passiveGlass', { stacks: glassSpeedStacks });
    } else if (selectedSkin === 'cometstreak' && cometDust?.length > 0) {
      abilityStatusEl.textContent = t('status.cometDust', { count: cometDust.length });
    } else if (selectedSkin === 'lucky') {
      abilityStatusEl.textContent = t('status.luckyGolden');
    } else if (selectedSkin === 'hoarder') {
      const progress = applesEaten % HOARDER_BONUS_INTERVAL;
      const current = progress === 0 && applesEaten > 0 ? HOARDER_BONUS_INTERVAL : progress;
      abilityStatusEl.textContent = t('status.hoarderProgress', {
        current,
        max: HOARDER_BONUS_INTERVAL,
        next: getNextHoarderBonusCoins(),
      });
    } else if (selectedSkin === 'steady') {
      abilityStatusEl.textContent = t('status.steadyPace');
    } else if (selectedSkin === 'anchor') {
      abilityStatusEl.textContent = t('status.anchorCruise', { apples: getAnchorAppleCap() });
    } else {
      abilityStatusEl.textContent = t('status.passiveAlways');
    }
    abilityStatusEl.classList.remove('cooldown');
    return;
  }

  const remaining = Math.max(
    0,
    getAbilityCooldown(ability) - (Date.now() - (abilityCooldowns[selectedSkin] ?? 0))
  );
  const keyHint = getAbilityKey(ability);
  if (remaining <= 0) {
    if (isTouchDeviceProfile()) {
      abilityStatusEl.textContent = hasZeroCooldowns()
        ? t('status.noCooldownPressTouch')
        : t('status.readyPressTouch');
    } else {
      abilityStatusEl.textContent = hasZeroCooldowns()
        ? t('status.noCooldownPress', { key: keyHint })
        : t('status.readyPress', { key: keyHint });
    }
    abilityStatusEl.classList.remove('cooldown');
  } else {
    const secs = Math.ceil(remaining / 1000);
    abilityStatusEl.textContent = t('status.cooldown', { secs });
    abilityStatusEl.classList.add('cooldown');
  }

  if (selectedSkin === 'shielder' && isPlayerForcefieldActive()) {
    abilityStatusEl.textContent = isBotsMode()
      ? t('status.forcefieldHits', {
        current: forcefieldHitsRemaining,
        max: BOTS_FORCEFIELD_HITS,
      })
      : t('status.forcefieldActive');
    abilityStatusEl.classList.remove('cooldown');
  }

  if (selectedSkin === 'royal' && royalGuards.length > 0) {
    abilityStatusEl.textContent = t('status.guardsActive', { count: royalGuards.length });
    abilityStatusEl.classList.remove('cooldown');
  }
  if (selectedSkin === 'shadow' && Date.now() < shadowUntil) {
    abilityStatusEl.textContent = t('status.shadowPullActive');
    abilityStatusEl.classList.remove('cooldown');
  }
  if (selectedSkin === 'classic' && Date.now() < surgeUntil) {
    abilityStatusEl.textContent = t('status.surgeActive');
    abilityStatusEl.classList.remove('cooldown');
  }
  if (hasChronoDilation()) {
    abilityStatusEl.textContent = t('status.chronoActive', {
      remaining: Math.ceil(chronoRemainingMs / 1000),
    });
    abilityStatusEl.classList.remove('cooldown');
  }
  if (selectedSkin === 'ice' && Date.now() < frostBarricadeUntil) {
    abilityStatusEl.textContent = t('status.frostBarricadeActive');
    abilityStatusEl.classList.remove('cooldown');
  }
  if (selectedSkin === 'earth' && isEarthBountyActive()) {
    abilityStatusEl.textContent = t('status.earthBounty', {
      count: apples.length,
      max: EARTH_MAX_APPLES,
    });
    abilityStatusEl.classList.remove('cooldown');
  }
  updateTouchAbilityControls();
}

function resetAbilityState() {
  projectiles = [];
  abilityCooldowns = {};
  lastFireAuto = 0;
  lastProjectileMove = 0;
  surgeUntil = 0;
  chronoUntil = 0;
  chronoStart = 0;
  chronoRemainingMs = 0;
  chronoElapsedMs = 0;
  chronoLastUpdate = 0;
  chronoActivationBursts = [];
  lastChronoTimerSync = 0;
  frostBarricadeUntil = 0;
  shadowUntil = 0;
  lastShadowPull = 0;
  forcefieldUntil = 0;
  forcefieldHitsRemaining = 0;
  playerFireHitCount = 0;
  energyWaves = [];
  pendingPhantomWaves = [];
  pendingGodzillaWaves = [];
  atomicBreathUntil = 0;
  atomicBreathStart = 0;
  atomicBreathLastSweepAngle = 0;
  pocketDimensionUntil = 0;
  riftAbsorbUntil = 0;
  lastRiftPull = 0;
  riftTeleportEffectUntil = 0;
  phoenixRebirthEffectUntil = 0;
  riftAbsorbBursts = [];
  atomicBreathBursts = [];
  atomicBreathDamagedBotIds = new Set();
  itemHitBursts = [];
  shadowPullBursts = [];
  cometDust = [];
  refreshGridMetrics();
  royalGuards = [];
  lastGuardMove = 0;
  lastWaveExpand = 0;
  earthBountyUntil = 0;
  lastEarthSpawn = 0;
  earthSpawnBursts = [];
  phoenixDeathCount = 0;
  glassSpeedStacks = 0;
}

function showCodeToast(message) {
  codeToast.textContent = message;
  codeToast.classList.remove('hidden');
  clearTimeout(codeToastTimer);
  codeToastTimer = setTimeout(() => {
    codeToast.classList.add('hidden');
  }, 3000);
}

function redeemCode(input) {
  const code = input.trim().toLowerCase();

  if (code === REDEEM_CODE) {
    codeRedeemed = true;
    sessionCoinSpend = 0;
    applyProgressDisplay();
    codeError.classList.add('hidden');
    codeInput.value = '';
    closeCodesModal();
    updateHud();
    saveProgress();
    if (!shopModal.classList.contains('hidden')) {
      renderShop();
    }
    showCodeToast(t('codes.artificial'));
    return true;
  }

  if (code === PYTHON_CODE) {
    codePythonRedeemed = true;
    codeError.classList.add('hidden');
    codeInput.value = '';
    closeCodesModal();
    updateHud();
    showCodeToast(t('codes.python'));
    return true;
  }

  if (code === AGGREGATE_CODE) {
    codeAggregateRedeemed = true;
    applyProgressDisplay();
    codeError.classList.add('hidden');
    codeInput.value = '';
    closeCodesModal();
    updateHud();
    if (!shopModal.classList.contains('hidden')) {
      renderShop();
    }
    showCodeToast(t('codes.aggregate'));
    return true;
  }

  if (code === STEEL_CODE) {
    codeSteelRedeemed = true;
    codeError.classList.add('hidden');
    codeInput.value = '';
    closeCodesModal();
    updateHud();
    showCodeToast(t('codes.steel'));
    return true;
  }

  if (code === SUPPORT_CODE) {
    if (supportCodeRedeemed) {
      codeError.textContent = t('codes.alreadyRedeemed');
      codeError.classList.remove('hidden');
      return false;
    }

    supportCodeRedeemed = true;
    baseCoins += SUPPORT_COIN_REWARD;
    applyProgressDisplay();
    codeError.classList.add('hidden');
    codeInput.value = '';
    closeCodesModal();
    updateHud();
    saveProgress();
    if (!shopModal.classList.contains('hidden')) {
      renderShop();
    }
    showCodeToast(t('codes.support', { coins: SUPPORT_COIN_REWARD }));
    return true;
  }

  if (code === AMPLIFY_CODE) {
    if (amplifyCodeRedeemed) {
      codeError.textContent = t('codes.alreadyRedeemed');
      codeError.classList.remove('hidden');
      return false;
    }

    amplifyCodeRedeemed = true;
    if (state === 'playing' || state === 'paused') {
      activateAmplifyNow();
    } else {
      amplifyPending = true;
    }
    applyProgressDisplay();
    codeError.classList.add('hidden');
    codeInput.value = '';
    closeCodesModal();
    updateHud();
    saveProgress();
    if (!shopModal.classList.contains('hidden')) {
      renderShop();
    }
    if (!isAmplifyActive()) {
      showCodeToast(t('codes.amplify'));
    }
    return true;
  }

  codeError.textContent = t('codes.invalid');
  codeError.classList.remove('hidden');
  return false;
}

function formatAmplifyTime(ms) {
  const secs = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function isAmplifyActive() {
  return amplifyActive && amplifyRemainingMs > 0;
}

function applyAmplifyScore(scoreBefore) {
  if (!isAmplifyActive() || score <= scoreBefore) return;
  score = Math.max(score, scoreBefore * 2);
}

function bankScoreGain(scoreBefore) {
  const gain = score - scoreBefore;
  if (gain <= 0) return 0;

  baseCoins += gain;
  scheduleSaveProgress();
  return gain;
}

function updateAmplifyHud() {
  const wasHidden = amplifyHud.classList.contains('hidden');
  if (!isAmplifyActive()) {
    amplifyHud.classList.add('hidden');
    if (!wasHidden) scheduleLayoutResize();
    return;
  }

  amplifyHud.classList.remove('hidden');
  if (wasHidden) scheduleLayoutResize();
  amplifyTimerEl.textContent = formatAmplifyTime(amplifyRemainingMs);
}

function stopAmplify() {
  amplifyActive = false;
  amplifyRemainingMs = 0;
  amplifyLastUpdate = 0;
  updateAmplifyHud();
}

function activateAmplifyNow() {
  amplifyPending = false;
  amplifyActive = true;
  amplifyRemainingMs = AMPLIFY_DURATION_MS;
  amplifyLastUpdate = Date.now();
  updateAmplifyHud();
  showCodeToast(t('codes.amplifyActive'));
}

function activateAmplifyIfPending() {
  if (!amplifyPending) return;
  activateAmplifyNow();
}

function freezeAmplifyTimer() {
  if (amplifyActive && amplifyRemainingMs > 0) {
    if (amplifyLastUpdate > 0) {
      const elapsed = Date.now() - amplifyLastUpdate;
      amplifyRemainingMs = Math.max(0, amplifyRemainingMs - elapsed);
      if (amplifyRemainingMs <= 0) {
        stopAmplify();
      }
    }

    if (amplifyActive) {
      amplifyLastUpdate = 0;
      updateAmplifyHud();
    }
  }

  freezeChronoTimer();
  resetChronoTimerSync();
}

function resumeAmplifyTimer() {
  if (amplifyActive && amplifyRemainingMs > 0) {
    amplifyLastUpdate = Date.now();
  }
  resumeChronoTimer();
  resetChronoTimerSync();
}

function stopChrono() {
  chronoRemainingMs = 0;
  chronoElapsedMs = 0;
  chronoLastUpdate = 0;
  chronoUntil = 0;
  chronoStart = 0;
  chronoActivationBursts = [];
}

function freezeChronoTimer() {
  if (chronoRemainingMs <= 0) return;

  if (chronoLastUpdate > 0) {
    const elapsed = Date.now() - chronoLastUpdate;
    chronoRemainingMs = Math.max(0, chronoRemainingMs - elapsed);
    chronoElapsedMs += elapsed;
    if (chronoRemainingMs <= 0) {
      stopChrono();
      return;
    }
  }

  chronoLastUpdate = 0;
}

function resumeChronoTimer() {
  if (chronoRemainingMs > 0) {
    chronoLastUpdate = Date.now();
  }
}

function updateChronoTimer() {
  if (chronoRemainingMs <= 0 || state !== 'playing') return false;

  const now = Date.now();
  if (chronoLastUpdate === 0) {
    chronoLastUpdate = now;
    return false;
  }

  const elapsed = now - chronoLastUpdate;
  chronoLastUpdate = now;
  chronoRemainingMs = Math.max(0, chronoRemainingMs - elapsed);
  chronoElapsedMs += elapsed;

  if (chronoRemainingMs <= 0) {
    stopChrono();
    return true;
  }

  return false;
}

function updateAmplifyTimer() {
  if (!amplifyActive || amplifyRemainingMs <= 0 || state !== 'playing') return false;

  const now = Date.now();
  if (amplifyLastUpdate === 0) {
    amplifyLastUpdate = now;
    return false;
  }

  const elapsed = now - amplifyLastUpdate;
  amplifyLastUpdate = now;
  amplifyRemainingMs = Math.max(0, amplifyRemainingMs - elapsed);

  if (amplifyRemainingMs <= 0) {
    stopAmplify();
    showCodeToast(t('codes.amplifyEnded'));
    return true;
  }

  updateAmplifyHud();
  return false;
}

function getSkin() {
  return SKINS.find((s) => s.id === selectedSkin) || SKINS[0];
}

function getSkinById(skinId) {
  return SKINS.find((s) => s.id === skinId) || SKINS[0];
}

function isBotsCellVisible(x, y) {
  return x >= botsCamera.x
    && x < botsCamera.x + BOTS_VIEW_CELLS
    && y >= botsCamera.y
    && y < botsCamera.y + BOTS_VIEW_CELLS;
}

function normalizeUnlockedSkins(list) {
  const valid = Array.isArray(list)
    ? list.filter((id) => SKINS.some((skin) => skin.id === id))
    : [];
  if (!valid.includes('classic')) valid.unshift('classic');
  return valid.length ? valid : ['classic'];
}

function resolveSelectedSkin(savedSkin, unlocked) {
  if (savedSkin && isSkinTemporarilyDisabled(savedSkin)) return 'classic';
  if (savedSkin && unlocked.includes(savedSkin)) return savedSkin;
  return unlocked[0] ?? 'classic';
}

function applyPersistentProgress(data) {
  baseCoins = Math.max(0, Number(data.coins) || 0);
  baseUnlockedSkins = normalizeUnlockedSkins(data.unlockedSkins);
  selectedSkin = resolveSelectedSkin(data.selectedSkin, baseUnlockedSkins);
  highScore = Math.max(0, Number(data.highScore) || 0);
  supportCodeRedeemed = Boolean(data.supportCodeRedeemed);
  amplifyCodeRedeemed = Boolean(data.amplifyCodeRedeemed);
  amplifyPending = Boolean(data.amplifyPending);
  codeRedeemed = false;
  codePythonRedeemed = false;
  codeAggregateRedeemed = false;
  codeSteelRedeemed = false;
  sessionCoinSpend = 0;
  stopAmplify();
  applyProgressDisplay();
}

function scheduleSaveProgress() {
  clearTimeout(saveProgressTimer);
  saveProgressTimer = setTimeout(saveProgress, 300);
}

function saveProgressNow() {
  clearTimeout(saveProgressTimer);
  saveProgress();
}

function maybeAutoSaveProgress() {
  if (state !== 'playing') return;
  const now = Date.now();
  if (now - lastAutoSave < AUTO_SAVE_MS) return;
  lastAutoSave = now;
  saveProgress();
}

function saveProgress() {
  const data = {
    saveVersion: SAVE_VERSION,
    savedAt: Date.now(),
    coins: baseCoins,
    unlockedSkins: baseUnlockedSkins,
    selectedSkin: savedSkinBeforeBots ?? selectedSkin,
    highScore,
    supportCodeRedeemed,
    amplifyCodeRedeemed,
    amplifyPending,
    gameInProgress:
      state === 'playing' && !isBotsMode()
        ? {
            snake,
            direction,
            nextDirection,
            apples,
            score,
            applesEaten,
            hazardHits,
            drySpawns,
            lastHazardReplace,
            projectiles,
            abilityCooldowns,
            lastFireAuto,
            surgeUntil,
            chronoUntil,
            chronoStart,
            chronoRemainingMs,
            chronoElapsedMs,
            frostBarricadeUntil,
            shadowUntil,
            forcefieldUntil,
            energyWaves,
            pendingPhantomWaves,
            pendingGodzillaWaves,
            atomicBreathUntil,
            atomicBreathStart,
            atomicBreathLastSweepAngle,
            pocketDimensionUntil,
            riftAbsorbUntil,
            lastRiftPull,
            riftTeleportEffectUntil,
            royalGuards,
            earthBountyUntil,
            lastEarthSpawn,
            phoenixDeathCount,
            glassSpeedStacks,
            cometDust,
          }
        : null,
  };

  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch {
    // Storage may be unavailable (private mode, quota, or file:// restrictions).
  }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;

    const data = JSON.parse(raw);
    applyPersistentProgress(data);

    if (data.gameInProgress) {
      restoreGame(data.gameInProgress);
      return true;
    }
  } catch {
    // Keep defaults from initProgressState when save data is invalid.
  }
  return false;
}

function getMaxSnakeLength() {
  return GRID_SIZE * GRID_SIZE - MIN_FREE_CELLS;
}

function getMaxAppleCount() {
  let desired = APPLE_COUNT;
  if (isEarthBountyActive()) desired = EARTH_MAX_APPLES;
  else if (isPocketDimensionActive()) desired = POCKET_DIMENSION_MAX_APPLES;

  const snakeLen = Array.isArray(snake) ? snake.length : 0;
  const freeCells = GRID_SIZE * GRID_SIZE - snakeLen;
  const appleRoom = Math.max(0, freeCells - MIN_FREE_CELLS);
  return Math.min(desired, appleRoom);
}

function enforceAppleCapacity() {
  const max = getMaxAppleCount();
  if (apples.length > max) {
    apples.length = max;
  }
}

function isEarthBountyActive() {
  return earthBountyUntil > 0 && Date.now() < earthBountyUntil;
}

function normalizeApples() {
  const max = getMaxAppleCount();
  apples = apples.slice(0, max);
  while (apples.length < max) {
    const item = createItem();
    if (!item) break;
    apples.push(item);
  }
}

function restoreGame(saved) {
  snake = saved.snake ?? [];
  direction = saved.direction ?? { x: 1, y: 0 };
  nextDirection = saved.nextDirection ?? { x: 1, y: 0 };
  apples = saved.apples ?? [];
  score = saved.score;
  applesEaten = saved.applesEaten;
  hazardHits = saved.hazardHits ?? 0;
  drySpawns = saved.drySpawns ?? 0;
  lastHazardReplace = saved.lastHazardReplace ?? Date.now();
  projectiles = saved.projectiles ?? [];
  abilityCooldowns = saved.abilityCooldowns ?? {};
  lastFireAuto = saved.lastFireAuto ?? 0;
  surgeUntil = saved.surgeUntil ?? 0;
  if (saved.chronoRemainingMs != null) {
    chronoRemainingMs = Math.max(0, saved.chronoRemainingMs);
    chronoElapsedMs = saved.chronoElapsedMs ?? 0;
  } else {
    chronoRemainingMs = Math.max(0, (saved.chronoUntil ?? 0) - Date.now());
    chronoElapsedMs = chronoRemainingMs > 0 && saved.chronoStart
      ? Math.max(0, Date.now() - saved.chronoStart)
      : 0;
  }
  chronoUntil = chronoRemainingMs > 0 ? Date.now() + chronoRemainingMs : 0;
  chronoStart = chronoRemainingMs > 0
    ? Date.now() - chronoElapsedMs
    : (saved.chronoStart ?? 0);
  chronoLastUpdate = chronoRemainingMs > 0 ? Date.now() : 0;
  frostBarricadeUntil = saved.frostBarricadeUntil ?? saved.freezeUntil ?? 0;
  shadowUntil = saved.shadowUntil ?? saved.phaseUntil ?? 0;
  forcefieldUntil = saved.forcefieldUntil ?? 0;
  energyWaves = saved.energyWaves ?? [];
  pendingPhantomWaves = saved.pendingPhantomWaves ?? [];
  pendingGodzillaWaves = saved.pendingGodzillaWaves ?? [];
  atomicBreathUntil = saved.atomicBreathUntil ?? 0;
  atomicBreathStart = saved.atomicBreathStart ?? 0;
  atomicBreathLastSweepAngle =
    saved.atomicBreathLastSweepAngle ??
    (saved.atomicBreathLastStep >= 0
      ? (saved.atomicBreathLastStep / GODZILLA_ATOMIC_STEPS) * Math.PI * 2
      : 0);
  clearExpiredAtomicBreath();
  if (atomicBreathUntil > 0 && atomicBreathStart <= 0) {
    atomicBreathStart =
      atomicBreathUntil - GODZILLA_ATOMIC_DURATION - GODZILLA_ATOMIC_VISUAL_HOLD;
  }
  if (atomicBreathUntil > 0) {
    atomicBreathLastSweepAngle = Math.min(
      Math.PI * 2,
      getAtomicBreathProgress() * Math.PI * 2
    );
  }
  pocketDimensionUntil = saved.pocketDimensionUntil ?? 0;
  riftAbsorbUntil = saved.riftAbsorbUntil ?? 0;
  lastRiftPull = saved.lastRiftPull ?? 0;
  riftTeleportEffectUntil = saved.riftTeleportEffectUntil ?? 0;
  refreshGridMetrics();
  royalGuards = saved.royalGuards ?? [];
  earthBountyUntil = saved.earthBountyUntil ?? 0;
  lastEarthSpawn = saved.lastEarthSpawn ?? 0;
  phoenixDeathCount = saved.phoenixDeathCount ?? 0;
  glassSpeedStacks = saved.glassSpeedStacks ?? 0;
  cometDust = saved.cometDust ?? [];
  normalizeApples();
  state = 'playing';
  updateHud();
}

function initGame() {
  playMode = PLAY_MODE_SINGLE;
  botSnakes = [];
  const startX = Math.floor(BASE_GRID_SIZE / 2);
  const startY = Math.floor(BASE_GRID_SIZE / 2);

  snake = [
    { x: startX, y: startY },
    { x: startX - 1, y: startY },
    { x: startX - 2, y: startY },
  ];

  direction = { x: 1, y: 0 };
  nextDirection = { x: 1, y: 0 };
  score = 0;
  applesEaten = 0;
  hazardHits = 0;
  drySpawns = 0;
  lastHazardReplace = Date.now();
  resetAbilityState();
  phoenixDeathCount = 0;
  glassSpeedStacks = 0;
  apples = [];
  fillApples();
  userPauseActive = false;
  if (pauseModal) pauseModal.classList.add('hidden');
  cometDust = [];
  state = 'playing';
  updateHud();
}

function buildSnakeLine(x, y, length, dir) {
  const segs = [];
  for (let i = 0; i < length; i++) {
    segs.push({ x: x - dir.x * i, y: y - dir.y * i });
  }
  return segs;
}

function isBotsCellOccupied(x, y, excludeId = null) {
  if (apples.some((item) => item.x === x && item.y === y)) return true;
  if (excludeId !== 'player' && snake.some((seg) => seg.x === x && seg.y === y)) return true;
  for (const bot of botSnakes) {
    if (!bot.alive || bot.id === excludeId) continue;
    if (bot.snake.some((seg) => seg.x === x && seg.y === y)) return true;
  }
  return false;
}

function randomBotsSpawnCell(excludeId = null) {
  const empty = [];
  for (let x = 3; x < BOTS_WORLD_SIZE - 3; x++) {
    for (let y = 3; y < BOTS_WORLD_SIZE - 3; y++) {
      if (!isBotsCellOccupied(x, y, excludeId)) empty.push({ x, y });
    }
  }
  if (!empty.length) return null;
  return empty[Math.floor(Math.random() * empty.length)];
}

function fillBotsApples() {
  while (apples.length < BOTS_APPLE_COUNT) {
    const pos = randomBotsSpawnCell();
    if (!pos) break;
    apples.push(buildItem(pos.x, pos.y, 'normal'));
  }
}

function getBotsAppleCap() {
  const earthActive =
    isEarthBountyActive() ||
    botSnakes.some((bot) => bot.alive && Date.now() < bot.earthBountyUntil);
  return earthActive ? Math.min(BOTS_APPLE_COUNT, EARTH_MAX_APPLES) : BOTS_APPLE_COUNT;
}

function addBotsApple(eaterBot = null) {
  if (apples.length >= getBotsAppleCap()) return;
  const pos = randomBotsSpawnCell();
  if (pos) apples.push(buildItem(pos.x, pos.y, rollBotsAppleType(eaterBot)));
}

function findNearestApple(x, y) {
  let best = null;
  let bestDist = Infinity;
  for (const apple of apples) {
    const dist = Math.abs(apple.x - x) + Math.abs(apple.y - y);
    if (dist < bestDist) {
      bestDist = dist;
      best = apple;
    }
  }
  return best;
}

function updateBotsCamera() {
  if (!snake?.length) return;
  const head = snake[0];
  const half = Math.floor(BOTS_VIEW_CELLS / 2);
  botsCamera.x = Math.max(0, Math.min(BOTS_WORLD_SIZE - BOTS_VIEW_CELLS, head.x - half));
  botsCamera.y = Math.max(0, Math.min(BOTS_WORLD_SIZE - BOTS_VIEW_CELLS, head.y - half));
}

function getBotsRankings() {
  const entries = [
    { id: 'player', name: t('ui.you') || 'You', length: snake?.length ?? 0, alive: true, isPlayer: true },
  ];
  botSnakes.forEach((bot) => {
    entries.push({
      id: bot.id,
      name: getSkinName(bot.skinId),
      length: bot.snake.length,
      alive: bot.alive,
      isPlayer: false,
    });
  });
  entries.sort((a, b) => {
    if (a.alive !== b.alive) return a.alive ? -1 : 1;
    return b.length - a.length;
  });
  return entries;
}

function getPlayerFinalRank() {
  const entries = [
    { isPlayer: true, length: snake?.length ?? 0 },
    ...botSnakes.map((b) => ({ isPlayer: false, length: b.snake?.length ?? 0 })),
  ];
  entries.sort((a, b) => b.length - a.length);
  return entries.findIndex((e) => e.isPlayer) + 1;
}

function getPlayerBotsRankByLength() {
  const entries = [
    { isPlayer: true, length: snake?.length ?? 0 },
    ...botSnakes.filter((b) => b.alive).map((b) => ({ isPlayer: false, length: b.snake.length })),
  ];
  entries.sort((a, b) => b.length - a.length);
  const idx = entries.findIndex((e) => e.isPlayer);
  return idx === -1 ? entries.length : idx + 1;
}

function getPlayerBotsRank() {
  if (isAppleHuntMode()) return getPlayerBotsRankByLength();
  const alive = getBotsRankings().filter((e) => e.alive);
  const idx = alive.findIndex((e) => e.isPlayer);
  return idx === -1 ? alive.length : idx + 1;
}

function formatBotsTimer(ms) {
  const secs = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function respawnPlayerInAppleHunt() {
  const spawn = randomBotsSpawnCell('player');
  const dir = Math.random() < 0.5 ? { x: 1, y: 0 } : { x: 0, y: 1 };
  snake = buildSnakeLine(
    spawn?.x ?? 24,
    spawn?.y ?? 24,
    BOTS_MIN_SNAKE_LENGTH + 1,
    dir
  );
  direction = { ...dir };
  nextDirection = { ...dir };
  score = snake.length;
  applyProgressDisplay();
}

function respawnBotInAppleHunt(bot) {
  const spawn = randomBotsSpawnCell(bot.id);
  const dir = Math.random() < 0.5 ? { x: 1, y: 0 } : { x: 0, y: 1 };
  bot.snake = buildSnakeLine(
    spawn?.x ?? 24,
    spawn?.y ?? 24,
    BOTS_MIN_SNAKE_LENGTH + 1,
    dir
  );
  bot.direction = { ...dir };
  bot.nextDirection = { ...dir };
  bot.alive = true;
  initBotAbilityState(bot);
  bot.nextAbilityCheckAt = Date.now() + Math.floor(Math.random() * 3500);
  bot.lastFireAuto = Date.now() + Math.floor(Math.random() * 2000);
}

function updateBotsHud() {
  if (!botsRankEl || !botsLengthEl) return;
  const totalParticipants = 1 + botSnakes.filter((b) => b.alive).length;
  botsRankEl.textContent = t('ui.botsRank', {
    rank: getPlayerBotsRank(),
    total: isAppleHuntMode() ? 1 + BOTS_BOT_COUNT : totalParticipants,
  });
  botsLengthEl.textContent = t('ui.botsLength', { length: snake?.length ?? 0 });
  scoreEl.textContent = String(snake?.length ?? 0);
  if (botsTimerEl) {
    if (isAppleHuntMode() && botsMatchEndsAt > 0 && state === 'playing') {
      const remaining = Math.max(0, botsMatchEndsAt - Date.now());
      botsTimerEl.textContent = t('ui.botsTimer', { time: formatBotsTimer(remaining) });
      botsTimerEl.classList.remove('hidden');
    } else {
      botsTimerEl.classList.add('hidden');
    }
  }
}

function scoreBotDirection(head, dir, bot) {
  const nx = head.x + dir.x;
  const ny = head.y + dir.y;
  if (isBlockedByFrostWall(nx, ny)) return -9999;
  if (isBlockedByEnemyForcefield(nx, ny, bot.id)) return -9999;
  if (nx < 0 || nx >= BOTS_WORLD_SIZE || ny < 0 || ny >= BOTS_WORLD_SIZE) return -9999;
  if (isBotsBodyCell(nx, ny, bot.id, true)) return -9999;

  const profile = bot.profile;
  let s = Math.random() * (profile?.randomness ?? 2);

  const apple = findNearestApple(nx, ny);
  if (apple) {
    const dist = Math.abs(apple.x - nx) + Math.abs(apple.y - ny);
    s -= dist * (profile?.appleFocus ?? 1);
  }

  const wallMargin = profile?.wallMargin ?? 0;
  if (wallMargin > 0) {
    const edgeDist = Math.min(nx, ny, BOTS_WORLD_SIZE - 1 - nx, BOTS_WORLD_SIZE - 1 - ny);
    if (edgeDist < wallMargin) s += (wallMargin - edgeDist) * 2.5;
  }

  if (profile) {
    let nearestEnemyDist = Infinity;
    let nearestEnemyLength = Infinity;

    if (snake?.[0]) {
      const d = Math.abs(snake[0].x - nx) + Math.abs(snake[0].y - ny);
      if (d < nearestEnemyDist) {
        nearestEnemyDist = d;
        nearestEnemyLength = snake.length;
      }
    }

    for (const other of botSnakes) {
      if (!other.alive || other.id === bot.id || !other.snake?.[0]) continue;
      const d = Math.abs(other.snake[0].x - nx) + Math.abs(other.snake[0].y - ny);
      if (d < nearestEnemyDist) {
        nearestEnemyDist = d;
        nearestEnemyLength = other.snake.length;
      }
    }

    if (nearestEnemyDist < 9) {
      const closeFactor = 9 - nearestEnemyDist;
      if (
        isCobraBattleMode()
        && profile.enemyAggression > 0.35
        && nearestEnemyLength <= bot.snake.length + 3
      ) {
        s -= closeFactor * profile.enemyAggression * 0.55;
      } else {
        s += closeFactor * profile.enemyAvoidance * 0.75;
      }
    }
  }

  return s;
}

function isBotsBodyCell(x, y, entityId, ignoreTail) {
  const checkSegments = (segments, skipHead) => {
    const limit = segments.length - (ignoreTail ? 1 : 0);
    const start = skipHead && ignoreTail ? 1 : 0;
    for (let i = start; i < limit; i++) {
      if (segments[i].x === x && segments[i].y === y) return true;
    }
    return false;
  };

  if (entityId !== 'player' && checkSegments(snake, false)) return true;

  for (const bot of botSnakes) {
    if (!bot.alive || bot.id === entityId) continue;
    if (checkSegments(bot.snake, false)) return true;
  }

  if (entityId === 'player') {
    if (checkSegments(snake, true)) return true;
  } else {
    const self = botSnakes.find((b) => b.id === entityId);
    if (self?.alive && checkSegments(self.snake, true)) return true;
  }
  return false;
}

function isPlayerBodyCell(x, y) {
  if (!snake?.length) return false;
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === x && snake[i].y === y) return true;
  }
  return false;
}

function isPlayerHeadCell(x, y) {
  return snake?.[0]?.x === x && snake?.[0]?.y === y;
}

function isBotSelfBiteCell(bot, x, y, ignoreTail) {
  const segments = bot.snake;
  const limit = segments.length - (ignoreTail ? 1 : 0);
  const start = ignoreTail ? 1 : 0;
  for (let i = start; i < limit; i++) {
    if (segments[i].x === x && segments[i].y === y) return true;
  }
  return false;
}

function spawnBotBodyLoot(bot) {
  const used = new Set();
  for (const seg of bot.snake) {
    const key = `${seg.x},${seg.y}`;
    if (used.has(key)) continue;
    used.add(key);
    if (apples.some((item) => item.x === seg.x && item.y === seg.y)) continue;
    if (snake.some((playerSeg) => playerSeg.x === seg.x && playerSeg.y === seg.y)) continue;
    apples.push(buildItem(seg.x, seg.y, 'normal'));
  }
}

function eliminateBotWithLoot(bot) {
  if (!bot?.alive) return;
  spawnBotBodyLoot(bot);
  bot.snake = [];
  bot.alive = false;
}

function isPlayerForcefieldActive() {
  if (isBotsMode()) return (forcefieldHitsRemaining ?? 0) > 0;
  return Date.now() < forcefieldUntil;
}

function isBotForcefieldActive(bot) {
  if (!bot?.alive) return false;
  if (isBotsMode()) return (bot.forcefieldHitsRemaining ?? 0) > 0;
  return Date.now() < bot.forcefieldUntil;
}

function activatePlayerForcefield() {
  forcefieldUntil = Date.now() + FORCEFIELD_DURATION;
  if (isBotsMode()) forcefieldHitsRemaining = BOTS_FORCEFIELD_HITS;
}

function activateBotForcefield(bot) {
  bot.forcefieldUntil = Date.now() + FORCEFIELD_DURATION;
  if (isBotsMode()) bot.forcefieldHitsRemaining = BOTS_FORCEFIELD_HITS;
}

function isCellInForcefieldBounds(x, y, bounds) {
  if (!bounds) return false;
  return x >= bounds.minX && x <= bounds.maxX && y >= bounds.minY && y <= bounds.maxY;
}

function isBlockedByEnemyForcefield(x, y, entityId) {
  if (!isBotsMode()) return false;

  if (entityId !== 'player' && isPlayerForcefieldActive()) {
    if (isCellInForcefieldBounds(x, y, getForcefieldBounds())) return true;
  }

  for (const bot of botSnakes) {
    if (!bot.alive || bot.id === entityId || !isBotForcefieldActive(bot)) continue;
    if (isCellInForcefieldBounds(x, y, getBotForcefieldBounds(bot))) return true;
  }

  return false;
}

function absorbBotsForcefieldHit(target) {
  if (!isBotsMode()) return false;

  if (target === 'player') {
    if (!isPlayerForcefieldActive()) return false;
    forcefieldHitsRemaining = Math.max(0, (forcefieldHitsRemaining ?? 0) - 1);
    if (forcefieldHitsRemaining <= 0) forcefieldUntil = 0;
    updateHud();
    return true;
  }

  const bot = typeof target === 'object' ? target : botSnakes.find((b) => b.id === target);
  if (!bot || !isBotForcefieldActive(bot)) return false;
  bot.forcefieldHitsRemaining = Math.max(0, (bot.forcefieldHitsRemaining ?? 0) - 1);
  if (bot.forcefieldHitsRemaining <= 0) bot.forcefieldUntil = 0;
  return true;
}

function shrinkPlayerSnakeInBots(blocks) {
  if (!isBotsMode() || state !== 'playing' || blocks <= 0) return false;

  for (let i = 0; i < blocks; i++) {
    if (snake.length <= BOTS_MIN_SNAKE_LENGTH) {
      if (isAppleHuntMode()) {
        respawnPlayerInAppleHunt();
        return true;
      }
      finishBotsGame(false, getPlayerFinalRank());
      return true;
    }
    snake.pop();
  }

  score = snake.length;
  applyProgressDisplay();
  updateHud();
  return false;
}

function shrinkBotSnakeInBots(bot, blocks) {
  if (!isBotsMode() || blocks <= 0 || !bot?.alive) return false;

  for (let i = 0; i < blocks; i++) {
    if (bot.snake.length <= BOTS_MIN_SNAKE_LENGTH) {
      if (isAppleHuntMode()) {
        respawnBotInAppleHunt(bot);
        return true;
      }
      bot.alive = false;
      bot.snake = [];
      return true;
    }
    bot.snake.pop();
  }
  return false;
}

function snakeOccupiesCell(segments, x, y) {
  return segments.some((seg) => seg.x === x && seg.y === y);
}

function getBotsWaveDamageBlocks(wave) {
  if (wave.damageBlocks != null) return wave.damageBlocks;
  if (wave.waveKind === 'godzilla-pulse') {
    return getBotsGodzillaPulseWaveDamage(wave.pulseIndex ?? 0);
  }
  if (wave.waveKind === 'phantom' || wave.color !== 'blue') {
    return BOTS_PHANTOM_WAVE_DAMAGE;
  }
  return getBotsGodzillaPulseWaveDamage(0);
}

function applyBotsWaveBotDamage(bot, wave) {
  if (absorbBotsForcefieldHit(bot)) return true;
  shrinkBotSnakeInBots(bot, getBotsWaveDamageBlocks(wave));
  return true;
}

function applyBotsWaveHitAt(wave, cell, damagedTargets, sourceId) {
  if (sourceId === 'player') {
    for (const bot of botSnakes) {
      if (!bot.alive || !bot.snake?.length) continue;
      if (!snakeOccupiesCell(bot.snake, cell.x, cell.y)) continue;
      if (damagedTargets.has(bot.id)) continue;
      damagedTargets.add(bot.id);
      return applyBotsWaveBotDamage(bot, wave);
    }
    return false;
  }

  if (sourceId !== 'player' && snake?.length && snakeOccupiesCell(snake, cell.x, cell.y)) {
    if (!damagedTargets.has('player')) {
      damagedTargets.add('player');
      if (absorbBotsForcefieldHit('player')) return true;
      shrinkPlayerSnakeInBots(getBotsWaveDamageBlocks(wave));
      return true;
    }
  }

  for (const bot of botSnakes) {
    if (!bot.alive || bot.id === sourceId || !bot.snake?.length) continue;
    if (!snakeOccupiesCell(bot.snake, cell.x, cell.y)) continue;
    if (damagedTargets.has(bot.id)) continue;

    damagedTargets.add(bot.id);
    return applyBotsWaveBotDamage(bot, wave);
  }

  return false;
}

function registerBotsFireHitOnPlayer() {
  playerFireHitCount = (playerFireHitCount ?? 0) + 1;
  if (playerFireHitCount >= BOTS_FIRE_HITS_PER_BLOCK) {
    playerFireHitCount = 0;
    shrinkPlayerSnakeInBots(1);
  }
}

function initBotAbilityState(bot) {
  bot.abilityCooldowns = {};
  bot.surgeUntil = 0;
  bot.chronoRemainingMs = 0;
  bot.chronoElapsedMs = 0;
  bot.chronoLastUpdate = 0;
  bot.frostBarricadeUntil = 0;
  bot.forcefieldUntil = 0;
  bot.shadowUntil = 0;
  bot.lastShadowPull = 0;
  bot.earthBountyUntil = 0;
  bot.lastEarthSpawn = 0;
  bot.riftAbsorbUntil = 0;
  bot.lastRiftPull = 0;
  bot.lastFireAuto = 0;
  bot.detonatorUsed = false;
  bot.forcefieldHitsRemaining = 0;
  bot.fireHitCount = 0;
  bot.nextAbilityCheckAt = 0;
}

function assignBotProfile(bot) {
  const combatMode = isCobraBattleMode();
  bot.profile = {
    appleFocus: 0.35 + Math.random() * 1.45,
    randomness: 0.4 + Math.random() * 3.6,
    enemyAggression: combatMode ? 0.15 + Math.random() * 0.85 : Math.random() * 0.4,
    enemyAvoidance: 0.1 + Math.random() * 0.9,
    wallMargin: Math.floor(Math.random() * 5),
    abilityDelayMs: Math.floor(2000 + Math.random() * 32000),
    abilityUseChance: 0.22 + Math.random() * 0.68,
    abilityCooldownMult: 0.7 + Math.random() * 1.0,
    fireIntervalMult: 0.5 + Math.random() * 1.25,
    thresholds: {
      goldAppleMin: 3 + Math.floor(Math.random() * 8),
      shadowEarthAppleMin: 4 + Math.floor(Math.random() * 14),
      royalMinLength: 3 + Math.floor(Math.random() * 7),
      pulseMinLength: 3 + Math.floor(Math.random() * 9),
      enemyNearRadius: 3 + Math.floor(Math.random() * 6),
      chronoNeedsEnemy: Math.random() < 0.5,
      chronoNeedsExtraDelay: Math.random() < 0.65,
      chronoExtraDelayMs: 4000 + Math.floor(Math.random() * 16000),
      classicPrefersCombat: Math.random() < 0.45,
      opportunistAppleChance: 0.2 + Math.random() * 0.55,
    },
  };
  bot.nextAbilityCheckAt = botsGameStartedAt + Math.floor(Math.random() * 4000);
  bot.lastFireAuto = botsGameStartedAt + Math.floor(Math.random() * 2500);
}

function isBotIronclad(bot) {
  return bot?.skinId === 'ironclad';
}

function botAbilityReady(bot, key, cooldown) {
  const mult = bot.profile?.abilityCooldownMult ?? 1;
  const lastUsed = bot.abilityCooldowns[key] ?? 0;
  return Date.now() - lastUsed >= cooldown * mult;
}

function markBotAbilityUsed(bot, key) {
  bot.abilityCooldowns[key] = Date.now();
}

function isEnemyNearBot(bot, radius = 5) {
  const head = bot.snake[0];
  if (!head) return false;

  if (snake?.[0]) {
    const d = Math.abs(snake[0].x - head.x) + Math.abs(snake[0].y - head.y);
    if (d <= radius) return true;
  }

  for (const other of botSnakes) {
    if (!other.alive || other.id === bot.id || !other.snake?.[0]) continue;
    const d = Math.abs(other.snake[0].x - head.x) + Math.abs(other.snake[0].y - head.y);
    if (d <= radius) return true;
  }
  return false;
}

function growBotSnake(bot) {
  growBotByAppleEat(bot, 0);
}

function getAppleGrowSegments(skinId) {
  return skinId === 'glass' ? GLASS_SEGMENTS_PER_APPLE : 1;
}

function growBotByAppleEat(bot, alreadyAdded = 0) {
  if (!bot?.snake?.length) return;
  const extra = Math.max(0, getAppleGrowSegments(bot.skinId) - alreadyAdded);
  for (let i = 0; i < extra; i++) {
    const tail = bot.snake[bot.snake.length - 1];
    bot.snake.push({ x: tail.x, y: tail.y });
  }
}

function growSnakeByAppleEat(skinId = selectedSkin, alreadyAdded = 0) {
  if (!snake?.length) return;
  const extra = Math.max(0, getAppleGrowSegments(skinId) - alreadyAdded);
  for (let i = 0; i < extra; i++) {
    const tail = snake[snake.length - 1];
    snake.push({ x: tail.x, y: tail.y });
  }
}

function feedSnakeFromAbilityDestroyedApple(sourceId) {
  if (!isAppleHuntMode()) return false;

  if (sourceId === 'player') {
    growSnakeFromAbilityCollect();
    score = snake.length;
    baseCoins += 1;
    applesEaten++;
    applyProgressDisplay();
    return true;
  }

  const bot = botSnakes.find((b) => b.id === sourceId);
  if (bot?.alive) {
    growBotSnake(bot);
    return true;
  }
  return false;
}

function getBotsAppleReplacerForSource(sourceId) {
  if (sourceId === 'player') {
    return selectedSkin === 'lucky' ? { skinId: 'lucky' } : null;
  }
  if (sourceId) {
    return botSnakes.find((b) => b.id === sourceId) ?? null;
  }
  return null;
}

function destroyBotsAppleFromAbility(x, y, sourceId) {
  const idx = apples.findIndex((item) => item.x === x && item.y === y);
  if (idx === -1) return false;

  const item = apples[idx];
  const isEdible = item.type === 'normal' || item.type === 'golden';
  apples.splice(idx, 1);
  addBotsApple(getBotsAppleReplacerForSource(sourceId));

  if (!isEdible) return true;

  if (isAppleHuntMode()) {
    feedSnakeFromAbilityDestroyedApple(sourceId);
  } else {
    const ownerBot = sourceId && sourceId !== 'player'
      ? botSnakes.find((b) => b.id === sourceId)
      : null;
    if (ownerBot?.alive) growBotSnake(ownerBot);
  }

  return true;
}

function collectBotsAppleAt(x, y, eaterBot, grow = false) {
  const itemIndex = apples.findIndex((item) => item.x === x && item.y === y);
  if (itemIndex === -1) return false;
  apples.splice(itemIndex, 1);
  addBotsApple(eaterBot);
  if (grow && eaterBot?.alive) growBotSnake(eaterBot);
  return true;
}

function randomCellNearBotHead(bot) {
  const head = bot.snake[0];
  const candidates = [];

  for (let dx = -EARTH_SPAWN_RADIUS; dx <= EARTH_SPAWN_RADIUS; dx++) {
    for (let dy = -EARTH_SPAWN_RADIUS; dy <= EARTH_SPAWN_RADIUS; dy++) {
      if (dx === 0 && dy === 0) continue;
      const x = head.x + dx;
      const y = head.y + dy;
      if (x < 0 || x >= BOTS_WORLD_SIZE || y < 0 || y >= BOTS_WORLD_SIZE) continue;
      if (isBotsOccupiedCell(x, y)) continue;
      candidates.push({ x, y });
    }
  }

  if (candidates.length === 0) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function isBotsOccupiedCell(x, y) {
  if (snake.some((seg) => seg.x === x && seg.y === y)) return true;
  if (apples.some((item) => item.x === x && item.y === y)) return true;
  for (const bot of botSnakes) {
    if (!bot.alive) continue;
    if (bot.snake.some((seg) => seg.x === x && seg.y === y)) return true;
  }
  return false;
}

function spawnEarthAppleNearBot(bot) {
  if (Date.now() >= bot.earthBountyUntil || apples.length >= getBotsAppleCap()) return false;
  const pos = randomCellNearBotHead(bot);
  if (!pos) return false;
  apples.push(buildEarthItem(pos.x, pos.y, rollBotsAppleType(bot)));
  queueEarthSpawnBurst(pos.x, pos.y);
  return true;
}

function rollBotsAppleType(eaterBot) {
  const goldenChance = eaterBot?.skinId === 'lucky' ? LUCKY_GOLDEN_CHANCE : BOTS_GOLDEN_APPLE_CHANCE;
  if (Math.random() < goldenChance) return 'golden';
  return 'normal';
}

function getBotsGodzillaPulseWaveDamage(pulseIndex = 0) {
  const perWave = [2, 1, 1];
  return perWave[pulseIndex] ?? perWave[perWave.length - 1];
}

function getBotsElapsedMs() {
  if (!botsGameStartedAt) return 0;
  return Date.now() - botsGameStartedAt;
}

function isBotWaveSource(sourceId) {
  return Boolean(sourceId && sourceId !== 'player');
}

function isBotPulseAbilityUnlocked() {
  return isBotsMode() && botsGameStartedAt > 0 && getBotsElapsedMs() >= BOTS_PULSE_UNLOCK_MS;
}

function canBotSpawnPulseWave(sourceId) {
  if (!isBotWaveSource(sourceId)) return true;
  return isBotPulseAbilityUnlocked();
}

function isBotPulseSkin(skinId) {
  return skinId === 'phantom' || skinId === 'godzilla';
}

function shootFireballForBot(bot) {
  const head = bot.snake[0];
  const dx = bot.direction.x;
  const dy = bot.direction.y;
  const baseX = head.x + dx;
  const baseY = head.y + dy;

  if (!isValidFireballPlacementForBot(baseX, baseY, dx, dy, bot.id)) return;

  projectiles.push({
    x: baseX,
    y: baseY,
    dx,
    dy,
    type: 'fire',
    ownerId: bot.id,
  });
}

function isValidFireballPlacementForBot(x, y, dx, dy, ownerId) {
  const perpX = dy;
  const perpY = dx;

  for (let w = -1; w <= 1; w++) {
    const cx = x + perpX * w;
    const cy = y + perpY * w;
    if (cx < 0 || cx >= GRID_SIZE || cy < 0 || cy >= GRID_SIZE) return false;
    if (ownerId !== 'player' && snake.some((seg) => seg.x === cx && seg.y === cy)) return false;
    for (const bot of botSnakes) {
      if (!bot.alive || bot.id === ownerId) continue;
      if (bot.snake.some((seg) => seg.x === cx && seg.y === cy)) return false;
    }
  }
  return true;
}

function spawnRoyalGuardsForBot(bot) {
  const head = bot.snake[0];
  const candidates = [];

  for (let dx = -4; dx <= 4; dx++) {
    for (let dy = -4; dy <= 4; dy++) {
      if (dx === 0 && dy === 0) continue;
      const x = head.x + dx;
      const y = head.y + dy;
      if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) continue;
      if (isBotsOccupiedCell(x, y)) continue;
      candidates.push({ x, y });
    }
  }

  candidates.sort(() => Math.random() - 0.5);
  candidates.slice(0, 2).forEach((pos) => {
    const tailX = pos.x - 1 >= 0 && !isBotsOccupiedCell(pos.x - 1, pos.y) ? pos.x - 1 : pos.x + 1;
    royalGuards.push({
      ownerId: bot.id,
      segments: [{ x: pos.x, y: pos.y }, { x: tailX, y: pos.y }],
      expiresAt: Date.now() + ROYAL_GUARD_DURATION,
      lastMove: 0,
    });
  });
}

function activateBotAbility(bot) {
  const now = Date.now();
  const head = bot.snake[0];
  if (!head) return false;

  switch (bot.skinId) {
    case 'classic':
      bot.surgeUntil = now + 4000;
      markBotAbilityUsed(bot, bot.skinId);
      return true;
    case 'chrono':
      bot.chronoRemainingMs = getChronoDilationDuration();
      bot.chronoElapsedMs = 0;
      bot.chronoLastUpdate = now;
      queueChronoActivationBurstsAt(head);
      markBotAbilityUsed(bot, bot.skinId);
      return true;
    case 'gold':
      apples = apples.map((item) => ({ x: item.x, y: item.y, type: 'golden' }));
      markBotAbilityUsed(bot, bot.skinId);
      return true;
    case 'ice':
      bot.frostBarricadeUntil = now + FROST_BARRICADE_DURATION;
      relocateItemsOffFrostWalls();
      pushSnakeOffFrostWalls();
      markBotAbilityUsed(bot, bot.skinId);
      return true;
    case 'royal':
      spawnRoyalGuardsForBot(bot);
      markBotAbilityUsed(bot, bot.skinId);
      return true;
    case 'shadow':
      bot.shadowUntil = now + SHADOW_ABILITY_DURATION;
      bot.lastShadowPull = 0;
      queueShadowPullBurst(head.x, head.y, 'pull', 'normal');
      markBotAbilityUsed(bot, bot.skinId);
      return true;
    case 'shielder':
      activateBotForcefield(bot);
      markBotAbilityUsed(bot, bot.skinId);
      return true;
    case 'phantom':
      if (!canBotSpawnPulseWave(bot.id)) return false;
      energyWaves.push({
        cx: head.x,
        cy: head.y,
        radius: 0,
        maxRadius: Math.max(head.x, head.y, BOTS_WORLD_SIZE - 1 - head.x, BOTS_WORLD_SIZE - 1 - head.y) + 1,
        sourceId: bot.id,
        waveKind: 'phantom',
        damageBlocks: BOTS_PHANTOM_WAVE_DAMAGE,
      });
      markBotAbilityUsed(bot, bot.skinId);
      return true;
    case 'earth':
      bot.earthBountyUntil = now + EARTH_BOUNTY_DURATION;
      bot.lastEarthSpawn = now;
      spawnEarthAppleNearBot(bot);
      markBotAbilityUsed(bot, bot.skinId);
      return true;
    case 'godzilla':
      if (!canBotSpawnPulseWave(bot.id)) {
        return false;
      }
      if (botAbilityReady(bot, 'godzilla-pulse', GODZILLA_PULSE_COOLDOWN)) {
        spawnGodzillaWave(head.x, head.y, bot.id, 0);
        for (let i = 1; i < GODZILLA_PULSE_WAVE_COUNT; i++) {
          pendingGodzillaWaves.push({
            cx: head.x,
            cy: head.y,
            spawnAt: now + GODZILLA_PULSE_DELAY * i,
            sourceId: bot.id,
            pulseIndex: i,
          });
        }
        markBotAbilityUsed(bot, 'godzilla-pulse');
        return true;
      }
      if (botAbilityReady(bot, 'godzilla-atomic', GODZILLA_ATOMIC_COOLDOWN)) {
        energyWaves.push({
          cx: head.x,
          cy: head.y,
          radius: 0,
          maxRadius: Math.max(head.x, head.y, BOTS_WORLD_SIZE - 1 - head.x, BOTS_WORLD_SIZE - 1 - head.y) + 2,
          color: 'blue',
          sourceId: bot.id,
          damageBlocks: BOTS_GODZILLA_ATOMIC_DAMAGE,
        });
        markBotAbilityUsed(bot, 'godzilla-atomic');
        return true;
      }
      return false;
    case 'riftweaver':
      if (botAbilityReady(bot, 'riftweaver-absorb', RIFT_ABSORB_COOLDOWN)) {
        bot.riftAbsorbUntil = now + RIFT_ABSORB_DURATION;
        bot.lastRiftPull = 0;
        markBotAbilityUsed(bot, 'riftweaver-absorb');
        return true;
      }
      if (botAbilityReady(bot, 'riftweaver-pocket', POCKET_DIMENSION_COOLDOWN)) {
        energyWaves.push({
          cx: head.x,
          cy: head.y,
          radius: 0,
          maxRadius: 12,
          color: 'rift',
          sourceId: bot.id,
        });
        markBotAbilityUsed(bot, 'riftweaver-pocket');
        return true;
      }
      return false;
    default:
      return false;
  }
}

function shouldBotUseAbility(bot) {
  const head = bot.snake[0];
  if (!head) return false;

  const profile = bot.profile;
  const thresholds = profile?.thresholds;
  const elapsed = getBotsElapsedMs();

  if (profile && elapsed < profile.abilityDelayMs) return false;

  const enemyNear = isEnemyNearBot(bot, thresholds?.enemyNearRadius ?? 5);
  const appleNear = Boolean(findNearestApple(head.x, head.y));

  switch (bot.skinId) {
    case 'classic':
      if (thresholds?.classicPrefersCombat) return enemyNear;
      return enemyNear || (appleNear && Math.random() < (thresholds?.opportunistAppleChance ?? 0.35));
    case 'chrono':
      if (thresholds?.chronoNeedsEnemy) return enemyNear;
      if (
        thresholds?.chronoNeedsExtraDelay
        && elapsed < profile.abilityDelayMs + (thresholds.chronoExtraDelayMs ?? 8000)
      ) {
        return enemyNear;
      }
      return enemyNear || (appleNear && Math.random() < (thresholds?.opportunistAppleChance ?? 0.4));
    case 'gold':
      return apples.length >= (thresholds?.goldAppleMin ?? 4);
    case 'ice':
    case 'shielder':
      return enemyNear;
    case 'shadow':
    case 'earth':
      return apples.length >= (thresholds?.shadowEarthAppleMin ?? 8);
    case 'royal':
      return bot.snake.length >= (thresholds?.royalMinLength ?? 5);
    case 'phantom':
    case 'godzilla':
    case 'riftweaver':
      return enemyNear || bot.snake.length >= (thresholds?.pulseMinLength ?? 6);
    default:
      return false;
  }
}

function rollBotAbilityUse(bot) {
  return Math.random() < (bot.profile?.abilityUseChance ?? 0.55);
}

function tryActivateBotAbility(bot) {
  if (!bot.alive) return;

  const now = Date.now();
  if (now < (bot.nextAbilityCheckAt ?? 0)) return;
  bot.nextAbilityCheckAt = now + 450 + Math.floor(Math.random() * 1400);

  const ability = SKIN_ABILITIES[bot.skinId];
  if (!ability || ability.passive) return;
  if (ability.auto) return;
  if (isBotPulseSkin(bot.skinId) && !isBotPulseAbilityUnlocked()) return;

  if (ability.dual) {
    if (!shouldBotUseAbility(bot)) return;
    if (!rollBotAbilityUse(bot)) return;
    activateBotAbility(bot);
    return;
  }

  if (!ability.manual || !ability.cooldown) return;
  if (!botAbilityReady(bot, bot.skinId, ability.cooldown)) return;
  if (!shouldBotUseAbility(bot)) return;
  if (!rollBotAbilityUse(bot)) return;
  activateBotAbility(bot);
}

function updateBotChronoTimer(bot) {
  if (bot.chronoRemainingMs <= 0) return;
  const now = Date.now();
  if (bot.chronoLastUpdate === 0) {
    bot.chronoLastUpdate = now;
    return;
  }
  const elapsed = now - bot.chronoLastUpdate;
  bot.chronoLastUpdate = now;
  bot.chronoRemainingMs = Math.max(0, bot.chronoRemainingMs - elapsed);
  bot.chronoElapsedMs += elapsed;
}

function updateBotFireAuto(bot) {
  if (bot.skinId !== 'fire' || !bot.alive) return;
  const now = Date.now();
  const fireMult = bot.profile?.fireIntervalMult ?? 1;
  const fireCd = Math.floor(FIRE_AUTO_COOLDOWN * getChronoTimeScale() * fireMult);
  if (now - bot.lastFireAuto >= fireCd) {
    if (Math.random() < (bot.profile?.abilityUseChance ?? 0.75)) {
      shootFireballForBot(bot);
    }
    bot.lastFireAuto = now;
  }
}

function updateBotShadowPull(bot) {
  if (Date.now() >= bot.shadowUntil || !bot.alive) return;
  const now = Date.now();
  const pullMs = Math.floor(SHADOW_PULL_MS * getChronoTimeScale());
  if (now - bot.lastShadowPull < pullMs) return;
  bot.lastShadowPull = now;

  const head = bot.snake[0];
  apples.forEach((item) => {
    if (item.type !== 'normal' && item.type !== 'golden') return;
    const next = stepToward(item.x, item.y, head.x, head.y);
    if (next.x === item.x && next.y === item.y) return;
    if (isBotsOccupiedCell(next.x, next.y) && !apples.some((a) => a !== item && a.x === next.x && a.y === next.y)) {
      return;
    }
    item.x = next.x;
    item.y = next.y;
    if (next.x === head.x && next.y === head.y) {
      collectBotsAppleAt(next.x, next.y, bot, true);
    }
  });
}

function updateBotEarthBounty(bot) {
  if (Date.now() >= bot.earthBountyUntil || !bot.alive) return;
  const now = Date.now();
  const spawnMs = Math.floor(EARTH_SPAWN_MS * getChronoTimeScale());
  if (apples.length < getBotsAppleCap() && now - bot.lastEarthSpawn >= spawnMs) {
    if (spawnEarthAppleNearBot(bot)) bot.lastEarthSpawn = now;
  }
}

function updateBotRiftAbsorb(bot) {
  if (!bot.riftAbsorbUntil || Date.now() >= bot.riftAbsorbUntil || !bot.alive) return;
  const now = Date.now();
  const pullMs = Math.floor(RIFT_ABSORB_PULL_MS * getChronoTimeScale());
  if (now - (bot.lastRiftPull ?? 0) < pullMs) return;
  bot.lastRiftPull = now;

  const head = bot.snake[0];
  apples.forEach((item) => {
    const next = stepToward(item.x, item.y, head.x, head.y);
    if (next.x === item.x && next.y === item.y) return;
    if (isBotsOccupiedCell(next.x, next.y) && !apples.some((a) => a !== item && a.x === next.x && a.y === next.y)) {
      return;
    }
    item.x = next.x;
    item.y = next.y;
    if (next.x === head.x && next.y === head.y) {
      collectBotsAppleAt(next.x, next.y, bot, true);
    }
  });
}

function getBotForcefieldCells(bot) {
  const cells = new Set();
  if (!isBotForcefieldActive(bot)) return cells;

  let minX = bot.snake[0].x;
  let maxX = bot.snake[0].x;
  let minY = bot.snake[0].y;
  let maxY = bot.snake[0].y;
  bot.snake.forEach((seg) => {
    minX = Math.min(minX, seg.x);
    maxX = Math.max(maxX, seg.x);
    minY = Math.min(minY, seg.y);
    maxY = Math.max(maxY, seg.y);
  });

  minX = Math.max(0, minX - FORCEFIELD_PADDING);
  maxX = Math.min(GRID_SIZE - 1, maxX + FORCEFIELD_PADDING);
  minY = Math.max(0, minY - FORCEFIELD_PADDING);
  maxY = Math.min(GRID_SIZE - 1, maxY + FORCEFIELD_PADDING);

  for (let x = minX; x <= maxX; x++) {
    for (let y = minY; y <= maxY; y++) {
      cells.add(`${x},${y}`);
    }
  }
  return cells;
}

function drawBotForcefield(bot) {
  if (!isBotForcefieldActive(bot)) return;
  const bounds = getBotForcefieldBounds(bot);
  if (!bounds) return;

  const { minX, maxX, minY, maxY } = bounds;
  const px = minX * CELL;
  const py = minY * CELL;
  const w = (maxX - minX + 1) * CELL;
  const h = (maxY - minY + 1) * CELL;
  const pulse = 0.62 + 0.38 * Math.sin((frameCount || 0) * 0.13);

  ctx.save();
  ctx.fillStyle = `rgba(78, 205, 196, ${0.12 * pulse})`;
  ctx.fillRect(px, py, w, h);
  ctx.strokeStyle = `rgba(232, 255, 254, ${0.35 * pulse})`;
  ctx.lineWidth = 2;
  ctx.strokeRect(px + 2, py + 2, w - 4, h - 4);
  ctx.restore();
}

function getBotForcefieldBounds(bot) {
  if (!bot.snake?.length) return null;
  let minX = bot.snake[0].x;
  let maxX = bot.snake[0].x;
  let minY = bot.snake[0].y;
  let maxY = bot.snake[0].y;
  bot.snake.forEach((seg) => {
    minX = Math.min(minX, seg.x);
    maxX = Math.max(maxX, seg.x);
    minY = Math.min(minY, seg.y);
    maxY = Math.max(maxY, seg.y);
  });
  return {
    minX: Math.max(0, minX - FORCEFIELD_PADDING),
    maxX: Math.min(GRID_SIZE - 1, maxX + FORCEFIELD_PADDING),
    minY: Math.max(0, minY - FORCEFIELD_PADDING),
    maxY: Math.min(GRID_SIZE - 1, maxY + FORCEFIELD_PADDING),
  };
}

function drawBotEarthField(bot) {
  if (Date.now() >= bot.earthBountyUntil || !bot.alive || !bot.snake?.[0]) return;
  const head = bot.snake[0];
  const hx = head.x * CELL + CELL / 2;
  const hy = head.y * CELL + CELL / 2;
  const pulse = 0.58 + 0.42 * Math.sin((frameCount || 0) * 0.11);
  const fieldRadius = (EARTH_SPAWN_RADIUS + 1.5) * CELL;

  ctx.save();
  const aura = ctx.createRadialGradient(hx, hy, CELL * 0.4, hx, hy, fieldRadius);
  aura.addColorStop(0, `rgba(124, 252, 0, ${0.12 * pulse})`);
  aura.addColorStop(1, 'rgba(61, 40, 23, 0)');
  ctx.fillStyle = aura;
  ctx.fillRect(
    (head.x - EARTH_SPAWN_RADIUS - 1) * CELL,
    (head.y - EARTH_SPAWN_RADIUS - 1) * CELL,
    (EARTH_SPAWN_RADIUS * 2 + 3) * CELL,
    (EARTH_SPAWN_RADIUS * 2 + 3) * CELL
  );
  ctx.restore();
}

function updateBotsEnergyWaves() {
  if (energyWaves.length === 0) return false;

  const now = Date.now();
  const waveMs = Math.floor(WAVE_EXPAND_MS * getChronoTimeScale());
  if (now - lastWaveExpand < waveMs) return false;
  lastWaveExpand = now;

  let changed = false;
  const remaining = [];

  energyWaves.forEach((wave) => {
    if (!wave.damagedTargets) wave.damagedTargets = new Set();
    wave.radius++;
    const cells = getRingCells(wave.cx, wave.cy, wave.radius);

    cells.forEach((cell) => {
      if (destroyBotsAppleFromAbility(cell.x, cell.y, wave.sourceId ?? null)) {
        changed = true;
      }
      if (applyBotsWaveHitAt(wave, cell, wave.damagedTargets, wave.sourceId ?? null)) {
        changed = true;
      }
    });

    if (wave.radius < wave.maxRadius) remaining.push(wave);
  });

  energyWaves = remaining;
  if (changed) updateHud();
  return changed;
}

function projectileHitsSnakeAt(cells, snakeId) {
  if (snakeId === 'player') {
    return snake.some((seg) => cells.some((c) => c.x === seg.x && c.y === seg.y));
  }
  const bot = botSnakes.find((b) => b.id === snakeId);
  if (!bot?.alive) return false;
  return bot.snake.some((seg) => cells.some((c) => c.x === seg.x && c.y === seg.y));
}

function updateBotsProjectiles() {
  const now = Date.now();
  const moveMs = Math.floor(PROJECTILE_SPEED_MS * getChronoTimeScale());
  if (now - lastProjectileMove < moveMs) return;
  lastProjectileMove = now;

  const remaining = [];

  for (const proj of projectiles) {
    const cells = getProjectileCells(proj);
    let destroyed = false;

    for (const cell of cells) {
      if (isBlockedByEnemyForcefield(cell.x, cell.y, proj.ownerId)) {
        destroyed = true;
        break;
      }

      const appleIdx = apples.findIndex((item) => item.x === cell.x && item.y === cell.y);
      if (appleIdx !== -1) {
        destroyBotsAppleFromAbility(cell.x, cell.y, proj.ownerId);
        destroyed = true;
        break;
      }
    }
    if (destroyed) continue;

    for (const bot of botSnakes) {
      if (!bot.alive || bot.id === proj.ownerId) continue;
      if (projectileHitsSnakeAt(cells, bot.id)) {
        bot.alive = false;
        destroyed = true;
        break;
      }
    }
    if (destroyed) continue;

    if (proj.ownerId !== 'player' && projectileHitsSnakeAt(cells, 'player')) {
      if (absorbBotsForcefieldHit('player')) {
        destroyed = true;
        break;
      }
      registerBotsFireHitOnPlayer();
      destroyed = true;
      break;
    }

    const nx = proj.x + proj.dx;
    const ny = proj.y + proj.dy;
    const newCells = getProjectileCells({ x: nx, y: ny, dx: proj.dx, dy: proj.dy });

    if (newCells.some((c) => c.x < 0 || c.x >= GRID_SIZE || c.y < 0 || c.y >= GRID_SIZE)) {
      continue;
    }

    if (newCells.some((c) => isBlockedByEnemyForcefield(c.x, c.y, proj.ownerId))) {
      continue;
    }

    let blocked = false;
    for (const bot of botSnakes) {
      if (!bot.alive || bot.id === proj.ownerId) continue;
      if (projectileHitsSnakeAt(newCells, bot.id)) {
        blocked = true;
        break;
      }
    }
    if (blocked) continue;
    if (proj.ownerId !== 'player' && projectileHitsSnakeAt(newCells, 'player')) {
      if (absorbBotsForcefieldHit('player')) {
        continue;
      }
      registerBotsFireHitOnPlayer();
      continue;
    }

    proj.x = nx;
    proj.y = ny;
    remaining.push(proj);
  }

  projectiles = remaining;
}

function updateAllBotAbilities() {
  botSnakes.forEach((bot) => {
    if (!bot.alive) return;
    updateBotChronoTimer(bot);
    updateBotFireAuto(bot);
    updateBotShadowPull(bot);
    updateBotEarthBounty(bot);
    updateBotRiftAbsorb(bot);
    tryActivateBotAbility(bot);
  });
}

function updateBotAI(bot) {
  if (!bot.alive) return;
  const head = bot.snake[0];
  const dirs = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ].filter((d) => !(d.x === -bot.direction.x && d.y === -bot.direction.y));

  let bestDir = bot.direction;
  let bestScore = -Infinity;
  for (const dir of dirs) {
    const s = scoreBotDirection(head, dir, bot);
    if (s > bestScore) {
      bestScore = s;
      bestDir = dir;
    }
  }
  bot.nextDirection = bestDir;
}

function initBotsGame() {
  playMode = PLAY_MODE_BOTS;
  applyMultiplayerSkinRestrictions();
  botsGameStartedAt = Date.now();
  botsMatchEndsAt = isAppleHuntMode() ? botsGameStartedAt + BOTS_APPLE_HUNT_DURATION_MS : 0;
  botSnakes = [];
  resetAbilityState();
  apples = [];
  score = 0;
  applesEaten = 0;
  hazardHits = 0;
  userPauseActive = false;
  if (pauseModal) pauseModal.classList.add('hidden');

  const playerSpawn = randomBotsSpawnCell();
  const playerDir = { x: 1, y: 0 };
  snake = buildSnakeLine(playerSpawn?.x ?? 24, playerSpawn?.y ?? 24, 4, playerDir);
  direction = { ...playerDir };
  nextDirection = { ...playerDir };

  const botSkinIds = shuffleArray(
    SKINS.map((skin) => skin.id).filter((id) => !isSkinBannedInMultiplayer(id))
  );

  for (let i = 0; i < BOTS_BOT_COUNT; i++) {
    const spawn = randomBotsSpawnCell(`bot-${i}`);
    if (!spawn) continue;
    const dirOptions = [
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 },
    ];
    const dir = dirOptions[Math.floor(Math.random() * dirOptions.length)];
    botSnakes.push({
      id: `bot-${i}`,
      skinId: botSkinIds[i % botSkinIds.length],
      snake: buildSnakeLine(
        spawn.x,
        spawn.y,
        BOTS_MIN_SNAKE_LENGTH + Math.floor(Math.random() * 3),
        dir
      ),
      direction: { ...dir },
      nextDirection: { ...dir },
      alive: true,
    });
    const bot = botSnakes[botSnakes.length - 1];
    initBotAbilityState(bot);
    assignBotProfile(bot);
  }

  fillBotsApples();
  updateBotsCamera();
  state = 'playing';
  updateHud();
}

function stepBotsPlayerMove() {
  const head = snake[0];
  const newHead = { x: head.x + direction.x, y: head.y + direction.y };

  if (isBlockedByFrostWall(newHead.x, newHead.y)) {
    return 'ok';
  }

  if (isBlockedByEnemyForcefield(newHead.x, newHead.y, 'player')) {
    return 'ok';
  }

  if (
    newHead.x < 0 ||
    newHead.x >= BOTS_WORLD_SIZE ||
    newHead.y < 0 ||
    newHead.y >= BOTS_WORLD_SIZE
  ) {
    if (isIronclad()) return 'ok';
    return 'dead';
  }

  const itemIndex = apples.findIndex((item) => item.x === newHead.x && item.y === newHead.y);
  const willEat = itemIndex !== -1;

  if (!isIronclad()) {
    if (isBotsBodyCell(newHead.x, newHead.y, 'player', !willEat)) {
      return isAppleHuntMode() ? 'ok' : 'dead';
    }
  }

  snake.unshift(newHead);

  if (willEat) {
    apples.splice(itemIndex, 1);
    addBotsApple(selectedSkin === 'lucky' ? { skinId: 'lucky' } : null);
    growSnakeByAppleEat(selectedSkin, 1);
    score = snake.length;
    baseCoins += 1;
    applesEaten++;
    applyProgressDisplay();
  } else {
    snake.pop();
  }
  return 'ok';
}

function stepBotsEntity(bot) {
  bot.direction = { ...bot.nextDirection };
  const head = bot.snake[0];
  const newHead = { x: head.x + bot.direction.x, y: head.y + bot.direction.y };

  if (isBlockedByFrostWall(newHead.x, newHead.y)) {
    return 'ok';
  }

  if (isBlockedByEnemyForcefield(newHead.x, newHead.y, bot.id)) {
    return 'ok';
  }

  if (
    newHead.x < 0 ||
    newHead.x >= BOTS_WORLD_SIZE ||
    newHead.y < 0 ||
    newHead.y >= BOTS_WORLD_SIZE
  ) {
    if (isBotIronclad(bot)) return 'ok';
    return 'dead';
  }

  const itemIndex = apples.findIndex((item) => item.x === newHead.x && item.y === newHead.y);
  const willEat = itemIndex !== -1;

  if (isBotSelfBiteCell(bot, newHead.x, newHead.y, !willEat)) {
    if (bot.skinId === 'detonator' && !bot.detonatorUsed) {
      bot.detonatorUsed = true;
      bot.snake = bot.snake.slice(0, Math.max(3, Math.ceil(bot.snake.length / 2)));
      return 'ok';
    }
    if (isAppleHuntMode()) return 'respawn';
    eliminateBotWithLoot(bot);
    return 'dead';
  }

  if (isPlayerBodyCell(newHead.x, newHead.y)) {
    if (isAppleHuntMode()) return 'ok';
    eliminateBotWithLoot(bot);
    return 'dead';
  }

  if (isPlayerHeadCell(newHead.x, newHead.y)) {
    return isAppleHuntMode() ? 'ok' : 'kill_player';
  }

  if (isBotsBodyCell(newHead.x, newHead.y, bot.id, !willEat)) {
    return isAppleHuntMode() ? 'ok' : 'dead';
  }

  bot.snake.unshift(newHead);

  if (willEat) {
    apples.splice(itemIndex, 1);
    addBotsApple({ skinId: bot.skinId });
    growBotByAppleEat(bot, 1);
  } else {
    bot.snake.pop();
  }
  return 'ok';
}

function stepBotsEntityWithAbilities(bot) {
  const moves = Date.now() < bot.surgeUntil ? 2 : 1;
  for (let i = 0; i < moves; i++) {
    const result = stepBotsEntity(bot);
    if (result === 'dead' || result === 'kill_player' || result === 'respawn') return result;
  }
  return 'ok';
}

function setGameOverOverlay({ titleKey, messageKey, params = {} }) {
  lastGameOverOverlay = { titleKey, messageKey, params };
  overlayTitle.textContent = t(titleKey);
  overlayMsg.textContent = t(messageKey, params);
  overlay.classList.remove('hidden');
}

function refreshGameOverOverlay() {
  if (!lastGameOverOverlay) return;
  const { titleKey, messageKey, params } = lastGameOverOverlay;
  overlayTitle.textContent = t(titleKey);
  overlayMsg.textContent = t(messageKey, params);
}

function finishBotsGame(victory, rank, overlay = null) {
  stopAmplify();
  userPauseActive = false;
  if (pauseModal) pauseModal.classList.add('hidden');
  state = 'over';
  clearTimeout(gameLoop);
  cancelAnimationFrame(animFrame);

  restoreSkinAfterBots();

  if (score > highScore) highScore = score;
  saveProgress();

  if (overlay) {
    setGameOverOverlay(overlay);
    return;
  }

  setGameOverOverlay({
    titleKey: victory ? 'ui.botsVictory' : 'ui.gameOver',
    messageKey: victory ? 'death.botsVictory' : 'death.botsEliminated',
    params: victory ? {} : { rank, total: 1 + BOTS_BOT_COUNT },
  });
}

function finishAppleHuntByTimer() {
  const rank = getPlayerFinalRank();
  const victory = rank === 1;
  finishBotsGame(victory, rank, {
    titleKey: victory ? 'ui.botsVictory' : 'ui.gameOver',
    messageKey: victory ? 'death.appleHuntVictory' : 'death.appleHuntDefeat',
    params: victory ? {} : { rank, total: 1 + BOTS_BOT_COUNT },
  });
}

function updateBotsMode() {
  if (isAtomicBreathActive()) return;

  if (isAppleHuntMode() && botsMatchEndsAt > 0 && Date.now() >= botsMatchEndsAt) {
    finishAppleHuntByTimer();
    return;
  }

  direction = { ...nextDirection };
  updateAllBotAbilities();
  botSnakes.forEach(updateBotAI);

  const playerResult = stepBotsPlayerMove();
  if (playerResult === 'dead') {
    if (isAppleHuntMode()) {
      respawnPlayerInAppleHunt();
    } else {
      finishBotsGame(false, getPlayerFinalRank());
      return;
    }
  }

  for (const bot of botSnakes) {
    if (!bot.alive) continue;
    const result = stepBotsEntityWithAbilities(bot);
    if (result === 'kill_player') {
      if (isAppleHuntMode()) {
        respawnPlayerInAppleHunt();
      } else {
        finishBotsGame(false, getPlayerFinalRank());
        return;
      }
    } else if (result === 'respawn') {
      respawnBotInAppleHunt(bot);
    } else if (result === 'dead') {
      if (isAppleHuntMode()) {
        respawnBotInAppleHunt(bot);
      } else {
        bot.alive = false;
      }
    }
  }

  if (isCobraBattleMode()) {
    const aliveBots = botSnakes.filter((b) => b.alive).length;
    if (aliveBots === 0) {
      finishBotsGame(true, 1);
      return;
    }
  }

  updateBotsCamera();
  updateHud();
}

function drawBotsGrid() {
  const isLight = settings.theme === 'light';
  ctx.fillStyle = isLight ? '#f3efe8' : '#1a1c2c';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = isLight ? '#c8c0b4' : COLORS.grid;
  ctx.lineWidth = 1;
  for (let i = 0; i <= BOTS_VIEW_CELLS; i++) {
    const p = i * CELL;
    ctx.beginPath();
    ctx.moveTo(p, 0);
    ctx.lineTo(p, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, p);
    ctx.lineTo(canvas.width, p);
    ctx.stroke();
  }

  ctx.strokeStyle = isLight ? '#a89f92' : '#5d275d';
  ctx.lineWidth = 2;
  const viewEndX = botsCamera.x + BOTS_VIEW_CELLS;
  const viewEndY = botsCamera.y + BOTS_VIEW_CELLS;

  if (botsCamera.x <= 0) {
    ctx.beginPath();
    ctx.moveTo(1, 0);
    ctx.lineTo(1, canvas.height);
    ctx.stroke();
  }
  if (botsCamera.y <= 0) {
    ctx.beginPath();
    ctx.moveTo(0, 1);
    ctx.lineTo(canvas.width, 1);
    ctx.stroke();
  }
  if (viewEndX >= BOTS_WORLD_SIZE) {
    const px = canvas.width - 1;
    ctx.beginPath();
    ctx.moveTo(px, 0);
    ctx.lineTo(px, canvas.height);
    ctx.stroke();
  }
  if (viewEndY >= BOTS_WORLD_SIZE) {
    const py = canvas.height - 1;
    ctx.beginPath();
    ctx.moveTo(0, py);
    ctx.lineTo(canvas.width, py);
    ctx.stroke();
  }
}

function renderBotsMode() {
  frameCount = (Number.isFinite(frameCount) ? frameCount : 0) + 1;
  clearExpiredAtomicBreath();
  updateAmplifyTimer();
  updateChronoTimer();
  updateAutoAbilities();
  updatePendingGodzillaWaves();
  updateBotsEnergyWaves();
  updateAtomicBreath();
  if (isBotsMode()) {
    updateBotsProjectiles();
  } else {
    updateProjectiles();
  }
  updateEarthBounty();
  updateRoyalGuards();
  updateBotsCamera();
  drawBotsGrid();

  ctx.save();
  ctx.translate(-botsCamera.x * CELL, -botsCamera.y * CELL);

  drawEarthBountyField();
  drawEarthSpawnBursts();
  botSnakes.forEach((bot) => {
    if (!bot.alive) return;
    drawBotEarthField(bot);
  });
  if (Array.isArray(apples) && apples.length > 0) {
    apples.forEach((item) => {
      if (isBotsCellVisible(item.x, item.y)) drawItem(item);
    });
  }
  drawForcefieldFill();
  botSnakes.forEach((bot) => {
    if (!bot.alive) return;
    drawBotForcefield(bot);
  });
  botSnakes.forEach((bot) => {
    if (!bot.alive) return;
    drawSnakeSegments(
      bot.snake,
      bot.direction,
      getSkinById(bot.skinId),
      { clipToBotsView: true }
    );
  });
  if (snake?.length) {
    drawSnakeSegments(snake, direction, getSkin(), { headNib: true, clipToBotsView: true });
  }
  drawForcefieldFrame();
  if (Array.isArray(projectiles) && projectiles.length > 0) {
    projectiles.forEach(drawProjectile);
  }
  if (Array.isArray(cometDust) && cometDust.length > 0) {
    cometDust.forEach((dust) => {
      if (isBotsCellVisible(dust.x, dust.y)) drawCometDust(dust);
    });
  }
  drawRoyalGuards();
  drawFrostBarricade();
  drawEnergyWaves();
  drawAtomicBreath();
  drawAtomicBreathBursts();
  drawItemHitBursts();
  drawChronoTimeStopFx();

  ctx.restore();
  updateAbilityHud();
}

function updatePlayModeUI() {
  const isBots = playMode === PLAY_MODE_BOTS;

  if (settingsSingleBtn) {
    settingsSingleBtn.classList.toggle('active', !isBots && !settingsMultiExpanded);
  }
  if (settingsMultiBtn) {
    settingsMultiBtn.classList.toggle('active', isBots || settingsMultiExpanded);
  }
  if (settingsMultiSubmodes) {
    settingsMultiSubmodes.classList.toggle('hidden', !settingsMultiExpanded);
  }

  const startMsg = document.querySelector('#start-screen .overlay-msg');
  if (startMsg) {
    if (!isBots) {
      startMsg.textContent = t('ui.startMsg');
    } else if (isAppleHuntMode()) {
      startMsg.textContent = t('ui.appleHuntStartMsg');
    } else {
      startMsg.textContent = t('ui.cobraBattleStartMsg');
    }
  }
}

function expandMultiplayerOptions() {
  settingsMultiExpanded = true;
  updatePlayModeUI();
}

function openBotsModePicker() {
  if (botsModeModal) botsModeModal.classList.remove('hidden');
}

function closeBotsModePicker() {
  if (botsModeModal) botsModeModal.classList.add('hidden');
}

function prepareBotsSubMode(subMode) {
  botsSubMode = subMode;
  playMode = PLAY_MODE_BOTS;
  settingsMultiExpanded = false;
  closeBotsModePicker();
  if (settingsModal) settingsModal.classList.add('hidden');
  applyMultiplayerSkinRestrictions();
  updatePlayModeUI();
}

function launchAppleHuntMode() {
  prepareBotsSubMode(BOTS_SUB_MODE_APPLE_HUNT);
  overlay.classList.add('hidden');
  startScreen.classList.add('hidden');
  initBotsGame();
  resizeGameLayout();
  render();
  startGameLoops();
  startGameMusic();
}

function launchCobraBattleMode() {
  prepareBotsSubMode(BOTS_SUB_MODE_COBRAS);
  overlay.classList.add('hidden');
  startScreen.classList.remove('hidden');
  state = 'waiting';
  botSnakes = [];
  botsGameStartedAt = 0;
  botsMatchEndsAt = 0;
  resizeGameLayout();
  updateHud();
  render();
}

function launchBotsMode() {
  openBotsModePicker();
}

function selectSinglePlayerMode() {
  const wasBots = playMode === PLAY_MODE_BOTS;
  playMode = PLAY_MODE_SINGLE;
  settingsMultiExpanded = false;
  restoreSkinAfterBots();
  updatePlayModeUI();
  if (wasBots && (state === 'playing' || state === 'over' || state === 'paused')) {
    clearTimeout(gameLoop);
    cancelAnimationFrame(animFrame);
    overlay.classList.add('hidden');
    startScreen.classList.remove('hidden');
    state = 'waiting';
    botSnakes = [];
    botsGameStartedAt = 0;
    botsMatchEndsAt = 0;
    botsSubMode = BOTS_SUB_MODE_COBRAS;
    resizeGameLayout();
    render();
  }
}


function isPlayableEmptyCell(x, y) {
  if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) return false;
  if (isFrostWallCell(x, y)) return false;
  if (snake.some((seg) => seg.x === x && seg.y === y)) return false;
  if (apples.some((item) => item.x === x && item.y === y)) return false;
  return true;
}

function randomEmptyCell() {
  const empty = [];
  for (let x = 0; x < GRID_SIZE; x++) {
    for (let y = 0; y < GRID_SIZE; y++) {
      if (isPlayableEmptyCell(x, y)) empty.push({ x, y });
    }
  }
  if (!empty.length) return null;
  return empty[Math.floor(Math.random() * empty.length)];
}

function isCellBlockedForCometDust(x, y) {
  if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) return true;
  if (isFrostWallCell(x, y)) return true;
  if (snake.some((seg) => seg.x === x && seg.y === y)) return true;
  if (apples.some((item) => item.x === x && item.y === y)) return true;
  if (cometDust?.some((dust) => dust.x === x && dust.y === y)) return true;
  return false;
}

function findCometDustCell(originX, originY) {
  const candidates = [];

  for (let radius = 0; radius <= 5; radius++) {
    for (let dx = -radius; dx <= radius; dx++) {
      for (let dy = -radius; dy <= radius; dy++) {
        if (radius > 0 && Math.abs(dx) !== radius && Math.abs(dy) !== radius) continue;
        const x = originX + dx;
        const y = originY + dy;
        if (isCellBlockedForCometDust(x, y)) continue;
        candidates.push({ x, y });
      }
    }
    if (candidates.length > 0) break;
  }

  if (!candidates.length) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function getCometTailSpawnCells() {
  if (!snake?.length) return [];

  const tail = snake[snake.length - 1];
  const cells = [];

  for (let step = 1; step <= COMET_DUST_PER_APPLE; step++) {
    cells.push({
      x: tail.x - direction.x * step,
      y: tail.y - direction.y * step,
    });
  }

  return cells;
}

function spawnCometDustParticlesBehindTail() {
  if (!Array.isArray(cometDust)) cometDust = [];

  const preferred = getCometTailSpawnCells();

  for (let i = 0; i < COMET_DUST_PER_APPLE; i++) {
    const target = preferred[i];
    let pos = null;

    if (target && !isCellBlockedForCometDust(target.x, target.y)) {
      pos = target;
    } else if (target) {
      pos = findCometDustCell(target.x, target.y);
    } else if (snake.length) {
      const tail = snake[snake.length - 1];
      pos = findCometDustCell(tail.x - direction.x, tail.y - direction.y);
    }

    if (!pos) continue;

    cometDust.push({
      x: pos.x,
      y: pos.y,
      expiresAt: Date.now() + COMET_DUST_DESPAWN_MS,
      phase: Math.random() * Math.PI * 2,
    });
  }
}

function maybeSpawnCometDust() {
  if (selectedSkin !== 'cometstreak') return;
  spawnCometDustParticlesBehindTail();
}

function expireCometDust() {
  if (!cometDust?.length) return false;
  const now = Date.now();
  const before = cometDust.length;
  cometDust = cometDust.filter((dust) => now < dust.expiresAt);
  return cometDust.length !== before;
}

function collectCometDustAt(x, y) {
  const dustIndex = cometDust.findIndex((dust) => dust.x === x && dust.y === y);
  if (dustIndex === -1) return false;

  const scoreBefore = score;
  score++;
  applyAmplifyScore(scoreBefore);
  bankScoreGain(scoreBefore);
  applyProgressDisplay();
  queueItemHitBurst(x, y, 'comet', 'comet');
  cometDust.splice(dustIndex, 1);
  return true;
}

function fillApples() {
  while (apples.length < getMaxAppleCount()) {
    const item = createItem();
    if (!item) break;
    apples.push(item);
  }
}

function addReplacementApple() {
  if (apples.length < getMaxAppleCount()) {
    const item = createItem();
    if (item) apples.push(item);
  }
}

function rollItemType() {
  if (Math.random() < HAZARD_SUBSTITUTE_CHANCE) {
    return Math.random() < 0.5 ? 'black' : 'bomb';
  }

  return rollGoodItemType();
}

function rollGoodItemType() {
  const forceGolden = drySpawns >= GOLDEN_PITY_SPAWNS;
  const goldenChance = selectedSkin === 'lucky' ? LUCKY_GOLDEN_CHANCE : GOLDEN_APPLE_CHANCE;
  const golden = forceGolden || Math.random() < goldenChance;

  if (golden) {
    drySpawns = 0;
    return 'golden';
  }

  drySpawns++;
  return 'normal';
}

function buildItem(x, y, type) {
  const now = Date.now();
  const item = { x, y, type, spawnedAt: now };
  if (type === 'black' || type === 'bomb') {
    item.expiresAt = now + ITEM_DESPAWN_MS;
  }
  return item;
}

function buildEarthItem(x, y, type) {
  const item = buildItem(x, y, type);
  item.earthGrownAt = Date.now();
  return item;
}

function createItemAt(x, y) {
  return buildItem(x, y, rollItemType());
}

function createItem() {
  const pos = randomEmptyCell();
  if (!pos) return null;
  return createItemAt(pos.x, pos.y);
}

function replaceWithHazard(index) {
  const hazardType = Math.random() < 0.5 ? 'black' : 'bomb';
  const { x, y } = apples[index];
  apples[index] = buildItem(x, y, hazardType);
}

function isFrostBarricadeActive() {
  if (Date.now() < frostBarricadeUntil) return true;
  if (isBotsMode()) {
    return botSnakes.some((bot) => bot.alive && Date.now() < bot.frostBarricadeUntil);
  }
  return false;
}

function isFrostWallCell(x, y) {
  if (!isFrostBarricadeActive()) return false;
  const edge = isBotsMode() ? BOTS_WORLD_SIZE - 1 : GRID_SIZE - 1;
  return x === 0 || x === edge || y === 0 || y === edge;
}

function isBlockedByFrostWall(x, y) {
  if (!isFrostBarricadeActive()) return false;
  const limit = isBotsMode() ? BOTS_WORLD_SIZE : GRID_SIZE;
  return (
    x < 0 ||
    x >= limit ||
    y < 0 ||
    y >= limit ||
    isFrostWallCell(x, y)
  );
}

function pushSnakeOffFrostWalls() {
  snake = snake.map((seg) => ({
    x: Math.min(GRID_SIZE - 2, Math.max(1, seg.x)),
    y: Math.min(GRID_SIZE - 2, Math.max(1, seg.y)),
  }));
}

function relocateItemsOffFrostWalls() {
  apples.forEach((item) => {
    if (!isFrostWallCell(item.x, item.y)) return;
    const pos = randomEmptyCell();
    if (!pos) return;
    item.x = pos.x;
    item.y = pos.y;
  });
}

function expireItems() {
  const now = Date.now();
  let changed = false;

  apples = apples.map((item) => {
    if (
      (item.type === 'black' || item.type === 'bomb') &&
      item.expiresAt &&
      now >= item.expiresAt
    ) {
      changed = true;
      const onSnake = snake.some((s) => s.x === item.x && s.y === item.y);
      const replacement = onSnake ? createItem() : createItemAt(item.x, item.y);
      return replacement ?? item;
    }
    return item;
  });

  return changed;
}

function checkPeriodicHazardReplace() {
  const now = Date.now();
  if (now - lastHazardReplace < PERIODIC_HAZARD_INTERVAL) return false;

  lastHazardReplace = now;
  const normalIndices = apples
    .map((item, index) => (item.type === 'normal' ? index : -1))
    .filter((index) => index >= 0);

  if (normalIndices.length === 0) return false;

  const index = normalIndices[Math.floor(Math.random() * normalIndices.length)];
  replaceWithHazard(index);
  return true;
}

function hasChronoDilation() {
  return selectedSkin === 'chrono' && chronoRemainingMs > 0;
}

function isChronoActive() {
  return hasChronoDilation() && state === 'playing';
}

function isAnyBotsChronoActive() {
  if (!isBotsMode() || state !== 'playing') return false;
  if (hasChronoDilation()) return true;
  return botSnakes.some((bot) => bot.alive && bot.chronoRemainingMs > 0);
}

function getBotsChronoElapsed() {
  let elapsed = hasChronoDilation() ? getChronoElapsed() : 0;
  botSnakes.forEach((bot) => {
    if (bot.alive && bot.chronoRemainingMs > 0) {
      elapsed = Math.max(elapsed, bot.chronoElapsedMs ?? 0);
    }
  });
  return elapsed;
}

function getBotsChronoSlowMult() {
  if (!isAnyBotsChronoActive()) return 1;
  const target = getChronoSlowMultTarget();
  const ramp = Math.min(1, getBotsChronoElapsed() / CHRONO_SLOW_RAMP_MS);
  return 1 + (target - 1) * ramp;
}

function isChronoEffectActive() {
  if (state !== 'playing') return false;
  if (isBotsMode()) return isAnyBotsChronoActive();
  return isChronoActive();
}

function getChronoEffectElapsed() {
  if (isBotsMode()) return getBotsChronoElapsed();
  return getChronoElapsed();
}

function getChronoEffectCenter() {
  if (hasChronoDilation() && snake?.[0]) return snake[0];
  const chronoBot = botSnakes.find((bot) => bot.alive && bot.chronoRemainingMs > 0 && bot.snake?.[0]);
  if (chronoBot) return chronoBot.snake[0];
  return snake?.[0] ?? null;
}

function getChronoDilationDuration() {
  return CHRONO_DILATION_MS[settings.gameMode] ?? CHRONO_DILATION_MS.normal;
}

function getChronoSlowMultTarget() {
  switch (settings.gameMode) {
    case 'easy':
      return CHRONO_SLOW_MULT_EASY;
    case 'hard':
    case 'extreme':
      return CHRONO_SLOW_MULT_INTENSE;
    default:
      return CHRONO_SLOW_MULT_NORMAL;
  }
}

function getChronoEffectiveSlowMult() {
  if (!isChronoActive()) return 1;
  const target = getChronoSlowMultTarget();
  const ramp = Math.min(1, getChronoElapsed() / CHRONO_SLOW_RAMP_MS);
  return 1 + (target - 1) * ramp;
}

function getChronoTimeScale() {
  if (isBotsMode()) {
    return isAnyBotsChronoActive() ? getBotsChronoSlowMult() : 1;
  }
  return getChronoEffectiveSlowMult();
}

function resetChronoTimerSync() {
  lastChronoTimerSync = Date.now();
}

function applyChronoTimerCompensation() {
  const now = Date.now();
  if (!lastChronoTimerSync) {
    lastChronoTimerSync = now;
    return;
  }

  const realDt = now - lastChronoTimerSync;
  lastChronoTimerSync = now;
  if (realDt <= 0 || !isChronoEffectActive()) return;

  const scale = isBotsMode() ? getBotsChronoSlowMult() : getChronoEffectiveSlowMult();
  if (scale <= 1) return;

  const bonus = realDt * (1 - 1 / scale);

  apples.forEach((item) => {
    if (item.expiresAt) item.expiresAt += bonus;
  });

  if (Array.isArray(cometDust)) {
    cometDust.forEach((dust) => {
      if (dust.expiresAt) dust.expiresAt += bonus;
    });
  }

  if (Array.isArray(royalGuards)) {
    royalGuards.forEach((guard) => {
      if (guard.expiresAt) guard.expiresAt += bonus;
    });
  }

  lastHazardReplace += bonus;
  if (lastEarthSpawn > 0) lastEarthSpawn += bonus;

  pendingGodzillaWaves.forEach((pending) => {
    pending.spawnAt += bonus;
  });
  pendingPhantomWaves.forEach((pending) => {
    pending.spawnAt += bonus;
  });

  if (isBotsMode()) {
    if (forcefieldUntil > 0) forcefieldUntil += bonus;
    if (frostBarricadeUntil > 0) frostBarricadeUntil += bonus;
    if (shadowUntil > 0) shadowUntil += bonus;
    if (earthBountyUntil > 0) earthBountyUntil += bonus;
    if (riftAbsorbUntil > 0) riftAbsorbUntil += bonus;
    if (surgeUntil > 0) surgeUntil += bonus;
    botSnakes.forEach((bot) => {
      if (bot.frostBarricadeUntil > 0) bot.frostBarricadeUntil += bonus;
      if (bot.forcefieldUntil > 0) bot.forcefieldUntil += bonus;
      if (bot.shadowUntil > 0) bot.shadowUntil += bonus;
      if (bot.earthBountyUntil > 0) bot.earthBountyUntil += bonus;
      if (bot.riftAbsorbUntil > 0) bot.riftAbsorbUntil += bonus;
      if (bot.surgeUntil > 0) bot.surgeUntil += bonus;
    });
  }
}

function getAnchorAppleCap() {
  return ANCHOR_CAP_APPLES[settings.gameMode] ?? ANCHOR_CAP_APPLES.normal;
}

function getAnchorMinTickMs() {
  const capMs = Math.max(
    MIN_TICK_MS,
    BASE_TICK_MS - getAnchorAppleCap() * SPEED_DECREASE_PER_APPLE
  );
  return Math.max(MIN_TICK_MS, Math.floor(capMs * getSpeedModeMultiplier()));
}

function getTickMs() {
  if (isBotsMode()) {
    let ms = BOTS_TICK_MS;
    if (Date.now() < surgeUntil) {
      ms = Math.max(MIN_TICK_MS, Math.floor(ms * 0.55));
    }
    if (isAnyBotsChronoActive()) {
      ms = Math.max(MIN_TICK_MS, Math.floor(ms * getBotsChronoSlowMult()));
    }
    return ms;
  }
  const speedPerApple = selectedSkin === 'steady'
    ? SPEED_DECREASE_PER_APPLE / 2
    : SPEED_DECREASE_PER_APPLE;
  let ms = Math.max(MIN_TICK_MS, BASE_TICK_MS - applesEaten * speedPerApple);
  if (selectedSkin === 'glass') {
    ms = Math.max(MIN_TICK_MS, ms - glassSpeedStacks * GLASS_SPEED_PER_APPLE);
  }
  if (Date.now() < surgeUntil) {
    ms = Math.max(MIN_TICK_MS, Math.floor(ms * 0.55));
  }
  ms = Math.max(MIN_TICK_MS, Math.floor(ms * getSpeedModeMultiplier()));
  if (score >= SCORE_SPEED_MILESTONE) {
    ms = Math.max(MIN_TICK_MS, Math.floor(ms * SCORE_SPEED_MILESTONE_MULT));
  }
  if (selectedSkin === 'anchor') {
    ms = Math.max(getAnchorMinTickMs(), ms);
  }
  if (isChronoActive()) {
    ms = Math.max(MIN_TICK_MS, Math.floor(ms * getChronoEffectiveSlowMult()));
  }
  return ms;
}

function canUseManualAbility() {
  const ability = SKIN_ABILITIES[selectedSkin];
  if (!ability?.manual) return false;
  if (hasZeroCooldowns()) return true;
  const lastUsed = abilityCooldowns[selectedSkin] ?? 0;
  return Date.now() - lastUsed >= ability.cooldown;
}

function useManualAbility() {
  if (state !== 'playing' || !canUseManualAbility()) return false;

  switch (selectedSkin) {
    case 'classic':
      surgeUntil = Date.now() + 4000;
      break;
    case 'chrono':
      chronoRemainingMs = getChronoDilationDuration();
      chronoElapsedMs = 0;
      chronoLastUpdate = Date.now();
      chronoStart = chronoLastUpdate;
      chronoUntil = chronoLastUpdate + chronoRemainingMs;
      queueChronoActivationBursts();
      break;
    case 'gold':
      apples = apples.map((item) => ({ x: item.x, y: item.y, type: 'golden' }));
      break;
    case 'ice':
      frostBarricadeUntil = Date.now() + FROST_BARRICADE_DURATION;
      relocateItemsOffFrostWalls();
      pushSnakeOffFrostWalls();
      break;
    case 'royal':
      spawnRoyalGuards();
      break;
    case 'shadow':
      shadowUntil = Date.now() + SHADOW_ABILITY_DURATION;
      shadowPullBursts = [];
      if (snake?.length) {
        queueShadowPullBurst(snake[0].x, snake[0].y, 'pull', 'normal');
      }
      break;
    case 'shielder':
      activatePlayerForcefield();
      break;
    case 'phantom': {
      const head = snake[0];
      spawnPhantomWave(head.x, head.y, isBotsMode() ? 'player' : null);
      break;
    }
    case 'earth':
      earthBountyUntil = Date.now() + EARTH_BOUNTY_DURATION;
      lastEarthSpawn = Date.now();
      spawnEarthAppleNearPlayer();
      break;
    default:
      return false;
  }

  abilityCooldowns[selectedSkin] = Date.now();
  updateHud();
  saveProgress();
  return true;
}

function ensureGameArrays() {
  if (!Array.isArray(snake)) snake = [];
  if (!Array.isArray(apples)) apples = [];
  if (!Array.isArray(projectiles)) projectiles = [];
  if (!Array.isArray(energyWaves)) energyWaves = [];
  if (!Array.isArray(royalGuards)) royalGuards = [];
  if (!Array.isArray(cometDust)) cometDust = [];
  if (!direction) direction = { x: 1, y: 0 };
  if (!nextDirection) nextDirection = { x: 1, y: 0 };
}

function getAtomicBreathPulse() {
  const frames = Number.isFinite(frameCount) ? frameCount : 0;
  const value = 0.55 + 0.45 * Math.sin(frames * 0.35);
  return Number.isFinite(value) ? value : 0.55;
}

function rgbaAlpha(r, g, b, alpha) {
  const a = Number.isFinite(alpha) ? Math.max(0, Math.min(1, alpha)) : 1;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function clearAtomicBreathState() {
  atomicBreathUntil = 0;
  atomicBreathStart = 0;
  atomicBreathLastSweepAngle = 0;
  atomicBreathBursts = [];
  atomicBreathDamagedBotIds = new Set();
  itemHitBursts = [];
}

function clearExpiredAtomicBreath() {
  if (atomicBreathUntil > 0 && Date.now() >= atomicBreathUntil) {
    clearAtomicBreathState();
    fillApples();
  }
}

function isAtomicBreathActive() {
  return atomicBreathUntil > 0 && Date.now() < atomicBreathUntil;
}

function getAtomicBreathElapsed() {
  if (atomicBreathStart <= 0) return 0;
  return Math.max(0, Date.now() - atomicBreathStart);
}

function getAtomicBreathProgress() {
  if (!isAtomicBreathActive()) return 0;
  return Math.min(1, getAtomicBreathElapsed() / GODZILLA_ATOMIC_DURATION);
}

function getSmoothAtomicAngle() {
  return getAtomicBreathProgress() * Math.PI * 2;
}

function canUseGodzillaAbility(type) {
  if (selectedSkin !== 'godzilla' || state !== 'playing') return false;
  if (type === 'atomic' && isAtomicBreathActive()) return false;
  if (hasZeroCooldowns()) return true;
  const key = type === 'atomic' ? 'godzilla-atomic' : 'godzilla-pulse';
  const cooldown =
    type === 'atomic' ? GODZILLA_ATOMIC_COOLDOWN : GODZILLA_PULSE_COOLDOWN;
  const lastUsed = abilityCooldowns[key] ?? 0;
  return Date.now() - lastUsed >= cooldown;
}

function useGodzillaAtomic() {
  if (!canUseGodzillaAbility('atomic')) return false;

  clearExpiredAtomicBreath();
  const now = Date.now();
  atomicBreathStart = now;
  atomicBreathUntil = now + GODZILLA_ATOMIC_DURATION + GODZILLA_ATOMIC_VISUAL_HOLD;
  atomicBreathLastSweepAngle = 0;
  atomicBreathBursts = [];
  atomicBreathDamagedBotIds = new Set();
  itemHitBursts = [];
  abilityCooldowns['godzilla-atomic'] = now;
  updateHud();
  saveProgress();
  render();
  return true;
}

function useGodzillaPulse() {
  if (!canUseGodzillaAbility('pulse')) return false;

  const head = snake[0];
  const now = Date.now();
  spawnGodzillaWave(head.x, head.y, isBotsMode() ? 'player' : null, 0);
  for (let i = 1; i < GODZILLA_PULSE_WAVE_COUNT; i++) {
    pendingGodzillaWaves.push({
      cx: head.x,
      cy: head.y,
      spawnAt: now + GODZILLA_PULSE_DELAY * i,
      sourceId: isBotsMode() ? 'player' : null,
      pulseIndex: i,
    });
  }
  abilityCooldowns['godzilla-pulse'] = now;
  updateHud();
  saveProgress();
  return true;
}

function refreshGridMetrics() {
  if (isBotsMode()) {
    GRID_SIZE = BOTS_WORLD_SIZE;
    const viewSize = Math.max(1, canvas.width);
    CELL = viewSize / BOTS_VIEW_CELLS;
    return;
  }
  GRID_SIZE = isPocketDimensionActive()
    ? BASE_GRID_SIZE + POCKET_DIMENSION_GRID_BONUS
    : BASE_GRID_SIZE;
  CELL = canvas.width / GRID_SIZE;
}

function measureLayoutChromeHeight() {
  const hud = document.querySelector('.hud');
  const statusRow = document.querySelector('.status-row');
  const footer = document.querySelector('.footer');
  const frame = document.querySelector('.canvas-frame');
  const wrapper = document.querySelector('.game-wrapper');
  if (!wrapper || !frame) return LAYOUT_CHROME_MIN_PX + 120;

  const wrapperStyle = getComputedStyle(wrapper);
  const gap = parseFloat(wrapperStyle.rowGap || wrapperStyle.gap || '8');

  let chrome = 0;
  if (hud) chrome += hud.offsetHeight + gap;
  if (statusRow && statusRow.offsetHeight > 0) chrome += statusRow.offsetHeight + gap;
  if (footer) chrome += footer.offsetHeight + gap;

  const frameStyle = getComputedStyle(frame);
  chrome +=
    parseFloat(frameStyle.paddingTop) +
    parseFloat(frameStyle.paddingBottom) +
    parseFloat(frameStyle.borderTopWidth) +
    parseFloat(frameStyle.borderBottomWidth);

  const { padY } = getViewportInsets();
  return Math.max(LAYOUT_CHROME_MIN_PX, chrome + padY + 8);
}

function isBrowserFullscreen() {
  return !!(
    document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozFullScreenElement
  );
}

function getViewportInsets() {
  const bodyStyle = getComputedStyle(document.body);
  return {
    padX: parseFloat(bodyStyle.paddingLeft) + parseFloat(bodyStyle.paddingRight),
    padY: parseFloat(bodyStyle.paddingTop) + parseFloat(bodyStyle.paddingBottom),
  };
}

function getMaxCanvasPx() {
  const windowedMax = readDeviceCssPx('--device-max-canvas-windowed', MAX_CANVAS_WINDOWED_PX);
  const fullscreenMax = readDeviceCssPx('--device-max-canvas-fullscreen', MAX_CANVAS_FULLSCREEN_PX);
  if (isBrowserFullscreen()) {
    const viewportMin = Math.min(window.innerWidth, window.innerHeight);
    return Math.min(fullscreenMax, Math.floor(viewportMin * 0.78));
  }
  return windowedMax;
}

function resizeGameLayout() {
  const frame = document.querySelector('.canvas-frame');
  if (!frame) return;

  const frameStyle = getComputedStyle(frame);
  const framePadX =
    parseFloat(frameStyle.paddingLeft) +
    parseFloat(frameStyle.paddingRight) +
    parseFloat(frameStyle.borderLeftWidth) +
    parseFloat(frameStyle.borderRightWidth);
  const framePadY =
    parseFloat(frameStyle.paddingTop) +
    parseFloat(frameStyle.paddingBottom) +
    parseFloat(frameStyle.borderTopWidth) +
    parseFloat(frameStyle.borderBottomWidth);

  const { padX, padY } = getViewportInsets();
  const viewportW = window.innerWidth - padX;
  const viewportH = window.innerHeight - padY;
  const chromeH = measureLayoutChromeHeight();
  const availableW = Math.floor(viewportW - framePadX - 16);
  const availableH = Math.floor(viewportH - chromeH);
  const maxCanvas = getMaxCanvasPx();
  const minCanvas = readDeviceCssPx('--device-min-canvas', MIN_CANVAS_PX);
  const size = Math.max(minCanvas, Math.min(availableW, availableH, maxCanvas));

  if (canvas.width !== size) {
    canvas.width = size;
    canvas.height = size;
    refreshGridMetrics();
  }

  const frameSize = Math.ceil(size + framePadX);
  document.documentElement.style.setProperty('--canvas-size', `${size}px`);
  document.documentElement.style.setProperty('--game-width', `${frameSize}px`);

  if (typeof state === 'string') {
    render();
  }
}

function initLayoutObserver() {
  const frame = document.querySelector('.canvas-frame');
  if (!frame || typeof ResizeObserver === 'undefined') return;

  const observer = new ResizeObserver(() => {
    scheduleLayoutResize();
  });
  observer.observe(frame);
}

function isPocketDimensionActive() {
  return pocketDimensionUntil > 0 && Date.now() < pocketDimensionUntil;
}

function isRiftAbsorbActive() {
  return riftAbsorbUntil > 0 && Date.now() < riftAbsorbUntil;
}

function isRiftTeleportEffectActive() {
  return riftTeleportEffectUntil > 0 && Date.now() < riftTeleportEffectUntil;
}

function canUseRiftweaverAbility(type) {
  if (selectedSkin !== 'riftweaver' || state !== 'playing') return false;
  if (type === 'pocket' && isPocketDimensionActive()) return false;
  if (type === 'absorb' && isRiftAbsorbActive()) return false;
  if (hasZeroCooldowns()) return true;
  const key = type === 'pocket' ? 'riftweaver-pocket' : 'riftweaver-absorb';
  const cooldown =
    type === 'pocket' ? POCKET_DIMENSION_COOLDOWN : RIFT_ABSORB_COOLDOWN;
  const lastUsed = abilityCooldowns[key] ?? 0;
  return Date.now() - lastUsed >= cooldown;
}

function useRiftPocketDimension() {
  if (!canUseRiftweaverAbility('pocket')) return false;

  pocketDimensionUntil = Date.now() + POCKET_DIMENSION_DURATION;
  refreshGridMetrics();
  while (apples.length < POCKET_DIMENSION_MAX_APPLES) {
    const item = createItem();
    if (!item) break;
    apples.push(item);
  }
  abilityCooldowns['riftweaver-pocket'] = Date.now();
  updateHud();
  saveProgress();
  render();
  return true;
}

function useRiftAbsorb() {
  if (!canUseRiftweaverAbility('absorb')) return false;

  riftAbsorbUntil = Date.now() + RIFT_ABSORB_DURATION;
  lastRiftPull = 0;
  riftAbsorbBursts = [];
  atomicBreathBursts = [];
  itemHitBursts = [];
  abilityCooldowns['riftweaver-absorb'] = Date.now();
  updateHud();
  saveProgress();
  render();
  return true;
}

function applyRiftAbsorbReward(eaten) {
  const scoreBefore = score;

  if (eaten.type === 'golden') {
    score = score === 0 ? RIFT_SCORE_MULTIPLIER * 2 : score * (RIFT_SCORE_MULTIPLIER * 2);
  } else {
    score += RIFT_SCORE_MULTIPLIER;
  }

  if (selectedSkin === 'enhancer') {
    applyEnhancerScoreBoost();
  }

  applyAmplifyScore(scoreBefore);
  bankScoreGain(scoreBefore);
  applyProgressDisplay();
  applesEaten++;
  applyHoarderBonus();
  maybeSpawnCometDust();
}

function getHoarderBonusCoins(milestone) {
  return HOARDER_BASE_BONUS_COINS * Math.pow(2, milestone - 1);
}

function getNextHoarderBonusCoins() {
  const nextMilestone = Math.floor(applesEaten / HOARDER_BONUS_INTERVAL) + 1;
  return getHoarderBonusCoins(nextMilestone);
}

function applyHoarderBonus() {
  if (selectedSkin !== 'hoarder') return;
  if (applesEaten <= 0 || applesEaten % HOARDER_BONUS_INTERVAL !== 0) return;

  const milestone = applesEaten / HOARDER_BONUS_INTERVAL;
  const bonus = getHoarderBonusCoins(milestone);
  baseCoins += bonus;
  applyProgressDisplay();
  scheduleSaveProgress();
  updateHud();

  const head = snake[0];
  if (head) {
    queueItemHitBurst(head.x, head.y, 'golden', 'hoarder');
  }
}

function clampEntityToBaseGrid(entity) {
  entity.x = Math.max(0, Math.min(BASE_GRID_SIZE - 1, entity.x));
  entity.y = Math.max(0, Math.min(BASE_GRID_SIZE - 1, entity.y));
}

function teleportSnakeToCenter() {
  const centerX = Math.floor(BASE_GRID_SIZE / 2);
  const centerY = Math.floor(BASE_GRID_SIZE / 2);
  const head = snake[0];
  const dx = centerX - head.x;
  const dy = centerY - head.y;

  snake = snake.map((seg) => ({
    x: Math.max(0, Math.min(BASE_GRID_SIZE - 1, seg.x + dx)),
    y: Math.max(0, Math.min(BASE_GRID_SIZE - 1, seg.y + dy)),
  }));
}

function collapsePocketDimension() {
  pocketDimensionUntil = 0;
  refreshGridMetrics();
  teleportSnakeToCenter();
  apples.forEach(clampEntityToBaseGrid);
  projectiles.forEach(clampEntityToBaseGrid);
  normalizeApples();
  riftTeleportEffectUntil = Date.now() + RIFT_TELEPORT_EFFECT_MS;
}

function updatePocketDimension() {
  if (pocketDimensionUntil <= 0) return false;
  if (Date.now() < pocketDimensionUntil) return false;

  collapsePocketDimension();
  updateHud();
  return true;
}

function getSnakeMouthPixel() {
  const head = snake[0];
  const mouth = {
    x: head.x * CELL + CELL / 2,
    y: head.y * CELL + CELL / 2,
  };
  const bite = CELL * 0.28;
  mouth.x += direction.x * bite;
  mouth.y += direction.y * bite;
  return mouth;
}

function canRiftPullTo(x, y, item, head) {
  if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) return false;
  if (x === head.x && y === head.y) return true;
  return !apples.some((other) => other !== item && other.x === x && other.y === y);
}

function queueRiftAbsorbBurst(type) {
  const mouth = getSnakeMouthPixel();
  riftAbsorbBursts.push({
    x: mouth.x,
    y: mouth.y,
    type,
    start: Date.now(),
  });
}

function absorbItemAtMouth(item, index) {
  queueRiftAbsorbBurst(item.type);
  applyRiftAbsorbReward(item);
  apples.splice(index, 1);
  addReplacementApple();
}

function pullItemTowardMouth(item, head, steps = 8) {
  for (let i = 0; i < steps; i++) {
    if (item.x === head.x && item.y === head.y) return true;
    const next = stepToward(item.x, item.y, head.x, head.y);
    if (next.x === item.x && next.y === item.y) break;
    if (!canRiftPullTo(next.x, next.y, item, head)) break;
    item.x = next.x;
    item.y = next.y;
  }
  return item.x === head.x && item.y === head.y;
}

function updateRiftAbsorb() {
  if (!isRiftAbsorbActive()) return false;

  const now = Date.now();
  if (now - lastRiftPull < RIFT_ABSORB_PULL_MS) return false;
  lastRiftPull = now;

  const head = snake[0];
  let changed = false;

  for (let i = apples.length - 1; i >= 0; i--) {
    const item = apples[i];

    if (item.type === 'normal' || item.type === 'golden') {
      if (pullItemTowardMouth(item, head)) {
        absorbItemAtMouth(item, i);
        changed = true;
      } else if (item.x !== head.x || item.y !== head.y) {
        changed = true;
      }
    } else if (item.type === 'black' || item.type === 'bomb') {
      const next = stepAway(item.x, item.y, head.x, head.y);
      if (next.x !== item.x || next.y !== item.y) {
        if (canMoveItemTo(next.x, next.y, item)) {
          item.x = next.x;
          item.y = next.y;
          changed = true;
        }
      }
    }
  }

  if (changed) updateHud();
  return changed;
}

function drawPocketDimensionShine() {
  if (!isPocketDimensionActive()) return;

  const frame = frameCount || 0;
  const pulse = 0.45 + 0.35 * Math.sin(frame * 0.14);
  const remaining = Math.max(0, pocketDimensionUntil - Date.now());
  const fade = Math.min(1, remaining / POCKET_DIMENSION_DURATION);
  const size = canvas.width;
  const boundary = BASE_GRID_SIZE * CELL;

  ctx.save();

  const wash = ctx.createRadialGradient(size / 2, size / 2, size * 0.08, size / 2, size / 2, size * 0.82);
  wash.addColorStop(0, `rgba(157, 78, 221, ${0.22 * pulse * fade})`);
  wash.addColorStop(0.5, `rgba(76, 29, 149, ${0.14 * pulse * fade})`);
  wash.addColorStop(1, 'rgba(36, 0, 70, 0)');
  ctx.fillStyle = wash;
  ctx.fillRect(0, 0, size, size);

  ctx.globalAlpha = 0.35 * pulse * fade;
  for (let i = 0; i < 4; i++) {
    const cornerX = i % 2 === 0 ? 0 : size;
    const cornerY = i < 2 ? 0 : size;
    const portalGrad = ctx.createRadialGradient(cornerX, cornerY, 0, cornerX, cornerY, size * 0.42);
    portalGrad.addColorStop(0, 'rgba(224, 170, 255, 0.55)');
    portalGrad.addColorStop(0.45, 'rgba(123, 44, 191, 0.25)');
    portalGrad.addColorStop(1, 'rgba(60, 9, 108, 0)');
    ctx.fillStyle = portalGrad;
    ctx.fillRect(0, 0, size, size);
  }

  ctx.globalAlpha = 0.18 * pulse * fade;
  ctx.strokeStyle = '#00f5ff';
  ctx.lineWidth = 2;
  ctx.strokeRect(3, 3, size - 6, size - 6);
  ctx.strokeStyle = '#ff4fd8';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(7, 7, size - 14, size - 14);

  ctx.globalAlpha = 0.25 * fade;
  ctx.strokeStyle = '#e0aaff';
  ctx.lineWidth = 3;
  ctx.setLineDash([10, 8]);
  ctx.lineDashOffset = -frame * 1.5;
  ctx.strokeRect(2, 2, boundary - 4, boundary - 4);
  ctx.setLineDash([]);

  ctx.globalAlpha = 0.12 * pulse;
  for (let y = 0; y < size; y += 14) {
    const offset = Math.sin(frame * 0.08 + y * 0.05) * 6;
    ctx.fillStyle = 'rgba(224, 170, 255, 0.35)';
    ctx.fillRect(offset, y, size, 2);
  }

  for (let i = 0; i < 14; i++) {
    const t = (frame * 0.03 + i * 0.17) % 1;
    const px = (Math.sin(frame * 0.05 + i * 1.7) * 0.5 + 0.5) * size;
    const py = t * size;
    ctx.globalAlpha = (1 - t) * 0.5 * fade;
    ctx.fillStyle = i % 2 === 0 ? '#e0aaff' : '#00f5ff';
    ctx.beginPath();
    ctx.arc(px, py, 2 + (i % 3), 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

function drawRiftAbsorbStreams() {
  if (!isRiftAbsorbActive() || !snake?.length) return;

  const mouth = getSnakeMouthPixel();
  const frame = frameCount || 0;
  const pulse = 0.55 + 0.45 * Math.sin(frame * 0.35);

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';

  apples.forEach((item, index) => {
    if (item.type !== 'normal' && item.type !== 'golden') return;

    const ix = item.x * CELL + CELL / 2;
    const iy = item.y * CELL + CELL / 2;
    const color = item.type === 'golden' ? '#ffd700' : '#9d4edd';

    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.shadowBlur = 12;
    ctx.shadowColor = color;
    ctx.globalAlpha = 0.45 * pulse;
    ctx.beginPath();
    ctx.moveTo(ix, iy);
    ctx.lineTo(mouth.x, mouth.y);
    ctx.stroke();

    const sparkT = ((frame * 0.12 + index * 0.2) % 1);
    const sx = ix + (mouth.x - ix) * sparkT;
    const sy = iy + (mouth.y - iy) * sparkT;
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(sx, sy, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(sx, sy, 5, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();
}

function drawRiftMouthVortex() {
  if (!isRiftAbsorbActive() || !snake?.length) return;

  const mouth = getSnakeMouthPixel();
  const frame = frameCount || 0;
  const pulse = 0.5 + 0.5 * Math.sin(frame * 0.4);
  const remaining = Math.max(0, riftAbsorbUntil - Date.now());
  const intensity = Math.min(1, remaining / RIFT_ABSORB_DURATION);

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';

  for (let ring = 0; ring < 3; ring++) {
    const radius = CELL * (0.45 + ring * 0.22) + Math.sin(frame * 0.25 + ring) * 2;
    ctx.globalAlpha = (0.35 - ring * 0.08) * pulse * intensity;
    ctx.strokeStyle = ring === 0 ? '#ffffff' : ring === 1 ? '#e0aaff' : '#7b2cbf';
    ctx.lineWidth = 3 - ring;
    ctx.shadowBlur = 14;
    ctx.shadowColor = '#c77dff';
    ctx.beginPath();
    ctx.arc(mouth.x, mouth.y, radius, frame * 0.08 + ring, frame * 0.08 + ring + Math.PI * 1.35);
    ctx.stroke();
  }

  const vortexGrad = ctx.createRadialGradient(mouth.x, mouth.y, 0, mouth.x, mouth.y, CELL * 0.75);
  vortexGrad.addColorStop(0, `rgba(255, 255, 255, ${0.75 * pulse})`);
  vortexGrad.addColorStop(0.35, `rgba(199, 125, 255, ${0.45 * pulse})`);
  vortexGrad.addColorStop(1, 'rgba(123, 44, 191, 0)');
  ctx.globalAlpha = 0.8 * intensity;
  ctx.fillStyle = vortexGrad;
  ctx.beginPath();
  ctx.arc(mouth.x, mouth.y, CELL * 0.72, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawRiftAbsorbBursts() {
  if (!riftAbsorbBursts?.length) return;

  const now = Date.now();
  riftAbsorbBursts = riftAbsorbBursts.filter((burst) => now - burst.start < 420);

  riftAbsorbBursts.forEach((burst) => {
    const t = (now - burst.start) / 420;
    const alpha = 1 - t;
    const radius = CELL * (0.35 + t * 1.4);
    const color = burst.type === 'golden' ? '#ffd700' : '#c77dff';

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = alpha * 0.8;
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.shadowBlur = 16;
    ctx.shadowColor = color;
    ctx.beginPath();
    ctx.arc(burst.x, burst.y, radius, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.arc(burst.x, burst.y, Math.max(1, radius * 0.35), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
}

function isShadowPullActive() {
  return selectedSkin === 'shadow' && Date.now() < shadowUntil;
}

function getShadowPullIntensity() {
  if (!isShadowPullActive()) return 0;
  const remaining = Math.max(0, shadowUntil - Date.now());
  return Math.min(1, remaining / SHADOW_ABILITY_DURATION);
}

function queueShadowPullBurst(x, y, kind, itemType) {
  if (!Array.isArray(shadowPullBursts)) shadowPullBursts = [];
  shadowPullBursts.push({
    x: x * CELL + CELL / 2,
    y: y * CELL + CELL / 2,
    kind,
    itemType,
    start: Date.now(),
  });
}

function getQuadraticPoint(x0, y0, cx, cy, x1, y1, t) {
  const inv = 1 - t;
  return {
    x: inv * inv * x0 + 2 * inv * t * cx + t * t * x1,
    y: inv * inv * y0 + 2 * inv * t * cy + t * t * y1,
  };
}

function getChronoElapsed() {
  if (chronoRemainingMs <= 0) return 0;
  return chronoElapsedMs;
}

function queueChronoActivationBurstsAt(cell) {
  if (!cell) {
    chronoActivationBursts = [];
    return;
  }
  chronoActivationBursts = [{
    x: cell.x * CELL + CELL / 2,
    y: cell.y * CELL + CELL / 2,
    start: Date.now(),
  }];
}

function queueChronoActivationBursts() {
  queueChronoActivationBurstsAt(snake?.[0]);
}

function warpChronoPoint(px, py, cellCx, cellCy, hx, hy, frame, elapsed, intensity, burst) {
  const dx = cellCx - hx;
  const dy = cellCy - hy;
  const dist = Math.hypot(dx, dy) || 1;
  const phase = dist * 0.085 - frame * 0.1 - elapsed * 0.0035 + (px - cellCx + py - cellCy) * 0.015;
  const wave = Math.sin(phase);
  const wave2 = Math.cos(phase * 1.37 + 0.8);
  const falloff = Math.max(0, 1 - dist / (canvas.width * 0.68));
  const amp = CELL * (0.12 + burst * 0.18) * falloff * intensity;
  const ux = dx / dist;
  const uy = dy / dist;
  const ox = (ux * wave + uy * wave2 * 0.42) * amp;
  const oy = (uy * wave - ux * wave2 * 0.42) * amp;
  return { x: px + ox, y: py + oy, wave, falloff };
}

function drawChronoGridWarp() {
  if (!isChronoEffectActive()) return;

  const elapsed = getChronoEffectElapsed();
  const frame = frameCount || 0;
  const intensity = Math.min(1, elapsed / 320);
  const burst = elapsed < 700 ? (1 - elapsed / 700) * 1 : 0;
  const head = getChronoEffectCenter();
  const hx = head ? head.x * CELL + CELL / 2 : canvas.width / 2;
  const hy = head ? head.y * CELL + CELL / 2 : canvas.height / 2;

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';

  for (let gx = 0; gx < GRID_SIZE; gx++) {
    for (let gy = 0; gy < GRID_SIZE; gy++) {
      const x0 = gx * CELL;
      const y0 = gy * CELL;
      const cellCx = x0 + CELL / 2;
      const cellCy = y0 + CELL / 2;
      const corners = [
        warpChronoPoint(x0, y0, cellCx, cellCy, hx, hy, frame, elapsed, intensity, burst),
        warpChronoPoint(x0 + CELL, y0, cellCx, cellCy, hx, hy, frame, elapsed, intensity, burst),
        warpChronoPoint(x0 + CELL, y0 + CELL, cellCx, cellCy, hx, hy, frame, elapsed, intensity, burst),
        warpChronoPoint(x0, y0 + CELL, cellCx, cellCy, hx, hy, frame, elapsed, intensity, burst),
      ];

      const warpStrength = Math.abs(corners[0].wave) * corners[0].falloff * intensity;
      if (warpStrength < 0.04) continue;

      const fillAlpha = 0.04 + warpStrength * 0.1;
      ctx.fillStyle = `rgba(128, 222, 234, ${fillAlpha})`;
      ctx.beginPath();
      ctx.moveTo(corners[0].x, corners[0].y);
      corners.slice(1).forEach((pt) => ctx.lineTo(pt.x, pt.y));
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = `rgba(255, 215, 0, ${0.12 + warpStrength * 0.35})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      if (warpStrength > 0.18) {
        const midTop = {
          x: (corners[0].x + corners[1].x) / 2,
          y: (corners[0].y + corners[1].y) / 2,
        };
        const midBottom = {
          x: (corners[2].x + corners[3].x) / 2,
          y: (corners[2].y + corners[3].y) / 2,
        };
        const midLeft = {
          x: (corners[0].x + corners[3].x) / 2,
          y: (corners[0].y + corners[3].y) / 2,
        };
        const midRight = {
          x: (corners[1].x + corners[2].x) / 2,
          y: (corners[1].y + corners[2].y) / 2,
        };
        ctx.strokeStyle = `rgba(180, 230, 255, ${warpStrength * 0.22})`;
        ctx.beginPath();
        ctx.moveTo(midLeft.x, midLeft.y);
        ctx.lineTo(midRight.x, midRight.y);
        ctx.moveTo(midTop.x, midTop.y);
        ctx.lineTo(midBottom.x, midBottom.y);
        ctx.stroke();
      }
    }
  }

  ctx.restore();
}

function drawChronoTimeStopFx() {
  if (!isChronoEffectActive()) return;
  if (!Array.isArray(chronoActivationBursts)) chronoActivationBursts = [];

  const size = canvas.width;
  if (!size) return;

  drawChronoGridWarp();

  const elapsed = getChronoEffectElapsed();
  const frame = frameCount || 0;
  const head = getChronoEffectCenter();
  const hx = head ? head.x * CELL + CELL / 2 : size / 2;
  const hy = head ? head.y * CELL + CELL / 2 : size / 2;
  const cx = size / 2;

  ctx.save();

  if (elapsed < 200) {
    const flashT = 1 - elapsed / 200;
    ctx.strokeStyle = `rgba(255, 215, 0, ${0.45 * flashT})`;
    ctx.lineWidth = 2;
    ctx.strokeRect(1.5, 1.5, size - 3, size - 3);
  }

  const edgePulse = 0.06 + 0.025 * Math.sin(frame * 0.1);
  ctx.fillStyle = `rgba(80, 120, 220, ${edgePulse})`;
  ctx.fillRect(0, 0, size, 3);
  ctx.fillRect(0, size - 3, size, 3);
  ctx.fillRect(0, 0, 3, size);
  ctx.fillRect(size - 3, 0, 3, size);

  chronoActivationBursts = chronoActivationBursts.filter((burst) => {
    const t = (Date.now() - burst.start) / 650;
    if (t < 0 || t > 1) return t <= 0;

    const radius = t * size * 0.5;
    if (radius <= 1) return true;

    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = `rgba(255, 215, 0, ${(1 - t) * 0.45})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(burst.x, burst.y, radius, 0, Math.PI * 2);
    ctx.stroke();
    return true;
  });

  if (head) {
    const pulse = 0.65 + 0.35 * Math.sin(frame * 0.14);
    ctx.globalCompositeOperation = 'lighter';
    const auraR = CELL * 2.6;
    const headGrad = ctx.createRadialGradient(hx, hy, 0, hx, hy, auraR);
    headGrad.addColorStop(0, `rgba(255, 215, 0, ${0.16 * pulse})`);
    headGrad.addColorStop(0.55, `rgba(128, 222, 234, ${0.07 * pulse})`);
    headGrad.addColorStop(1, 'rgba(128, 222, 234, 0)');
    ctx.fillStyle = headGrad;
    ctx.beginPath();
    ctx.arc(hx, hy, auraR, 0, Math.PI * 2);
    ctx.fill();

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 + frame * 0.005;
      const dist = CELL * 1.7;
      ctx.fillStyle = `rgba(255, 215, 0, ${0.3 * pulse})`;
      ctx.fillRect(hx + Math.cos(angle) * dist - 1, hy + Math.sin(angle) * dist - 1, 2, 2);
    }
  }

  if (elapsed < 1200) {
    const textT = elapsed < 80
      ? elapsed / 80
      : elapsed > 850
        ? 1 - (elapsed - 850) / 350
        : 1;
    const fontSize = Math.max(10, Math.floor(size * 0.03));
    const label = 'TIME DILATION';

    ctx.globalCompositeOperation = 'source-over';
    ctx.font = `700 ${fontSize}px "Segoe UI", system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const tw = ctx.measureText(label).width;
    const padX = 8;
    const padY = 5;
    const bx = cx - tw / 2 - padX;
    const by = 6;
    const bh = fontSize + padY * 2;

    ctx.fillStyle = `rgba(8, 12, 32, ${0.65 * textT})`;
    ctx.fillRect(bx, by, tw + padX * 2, bh);
    ctx.strokeStyle = `rgba(255, 215, 0, ${0.75 * textT})`;
    ctx.lineWidth = 1;
    ctx.strokeRect(bx + 0.5, by + 0.5, tw + padX * 2 - 1, bh - 1);
    ctx.fillStyle = `rgba(255, 215, 0, ${textT})`;
    ctx.fillText(label, cx, by + bh / 2);
  }

  ctx.restore();
}

function drawShadowFieldDim() {
  if (!isShadowPullActive() || !snake?.length) return;

  const mouth = getSnakeMouthPixel();
  const intensity = getShadowPullIntensity();
  const frame = frameCount || 0;
  const pulse = 0.72 + 0.28 * Math.sin(frame * 0.18);
  const radius = Math.max(canvas.width, canvas.height) * 0.85;

  ctx.save();
  const vignette = ctx.createRadialGradient(mouth.x, mouth.y, CELL * 0.5, mouth.x, mouth.y, radius);
  vignette.addColorStop(0, `rgba(10, 8, 24, ${0.08 * intensity})`);
  vignette.addColorStop(0.45, `rgba(8, 6, 18, ${0.22 * intensity * pulse})`);
  vignette.addColorStop(1, `rgba(4, 2, 12, ${0.42 * intensity})`);
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

function drawShadowPullStreams() {
  if (!isShadowPullActive() || !snake?.length) return;

  const mouth = getSnakeMouthPixel();
  const frame = frameCount || 0;
  const pulse = 0.5 + 0.5 * Math.sin(frame * 0.32);
  const intensity = getShadowPullIntensity();

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';

  apples.forEach((item, index) => {
    if (item.type !== 'normal' && item.type !== 'golden') return;

    const ix = item.x * CELL + CELL / 2;
    const iy = item.y * CELL + CELL / 2;
    const color = item.type === 'golden' ? '#c9a227' : '#7b68ee';
    const mx = (ix + mouth.x) / 2;
    const my = (iy + mouth.y) / 2;
    const dx = mouth.x - ix;
    const dy = mouth.y - iy;
    const len = Math.hypot(dx, dy) || 1;
    const swirl = Math.sin(frame * 0.22 + index * 0.9) * CELL * 0.55;
    const cpx = mx + (-dy / len) * swirl;
    const cpy = my + (dx / len) * swirl;

    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 14;
    ctx.shadowColor = color;
    ctx.globalAlpha = 0.28 * pulse * intensity;
    ctx.beginPath();
    ctx.moveTo(ix, iy);
    ctx.quadraticCurveTo(cpx, cpy, mouth.x, mouth.y);
    ctx.stroke();

    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 0.14 * intensity;
    ctx.setLineDash([3, 5]);
    ctx.stroke();
    ctx.setLineDash([]);

    const sparkT = (frame * 0.1 + index * 0.17) % 1;
    const spark = getQuadraticPoint(ix, iy, cpx, cpy, mouth.x, mouth.y, sparkT);
    ctx.globalAlpha = 0.9 * intensity;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(spark.x, spark.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(spark.x, spark.y, 4.5, 0, Math.PI * 2);
    ctx.fill();

    const trailT = (sparkT + 0.18) % 1;
    const trail = getQuadraticPoint(ix, iy, cpx, cpy, mouth.x, mouth.y, trailT);
    ctx.globalAlpha = 0.35 * intensity;
    ctx.beginPath();
    ctx.arc(trail.x, trail.y, 2, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();
}

function drawShadowRepelStreams() {
  if (!isShadowPullActive() || !snake?.length) return;

  const mouth = getSnakeMouthPixel();
  const head = snake[0];
  const frame = frameCount || 0;
  const pulse = 0.55 + 0.45 * Math.sin(frame * 0.28);
  const intensity = getShadowPullIntensity();

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';

  apples.forEach((item, index) => {
    if (item.type !== 'black' && item.type !== 'bomb') return;

    const ix = item.x * CELL + CELL / 2;
    const iy = item.y * CELL + CELL / 2;
    const dx = ix - mouth.x;
    const dy = iy - mouth.y;
    const len = Math.hypot(dx, dy) || 1;
    const nx = dx / len;
    const ny = dy / len;
    const pushLen = CELL * (1.1 + 0.25 * Math.sin(frame * 0.2 + index));
    const ex = ix + nx * pushLen;
    const ey = iy + ny * pushLen;
    const color = item.type === 'bomb' ? '#ff6b35' : '#8b2252';
    const mx = (ix + ex) / 2;
    const my = (iy + ey) / 2;
    const swirl = Math.cos(frame * 0.25 + index) * CELL * 0.35;
    const cpx = mx + (-ny) * swirl;
    const cpy = my + nx * swirl;

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 12;
    ctx.shadowColor = color;
    ctx.globalAlpha = 0.34 * pulse * intensity;
    ctx.beginPath();
    ctx.moveTo(ix, iy);
    ctx.quadraticCurveTo(cpx, cpy, ex, ey);
    ctx.stroke();

    const ringRadius = CELL * (0.28 + 0.08 * Math.sin(frame * 0.35 + index));
    ctx.globalAlpha = 0.22 * intensity;
    ctx.beginPath();
    ctx.arc(ix, iy, ringRadius, 0, Math.PI * 2);
    ctx.stroke();

    const awayX = head.x + (item.x - head.x);
    const awayY = head.y + (item.y - head.y);
    const ax = awayX * CELL + CELL / 2;
    const ay = awayY * CELL + CELL / 2;
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.55 * intensity;
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(ax - nx * 5 + ny * 3, ay - ny * 5 - nx * 3);
    ctx.lineTo(ax - nx * 5 - ny * 3, ay - ny * 5 + nx * 3);
    ctx.closePath();
    ctx.fill();
  });

  ctx.restore();
}

function drawShadowSnakeAura() {
  if (!isShadowPullActive() || !snake?.length) return;

  const frame = frameCount || 0;
  const pulse = 0.5 + 0.5 * Math.sin(frame * 0.24);
  const intensity = getShadowPullIntensity();

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';

  snake.forEach((seg, index) => {
    const px = seg.x * CELL + CELL / 2;
    const py = seg.y * CELL + CELL / 2;
    const headBoost = index === 0 ? 1.25 : 1;
    const radius = CELL * (0.34 + (index === 0 ? 0.12 : 0) + Math.sin(frame * 0.18 + index * 0.5) * 0.04);

    const grad = ctx.createRadialGradient(px, py, 0, px, py, radius * headBoost);
    grad.addColorStop(0, `rgba(157, 157, 199, ${0.35 * pulse * intensity})`);
    grad.addColorStop(0.55, `rgba(74, 74, 106, ${0.22 * intensity})`);
    grad.addColorStop(1, 'rgba(26, 26, 46, 0)');

    ctx.globalAlpha = 0.85;
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(px, py, radius * headBoost, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();
}

function drawShadowVoidVortex() {
  if (!isShadowPullActive() || !snake?.length) return;

  const mouth = getSnakeMouthPixel();
  const frame = frameCount || 0;
  const pulse = 0.45 + 0.55 * Math.sin(frame * 0.38);
  const intensity = getShadowPullIntensity();

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';

  for (let ring = 0; ring < 4; ring++) {
    const radius = CELL * (0.38 + ring * 0.2) + Math.sin(frame * 0.3 + ring * 1.2) * 2.5;
    const alpha = (0.42 - ring * 0.08) * pulse * intensity;
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = ring === 0 ? '#e8e8ff' : ring === 1 ? '#9d9dc7' : ring === 2 ? '#6b6b9e' : '#2d2d44';
    ctx.lineWidth = 3.5 - ring * 0.6;
    ctx.shadowBlur = 16 - ring * 2;
    ctx.shadowColor = '#4a4a6a';
    ctx.beginPath();
    ctx.arc(
      mouth.x,
      mouth.y,
      radius,
      frame * 0.12 + ring * 0.8,
      frame * 0.12 + ring * 0.8 + Math.PI * (1.15 + ring * 0.08)
    );
    ctx.stroke();
  }

  const voidGrad = ctx.createRadialGradient(mouth.x, mouth.y, 0, mouth.x, mouth.y, CELL * 0.95);
  voidGrad.addColorStop(0, `rgba(8, 6, 20, ${0.92 * intensity})`);
  voidGrad.addColorStop(0.35, `rgba(45, 45, 68, ${0.55 * pulse * intensity})`);
  voidGrad.addColorStop(0.7, `rgba(107, 107, 158, ${0.22 * intensity})`);
  voidGrad.addColorStop(1, 'rgba(26, 26, 46, 0)');
  ctx.globalAlpha = 0.95;
  ctx.fillStyle = voidGrad;
  ctx.beginPath();
  ctx.arc(mouth.x, mouth.y, CELL * 0.9, 0, Math.PI * 2);
  ctx.fill();

  for (let wisp = 0; wisp < 6; wisp++) {
    const angle = frame * 0.09 + (Math.PI * 2 * wisp) / 6;
    const dist = CELL * (0.55 + 0.12 * Math.sin(frame * 0.2 + wisp));
    const wx = mouth.x + Math.cos(angle) * dist;
    const wy = mouth.y + Math.sin(angle) * dist;
    ctx.globalAlpha = 0.35 * intensity;
    ctx.fillStyle = '#c4c4e8';
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#9d9dc7';
    ctx.beginPath();
    ctx.arc(wx, wy, 2 + (wisp % 2), 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(157, 157, 199, 0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(wx, wy);
    ctx.lineTo(mouth.x, mouth.y);
    ctx.stroke();
  }

  ctx.restore();
}

function drawShadowPullBursts() {
  if (!shadowPullBursts?.length) return;

  const now = Date.now();
  shadowPullBursts = shadowPullBursts.filter((burst) => now - burst.start < SHADOW_BURST_MS);

  shadowPullBursts.forEach((burst) => {
    const t = (now - burst.start) / SHADOW_BURST_MS;
    const alpha = 1 - t;
    const isRepel = burst.kind === 'repel';
    const color = isRepel
      ? burst.itemType === 'bomb' ? '#ff6b35' : '#8b2252'
      : burst.itemType === 'golden' ? '#ffd700' : '#7b68ee';
    const radius = CELL * (0.25 + t * (isRepel ? 1.1 : 0.85));

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = alpha * 0.75;
    ctx.strokeStyle = color;
    ctx.lineWidth = isRepel ? 2.5 : 3;
    ctx.shadowBlur = 14;
    ctx.shadowColor = color;
    ctx.beginPath();
    ctx.arc(burst.x, burst.y, radius, 0, Math.PI * 2);
    ctx.stroke();

    if (!isRepel) {
      ctx.globalAlpha = alpha * 0.5;
      ctx.beginPath();
      ctx.arc(burst.x, burst.y, radius * 0.55, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.fillStyle = '#ffffff';
    ctx.globalAlpha = alpha * 0.65;
    ctx.beginPath();
    ctx.arc(burst.x, burst.y, Math.max(1, radius * 0.28), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
}

function drawRiftTeleportEffect() {
  if (!isRiftTeleportEffectActive()) return;

  const elapsed = Date.now() - (riftTeleportEffectUntil - RIFT_TELEPORT_EFFECT_MS);
  const progress = Math.min(1, elapsed / RIFT_TELEPORT_EFFECT_MS);
  const centerX = Math.floor(BASE_GRID_SIZE / 2) * CELL + CELL / 2;
  const centerY = Math.floor(BASE_GRID_SIZE / 2) * CELL + CELL / 2;
  const radius = (CELL * 2.5 + progress * CELL * 8) * (1 - progress * 0.35);
  const alpha = (1 - progress) * 0.75;

  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = '#e0aaff';
  ctx.lineWidth = 4;
  ctx.shadowBlur = 18;
  ctx.shadowColor = '#c77dff';
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = 'rgba(224, 170, 255, 0.35)';
  ctx.beginPath();
  ctx.arc(centerX, centerY, Math.max(2, radius * 0.45), 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  if (progress >= 1) {
    riftTeleportEffectUntil = 0;
  }
}

function isPhoenixRebirthEffectActive() {
  return phoenixRebirthEffectUntil > 0 && Date.now() < phoenixRebirthEffectUntil;
}

function drawPhoenixRebirthEffect() {
  if (!isPhoenixRebirthEffectActive() || !snake?.length) return;

  const elapsed = Date.now() - (phoenixRebirthEffectUntil - PHOENIX_REBIRTH_EFFECT_MS);
  const progress = Math.min(1, elapsed / PHOENIX_REBIRTH_EFFECT_MS);
  const head = snake[0];
  const cx = head.x * CELL + CELL / 2;
  const cy = head.y * CELL + CELL / 2;
  const frame = frameCount || 0;
  const pulse = 0.55 + 0.45 * Math.sin(frame * 0.3);
  const fade = (1 - progress) * (1 - progress * 0.35);

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';

  const wash = ctx.createRadialGradient(cx, cy, 0, cx, cy, CELL * 9);
  wash.addColorStop(0, `rgba(255, 210, 80, ${0.32 * fade})`);
  wash.addColorStop(0.45, `rgba(255, 120, 30, ${0.14 * fade})`);
  wash.addColorStop(1, 'rgba(180, 30, 0, 0)');
  ctx.globalAlpha = 1;
  ctx.fillStyle = wash;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const ringColors = ['#fff5a0', '#ffcc33', '#ff6b20', '#e43b44'];
  for (let ring = 0; ring < 4; ring++) {
    const ringT = Math.min(1, progress * 1.35 + ring * 0.07);
    const radius = CELL * (0.4 + ringT * (4.5 + ring));
    const ringAlpha = fade * (0.6 - ring * 0.11) * (1 - ringT * 0.65);

    ctx.globalAlpha = ringAlpha * pulse;
    ctx.strokeStyle = ringColors[ring];
    ctx.lineWidth = 4 - ring * 0.6;
    ctx.shadowBlur = 22;
    ctx.shadowColor = ringColors[ring];
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();
  }

  const wingSpread = CELL * (1.2 + progress * 3.5);
  const wingTilt = 0.55 - progress * 0.15;
  for (let side = -1; side <= 1; side += 2) {
    ctx.globalAlpha = fade * 0.55;
    ctx.strokeStyle = side < 0 ? '#ffcc33' : '#ff6b20';
    ctx.lineWidth = 3;
    ctx.shadowBlur = 18;
    ctx.shadowColor = '#ff4500';
    ctx.beginPath();
    ctx.arc(
      cx + side * wingSpread * 0.25,
      cy + CELL * 0.15,
      wingSpread,
      -Math.PI / 2 - wingTilt,
      -Math.PI / 2 + wingTilt,
      side < 0
    );
    ctx.stroke();
  }

  const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, CELL * 2.2);
  coreGrad.addColorStop(0, `rgba(255, 255, 230, ${0.95 * fade})`);
  coreGrad.addColorStop(0.25, `rgba(255, 200, 50, ${0.75 * fade})`);
  coreGrad.addColorStop(0.55, `rgba(255, 90, 20, ${0.4 * fade})`);
  coreGrad.addColorStop(1, 'rgba(200, 30, 0, 0)');
  ctx.globalAlpha = 0.92;
  ctx.fillStyle = coreGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, CELL * (1.2 + progress * 0.8), 0, Math.PI * 2);
  ctx.fill();

  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2 + progress * 5 + frame * 0.04;
    const dist = CELL * (0.35 + progress * (2.2 + (i % 3) * 0.4));
    const rise = progress * CELL * (1.2 + (i % 5) * 0.25);
    const sx = cx + Math.cos(angle) * dist;
    const sy = cy + Math.sin(angle) * dist * 0.55 - rise;
    const size = 2 + (i % 3);
    const emberColors = ['#fff5a0', '#ffcc33', '#ef7d57', '#e43b44'];

    ctx.globalAlpha = fade * (0.95 - progress * 0.55);
    ctx.fillStyle = emberColors[i % emberColors.length];
    ctx.shadowBlur = 7;
    ctx.shadowColor = '#ff4500';
    ctx.fillRect(sx - size / 2, sy - size / 2, size, size);
  }

  if (progress < 0.35) {
    const flash = 1 - progress / 0.35;
    ctx.globalAlpha = flash * 0.25;
    ctx.fillStyle = '#fff5a0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  ctx.restore();

  if (progress >= 1) {
    phoenixRebirthEffectUntil = 0;
  }
}

function getLaserEndpointFromAngle(angle) {
  const head = snake[0];
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  let tMax = isBotsMode() ? BOTS_ATOMIC_BREATH_RANGE : GRID_SIZE * 2;

  if (Math.abs(cos) > 1e-6) {
    const tx = cos > 0 ? (GRID_SIZE - 1 - head.x) / cos : -head.x / cos;
    if (tx > 0) tMax = Math.min(tMax, tx);
  }
  if (Math.abs(sin) > 1e-6) {
    const ty = sin > 0 ? (GRID_SIZE - 1 - head.y) / sin : -head.y / sin;
    if (ty > 0) tMax = Math.min(tMax, ty);
  }

  return {
    x: head.x + cos * tMax,
    y: head.y + sin * tMax,
  };
}

function getLaserEndpoint(step) {
  const angle = (step / GODZILLA_ATOMIC_STEPS) * Math.PI * 2;
  return getLaserEndpointFromAngle(angle);
}

function bresenhamLine(x0, y0, x1, y1) {
  const cells = [];
  let x = x0;
  let y = y0;
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  while (true) {
    if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
      cells.push({ x, y });
    }
    if (x === x1 && y === y1) break;
    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x += sx;
    }
    if (e2 < dx) {
      err += dx;
      y += sy;
    }
  }

  return cells;
}

function getLaserLineCells(step) {
  const head = snake[0];
  const end = getLaserEndpoint(step);
  return bresenhamLine(head.x, head.y, end.x, end.y);
}

function queueAtomicBreathBurst(item) {
  atomicBreathBursts.push({
    x: item.x * CELL + CELL / 2,
    y: item.y * CELL + CELL / 2,
    type: item.type,
    start: Date.now(),
  });
}

function vaporizeItemByIndex(index) {
  const item = apples[index];
  if (!item) return false;
  if (isAtomicBreathActive()) {
    queueAtomicBreathBurst(item);
  }
  if (
    isBotsMode()
    && isAppleHuntMode()
    && (item.type === 'normal' || item.type === 'golden')
  ) {
    return destroyBotsAppleFromAbility(item.x, item.y, 'player');
  }
  if (item.type === 'normal' || item.type === 'golden') {
    if (!isBotsMode()) {
      applyGoodAppleReward(item);
    }
  }
  apples.splice(index, 1);
  return true;
}

function isAngleInSweep(angle, sweepStart, sweepEnd) {
  if (sweepEnd >= sweepStart) {
    return angle >= sweepStart && angle < sweepEnd;
  }
  return angle >= sweepStart || angle < sweepEnd;
}

function vaporizeItemsInAngleSweep(sweepStart, sweepEnd) {
  if (sweepEnd <= sweepStart) return false;

  const head = snake[0];
  let changed = false;

  for (let i = apples.length - 1; i >= 0; i--) {
    const item = apples[i];
    const dx = item.x - head.x;
    const dy = item.y - head.y;
    let angle = 0;

    if (dx !== 0 || dy !== 0) {
      angle = Math.atan2(dy, dx);
      if (angle < 0) angle += Math.PI * 2;
    }

    const dist = Math.hypot(dx, dy);
    if (isBotsMode() && dist > BOTS_ATOMIC_BREATH_RANGE) continue;

    if (isAngleInSweep(angle, sweepStart, sweepEnd) && vaporizeItemByIndex(i)) {
      changed = true;
    }
  }

  return changed;
}

function isPointInAtomicSweep(px, py, head, sweepStart, sweepEnd) {
  const dx = px - head.x;
  const dy = py - head.y;
  const dist = Math.hypot(dx, dy);
  if (dist > BOTS_ATOMIC_BREATH_RANGE) return false;

  if (dx === 0 && dy === 0) return isAngleInSweep(0, sweepStart, sweepEnd);

  let angle = Math.atan2(dy, dx);
  if (angle < 0) angle += Math.PI * 2;
  return isAngleInSweep(angle, sweepStart, sweepEnd);
}

function damageBotsInAtomicSweep(sweepStart, sweepEnd) {
  if (!isBotsMode() || sweepEnd <= sweepStart || !snake?.[0]) return false;

  const head = snake[0];
  if (!atomicBreathDamagedBotIds) atomicBreathDamagedBotIds = new Set();

  let changed = false;
  for (const bot of botSnakes) {
    if (!bot.alive || !bot.snake?.length) continue;
    if (atomicBreathDamagedBotIds.has(bot.id)) continue;

    const hit = bot.snake.some((seg) => isPointInAtomicSweep(seg.x, seg.y, head, sweepStart, sweepEnd));
    if (!hit) continue;

    atomicBreathDamagedBotIds.add(bot.id);
    if (absorbBotsForcefieldHit(bot)) {
      changed = true;
      continue;
    }
    shrinkBotSnakeInBots(bot, BOTS_ATOMIC_BREATH_BOT_DAMAGE);
    changed = true;
  }

  return changed;
}

function updateAtomicBreath() {
  clearExpiredAtomicBreath();
  if (!isAtomicBreathActive()) return false;

  const sweepAngle = getSmoothAtomicAngle();
  let changed = false;

  if (sweepAngle > atomicBreathLastSweepAngle) {
    if (vaporizeItemsInAngleSweep(atomicBreathLastSweepAngle, sweepAngle)) {
      changed = true;
    }
    if (damageBotsInAtomicSweep(atomicBreathLastSweepAngle, sweepAngle)) {
      changed = true;
    }
    if (changed) updateHud();
    atomicBreathLastSweepAngle = sweepAngle;
  }

  if (!isBotsMode() && getAtomicBreathProgress() >= 1) {
    while (apples.length > 0) {
      vaporizeItemByIndex(0);
      changed = true;
    }
    if (changed) updateHud();
  }

  return changed;
}

function drawAtomicBreath() {
  if (!isAtomicBreathActive() || !Array.isArray(snake) || snake.length === 0) return;

  const head = snake[0];
  if (!head || !Number.isFinite(head.x) || !Number.isFinite(head.y)) return;

  const hx = head.x * CELL + CELL / 2;
  const hy = head.y * CELL + CELL / 2;
  const progress = Number.isFinite(getAtomicBreathProgress()) ? getAtomicBreathProgress() : 0;
  const baseAngle = Number.isFinite(getSmoothAtomicAngle()) ? getSmoothAtomicAngle() : 0;
  const pulse = getAtomicBreathPulse();
  const safeFrame = Number.isFinite(frameCount) ? frameCount : 0;
  const wobble = Math.sin(safeFrame * 0.6) * 0.04;

  const drawBeamStroke = (angle, alpha, width, color, blur) => {
    const end = getLaserEndpointFromAngle(angle);
    const ex = end.x * CELL + CELL / 2;
    const ey = end.y * CELL + CELL / 2;

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.shadowBlur = blur;
    ctx.shadowColor = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(hx, hy);
    ctx.lineTo(ex, ey);
    ctx.stroke();
    ctx.restore();
  };

  const sectorSize = (Math.PI * 2) / GODZILLA_ATOMIC_STEPS;
  for (let i = GODZILLA_ATOMIC_TRAIL_SECTORS; i >= 1; i--) {
    const trailAngle = baseAngle - i * sectorSize * 0.55;
    const fade = 1 - i / (GODZILLA_ATOMIC_TRAIL_SECTORS + 1);
    drawBeamStroke(
      trailAngle,
      0.08 * fade,
      26 * fade + 6,
      'rgba(0, 80, 220, 0.9)',
      18 * fade
    );
    drawBeamStroke(
      trailAngle,
      0.12 * fade,
      14 * fade + 4,
      'rgba(0, 170, 255, 0.85)',
      10 * fade
    );
  }

  const beamAngle = baseAngle + wobble;
  drawBeamStroke(beamAngle, 0.28 * pulse, 28, 'rgba(0, 60, 200, 0.95)', 22);
  drawBeamStroke(beamAngle, 0.42 * pulse, 20, 'rgba(0, 140, 255, 0.9)', 16);
  drawBeamStroke(beamAngle, 0.65 * pulse, 12, 'rgba(80, 220, 255, 0.95)', 10);
  drawBeamStroke(beamAngle, 0.9 * pulse, 6, 'rgba(200, 250, 255, 0.98)', 6);
  drawBeamStroke(beamAngle, 1, 2.5, '#ffffff', 2);

  const sparkCount = 10;
  for (let i = 0; i < sparkCount; i++) {
    const t = ((safeFrame * 0.07 + i * 0.17) % 1) * 0.92 + 0.04;
    const sparkAngle = beamAngle + Math.sin(safeFrame * 0.25 + i) * 0.06;
    const end = getLaserEndpointFromAngle(sparkAngle);
    const sx = hx + (end.x * CELL + CELL / 2 - hx) * t;
    const sy = hy + (end.y * CELL + CELL / 2 - hy) * t;
    const sparkSize = 2 + (i % 3);

    ctx.save();
    ctx.globalAlpha = 0.5 + 0.5 * Math.sin(safeFrame * 0.5 + i);
    ctx.fillStyle = i % 2 === 0 ? '#e0f7ff' : '#7dd3fc';
    ctx.shadowBlur = 6;
    ctx.shadowColor = '#38bdf8';
    ctx.beginPath();
    ctx.arc(sx, sy, sparkSize, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  const mouthGrad = ctx.createRadialGradient(hx, hy, 0, hx, hy, CELL * 1.35);
  mouthGrad.addColorStop(0, rgbaAlpha(255, 255, 255, 0.95 * pulse));
  mouthGrad.addColorStop(0.25, rgbaAlpha(120, 230, 255, 0.75 * pulse));
  mouthGrad.addColorStop(0.55, rgbaAlpha(0, 140, 255, 0.45 * pulse));
  mouthGrad.addColorStop(1, 'rgba(0, 60, 180, 0)');

  ctx.save();
  ctx.globalAlpha = 0.85;
  ctx.fillStyle = mouthGrad;
  ctx.beginPath();
  ctx.arc(hx, hy, CELL * 1.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  const ringPulse = 0.4 + 0.6 * Math.sin(safeFrame * 0.2);
  ctx.save();
  ctx.globalAlpha = 0.35 * ringPulse * (1 - progress * 0.35);
  ctx.strokeStyle = 'rgba(0, 180, 255, 0.8)';
  ctx.lineWidth = 3;
  ctx.shadowBlur = 14;
  ctx.shadowColor = '#0ea5e9';
  ctx.beginPath();
  ctx.arc(hx, hy, CELL * (0.85 + progress * 0.55), 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawAtomicBreathBursts() {
  if (!atomicBreathBursts?.length) return;

  const now = Date.now();
  atomicBreathBursts = atomicBreathBursts.filter((burst) => now - burst.start < ATOMIC_BREATH_BURST_MS);

  const palettes = {
    normal: { ring: '#38bdf8', glow: '#0ea5e9', core: '#ef7d57', spark: '#7dd3fc' },
    golden: { ring: '#fff5a0', glow: '#ffcc33', core: '#ffffff', spark: '#ffe566' },
    black: { ring: '#9d4edd', glow: '#7b2cbf', core: '#2d2d44', spark: '#c77dff' },
    bomb: { ring: '#ef7d57', glow: '#ff4500', core: '#ffcc33', spark: '#ffffff' },
  };

  atomicBreathBursts.forEach((burst) => {
    const t = (now - burst.start) / ATOMIC_BREATH_BURST_MS;
    const alpha = 1 - t * t;
    const radius = CELL * (0.2 + t * 1.25);
    const palette = palettes[burst.type] || palettes.normal;

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    ctx.globalAlpha = alpha * 0.75;
    ctx.strokeStyle = palette.ring;
    ctx.lineWidth = 3 - t;
    ctx.shadowBlur = 16;
    ctx.shadowColor = palette.glow;
    ctx.beginPath();
    ctx.arc(burst.x, burst.y, radius, 0, Math.PI * 2);
    ctx.stroke();

    ctx.globalAlpha = alpha * 0.55;
    ctx.strokeStyle = '#e0f7ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(burst.x, burst.y, radius * 0.55, 0, Math.PI * 2);
    ctx.stroke();

    ctx.globalAlpha = alpha * 0.95;
    ctx.fillStyle = palette.core;
    ctx.shadowBlur = 10;
    ctx.shadowColor = palette.glow;
    ctx.beginPath();
    ctx.arc(burst.x, burst.y, Math.max(1, CELL * 0.22 * (1 - t * 0.6)), 0, Math.PI * 2);
    ctx.fill();

    const sparkCount = 8;
    for (let i = 0; i < sparkCount; i++) {
      const angle = (i / sparkCount) * Math.PI * 2 + t * 3.5;
      const dist = radius * (0.65 + t * 0.85);
      const sx = burst.x + Math.cos(angle) * dist;
      const sy = burst.y + Math.sin(angle) * dist;
      const size = 2 + (i % 2);

      ctx.globalAlpha = alpha * (0.9 - t * 0.4);
      ctx.fillStyle = i % 2 === 0 ? '#e0f7ff' : palette.spark;
      ctx.shadowBlur = 6;
      ctx.shadowColor = palette.glow;
      ctx.fillRect(sx - size / 2, sy - size / 2, size, size);
    }

    ctx.restore();
  });
}

function queueItemHitBurst(gridX, gridY, itemType, effect) {
  itemHitBursts.push({
    x: gridX * CELL + CELL / 2,
    y: gridY * CELL + CELL / 2,
    itemType,
    effect,
    start: Date.now(),
  });
}

function drawItemHitBursts() {
  if (!itemHitBursts?.length) return;

  const now = Date.now();
  itemHitBursts = itemHitBursts.filter((burst) => now - burst.start < ITEM_HIT_BURST_MS);

  itemHitBursts.forEach((burst) => {
    const t = (now - burst.start) / ITEM_HIT_BURST_MS;
    const alpha = 1 - t * t;

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    if (burst.effect === 'fire') {
      const radius = CELL * (0.18 + t * 1.05);
      const flicker = 0.85 + 0.15 * Math.sin((burst.start / 40) + t * 12);

      const fireGrad = ctx.createRadialGradient(burst.x, burst.y, 0, burst.x, burst.y, radius);
      fireGrad.addColorStop(0, `rgba(255, 255, 220, ${alpha * flicker})`);
      fireGrad.addColorStop(0.35, `rgba(255, 180, 40, ${alpha * 0.85})`);
      fireGrad.addColorStop(0.7, `rgba(255, 80, 20, ${alpha * 0.55})`);
      fireGrad.addColorStop(1, 'rgba(180, 20, 0, 0)');

      ctx.globalAlpha = 0.9;
      ctx.fillStyle = fireGrad;
      ctx.shadowBlur = 14;
      ctx.shadowColor = '#ff6b20';
      ctx.beginPath();
      ctx.arc(burst.x, burst.y, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = alpha * 0.7;
      ctx.strokeStyle = '#ffcd75';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(burst.x, burst.y, radius * 0.65, 0, Math.PI * 2);
      ctx.stroke();

      for (let i = 0; i < 7; i++) {
        const angle = (i / 7) * Math.PI * 2 + t * 4;
        const dist = radius * (0.5 + t * 0.9);
        const sx = burst.x + Math.cos(angle) * dist;
        const sy = burst.y + Math.sin(angle) * dist - t * CELL * 0.35;
        const size = 2 + (i % 2);

        ctx.globalAlpha = alpha * (0.95 - t * 0.5);
        ctx.fillStyle = i % 2 === 0 ? '#ffcd75' : '#e43b44';
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#ff4500';
        ctx.fillRect(sx - size / 2, sy - size / 2, size, size);
      }

      for (let i = 0; i < 4; i++) {
        const sx = burst.x + (i - 1.5) * 3;
        const sy = burst.y - t * CELL * (0.6 + i * 0.15) - 2;
        ctx.globalAlpha = alpha * (0.8 - t * 0.6);
        ctx.fillStyle = i % 2 === 0 ? '#fff0a0' : '#ef7d57';
        ctx.fillRect(sx, sy, 2, 3);
      }
    } else if (burst.effect === 'phantom') {
      const radius = CELL * (0.15 + t * 0.95);
      const color = burst.itemType === 'golden' ? '#ffd700' : '#c77dff';

      ctx.globalAlpha = alpha * 0.8;
      ctx.strokeStyle = color;
      ctx.lineWidth = 3 - t * 1.5;
      ctx.shadowBlur = 14;
      ctx.shadowColor = '#9d4edd';
      ctx.beginPath();
      ctx.arc(burst.x, burst.y, radius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.globalAlpha = alpha * 0.5;
      ctx.strokeStyle = '#e0aaff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(burst.x, burst.y, radius * 0.5, 0, Math.PI * 2);
      ctx.stroke();

      ctx.globalAlpha = alpha * 0.9;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(burst.x, burst.y, Math.max(1, CELL * 0.16 * (1 - t * 0.5)), 0, Math.PI * 2);
      ctx.fill();

      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 + t * 3;
        const dist = radius * (0.55 + t * 0.75);
        ctx.globalAlpha = alpha * (0.85 - t * 0.4);
        ctx.fillStyle = i % 2 === 0 ? '#e0aaff' : '#7b2cbf';
        ctx.fillRect(
          burst.x + Math.cos(angle) * dist - 1,
          burst.y + Math.sin(angle) * dist - 1,
          3,
          3
        );
      }
    } else if (burst.effect === 'nuclear') {
      const radius = CELL * (0.15 + t * 1.0);
      const glow = burst.itemType === 'bomb' ? '#ff6b20' : '#0ea5e9';

      ctx.globalAlpha = alpha * 0.75;
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3 - t * 1.5;
      ctx.shadowBlur = 16;
      ctx.shadowColor = glow;
      ctx.beginPath();
      ctx.arc(burst.x, burst.y, radius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.globalAlpha = alpha * 0.45;
      ctx.strokeStyle = '#e0f7ff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(burst.x, burst.y, radius * 0.45, 0, Math.PI * 2);
      ctx.stroke();

      ctx.globalAlpha = alpha * 0.95;
      ctx.fillStyle = burst.itemType === 'golden' ? '#fff5a0' : '#e0f7ff';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#7dd3fc';
      ctx.beginPath();
      ctx.arc(burst.x, burst.y, Math.max(1, CELL * 0.18 * (1 - t * 0.55)), 0, Math.PI * 2);
      ctx.fill();

      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 + t * 3.2;
        const dist = radius * (0.6 + t * 0.8);
        ctx.globalAlpha = alpha * (0.9 - t * 0.45);
        ctx.fillStyle = i % 2 === 0 ? '#ffffff' : '#7dd3fc';
        ctx.fillRect(
          burst.x + Math.cos(angle) * dist - 1,
          burst.y + Math.sin(angle) * dist - 1,
          3,
          3
        );
      }
    } else if (burst.effect === 'comet') {
      const radius = CELL * (0.12 + t * 0.75);
      const pulse = 0.75 + 0.25 * Math.sin(t * 10);

      const cometGrad = ctx.createRadialGradient(burst.x, burst.y, 0, burst.x, burst.y, radius);
      cometGrad.addColorStop(0, `rgba(255, 255, 255, ${alpha * pulse})`);
      cometGrad.addColorStop(0.3, `rgba(255, 213, 79, ${alpha * 0.85})`);
      cometGrad.addColorStop(0.65, `rgba(66, 165, 245, ${alpha * 0.6})`);
      cometGrad.addColorStop(1, 'rgba(13, 71, 161, 0)');

      ctx.globalAlpha = 0.95;
      ctx.fillStyle = cometGrad;
      ctx.shadowBlur = 14;
      ctx.shadowColor = '#42a5f5';
      ctx.beginPath();
      ctx.arc(burst.x, burst.y, radius, 0, Math.PI * 2);
      ctx.fill();

      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2 + t * 4;
        const dist = radius * (0.45 + t * 0.85);
        ctx.globalAlpha = alpha * (0.9 - t * 0.45);
        ctx.fillStyle = i % 2 === 0 ? '#ffffff' : '#ffd54f';
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#42a5f5';
        ctx.fillRect(
          burst.x + Math.cos(angle) * dist - 1,
          burst.y + Math.sin(angle) * dist - 1,
          3,
          3
        );
      }
    } else if (burst.effect === 'hoarder') {
      const radius = CELL * (0.2 + t * 1.1);
      const coinGrad = ctx.createRadialGradient(burst.x, burst.y, 0, burst.x, burst.y, radius);
      coinGrad.addColorStop(0, `rgba(255, 249, 196, ${alpha})`);
      coinGrad.addColorStop(0.4, `rgba(255, 202, 40, ${alpha * 0.9})`);
      coinGrad.addColorStop(0.75, `rgba(255, 143, 0, ${alpha * 0.55})`);
      coinGrad.addColorStop(1, 'rgba(141, 110, 99, 0)');

      ctx.globalAlpha = 0.95;
      ctx.fillStyle = coinGrad;
      ctx.shadowBlur = 16;
      ctx.shadowColor = '#ffca28';
      ctx.beginPath();
      ctx.arc(burst.x, burst.y, radius, 0, Math.PI * 2);
      ctx.fill();

      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + t * 5;
        const dist = radius * (0.35 + t * 1.0);
        ctx.globalAlpha = alpha * (0.95 - t * 0.5);
        ctx.fillStyle = i % 2 === 0 ? '#fff8e1' : '#ffb300';
        ctx.fillRect(
          burst.x + Math.cos(angle) * dist - 2,
          burst.y + Math.sin(angle) * dist - 2,
          4,
          4
        );
      }
    }

    ctx.restore();
  });
}

function growSnakeFromAbilityCollect() {
  growSnakeByAppleEat(selectedSkin, 0);
}

function processItemAt(x, y, hitEffect = null, growSnake = false) {
  const itemIndex = apples.findIndex((item) => item.x === x && item.y === y);
  if (itemIndex === -1) return false;

  const item = apples[itemIndex];
  if (hitEffect) {
    queueItemHitBurst(item.x, item.y, item.type, hitEffect);
  }
  if (item.type === 'normal' || item.type === 'golden') {
    applyGoodAppleReward(item);
    if (growSnake || selectedSkin === 'glass') {
      growSnakeByAppleEat(selectedSkin, 0);
    }
  }

  apples.splice(itemIndex, 1);
  addReplacementApple();
  return true;
}

function findNearestItem(x, y, excludeKeys = null) {
  let nearest = null;
  let bestDist = Infinity;

  apples.forEach((item) => {
    const key = `${item.x},${item.y}`;
    if (excludeKeys?.has(key)) return;
    const dist = Math.abs(item.x - x) + Math.abs(item.y - y);
    if (dist < bestDist) {
      bestDist = dist;
      nearest = item;
    }
  });

  return nearest;
}

function assignGuardTargets() {
  const claimed = new Set();

  royalGuards.forEach((guard) => {
    const head = guard.segments[0];
    const target = findNearestItem(head.x, head.y, claimed);
    guard.target = target;
    if (target) claimed.add(`${target.x},${target.y}`);
  });
}

function isGuardMoveBlocked(x, y, guard) {
  if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) return true;
  if (snake.some((seg) => seg.x === x && seg.y === y)) return true;
  return royalGuards.some(
    (other) =>
      other !== guard &&
      other.segments.some((seg) => seg.x === x && seg.y === y)
  );
}

function findGuardSpawnPositions(count) {
  const head = snake[0];
  const candidates = [];

  for (let dx = -4; dx <= 4; dx++) {
    for (let dy = -4; dy <= 4; dy++) {
      if (dx === 0 && dy === 0) continue;
      const x = head.x + dx;
      const y = head.y + dy;
      if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) continue;
      if (snake.some((seg) => seg.x === x && seg.y === y)) continue;
      candidates.push({ x, y });
    }
  }

  candidates.sort(() => Math.random() - 0.5);
  return candidates.slice(0, count);
}

function queueEarthSpawnBurst(x, y) {
  if (!Array.isArray(earthSpawnBursts)) earthSpawnBursts = [];
  earthSpawnBursts.push({
    x,
    y,
    start: Date.now(),
    phase: Math.random() * Math.PI * 2,
  });
}

function drawEarthBountyField() {
  if (!isEarthBountyActive() || !snake?.[0]) return;

  const head = snake[0];
  const frame = frameCount || 0;
  const pulse = 0.58 + 0.42 * Math.sin(frame * 0.11);
  const remaining = Math.max(0, earthBountyUntil - Date.now());
  const fade = Math.min(1, remaining / EARTH_BOUNTY_DURATION);
  const hx = head.x * CELL + CELL / 2;
  const hy = head.y * CELL + CELL / 2;
  const fieldRadius = (EARTH_SPAWN_RADIUS + 1.5) * CELL;

  ctx.save();

  const aura = ctx.createRadialGradient(hx, hy, CELL * 0.4, hx, hy, fieldRadius);
  aura.addColorStop(0, `rgba(124, 252, 0, ${0.16 * pulse * fade})`);
  aura.addColorStop(0.45, `rgba(76, 175, 80, ${0.12 * pulse * fade})`);
  aura.addColorStop(0.75, `rgba(107, 68, 35, ${0.08 * pulse * fade})`);
  aura.addColorStop(1, 'rgba(61, 40, 23, 0)');
  ctx.fillStyle = aura;
  ctx.fillRect(
    (head.x - EARTH_SPAWN_RADIUS - 1) * CELL,
    (head.y - EARTH_SPAWN_RADIUS - 1) * CELL,
    (EARTH_SPAWN_RADIUS * 2 + 3) * CELL,
    (EARTH_SPAWN_RADIUS * 2 + 3) * CELL
  );

  for (let dx = -EARTH_SPAWN_RADIUS; dx <= EARTH_SPAWN_RADIUS; dx++) {
    for (let dy = -EARTH_SPAWN_RADIUS; dy <= EARTH_SPAWN_RADIUS; dy++) {
      const gx = head.x + dx;
      const gy = head.y + dy;
      if (gx < 0 || gx >= GRID_SIZE || gy < 0 || gy >= GRID_SIZE) continue;

      const dist = Math.hypot(dx, dy);
      if (dist > EARTH_SPAWN_RADIUS + 0.35) continue;

      const px = gx * CELL;
      const py = gy * CELL;
      const soilAlpha = (0.08 + (1 - dist / (EARTH_SPAWN_RADIUS + 1)) * 0.1) * pulse * fade;
      ctx.fillStyle = `rgba(93, 64, 55, ${soilAlpha})`;
      ctx.fillRect(px + 2, py + CELL - 5, CELL - 4, 3);

      if (((gx + gy + Math.floor(frame * 0.08)) & 3) !== 0) continue;
      ctx.fillStyle = `rgba(56, 142, 60, ${0.14 * pulse * fade})`;
      ctx.fillRect(px + 4, py + 3, 2, 2);
      ctx.fillRect(px + CELL - 6, py + CELL - 7, 2, 2);
    }
  }

  for (let i = 0; i < 10; i++) {
    const orbit = frame * 0.045 + i * 0.62;
    const dist = CELL * (1.4 + (i % 3) * 0.55);
    const lx = hx + Math.cos(orbit) * dist;
    const ly = hy + Math.sin(orbit * 1.15) * dist * 0.85;
    const leafAlpha = (0.25 + 0.2 * Math.sin(frame * 0.2 + i)) * fade;
    ctx.fillStyle = `rgba(124, 252, 0, ${leafAlpha})`;
    ctx.fillRect(lx - 1, ly - 1, 2, 2);
    ctx.fillStyle = `rgba(46, 125, 50, ${leafAlpha * 0.8})`;
    ctx.fillRect(lx + 1, ly, 2, 1);
  }

  ctx.strokeStyle = `rgba(124, 252, 0, ${0.22 * pulse * fade})`;
  ctx.lineWidth = 1.5;
  ctx.setLineDash([5, 4]);
  ctx.lineDashOffset = -frame * 0.8;
  ctx.strokeRect(
    (head.x - EARTH_SPAWN_RADIUS) * CELL + 2,
    (head.y - EARTH_SPAWN_RADIUS) * CELL + 2,
    (EARTH_SPAWN_RADIUS * 2 + 1) * CELL - 4,
    (EARTH_SPAWN_RADIUS * 2 + 1) * CELL - 4
  );
  ctx.setLineDash([]);

  ctx.restore();
}

function drawEarthSpawnBursts() {
  if (!earthSpawnBursts?.length) return;

  const now = Date.now();
  earthSpawnBursts = earthSpawnBursts.filter((burst) => now - burst.start < EARTH_SPAWN_BURST_MS);

  earthSpawnBursts.forEach((burst) => {
    const t = Math.min(1, (now - burst.start) / EARTH_SPAWN_BURST_MS);
    const px = burst.x * CELL;
    const py = burst.y * CELL;
    const cx = px + CELL / 2;
    const cy = py + CELL / 2;
    const frame = frameCount || 0;

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    const moundH = CELL * (0.12 + t * 0.18);
    ctx.fillStyle = `rgba(93, 64, 55, ${(1 - t * 0.35) * 0.55})`;
    ctx.fillRect(px + 4, py + CELL - 4 - moundH, CELL - 8, moundH + 2);

    const stemH = Math.max(0, (t - 0.18) / 0.82) * CELL * 0.42;
    if (stemH > 1) {
      ctx.fillStyle = `rgba(56, 142, 60, ${0.85 * (1 - t * 0.2)})`;
      ctx.fillRect(cx - 1, cy + CELL * 0.18 - stemH, 2, stemH);
      ctx.fillStyle = `rgba(124, 252, 0, ${0.75})`;
      ctx.fillRect(cx - 3, cy + CELL * 0.12 - stemH, 6, 3);
    }

    for (let i = 0; i < 6; i++) {
      const angle = burst.phase + i * 1.05 + t * 2.4;
      const dist = CELL * (0.15 + t * 0.55);
      const sx = cx + Math.cos(angle) * dist;
      const sy = cy + Math.sin(angle) * dist - t * CELL * 0.25;
      ctx.fillStyle = i % 2 === 0 ? '#7cfc00' : '#388e3c';
      ctx.globalAlpha = (1 - t) * 0.85;
      ctx.fillRect(sx - 1, sy - 1, 2, 2);
    }

    const ringR = CELL * (0.2 + t * 0.45);
    ctx.globalAlpha = (1 - t) * 0.35;
    ctx.strokeStyle = '#8bc34a';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy + CELL * 0.15, ringR, 0, Math.PI * 2);
    ctx.stroke();

    if (t > 0.45 && frame % 6 < 3) {
      ctx.globalAlpha = (1 - t) * 0.25;
      ctx.fillStyle = '#c5e1a5';
      ctx.fillRect(px + 2, py + 2, CELL - 4, CELL - 4);
    }

    ctx.restore();
  });
}

function drawEarthItemGrowthRing(px, py, growthScale) {
  const cx = px + CELL / 2;
  const cy = py + CELL / 2;
  const frame = frameCount || 0;
  const pulse = 0.55 + 0.45 * Math.sin(frame * 0.24);

  ctx.save();
  ctx.strokeStyle = `rgba(124, 252, 0, ${(1 - growthScale) * 0.55 * pulse})`;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy + CELL * 0.08, CELL * (0.28 + growthScale * 0.18), 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = `rgba(93, 64, 55, ${(1 - growthScale) * 0.35})`;
  ctx.fillRect(px + 5, py + CELL - 6, CELL - 10, 3);
  ctx.restore();
}

function randomCellNearHead() {
  const head = snake[0];
  const candidates = [];

  for (let dx = -EARTH_SPAWN_RADIUS; dx <= EARTH_SPAWN_RADIUS; dx++) {
    for (let dy = -EARTH_SPAWN_RADIUS; dy <= EARTH_SPAWN_RADIUS; dy++) {
      if (dx === 0 && dy === 0) continue;
      const x = head.x + dx;
      const y = head.y + dy;
      if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) continue;
      if (isFrostWallCell(x, y)) continue;
      if (snake.some((seg) => seg.x === x && seg.y === y)) continue;
      if (apples.some((item) => item.x === x && item.y === y)) continue;
      candidates.push({ x, y });
    }
  }

  if (candidates.length === 0) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function spawnEarthAppleNearPlayer() {
  if (!isEarthBountyActive() || apples.length >= EARTH_MAX_APPLES) return false;

  const pos = randomCellNearHead();
  if (!pos) return false;

  apples.push(buildEarthItem(pos.x, pos.y, rollGoodItemType()));
  queueEarthSpawnBurst(pos.x, pos.y);
  return true;
}

function endEarthBounty() {
  earthBountyUntil = 0;
  earthSpawnBursts = [];
  if (apples.length > APPLE_COUNT) {
    apples = apples.slice(0, APPLE_COUNT);
  }
  while (apples.length < APPLE_COUNT) {
    const item = createItem();
    if (!item) break;
    apples.push(item);
  }
}

function updateEarthBounty() {
  if (earthBountyUntil === 0) return false;

  const now = Date.now();
  if (now >= earthBountyUntil) {
    endEarthBounty();
    return true;
  }

  if (apples.length < EARTH_MAX_APPLES && now - lastEarthSpawn >= EARTH_SPAWN_MS) {
    if (spawnEarthAppleNearPlayer()) {
      lastEarthSpawn = now;
      return true;
    }
  }

  return false;
}

function createRoyalGuard(x, y) {
  const tailX = x - 1 >= 0 && !snake.some((seg) => seg.x === x - 1 && seg.y === y)
    ? x - 1
    : x + 1 < GRID_SIZE ? x + 1 : x;

  return {
    segments: [
      { x, y },
      { x: tailX, y },
    ],
    expiresAt: Date.now() + ROYAL_GUARD_DURATION,
    lastMove: 0,
  };
}

function spawnRoyalGuards() {
  const positions = findGuardSpawnPositions(2);
  positions.forEach((pos) => {
    royalGuards.push(createRoyalGuard(pos.x, pos.y));
  });
  assignGuardTargets();
}

function processBotsGuardItemAt(x, y, ownerId) {
  const itemIndex = apples.findIndex((item) => item.x === x && item.y === y);
  if (itemIndex === -1) return false;

  apples.splice(itemIndex, 1);
  const ownerBot = botSnakes.find((bot) => bot.id === ownerId);
  if (ownerBot?.alive) {
    addBotsApple(ownerBot);
    growBotSnake(ownerBot);
  } else if (ownerId === 'player') {
    addBotsApple(selectedSkin === 'lucky' ? { skinId: 'lucky' } : null);
    growSnakeFromAbilityCollect();
    score = snake.length;
    baseCoins += 1;
    applesEaten++;
    applyProgressDisplay();
  } else {
    addBotsApple(null);
  }
  return true;
}

function isBotsGuardMoveBlocked(x, y, guard) {
  if (x < 0 || x >= BOTS_WORLD_SIZE || y < 0 || y >= BOTS_WORLD_SIZE) return true;
  if (isBlockedByFrostWall(x, y)) return true;
  if (isBlockedByEnemyForcefield(x, y, guard.ownerId ?? 'player')) return true;
  if (snake.some((seg) => seg.x === x && seg.y === y)) return true;
  for (const bot of botSnakes) {
    if (!bot.alive) continue;
    if (bot.snake.some((seg) => seg.x === x && seg.y === y)) return true;
  }
  return royalGuards.some(
    (other) =>
      other !== guard &&
      other.segments.some((seg) => seg.x === x && seg.y === y)
  );
}

function moveRoyalGuardBots(guard) {
  const head = guard.segments[0];
  const target = guard.target ?? findNearestItem(head.x, head.y);

  if (!target) return false;

  const options = [];
  if (target.x !== head.x) {
    options.push({ x: head.x + Math.sign(target.x - head.x), y: head.y });
  }
  if (target.y !== head.y) {
    options.push({ x: head.x, y: head.y + Math.sign(target.y - head.y) });
  }

  for (const next of options) {
    if (isBotsGuardMoveBlocked(next.x, next.y, guard)) continue;

    guard.segments.unshift(next);
    guard.segments.pop();
    return processBotsGuardItemAt(next.x, next.y, guard.ownerId ?? 'player');
  }

  return false;
}

function moveRoyalGuard(guard) {
  const head = guard.segments[0];
  const target = guard.target ?? findNearestItem(head.x, head.y);

  if (!target) return false;

  const options = [];
  if (target.x !== head.x) {
    options.push({ x: head.x + Math.sign(target.x - head.x), y: head.y });
  }
  if (target.y !== head.y) {
    options.push({ x: head.x, y: head.y + Math.sign(target.y - head.y) });
  }

  for (const next of options) {
    if (isGuardMoveBlocked(next.x, next.y, guard)) continue;

    guard.segments.unshift(next);
    guard.segments.pop();
    return processItemAt(next.x, next.y, null, true);
  }

  return false;
}

function updateRoyalGuards() {
  const now = Date.now();
  royalGuards = royalGuards.filter((guard) => now < guard.expiresAt);
  if (royalGuards.length === 0) return false;
  if (now - lastGuardMove < Math.floor(ROYAL_GUARD_MOVE_MS * getChronoTimeScale())) return false;

  lastGuardMove = now;
  let changed = false;

  assignGuardTargets();

  royalGuards.forEach((guard) => {
    if (isBotsMode()) {
      const ownerId = guard.ownerId ?? 'player';
      if (processBotsGuardItemAt(guard.segments[0].x, guard.segments[0].y, ownerId)) {
        changed = true;
      }
      if (moveRoyalGuardBots(guard)) {
        changed = true;
      }
      return;
    }

    if (processItemAt(guard.segments[0].x, guard.segments[0].y, null, true)) {
      changed = true;
    }
    if (moveRoyalGuard(guard)) {
      changed = true;
    }
  });

  if (changed) updateHud();
  return changed;
}

const GUARD_COLORS = {
  head: '#5eb8ff',
  body: '#2b7cd3',
  dark: '#1a4a8a',
};

function drawRoyalGuards() {
  (royalGuards ?? []).forEach((guard) => {
    (guard.segments ?? []).forEach((seg, i) => {
      const px = seg.x * CELL;
      const py = seg.y * CELL;
      const isHead = i === 0;

      if (isHead) {
        drawPixelRect(px, py, CELL, CELL, GUARD_COLORS.dark);
        drawPixelRect(px, py, CELL, CELL, GUARD_COLORS.head, 3);
        ctx.fillStyle = GUARD_COLORS.body;
        ctx.fillRect(px + 5, py + 4, 10, 2);
        ctx.fillStyle = '#e8f4ff';
        ctx.fillRect(px + 7, py + 8, 2, 2);
        ctx.fillRect(px + 11, py + 8, 2, 2);
      } else {
        drawPixelRect(px, py, CELL, CELL, GUARD_COLORS.dark, 2);
        drawPixelRect(px, py, CELL, CELL, GUARD_COLORS.body, 3);
      }
    });
  });
}

function stepToward(x, y, targetX, targetY) {
  const dx = targetX - x;
  const dy = targetY - y;
  if (dx === 0 && dy === 0) return { x, y };

  if (Math.abs(dx) >= Math.abs(dy)) {
    return { x: x + Math.sign(dx), y };
  }
  return { x, y: y + Math.sign(dy) };
}

function stepAway(x, y, fromX, fromY) {
  const dx = x - fromX;
  const dy = y - fromY;
  if (dx === 0 && dy === 0) {
    return { x: Math.min(GRID_SIZE - 1, x + 1), y };
  }

  if (Math.abs(dx) >= Math.abs(dy)) {
    return { x: x + Math.sign(dx), y };
  }
  return { x, y: y + Math.sign(dy) };
}

function canMoveItemTo(x, y, item) {
  if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) return false;
  if (snake.some((seg, index) => index > 0 && seg.x === x && seg.y === y)) {
    return false;
  }
  return !apples.some(
    (other) => other !== item && other.x === x && other.y === y
  );
}

function updateShadowGravity() {
  if (Date.now() >= shadowUntil) return false;

  const now = Date.now();
  if (now - lastShadowPull < SHADOW_PULL_MS) return false;
  lastShadowPull = now;

  const head = snake[0];
  let changed = false;

  apples.forEach((item) => {
    let next;

    if (item.type === 'normal' || item.type === 'golden') {
      next = stepToward(item.x, item.y, head.x, head.y);
    } else if (item.type === 'black' || item.type === 'bomb') {
      next = stepAway(item.x, item.y, head.x, head.y);
    } else {
      return;
    }

    if (next.x === item.x && next.y === item.y) return;
    if (!canMoveItemTo(next.x, next.y, item)) return;

    item.x = next.x;
    item.y = next.y;
    changed = true;
    queueShadowPullBurst(
      next.x,
      next.y,
      item.type === 'black' || item.type === 'bomb' ? 'repel' : 'pull',
      item.type
    );

    if (next.x === head.x && next.y === head.y) {
      if (item.type === 'normal' || item.type === 'golden') {
        processItemAt(next.x, next.y);
      }
    }
  });

  if (changed) updateHud();
  return changed;
}

function spawnPhantomWave(cx, cy, sourceId = null) {
  if (!canBotSpawnPulseWave(sourceId)) return;

  const wave = {
    cx,
    cy,
    radius: 0,
    maxRadius:
      Math.max(cx, cy, GRID_SIZE - 1 - cx, GRID_SIZE - 1 - cy) + 1,
    sourceId,
    waveKind: 'phantom',
  };
  if (isBotsMode()) wave.damageBlocks = BOTS_PHANTOM_WAVE_DAMAGE;
  energyWaves.push(wave);
}

function spawnGodzillaWave(cx, cy, sourceId = null, pulseIndex = 0) {
  if (!canBotSpawnPulseWave(sourceId)) return;

  const wave = {
    cx,
    cy,
    radius: 0,
    maxRadius:
      Math.max(cx, cy, GRID_SIZE - 1 - cx, GRID_SIZE - 1 - cy) + 1,
    color: 'blue',
    sourceId,
    waveKind: 'godzilla-pulse',
    pulseIndex,
  };
  if (isBotsMode()) wave.damageBlocks = getBotsGodzillaPulseWaveDamage(pulseIndex);
  energyWaves.push(wave);
}

function updatePendingPhantomWaves() {
  if (pendingPhantomWaves.length === 0) return;

  const now = Date.now();
  const remaining = [];

  pendingPhantomWaves.forEach((pending) => {
    if (now >= pending.spawnAt) {
      spawnPhantomWave(pending.cx, pending.cy);
    } else {
      remaining.push(pending);
    }
  });

  pendingPhantomWaves = remaining;
}

function updatePendingGodzillaWaves() {
  if (pendingGodzillaWaves.length === 0) return;

  const now = Date.now();
  const remaining = [];

  pendingGodzillaWaves.forEach((pending) => {
    if (now >= pending.spawnAt) {
      if (!canBotSpawnPulseWave(pending.sourceId ?? null)) {
        return;
      }
      spawnGodzillaWave(
        pending.cx,
        pending.cy,
        pending.sourceId ?? null,
        pending.pulseIndex ?? 0
      );
    } else {
      remaining.push(pending);
    }
  });

  pendingGodzillaWaves = remaining;
}

function getForcefieldBounds() {
  if (!snake?.length) return null;

  let minX = snake[0].x;
  let maxX = snake[0].x;
  let minY = snake[0].y;
  let maxY = snake[0].y;

  snake.forEach((seg) => {
    minX = Math.min(minX, seg.x);
    maxX = Math.max(maxX, seg.x);
    minY = Math.min(minY, seg.y);
    maxY = Math.max(maxY, seg.y);
  });

  return {
    minX: Math.max(0, minX - FORCEFIELD_PADDING),
    maxX: Math.min(GRID_SIZE - 1, maxX + FORCEFIELD_PADDING),
    minY: Math.max(0, minY - FORCEFIELD_PADDING),
    maxY: Math.min(GRID_SIZE - 1, maxY + FORCEFIELD_PADDING),
  };
}

function getForcefieldCells() {
  const bounds = getForcefieldBounds();
  const cells = new Set();
  if (!bounds) return cells;

  for (let x = bounds.minX; x <= bounds.maxX; x++) {
    for (let y = bounds.minY; y <= bounds.maxY; y++) {
      cells.add(`${x},${y}`);
    }
  }

  return cells;
}

function eraseHazardsInForcefield() {
  if (!isPlayerForcefieldActive()) return false;

  const field = getForcefieldCells();
  let changed = false;

  for (let i = apples.length - 1; i >= 0; i--) {
    const item = apples[i];
    const key = `${item.x},${item.y}`;
    if (field.has(key) && (item.type === 'black' || item.type === 'bomb')) {
      apples.splice(i, 1);
      addReplacementApple();
      changed = true;
    }
  }

  return changed;
}

function getRingCells(cx, cy, radius) {
  const cells = [];

  for (let x = cx - radius; x <= cx + radius; x++) {
    for (let y = cy - radius; y <= cy + radius; y++) {
      if (Math.max(Math.abs(x - cx), Math.abs(y - cy)) !== radius) continue;
      if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
        cells.push({ x, y });
      }
    }
  }

  return cells;
}

function updateEnergyWaves() {
  if (energyWaves.length === 0) return false;

  const now = Date.now();
  const waveMs = Math.floor(WAVE_EXPAND_MS * getChronoTimeScale());
  if (now - lastWaveExpand < waveMs) return false;
  lastWaveExpand = now;

  let changed = false;
  const remaining = [];

  energyWaves.forEach((wave) => {
    wave.radius++;
    const cells = getRingCells(wave.cx, wave.cy, wave.radius);

    cells.forEach((cell) => {
      const effect = wave.color === 'blue' ? 'nuclear' : 'phantom';
      if (processItemAt(cell.x, cell.y, effect, true)) {
        changed = true;
      }
    });

    if (wave.radius < wave.maxRadius) {
      remaining.push(wave);
    }
  });

  energyWaves = remaining;
  if (changed) updateHud();
  return changed;
}

function drawForcefieldFill() {
  if (!isPlayerForcefieldActive()) return;

  const bounds = getForcefieldBounds();
  if (!bounds) return;

  const { minX, maxX, minY, maxY } = bounds;
  const px = minX * CELL;
  const py = minY * CELL;
  const w = (maxX - minX + 1) * CELL;
  const h = (maxY - minY + 1) * CELL;
  const frame = frameCount || 0;
  const pulse = 0.62 + 0.38 * Math.sin(frame * 0.13);
  const scanT = (frame * 3) % (h + CELL * 2) - CELL;

  ctx.save();

  const fillGrad = ctx.createLinearGradient(px, py, px + w, py + h);
  fillGrad.addColorStop(0, `rgba(46, 170, 160, ${0.14 * pulse})`);
  fillGrad.addColorStop(0.45, `rgba(78, 205, 196, ${0.26 * pulse})`);
  fillGrad.addColorStop(1, `rgba(232, 255, 254, ${0.16 * pulse})`);
  ctx.fillStyle = fillGrad;
  ctx.fillRect(px, py, w, h);

  ctx.globalCompositeOperation = 'lighter';
  for (let gx = minX; gx <= maxX; gx++) {
    for (let gy = minY; gy <= maxY; gy++) {
      if (((gx + gy + Math.floor(frame * 0.12)) & 1) === 0) continue;
      const cx = gx * CELL + CELL / 2;
      const cy = gy * CELL + CELL / 2;
      const size = CELL * 0.22;
      ctx.strokeStyle = `rgba(232, 255, 254, ${0.1 * pulse})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx - size, cy);
      ctx.lineTo(cx, cy - size);
      ctx.lineTo(cx + size, cy);
      ctx.lineTo(cx, cy + size);
      ctx.closePath();
      ctx.stroke();
    }
  }

  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = `rgba(232, 255, 254, ${0.12 * pulse})`;
  ctx.fillRect(px, py + scanT, w, Math.max(3, CELL * 0.22));

  const rippleCount = 3;
  for (let i = 0; i < rippleCount; i++) {
    const t = ((frame * 0.06 + i / rippleCount) % 1);
    const inset = t * Math.min(w, h) * 0.22;
    ctx.strokeStyle = `rgba(232, 255, 254, ${(1 - t) * 0.22 * pulse})`;
    ctx.lineWidth = 1;
    ctx.strokeRect(px + inset, py + inset, w - inset * 2, h - inset * 2);
  }

  ctx.restore();
}

function drawForcefieldFrame() {
  if (!isPlayerForcefieldActive()) return;

  const bounds = getForcefieldBounds();
  if (!bounds) return;

  const { minX, maxX, minY, maxY } = bounds;
  const px = minX * CELL;
  const py = minY * CELL;
  const w = (maxX - minX + 1) * CELL;
  const h = (maxY - minY + 1) * CELL;
  const frame = frameCount || 0;
  const pulse = 0.62 + 0.38 * Math.sin(frame * 0.13);
  const remaining = isBotsMode()
    ? (forcefieldHitsRemaining ?? 0) * 4000
    : forcefieldUntil - Date.now();
  const urgent = isBotsMode()
    ? (forcefieldHitsRemaining ?? 0) <= 1
    : remaining < 3000;
  const borderColor = urgent ? '#fff5a0' : '#e8fffe';
  const glowColor = urgent ? '#ffd54f' : '#4ecdc4';
  const perimeterPulse = urgent && frame % 10 < 5 ? 1 : pulse;
  const perimeterLen = (maxX - minX + 1) * 2 + (maxY - minY + 1) * 2;
  const march = Math.floor(frame * 0.35) % perimeterLen;

  ctx.save();

  ctx.shadowColor = glowColor;
  ctx.shadowBlur = 10 + pulse * 8;
  ctx.strokeStyle = `rgba(78, 205, 196, ${0.42 * perimeterPulse})`;
  ctx.lineWidth = 4;
  ctx.strokeRect(px + 1, py + 1, w - 2, h - 2);

  ctx.shadowBlur = 0;
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 2;
  ctx.strokeRect(px + 3, py + 3, w - 6, h - 6);

  const cornerLen = Math.min(14, Math.max(8, Math.floor(CELL * 0.75)));
  const corners = [
    [px + 4, py + 4, 1, 1],
    [px + w - 4, py + 4, -1, 1],
    [px + 4, py + h - 4, 1, -1],
    [px + w - 4, py + h - 4, -1, -1],
  ];

  corners.forEach(([cx, cy, sx, sy], i) => {
    const flicker = 0.72 + 0.28 * Math.sin(frame * 0.22 + i * 1.4);
    ctx.globalAlpha = flicker;
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + sx * cornerLen, cy);
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx, cy + sy * cornerLen);
    ctx.stroke();
  });

  ctx.globalAlpha = 1;

  let step = 0;
  for (let x = minX; x <= maxX; x++, step++) {
    if (step % perimeterLen !== march) continue;
    ctx.fillStyle = glowColor;
    ctx.fillRect(x * CELL + CELL / 2 - 1, minY * CELL + 2, 2, 2);
  }
  for (let y = minY + 1; y <= maxY; y++, step++) {
    if (step % perimeterLen !== march) continue;
    ctx.fillStyle = glowColor;
    ctx.fillRect(maxX * CELL + CELL - 4, y * CELL + CELL / 2 - 1, 2, 2);
  }
  for (let x = maxX - 1; x >= minX; x--, step++) {
    if (step % perimeterLen !== march) continue;
    ctx.fillStyle = glowColor;
    ctx.fillRect(x * CELL + CELL / 2 - 1, maxY * CELL + CELL - 4, 2, 2);
  }
  for (let y = maxY - 1; y > minY; y--, step++) {
    if (step % perimeterLen !== march) continue;
    ctx.fillStyle = glowColor;
    ctx.fillRect(minX * CELL + 2, y * CELL + CELL / 2 - 1, 2, 2);
  }

  for (let x = minX; x <= maxX; x++) {
    for (let y = minY; y <= maxY; y++) {
      const onEdge = x === minX || x === maxX || y === minY || y === maxY;
      if (!onEdge) continue;
      const sparkPhase = (x * 5 + y * 7 + frame) % 18;
      if (sparkPhase > 3) continue;
      const sx = x * CELL + CELL / 2;
      const sy = y * CELL + CELL / 2;
      ctx.fillStyle = borderColor;
      ctx.fillRect(sx - 1, sy - 1, 2, 2);
    }
  }

  if (urgent && frame % 8 < 4) {
    ctx.strokeStyle = `rgba(255, 245, 160, ${0.35 * pulse})`;
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 6, py + 6, w - 12, h - 12);
  }

  ctx.restore();
}

function drawEnergyWaves() {
  (energyWaves ?? []).forEach((wave) => {
    const pulse = frameCount % 12 < 6;
    const cells = getRingCells(wave.cx, wave.cy, wave.radius);
    const isBlue = wave.color === 'blue';

    cells.forEach((cell) => {
      const px = cell.x * CELL;
      const py = cell.y * CELL;

      if (isBlue) {
        ctx.fillStyle = pulse ? 'rgba(0, 150, 255, 0.55)' : 'rgba(0, 100, 220, 0.4)';
        ctx.fillRect(px + 2, py + 2, CELL - 4, CELL - 4);
        ctx.fillStyle = pulse ? '#7dd3fc' : '#38bdf8';
        ctx.fillRect(px + 6, py + 6, CELL - 12, CELL - 12);
      } else {
        ctx.fillStyle = pulse ? 'rgba(157, 78, 221, 0.55)' : 'rgba(123, 44, 191, 0.4)';
        ctx.fillRect(px + 2, py + 2, CELL - 4, CELL - 4);
        ctx.fillStyle = pulse ? '#e0aaff' : '#c77dff';
        ctx.fillRect(px + 6, py + 6, CELL - 12, CELL - 12);
      }
    });
  });
}

function getProjectileCells(proj) {
  const perpX = proj.dy;
  const perpY = proj.dx;
  const cells = [];

  for (let w = -1; w <= 1; w++) {
    cells.push({
      x: proj.x + perpX * w,
      y: proj.y + perpY * w,
    });
  }

  return cells;
}

function isValidFireballPlacement(x, y, dx, dy) {
  const perpX = dy;
  const perpY = dx;

  for (let w = -1; w <= 1; w++) {
    const cx = x + perpX * w;
    const cy = y + perpY * w;
    if (cx < 0 || cx >= GRID_SIZE || cy < 0 || cy >= GRID_SIZE) return false;
    if (snake.some((seg) => seg.x === cx && seg.y === cy)) return false;
  }

  return true;
}

function shootFireball() {
  const head = snake[0];
  const dx = direction.x;
  const dy = direction.y;
  const baseX = head.x + dx;
  const baseY = head.y + dy;

  if (!isValidFireballPlacement(baseX, baseY, dx, dy)) return;

  projectiles.push({ x: baseX, y: baseY, dx, dy, type: 'fire', ownerId: 'player' });
}

function destroyProjectileAt(x, y) {
  if (processItemAt(x, y, 'fire')) {
    saveProgress();
    return true;
  }
  return false;
}

function updateProjectiles() {
  if (isBotsMode()) {
    updateBotsProjectiles();
    return;
  }

  const now = Date.now();
  if (now - lastProjectileMove < Math.floor(PROJECTILE_SPEED_MS * getChronoTimeScale())) return;
  lastProjectileMove = now;

  const remaining = [];

  for (const proj of projectiles) {
    const cells = getProjectileCells(proj);
    let destroyed = false;

    for (const cell of cells) {
      if (destroyProjectileAt(cell.x, cell.y)) {
        destroyed = true;
        break;
      }
    }
    if (destroyed) continue;

    if (snake.some((seg) => cells.some((c) => c.x === seg.x && c.y === seg.y))) {
      continue;
    }

    const nx = proj.x + proj.dx;
    const ny = proj.y + proj.dy;
    const newCells = getProjectileCells({ x: nx, y: ny, dx: proj.dx, dy: proj.dy });

    if (
      newCells.some(
        (c) => c.x < 0 || c.x >= GRID_SIZE || c.y < 0 || c.y >= GRID_SIZE
      )
    ) {
      continue;
    }

    if (snake.some((seg) => newCells.some((c) => c.x === seg.x && c.y === seg.y))) {
      continue;
    }

    proj.x = nx;
    proj.y = ny;

    destroyed = false;
    for (const cell of newCells) {
      if (destroyProjectileAt(cell.x, cell.y)) {
        destroyed = true;
        break;
      }
    }
    if (!destroyed) remaining.push(proj);
  }

  projectiles = remaining;
}

function updateAutoAbilities() {
  if (state !== 'playing' || selectedSkin !== 'fire') return;

  const now = Date.now();
  const fireCd = hasZeroCooldowns() ? 0 : Math.floor(FIRE_AUTO_COOLDOWN * getChronoTimeScale());
  if (now - lastFireAuto >= fireCd) {
    shootFireball();
    lastFireAuto = now;
  }
}

function drawProjectile(proj) {
  const pulse = frameCount % 8 < 4;
  const cells = getProjectileCells(proj);

  cells.forEach((cell, i) => {
    const px = cell.x * CELL;
    const py = cell.y * CELL;
    const isCenter = i === 1;

    drawPixelRect(px, py, CELL, CELL, '#a22633', isCenter ? 2 : 3);
    ctx.fillStyle = isCenter
      ? (pulse ? '#ffcd75' : '#ef7d57')
      : (pulse ? '#ef7d57' : '#e43b44');
    const size = isCenter ? 6 : 5;
    ctx.fillRect(px + 7, py + 7, size, size);

    if (isCenter) {
      ctx.fillStyle = '#fff5a0';
      ctx.fillRect(px + 8, py + 8, 4, 4);
    }
  });
}

function drawFrostBarricade() {
  if (!isFrostBarricadeActive()) return;

  const pulse = frameCount % 20 < 10;

  for (let x = 0; x < GRID_SIZE; x++) {
    for (let y = 0; y < GRID_SIZE; y++) {
      if (!isFrostWallCell(x, y)) continue;

      const px = x * CELL;
      const py = y * CELL;

      drawPixelRect(px, py, CELL, CELL, '#1a3a6e', 0);
      drawPixelRect(px, py, CELL, CELL, pulse ? '#a8d8ff' : '#3b5dc9', 1);
      ctx.fillStyle = pulse ? '#e8f4ff' : '#6eb5ff';
      ctx.fillRect(px + 4, py + 4, CELL - 8, CELL - 8);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(px + 7, py + 7, 3, 3);
      ctx.fillRect(px + CELL - 10, py + CELL - 10, 2, 2);
    }
  }
}

function drawGrid() {
  const isLight = settings.theme === 'light';
  ctx.fillStyle = isLight ? '#f3efe8' : '#1a1c2c';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (isPocketDimensionActive()) {
    const frame = frameCount || 0;
    const pulse = 0.07 + 0.05 * Math.sin(frame * 0.11);
    for (let x = 0; x < GRID_SIZE; x++) {
      for (let y = 0; y < GRID_SIZE; y++) {
        if (x < BASE_GRID_SIZE && y < BASE_GRID_SIZE) continue;
        const px = x * CELL;
        const py = y * CELL;
        ctx.fillStyle = `rgba(123, 44, 191, ${pulse + ((x + y) % 2) * 0.03})`;
        ctx.fillRect(px + 1, py + 1, CELL - 2, CELL - 2);
      }
    }
  }

  ctx.strokeStyle = isLight ? '#c8c0b4' : COLORS.grid;
  ctx.lineWidth = 1;
  for (let i = 0; i <= GRID_SIZE; i++) {
    const p = i * CELL;
    ctx.beginPath();
    ctx.moveTo(p, 0);
    ctx.lineTo(p, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, p);
    ctx.lineTo(canvas.width, p);
    ctx.stroke();
  }
}

function drawPixelRect(x, y, w, h, color, inset = 2) {
  ctx.fillStyle = color;
  ctx.fillRect(x + inset, y + inset, w - inset * 2, h - inset * 2);
}

function drawSnakeHeadNib(px, py, dir, skin) {
  const cy = Math.floor(py + CELL / 2);
  const cx = Math.floor(px + CELL / 2);

  ctx.fillStyle = skin.head;
  if (dir.x === 1) {
    ctx.fillRect(px + CELL - 4, cy - 1, 2, 1);
    ctx.fillRect(px + CELL - 2, cy, 1, 1);
  } else if (dir.x === -1) {
    ctx.fillRect(px + 2, cy - 1, 2, 1);
    ctx.fillRect(px + 1, cy, 1, 1);
  } else if (dir.y === -1) {
    ctx.fillRect(cx - 1, py + 2, 1, 2);
    ctx.fillRect(cx, py + 1, 1, 1);
  } else {
    ctx.fillRect(cx - 1, py + CELL - 4, 1, 2);
    ctx.fillRect(cx, py + CELL - 2, 1, 1);
  }

  if (frameCount % 32 < 10) {
    ctx.fillStyle = '#e43b44';
    if (dir.x === 1) {
      ctx.fillRect(px + CELL - 1, cy, 1, 1);
    } else if (dir.x === -1) {
      ctx.fillRect(px, cy, 1, 1);
    } else if (dir.y === -1) {
      ctx.fillRect(cx, py, 1, 1);
    } else {
      ctx.fillRect(cx, py + CELL - 1, 1, 1);
    }
  }
}

function drawSnakeSegments(segments, dir, skin, { headNib = false, clipToBotsView = false } = {}) {
  segments.forEach((seg, i) => {
    if (clipToBotsView && !isBotsCellVisible(seg.x, seg.y)) return;

    const px = seg.x * CELL;
    const py = seg.y * CELL;
    const isHead = i === 0;

    if (isHead) {
      drawPixelRect(px, py, CELL, CELL, skin.dark);
      drawPixelRect(px, py, CELL, CELL, skin.head, 3);

      const eyeSize = 3;
      const eyeOffset = 5;
      ctx.fillStyle = '#1a1c2c';

      if (dir.x === 1) {
        ctx.fillRect(px + CELL - eyeOffset - eyeSize, py + 5, eyeSize, eyeSize);
        ctx.fillRect(px + CELL - eyeOffset - eyeSize, py + CELL - 8, eyeSize, eyeSize);
      } else if (dir.x === -1) {
        ctx.fillRect(px + eyeOffset, py + 5, eyeSize, eyeSize);
        ctx.fillRect(px + eyeOffset, py + CELL - 8, eyeSize, eyeSize);
      } else if (dir.y === -1) {
        ctx.fillRect(px + 5, py + eyeOffset, eyeSize, eyeSize);
        ctx.fillRect(px + CELL - 8, py + eyeOffset, eyeSize, eyeSize);
      } else {
        ctx.fillRect(px + 5, py + CELL - eyeOffset - eyeSize, eyeSize, eyeSize);
        ctx.fillRect(px + CELL - 8, py + CELL - eyeOffset - eyeSize, eyeSize, eyeSize);
      }

      if (headNib) drawSnakeHeadNib(px, py, dir, skin);

      if (skin.id === 'royal') {
        ctx.fillStyle = '#ffd700';
        ctx.fillRect(px + 5, py + 2, 10, 3);
        ctx.fillRect(px + 4, py + 5, 3, 2);
        ctx.fillRect(px + 13, py + 5, 3, 2);
      } else if (skin.id === 'phantom') {
        ctx.fillStyle = '#c77dff';
        ctx.fillRect(px + 6, py + 4, 8, 2);
        ctx.fillStyle = '#e0aaff';
        ctx.fillRect(px + 8, py + 7, 4, 4);
      } else if (skin.id === 'ironclad') {
        ctx.fillStyle = '#e8e8f0';
        ctx.fillRect(px + 5, py + 4, 10, 3);
        ctx.fillRect(px + 7, py + 7, 6, 4);
      } else if (skin.id === 'enhancer') {
        ctx.fillStyle = '#f1c40f';
        ctx.fillRect(px + 5, py + 3, 10, 3);
        ctx.fillStyle = '#9b59b6';
        ctx.fillRect(px + 7, py + 7, 6, 5);
      } else if (skin.id === 'phoenix') {
        ctx.fillStyle = '#ffcc33';
        ctx.fillRect(px + 5, py + 3, 10, 4);
        ctx.fillStyle = '#e25822';
        ctx.fillRect(px + 7, py + 8, 6, 3);
      } else if (skin.id === 'glass') {
        ctx.fillStyle = '#e8f4ff';
        ctx.fillRect(px + 6, py + 4, 8, 8);
        ctx.fillStyle = '#5dade2';
        ctx.fillRect(px + 8, py + 6, 4, 4);
      } else if (skin.id === 'detonator') {
        ctx.fillStyle = '#ffcc33';
        ctx.fillRect(px + 9, py + 2, 2, 5);
        ctx.fillStyle = '#ff4500';
        ctx.fillRect(px + 7, py + 7, 6, 4);
      } else if (skin.id === 'godzilla') {
        ctx.fillStyle = '#40916c';
        ctx.fillRect(px + 4, py + 3, 12, 4);
        ctx.fillStyle = '#74c69d';
        ctx.fillRect(px + 6, py + 7, 8, 5);
        ctx.fillStyle = '#0a9396';
        ctx.fillRect(px + 3, py + 5, 3, 3);
        ctx.fillRect(px + 14, py + 5, 3, 3);
      } else if (skin.id === 'riftweaver') {
        ctx.fillStyle = '#e0aaff';
        ctx.fillRect(px + 5, py + 3, 10, 3);
        ctx.fillStyle = '#9d4edd';
        ctx.fillRect(px + 7, py + 7, 6, 5);
        ctx.fillStyle = '#c77dff';
        ctx.fillRect(px + 4, py + 5, 3, 2);
        ctx.fillRect(px + 13, py + 5, 3, 2);
      } else if (skin.id === 'cometstreak') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(px + 7, py + 5, 6, 2);
        ctx.fillStyle = '#ffd54f';
        ctx.fillRect(px + 5, py + 8, 10, 3);
        ctx.fillStyle = '#42a5f5';
        ctx.fillRect(px + 8, py + 11, 4, 2);
      } else if (skin.id === 'lucky') {
        ctx.fillStyle = '#ffd700';
        ctx.fillRect(px + 6, py + 5, 8, 3);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(px + 8, py + 9, 4, 4);
      } else if (skin.id === 'hoarder') {
        ctx.fillStyle = '#ffca28';
        ctx.fillRect(px + 6, py + 6, 8, 6);
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(px + 8, py + 8, 4, 2);
      } else if (skin.id === 'steady') {
        ctx.fillStyle = '#cfd8dc';
        ctx.fillRect(px + 7, py + 6, 6, 4);
        ctx.fillStyle = '#78909c';
        ctx.fillRect(px + 8, py + 10, 4, 2);
      } else if (skin.id === 'anchor') {
        ctx.fillStyle = '#ffd54f';
        ctx.fillRect(px + 8, py + 5, 4, 4);
        ctx.fillStyle = '#546e7a';
        ctx.fillRect(px + 7, py + 9, 6, 3);
        ctx.fillStyle = '#ffd54f';
        ctx.fillRect(px + 9, py + 10, 2, 1);
      } else if (skin.id === 'chrono') {
        ctx.fillStyle = '#80deea';
        ctx.fillRect(px + 7, py + 5, 6, 6);
        ctx.fillStyle = '#1a237e';
        ctx.fillRect(px + 9, py + 7, 2, 2);
        ctx.fillStyle = '#b2ebf2';
        ctx.fillRect(px + 8, py + 5, 4, 1);
      }
    } else {
      const shade = i % 2 === 0 ? skin.body : skin.dark;
      drawPixelRect(px, py, CELL, CELL, shade, 2);

      if (skin.id === 'phantom' && frameCount % 16 < 8) {
        ctx.fillStyle = 'rgba(199, 125, 255, 0.35)';
        ctx.fillRect(px + 3, py + 3, CELL - 6, CELL - 6);
      }
      if (skin.id === 'earth' && frameCount % 20 < 10) {
        ctx.fillStyle = 'rgba(124, 252, 0, 0.25)';
        ctx.fillRect(px + 4, py + 4, CELL - 8, CELL - 8);
      }
      if (skin.id === 'ironclad' && frameCount % 18 < 9) {
        ctx.fillStyle = 'rgba(192, 192, 208, 0.3)';
        ctx.fillRect(px + 3, py + 3, CELL - 6, CELL - 6);
      }
      if (skin.id === 'enhancer' && frameCount % 14 < 7) {
        ctx.fillStyle = 'rgba(241, 196, 15, 0.3)';
        ctx.fillRect(px + 3, py + 3, CELL - 6, CELL - 6);
      }
      if (skin.id === 'phoenix' && frameCount % 16 < 8) {
        ctx.fillStyle = 'rgba(255, 140, 50, 0.3)';
        ctx.fillRect(px + 3, py + 3, CELL - 6, CELL - 6);
      }
      if (skin.id === 'glass' && frameCount % 12 < 6) {
        ctx.fillStyle = 'rgba(168, 230, 255, 0.35)';
        ctx.fillRect(px + 3, py + 3, CELL - 6, CELL - 6);
      }
      if (skin.id === 'cometstreak' && frameCount % 12 < 6) {
        ctx.fillStyle = 'rgba(66, 165, 245, 0.35)';
        ctx.fillRect(px + 3, py + 3, CELL - 6, CELL - 6);
        ctx.fillStyle = 'rgba(255, 213, 79, 0.45)';
        ctx.fillRect(px + 5, py + 5, 2, 2);
      }
      if (skin.id === 'lucky' && frameCount % 14 < 7) {
        ctx.fillStyle = 'rgba(255, 215, 0, 0.3)';
        ctx.fillRect(px + 3, py + 3, CELL - 6, CELL - 6);
      }
      if (skin.id === 'hoarder' && frameCount % 16 < 8) {
        ctx.fillStyle = 'rgba(255, 202, 40, 0.28)';
        ctx.fillRect(px + 4, py + 4, CELL - 8, CELL - 8);
      }
      if (skin.id === 'steady' && frameCount % 18 < 9) {
        ctx.fillStyle = 'rgba(176, 190, 197, 0.28)';
        ctx.fillRect(px + 3, py + 3, CELL - 6, CELL - 6);
      }
      if (skin.id === 'anchor' && frameCount % 20 < 10) {
        ctx.fillStyle = 'rgba(255, 213, 79, 0.26)';
        ctx.fillRect(px + 4, py + 4, CELL - 8, CELL - 8);
      }
      if (skin.id === 'chrono' && frameCount % 14 < 7) {
        ctx.fillStyle = 'rgba(128, 222, 234, 0.32)';
        ctx.fillRect(px + 3, py + 3, CELL - 6, CELL - 6);
      }
      if (skin.id === 'detonator' && frameCount % 10 < 5) {
        ctx.fillStyle = 'rgba(255, 69, 0, 0.35)';
        ctx.fillRect(px + 3, py + 3, CELL - 6, CELL - 6);
      }
      if (skin.id === 'riftweaver' && (isPocketDimensionActive() || isRiftAbsorbActive()) && frameCount % 12 < 6) {
        ctx.fillStyle = 'rgba(224, 170, 255, 0.35)';
        ctx.fillRect(px + 3, py + 3, CELL - 6, CELL - 6);
      }
    }
  });
}

function drawSnake() {
  drawSnakeSegments(snake, direction, getSkin(), { headNib: true });
}

function drawItem(item) {
  const px = item.x * CELL;
  const py = item.y * CELL;
  let growthScale = 1;

  if (item.earthGrownAt) {
    const age = Date.now() - item.earthGrownAt;
    if (age < EARTH_GROW_MS) {
      const t = age / EARTH_GROW_MS;
      growthScale = 0.18 + 0.82 * (1 - Math.pow(1 - t, 2.6));
    }
  }

  if (growthScale < 1) {
    ctx.save();
    const cx = px + CELL / 2;
    const cy = py + CELL / 2;
    ctx.translate(cx, cy);
    ctx.scale(growthScale, growthScale);
    ctx.translate(-cx, -cy);
  }

  if (item.type === 'golden') {
    const pulse = frameCount % 16 < 8;
    const ringColor = pulse ? '#fff5a0' : '#ffee58';

    drawPixelRect(px, py, CELL, CELL, COLORS.goldenAppleDark, 0);
    drawPixelRect(px, py, CELL, CELL, ringColor, 1);
    drawPixelRect(px, py, CELL, CELL, COLORS.goldenApple, 3);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + CELL / 2 - 1, py + 3, 3, 3);
    ctx.fillRect(px + 4, py + CELL / 2 - 1, 3, 3);
    ctx.fillRect(px + CELL - 7, py + CELL / 2 - 1, 3, 3);
    ctx.fillRect(px + CELL / 2 - 1, py + CELL - 6, 3, 3);

    if (pulse) {
      ctx.fillStyle = '#fff5a0';
      ctx.fillRect(px + 2, py + 2, 2, 2);
      ctx.fillRect(px + CELL - 4, py + 2, 2, 2);
      ctx.fillRect(px + 2, py + CELL - 4, 2, 2);
      ctx.fillRect(px + CELL - 4, py + CELL - 4, 2, 2);
    }
  } else if (item.type === 'black') {
    const remaining = item.expiresAt - Date.now();
    const urgent = remaining < ITEM_DESPAWN_MS * 0.3;
    const pulse = urgent && frameCount % 10 < 5;
    const border = pulse ? '#b13e53' : COLORS.blackAppleDark;

    drawPixelRect(px, py, CELL, CELL, border, 0);
    drawPixelRect(px, py, CELL, CELL, COLORS.blackApple, 2);
    ctx.fillStyle = '#83769c';
    ctx.fillRect(px + 6, py + 7, 8, 2);
    ctx.fillRect(px + 7, py + 6, 2, 8);
  } else if (item.type === 'bomb') {
    const remaining = item.expiresAt - Date.now();
    const urgent = remaining < ITEM_DESPAWN_MS * 0.3;
    const pulse = urgent && frameCount % 10 < 5;
    const border = pulse ? '#ef7d57' : '#2d2d44';

    drawPixelRect(px, py, CELL, CELL, border, 0);
    drawPixelRect(px, py, CELL, CELL, COLORS.bomb, 3);
    ctx.fillStyle = '#1a1c2c';
    ctx.fillRect(px + 7, py + 7, 6, 6);
    ctx.fillStyle = pulse ? '#ffcc33' : COLORS.bombFuse;
    ctx.fillRect(px + 9, py + 3, 2, 5);
    if (pulse) {
      ctx.fillStyle = '#ffcc33';
      ctx.fillRect(px + 8, py + 2, 4, 2);
    }
  } else {
    drawPixelRect(px, py, CELL, CELL, COLORS.appleDark, 1);
    drawPixelRect(px, py, CELL, CELL, COLORS.apple, 4);
    ctx.fillStyle = COLORS.appleLeaf;
    ctx.fillRect(px + CELL / 2 - 1, py + 2, 3, 4);
  }

  if (growthScale < 1) {
    ctx.restore();
    drawEarthItemGrowthRing(px, py, growthScale);
  }
}

function drawCometDust(dust) {
  const px = dust.x * CELL;
  const py = dust.y * CELL;
  const frame = frameCount || 0;
  const pulse = 0.55 + 0.45 * Math.sin(frame * 0.28 + dust.phase);
  const remaining = dust.expiresAt - Date.now();
  const fade = remaining < 1800 ? remaining / 1800 : 1;
  const cx = px + CELL / 2;
  const cy = py + CELL / 2;
  const tailAngle = frame * 0.14 + dust.phase;

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';

  const glowGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, CELL * 0.58);
  glowGrad.addColorStop(0, `rgba(255, 255, 255, ${0.95 * pulse * fade})`);
  glowGrad.addColorStop(0.22, `rgba(255, 213, 79, ${0.82 * pulse * fade})`);
  glowGrad.addColorStop(0.55, `rgba(66, 165, 245, ${0.68 * pulse * fade})`);
  glowGrad.addColorStop(1, `rgba(13, 71, 161, ${0.12 * fade})`);

  ctx.fillStyle = glowGrad;
  ctx.shadowBlur = 14;
  ctx.shadowColor = '#42a5f5';
  ctx.globalAlpha = 0.92 * fade;
  ctx.fillRect(px + 2, py + 2, CELL - 4, CELL - 4);

  ctx.globalAlpha = 0.85 * pulse * fade;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(px + CELL / 2 - 1, py + CELL / 2 - 1, 3, 3);
  ctx.fillStyle = '#ffd54f';
  ctx.fillRect(px + 5, py + 6, 2, 2);
  ctx.fillRect(px + CELL - 7, py + CELL - 8, 2, 2);

  for (let i = 0; i < 3; i++) {
    const dist = CELL * (0.18 + i * 0.12);
    const tx = cx - Math.cos(tailAngle + i * 0.4) * dist;
    const ty = cy - Math.sin(tailAngle + i * 0.4) * dist;
    ctx.globalAlpha = (0.55 - i * 0.12) * pulse * fade;
    ctx.fillStyle = i === 0 ? '#90caf9' : '#1565c0';
    ctx.fillRect(tx - 1, ty - 1, 2, 2);
  }

  if (remaining < 1800 && frame % 8 < 4) {
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.35 * fade})`;
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 1, py + 1, CELL - 2, CELL - 2);
  }

  ctx.restore();
}

function render() {
  ensureGameArrays();
  maybeAutoSaveProgress();
  applyChronoTimerCompensation();
  refreshGridMetrics();
  if (isBotsMode() && (state === 'playing' || state === 'paused' || state === 'over')) {
    renderBotsMode();
    return;
  }
  clearExpiredAtomicBreath();
  frameCount = (Number.isFinite(frameCount) ? frameCount : 0) + 1;
  updateAmplifyTimer();
  updateChronoTimer();
  updateAutoAbilities();
  updateProjectiles();
  updatePendingPhantomWaves();
  updatePendingGodzillaWaves();
  const atomicChanged = updateAtomicBreath();
  const pocketChanged = updatePocketDimension();
  const riftChanged = updateRiftAbsorb();
  const guardChanged = updateRoyalGuards();
  const shadowChanged = updateShadowGravity();
  const earthChanged = updateEarthBounty();
  const forcefieldChanged = eraseHazardsInForcefield();
  const waveChanged = updateEnergyWaves();
  const itemsChanged = expireItems() || checkPeriodicHazardReplace();
  const dustChanged = expireCometDust();
  if (
    (itemsChanged ||
      dustChanged ||
      forcefieldChanged ||
      waveChanged ||
      guardChanged ||
      shadowChanged ||
      earthChanged ||
      atomicChanged ||
      pocketChanged ||
      riftChanged) &&
    state === 'playing'
  ) {
    saveProgress();
  }

  drawGrid();
  drawShadowFieldDim();
  drawEarthBountyField();
  drawEarthSpawnBursts();
  if (Array.isArray(apples) && apples.length > 0) apples.forEach(drawItem);
  if (Array.isArray(cometDust) && cometDust.length > 0) cometDust.forEach(drawCometDust);
  drawShadowPullStreams();
  drawShadowRepelStreams();
  drawRiftAbsorbStreams();
  drawFrostBarricade();
  drawEnergyWaves();
  drawAtomicBreath();
  drawAtomicBreathBursts();
  drawItemHitBursts();
  drawPocketDimensionShine();
  if (Array.isArray(projectiles) && projectiles.length > 0) projectiles.forEach(drawProjectile);
  drawForcefieldFill();
  drawRoyalGuards();
  if (Array.isArray(snake) && snake.length > 0) drawSnake();
  drawForcefieldFrame();
  drawShadowSnakeAura();
  drawShadowVoidVortex();
  drawShadowPullBursts();
  drawPhoenixRebirthEffect();
  drawRiftMouthVortex();
  drawRiftAbsorbBursts();
  drawRiftTeleportEffect();
  drawChronoTimeStopFx();
  updateAbilityHud();
}

function applyGoodAppleReward(eaten) {
  const scoreBefore = score;

  if (selectedSkin === 'glass') {
    score = score === 0 ? 3 : score * 3;
    glassSpeedStacks++;
  } else if (eaten.type === 'golden') {
    score = score === 0 ? 2 : score * 2;
  } else {
    score++;
  }

  if (selectedSkin === 'enhancer') {
    applyEnhancerScoreBoost();
  }

  applyAmplifyScore(scoreBefore);
  bankScoreGain(scoreBefore);
  applyProgressDisplay();
  applesEaten++;
  applyHoarderBonus();
  maybeSpawnCometDust();
}

function getPhoenixPenaltyText(deathCount) {
  if (deathCount === 1) return t('phoenix.noScoreLost');
  return t('phoenix.scoreDivide', { count: deathCount });
}

function showPhoenixRevivePrompt(messageKey) {
  freezeAmplifyTimer();
  clearTimeout(gameLoop);
  cancelAnimationFrame(animFrame);
  state = 'paused';
  pendingPhoenixMessageKey = messageKey;
  const nextDeath = phoenixDeathCount + 1;
  phoenixMsg.textContent = t(messageKey);
  phoenixPenalty.textContent = t('phoenix.revivalCost', { cost: getPhoenixPenaltyText(nextDeath) });
  phoenixModal.classList.remove('hidden');
}

function confirmPhoenixRevive() {
  phoenixModal.classList.add('hidden');
  phoenixRevive();
  state = 'playing';
  resumeAmplifyTimer();
  startGameLoops();
  render();
}

function declinePhoenixRevive() {
  phoenixModal.classList.add('hidden');
  finishGameOver(pendingPhoenixMessageKey);
}

function showDetonatorPrompt(newHead, biteIndex) {
  freezeAmplifyTimer();
  clearTimeout(gameLoop);
  cancelAnimationFrame(animFrame);
  state = 'paused';
  pendingDetonatorHead = newHead;
  pendingDetonatorBiteIndex = biteIndex;
  detonatorModal.classList.remove('hidden');
}

function confirmDetonate() {
  detonatorModal.classList.add('hidden');
  snake = [pendingDetonatorHead, ...snake.slice(1, pendingDetonatorBiteIndex)];
  pendingDetonatorHead = null;
  pendingDetonatorBiteIndex = -1;
  state = 'playing';
  resumeAmplifyTimer();
  startGameLoops();
  updateHud();
  saveProgress();
  render();
}

function declineDetonate() {
  detonatorModal.classList.add('hidden');
  pendingDetonatorHead = null;
  pendingDetonatorBiteIndex = -1;
  finishGameOver('death.selfBite');
}

function phoenixRevive() {
  phoenixDeathCount++;
  score = Math.round(score / phoenixDeathCount);

  const startX = Math.floor(BASE_GRID_SIZE / 2);
  const startY = Math.floor(BASE_GRID_SIZE / 2);
  snake = [
    { x: startX, y: startY },
    { x: startX - 1, y: startY },
    { x: startX - 2, y: startY },
  ];
  direction = { x: 1, y: 0 };
  nextDirection = { x: 1, y: 0 };

  phoenixRebirthEffectUntil = Date.now() + PHOENIX_REBIRTH_EFFECT_MS;

  updateHud();
  saveProgress();
}

function finishGameOver(messageKey) {
  stopAmplify();
  clearAtomicBreathState();
  pocketDimensionUntil = 0;
  riftAbsorbUntil = 0;
  riftTeleportEffectUntil = 0;
  phoenixRebirthEffectUntil = 0;
  shadowUntil = 0;
  riftAbsorbBursts = [];
  atomicBreathBursts = [];
  itemHitBursts = [];
  shadowPullBursts = [];
  cometDust = [];
  refreshGridMetrics();
  userPauseActive = false;
  if (pauseModal) pauseModal.classList.add('hidden');
  state = 'over';
  clearTimeout(gameLoop);
  cancelAnimationFrame(animFrame);

  if (score > highScore) {
    highScore = score;
  }

  saveProgress();
  setGameOverOverlay({
    titleKey: 'ui.gameOver',
    messageKey,
  });
}

function update() {
  if (state !== 'playing') return;
  if (isBotsMode()) {
    updateBotsMode();
    return;
  }
  refreshGridMetrics();
  if (isAtomicBreathActive()) return;

  direction = { ...nextDirection };

  const head = snake[0];
  const newHead = {
    x: head.x + direction.x,
    y: head.y + direction.y,
  };

  if (isBlockedByFrostWall(newHead.x, newHead.y)) {
    return;
  }

  if (
    newHead.x < 0 ||
    newHead.x >= GRID_SIZE ||
    newHead.y < 0 ||
    newHead.y >= GRID_SIZE
  ) {
    if (isIronclad()) return;
    endGame('death.wall');
    return;
  }

  if (
    !isIronclad() &&
    snake.some((seg, index) => index > 0 && seg.x === newHead.x && seg.y === newHead.y)
  ) {
    const biteIndex = snake.findIndex(
      (seg, index) => index > 0 && seg.x === newHead.x && seg.y === newHead.y
    );
    if (selectedSkin === 'detonator') {
      showDetonatorPrompt(newHead, biteIndex);
      return;
    }
    endGame('death.selfBite');
    return;
  }

  snake.unshift(newHead);

  const itemIndex = apples.findIndex(
    (item) => item.x === newHead.x && item.y === newHead.y
  );

  if (itemIndex !== -1) {
    const eaten = apples[itemIndex];

    if (eaten.type === 'black') {
      if (!isIronclad()) {
        score = Math.max(0, score - 5);
        snake.pop();
        hazardHits++;
      }
    } else if (eaten.type === 'bomb') {
      if (!isIronclad()) {
        score = Math.floor(score / 2);
        snake.pop();
        hazardHits++;
      }
    } else if (isRiftAbsorbActive()) {
      queueRiftAbsorbBurst(eaten.type);
      applyRiftAbsorbReward(eaten);
    } else {
      applyGoodAppleReward(eaten);
      growSnakeByAppleEat(selectedSkin, 1);
    }

    apples.splice(itemIndex, 1);
    addReplacementApple();
    enforceAppleCapacity();

    updateHud();
    saveProgress();

    if (hazardHits >= getMaxHazardHits()) {
      endGame('death.hazards');
      return;
    }
  } else {
    collectCometDustAt(newHead.x, newHead.y);
    snake.pop();
  }

  updateHud();
  saveProgress();
}

function animationLoop() {
  if (state === 'playing') {
    render();
  }
  if (state === 'playing' || isAtomicBreathActive()) {
    animFrame = requestAnimationFrame(animationLoop);
  }
}

function endGame(messageKey) {
  if (selectedSkin === 'phoenix') {
    showPhoenixRevivePrompt(messageKey);
    return;
  }

  finishGameOver(messageKey);
}

function tick() {
  update();
  if (state === 'playing') {
    if (isAtomicBreathActive()) {
      render();
    }
    gameLoop = setTimeout(tick, getTickMs());
  }
}

function startGameLoops() {
  clearTimeout(gameLoop);
  cancelAnimationFrame(animFrame);
  gameLoop = setTimeout(tick, getTickMs());
  animFrame = requestAnimationFrame(animationLoop);
}

function startGame() {
  startScreen.classList.add('hidden');
  overlay.classList.add('hidden');
  phoenixModal.classList.add('hidden');
  detonatorModal.classList.add('hidden');
  pauseModal.classList.add('hidden');
  shopModal.classList.add('hidden');
  codesModal.classList.add('hidden');
  settingsModal.classList.add('hidden');
  closeBotsModePicker();
  if (isBotsMode()) {
    initBotsGame();
    resizeGameLayout();
  } else {
    initGame();
  }
  activateAmplifyIfPending();
  render();
  startGameLoops();
  startGameMusic();
  saveProgress();
}

function resumeGame() {
  startScreen.classList.add('hidden');
  overlay.classList.add('hidden');
  phoenixModal.classList.add('hidden');
  detonatorModal.classList.add('hidden');
  pauseModal.classList.add('hidden');
  userPauseActive = false;
  shopModal.classList.add('hidden');
  codesModal.classList.add('hidden');
  settingsModal.classList.add('hidden');
  activateAmplifyIfPending();
  render();
  startGameLoops();
  startGameMusic();
}

function openCodesModal() {
  shopModal.classList.add('hidden');
  settingsModal.classList.add('hidden');
  if (state === 'playing') {
    freezeAmplifyTimer();
    state = 'paused';
    clearTimeout(gameLoop);
    cancelAnimationFrame(animFrame);
    saveProgress();
  }
  if (userPauseActive) pauseModal.classList.add('hidden');
  codeInput.value = '';
  codeError.classList.add('hidden');
  codesModal.classList.remove('hidden');
  codeInput.focus();
  syncGameMusicPlayback();
}

function closeCodesModal() {
  codesModal.classList.add('hidden');
  if (userPauseActive) {
    pauseModal.classList.remove('hidden');
  } else if (state === 'paused') {
    state = 'playing';
    activateAmplifyIfPending();
    resumeAmplifyTimer();
    startGameLoops();
  }
  syncGameMusicPlayback();
}

function openShop() {
  codesModal.classList.add('hidden');
  settingsModal.classList.add('hidden');
  if (state === 'playing') {
    freezeAmplifyTimer();
    state = 'paused';
    clearTimeout(gameLoop);
    cancelAnimationFrame(animFrame);
    saveProgress();
  }
  if (userPauseActive) pauseModal.classList.add('hidden');
  renderShop();
  shopModal.classList.remove('hidden');
  syncGameMusicPlayback();
}

function closeShop() {
  shopModal.classList.add('hidden');
  if (userPauseActive) {
    pauseModal.classList.remove('hidden');
  } else if (state === 'paused') {
    state = 'playing';
    resumeAmplifyTimer();
    startGameLoops();
  }
  syncGameMusicPlayback();
}

function openSettings() {
  shopModal.classList.add('hidden');
  codesModal.classList.add('hidden');
  settingsMultiExpanded = false;
  updatePlayModeUI();
  if (state === 'playing') {
    freezeAmplifyTimer();
    state = 'paused';
    clearTimeout(gameLoop);
    cancelAnimationFrame(animFrame);
    saveProgress();
  }
  if (userPauseActive) pauseModal.classList.add('hidden');
  musicVolumeSlider.value = String(settings.musicVolume);
  musicVolumeValue.textContent = `${settings.musicVolume}%`;
  themeDarkBtn.classList.toggle('active', settings.theme === 'dark');
  themeLightBtn.classList.toggle('active', settings.theme === 'light');
  if (languageSelect) languageSelect.value = settings.language;
  applyGameMode(settings.gameMode ?? 'normal');
  settingsModal.classList.remove('hidden');
  syncGameMusicPlayback();
}

function closeSettings() {
  settingsMultiExpanded = false;
  settingsModal.classList.add('hidden');
  if (userPauseActive) {
    pauseModal.classList.remove('hidden');
  } else if (state === 'paused') {
    state = 'playing';
    resumeAmplifyTimer();
    startGameLoops();
  }
  syncGameMusicPlayback();
}

function renderShop() {
  shopCoinsEl.textContent = String(coins);
  shopGrid.innerHTML = '';

  SKINS.forEach((skin) => {
    const disabled = isSkinTemporarilyDisabled(skin.id);
    const owned = unlockedSkins.includes(skin.id);
    const equipped = !disabled && selectedSkin === skin.id;
    const canBuy = !disabled && !owned && coins >= skin.cost;
    const mpBanned = isSkinBannedInMultiplayer(skin.id);

    const card = document.createElement('div');
    card.className = 'skin-card' + (equipped ? ' equipped' : '') + (disabled ? ' skin-card-disabled' : '');

    const preview = document.createElement('div');
    preview.className = 'skin-preview';
    preview.innerHTML = `
      <span style="background:${skin.head}"></span>
      <span style="background:${skin.body}"></span>
      <span style="background:${skin.dark}"></span>
      <span style="background:${skin.body}"></span>
    `;

    const name = document.createElement('p');
    name.className = 'skin-name';
    name.textContent = getSkinName(skin.id);

    const cost = document.createElement('p');
    cost.className = 'skin-cost' + (disabled ? ' skin-cost-disabled' : '');
    cost.textContent = disabled
      ? t('shop.temporarilyLocked')
      : skin.cost === 0
        ? t('shop.free')
        : t('shop.coins', { count: skin.cost });

    const ability = document.createElement('p');
    ability.className = 'skin-ability';
    ability.textContent = getAbilityDesc(skin.id) ?? '';

    const mpNote = document.createElement('p');
    if (mpBanned && !disabled) {
      mpNote.className = 'skin-mp-note';
      mpNote.textContent = t('shop.singlePlayerOnly');
    }

    const btn = document.createElement('button');
    if (disabled) {
      btn.textContent = t('shop.temporarilyLocked');
      btn.className = 'owned-btn';
      btn.disabled = true;
    } else if (equipped) {
      btn.textContent = t('shop.equipped');
      btn.className = 'owned-btn';
      btn.disabled = true;
    } else if (owned && isBotsMode() && mpBanned) {
      btn.textContent = t('shop.singlePlayerOnly');
      btn.className = 'owned-btn';
      btn.disabled = true;
    } else if (owned) {
      btn.textContent = t('shop.equip');
      btn.className = 'equip-btn';
      btn.addEventListener('click', () => equipSkin(skin.id));
    } else if (canBuy) {
      btn.textContent = t('shop.buy');
      btn.className = 'buy-btn';
      btn.addEventListener('click', () => buySkin(skin.id));
    } else {
      btn.textContent = t('shop.locked');
      btn.className = 'owned-btn';
      btn.disabled = true;
    }

    const cardParts = [preview, name, cost, ability];
    if (mpBanned && !disabled) cardParts.push(mpNote);
    cardParts.push(btn);
    card.append(...cardParts);
    shopGrid.appendChild(card);
  });
}

function buySkin(skinId) {
  if (isSkinTemporarilyDisabled(skinId)) return;
  const skin = SKINS.find((s) => s.id === skinId);
  if (!skin || unlockedSkins.includes(skinId) || coins < skin.cost) return;

  if (hasSessionAllSkins()) {
    sessionCoinSpend += skin.cost;
  } else {
    baseCoins -= skin.cost;
    baseUnlockedSkins.push(skinId);
  }

  applyProgressDisplay();
  if (!(isBotsMode() && isSkinBannedInMultiplayer(skinId))) {
    selectedSkin = skinId;
  }
  updateHud();
  saveProgress();
  renderShop();
}

function equipSkin(skinId) {
  if (isSkinTemporarilyDisabled(skinId)) return;
  if (!unlockedSkins.includes(skinId)) return;
  if (isBotsMode() && isSkinBannedInMultiplayer(skinId)) return;
  selectedSkin = skinId;
  saveProgress();
  renderShop();
  updateAbilityHud();
  if (state === 'playing' || state === 'paused') render();
}

shopBtn.addEventListener('click', openShop);
shopClose.addEventListener('click', closeShop);
if (pauseBtn) pauseBtn.addEventListener('click', togglePause);
shopModal.addEventListener('click', (e) => {
  if (e.target === shopModal) closeShop();
});

codesBtn.addEventListener('click', openCodesModal);
codesClose.addEventListener('click', closeCodesModal);
codeSubmit.addEventListener('click', () => redeemCode(codeInput.value));
codeInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    redeemCode(codeInput.value);
  }
});
codesModal.addEventListener('click', (e) => {
  if (e.target === codesModal) closeCodesModal();
});

if (settingsBtn) settingsBtn.addEventListener('click', openSettings);
if (settingsClose) settingsClose.addEventListener('click', closeSettings);
if (settingsModal) {
  settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) closeSettings();
  });
}

if (settingsSingleBtn) settingsSingleBtn.addEventListener('click', selectSinglePlayerMode);
if (settingsMultiBtn) settingsMultiBtn.addEventListener('click', expandMultiplayerOptions);
if (settingsBotsBtn) settingsBotsBtn.addEventListener('click', launchBotsMode);
if (botsModeCloseBtn) botsModeCloseBtn.addEventListener('click', closeBotsModePicker);
if (botsModeAppleHuntBtn) botsModeAppleHuntBtn.addEventListener('click', launchAppleHuntMode);
if (botsModeCobraBattleBtn) botsModeCobraBattleBtn.addEventListener('click', launchCobraBattleMode);
if (botsModeModal) {
  botsModeModal.addEventListener('click', (e) => {
    if (e.target === botsModeModal) closeBotsModePicker();
  });
}
if (settingsLobbyBtn) {
  settingsLobbyBtn.addEventListener('click', () => {
    showCodeToast(t('ui.lobbyLocked'));
  });
}

musicVolumeSlider.addEventListener('input', () => {
  settings.musicVolume = Number(musicVolumeSlider.value);
  musicVolumeValue.textContent = `${settings.musicVolume}%`;
  applyMusicVolume(settings.musicVolume / 100);
  saveSettings();
  if (settings.musicVolume > 0 && shouldGameMusicPlay() && !musicAudio?.src) {
    startGameMusic();
  }
});

musicPrevBtn.addEventListener('click', skipToPreviousTrack);
musicNextBtn.addEventListener('click', skipToNextTrack);

themeDarkBtn.addEventListener('click', () => {
  applyTheme('dark');
  saveSettings();
});

themeLightBtn.addEventListener('click', () => {
  applyTheme('light');
  saveSettings();
});

if (modeEasyBtn) {
  modeEasyBtn.addEventListener('click', () => {
    applyGameMode('easy');
    saveSettings();
  });
}
if (modeNormalBtn) {
  modeNormalBtn.addEventListener('click', () => {
    applyGameMode('normal');
    saveSettings();
  });
}
if (modeHardBtn) {
  modeHardBtn.addEventListener('click', () => {
    applyGameMode('hard');
    saveSettings();
  });
}
if (modeExtremeBtn) {
  modeExtremeBtn.addEventListener('click', () => {
    applyGameMode('extreme');
    saveSettings();
  });
}

if (skillPrimaryBtn) skillPrimaryBtn.addEventListener('click', usePrimaryAbility);
if (skillSecondaryBtn) skillSecondaryBtn.addEventListener('click', useSecondaryAbility);

if (settingsDevicePhoneBtn) {
  settingsDevicePhoneBtn.addEventListener('click', () => selectDeviceProfile('phone'));
}
if (settingsDeviceTabletBtn) {
  settingsDeviceTabletBtn.addEventListener('click', () => selectDeviceProfile('tablet'));
}
if (settingsDeviceComputerBtn) {
  settingsDeviceComputerBtn.addEventListener('click', () => selectDeviceProfile('computer'));
}
if (devicePhoneBtn) devicePhoneBtn.addEventListener('click', () => selectDeviceProfile('phone'));
if (deviceTabletBtn) deviceTabletBtn.addEventListener('click', () => selectDeviceProfile('tablet'));
if (deviceComputerBtn) deviceComputerBtn.addEventListener('click', () => selectDeviceProfile('computer'));

if (languageSelect) {
  languageSelect.addEventListener('change', () => {
    settings.language = languageSelect.value;
    setLanguage(settings.language);
    saveSettings();
  });
}

window.onLanguageChange = () => {
  updatePlayModeUI();
  updateDeviceInputUI();
  updatePauseButton();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      resizeGameLayout();
    });
  });
  if (typeof state === 'string') {
    updateHud();
  }
  if (!shopModal.classList.contains('hidden')) {
    renderShop();
  }
  if (state === 'over') {
    refreshGameOverOverlay();
  }
  if (!phoenixModal.classList.contains('hidden') && pendingPhoenixMessageKey) {
    const nextDeath = phoenixDeathCount + 1;
    phoenixMsg.textContent = t(pendingPhoenixMessageKey);
    phoenixPenalty.textContent = t('phoenix.revivalCost', {
      cost: getPhoenixPenaltyText(nextDeath),
    });
  }
};

window.addEventListener('resize', resizeGameLayout);
window.addEventListener('orientationchange', () => {
  setTimeout(resizeGameLayout, 100);
});
document.addEventListener('fullscreenchange', resizeGameLayout);
document.addEventListener('webkitfullscreenchange', resizeGameLayout);

phoenixYes.addEventListener('click', confirmPhoenixRevive);
phoenixNo.addEventListener('click', declinePhoenixRevive);
detonatorDetonateBtn.addEventListener('click', confirmDetonate);
detonatorOverBtn.addEventListener('click', declineDetonate);

document.addEventListener('pointerdown', ensureMusicRunning);
document.addEventListener('keydown', ensureMusicRunning);

document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();

  if (isDevicePickerOpen()) return;

  if (shouldBlockKeyboardGameControls()) return;

  if (!phoenixModal.classList.contains('hidden')) {
    if (key === 'y') {
      e.preventDefault();
      confirmPhoenixRevive();
    } else if (key === 'n') {
      e.preventDefault();
      declinePhoenixRevive();
    }
    return;
  }

  if (!detonatorModal.classList.contains('hidden')) {
    if (key === 'd') {
      e.preventDefault();
      confirmDetonate();
    } else if (key === 'g') {
      e.preventDefault();
      declineDetonate();
    }
    return;
  }

  if (key === 'b' && !shopModal.classList.contains('hidden')) {
    closeShop();
    return;
  }

  if (key === 'b' && state !== 'shop') {
    e.preventDefault();
    if (!codesModal.classList.contains('hidden')) return;
    if (!settingsModal.classList.contains('hidden')) return;
    if (shopModal.classList.contains('hidden')) {
      openShop();
    } else {
      closeShop();
    }
    return;
  }

  if (key === 'p') {
    if (!codesModal.classList.contains('hidden')) return;
    if (isTypingInField()) return;
    e.preventDefault();
    togglePause();
    return;
  }

  if (key === ' ' || e.code === 'Space') {
    e.preventDefault();
    if (!shopModal.classList.contains('hidden')) return;
    if (!codesModal.classList.contains('hidden')) return;
    if (!settingsModal.classList.contains('hidden')) return;
    if (state === 'over' || state === 'waiting') {
      startGame();
    }
    return;
  }

  if (state !== 'playing') return;

  if (key === 'f') {
    e.preventDefault();
    if (selectedSkin === 'godzilla') {
      useGodzillaAtomic();
    } else if (selectedSkin === 'riftweaver') {
      useRiftPocketDimension();
    } else {
      useManualAbility();
    }
    return;
  }

  if (key === 't') {
    e.preventDefault();
    if (selectedSkin === 'godzilla') {
      useGodzillaPulse();
    } else if (selectedSkin === 'riftweaver') {
      useRiftAbsorb();
    }
    return;
  }

  const moves = {
    w: { x: 0, y: -1 },
    arrowup: { x: 0, y: -1 },
    s: { x: 0, y: 1 },
    arrowdown: { x: 0, y: 1 },
    a: { x: -1, y: 0 },
    arrowleft: { x: -1, y: 0 },
    d: { x: 1, y: 0 },
    arrowright: { x: 1, y: 0 },
  };

  if (!moves[key]) return;
  e.preventDefault();

  const move = moves[key];
  const isReverse = move.x === -direction.x && move.y === -direction.y;

  if (!isReverse) {
    nextDirection = move;
  }
});

function initProgressState() {
  baseCoins = 0;
  baseUnlockedSkins = ['classic'];
  selectedSkin = 'classic';
  highScore = 0;
  apples = [];
  snake = [];
  projectiles = [];
  lastHazardReplace = Date.now();
  codeRedeemed = false;
  codePythonRedeemed = false;
  codeAggregateRedeemed = false;
  codeSteelRedeemed = false;
  supportCodeRedeemed = false;
  amplifyCodeRedeemed = false;
  amplifyPending = false;
  stopAmplify();
  sessionCoinSpend = 0;
  resetAbilityState();
  applyProgressDisplay();
}

window.addEventListener('beforeunload', saveProgressNow);
window.addEventListener('pagehide', saveProgressNow);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    freezeAmplifyTimer();
    saveProgressNow();
  } else if (state === 'playing') {
    resumeAmplifyTimer();
  }
});

initProgressState();

const hasSavedGame = loadProgress();
populateLanguageSelect();
loadSettings();
showDevicePicker();
updatePlayModeUI();
initTouchControls();
resizeGameLayout();
initLayoutObserver();
updateHud();

if (hasSavedGame) {
  resumeGame();
} else {
  state = 'waiting';
  render();
}

requestAnimationFrame(() => resizeGameLayout());
