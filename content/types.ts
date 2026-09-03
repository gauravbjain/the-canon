export type Category =
  | "Philosophy"
  | "Science"
  | "History"
  | "Economics & Politics"
  | "Mind & Psychology"
  | "Society & Culture"
  | "Testimony"
  | "Craft & Work";

export type Section = {
  heading: string;
  body: string[];
};

export type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  /** First publication year. Negative for BCE. */
  year: number;
  /** How the date should read on the page, e.g. "c. 180 CE". */
  era: string;
  category: Category;
  /** One line for the shelf. */
  hook: string;
  /** Pin an exact Open Library cover id, bypassing the title/author search. */
  coverId?: number;
  /** Pin a jacket by ISBN instead. Used when coverId is not set. */
  coverIsbn?: string;
  /** Minutes to read this summary. */
  readingMinutes: number;
  /** The single idea, in two or three sentences. */
  coreIdea: string;
  /** Why it is still read. */
  whyItEndures: string;
  /** The body of the summary — the 3 to 5 page read. */
  sections: Section[];
  /** The vocabulary the book gives you. */
  keyIdeas: { term: string; gloss: string }[];
  /** Where the book is contested, weak, or dated. */
  tensions: string[];
  connections: {
    /** Other books this one talks to. */
    reads: { title: string; author: string; why: string }[];
    /** Ideas and conversations it sits inside. */
    threads: { label: string; note: string }[];
  };
  /** If you only read one part. */
  startHere: string;
  sources: { label: string; url: string }[];
};
