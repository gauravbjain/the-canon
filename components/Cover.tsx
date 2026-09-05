import { paletteFor } from "@/lib/cover";
import type { Book } from "@/content/types";

/**
 * A book's jacket. A resolved cover image sits over the generated typographic
 * one, so a jacket that fails to load reveals the designed cover underneath
 * rather than an empty box.
 */
export function Cover({
  book,
  src,
  large = false,
  className = "",
}: {
  book: Book;
  src?: string | null;
  large?: boolean;
  className?: string;
}) {
  const p = paletteFor(book.slug);
  const long = book.title.length > 28;

  return (
    <div
      className={`cover${large ? " cover-lg" : ""}${className ? ` ${className}` : ""}`}
      style={{ background: p.bg, color: p.ink }}
      aria-hidden="true"
    >
      <p className="cover-cat" style={{ color: p.accent }}>
        {book.category}
      </p>
      <p className={`cover-title${long ? " cover-title-long" : ""}`}>
        {book.title}
      </p>
      <div className="cover-rule" style={{ background: p.rule }} />
      <p className="cover-author">{book.author}</p>
      <p className="cover-year">{book.era}</p>

      {src ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          className="cover-jacket"
          src={src}
          alt=""
          loading={large ? "eager" : "lazy"}
          decoding="async"
        />
      ) : null}
    </div>
  );
}
