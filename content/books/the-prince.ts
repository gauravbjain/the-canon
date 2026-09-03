import type { Book } from "../types";

export const thePrince: Book = {
  slug: "the-prince",
  title: "The Prince",
  author: "Niccolò Machiavelli",
  year: 1532,
  era: "written 1513, published 1532",
  category: "Economics & Politics",
  hook: "What actually keeps a ruler in power, described without pretending it is admirable.",
  readingMinutes: 9,
  coreIdea:
    "Machiavelli's break is methodological: he proposes to go to the effectual truth of the matter rather than to the imagination of it, because a man who wants to be good in every situation among so many who are not good will come to ruin. From that premise he derives an account of how power is actually acquired and held, in which the qualities that make a person admirable and the qualities that make a ruler successful frequently diverge.",
  whyItEndures:
    "It is the founding document of political realism and the first work of political theory to describe rather than prescribe. It is also about eighty pages, written in urgent, epigrammatic Italian, and unfailingly interesting even where it is repellent.",
  sections: [
    {
      heading: "The circumstances of its writing",
      body: [
        "Machiavelli spent fourteen years as a senior official of the Florentine Republic, running diplomacy and the citizen militia, and met Cesare Borgia, Louis XII and Julius II in person. When the Medici returned in 1512 he was dismissed, imprisoned, tortured on the rope, and exiled to a small farm.",
        "The Prince was written there in 1513 and dedicated to Lorenzo de' Medici, in an undisguised attempt to get a job. It did not work. He described his evenings in a famous letter: taking off his muddy clothes, putting on court dress, and entering the ancient courts of ancient men to ask them the reasons for their actions.",
        "This matters because the book is a job application by a fallen republican to the family that ruined him, which is one reason readers have argued for five centuries about how sincerely to take it.",
      ],
    },
    {
      heading: "The effectual truth",
      body: [
        "Chapter Fifteen contains the pivot. Many have imagined republics and principalities that have never been seen; Machiavelli proposes instead to write what is useful to whoever understands it, and to go to the effectual truth of the thing.",
        "The consequence is a redefinition of virtue. Classical and Christian writers asked what qualities a ruler should have; Machiavelli asks which qualities, in practice, preserve a state — and finds that generosity ruins treasuries, that mercy can produce disorder that kills more people than severity would have, and that keeping faith is a liability when others do not.",
        "His term virtù does not mean moral virtue. It means something closer to effective capability — energy, adaptability, decisiveness — deployed against fortuna, chance, which he says governs about half of what happens and can be prepared for like a flood by building dykes in calm weather.",
      ],
    },
    {
      heading: "Feared or loved",
      body: [
        "The most quoted chapter asks whether it is better to be loved or feared, and answers: both, if possible, but since that is difficult, it is much safer to be feared. Love is held by a chain of obligation which men break whenever it suits them; fear is held by a dread of punishment that never fails.",
        "The qualification is usually dropped and is essential. The prince must avoid being hated, which he manages by leaving his subjects' property and women alone — men forget the death of a father faster than the loss of a patrimony. Fear without hatred is the target, and hatred is the actual danger.",
        "Machiavelli also insists on appearances. It is not necessary to have all the good qualities, but very necessary to seem to have them; the prince should appear merciful, faithful and religious, and be able to act otherwise when required.",
      ],
    },
    {
      heading: "Cruelty well used",
      body: [
        "Chapter Eight introduces a distinction that unsettles readers more than anything else in the book: cruelties well used and badly used. Well used means committed at a stroke, out of necessity, for security, and not continued; badly used means small at first and increasing over time.",
        "Injuries, he advises, should all be done together so they are tasted less; benefits should be given little by little so they are savoured longer.",
        "His model is Cesare Borgia's handling of the Romagna. Borgia installed a harsh governor who pacified the province, then had him cut in two in the public square one morning, leaving the people satisfied and stupefied. Machiavelli tells the story with open admiration for its craft.",
      ],
    },
    {
      heading: "Arms of your own",
      body: [
        "A recurring practical theme, drawn from Machiavelli's own career, is that mercenaries and auxiliaries are useless and dangerous — disunited, ambitious, undisciplined, faithless, and brave among friends but cowardly before enemies.",
        "A ruler must have arms of his own, and must make war his only study, in peace as much as in war, because the first cause of losing a state is neglecting this art. Machiavelli spent years trying to build a citizen militia for Florence, which performed poorly, and he never revised the theory.",
        "Underneath the military argument is a general one: dependence on force you do not control is the structural weakness that ruins states, and the same logic applies to allies, money and reputation.",
      ],
    },
    {
      heading: "What kind of book is it?",
      body: [
        "The last chapter breaks form entirely: an impassioned call for a prince to unify Italy and drive out the foreign armies, closing with a quotation from Petrarch. It is patriotic, urgent, and hard to square with the cold analysis preceding it.",
        "This has fuelled the long argument about intent. Rousseau claimed The Prince is a book for republicans — that by exposing the methods of tyrants Machiavelli was warning free peoples. Others note that his much longer work, the Discourses on Livy, is a straightforwardly republican book arguing that the people are a better guardian of liberty than any prince.",
        "The honest reading may be that Machiavelli is a republican describing, without flinching, what princes actually do — and that the discomfort of the book comes from its refusal to attach a verdict.",
      ],
    },
  ],
  keyIdeas: [
    { term: "The effectual truth", gloss: "Describing how people actually behave rather than how they ought to. The methodological break that starts modern political science." },
    { term: "Virtù", gloss: "Effective capability — energy, adaptability, decisiveness. Not moral virtue, and often in tension with it." },
    { term: "Fortuna", gloss: "Chance, governing roughly half of events. Can be prepared for in advance but not controlled." },
    { term: "Cruelties well used", gloss: "Harm done at once out of necessity and then stopped, as against harm that escalates. Machiavelli's most disturbing distinction." },
    { term: "Feared without being hated", gloss: "The actual prescription. Hatred, not fear, is what destroys rulers, and it comes from taking people's property." },
    { term: "Arms of your own", gloss: "Never depend on force you do not control. The military case for a general principle about structural dependence." },
  ],
  tensions: [
    "The relationship between The Prince and the Discourses on Livy is unresolved. The same author argues for princely autocracy in one and for popular republics in the other, within a few years.",
    "Isaiah Berlin's reading — that Machiavelli's real scandal is showing that Christian and pagan civic values are both coherent and incompatible, so no single moral system covers everything — is the most influential modern interpretation and still contested.",
    "Its empirical basis is thin by modern standards: a handful of Italian city-states, classical examples, and Machiavelli's own diplomatic experience, generalised confidently.",
    "The book's advice arguably failed its own test. Cesare Borgia, the exemplary prince, lost everything within a few years, and Machiavelli's militia was routed at Prato.",
  ],
  connections: {
    reads: [
      { title: "Discourses on Livy", author: "Niccolò Machiavelli", why: "The other Machiavelli, four times longer and republican. Reading it changes what The Prince appears to be doing." },
      { title: "History of the Peloponnesian War", author: "Thucydides", why: "The ancestor. The Melian Dialogue is the same refusal to let moral preference distort analysis, two thousand years earlier." },
      { title: "Leviathan", author: "Thomas Hobbes", why: "The next step: building an entire political philosophy on a similarly unsentimental account of what people are like." },
      { title: "The Art of War", author: "Sun Tzu", why: "The same instinct in a different civilisation — that conflict is a technical problem and moral framing obscures it." },
    ],
    threads: [
      { label: "Dirty hands", note: "The problem Machiavelli made unavoidable: whether political roles can require actions that would be wrong for a private person, and what that does to the person performing them." },
      { label: "Value pluralism", note: "Berlin's argument that the book reveals irreducibly conflicting value systems, rather than mere immorality, reframed twentieth-century liberal thought." },
    ],
  },
  startHere:
    "Chapters 15 through 18 — the effectual truth, generosity, cruelty and mercy, and how princes should keep faith. Twenty pages, and the whole scandal is there.",
  sources: [
    { label: "The Prince — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Prince" },
    { label: "Niccolò Machiavelli — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/machiavelli/" },
  ],
};
