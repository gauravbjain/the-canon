/**
 * Deterministic cover art. Same slug always yields the same palette, so a
 * book's spine never changes once someone has seen it.
 */

export type Palette = {
  bg: string;
  ink: string;
  accent: string;
  rule: string;
};

const PALETTES: Palette[] = [
  { bg: "#1f3b2c", ink: "#f4efe4", accent: "#d8a657", rule: "#8fae97" },
  { bg: "#7c2b1f", ink: "#f6ece1", accent: "#e8b04b", rule: "#d09a86" },
  { bg: "#1b3050", ink: "#eef2f7", accent: "#7fb3d5", rule: "#8ba2bd" },
  { bg: "#402a4d", ink: "#f3ecf5", accent: "#c9a0dc", rule: "#a98cb5" },
  { bg: "#5c4322", ink: "#f7f0e2", accent: "#e6c07b", rule: "#b39b6e" },
  { bg: "#14403f", ink: "#e9f3f1", accent: "#7fcbc4", rule: "#82a8a4" },
  { bg: "#4a1f2b", ink: "#f7ebe9", accent: "#e2919d", rule: "#b78790" },
  { bg: "#2c2c2c", ink: "#f2f0ec", accent: "#c8b78f", rule: "#8f8d88" },
];

function hash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

export function paletteFor(slug: string): Palette {
  return PALETTES[hash(slug) % PALETTES.length];
}

/** A stable 0–1 value per slug, for small layout variations. */
export function jitter(slug: string, salt = ""): number {
  return (hash(slug + salt) % 1000) / 1000;
}
