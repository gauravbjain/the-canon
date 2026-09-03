"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Cover } from "./Cover";
import type { Book } from "@/content/types";

type Era = { label: string; from: number; to: number };

const ERAS: Era[] = [
  { label: "Ancient", from: -1000, to: 500 },
  { label: "1500–1800", from: 1500, to: 1800 },
  { label: "1800–1900", from: 1801, to: 1900 },
  { label: "1900–1945", from: 1901, to: 1945 },
  { label: "1945–1980", from: 1946, to: 1980 },
  { label: "1980–now", from: 1981, to: 2100 },
];

export function Shelf({
  books,
  covers,
}: {
  books: Book[];
  covers: Record<string, string>;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [era, setEra] = useState<string | null>(null);

  const cats = useMemo(
    () => Array.from(new Set(books.map((b) => b.category))).sort(),
    [books]
  );

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    const e = ERAS.find((x) => x.label === era);
    return books
      .filter((b) => (category ? b.category === category : true))
      .filter((b) => (e ? b.year >= e.from && b.year <= e.to : true))
      .filter((b) =>
        q
          ? b.title.toLowerCase().includes(q) ||
            b.author.toLowerCase().includes(q) ||
            b.hook.toLowerCase().includes(q)
          : true
      )
      .sort((a, b) => a.year - b.year);
  }, [books, query, category, era]);

  const clear = () => {
    setQuery("");
    setCategory(null);
    setEra(null);
  };

  const filtered = Boolean(query || category || era);

  return (
    <>
      <div className="controls">
        <input
          className="search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, author or idea"
          aria-label="Search the shelf"
        />
        <div className="chips" role="group" aria-label="Filter by category">
          {cats.map((c) => (
            <button
              key={c}
              className={`chip${category === c ? " on" : ""}`}
              onClick={() => setCategory(category === c ? null : c)}
              aria-pressed={category === c}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="chips" role="group" aria-label="Filter by era">
          {ERAS.map((e) => (
            <button
              key={e.label}
              className={`chip chip-era${era === e.label ? " on" : ""}`}
              onClick={() => setEra(era === e.label ? null : e.label)}
              aria-pressed={era === e.label}
            >
              {e.label}
            </button>
          ))}
        </div>
      </div>

      <div className="shelf-head">
        <h2>{filtered ? "Matching" : "On the shelf"}</h2>
        <span className="count">
          {shown.length} {shown.length === 1 ? "book" : "books"}
          {filtered && (
            <>
              {" · "}
              <button className="linkish" onClick={clear}>
                clear filters
              </button>
            </>
          )}
        </span>
      </div>

      {shown.length === 0 ? (
        <p className="empty">
          Nothing on the shelf matches that yet. The canon is a hundred books,
          not everything ever written.
        </p>
      ) : (
        <ul className="shelf">
          {shown.map((book) => (
            <li className="shelf-item" key={book.slug}>
              <Link href={`/book/${book.slug}`}>
                <Cover book={book} src={covers[book.slug]} />
                <div className="shelf-meta">
                  <p className="t">{book.title}</p>
                  <p className="a">
                    {book.author} · {book.era}
                  </p>
                  <p className="h">{book.hook}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
