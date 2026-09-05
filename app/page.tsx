import { books } from "@/content";
import { Shelf } from "@/components/Shelf";
import { Cover } from "@/components/Cover";
import { resolveCovers } from "@/lib/covers";

/** Three jackets for the masthead stack — oldest, a middle, and the newest. */
function leadTrio() {
  const byYear = [...books].sort((a, b) => a.year - b.year);
  return [
    byYear[0],
    byYear[Math.floor(byYear.length / 2)],
    byYear[byYear.length - 1],
  ].filter(Boolean);
}

export default async function Home() {
  const covers = await resolveCovers(books);
  const trio = leadTrio();
  const categories = new Set(books.map((b) => b.category));
  const oldest = Math.min(...books.map((b) => b.year));
  const span = new Date().getFullYear() - oldest;

  return (
    <>
      <section className="frontpage-lead">
        <div className="wrap lead-grid">
          <div>
            <p className="kicker">The hundred that mattered</p>
            <h1 className="lead-hed">
              Nonfiction, read properly and written down.
            </h1>
            <p className="lead-standfirst">
              One long summary per book — the idea it exists to make, how the
              argument actually runs, where it has been challenged, and what to
              read next. Written to stand on its own, not to replace the book,
              but to let you decide whether you need it.
            </p>
            <ul className="lead-stats">
              <li>
                <span className="n">{books.length}</span>
                <span className="l">Books</span>
              </li>
              <li>
                <span className="n">{categories.size}</span>
                <span className="l">Subjects</span>
              </li>
              <li>
                <span className="n">{Math.round(span / 100)}</span>
                <span className="l">Centuries</span>
              </li>
            </ul>
          </div>

          <div className="lead-stack" aria-hidden="true">
            {trio.map((b) => (
              <div className="stack-item" key={b.slug}>
                <Cover book={b} src={covers[b.slug]} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Shelf books={books} covers={covers} />
    </>
  );
}
