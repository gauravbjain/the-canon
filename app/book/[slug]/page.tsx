import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { books, bySlug } from "@/content";
import { Cover } from "@/components/Cover";
import { resolveCover, resolveCovers } from "@/lib/covers";
import { catColor } from "@/lib/category";
import type { Book } from "@/content/types";

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = bySlug(slug);
  if (!book) return {};
  return {
    title: `${book.title} — ${book.author}`,
    description: book.hook,
  };
}

/** Three more books from the same subject, for the strip at the foot. */
function neighbours(book: Book): Book[] {
  const sameCat = books.filter(
    (b) => b.category === book.category && b.slug !== book.slug
  );
  const pool = sameCat.length >= 4 ? sameCat : books.filter((b) => b.slug !== book.slug);
  return [...pool]
    .sort(
      (a, b) => Math.abs(a.year - book.year) - Math.abs(b.year - book.year)
    )
    .slice(0, 4);
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = bySlug(slug);
  if (!book) notFound();

  const cover = await resolveCover(book);
  const also = neighbours(book);
  const alsoCovers = await resolveCovers(also);
  const hue = catColor(book.category);

  /* The first key idea doubles as the pull quote, set between sections. */
  const quote = book.keyIdeas[0];
  const mid = Math.max(1, Math.ceil(book.sections.length / 2));
  const firstHalf = book.sections.slice(0, mid);
  const secondHalf = book.sections.slice(mid);

  return (
    <>
      <header className="article-head">
        <div className="wrap">
          <div className="article-shell">
            <Link href="/" className="breadcrumb">
              ← The Canon
            </Link>

            <div className="opener">
              <div>
                <p className="article-cat" style={{ color: hue }}>
                  {book.category}
                </p>
                <h1 className="article-title">{book.title}</h1>
                <p className="article-standfirst">{book.hook}</p>
                <div className="byline">
                  <span className="author">{book.author}</span>
                  <span className="sep">·</span>
                  <span>{book.era}</span>
                  <span className="sep">·</span>
                  <span>{book.readingMinutes} min read</span>
                  <span className="sep">·</span>
                  <span>{book.connections.reads.length} onward reads</span>
                </div>
              </div>

              <figure className="opener-jacket">
                <Cover book={book} src={cover} large />
                <figcaption className="opener-caption">
                  {book.author}
                  <br />
                  {book.era}
                </figcaption>
              </figure>
            </div>

            <div className="core">
              <p>{book.coreIdea}</p>
              <p>{book.whyItEndures}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="wrap">
        <div className="article-shell">
        <article className="read">
          <section>
            <p className="rubric">The summary</p>
            {firstHalf.map((s, i) => (
              <div key={s.heading}>
                <h3>{s.heading}</h3>
                {s.body.map((para, j) => (
                  <p key={j} className={i === 0 && j === 0 ? "dropcap" : undefined}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </section>

          {quote && (
            <blockquote className="pullquote">
              {quote.gloss}
              <cite>{quote.term}</cite>
            </blockquote>
          )}

          <section>
            {secondHalf.map((s) => (
              <div key={s.heading}>
                <h3>{s.heading}</h3>
                {s.body.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            ))}
          </section>

          <section>
            <p className="rubric">The vocabulary it gives you</p>
            <ul className="terms">
              {book.keyIdeas.map((k) => (
                <li key={k.term}>
                  <span className="term">{k.term}</span>
                  <span className="gloss">{k.gloss}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="rubric">Where it is contested</p>
            <ul className="bullets">
              {book.tensions.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </section>

          <section>
            <p className="rubric">What it connects to</p>
            <ul className="reads">
              {book.connections.reads.map((r) => (
                <li key={r.title}>
                  <span className="rt">{r.title}</span>{" "}
                  <span className="ra">— {r.author}</span>
                  <p className="rw">{r.why}</p>
                </li>
              ))}
            </ul>
            <div className="threads">
              {book.connections.threads.map((t) => (
                <div className="thread" key={t.label}>
                  <span className="tl">{t.label}</span>
                  <p className="tn">{t.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="rubric">If you only read one part</p>
            <div className="start">
              <p>{book.startHere}</p>
            </div>
          </section>

          <section>
            <p className="rubric">Sources</p>
            <ul className="sources">
              {book.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div className="article-foot">
            <Link className="back" href="/">
              ← Back to the shelf
            </Link>
            <span className="colophon">
              {book.title} · {book.era}
            </span>
          </div>
        </article>
        </div>
      </div>

      <aside className="alsoread">
        <div className="wrap">
          <div className="section-head" style={{ marginTop: 0 }}>
            <h2>Read next</h2>
            <span className="section-note">Nearby in {book.category}</span>
          </div>
          <ul className="shelf">
            {also.map((b) => (
              <li className="shelf-item" key={b.slug}>
                <Link href={`/book/${b.slug}`}>
                  <Cover book={b} src={alsoCovers[b.slug]} />
                  <div className="shelf-meta">
                    <p className="t">{b.title}</p>
                    <p className="a">{b.author}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
