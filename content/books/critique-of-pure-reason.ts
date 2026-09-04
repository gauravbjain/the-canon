import type { Book } from "../types";

export const critiqueOfPureReason: Book = {
  slug: "critique-of-pure-reason",
  title: "Critique of Pure Reason",
  author: "Immanuel Kant",
  year: 1781,
  era: "1781, revised 1787",
  category: "Philosophy",
  hook: "The mind does not conform to the world; the world as we know it conforms to the mind.",
  readingMinutes: 9,
  coreIdea:
    "Kant's problem was Hume's: if all knowledge comes from experience, then causation, substance and necessity cannot be justified. His solution is to reverse the relationship. Space, time and the categories are not features we find in the world but the structure our minds impose in order to have experience at all. This explains why they apply universally — and it means we know appearances rather than things as they are in themselves.",
  whyItEndures:
    "It is the single most influential work of modern philosophy. Everything after it is either a development of it or a reaction against it, and its central move — that the conditions of knowledge are contributed by the knower — reshaped philosophy, psychology, and eventually the human sciences.",
  sections: [
    {
      heading: "The Copernican revolution",
      body: [
        "Kant's own image explains the reversal. Copernicus, unable to explain the heavens by assuming the observer stationary, tried assuming the observer moved. Kant proposes the same experiment in metaphysics: instead of assuming our knowledge must conform to objects, assume objects must conform to our knowledge.",
        "The payoff is that we can know in advance certain things about any possible experience — because we supply them. Every object we can experience will be in space and time, and will be subject to causation, because those are conditions of anything counting as an experience for us.",
        "The cost is severe and Kant accepts it. We know the world as it appears under those conditions — phenomena — and not the world as it is independently of them, which he calls the thing in itself, the noumenon, and declares permanently inaccessible.",
      ],
    },
    {
      heading: "The synthetic a priori",
      body: [
        "The question organising the whole book is: how are synthetic a priori judgements possible?",
        "The vocabulary matters. Analytic judgements unpack what is already in the concept — all bachelors are unmarried — and tell us nothing new. Synthetic judgements add something. A priori knowledge is independent of experience; a posteriori depends on it.",
        "Hume assumed the two distinctions lined up: informative claims come from experience, and a priori claims are empty. Kant argues there is a third category. That every event has a cause, and that seven plus five equals twelve, are both informative and known independently of experience — and his task is to explain how that is possible.",
      ],
    },
    {
      heading: "Space, time and the categories",
      body: [
        "The Transcendental Aesthetic argues that space and time are not properties of things or relations among them, but the forms of our sensibility — the way any intuition must be given to us. This is why geometry applies necessarily to everything we can perceive.",
        "The Transcendental Analytic then derives twelve categories of the understanding, in four groups — quantity, quality, relation, modality — which include substance, causality and necessity. These are the concepts under which any manifold of sensation must be brought to become an experience of objects at all.",
        "The Transcendental Deduction, the hardest section in the book and the one Kant rewrote entirely for the second edition, argues that these categories must apply to experience because otherwise a unified consciousness — the I think that must be able to accompany all my representations — would be impossible.",
      ],
    },
    {
      heading: "The limits of reason",
      body: [
        "The final part shows what happens when reason applies these tools beyond experience. Kant's antinomies are pairs of contradictory propositions, each apparently provable: the world has a beginning in time and it does not; everything is causally determined and there is freedom; there is a necessary being and there is not.",
        "His diagnosis is that both sides go wrong by treating the world as a completed totality, which is never given in experience. The contradictions are symptoms of reason exceeding its jurisdiction.",
        "He then dismantles the three classical proofs of God's existence, including the ontological argument, with the observation that existence is not a predicate — being is not a property added to a concept, so defining a being as existing establishes nothing. He is explicit about the purpose: he had to deny knowledge in order to make room for faith. God, freedom and immortality cannot be proved, and equally cannot be disproved, which leaves them to practical reason and to the second Critique.",
      ],
    },
    {
      heading: "Reading it",
      body: [
        "The book is notoriously difficult, and much of the difficulty is avoidable. Kant wrote it in a hurry after eleven years of silence, invented an enormous technical vocabulary, and organised it by an architectonic scheme he found compelling and nobody since has.",
        "He knew. He published the Prolegomena to Any Future Metaphysics in 1783 specifically because the Critique had been badly reviewed and misunderstood, and it is a much shorter statement of the same argument, written analytically rather than synthetically.",
        "Most readers should start there, or with a good guide, and treat the Critique itself as something to consult on particular arguments rather than to read straight through.",
      ],
    },
  ],
  keyIdeas: [
    { term: "The Copernican revolution", gloss: "Objects conform to the conditions of our knowing, rather than our knowledge conforming to objects." },
    { term: "Synthetic a priori", gloss: "Judgements that are informative and known independently of experience — the category Hume denied and Kant needed." },
    { term: "Forms of intuition", gloss: "Space and time as the structure our sensibility imposes, not features discovered in things." },
    { term: "The categories", gloss: "Twelve concepts, including substance and causality, under which sensation must be organised to become experience of objects." },
    { term: "Phenomena and noumena", gloss: "The world as it appears under our conditions, and the thing in itself, which is permanently inaccessible." },
    { term: "The antinomies", gloss: "Contradictory propositions each apparently provable, arising when reason treats the world as a completed whole." },
  ],
  tensions: [
    "The thing in itself is the standard objection: Kant says we cannot know it and appears to make claims about it, including that it exists and affects us. Hegel and the German Idealists made this their starting point for abandoning it.",
    "The claim that Euclidean geometry is synthetic a priori was undermined by non-Euclidean geometry and by general relativity, which found space to be non-Euclidean. How much of the argument survives is contested.",
    "The derivation of exactly twelve categories from the logical forms of judgement has convinced almost nobody. The table looks like an artefact of the logic Kant happened to have.",
    "The prose is genuinely bad, and its difficulty is not entirely load-bearing. Kant's own Prolegomena is evidence that much of it could have been said more clearly.",
  ],
  connections: {
    reads: [
      { title: "An Enquiry Concerning Human Understanding", author: "David Hume", why: "The problem Kant is answering. The Critique is unintelligible without knowing what woke him from his dogmatic slumber." },
      { title: "The Republic", author: "Plato", why: "The other great argument that what we perceive is structured by something prior — with the structure located outside the mind rather than inside it." },
      { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn", why: "Kuhn's paradigms are recognisably Kantian categories made historical and plural — the frame that constitutes experience, varying by community." },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", why: "The empirical descendant: the mind actively constructing experience rather than receiving it, established by experiment rather than by argument." },
    ],
    threads: [
      { label: "The constructed world", note: "Kant's claim that the knower contributes the structure of the known runs through Hegel, phenomenology, Kuhn, and most of twentieth-century social theory." },
      { label: "Limits of reason", note: "The antinomies established that some questions are not merely unanswered but malformed, which is a permanent contribution regardless of the system around it." },
    ],
  },
  startHere:
    "The Prefaces and the Introduction, then the Transcendental Aesthetic. For a first encounter, read the Prolegomena instead — it is a fifth the length and says the same thing.",
  sources: [
    { label: "Critique of Pure Reason — Wikipedia", url: "https://en.wikipedia.org/wiki/Critique_of_Pure_Reason" },
    { label: "Immanuel Kant — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/kant/" },
  ],
};
