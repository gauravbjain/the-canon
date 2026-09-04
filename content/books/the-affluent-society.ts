import type { Book } from "../types";

export const theAffluentSociety: Book = {
  slug: "the-affluent-society",
  title: "The Affluent Society",
  author: "John Kenneth Galbraith",
  year: 1958,
  era: "1958",
  category: "Economics & Politics",
  hook: "A rich country that keeps producing more private goods while its public life decays.",
  readingMinutes: 8,
  coreIdea:
    "Galbraith's argument is that economic thinking developed under conditions of general scarcity and has not adjusted to abundance. In a rich society, additional private production is not obviously urgent, wants are increasingly manufactured by the producers who satisfy them, and the resulting imbalance leaves private consumption lavish while schools, parks, transport and public health are starved. He calls this the social balance, and its absence is his subject.",
  whyItEndures:
    "It put private affluence and public squalor into the language, coined conventional wisdom, and framed a debate about what an economy is for that has never been settled. It also sold enormously and made a professional economist into a public figure, which was itself part of the argument.",
  sections: [
    {
      heading: "Conventional wisdom",
      body: [
        "Galbraith opens by naming the enemy. Conventional wisdom — his coinage — is the body of ideas a society holds because they are familiar, acceptable and comfortable, rather than because they are true.",
        "His claim about economics specifically is that its central ideas were formed by Smith, Ricardo and Malthus under conditions of mass poverty, and that they persist because they are venerable rather than because the conditions still hold.",
        "The mechanism by which conventional wisdom eventually changes is not argument, he observes, but events: ideas are not displaced by better ideas but by circumstances that make them obviously absurd.",
      ],
    },
    {
      heading: "The dependence effect",
      body: [
        "Galbraith's most contested argument concerns want. Economics assumes wants originate with the consumer and that satisfying more of them is straightforwardly good.",
        "He argues that in an affluent society wants are increasingly created by the process that satisfies them — through advertising and salesmanship, and through emulation of what others have. Production fills a void that production itself created.",
        "The consequence is that the urgency of additional output cannot be taken for granted. If a man's need for a product is manufactured by the manufacturer, then defending that production as satisfying a want is circular. He calls this the dependence effect, and it is the argument Hayek attacked most directly.",
      ],
    },
    {
      heading: "Social balance",
      body: [
        "The book's most durable passage describes a family travelling in a well-appointed, air-conditioned, powerfully braked private car through cities made hideous by litter, blighted buildings and posts for wires that should long since have been put underground.",
        "They picnic on packaged food beside a polluted stream and go to sleep in a park that is a menace to public health and morals, and — Galbraith's closing line — may wonder vaguely at the curious unevenness of their blessings.",
        "The structural explanation is that private goods are financed by their own sale, while public goods require taxation, which is politically resisted and rhetorically framed as a burden. So the private sector expands automatically and the public sector only by deliberate collective decision, which is much harder to make.",
      ],
    },
    {
      heading: "Poverty in a rich country",
      body: [
        "Galbraith distinguishes case poverty, which afflicts individuals with specific disabling characteristics, from insular poverty, which afflicts everyone in a region or community regardless of individual qualities — Appalachia, the rural South, urban ghettos.",
        "His point is that general economic growth relieves the second only slowly and the first hardly at all, because the mechanisms that spread prosperity do not reach into an insulated community.",
        "This required a policy response separate from growth, and the argument fed directly into the antipoverty programmes of the following decade. Michael Harrington's The Other America made the case more vividly in 1962; Galbraith made it first.",
      ],
    },
    {
      heading: "What he proposed",
      body: [
        "His concrete proposals are less remembered than his diagnosis. He argued for sales taxation to fund public services, on the grounds that the revenue would rise automatically with private consumption and so keep the balance from tipping further.",
        "He proposed a system of unemployment compensation varying inversely with the employment rate — automatically generous in downturns — anticipating what economists now call automatic stabilisers.",
        "And he argued for investment in what he called the investment in men: education, health and research, on the grounds that in an advanced economy these determine output more than physical capital does. That is now orthodox and was not in 1958.",
      ],
    },
  ],
  keyIdeas: [
    { term: "The conventional wisdom", gloss: "Ideas held for their familiarity and comfort rather than their truth, displaced by events rather than by argument." },
    { term: "The dependence effect", gloss: "Wants created by the process of production that satisfies them, which undercuts the case that more output means more welfare." },
    { term: "Social balance", gloss: "The relationship between private and public goods, which tilts automatically toward the private because only the public requires a collective decision." },
    { term: "Private affluence and public squalor", gloss: "The image of the family in the well-equipped car driving through a decayed city — the book's most durable formulation." },
    { term: "Case and insular poverty", gloss: "Poverty afflicting individuals with specific disadvantages versus whole communities regardless of individual qualities, requiring different remedies." },
  ],
  tensions: [
    "Hayek's reply to the dependence effect is the standard objection: nearly all wants beyond food and shelter are culturally created — a taste for music or literature no less than for cars — and cultural origin does not make a want less real or less worth satisfying.",
    "Galbraith writes with great confidence and modest evidence. He is an essayist among economists, and the profession largely declined to engage on his terms.",
    "The book describes mid-century American mass-production affluence, and its assumptions about corporate power and consumer passivity fit that moment better than the one that followed.",
    "His prediction that growth would become unimportant proved premature, and the stagnation of median incomes after the 1970s made the question of output urgent again.",
  ],
  connections: {
    reads: [
      { title: "The Wealth of Nations", author: "Adam Smith", why: "The tradition Galbraith says was built for scarcity and never updated for abundance." },
      { title: "The Road to Serfdom", author: "Friedrich Hayek", why: "Galbraith's principal opponent, and the author of the sharpest published reply to the dependence effect." },
      { title: "The General Theory of Employment, Interest and Money", author: "John Maynard Keynes", why: "The framework Galbraith works inside — he was a Keynesian asking what comes after full employment is achieved." },
      { title: "The Death and Life of Great American Cities", author: "Jane Jacobs", why: "Published three years later, and the ground-level version of what public squalor actually looked like." },
    ],
    threads: [
      { label: "What is an economy for", note: "Galbraith's question — whether more output is self-evidently the goal in a rich society — recurs in every subsequent argument about GDP, wellbeing and degrowth." },
      { label: "Public goods", note: "The structural asymmetry he identifies, in which private consumption grows automatically and public provision requires a fought-over decision, remains the core problem of fiscal politics." },
    ],
  },
  startHere:
    "Chapter Two on conventional wisdom, Chapter Eleven on the dependence effect, and Chapter Eighteen on social balance. That is the argument in about sixty pages.",
  sources: [
    { label: "The Affluent Society — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Affluent_Society" },
    { label: "John Kenneth Galbraith — Britannica", url: "https://www.britannica.com/biography/John-Kenneth-Galbraith" },
  ],
};
