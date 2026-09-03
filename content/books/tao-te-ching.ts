import type { Book } from "../types";

export const taoTeChing: Book = {
  slug: "tao-te-ching",
  title: "Tao Te Ching",
  author: "Laozi",
  year: -400,
  era: "c. 4th century BCE",
  category: "Philosophy",
  hook: "The argument that most of what goes wrong is caused by trying too hard.",
  readingMinutes: 8,
  coreIdea:
    "There is a way things go — the Tao — and it cannot be named, only approached. Human trouble comes from forcing: imposing categories, striving for status, legislating virtue, interfering with processes that would resolve themselves. The corresponding skill is wu wei, usually translated as non-action but closer to acting without strain, in the grain of a situation rather than against it.",
  whyItEndures:
    "Eighty-one short chapters, about five thousand characters, and one of the most translated books in the world. It offers the permanent counterweight to every philosophy of effort, and it does so in language deliberately built to resist being turned into a programme.",
  sections: [
    {
      heading: "The first line, and what it commits to",
      body: [
        "The book opens by disqualifying itself: the way that can be spoken of is not the constant way; the name that can be named is not the constant name. Everything that follows is offered in the knowledge that it is approximate.",
        "This is not mysticism for its own sake. The claim is about the limits of concepts — that naming carves the world into pieces, that the pieces are useful and are not the world, and that most human error comes from mistaking the carving for the thing.",
        "It also sets the style. The text works by paradox, negative statement and image rather than argument, because a well-formed argument would be a claim to have named the unnameable. Readers who want propositions find this maddening; the frustration is part of the instruction.",
      ],
    },
    {
      heading: "Wu wei",
      body: [
        "The core practical concept is wu wei — literally non-doing, but the book is plainly not recommending idleness. The sage acts, and things get done; the text repeatedly says that by doing nothing, nothing is left undone.",
        "What is being ruled out is forced action, action against the grain, the kind of effort that generates its own resistance. The image the book returns to is water: the softest thing in the world, which overcomes the hardest, which wears away rock not by striking it but by persisting and yielding.",
        "The nearest modern translation is something like effortless effectiveness, or what an expert does when a task has become second nature — the craftsman who no longer thinks about the tool. The Tao Te Ching's claim is that this is available not only in crafts but in living and in governing.",
      ],
    },
    {
      heading: "The uses of emptiness",
      body: [
        "One of the book's most striking passages notes that thirty spokes share a hub, and it is the hole at the centre that makes the wheel useful; clay is shaped into a pot, and it is the empty space that holds; a room is cut with doors and windows, and it is the emptiness that makes it a room.",
        "The general lesson is that what is absent does the work. Applied to a person, it argues for reducing rather than accumulating — fewer desires, fewer certainties, less of the self in the way. In learning, one adds daily; in the Tao, one subtracts daily.",
        "This is a genuinely different picture of a good life from anything in the Greek or Confucian traditions. It does not aim at excellence, achievement or the fullest development of human capacity. It aims at getting out of the way.",
      ],
    },
    {
      heading: "The argument with Confucius",
      body: [
        "The Tao Te Ching is, among other things, a polemic. When the great way is abandoned, it says, we get benevolence and righteousness; when cleverness appears, we get great hypocrisy; when family relations are not harmonious, we get filial piety.",
        "The charge is that Confucian virtues are symptoms rather than cures. You only need to preach loyalty in a society where loyalty has broken down. The elaborate machinery of ritual and moral instruction is evidence of a disease, and adding more of it deepens the problem.",
        "This extends to law and government. The more prohibitions there are, the poorer the people become; the more laws are promulgated, the more thieves there are. The best ruler is one whose existence the people barely notice, and when the work is done they say they did it themselves.",
      ],
    },
    {
      heading: "Softness, lowness, and reversal",
      body: [
        "A recurring structure is that things turn into their opposites at the extreme, and that the apparently weaker position is the stronger one. The rigid and hard are companions of death; the soft and yielding are companions of life. A tree that is stiff breaks; grass survives the storm.",
        "The strategic version is deliberate lowness. Rivers and seas are kings of the hundred valleys because they lie below them. To lead people, place yourself behind them. To be preserved whole, be bent.",
        "This gives the book its double life. It has been read for two thousand years as a manual of contemplative retreat and, just as often, as a text of extraordinarily subtle statecraft — the two readings sit in the same sentences.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Tao", gloss: "The way things go — the pattern underlying change. Explicitly beyond naming; every description in the book is admitted to be approximate." },
    { term: "Wu wei", gloss: "Acting without strain, in the grain of the situation. Not passivity but the removal of forcing." },
    { term: "The uses of emptiness", gloss: "What is absent does the work — the hole in the hub, the space in the pot. An argument for subtraction over accumulation." },
    { term: "Reversal", gloss: "Things at their extreme turn into their opposites, so the yielding position is frequently the durable one." },
    { term: "Governing by not governing", gloss: "The best ruler is barely noticed; multiplying laws multiplies transgression." },
  ],
  tensions: [
    "Laozi may not have existed. The traditional story of an archivist who wrote the text at a border guard's request before disappearing west is legend, and the work shows signs of accretion over generations.",
    "Its resistance to definition makes it endlessly appropriable. The same eighty-one chapters have been read as anarchism, as authoritarian statecraft, as personal quietism and as a management philosophy.",
    "Translations diverge wildly — some are scholarly, many are loose devotional renderings, and popular English versions often import a serenity the Chinese does not obviously carry. Which translation you read substantially determines which book you read.",
    "The critique of Confucian virtue is powerful as diagnosis and thin as prescription. It is not clear what a society does with the observation that its moral instruction is a symptom.",
  ],
  connections: {
    reads: [
      { title: "The Analects", author: "Confucius", why: "The position this book is arguing against. Reading them together is the fastest way into Chinese thought, because each is answering the other." },
      { title: "Zhuangzi", author: "Zhuangzi", why: "The other founding Daoist text, and much funnier — parables, jokes and the butterfly dream, where Laozi is aphoristic and grave." },
      { title: "Meditations", author: "Marcus Aurelius", why: "The Stoic and the Daoist converge on accepting what cannot be changed, and diverge sharply on whether duty and effort are the point." },
      { title: "Zen and the Art of Motorcycle Maintenance", author: "Robert Pirsig", why: "A twentieth-century Western attempt at the same target: the quality that appears when the doer stops obstructing the doing." },
    ],
    threads: [
      { label: "Flow and expertise", note: "Wu wei is the closest ancient description of what psychologists later called flow — absorbed, effortless, high-performing action." },
      { label: "Minimal intervention", note: "The book's political instinct — that intervention breeds the problems it addresses — recurs in everything from laissez-faire economics to modern arguments about over-regulation." },
    ],
  },
  startHere:
    "Chapters 1, 8, 11, 17 and 76 — roughly two pages in total, and they contain the method, the water image, the emptiness argument, the theory of leadership and the doctrine of softness. Then read the whole thing; it takes an hour.",
  sources: [
    { label: "Tao Te Ching — Wikipedia", url: "https://en.wikipedia.org/wiki/Tao_Te_Ching" },
    { label: "Laozi — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/laozi/" },
  ],
};
