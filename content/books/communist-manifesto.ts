import type { Book } from "../types";

export const communistManifesto: Book = {
  slug: "communist-manifesto",
  title: "The Communist Manifesto",
  author: "Karl Marx and Friedrich Engels",
  year: 1848,
  era: "1848",
  category: "Economics & Politics",
  hook: "Forty pages that read history as a single story and predicted the world capitalism would build.",
  readingMinutes: 8,
  coreIdea:
    "The history of all hitherto existing society is the history of class struggles. Capitalism has simplified the antagonism into two classes, bourgeoisie and proletariat; it is the most revolutionary force in history and generates crises it cannot resolve; and it produces, in the industrial working class, the agent of its own supersession. The pamphlet exists to tell that class what it is and what to do.",
  whyItEndures:
    "It is the most politically consequential short document of the modern era, and — separately from whether its programme is right — its description of what capitalism does to societies has aged extraordinarily well. The passages on globalisation, on the dissolution of tradition and on constant technological upheaval were written before most of the phenomena they describe existed.",
  sections: [
    {
      heading: "The commission",
      body: [
        "The Communist League, a small group of German émigré artisans in London, asked Marx and Engels for a statement of principles. Engels drafted a catechism; Marx rewrote it as this. It was printed in German in London weeks before the revolutions of 1848 broke out across Europe.",
        "It had almost no effect at the time. The 1848 revolutions failed, the League dissolved, and the text was largely forgotten for two decades before being revived by the growth of socialist parties in the 1870s.",
        "Marx was twenty-nine. The economics that would occupy the rest of his life — value, surplus, the falling rate of profit — is barely present. This is a political pamphlet, and it should be read as one.",
      ],
    },
    {
      heading: "The praise of capitalism",
      body: [
        "The first section is, unexpectedly, the most admiring account of capitalism written in the nineteenth century. The bourgeoisie has accomplished wonders far surpassing Egyptian pyramids and Roman aqueducts; it has created more massive and colossal productive forces than all preceding generations together.",
        "It has also destroyed. It has pitilessly torn asunder the motley feudal ties, drowned religious ecstasy and chivalrous enthusiasm in the icy water of egotistical calculation, and left no other nexus between people than naked self-interest and callous cash payment.",
        "The most quoted line comes from here: all that is solid melts into air, all that is holy is profaned. Marx's claim is that permanent revolutionising of production and uninterrupted disturbance of all social conditions are not a phase of capitalism but its normal operation.",
      ],
    },
    {
      heading: "Globalisation, described in advance",
      body: [
        "The passage that most startles modern readers is the account of world markets. The need of a constantly expanding market chases the bourgeoisie over the whole surface of the globe; it must nestle everywhere, settle everywhere, establish connections everywhere.",
        "National industries are destroyed and replaced by industries drawing raw material from the remotest zones and selling into every quarter. Local self-sufficiency gives way to universal interdependence, in intellectual production as well as material — from the many national literatures there arises a world literature.",
        "Written in 1848, before the telegraph network, before the Suez Canal, before container shipping, this is the most accurate long-range prediction in the document by a wide margin.",
      ],
    },
    {
      heading: "The theory of crisis",
      body: [
        "Marx's mechanism for capitalism's instability is overproduction, which he calls an absurdity in every earlier epoch: too much civilisation, too much industry, too much commerce. Society finds itself put back into a state of momentary barbarism because there is too much of everything.",
        "The system's response — destroying productive forces, conquering new markets, exploiting old ones more thoroughly — pays for the way out of present crises by preparing more extensive and destructive ones.",
        "He also anticipates concentration: competition drives smaller capitalists into the proletariat, so that the class of owners narrows while the class of workers grows. This has held in some sectors and failed conspicuously in others, and the mixed record is where most serious argument about Marx begins.",
      ],
    },
    {
      heading: "The programme",
      body: [
        "Section two answers objections and then lists ten measures for a country in transition. Several are now uncontroversial across the political spectrum: free public education, abolition of child factory labour, a progressive income tax, a national bank, state investment in communications and transport.",
        "Others are not: abolition of private property in land, abolition of inheritance, confiscation of the property of emigrants and rebels, and equal liability of all to labour with industrial armies for agriculture.",
        "The stated aim is an association in which the free development of each is the condition for the free development of all — a formulation that sounds liberal and is doing very different work, since it presupposes that private property is what prevents it.",
      ],
    },
    {
      heading: "What it does not contain",
      body: [
        "There is no account of how the state withers away, no design for socialist economic coordination, and almost no discussion of what happens after the transition. Marx was consistently reluctant to write recipes for the cookshops of the future.",
        "This absence is not incidental to the twentieth century. Regimes claiming the Manifesto's authority had to improvise institutions the text does not describe, and did so catastrophically. Whether Marx bears responsibility for that is one of the genuinely open questions in political thought.",
        "Engels's later prefaces are worth reading alongside it. By 1872 he was already noting that the programme was in places antiquated, and that the practical application depends everywhere on historical conditions.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Class struggle", gloss: "History read as the conflict between those who own productive resources and those who do not, with all else following from that relation." },
    { term: "Bourgeoisie and proletariat", gloss: "Owners of capital and sellers of labour power. Marx's claim is that industrialisation simplifies all older gradations into these two." },
    { term: "All that is solid melts into air", gloss: "Constant upheaval of production and society as capitalism's normal state rather than a disturbance of it." },
    { term: "Overproduction crisis", gloss: "Slumps caused by too much rather than too little — an inversion that Marx thought exposed the system's internal contradiction." },
    { term: "The world market", gloss: "The prediction that capital would dissolve national economies into a single interdependent system, written a century before it happened." },
  ],
  tensions: [
    "The central prediction failed. Industrial workers in developed economies did not become progressively immiserated, and revolutions occurred instead in agrarian societies Marx expected to be unready.",
    "It offers no theory of what replaces the market as a coordinating mechanism, and the twentieth century supplied a large and costly experiment on that gap.",
    "The two-class model omits the middle classes, professionals and state employees who grew rather than disappeared, and much later Marxist theory is an attempt to patch this.",
    "Reading the Manifesto as a summary of Marx is a mistake. Capital is a different kind of work — analytical, hedged, and far less confident about timelines.",
  ],
  connections: {
    reads: [
      { title: "Capital, Volume I", author: "Karl Marx", why: "The serious economics. Twenty years of work between the two, and much of the Manifesto's confidence does not survive it." },
      { title: "The Wealth of Nations", author: "Adam Smith", why: "The framework Marx inherits and inverts. The division of labour appears in both books, as liberation and as alienation." },
      { title: "The Road to Serfdom", author: "Friedrich Hayek", why: "The most influential counter-case: that the coordination problem Marx never addressed is not solvable, and that trying makes tyranny structural." },
      { title: "The Making of the English Working Class", author: "E. P. Thompson", why: "What a great historian did with Marx's categories while refusing the determinism — class as something that happens, not a slot people occupy." },
    ],
    threads: [
      { label: "Capitalism as creative destruction", note: "Schumpeter took the Manifesto's account of constant upheaval, dropped the conclusion, and gave the phenomenon its modern name — crediting Marx explicitly." },
      { label: "Globalisation", note: "The 1848 passage on world markets is regularly quoted without attribution in business writing, which is a fair measure of how well it holds up." },
    ],
  },
  startHere:
    "Section One, whole. It is fifteen pages, contains the description of capitalism that has aged best, and is the reason the pamphlet still gets read by people who reject everything in Section Two.",
  sources: [
    { label: "The Communist Manifesto — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Communist_Manifesto" },
    { label: "Karl Marx — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/marx/" },
  ],
};
