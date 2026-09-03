import type { Book } from "../types";

export const wealthOfNations: Book = {
  slug: "wealth-of-nations",
  title: "The Wealth of Nations",
  author: "Adam Smith",
  year: 1776,
  era: "1776",
  category: "Economics & Politics",
  hook: "Where prosperity actually comes from, by a moral philosopher who distrusted businessmen.",
  readingMinutes: 11,
  coreIdea:
    "Wealth is not gold in a treasury; it is the annual produce of a nation's labour. That produce grows through the division of labour, which is limited by the extent of the market, which is limited in turn by transport, security and the freedom to trade. Smith's argument is that in an open market self-interested people are led to serve others' needs without intending it — and that most of what governments do to help commerce makes it worse.",
  whyItEndures:
    "It founded economics as a subject and remains the clearest statement of why decentralised exchange coordinates activity no planner could organise. It is also nothing like its reputation: a nine-hundred-page work of moral philosophy, history and institutional analysis, deeply suspicious of merchants, and far more interested in the poor than most of the people who cite it.",
  sections: [
    {
      heading: "The pin factory",
      body: [
        "The book opens in a workshop. A single worker making pins from scratch might produce twenty a day, perhaps one. Divided into eighteen distinct operations — drawing the wire, straightening, cutting, pointing, grinding the head — ten workers can make forty-eight thousand.",
        "Smith gives three reasons: increased dexterity from repetition, time saved in not switching tasks, and the invention of machines, which he thinks arises largely from workers themselves simplifying jobs they perform constantly.",
        "It is a deliberately unglamorous opening. Smith is establishing that the source of national wealth is productivity, not conquest, colonies or bullion — which was the settled view he set out to demolish.",
      ],
    },
    {
      heading: "Truck, barter and self-love",
      body: [
        "The division of labour is not planned; it grows from a human propensity to exchange. Smith's most quoted sentence follows: it is not from the benevolence of the butcher, the brewer or the baker that we expect our dinner, but from their regard to their own interest.",
        "The point is not that benevolence is worthless — Smith had written an entire book on sympathy — but that a complex society cannot run on it. You cannot be a friend to the thousands of strangers whose work reaches your table. Exchange scales where goodwill does not.",
        "The extent of this cooperation astonishes him. He spends pages tracing everything that goes into a common labourer's woollen coat — shepherds, sorters, dyers, spinners, weavers, the shipbuilders who carried the dye — and concludes that a European peasant lives better than an African king with ten thousand naked savages at his command. The phrasing is of its century; the observation about accumulated cooperation is the modern one.",
      ],
    },
    {
      heading: "The invisible hand, in context",
      body: [
        "The phrase appears exactly once in the book, in Book Four, and not where people expect. Smith is discussing why merchants prefer to invest at home rather than abroad, despite lower returns, because they can watch their capital. In preferring domestic industry they promote an end which was no part of their intention.",
        "He is describing a specific case, not proclaiming a law. And he adds a caution usually left out: he has never known much good done by those who affected to trade for the public good.",
        "Smith's actual position is that markets coordinate well under particular institutional conditions — competition, rule of law, decent infrastructure, no privileged monopolies — and badly without them. The invisible hand is a result of good institutions, not a substitute for them.",
      ],
    },
    {
      heading: "His opinion of businessmen",
      body: [
        "Smith is consistently hostile to merchants and manufacturers as a political class. People of the same trade seldom meet together, even for merriment, without the conversation ending in a conspiracy against the public or some contrivance to raise prices.",
        "He warns that any commercial proposal from this class should be examined with the most suspicious attention, because it comes from people whose interest is to deceive and oppress the public, and who have done so on many occasions.",
        "His target throughout Book Four is the mercantile system — tariffs, monopolies, chartered companies, colonial trade restrictions — which he reads as legislation captured by producers at consumers' expense. The East India Company gets a sustained assault. Consumption, he insists, is the sole end of production, and this maxim is so self-evident that it would be absurd to prove it.",
      ],
    },
    {
      heading: "What government is for",
      body: [
        "Smith is not the minimal-state theorist of legend. He gives the sovereign three duties: defence, the administration of justice, and public works and institutions which are in the highest degree advantageous to a great society but which no individual could profitably provide — roads, bridges, harbours, canals.",
        "He argues for publicly supported schooling, on the grounds that the division of labour damages the very workers it enriches: a man who spends his life performing a few simple operations becomes as stupid and ignorant as it is possible for a human creature to become, and the state should intervene to prevent it.",
        "On taxation he lays down four maxims — proportionality to ability, certainty rather than arbitrariness, convenience of timing, and economy of collection — and endorses progressivity, saying it is not unreasonable that the rich contribute more than in proportion.",
      ],
    },
    {
      heading: "Wages, and who he was writing for",
      body: [
        "Smith's treatment of wages is the part most at odds with his caricature. He observes that masters combine to keep wages down and are helped by law, while workers' combinations are prohibited; that masters can hold out longer in a dispute; and that we seldom hear of the masters' combinations because they are the usual state of things.",
        "His verdict is unambiguous: no society can be flourishing and happy of which the far greater part of the members are poor and miserable, and it is but equity that those who feed, clothe and lodge the whole body of the people should be tolerably well fed, clothed and lodged themselves.",
        "High wages, he argues, are a sign of a growing economy and a cause of greater diligence, not a drag on it. It is progressive economies, not rich static ones, in which the labouring poor do well.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Division of labour", gloss: "The primary source of productivity growth, arising from specialisation and limited by the extent of the market." },
    { term: "The invisible hand", gloss: "Self-interested exchange producing socially useful outcomes unintentionally — a specific observation, not a general law, and conditional on competitive institutions." },
    { term: "The extent of the market", gloss: "Specialisation can only go as far as the market reaches, which makes transport, security and open trade the preconditions of growth." },
    { term: "The mercantile system", gloss: "Smith's target: policy designed by producers to restrict competition, mistaking gold and trade surpluses for wealth." },
    { term: "Natural and market price", gloss: "Prices gravitate toward the cost of production; competition is the mechanism that pulls them there." },
    { term: "Consumption is the sole end of production", gloss: "The principle by which he judges all policy — and by which most policy of his day failed." },
  ],
  tensions: [
    "The labour theory of value Smith gestures at is inconsistent in his hands and was later developed in opposite directions by Ricardo and Marx before the marginal revolution replaced it entirely.",
    "He has no theory of the firm, of economies of scale beyond the pin factory, or of technological change as an endogenous process, so the book explains a commercial economy better than an industrial one.",
    "Reading Smith without The Theory of Moral Sentiments produces the caricature. The 'Adam Smith problem' — whether the sympathetic moral psychology of the earlier book is compatible with the self-interest of the later — is largely dissolved by reading both, which most citers do not.",
    "Book Five's digressions on universities, religion and militias are long, dated, and where many readers give up.",
  ],
  connections: {
    reads: [
      { title: "The Theory of Moral Sentiments", author: "Adam Smith", why: "The other half of Smith. Its account of sympathy and the impartial spectator is the moral framework the economics presupposes." },
      { title: "Capital, Volume I", author: "Karl Marx", why: "The most serious answer. Marx starts from Smith's own categories and turns the division of labour into a story about alienation and extracted surplus." },
      { title: "The General Theory of Employment, Interest and Money", author: "John Maynard Keynes", why: "The other great break, arguing that markets can settle at persistently high unemployment and do not self-correct as Smith's framework assumes." },
      { title: "The Road to Serfdom", author: "Friedrich Hayek", why: "The twentieth-century development of Smith's deepest point — that dispersed knowledge cannot be centralised — argued against planning." },
    ],
    threads: [
      { label: "Markets and institutions", note: "Modern development economics has largely rediscovered Smith's actual position: markets work well given law, competition and infrastructure, and badly without them." },
      { label: "Regulatory capture", note: "Smith's warnings about merchants writing the laws that govern them predate public choice theory by two centuries and read as current." },
    ],
  },
  startHere:
    "Book One, chapters 1 to 3 for the pin factory and the market argument, and chapter 8 on wages. Then Book Four, chapter 2, where the invisible hand actually appears in context.",
  sources: [
    { label: "The Wealth of Nations — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Wealth_of_Nations" },
    { label: "Adam Smith — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/smith/" },
  ],
};
