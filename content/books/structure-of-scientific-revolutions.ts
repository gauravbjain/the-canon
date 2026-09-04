import type { Book } from "../types";

export const structureOfScientificRevolutions: Book = {
  slug: "structure-of-scientific-revolutions",
  title: "The Structure of Scientific Revolutions",
  author: "Thomas Kuhn",
  year: 1962,
  era: "1962",
  category: "Science",
  hook: "Science does not accumulate steadily. It works within a frame until the frame breaks.",
  readingMinutes: 10,
  coreIdea:
    "Normal science is puzzle-solving conducted inside a paradigm — a shared framework of assumptions, methods, exemplary problems and standards. Anomalies accumulate; when enough of them resist, a crisis develops, and a new paradigm replaces the old one in a revolution rather than by gradual amendment. The two paradigms are incommensurable: they define terms differently and disagree about what counts as a problem, so the transition is not a straightforward matter of evidence.",
  whyItEndures:
    "It changed how educated people talk about science, gave the word paradigm its modern meaning, and put the history of science at the centre of the philosophy of science. It is also the most consequential attack on the idea that science is simply the steady accumulation of truth — an attack made by a physicist who admired science enormously.",
  sections: [
    {
      heading: "Where it came from",
      body: [
        "Kuhn was a Harvard physics PhD who was assigned to teach a science course for humanities students and had to read Aristotle's Physics. He found it not merely wrong but incomprehensibly wrong — until, in a moment he described repeatedly, the whole framework suddenly cohered and Aristotle appeared as a competent thinker working within different assumptions about what motion is.",
        "That experience produced the book's central instinct. Past science should not be read as a failed attempt at present science. It should be read on its own terms, as an internally coherent way of organising the world.",
        "The book was published, oddly, as a monograph in the Encyclopedia of Unified Science, a project of the logical positivists whose account of science it undermined.",
      ],
    },
    {
      heading: "Normal science",
      body: [
        "Kuhn's most under-appreciated claim is a defence of ordinary scientific work. Normal science is not a search for novelty; it is an attempt to force nature into the conceptual boxes the paradigm supplies, and it is highly cumulative and enormously productive.",
        "Its activities are mopping-up operations: determining significant facts more precisely, matching facts with theory, and articulating the theory itself. Kuhn calls it puzzle-solving, meaning problems with an assured solution and rules for what counts as one.",
        "The point of this apparent narrowness is that it works. Because the paradigm is not in question, researchers can pursue a small problem in great depth, using specialised equipment and shared assumptions — which is precisely what generates the anomalies that will eventually overturn it.",
      ],
    },
    {
      heading: "Anomaly and crisis",
      body: [
        "An anomaly is a result the paradigm cannot accommodate. Most are set aside, and reasonably so — the paradigm has earned enough credit that a stray result is more likely to be an error than a refutation. Kuhn is explicit that a scientist who abandoned a theory at every disconfirming instance would never get anything done.",
        "Crisis arrives when anomalies persist, resist ad hoc repair, and begin to touch the paradigm's core. The symptoms are recognisable: a proliferation of competing versions, willingness to try anything, expressed discontent, and recourse to philosophy — a sign, Kuhn says, that the practitioners have run out of ordinary work.",
        "His central historical case is the Copernican revolution. Ptolemaic astronomy was not simply wrong; it worked well enough for centuries, and its accumulating epicycles were a rational response to anomalies until the whole structure became unwieldy.",
      ],
    },
    {
      heading: "Incommensurability",
      body: [
        "The most contested idea in the book. Kuhn argues that competing paradigms cannot be fully compared because they disagree about the meanings of shared terms, about what problems matter, and about what a solution looks like.",
        "Mass in Newtonian mechanics is conserved; mass in relativity is convertible into energy. The word survives the revolution and the concept does not, so a crucial experiment cannot simply adjudicate between them.",
        "Kuhn compounds this with a perceptual claim: after a revolution, scientists work in a different world. He borrows Gestalt-switch imagery — the duck-rabbit — and says that where the old paradigm saw a swinging body slowly coming to rest, Galileo saw a pendulum. Critics found this an alarming slide from meaning to metaphysics, and Kuhn spent much of his later career qualifying it.",
      ],
    },
    {
      heading: "How revolutions actually end",
      body: [
        "Kuhn's account of paradigm change is sociological as well as logical. Conversion is not compelled by proof; it involves aesthetic judgement, promise of future puzzle-solving, and faith that the new approach will succeed on problems it has not yet addressed.",
        "He quotes Max Planck's grim observation that a new scientific truth does not triumph by convincing its opponents but because its opponents eventually die, and a new generation grows up familiar with it.",
        "He also notes that textbooks systematically erase this history. They present the current paradigm as the cumulative result of steady progress, rewriting past science as an incomplete version of the present — which is why practising scientists often find Kuhn's picture unrecognisable.",
      ],
    },
    {
      heading: "Progress without a destination",
      body: [
        "The final chapter tackles the obvious objection: if paradigms are incommensurable, in what sense does science progress? Kuhn's answer is evolutionary. Later theories are better instruments for puzzle-solving than earlier ones — more accurate, wider in scope, more precise — and that is progress.",
        "What he denies is progress toward something: a single true account of what nature really is. Development from primitive beginnings, he says, without development toward anything.",
        "This is where he loses many scientists and gains many sociologists. Kuhn himself was uncomfortable with the relativist uses made of his book, and the 1969 postscript is largely an attempt to narrow claims that had escaped him.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Paradigm", gloss: "A shared framework of assumptions, methods and exemplary solved problems. Kuhn used the word in at least twenty senses and later split it into 'disciplinary matrix' and 'exemplar'." },
    { term: "Normal science", gloss: "Puzzle-solving within an unquestioned framework. Not a criticism — it is what makes deep, cumulative work possible." },
    { term: "Anomaly and crisis", gloss: "Persistent results the paradigm cannot absorb, and the professional disarray that follows when enough accumulate." },
    { term: "Incommensurability", gloss: "Competing paradigms redefine terms and standards, so no neutral experiment simply decides between them." },
    { term: "Gestalt switch", gloss: "Conversion as a change in perception rather than a conclusion from evidence — the book's most challenged analogy." },
    { term: "Textbook history", gloss: "The systematic rewriting of the past as a straight line to the present, which conceals how science actually changed." },
  ],
  tensions: [
    "Popper's objection: Kuhn describes what scientists do, but that is not what makes science rational. Falsification is a norm, not a description, and Kuhn's normal scientists look like dogmatists.",
    "The word 'paradigm' is used inconsistently throughout — Margaret Masterman famously counted twenty-one distinct senses — and Kuhn conceded much of this in the postscript.",
    "Incommensurability in its strong form implies that theory choice is not fully rational, which Kuhn denied intending. Later work by Lakatos and Laudan tried to recover rational theory choice without returning to naive cumulation.",
    "Historians have argued that few episodes fit the model cleanly. The Copernican and chemical revolutions do reasonably well; molecular biology, plate tectonics and much of modern physics fit awkwardly.",
  ],
  connections: {
    reads: [
      { title: "The Logic of Scientific Discovery", author: "Karl Popper", why: "The position Kuhn displaced. Popper's falsificationism is the normative account against which Kuhn's descriptive one was measured." },
      { title: "The Double Helix", author: "James Watson", why: "Normal science and a revolution from inside, told without any of the textbook tidying Kuhn describes." },
      { title: "The Mismeasure of Man", author: "Stephen Jay Gould", why: "A case study of a paradigm shaped by its practitioners' prior commitments, showing what Kuhn's framework looks like applied critically." },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", why: "A book that itself became a paradigm and then suffered a crisis of anomalies — the replication crisis is a Kuhnian episode in progress." },
    ],
    threads: [
      { label: "The word 'paradigm'", note: "Kuhn's most visible legacy is a term he came to regret, now applied to business models and diets. Its escape into ordinary language is itself worth thinking about." },
      { label: "Science studies", note: "The book opened the door to sociological accounts of scientific knowledge, a development Kuhn viewed with discomfort for the rest of his life." },
    ],
  },
  startHere:
    "Sections II through VIII — normal science, anomaly, crisis and the nature of revolutions. About seventy pages, and the postscript afterwards for what Kuhn thought he had meant.",
  sources: [
    { label: "The Structure of Scientific Revolutions — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Structure_of_Scientific_Revolutions" },
    { label: "Thomas Kuhn — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/thomas-kuhn/" },
  ],
};
