import type { Book } from "../types";

export const capital: Book = {
  slug: "capital",
  title: "Capital, Volume I",
  author: "Karl Marx",
  year: 1867,
  era: "1867",
  category: "Economics & Politics",
  hook: "Where profit comes from, if every exchange in the market is fair.",
  readingMinutes: 10,
  coreIdea:
    "Marx sets himself a puzzle: if commodities exchange at their values, where does profit come from? His answer is that the capitalist buys one commodity with a unique property — labour power, the capacity to work — whose value is the cost of sustaining the worker, while its use produces more value than that. The difference is surplus value, and it is extracted through a fair exchange rather than through cheating. Capital is the analysis of a system in which exploitation requires no villain.",
  whyItEndures:
    "Whatever one makes of the politics, it is the most sustained analysis ever written of how a market economy actually operates on the people inside it, and its categories — labour power, surplus value, commodity fetishism, the reserve army of labour — remain in use across the social sciences by people who reject the conclusions.",
  sections: [
    {
      heading: "Beginning with the commodity",
      body: [
        "The opening is famously forbidding. Marx starts with the commodity as the elementary form of wealth in capitalist society, and distinguishes use-value, what a thing does for you, from exchange-value, the ratio at which it trades.",
        "For things as different as coats and corn to exchange in fixed ratios, he argues, they must share a common measurable substance, and the only one available is human labour — abstracted from its particular form and measured in socially necessary time.",
        "Marx himself advised beginners to skip the first chapter and come back to it, and he was right. The argument is unusually abstract and the payoff arrives later.",
      ],
    },
    {
      heading: "Commodity fetishism",
      body: [
        "The most philosophically influential section closes Chapter One. In a market economy, relations between people take the form of relations between things: a price appears to be a property of an object, like weight, rather than a social relationship between the people who made and want it.",
        "Marx calls this the fetishism of commodities, and it is a claim about perception rather than about morality. The market genuinely presents itself this way; the social character of labour appears as an objective character stamped upon the product.",
        "The idea escaped economics entirely and became foundational for critical theory, cultural studies and every subsequent analysis of how markets shape consciousness rather than merely allocating goods.",
      ],
    },
    {
      heading: "Labour power and surplus value",
      body: [
        "The book's central move is the distinction between labour and labour power. The worker does not sell labour, which is an activity; he sells labour power, the capacity to work for a period.",
        "That capacity is a commodity like any other, and its value is what it costs to reproduce — food, housing, training, the raising of the next generation of workers. The worker is paid that value in full. There is no cheating.",
        "But the use of labour power creates more value than labour power costs. If the worker's daily maintenance is covered in four hours and the working day is ten, six hours are surplus. Marx's formula M–C–M′ — money buying commodities to produce more money — captures the whole system, and the increment comes from those unpaid hours.",
      ],
    },
    {
      heading: "The working day",
      body: [
        "The longest chapter is also the most readable and is essentially documentary. Marx uses British factory inspectors' reports, parliamentary commissions and medical evidence to describe conditions in mid-century industry: children of nine on twelve-hour shifts, potters dying at thirty, bakers working through the night, match workers with phossy jaw.",
        "The analytical point is that the length of the working day is not settled by economics but by force. Between equal rights, he writes, force decides — which is why the chapter is also a history of the Factory Acts and of the struggle over the ten-hour day.",
        "Marx then distinguishes absolute surplus value, extracted by lengthening the day, from relative surplus value, extracted by raising productivity so that the worker's maintenance is covered in fewer hours. Once the law limits the day, capital turns to the second — which is his explanation for mechanisation.",
      ],
    },
    {
      heading: "Machinery and the reserve army",
      body: [
        "Marx's account of technology is bleaker than the optimists' and more specific. Machinery does not reduce the worker's toil, because it is introduced to cheapen commodities and to intensify work rather than to shorten it. It also draws women and children into the labour market, expanding supply and driving wages down.",
        "The displaced form what he calls the industrial reserve army — a floating population of unemployed whose existence disciplines those in work. Its size regulates wages, and its maintenance is a structural requirement of the system rather than a temporary failure.",
        "His account of the transformation of the worker under machinery — from a craftsman using tools to an appendage of a machine — is where the alienation argument of his earlier writing reappears inside the economics.",
      ],
    },
    {
      heading: "Primitive accumulation",
      body: [
        "The final part attacks the origin story economists tell, in which capital accumulates because some people were thrifty and others were not.",
        "Marx's counter-history is the enclosure of common land in England, the clearing of the Scottish Highlands, the vagabondage laws that criminalised the newly landless, the colonial plunder of the Americas and India, and the slave trade. Capital, he writes, comes dripping from head to foot, from every pore, with blood and dirt.",
        "The analytical point is that the initial separation of workers from the means of production — which the whole system presupposes — was accomplished by force and law, not by saving. It is the most historically grounded section of the book and often the most persuasive to sceptical readers.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Labour power", gloss: "The capacity to work, sold as a commodity. Its value is the cost of reproducing the worker; its use produces more than that." },
    { term: "Surplus value", gloss: "The difference between what labour power costs and what it produces. Exploitation achieved through fair exchange rather than fraud." },
    { term: "Commodity fetishism", gloss: "Social relations between people appearing as objective properties of things. A claim about how markets present themselves." },
    { term: "Absolute and relative surplus value", gloss: "Lengthening the working day versus raising productivity. Once law constrains the first, capital pursues the second — which explains mechanisation." },
    { term: "The reserve army of labour", gloss: "A structurally maintained pool of unemployed whose existence disciplines wages for those in work." },
    { term: "Primitive accumulation", gloss: "The violent historical separation of people from land and tools that the system presupposes, told against the economists' story of thrift." },
  ],
  tensions: [
    "The labour theory of value, inherited from Ricardo, was displaced by marginalism in the 1870s and is not accepted by mainstream economics. Most of Marx's quantitative apparatus depends on it.",
    "The transformation problem — reconciling values with observed prices of production — occupied Volume III and generations of Marxist economists, and is generally regarded as unresolved.",
    "Predictions about immiseration and the falling rate of profit have not held up straightforwardly in developed economies, and defenders have had to reinterpret them substantially.",
    "It is extremely long and unevenly written, and the parts most people find valuable — the working day, machinery, primitive accumulation — are separable from the value theory that is supposed to justify them.",
  ],
  connections: {
    reads: [
      { title: "The Wealth of Nations", author: "Adam Smith", why: "The framework Marx works inside and inverts. He takes Smith's categories seriously and asks who bears the cost of the division of labour." },
      { title: "The Communist Manifesto", author: "Karl Marx and Friedrich Engels", why: "The twenty-years-earlier political pamphlet. Far more confident, far less analytical, and not a substitute." },
      { title: "The Making of the English Working Class", author: "E. P. Thompson", why: "What a great historian does with Marx's categories while rejecting the determinism — class as experience rather than as a slot." },
      { title: "The Road to Serfdom", author: "Friedrich Hayek", why: "The strongest counter-tradition, and the argument Marx never answered: how coordination happens once the market is gone." },
    ],
    threads: [
      { label: "Where profit comes from", note: "The question Marx poses remains a real one, and answering it differently — through risk, time preference, or marginal productivity — is a large part of what modern economics does." },
      { label: "Critical theory", note: "Commodity fetishism, more than any economic claim, is the idea that carried Marx into philosophy, sociology and cultural criticism." },
    ],
  },
  startHere:
    "Chapter 10 on the working day, which is documentary and gripping, then Chapters 6 and 7 for labour power and surplus value, and Part Eight on primitive accumulation. Skip Chapter One on a first pass, as Marx advised.",
  sources: [
    { label: "Das Kapital — Wikipedia", url: "https://en.wikipedia.org/wiki/Das_Kapital" },
    { label: "Karl Marx — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/marx/" },
  ],
};
