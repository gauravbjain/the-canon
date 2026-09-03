import Link from "next/link";
import { books } from "@/content";
import { Cover } from "@/components/Cover";

export default function Home() {
  const sorted = [...books].sort((a, b) => a.year - b.year);

  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">The hundred that mattered</p>
          <h1>Nonfiction, read properly and written down.</h1>
          <p>
            One long summary per book: the idea it exists to make, how the
            argument runs, where it has been challenged, and what it connects
            to. Written to be read on its own — not to replace the book, but to
            let you decide whether you need it.
          </p>
        </div>
      </section>

      <div className="wrap">
        <div className="shelf-head">
          <h2>On the shelf</h2>
          <span className="count">
            {books.length} of 100 · more added weekly
          </span>
        </div>

        <ul className="shelf">
          {sorted.map((book) => (
            <li className="shelf-item" key={book.slug}>
              <Link href={`/book/${book.slug}`}>
                <Cover book={book} />
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
      </div>
    </main>
  );
}
