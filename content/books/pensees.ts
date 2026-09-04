import type { Book } from "../types";

export const pensees: Book = {
  slug: "pensees",
  title: "Pensées",
  author: "Blaise Pascal",
  year: 1670,
  era: "written 1657–62, published 1670",
  category: "Philosophy",
  hook: "The unfinished notes of a mathematician who thought the human condition was best described as a hidden misery.",
  readingMinutes: 8,
  coreIdea:
    "Pascal was assembling an apologetic for Christianity when he died at thirty-nine, leaving hundreds of fragments — some polished, some single lines — that were published as the Pensées. His method was to start from the human condition rather than from arguments for God's existence: to show a reader that they are wretched, that they know it, that everything they do is designed to avoid noticing it, and only then to offer the remedy.",
  whyItEndures:
    "The apologetic mostly does not persuade modern readers and the psychology is devastating. Pascal's account of diversion — that people cannot sit quietly in a room and arrange their entire lives to avoid having to — is one of the most acute observations anyone has made about human behaviour, and it does not depend on his theology.",
  sections: [
    {
      heading: "What the book is",
      body: [
        "Pascal was a first-rank mathematician and physicist — projective geometry at sixteen, a calculating machine at nineteen, the foundations of probability theory with Fermat, work on the vacuum and on fluid pressure — who after a religious experience in 1654 turned to Jansenist Catholicism and to this project.",
        "He died in 1662 with the work in bundles of paper, some threaded together in order, most not. Every edition since has had to decide on an arrangement, and different editions produce noticeably different books. The Lafuma and Sellier orderings are the standard scholarly options.",
        "So the Pensées is not a book Pascal wrote; it is the material for a book he did not finish, and its fragmentary force is an accident of his death.",
      ],
    },
    {
      heading: "The thinking reed",
      body: [
        "Pascal's picture of the human situation is double. Man is only a reed, the weakest in nature, but he is a thinking reed. The universe need not arm itself to crush him — a vapour, a drop of water suffices — but even if the universe crushed him, man would still be nobler than that which kills him, because he knows that he dies, and the universe knows nothing.",
        "The greatness and the wretchedness are the same fact seen from two sides, and Pascal insists on holding both. A philosophy that offers only the greatness is flattery; one that offers only the wretchedness is despair.",
        "His image for our position between infinities — infinitely small next to the cosmos, infinitely large next to a mite — produces the famous line about the eternal silence of these infinite spaces frightening him. He is describing what the new astronomy felt like from inside.",
      ],
    },
    {
      heading: "Diversion",
      body: [
        "The most secular and most quoted section is on divertissement. Pascal claims that all human unhappiness comes from one thing: not knowing how to remain quietly in a room.",
        "His evidence is the behaviour of people who have everything. A king with no cares is miserable if left to think, which is why kings are surrounded by people whose job is to prevent solitude. Men risk their lives in war and at sea, and the explanation is not the prize but the activity — offer a gambler the winnings without the game and he refuses, offer him the game without stakes and he is bored.",
        "The conclusion is that we do not want the object; we want the pursuit, because the pursuit prevents us from thinking about our condition. Hunting rather than the hare. It is a complete account of distraction three centuries before anyone had a device for it.",
      ],
    },
    {
      heading: "The heart has its reasons",
      body: [
        "Pascal is a mathematician arguing for the limits of mathematical reasoning. The heart has its reasons of which reason knows nothing — where the heart means not sentiment but an immediate intuitive faculty that grasps first principles.",
        "He distinguishes the esprit de géométrie, which reasons from clear definitions step by step, from the esprit de finesse, which perceives complex wholes at once and cannot articulate its rules. Both are real forms of knowledge, and the mistake is applying either where the other belongs.",
        "This is why he is not offering proofs of God. Reason cannot settle the question, and someone who requires proof before believing has misunderstood what kind of question it is.",
      ],
    },
    {
      heading: "The wager",
      body: [
        "The most famous fragment is a decision-theoretic argument addressed to someone who cannot decide. Reason cannot determine whether God exists; you are already in the game and must bet.",
        "If you believe and God exists, the gain is infinite. If you believe and God does not, the loss is finite and small. If you do not believe and God exists, the loss is infinite. So the expected value of belief dominates.",
        "This is the first appearance of expected-value reasoning under uncertainty, and Pascal effectively invented decision theory to make it. The standard objections are well known: the many-gods problem, whether belief can be chosen at all, and whether infinite utilities behave sensibly in such calculations. Pascal's own answer to the second is behavioural — act as if you believed, take holy water, have masses said, and belief will follow, since custom shapes conviction more than argument does.",
      ],
    },
  ],
  keyIdeas: [
    { term: "The thinking reed", gloss: "Human weakness and human dignity as the same fact: we are crushed by the universe and we know it, which the universe does not." },
    { term: "Diversion", gloss: "The whole apparatus of activity, entertainment and ambition understood as machinery for avoiding solitary thought." },
    { term: "The heart has its reasons", gloss: "An intuitive faculty grasping first principles that step-by-step reasoning cannot reach or justify." },
    { term: "Géométrie and finesse", gloss: "Two kinds of intelligence — sequential and perceptual — each useless where the other belongs." },
    { term: "The wager", gloss: "Belief as a decision under uncertainty with asymmetric payoffs. The first expected-value argument in Western thought." },
    { term: "Custom shapes belief", gloss: "Pascal's behavioural answer to whether belief can be willed: act the part, and conviction follows." },
  ],
  tensions: [
    "The wager has serious problems: it does not tell you which god, infinite utilities break the arithmetic, and belief adopted for expected value is not obviously the belief the argument was about.",
    "The book is an artefact of editing. What order you read the fragments in materially changes the argument, and no ordering is authoritative.",
    "Pascal's Jansenism — with its emphasis on human corruption and predestined grace — is a minority position within Catholicism and colours the psychology throughout.",
    "The apologetic purpose sits oddly with the observational brilliance. Many readers take the diagnosis and refuse the prescription, which Pascal would have regarded as missing the point entirely.",
  ],
  connections: {
    reads: [
      { title: "Essays", author: "Michel de Montaigne", why: "The book Pascal is arguing against. He read Montaigne constantly and thought his comfortable scepticism was an evasion." },
      { title: "Confessions", author: "Augustine of Hippo", why: "The tradition Pascal writes in, and the source of his conviction that the restless heart is evidence of something." },
      { title: "Meditations", author: "Marcus Aurelius", why: "The pagan alternative — the same acute self-observation aimed at steadiness rather than at rescue." },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", why: "The modern descendant of the wager's reasoning, and of Pascal's interest in how people actually decide under uncertainty." },
    ],
    threads: [
      { label: "Decision theory", note: "The wager is the founding text of reasoning about choice under uncertainty, and it was written to settle a religious question." },
      { label: "Distraction", note: "The diversion fragments are the best available account of why people fill their time, and they predate every technology usually blamed for it." },
    ],
  },
  startHere:
    "The fragments on diversion and on the disproportion of man, then the wager. In the Lafuma numbering, roughly 136 to 139 and 418.",
  sources: [
    { label: "Pensées — Wikipedia", url: "https://en.wikipedia.org/wiki/Pens%C3%A9es" },
    { label: "Blaise Pascal — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/pascal/" },
  ],
};
