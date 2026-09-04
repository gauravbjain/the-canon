import type { Book } from "../types";

export const theFederalistPapers: Book = {
  slug: "the-federalist-papers",
  title: "The Federalist Papers",
  author: "Alexander Hamilton, James Madison and John Jay",
  year: 1788,
  era: "1787–1788",
  category: "Economics & Politics",
  hook: "Eighty-five newspaper essays written at speed to win a ratification vote, which became the founding work of constitutional theory.",
  readingMinutes: 9,
  coreIdea:
    "Written under the pseudonym Publius to persuade New York to ratify the proposed Constitution, the essays argue that a large republic is more stable than a small one, that ambition must be made to counteract ambition, and that a government of separated and competing powers can be strong enough to govern and constrained enough to be safe. The premise underneath is unsentimental: people are not angels, so institutions must work with the motives people actually have.",
  whyItEndures:
    "It is the most sophisticated political theory produced in America and the most cited source in constitutional interpretation. It is also a demonstration that occasional writing under deadline can be first-rate thinking — Hamilton wrote most of the eighty-five in about six months.",
  sections: [
    {
      heading: "The occasion",
      body: [
        "The Constitution drafted in Philadelphia in 1787 required ratification by nine states, and New York was doubtful. Hamilton organised a newspaper campaign and recruited John Jay, who fell ill and wrote five, and James Madison, who wrote twenty-nine of the most important.",
        "They wrote as Publius, after the Roman consul who helped found the republic, and published in New York papers between October 1787 and August 1788 — sometimes several essays a week.",
        "This is advocacy, not disinterested analysis. The authors are arguing for a document they helped write, against opponents whose objections they sometimes caricature, and reading the Anti-Federalist papers alongside is the only way to see what was actually contested.",
      ],
    },
    {
      heading: "Federalist 10",
      body: [
        "Madison's tenth essay is the most influential piece of political writing produced in America, and its argument runs against everything received theory then held.",
        "The problem it addresses is faction: a group united by a common interest adverse to the rights of others or the permanent interests of the community. Madison notes that the causes of faction are sown in the nature of man, that the most common and durable source is the unequal distribution of property, and that removing the causes would require destroying liberty — a remedy worse than the disease.",
        "So the remedy must control effects. And here he inverts the classical view that republics must be small. A large republic contains more interests, which makes it harder for any faction to form a majority; and representation refines and enlarges public views by passing them through a body of chosen citizens. Extend the sphere, he writes, and you make it less probable that a majority will have a common motive to invade the rights of others.",
      ],
    },
    {
      heading: "Federalist 51",
      body: [
        "The other essential essay states the structural principle. Ambition must be made to counteract ambition, and the interest of the man must be connected with the constitutional rights of the place.",
        "Madison's justification is the most quoted passage in American political thought: if men were angels, no government would be necessary; if angels were to govern men, neither external nor internal controls would be necessary. In framing a government to be administered by men over men, the great difficulty is that you must first enable the government to control the governed, and in the next place oblige it to control itself.",
        "The design follows: separated powers, each branch given the means and the motive to resist encroachment, and — because in a republic the legislature necessarily predominates — the legislature itself divided into two chambers with different modes of election.",
      ],
    },
    {
      heading: "Hamilton on the executive and the courts",
      body: [
        "Hamilton's contributions are the practical case for a strong national government. Federalist 70 argues for a single executive rather than a council, on the grounds that energy in the executive is a leading character in the definition of good government, and that a plural executive destroys accountability by concealing who is responsible.",
        "Federalist 78 makes the case for judicial review before the doctrine existed. The judiciary, having neither force nor will but merely judgement, is the least dangerous branch, and life tenure is necessary to give it independence.",
        "The argument that courts may void unconstitutional statutes is stated directly: where a law contradicts the Constitution, the Constitution ought to be preferred, because the intention of the people should be preferred to the intention of their agents. Marshall drew on this in Marbury v. Madison fifteen years later.",
      ],
    },
    {
      heading: "What they got wrong",
      body: [
        "Political parties are the largest miss. Madison's whole scheme in Federalist 10 assumes that factions will be numerous, shifting and cross-cutting; the emergence of two durable national parties, within a decade, produced exactly the stable majority faction he had designed against.",
        "Hamilton argued in Federalist 84 that a bill of rights was unnecessary and potentially dangerous, since enumerating rights implies that unenumerated ones are surrendered. He lost that argument, and the first ten amendments followed in 1791.",
        "Slavery is handled with evasion. Madison's Federalist 54 defends counting enslaved people as three-fifths of a person by ventriloquising a Southern speaker, which allows the argument to be made without quite being owned. It is the most uncomfortable essay in the collection.",
      ],
    },
    {
      heading: "How to read it now",
      body: [
        "The essays are cited constantly by American courts, and by both originalists and their opponents, which should raise a question about how determinate the guidance is.",
        "The authors disagreed with each other. Hamilton and Madison split within five years over the national bank and the scope of federal power, with Madison arguing the narrow construction that Hamilton's essays had argued against.",
        "The most useful way to read Publius is not as a key to what the Constitution means but as the best available argument for a particular theory of how free government survives — one that assumes self-interest, distrusts virtue, and builds accordingly.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Faction", gloss: "A group united by an interest adverse to others' rights or the common good. Its causes are inherent in human nature and can only be managed, not removed." },
    { term: "The extended republic", gloss: "Madison's inversion of classical theory: a larger republic is safer, because more interests make a durable majority faction harder to assemble." },
    { term: "Ambition counteracting ambition", gloss: "Institutional design that harnesses officeholders' self-interest to defend their branch's prerogatives." },
    { term: "If men were angels", gloss: "The premise of the whole scheme: government must control the governed and then be obliged to control itself." },
    { term: "Energy in the executive", gloss: "Hamilton's case for a single president — unity, decision and accountability against a plural council." },
    { term: "The least dangerous branch", gloss: "Courts with neither force nor will, whose independence justifies life tenure and whose duty includes voiding unconstitutional law." },
  ],
  tensions: [
    "It is campaign literature. The authors are selling a document, and their characterisation of opponents is not always fair — the Anti-Federalist objections, particularly about the absence of a bill of rights, were substantially vindicated.",
    "The scheme did not anticipate national political parties, which arrived almost immediately and undercut the mechanism of Federalist 10.",
    "Federalist 54's defence of the three-fifths clause is evasive and morally indefensible, and the collection as a whole avoids the slavery question the Constitution embedded.",
    "Its use as an interpretive authority is questionable: it was written by three men, two of whom later disagreed profoundly, to persuade one state's voters, and it was not before most ratifying conventions.",
  ],
  connections: {
    reads: [
      { title: "The Anti-Federalist Papers", author: "Brutus, Cato and others", why: "The other half of the debate. Brutus's essays on the judiciary and on the size of a republic predicted a great deal that came true." },
      { title: "Democracy in America", author: "Alexis de Tocqueville", why: "The system in operation fifty years later, observed by someone with no stake in defending it." },
      { title: "The Social Contract", author: "Jean-Jacques Rousseau", why: "The opposite theory of legitimacy — sovereignty that cannot be represented, against Publius's case that representation improves it." },
      { title: "The Republic", author: "Plato", why: "The classical question the essays are answering: whether a large diverse polity can govern itself without dissolving into faction." },
    ],
    threads: [
      { label: "Institutional design", note: "The idea that good government comes from arranging incentives rather than from cultivating virtue is the founding assumption of modern constitutional engineering." },
      { label: "Originalism", note: "The Federalist's status as evidence of original meaning is contested, and the contest is itself a good illustration of what the essays cannot settle." },
    ],
  },
  startHere:
    "Numbers 10 and 51, which are the theory. Then 70 on the executive and 78 on the judiciary. Four essays, about forty pages, and the rest is elaboration.",
  sources: [
    { label: "The Federalist Papers — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Federalist_Papers" },
    { label: "The Federalist Papers — Library of Congress", url: "https://guides.loc.gov/federalist-papers/full-text" },
  ],
};
