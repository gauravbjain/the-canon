import type { Category } from "@/content/types";

/** Category accent colours, matching the custom properties in globals.css. */
export const categoryVar: Record<Category, string> = {
  Philosophy: "var(--cat-philosophy)",
  Science: "var(--cat-science)",
  History: "var(--cat-history)",
  "Economics & Politics": "var(--cat-politics)",
  "Mind & Psychology": "var(--cat-mind)",
  "Society & Culture": "var(--cat-society)",
  Testimony: "var(--cat-testimony)",
  "Craft & Work": "var(--cat-craft)",
};

export function catColor(c: string): string {
  return categoryVar[c as Category] ?? "var(--accent)";
}
