import type { Book } from "../types";

export const principia: Book = {
  slug: "principia",
  title: "Principia",
  author: "Isaac Newton",
  year: 1687,
  era: "1687",
  category: "Science",
  hook: "Three laws and one equation, and the same rules govern a falling apple and the orbit of the moon.",
  readingMinutes: 8,
  coreIdea:
    "Newton's Mathematical Principles of Natural Philosophy states three laws of motion and a law of universal gravitation, and then derives from them the observed behaviour of falling bodies, pendulums, tides, comets and planets. The unifying claim is the radical one: the force holding the moon in orbit is the same force that makes an apple fall, and it obeys a single mathematical rule everywhere in the universe.",
  whyItEndures:
    "It is the most important scientific book ever written. It established that nature is governed by mathematical laws discoverable by human beings, it held without correction for two hundred years, and it remains accurate enough to fly spacecraft. It also established what a scientific theory should look like — a small number of principles from which a large number of observations follow by deduction.",
  sections: [
    {
      heading: "How it came to be written",
      body: [
        "In 1684 Edmond Halley visited Cambridge and asked Newton what curve a planet would trace under an inverse-square attraction. Newton replied immediately: an ellipse. Asked how he knew, he said he had calculated it — and could not find the paper.",
        "Halley pressed him to reconstruct it, and Newton spent eighteen months in near-total isolation producing three books instead of one. Halley edited it, saw it through the Royal Society, and paid for publication himself when the Society's funds had been spent on a book about fish.",
        "Newton had done much of the underlying work twenty years earlier during the plague years of 1665 and 1666 and had simply not published it. The delay is characteristic: he was secretive, disliked controversy, and spent more of his life on alchemy and biblical chronology than on physics.",
      ],
    },
    {
      heading: "The three laws",
      body: [
        "The first law states that a body remains at rest or in uniform straight-line motion unless a force acts on it. This overturns the Aristotelian assumption that motion requires a continuing cause and that rest is the natural state.",
        "The second relates force to change of motion, in the form now written as force equals mass times acceleration — though Newton states it in terms of change of momentum, which is more general and turns out to be the version relativity preserves.",
        "The third states that to every action there is an equal and opposite reaction. This is the least intuitive and does the most work: it is what makes the planets pull on the sun as the sun pulls on them, and what makes the whole system solvable.",
      ],
    },
    {
      heading: "Universal gravitation",
      body: [
        "The law of gravitation states that every particle of matter attracts every other with a force proportional to the product of their masses and inversely proportional to the square of the distance between them.",
        "The word doing the most work is universal. Before Newton, the heavens and the earth were understood as separate domains with separate rules — celestial bodies moved in circles because that was their nature, terrestrial bodies fell because they sought their place. Newton abolished the distinction.",
        "The verification is the moon test: the acceleration required to keep the moon in its orbit, compared with the acceleration of a falling body at the earth's surface, is in the ratio the inverse-square law predicts. Newton had done this calculation in the 1660s, got a slightly wrong answer because the available figure for the earth's radius was poor, and set it aside for years.",
      ],
    },
    {
      heading: "What it explained",
      body: [
        "Book Three, The System of the World, is where the payoff arrives, and its range is what astonished contemporaries.",
        "Kepler's three laws of planetary motion, which had been empirical generalisations with no explanation, fall out as consequences. The tides are explained as the differential pull of the moon and sun on the near and far sides of the earth. The precession of the equinoxes is explained by the pull on the earth's equatorial bulge. The earth's oblate shape is derived. The paths of comets are shown to be conic sections, which let Halley predict the return of the comet that carries his name.",
        "One theory, four pages of laws, and a set of phenomena that had never before been connected to each other. That is the argument, and its force is cumulative.",
      ],
    },
    {
      heading: "Hypotheses non fingo",
      body: [
        "The obvious objection at the time was that gravity acting instantaneously across empty space was occult — action at a distance with no mechanism, which is exactly what the mechanical philosophy of Descartes had been designed to eliminate.",
        "Newton's answer, added to the second edition, is the most quoted methodological statement in science: he has not been able to deduce the cause of gravity from phenomena, and he frames no hypotheses — hypotheses non fingo. Whatever is not deduced from the phenomena is to be called a hypothesis, and hypotheses have no place in experimental philosophy.",
        "The position is that it is enough that gravity really exists and acts according to the laws described, and that it suffices to explain the motions of the heavenly bodies and the sea. Explaining what gravity is could wait — and did, until Einstein.",
      ],
    },
    {
      heading: "Reading it, and what replaced it",
      body: [
        "The Principia is nearly unreadable. Newton wrote it in the geometric style of the ancients rather than in the calculus he had invented, partly to make it rigorous by classical standards and partly, he admitted, to avoid being pestered by people who did not understand it.",
        "The physics is taught today in Leibniz's notation and in analytic form, which is why almost no physicist has read the original. Modern readers generally use Chandrasekhar's commentary or Cohen's translation with its long guide.",
        "The theory was not overturned so much as bounded. Relativity showed that Newtonian mechanics is a limiting case, accurate when speeds are small relative to light and gravitational fields are weak — which covers nearly everything humans encounter, including spaceflight. The precession of Mercury's perihelion, the one anomaly Newton could not accommodate, was the first confirmation of general relativity.",
      ],
    },
  ],
  keyIdeas: [
    { term: "The three laws of motion", gloss: "Inertia, force as change of momentum, and equal and opposite reaction — the foundation of mechanics." },
    { term: "Universal gravitation", gloss: "Every mass attracting every other by an inverse-square law, abolishing the distinction between celestial and terrestrial physics." },
    { term: "The moon test", gloss: "Comparing the moon's orbital acceleration with a falling body's, and finding the inverse-square ratio — the empirical hinge of the whole argument." },
    { term: "Hypotheses non fingo", gloss: "Declining to speculate about gravity's cause while insisting the law itself is deduced from phenomena." },
    { term: "The system of the world", gloss: "Tides, comets, precession, planetary orbits and the earth's shape derived from one set of principles." },
    { term: "Absolute space and time", gloss: "Newton's assumed background — a fixed stage independent of matter — which Leibniz attacked at the time and Einstein eventually removed." },
  ],
  tensions: [
    "Action at a distance without a mechanism was the central objection from Leibniz and the Cartesians, and Newton never answered it. General relativity did, by replacing force with curvature.",
    "Absolute space and time were contested from the start. Leibniz argued they were meaningless without reference to bodies, and Mach's version of the objection influenced Einstein directly.",
    "The book is written to be difficult. The geometric presentation was already archaic and Newton chose it partly to deter casual readers, which succeeded.",
    "Newton's conduct in the priority dispute with Leibniz over the calculus, in which he controlled the Royal Society committee that investigated his own claim and drafted its report anonymously, is one of the least admirable episodes in the history of science.",
  ],
  connections: {
    reads: [
      { title: "On the Origin of Species", author: "Charles Darwin", why: "The other book that unified a domain under a single mechanism, and the one that did it in prose a general reader could follow." },
      { title: "Critique of Pure Reason", author: "Immanuel Kant", why: "Kant's project is largely an attempt to explain how Newtonian science is possible — why the universe should obey mathematics we can discover." },
      { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn", why: "Newtonian mechanics is Kuhn's exemplary paradigm, and its supersession by relativity his exemplary revolution." },
      { title: "A Brief History of Time", author: "Stephen Hawking", why: "What replaced it, explained for the same general audience Newton deliberately excluded." },
    ],
    threads: [
      { label: "Mathematical law", note: "The conviction that nature is written in mathematics and that a few equations can govern everything begins in earnest here, and shapes every science that followed." },
      { label: "Theory and its limits", note: "Newtonian mechanics was not falsified but bounded — the model case for how a superseded theory can remain true within its domain." },
    ],
  },
  startHere:
    "The Definitions and the Scholium on absolute space and time at the front, and the General Scholium at the end, where hypotheses non fingo appears. For the physics, read a modern treatment; for the book, read Cohen's translation with its guide.",
  sources: [
    { label: "Philosophiæ Naturalis Principia Mathematica — Wikipedia", url: "https://en.wikipedia.org/wiki/Philosophi%C3%A6_Naturalis_Principia_Mathematica" },
    { label: "Isaac Newton — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/newton/" },
  ],
};
