import type { Book } from "../types";

export const generalTheory: Book = {
  slug: "general-theory",
  title: "The General Theory of Employment, Interest and Money",
  author: "John Maynard Keynes",
  year: 1936,
  era: "1936",
  category: "Economics & Politics",
  hook: "Why an economy can sit at mass unemployment indefinitely, and what to do about it.",
  readingMinutes: 11,
  coreIdea:
    "Classical economics held that markets clear: if there is unemployment, wages fall until labour is bought. Keynes argued this is a special case. In general, output and employment are set by aggregate demand, demand depends heavily on investment, investment depends on expectations of an unknowable future, and there is no mechanism guaranteeing that the resulting level of activity uses everyone. An economy can settle, stably, in a slump.",
  whyItEndures:
    "It is the most influential economics book of the twentieth century, and it was written in the middle of the Great Depression to explain something the existing theory said could not happen. Its framework built postwar macroeconomic policy, and every subsequent argument about stimulus, austerity and central banking is conducted in vocabulary Keynes invented here.",
  sections: [
    {
      heading: "What 'general' means",
      body: [
        "The title is a jab. Keynes argues that the classical theory — which he attributes to Ricardo, Marshall and Pigou — describes only the case of full employment, and that it is therefore a special theory. He proposes to cover the general case, of which full employment is one point.",
        "The specific target is Say's Law, the proposition that supply creates its own demand, so that general overproduction is impossible. If every act of production generates income that will be spent, then persistent unemployment cannot exist except through friction or wage rigidity.",
        "Keynes's counter is that income can be earned and not spent. Saving and investment are done by different people for different reasons, and nothing guarantees the two decisions match at full employment.",
      ],
    },
    {
      heading: "Effective demand and the multiplier",
      body: [
        "Output is determined by aggregate demand: consumption plus investment. Consumption is a fairly stable function of income — the propensity to consume — where people spend a portion of each additional pound and save the rest.",
        "That stability is what generates the multiplier. An initial increase in investment raises someone's income; they spend part of it, raising someone else's income, and so on. If people spend four-fifths of additional income, a pound of new investment eventually produces five pounds of output.",
        "The mechanism cuts both ways, which is the point. A fall in investment contracts income by a multiple, and the economy can come to rest at a level of output well below capacity, with unemployment persisting because there is no force pushing demand back up.",
      ],
    },
    {
      heading: "Why investment is unstable",
      body: [
        "Investment depends on the marginal efficiency of capital — expected returns over an asset's life — compared with the interest rate. Expected returns require forecasting years or decades ahead, and Keynes's view of that forecasting is bleak.",
        "The outstanding fact, he writes, is the extreme precariousness of the basis of knowledge on which our estimates have to be made. Our knowledge of the factors governing the yield of an investment ten years hence amounts to little and sometimes to nothing.",
        "So decisions rest on animal spirits — a spontaneous urge to action rather than inaction, not the outcome of weighted averages of quantitative benefits multiplied by quantitative probabilities. Enterprise, he says, fades and dies if animal spirits are dimmed, and this is not a small correction to rational calculation; it is what actually moves investment.",
      ],
    },
    {
      heading: "The beauty contest",
      body: [
        "Chapter 12, on long-term expectation, is the most quoted in the book and is essentially a chapter of social psychology.",
        "Keynes compares professional investment to a newspaper competition in which readers pick the six prettiest faces from a hundred photographs, with the prize going to whoever picks closest to the average preference. The rational player does not choose the faces he finds prettiest, or even those he thinks average opinion will find prettiest, but devotes his intelligence to anticipating what average opinion expects average opinion to be.",
        "This is his account of why markets can be simultaneously sophisticated and unmoored from fundamentals. He adds the observation that has aged well: speculators may do no harm as bubbles on a steady stream of enterprise, but the position is serious when enterprise becomes the bubble on a whirlpool of speculation.",
      ],
    },
    {
      heading: "Liquidity preference and the limits of monetary policy",
      body: [
        "Keynes rejects the classical account of interest as the price that balances saving and investment. Instead it is the price of parting with liquidity — people hold money for transactions, for precaution, and to speculate on bond prices, and the interest rate is set where that demand meets the money supply.",
        "This means monetary authorities can influence interest rates, but with a limit. In a severe slump, when everyone expects rates to rise and asset prices to fall, additional money may simply be held. The liquidity trap makes monetary policy push on a string.",
        "That limitation is what drives the policy conclusion. If investment will not respond to cheaper money, and consumption follows income, then the state must add to demand directly — through public investment, which Keynes prefers, and through fiscal policy generally.",
      ],
    },
    {
      heading: "The concluding notes",
      body: [
        "The final chapter is short and unusually direct. Keynes names the outstanding faults of the economic society in which we live as its failure to provide full employment and its arbitrary and inequitable distribution of wealth and incomes.",
        "He proposes a somewhat comprehensive socialisation of investment and the euthanasia of the rentier — not the abolition of markets, which he defends, but the removal of scarcity value from capital by keeping it abundant. He is explicit that he wants to save the market system rather than replace it.",
        "The closing paragraph is the one everyone quotes: practical men who believe themselves quite exempt from any intellectual influences are usually the slaves of some defunct economist; madmen in authority who hear voices in the air are distilling their frenzy from some academic scribbler of a few years back. Soon or late, he concludes, it is ideas, not vested interests, which are dangerous for good or evil.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Effective demand", gloss: "Output and employment are set by total spending, not by the supply of labour or the level of wages." },
    { term: "The multiplier", gloss: "A change in investment produces a larger change in income, because each round of spending becomes someone else's income." },
    { term: "Animal spirits", gloss: "Investment driven by spontaneous optimism rather than calculation, because the future genuinely cannot be computed." },
    { term: "Liquidity preference", gloss: "Interest as the price of giving up money, not the price that equates saving and investment." },
    { term: "The liquidity trap", gloss: "The condition where extra money is simply held, so monetary policy loses traction and fiscal action becomes necessary." },
    { term: "The beauty contest", gloss: "Markets as guessing at average opinion about average opinion — sophisticated, self-referential, and detachable from fundamentals." },
  ],
  tensions: [
    "The book is badly written by Keynes's own standards — dense, inconsistent in terminology, and organised around arguments with contemporaries most readers do not know. Most people learn it through Hicks's IS-LM simplification, which Keynes tolerated and which arguably drops the uncertainty that motivates the whole thing.",
    "The stagflation of the 1970s — high inflation with high unemployment — was not well handled by the framework as then applied, and Friedman's monetarist critique of the Phillips curve did serious damage to the postwar consensus.",
    "The rational expectations revolution attacked the microfoundations directly, arguing that Keynesian models assumed people repeatedly failing to anticipate policy.",
    "Post-Keynesians argue the opposite: that mainstream 'Keynesianism' domesticated the book by removing radical uncertainty, and that the 2008 crisis vindicated the original.",
  ],
  connections: {
    reads: [
      { title: "The Wealth of Nations", author: "Adam Smith", why: "The tradition Keynes is amending. Smith's self-correcting market is exactly the special case Keynes says has been mistaken for the general one." },
      { title: "The Road to Serfdom", author: "Friedrich Hayek", why: "Published eight years later by Keynes's great intellectual opponent, and the origin of the counter-argument about state direction of investment." },
      { title: "Manias, Panics, and Crashes", author: "Charles Kindleberger", why: "The financial history that fills in Chapter 12 — what actually happens when speculation becomes the whirlpool." },
      { title: "The Black Swan", author: "Nassim Nicholas Taleb", why: "The modern restatement of Keynes's point about unknowable futures, aimed at the risk models that replaced his uncertainty with probability." },
    ],
    threads: [
      { label: "Macroeconomics as a field", note: "The subject did not exist before this book. Aggregate demand, the multiplier and national income accounting all descend from it." },
      { label: "Uncertainty versus risk", note: "Keynes's distinction — that some futures have no calculable probability at all — is the deepest idea in the book and the one most often removed in the retelling." },
    ],
  },
  startHere:
    "Chapter 12 on long-term expectation, which is readable on its own and contains animal spirits and the beauty contest. Then Chapter 24, the concluding notes. The middle chapters are for economists.",
  sources: [
    { label: "The General Theory — Wikipedia", url: "https://en.wikipedia.org/wiki/The_General_Theory_of_Employment,_Interest_and_Money" },
    { label: "John Maynard Keynes — Britannica", url: "https://www.britannica.com/biography/John-Maynard-Keynes" },
  ],
};
