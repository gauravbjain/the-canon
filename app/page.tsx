import { books } from "@/content";
import { Shelf } from "@/components/Shelf";
import { resolveCovers } from "@/lib/covers";

export default async function Home() {
  const covers = await resolveCovers(books);

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
        <Shelf books={books} covers={covers} />
      </div>
    </main>
  );
}
