import { paletteFor } from "@/lib/cover";
import type { Book } from "@/content/types";

/**
 * A book's jacket. When a real cover resolved, it is shown over the
 * generated one — so a jacket that fails to load in the browser reveals the
 * typographic cover underneath rather than an empty box.
 */
export function Cover({
  book,
  src,
  large = false,
}: {
  book: Book;
  src?: string | null;
  large?: boolean;
}) {
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
      <p className="cover-title" style={{ fontSize: long ? "1.08rem" : undefined }}>
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
