import { paletteFor } from "@/lib/cover";
import type { Book } from "@/content/types";

export function Cover({ book, large = false }: { book: Book; large?: boolean }) {
  const p = paletteFor(book.slug);
  const long = book.title.length > 26;

  return (
    <div
      className={`cover${large ? " cover-lg" : ""}`}
      style={{ background: p.bg, color: p.ink }}
      aria-hidden="true"
    >
      <p className="cover-cat" style={{ color: p.accent }}>
        {book.category}
      </p>
      <p
        className="cover-title"
        style={{ fontSize: long ? "1.08rem" : undefined }}
      >
        {book.title}
      </p>
      <div className="cover-rule" style={{ background: p.rule }} />
      <p className="cover-author">{book.author}</p>
      <p className="cover-year">{book.era}</p>
    </div>
  );
}
