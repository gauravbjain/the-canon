import type { Book } from "../types";

export const theElementsOfStyle: Book = {
  slug: "the-elements-of-style",
  title: "The Elements of Style",
  author: "William Strunk Jr. and E. B. White",
  year: 1959,
  era: "1918, revised 1959",
  category: "Craft & Work",
  hook: "Omit needless words — in about a hundred pages, most of which are examples.",
  readingMinutes: 7,
  coreIdea:
    "Strunk's original 1918 pamphlet, written for his Cornell students and expanded by his former student E. B. White forty years later, argues that clear writing comes from a small number of habits rigorously applied: prefer the specific to the general, the active to the passive, the short to the long, and cut everything that is not doing work. The book's authority comes from its brevity — it practises what it prescribes.",
  whyItEndures:
    "It is the most widely assigned writing manual in the English-speaking world and has sold over ten million copies. It is also genuinely contested by linguists, which makes it a useful case in what a style guide can and cannot claim.",
  sections: [
    {
      heading: "The little book",
      body: [
        "William Strunk Jr. taught English at Cornell and printed a forty-three-page manual for his classes in 1918, which he referred to as the little book. E. B. White took the course in 1919, remembered it, and was asked by Macmillan in 1957 to revise it for general publication.",
        "White's contribution is substantial: he lightened Strunk's tone, added a fifth chapter of his own on style, and wrote an introduction that is the best short portrait of a teacher in American letters. Strunk, he recalls, would lean forward and say things three times — omit needless words, omit needless words, omit needless words — having by then omitted so many that he had time to fill.",
        "The book's structure is deliberately modest: elementary rules of usage, principles of composition, matters of form, misused words and expressions, and White's essay. Most of the content is worked examples rather than exposition.",
      ],
    },
    {
      heading: "The rules people actually use",
      body: [
        "Rule 17 is the famous one. Vigorous writing is concise: a sentence should contain no unnecessary words, a paragraph no unnecessary sentences, for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts.",
        "Rule 13 — make definite assertions, avoid tame, colourless, hesitating, non-committal language — and Rule 14, use the active voice, do most of the practical work in ordinary editing.",
        "Rule 16 is the one working writers cite most: use definite, specific, concrete language. Strunk's illustration is that a period of unfavourable weather set in should be replaced by it rained every day for a week. The general point is that abstraction is where bad prose hides.",
      ],
    },
    {
      heading: "White's chapter",
      body: [
        "The fifth chapter, An Approach to Style, is White's and is a different kind of writing from Strunk's rules. It is a set of twenty-one suggestions, hedged and personal, on matters no rule can settle.",
        "Its best advice is about the self. Place yourself in the background; write in a way that comes naturally; do not affect a breezy manner; avoid fancy words; do not explain too much; and — his most quoted line — the approach to style is by way of plainness, simplicity, orderliness, sincerity.",
        "The chapter also contains the observation that style has no separate entity, that it is the writer, and that a careless writer will be found out no matter how well the rules are followed. It is a substantial qualification of everything preceding it.",
      ],
    },
    {
      heading: "The linguists' objection",
      body: [
        "The most sustained attack came from Geoffrey Pullum, co-author of The Cambridge Grammar of the English Language, in a 2009 essay marking the book's fiftieth anniversary.",
        "His charges are specific. Strunk and White misidentify the passive voice in three of their four illustrative examples. Their prohibitions — against which as a restrictive relative, against sentence-initial however, against the split infinitive — are inventions rather than descriptions of good usage, and are violated constantly by the writers they admire and by Strunk and White themselves.",
        "Pullum's broader point is that the book presents personal preference as grammatical rule, and that generations of students have been taught to distrust constructions used by every major English writer. This is a fair criticism of the book's authority and not of its usefulness.",
      ],
    },
    {
      heading: "How to use it",
      body: [
        "The defensible position is that Elements is excellent as an editing discipline and unreliable as a grammar. The instinct to cut, to prefer the concrete, and to make the subject do the verb's work is genuinely good and improves almost any draft.",
        "The specific prohibitions should be treated as one editor's preferences, occasionally sharp and occasionally wrong, rather than as rules with a basis in the language.",
        "White himself would probably have agreed. His chapter ends by noting that these are suggestions rather than commandments, and that the best writers break rules that are not really rules.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Omit needless words", gloss: "The organising instruction. Not brevity for its own sake but making every word do work." },
    { term: "Use definite, specific, concrete language", gloss: "Abstraction is where weak writing hides. Replace the general statement with what actually happened." },
    { term: "Prefer the active voice", gloss: "Put the actor in the subject position, which usually shortens the sentence and clarifies responsibility." },
    { term: "Place yourself in the background", gloss: "White's rule: the writer's personality should emerge from the writing rather than be asserted by it." },
    { term: "Style is the writer", gloss: "The book's own qualification — no set of rules produces good prose, and carelessness will be visible through any of them." },
  ],
  tensions: [
    "Geoffrey Pullum's critique is substantive: the book misidentifies the passive voice, invents rules with no basis in usage, and violates its own prohibitions repeatedly.",
    "The prescriptions suit a particular kind of English — plain, declarative, mid-century American — and can flatten writing in other registers if applied mechanically.",
    "Its brevity, which is its main virtue, means it cannot address anything structural: argument, evidence, organisation at length, or writing for particular audiences.",
    "Its enormous authority in schools has arguably done harm, teaching students to fear constructions that good writers use freely.",
  ],
  connections: {
    reads: [
      { title: "Politics and the English Language", author: "George Orwell", why: "The other founding essay of plain English, and one with a political argument: that vague language enables indefensible positions." },
      { title: "On Writing Well", author: "William Zinsser", why: "The best modern successor for nonfiction, longer and warmer and without the grammatical errors." },
      { title: "The Sense of Style", author: "Steven Pinker", why: "A style guide written by a linguist, explicitly correcting Strunk and White's grammar while endorsing much of their taste." },
      { title: "Notes of a Native Son", author: "James Baldwin", why: "A demonstration that great prose can ignore nearly every rule in the little book, which is worth knowing before you follow them." },
    ],
    threads: [
      { label: "Prescription versus description", note: "The book is the most famous artefact of the argument between people who tell you how to write and people who study how English works." },
      { label: "Clarity as ethics", note: "Strunk's brevity and Orwell's politics converge on the idea that unclear writing is not merely inelegant but evasive." },
    ],
  },
  startHere:
    "Chapter Two, Elementary Principles of Composition, especially rules 13 to 17. Then White's chapter. The whole book takes an hour.",
  sources: [
    { label: "The Elements of Style — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Elements_of_Style" },
    { label: "50 Years of Stupid Grammar Advice — Geoffrey Pullum", url: "https://www.chronicle.com/article/50-years-of-stupid-grammar-advice/" },
  ],
};
