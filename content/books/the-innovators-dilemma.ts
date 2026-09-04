import type { Book } from "../types";

export const theInnovatorsDilemma: Book = {
  slug: "the-innovators-dilemma",
  title: "The Innovator's Dilemma",
  author: "Clayton M. Christensen",
  year: 1997,
  era: "1997",
  category: "Craft & Work",
  hook: "Well-run companies fail precisely because they listen to their best customers.",
  readingMinutes: 8,
  coreIdea:
    "Christensen's finding is that market-leading firms are usually displaced not through complacency but through good management. Disruptive technologies enter at the bottom of a market — cheaper, simpler, worse on the dimensions established customers care about — and are therefore rationally ignored by firms whose best customers do not want them and whose margins would fall if they pursued them. By the time the technology improves enough to matter, the incumbent has lost the position.",
  whyItEndures:
    "It is the most influential business book of the past thirty years and gave the language a word it now overuses. Its core mechanism — that the same discipline which makes a firm successful makes it unable to respond to a specific kind of threat — is a genuine finding rather than a slogan.",
  sections: [
    {
      heading: "The disk drive industry",
      body: [
        "Christensen chose disk drives because the industry moved fast enough to run the equivalent of a fruit-fly experiment: successive generations of drive form factor — 14-inch to 8, to 5.25, to 3.5, to 2.5 — each with a complete turnover of market leadership.",
        "The pattern repeats exactly. Each new smaller drive had less capacity, which mainframe customers did not want. Incumbents evaluated it, asked their customers, and correctly concluded there was no demand. Entrants sold it into a new market — minicomputers, then desktops, then laptops — where smallness mattered more than capacity.",
        "Then capacity improved along its own trajectory until it exceeded what the older market needed, and the entrant moved up and took it. Christensen documents this happening four times in twenty years, with the incumbents doing nothing obviously wrong at any step.",
      ],
    },
    {
      heading: "Sustaining versus disruptive",
      body: [
        "The distinction is the book's core. Sustaining innovations improve performance on the dimensions mainstream customers already value, and incumbents almost always win at these, however radical the technology.",
        "Disruptive innovations underperform on those dimensions and offer a different value proposition — typically cheaper, simpler, smaller, more convenient — to a market that was not being served.",
        "The critical asymmetry is that incumbents cannot ignore sustaining innovation and cannot justify pursuing disruptive innovation. The second is not a failure of vision; it is what the numbers say.",
      ],
    },
    {
      heading: "Why good management is the problem",
      body: [
        "Christensen's mechanism is resource dependence. Firms are systems for allocating capital and attention toward the highest-margin, largest-volume opportunities their customers identify, and this system works.",
        "A disruptive product typically has lower margins, serves a market that does not yet exist, and cannot be sized with market research because the customers cannot describe a product they have not seen. Every step of a well-run planning process rejects it.",
        "So middle managers filter it out before it reaches the top, and the top makes correct decisions on the information presented. Christensen's provocative claim is that in these situations the standard advice — listen to your customers, invest in high-return projects, focus on the mainstream — is exactly wrong.",
      ],
    },
    {
      heading: "What to do about it",
      body: [
        "Christensen's prescriptions are structural rather than motivational. Give responsibility for a disruptive technology to an organisation whose customers actually want it, since resource allocation follows customers regardless of instruction.",
        "Make that organisation small enough to be excited by small wins. A billion-dollar business cannot get out of bed for a fifty-million-dollar market, and a small unit can.",
        "Plan for failure and iterate cheaply: the initial application of a disruptive technology is usually wrong, so the strategy must be to learn quickly and cheaply rather than to bet correctly at the outset. Find a market that values the attributes the technology actually has, rather than trying to make it competitive on the incumbent's dimensions.",
      ],
    },
    {
      heading: "How well it has held up",
      body: [
        "The word disruption has been so thoroughly diluted that Christensen spent his later career objecting to its use. In the popular sense it means any successful new entrant; in his sense it means something specific and testable about trajectories and entry points.",
        "Jill Lepore's 2014 New Yorker essay was the most damaging critique, arguing that the case selection was retrospective, that several of Christensen's disrupted firms recovered or never failed, and that his own disruption-focused investment fund performed poorly.",
        "Subsequent empirical work has been mixed. The mechanism is well supported in some industries and not others, and the theory predicts less well than its popularity implies. The distinction between sustaining and disruptive innovation remains genuinely useful; the predictive claims should be held loosely.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Disruptive innovation", gloss: "A product that is worse on established dimensions and better on new ones, entering at the low end or in a new market." },
    { term: "Sustaining innovation", gloss: "Improvement along dimensions existing customers value. Incumbents almost always win these, however radical the technology." },
    { term: "Performance oversupply", gloss: "Technology improving faster than customers' needs, so that a good-enough cheaper product eventually satisfies the mainstream." },
    { term: "Resource dependence", gloss: "Capital and attention flowing to the customers who supply revenue, which filters out disruptive projects before anyone decides against them." },
    { term: "Separate the organisation", gloss: "The main prescription: put a disruptive business in a unit small enough to care and with customers who want it." },
  ],
  tensions: [
    "Jill Lepore's critique — retrospective case selection, firms that did not actually fail, and the poor performance of Christensen's own fund — is the standard objection and has substantial force.",
    "The theory explains past cases better than it predicts future ones, and Christensen's own high-profile predictions, including about the iPhone, were wrong.",
    "It applies most cleanly to industries with rapid, measurable performance trajectories, and much less cleanly to markets driven by brand, network effects or regulation.",
    "The vocabulary has escaped the argument entirely. Most uses of disruption in business writing do not mean what Christensen meant and cannot be evaluated.",
  ],
  connections: {
    reads: [
      { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn", why: "The same shape of argument in science: a community that is highly effective inside its frame and structurally unable to see past it." },
      { title: "High Output Management", author: "Andrew Grove", why: "Grove read Christensen and applied the theory at Intel — the Celeron processor was a direct response. The two books are usually read together." },
      { title: "Thinking in Systems", author: "Donella Meadows", why: "The general vocabulary for what Christensen describes: an organisation optimising for a goal that becomes a trap." },
      { title: "The Mythical Man-Month", author: "Frederick Brooks", why: "The other engineering-management classic whose central insight is that the obvious response makes the problem worse." },
    ],
    threads: [
      { label: "Why incumbents lose", note: "The book reframed a question usually answered with complacency or arrogance, and gave it a structural answer instead." },
      { label: "Listening to customers", note: "Christensen's finding that customer-led development has a specific and serious failure mode is the most useful practical caution in the book." },
    ],
  },
  startHere:
    "Chapters 1 and 2 for the disk drive evidence, Chapter 4 for the resource dependence mechanism, and Chapter 9 for the prescriptions.",
  sources: [
    { label: "The Innovator's Dilemma — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Innovator%27s_Dilemma" },
    { label: "The Disruption Machine — Jill Lepore, The New Yorker", url: "https://www.newyorker.com/magazine/2014/06/23/the-disruption-machine" },
  ],
};
