import type { Book } from "../types";

export const sapiens: Book = {
  slug: "sapiens",
  title: "Sapiens",
  author: "Yuval Noah Harari",
  year: 2011,
  era: "2011 (English 2014)",
  category: "History",
  hook: "Seventy thousand years of human history, organised around one idea: we cooperate because we believe in fictions.",
  readingMinutes: 10,
  coreIdea:
    "Homo sapiens conquered the planet not through strength or intelligence at the individual level but through the ability to cooperate flexibly in very large numbers. That ability rests on shared fictions — money, nations, corporations, human rights, gods — things that exist because enough people believe in them, and which have no reality outside that collective belief. Harari's history is the story of those fictions and what they cost.",
  whyItEndures:
    "It sold tens of millions of copies and changed how a generation of general readers thinks about history, and it is genuinely good at the thing it does: providing a single organising frame across an enormous span, with the confidence to be provocative and the discipline to be readable.",
  sections: [
    {
      heading: "The Cognitive Revolution",
      body: [
        "Around 70,000 years ago, something changed in Sapiens cognition — Harari is candid that we do not know what — and the species began producing art, trade networks, boats and rapid cultural innovation.",
        "His account of the mechanism is linguistic. Other animals communicate about the immediate: there is a lion by the river. Sapiens can talk about things that do not exist, and this is what allows cooperation beyond the roughly 150 people any primate can know personally.",
        "Two strangers who both believe in the same god, the same nation or the same currency will cooperate. That is the entire foundation of civilisation, in Harari's account, and it is built on shared imagination rather than on shared genes or shared acquaintance.",
      ],
    },
    {
      heading: "The Agricultural Revolution as fraud",
      body: [
        "The book's most provocative chapter argues that agriculture was history's biggest fraud. Farmers worked longer hours, ate a worse and less varied diet, suffered more disease from density and from animals, and were far more vulnerable to famine than foragers.",
        "What agriculture did was support more people per acre — which is evolutionary success measured in copies rather than in lives worth living. Harari's formulation is that wheat domesticated us: the species multiplied enormously while individual lives got harder.",
        "He extends this to a general principle, that luxuries become necessities and beget new obligations, and to a critique of measuring progress by population or output rather than by experience.",
      ],
    },
    {
      heading: "The imagined orders",
      body: [
        "Harari's central analytical tool is the imagined order: a set of arrangements that exists only in shared belief but structures behaviour as firmly as physics.",
        "He works through Hammurabi's code and the American Declaration of Independence side by side, arguing that both assert a natural order — hierarchy in one case, equality in the other — and that neither claim has any basis in biology. Biologically speaking, people are not equal and are not created.",
        "His point is not that human rights are worthless but that they are a convention we have chosen, sustained by belief and enforcement. The chapters on money, empire and religion each analyse a fiction that scaled cooperation: money as the most universal system of mutual trust ever devised, empire as the great homogeniser, religion as the legitimator of order.",
      ],
    },
    {
      heading: "The Scientific Revolution",
      body: [
        "Harari's account of what changed around 1500 turns on ignorance. Earlier traditions assumed the important things were already known; modern science begins with the admission that we do not know, which makes systematic investigation worth funding.",
        "He links this tightly to empire and capitalism. Science, conquest and credit formed a mutually reinforcing loop: exploration required capital, capital required belief in future growth, growth required new territories and new knowledge.",
        "Credit is his key example of a fiction with material consequences. Belief in a bigger future allows borrowing against it, which produces the growth that justifies the belief — an imagined order that becomes self-fulfilling.",
      ],
    },
    {
      heading: "Were we happier?",
      body: [
        "The penultimate chapter asks the question most history avoids, and Harari is honest that the discipline has no good tools for it. He canvasses subjective wellbeing research, the hedonic treadmill, biochemical set points, and Buddhist accounts of craving.",
        "His tentative conclusion is that increases in human power have not translated reliably into increases in wellbeing, and that we may be no happier than foragers were.",
        "The most morally serious passage in the book concerns other animals. Harari argues that industrial farming is one of the greatest crimes in history, and that the success of domesticated species measured in numbers conceals lives of unprecedented misery. It is the point where the book stops being clever and becomes uncomfortable.",
      ],
    },
    {
      heading: "The end of Sapiens",
      body: [
        "The closing chapter argues that natural selection is being replaced by intelligent design — ours. Biological engineering, cyborg engineering and inorganic life could end the species not by killing it but by superseding it.",
        "Harari's final question is the one he thinks matters: not what we can become, but what we want to want. Having acquired godlike powers, we remain unclear about our goals and, he suggests, dissatisfied and irresponsible with them.",
        "The book ends on that rather than on a synthesis, which is deliberate. Homo Deus, his sequel, takes up the question at length.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Shared fictions", gloss: "Money, nations, corporations, gods and rights as intersubjective realities — real because enough people believe, not because they exist independently." },
    { term: "The Cognitive Revolution", gloss: "The capacity to talk about what does not exist, which allows flexible cooperation beyond the limits of personal acquaintance." },
    { term: "Agriculture as fraud", gloss: "More people living worse lives — evolutionary success measured in copies rather than in the quality of individual experience." },
    { term: "Imagined orders", gloss: "Hierarchies and rights alike as conventions with no basis in biology, sustained by belief and enforcement." },
    { term: "The discovery of ignorance", gloss: "Modern science beginning with the admission that important things are unknown, which made systematic inquiry worth funding." },
    { term: "What do we want to want?", gloss: "The closing question: godlike capability with unexamined goals." },
  ],
  tensions: [
    "Specialists have been consistently harsher than general readers. Anthropologists dispute the forager-happiness picture, historians the treatment of agriculture, and cognitive scientists the single-mutation account of the Cognitive Revolution.",
    "Christopher Robert Hallpike's review argued the book is a work of infotainment rather than scholarship, and that where Harari is original he is often wrong. Others have documented specific factual errors across chapters.",
    "The sweep is achieved by compression, and compression at this scale requires choosing which experts to follow without telling the reader that choices were made.",
    "Harari's confidence is part of the appeal and part of the problem. Claims that are genuinely contested are frequently stated as settled.",
  ],
  connections: {
    reads: [
      { title: "Guns, Germs, and Steel", author: "Jared Diamond", why: "The predecessor in the genre, and the direct influence. Diamond explains divergence by geography; Harari by fiction." },
      { title: "The Selfish Gene", author: "Richard Dawkins", why: "The source of the meme idea that underlies Harari's shared fictions — culture as a replicator with its own dynamics." },
      { title: "Debt: The First 5000 Years", author: "David Graeber", why: "A rival account of money and credit from an anthropologist who thinks the economists' story is a myth, and who works from the primary evidence." },
      { title: "The Dawn of Everything", author: "David Graeber and David Wengrow", why: "The most serious challenge to the whole genre, arguing that the linear story from foragers to states is wrong and that prehistory was full of deliberate political experiment." },
    ],
    threads: [
      { label: "Big History", note: "Harari's book is the most successful example of a genre — Diamond, Christian, Morris — that explains the human career at civilisational scale, and that specialists distrust for structural reasons." },
      { label: "Intersubjective reality", note: "The distinction between objective, subjective and intersubjective is the book's most portable idea, and it clarifies arguments about money, law and institutions well beyond history." },
    ],
  },
  startHere:
    "Chapters 2 and 3 for the Cognitive Revolution, Chapter 5 for agriculture, and Chapter 6 on imagined orders. Chapter 19, on happiness, is the one most worth reading if you only read one.",
  sources: [
    { label: "Sapiens: A Brief History of Humankind — Wikipedia", url: "https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind" },
    { label: "Yuval Noah Harari — Britannica", url: "https://www.britannica.com/biography/Yuval-Noah-Harari" },
  ],
};
