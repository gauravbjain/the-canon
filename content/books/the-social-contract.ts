import type { Book } from "../types";

export const theSocialContract: Book = {
  slug: "the-social-contract",
  title: "The Social Contract",
  author: "Jean-Jacques Rousseau",
  year: 1762,
  era: "1762",
  category: "Economics & Politics",
  hook: "Man is born free, and everywhere he is in chains — so what would make the chains legitimate?",
  readingMinutes: 9,
  coreIdea:
    "Rousseau's question is not whether people can be governed but how authority could ever be legitimate. His answer: only if each person, in obeying, is obeying a law they helped make and would have willed. That requires sovereignty to stay with the people as a whole, expressed through the general will — which is not the sum of individual preferences but what the community wills when each member considers the common good rather than their own interest.",
  whyItEndures:
    "It supplied the vocabulary of the French Revolution and of democratic legitimacy ever since — popular sovereignty, the general will, the people as the source of authority. It is also the most dangerous book in the liberal canon, because the same argument that grounds democracy contains the phrase about forcing men to be free.",
  sections: [
    {
      heading: "The problem stated",
      body: [
        "Rousseau opens with the most famous sentence in political philosophy: man is born free, and everywhere he is in chains. What is usually missed is the sentence after it — he does not know how this change came about, and asks only what can make it legitimate.",
        "He rejects every existing justification in turn. Force creates no right, since obedience compelled by strength lasts only as long as the strength does. Paternal authority ends when children can care for themselves. And a contract of slavery is void, because a person who alienates their liberty alienates the very thing that made the agreement binding.",
        "What remains is the problem he sets himself: to find a form of association that defends each person and their goods with the whole common force, and in which each, uniting with all, still obeys only himself and remains as free as before.",
      ],
    },
    {
      heading: "The general will",
      body: [
        "His solution is the total alienation of each associate with all his rights to the whole community. This sounds like Hobbes and is not, because the community is not a sovereign above the members — it is the members, acting as a body.",
        "Each person gives up everything and receives back an equivalent share in sovereignty. Since the terms are identical for everyone, no one has an interest in making them onerous.",
        "The crucial distinction is between the general will and the will of all. The will of all is the sum of private interests; the general will is what remains when the pluses and minuses of particular interests cancel out — the community willing its own common good. Rousseau insists the general will is always right, which is not a claim that majorities are always right; it is a definition of what the general will means, and it is where most of the trouble starts.",
      ],
    },
    {
      heading: "Forcing men to be free",
      body: [
        "The book's most notorious passage follows directly. Anyone who refuses to obey the general will shall be compelled to do so by the whole body, which means nothing other than that he will be forced to be free.",
        "Rousseau's argument is that a person who acts on private interest against the common good is enslaved by their own appetites, and that compelling them to obey the law they themselves willed restores them to their real freedom.",
        "The phrase has been read, most influentially by Isaiah Berlin, as the origin of totalitarian democracy: once someone else can determine your real will, coercion becomes liberation and there is no defence. Rousseau's defenders point out that his general will requires actual participation by everyone and does not license any particular person or party to speak for it. Both readings are available in the text.",
      ],
    },
    {
      heading: "Government is not sovereign",
      body: [
        "A distinction Rousseau draws sharply and that later readers routinely collapse: sovereignty belongs to the people and can never be represented, delegated or divided. Government is merely an administrative body — a commission, revocable at will, that executes what the sovereign people have willed.",
        "This is why he thought representative democracy a contradiction. The English people, he writes, think they are free and are so only during the election of members of parliament; as soon as the members are elected, the people are slaves and count for nothing.",
        "He is also clear that his model requires a small state. He thought a large republic could not sustain the general will, and his examples throughout are Sparta, republican Rome and Geneva, not any modern nation.",
      ],
    },
    {
      heading: "The lawgiver and the civil religion",
      body: [
        "Two of the strangest chapters address a real problem: a people needs good laws to become the kind of people who could write good laws.",
        "His answer is the lawgiver — an extraordinary figure who frames the constitution for a people not yet capable of framing it, holds no office and no power, and departs. Rousseau's examples are Lycurgus, Solon and Numa, and he admits the figure requires something close to divine authority to be accepted.",
        "The final chapter proposes a civil religion: a minimal set of publicly enforced beliefs — a benevolent divinity, an afterlife, the sanctity of the social contract, and the exclusion of intolerance — with exile for those who do not accept them and death for those who accept them publicly and act against them. It is the most illiberal passage in the book and it is not incidental to the argument.",
      ],
    },
  ],
  keyIdeas: [
    { term: "The general will", gloss: "What a community wills when each member considers the common good — distinct from the will of all, which is the sum of private interests." },
    { term: "Popular sovereignty", gloss: "Authority residing permanently in the people as a body, never transferable and never representable." },
    { term: "Forced to be free", gloss: "Compelling someone to obey the law they themselves willed, on the grounds that private appetite is the real servitude. The book's most contested sentence." },
    { term: "Government as commission", gloss: "The executive as a revocable administrative body, not a sovereign. Rousseau's sharpest structural distinction." },
    { term: "The lawgiver", gloss: "An extraordinary founder who frames institutions for a people not yet capable of framing them, and then leaves." },
    { term: "Civil religion", gloss: "A minimal enforced public creed to bind citizens to the contract — the book's most illiberal proposal." },
  ],
  tensions: [
    "The general will has no procedure. Rousseau never explains how a community determines what it is, which leaves the concept available to anyone confident they know.",
    "Isaiah Berlin's charge — that this is the intellectual origin of totalitarian democracy — has been argued about for seventy years and is not obviously wrong.",
    "The model requires a small, homogeneous, participatory state, and Rousseau says so. Applying it to large modern nations, which the French revolutionaries did, is a use he did not authorise.",
    "The civil religion chapter, with exile and death as penalties, is difficult to reconcile with the book's defence of freedom, and Rousseau does not try.",
  ],
  connections: {
    reads: [
      { title: "Leviathan", author: "Thomas Hobbes", why: "The contract that transfers sovereignty away permanently. Rousseau accepts the device and refuses the transfer." },
      { title: "Reflections on the Revolution in France", author: "Edmund Burke", why: "The counter-revolution's founding text, written against exactly the abstraction Rousseau supplied to the revolutionaries." },
      { title: "A Theory of Justice", author: "John Rawls", why: "The modern reconstruction of the contract tradition, explicitly indebted to Rousseau's insistence that the terms be ones anyone could accept." },
      { title: "On Liberty", author: "John Stuart Mill", why: "The liberal answer to what Rousseau leaves undefended: what protects the individual when the community has decided." },
    ],
    threads: [
      { label: "Popular sovereignty", note: "Every claim that legitimate authority derives from the people rather than from God, tradition or force runs through this book." },
      { label: "The general will problem", note: "How a collective determines its own common good, without a procedure that reduces to counting preferences, is still unsolved and still politically live." },
    ],
  },
  startHere:
    "Book One, whole — about twenty pages, containing the opening argument, the contract and the forced-to-be-free passage. Then Book Two, chapters 1 to 3, on the general will.",
  sources: [
    { label: "The Social Contract — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Social_Contract" },
    { label: "Jean-Jacques Rousseau — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/rousseau/" },
  ],
};
