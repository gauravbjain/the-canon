/**
 * Cover resolution.
 *
 * Real jackets come from the Open Library covers service. Lookups happen at
 * build time on Vercel (which has network access) and are baked into the
 * static HTML — no runtime requests, no API keys. When a lookup fails, or
 * when the build runs somewhere without network, the generated typographic
 * cover is used instead, so the shelf never shows a broken image.
 *
 * A book can pin an exact cover with `coverId` (an Open Library cover id) or
 * `coverIsbn`, which skips the search entirely and is the fix when the search
 * returns the wrong edition.
 */

import type { Book } from "@/content/types";

const SEARCH = "https://openlibrary.org/search.json";
const IMG = "https://covers.openlibrary.org/b";

export function coverUrlFromId(id: number | string, size: "M" | "L" = "L") {
  return `${IMG}/id/${id}-${size}.jpg`;
}

export function coverUrlFromIsbn(isbn: string, size: "M" | "L" = "L") {
  return `${IMG}/isbn/${isbn}-${size}.jpg`;
}

async function lookup(book: Book): Promise<string | null> {
  const params = new URLSearchParams({
    title: book.title,
    author: book.author,
    fields: "cover_i,title,author_name",
    limit: "5",
    lang: "eng",
  });

  const res = await fetch(`${SEARCH}?${params}`, {
    headers: { "User-Agent": "the-canon (github.com/gauravbjain/the-canon)" },
    next: { revalidate: 60 * 60 * 24 * 7 },
    signal: AbortSignal.timeout(8000),
  });

  if (!res.ok) return null;

  const data = (await res.json()) as { docs?: { cover_i?: number }[] };
  const hit = data.docs?.find((d) => typeof d.cover_i === "number");
  return hit?.cover_i ? coverUrlFromId(hit.cover_i) : null;
}

/** Resolve one book's jacket. Never throws. */
export async function resolveCover(book: Book): Promise<string | null> {
  if (book.coverId) return coverUrlFromId(book.coverId);
  if (book.coverIsbn) return coverUrlFromIsbn(book.coverIsbn);
  try {
    return await lookup(book);
  } catch {
    return null;
  }
}

/** Resolve the whole shelf, in small waves so Open Library is not hammered. */
export async function resolveCovers(
  list: Book[]
): Promise<Record<string, string>> {
  const out: Record<string, string> = {};
  const WAVE = 8;

  for (let i = 0; i < list.length; i += WAVE) {
    const wave = list.slice(i, i + WAVE);
    const found = await Promise.all(wave.map((b) => resolveCover(b)));
    wave.forEach((b, j) => {
      const url = found[j];
      if (url) out[b.slug] = url;
    });
  }

  return out;
}
