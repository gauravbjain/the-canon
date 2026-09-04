import type { Book } from "../types";

export const anEnquiryConcerningHumanUnderstanding: Book = {
  slug: "an-enquiry-concerning-human-understanding",
  title: "An Enquiry Concerning Human Understanding",
  author: "David Hume",
  year: 1748,
  era: "1748",
  category: "Philosophy",
  hook: "The demonstration that we have no rational basis for expecting tomorrow to resemble today.",
  readingMinutes: 9,
  coreIdea:
    "Hume asks what we can actually know and answers: much less than we assume. All our ideas derive from prior impressions; causation is not something we observe but a habit of expectation formed by repetition; and no argument establishes that the future will resemble the past without assuming the very thing it needs to prove. His conclusion is not despair but a recommendation — nature has equipped us with instincts that reason cannot justify and cannot dislodge.",
  whyItEndures:
    "The problem of induction is still unsolved, and Hume's statement of it is the one everyone works from. Kant said reading Hume woke him from his dogmatic slumber, and the entire subsequent history of epistemology and philosophy of science is a response. Hume himself thought this shorter Enquiry was the better statement of arguments his Treatise had buried.",
  sections: [
    {
      heading: "Impressions and ideas",
      body: [
        "Hume's starting point is a distinction between impressions — the lively perceptions of sensation and feeling — and ideas, the fainter copies of them we use in thinking. Every idea, however abstract, is ultimately traceable to some impression.",
        "This gives him a test with sharp teeth. When a philosophical term is used and we suspect it means nothing, we should ask from what impression it is derived; if none can be produced, the term is empty.",
        "He applies the test unsparingly, and it is why the book ends by recommending that volumes of divinity and school metaphysics containing neither abstract reasoning about quantity nor experimental reasoning about matters of fact should be committed to the flames, for they can contain nothing but sophistry and illusion.",
      ],
    },
    {
      heading: "Relations of ideas and matters of fact",
      body: [
        "Hume divides all objects of inquiry into two kinds, a division later called Hume's fork. Relations of ideas — geometry, algebra, arithmetic — are certain, discoverable by thought alone, and their denial is a contradiction.",
        "Matters of fact are different. The contrary of every matter of fact remains possible, because it implies no contradiction. That the sun will not rise tomorrow is a perfectly intelligible proposition, and no demonstration can rule it out.",
        "The consequence is that everything we believe about the world beyond present sensation and memory rests on reasoning about matters of fact, which is never demonstrative. And all such reasoning, Hume argues, depends on the relation of cause and effect.",
      ],
    },
    {
      heading: "Causation",
      body: [
        "Hume's analysis of causation is his most famous result. Examine any instance of one billiard ball striking another: you observe contiguity in space, succession in time, and constant conjunction of similar events. You never observe a necessary connection.",
        "The necessity, he argues, is not in the objects but in us. After repeated experience of two events together, the mind is determined to pass from one to the other, and it projects that felt determination onto the world as a power in the objects.",
        "So causation as ordinarily understood is a habit of expectation, not an observed feature of nature. Hume does not deny that we should reason causally — he insists we cannot help it — but he denies that reason justifies it.",
      ],
    },
    {
      heading: "The problem of induction",
      body: [
        "The argument that follows is the one everything else in the book is remembered for. All inference from experience assumes that the future will resemble the past.",
        "That assumption cannot be demonstrated, since a change in the course of nature is not contradictory. And it cannot be established from experience without circularity, since arguing that it has held so far and will therefore continue to hold uses the very principle in question.",
        "So the foundation of all empirical knowledge is neither demonstrated nor evidenced. His answer is psychological rather than logical: custom is the great guide of human life, and it is custom alone, not reasoning, that makes us expect the fire to warm and the bread to nourish. Nature has not left so essential a thing to the uncertain process of argument.",
      ],
    },
    {
      heading: "Miracles",
      body: [
        "Section Ten, on miracles, was the most notorious part of the book and was left out of the Treatise for fear of the consequences.",
        "The argument is evidential. A miracle is by definition a violation of a law of nature, and a law of nature is established by uniform experience — so the evidence against any miracle is as complete as evidence can be.",
        "His maxim follows: no testimony is sufficient to establish a miracle unless its falsehood would be more miraculous than the fact it endeavours to establish. He then argues, empirically, that testimony of the required quality has never actually existed — the witnesses have not been numerous, educated, disinterested and publicly accountable, and reports of the marvellous flourish among the ignorant and decline as knowledge spreads.",
      ],
    },
    {
      heading: "Mitigated scepticism",
      body: [
        "Hume's conclusion is not the paralysis his arguments seem to invite. He observes that the sceptic's reasoning is unanswerable and produces no lasting conviction: leave the study, play backgammon, dine with friends, and the doubts appear ridiculous.",
        "What survives is a mitigated scepticism — a permanent modesty about the reach of human understanding, and a corresponding limitation of inquiry to subjects where evidence is available.",
        "This is the temperament that made him the eighteenth century's most subversive philosopher and its most companionable. He also wrote a six-volume History of England that was his most successful book in his lifetime, and Adam Smith's account of his death — cheerful, joking about Charon, entirely unafraid — scandalised Britain more than anything he had published.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Impressions and ideas", gloss: "Every idea traces to a prior impression, which gives a test for whether a term means anything at all." },
    { term: "Hume's fork", gloss: "Relations of ideas, certain but empty of the world; matters of fact, informative but never demonstrable." },
    { term: "Constant conjunction", gloss: "We observe succession and regularity, never necessary connection. The necessity is a felt determination we project outward." },
    { term: "The problem of induction", gloss: "Inference from experience assumes the future resembles the past, which can be neither demonstrated nor evidenced without circularity." },
    { term: "Custom as the guide of life", gloss: "Habit, not reason, is what makes us expect fire to warm — and nature was wise not to leave it to argument." },
    { term: "The maxim on miracles", gloss: "Accept testimony for a miracle only if its falsehood would be more miraculous than the event." },
  ],
  tensions: [
    "The problem of induction has never been solved. Popper tried to dissolve it by denying that science induces at all; Bayesians reframe it probabilistically; neither is generally accepted as an answer on Hume's terms.",
    "The claim that every idea derives from an impression faces his own counterexample — the missing shade of blue, which he raises and then sets aside as unimportant.",
    "The argument on miracles has been attacked as circular: if uniform experience defines a law of nature, testimony to an exception has been excluded before it is weighed.",
    "Hume's essays contain a footnote expressing racist views about non-white peoples, which he modified but did not retract, and which is part of the record of an Enlightenment figure celebrated for scepticism about received opinion.",
  ],
  connections: {
    reads: [
      { title: "Critique of Pure Reason", author: "Immanuel Kant", why: "The direct response. Kant said Hume woke him from dogmatic slumber, and the Critique is his attempt to rescue causation and necessity." },
      { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn", why: "What happens to the justification of science once Hume's problem is taken seriously and history is consulted." },
      { title: "The Black Swan", author: "Nassim Nicholas Taleb", why: "The problem of induction in a suit — Taleb's turkey is Hume's argument with a Thanksgiving date attached." },
      { title: "Essays", author: "Michel de Montaigne", why: "The earlier sceptical temperament Hume inherits: doubt as a way of living rather than a philosophical position to defend." },
    ],
    threads: [
      { label: "Empiricism", note: "Locke, Berkeley and Hume are the sequence, and Hume is where the programme reaches its logical conclusion and becomes uncomfortable." },
      { label: "Is and ought", note: "Hume's other enormous contribution, from the Treatise: the observation that arguments slide from statements of fact to statements of obligation without explanation." },
    ],
  },
  startHere:
    "Sections Four and Five, on the foundation of reasoning from experience and its sceptical solution — about twenty-five pages containing the whole problem of induction. Then Section Ten on miracles.",
  sources: [
    { label: "An Enquiry Concerning Human Understanding — Wikipedia", url: "https://en.wikipedia.org/wiki/An_Enquiry_Concerning_Human_Understanding" },
    { label: "David Hume — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/hume/" },
  ],
};
