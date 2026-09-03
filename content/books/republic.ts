import type { Book } from "../types";

export const republic: Book = {
  slug: "republic",
  title: "The Republic",
  author: "Plato",
  year: -375,
  era: "c. 375 BCE",
  category: "Philosophy",
  hook: "What is justice, and would a just person still be just if nobody was watching?",
  readingMinutes: 8,
  coreIdea:
    "Plato sets out to answer whether it pays to be just, and ends up designing an entire city to find out. The argument is that a soul, like a city, has parts — appetite, spirit, reason — and justice is the condition in which each does its own work and none usurps another. The famous political proposals are a device: the city is a soul written large enough to read.",
  whyItEndures:
    "Almost every question Western philosophy has argued about since is opened here — the nature of knowledge, the basis of political authority, the relationship between art and truth, whether morality is convention or discovery. Whitehead's remark that the tradition is footnotes to Plato is an exaggeration aimed almost entirely at this book.",
  sections: [
    {
      heading: "The challenge Glaucon sets",
      body: [
        "The dialogue's real engine is not Socrates but Glaucon, who in Book Two refuses to accept an easy defence of justice. He tells the story of the ring of Gyges, which makes its wearer invisible, and asks what anyone would do with it. His claim is that people are just only because they are seen, and that a perfectly unjust man with a perfect reputation lives better than a perfectly just man everyone believes to be a criminal.",
        "This raises the bar enormously. Socrates cannot answer by pointing to justice's rewards — reputation, trust, the goodwill of others — because Glaucon has stripped all of them away. He has to show that justice is worth having for what it does to the person who has it, entirely apart from consequences.",
      ],
    },
    {
      heading: "The city as a magnifying glass",
      body: [
        "Socrates proposes to look for justice in a city first, on the grounds that the same thing written in larger letters is easier to read. So he builds one: producers who make things, guardians who defend it, and rulers drawn from the guardians who have been educated to see what is actually good.",
        "The city is just when each class does its own work and does not meddle in the others'. The move that follows is the one everything depends on: the soul has the same three parts. Appetite wants things, spirit wants honour and gets angry, reason wants truth. Justice in a person is the same structural condition — each part doing its own work, reason ruling with spirit as its ally.",
        "The answer to Glaucon, then, is that injustice is a kind of civil war inside a person. The tyrant who can do anything is the least free man in the book, because he is ruled by whichever appetite is loudest.",
      ],
    },
    {
      heading: "The cave, the line, and the sun",
      body: [
        "The middle books contain the three images that made Plato famous. Prisoners chained in a cave watch shadows on a wall and take them for reality; one is dragged out, is blinded by the sun, and eventually sees the world as it is — then goes back down, and the others want to kill him.",
        "The divided line ranks kinds of knowing, from images through beliefs about physical things to mathematical reasoning and finally to direct understanding of the Forms. The sun analogy makes the Form of the Good the source of both what is knowable and the capacity to know it, the way the sun makes things both visible and alive.",
        "What holds these together is a claim modern readers often resist: that there is a real structure to things which most people never see, that seeing it is difficult and unpopular, and that only someone who has seen it should be trusted with power.",
      ],
    },
    {
      heading: "The uncomfortable politics",
      body: [
        "The city Socrates builds is authoritarian by any standard. Poets are censored and mostly expelled. Rulers tell a founding myth — the noble lie — about citizens having different metals in their souls. The guardian class holds property and families in common, with children raised communally and reproduction managed by the state.",
        "Two things are worth holding at once. First, Plato means it seriously enough that the details matter to him. Second, he says repeatedly that the city may never exist and that its value is as a pattern laid up in heaven, something to measure yourself against rather than a manifesto.",
        "One proposal genuinely was radical for Athens: women can be guardians on the same terms as men, because the relevant differences between people are differences of soul, not of body.",
      ],
    },
    {
      heading: "How constitutions decay",
      body: [
        "Books Eight and Nine trace a decline that reads uncomfortably well. The just city gives way to timocracy, rule by the honour-loving; then oligarchy, where money becomes the qualification; then democracy, where every desire is treated as equally valid and freedom becomes the only value; then tyranny, which democracy produces by its own logic when a popular champion promises to protect the people from their enemies.",
        "Plato's account of democracy is a caricature and he knows it. But the mechanism he describes — that a society which refuses to rank any desire above another eventually cannot resist whoever offers the strongest desire — has kept the passage in circulation for twenty-four centuries.",
      ],
    },
  ],
  keyIdeas: [
    { term: "The tripartite soul", gloss: "Reason, spirit and appetite. Justice is each part doing its own work; injustice is internal faction." },
    { term: "The Forms", gloss: "Unchanging realities that particular things imperfectly instantiate. What a mathematician grasps is not any drawn triangle." },
    { term: "The allegory of the cave", gloss: "Ordinary experience as shadows; education as painful reorientation toward the source of light, followed by hostility on return." },
    { term: "The philosopher-king", gloss: "Power should belong to those who least want it and most understand the good — a proposal Plato admits is unlikely." },
    { term: "The noble lie", gloss: "A founding myth told to hold a society together. The problem Plato leaves for everyone after him is who gets to decide what is worth lying about." },
  ],
  tensions: [
    "Karl Popper's The Open Society and Its Enemies reads the Republic as the intellectual ancestor of totalitarianism — a charge that has shaped how the book is taught ever since, and which many Plato scholars regard as a serious misreading of a work that repeatedly calls itself a thought experiment.",
    "The city-soul analogy does the heaviest lifting in the argument and is never really defended. That a just city has three classes does not establish that a just person has three parts.",
    "The answer to Glaucon arguably changes the subject. Glaucon asks whether justice pays; Socrates redefines justice as psychic order and then shows that psychic order pays.",
    "The banishment of the poets is the passage even sympathetic readers struggle with, and Plato — the most literary of philosophers — seems to know it.",
  ],
  connections: {
    reads: [
      { title: "Nicomachean Ethics", author: "Aristotle", why: "The student's reply. Aristotle keeps the question of how to live and drops the Forms entirely, grounding ethics in habit and practice rather than metaphysics." },
      { title: "The Open Society and Its Enemies", author: "Karl Popper", why: "The prosecution case. Reading it alongside the Republic is the fastest way to see what is genuinely at stake in Plato's politics." },
      { title: "Leviathan", author: "Thomas Hobbes", why: "The other great attempt to derive political authority from an account of human nature — and it starts from appetite rather than reason." },
      { title: "A Theory of Justice", author: "John Rawls", why: "The modern successor. Rawls asks Glaucon's question again with a different device: what would you choose if you did not know who you would be?" },
    ],
    threads: [
      { label: "Expertise versus democracy", note: "Plato's core political claim — that governing is a skill and skills have experts — is still the sharpest argument against democratic decision-making, and every defence of democracy has to answer it." },
      { label: "The examined life", note: "The Republic belongs with the Apology and the Phaedo as part of Plato's long argument that philosophy is a way of living, not a subject." },
    ],
  },
  startHere:
    "Book One for the argument that starts everything, Book Two for Glaucon's challenge, and the middle of Book Seven for the cave. Books Five and Six are the hardest going and can be skimmed on a first pass.",
  sources: [
    { label: "Republic — Wikipedia", url: "https://en.wikipedia.org/wiki/Republic_(Plato)" },
    { label: "Plato's Ethics and Politics in The Republic — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/plato-ethics-politics/" },
  ],
};
