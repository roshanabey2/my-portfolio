import { useReducedMotion } from 'framer-motion';


const options = {
  // Start playing immediately (default: true)
  autoStart: true,

  // How much the canvas fades each frame (0–1, default: 0.05)
  fadeStrength: 0.05,

  // Top‐level generator settings
  rainGenerator: {
    // Total number of drops (if omitted, computed from density & canvas width)
    count: 150,
    // Density of drops (0–2, default: 2)
    density: 1.5,
    // Direction: "TD" (top→down), "LR", "BU", or "RL" (default: "TD")
    direction: 'TD',
  },

  // Per‐drop configuration (applies to every drop unless you pass an array)
  rainDrop: {
    // Which characters to draw (you can pass a single string or an array of strings)
    charArrays: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    // Color of the HEAD character (any valid CSS color, default: white with 0.8 alpha)
    headColor: '#9d7cd8',
    // Color of the TRAIL characters (default: purple in the library)
    trailColor: '#bb9af7',
    // Font size in pixels (default: 14)
    fontSize: 16,
    // Font family (default: "Arial")
    fontFamily: 'monospace',
    // Width of each “column” (default: 12)
    rainWidth: 12,
    // Align each drop to columns (default: true)
    alignToColumns: true,
  },

  // (Optional) “bloom” glow around heads/trails
  headBloomSize: 10,                       // default: 0
  headBloomColor: '#bb9af7',  // default: white
  trailBloomSize: 5,                       // default: 0
  trailBloomColor: '#b4f9f8', // default: white
};

export default options;


