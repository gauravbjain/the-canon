import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { books, bySlug } from "@/content";
import { Cover } from "@/components/Cover";
import { resolveCover } from "@/lib/covers";

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

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = bySlug(slug);
  if (!book) notFound();

  const cover = await resolveCover(book);

  return (
    <main>
      <div className="wrap wrap-book">
        <div className="book-head">
          <Cover book={book} src={cover} large />
          <div>
            <p className="eyebrow">{book.category}</p>
            <h1>{book.title}</h1>
            <p className="byline">
              {book.author} · {book.era}
            </p>
            <ul className="facts">
              <li>{book.readingMinutes} min read</li>
              <li>{book.sections.length} sections</li>
              <li>{book.connections.reads.length} onward reads</li>
            </ul>
            <p className="lede">{book.hook}</p>
          </div>
        </div>

        <article className="read">
          <section>
            <h2>The core idea</h2>
            <div className="core">
              <p>{book.coreIdea}</p>
              <p>{book.whyItEndures}</p>
            </div>
          </section>

          <section>
            <h2>The summary</h2>
            {book.sections.map((s) => (
              <div key={s.heading}>
                <h3>{s.heading}</h3>
                {s.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            ))}
          </section>

          <section>
            <h2>The vocabulary it gives you</h2>
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
            <h2>Where it is contested</h2>
            <ul className="bullets">
              {book.tensions.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>What it connects to</h2>
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
            <h2>If you only read one part</h2>
            <div className="start">
              <p>{book.startHere}</p>
            </div>
          </section>

          <section>
            <h2>Sources</h2>
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

          <hr className="divider" />
          <Link className="back" href="/">
            ← Back to the shelf
          </Link>
        </article>
      </div>
    </main>
  );
}
