import type { Book } from "./types";
import { meditations } from "./books/meditations";
import { thinkingFastAndSlow } from "./books/thinking-fast-and-slow";

/**
 * The shelf. To add a book: drop a file in content/books, import it here,
 * add it to this array. Everything else — routes, covers, filters, sitemap —
 * follows automatically.
 */
export const books: Book[] = [meditations, thinkingFastAndSlow];

export const bySlug = (slug: string): Book | undefined =>
  books.find((b) => b.slug === slug);

export const categories = (): string[] =>
  Array.from(new Set(books.map((b) => b.category))).sort();

export type { Book };
