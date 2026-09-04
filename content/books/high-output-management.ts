import type { Book } from "../types";

export const highOutputManagement: Book = {
  slug: "high-output-management",
  title: "High Output Management",
  author: "Andrew S. Grove",
  year: 1983,
  era: "1983",
  category: "Craft & Work",
  hook: "Management treated as a production problem, by the engineer who ran Intel.",
  readingMinutes: 9,
  coreIdea:
    "A manager's output is the output of his organisation plus the output of the neighbouring organisations under his influence. Everything follows from that definition: your own activity is not the product, so the question in every meeting and every decision is what leverage it has on the output of others. Grove treats management as an engineering discipline with measurable throughput, quality controls and failure modes.",
  whyItEndures:
    "It is the most practical management book ever written, by someone who ran the company rather than consulting for one, and it has no filler. Ben Horowitz, Mark Zuckerberg and most of Silicon Valley's management culture cite it directly, and the OKR system that spread from Intel to Google originates here.",
  sections: [
    {
      heading: "The breakfast factory",
      body: [
        "Grove opens with an extended analogy: serving a breakfast of a boiled egg, toast and coffee, with all three arriving hot and simultaneously. He uses it to introduce process flow, the limiting step, capacity, work in progress, quality control at the lowest-value stage, and variability.",
        "The analogy carries the whole book. Building semiconductors and running a marketing team are, in his framing, both production processes with inputs, steps, throughput and defects — and if you cannot describe your work that way, you have not understood it.",
        "The most-used idea from this section is inspecting at the lowest-value-added stage. Rejecting a bad egg costs pennies; discovering the problem after the meal is served costs the meal. Applied to software, hiring and product decisions, it is an argument for catching problems early, when they are still cheap.",
      ],
    },
    {
      heading: "Managerial leverage",
      body: [
        "Grove's central concept is leverage: the magnitude of the output produced by a given managerial activity. High-leverage activities affect many people, have long-lasting influence, or supply information or a nudge that unblocks a large body of work.",
        "This reorders priorities. Answering your own email is low leverage; a decision that unblocks fifty engineers is high leverage; a badly prepared review that demoralises a team is high negative leverage, which he insists is a real and common category.",
        "He is explicit that managers should do fewer things at greater depth and that delegation without monitoring is abdication. His formulation: delegation without follow-through is abdication, and monitoring is not meddling.",
      ],
    },
    {
      heading: "Meetings as the medium",
      body: [
        "Grove rejects the fashionable view that meetings are waste. A meeting is the medium through which managerial work is performed, and criticising meetings is like criticising a surgeon for spending time operating.",
        "He classifies them. Process-oriented meetings are regularly scheduled — one-on-ones, staff meetings, operation reviews — and their purpose is knowledge sharing and information exchange. Mission-oriented meetings are ad hoc and exist to produce a decision.",
        "His rules are specific: someone must own the meeting; the owner must prepare an agenda in advance and follow up in writing; and if fewer than seventy per cent of a mission-oriented meeting's attendees are essential, it is too large.",
      ],
    },
    {
      heading: "The one-on-one",
      body: [
        "Grove's treatment of the one-on-one is the most influential thing in the book. It belongs to the subordinate, not the manager. The subordinate sets the agenda. The manager's job is to listen and to ask questions that surface what is not being said.",
        "He recommends roughly ninety minutes, frequently enough that a problem cannot fester — more often for people new to a task, less often for experienced ones. Ninety minutes matters because the first thirty are spent on surface reporting.",
        "His leverage argument makes the case unanswerable: a ninety-minute meeting can affect the quality of two weeks of a person's work — eighty hours — which is a return no other managerial activity matches.",
      ],
    },
    {
      heading: "How decisions should be made",
      body: [
        "Grove describes the ideal as peer decision-making: the people with the most knowledge, who are usually not the most senior, argue it out. He identifies the standard failure mode as people withholding opinions until they know the boss's view.",
        "His model has three questions to settle in advance: what decision needs to be made, by when, who must be consulted, who decides, and who must be informed after.",
        "The output requirement is clear commitment. Free discussion, then a clear decision, then full support — including from those who disagreed. He is blunt that a manager who lets a decision be relitigated endlessly has not made one.",
      ],
    },
    {
      heading: "Task-relevant maturity",
      body: [
        "Grove's answer to how much to delegate is task-relevant maturity: not the person's general seniority but their experience with this specific task in this specific context.",
        "At low maturity the manager is structured and directive. At medium maturity the style shifts to two-way communication and support. At high maturity the manager sets objectives and monitors. A capable person moved to an unfamiliar problem drops back down the scale, which is why competent people sometimes need close direction without it being an insult.",
        "He applies the same rigour to performance reviews, which he treats as the single most important form of task-relevant feedback and which he insists most managers do badly, delivering vague praise instead of specific, actionable and occasionally unwelcome assessment.",
      ],
    },
  ],
  keyIdeas: [
    { term: "A manager's output", gloss: "The output of your organisation plus the neighbouring organisations you influence. Your own activity is not the product." },
    { term: "Leverage", gloss: "Output produced per unit of managerial activity. The organising question for how to spend a day, including the negative cases." },
    { term: "Task-relevant maturity", gloss: "Experience with this task, not general seniority, determines how directive to be. It resets when the task changes." },
    { term: "The one-on-one", gloss: "The subordinate's meeting, on their agenda, roughly ninety minutes — the highest-leverage recurring activity available to a manager." },
    { term: "Indicators in pairs", gloss: "Every measure of quantity paired with a measure of quality, so that optimising one does not quietly destroy the other." },
    { term: "Objectives and key results", gloss: "Where you want to go, and how you will know you are getting there. Grove's system at Intel, later carried to Google." },
  ],
  tensions: [
    "The manufacturing frame fits engineering and operations well and creative or research work less well, where output is not throughput and the limiting step is not identifiable in advance.",
    "Grove's Intel was famously confrontational — constructive confrontation was official doctrine — and the book's advice assumes a culture with unusual tolerance for direct conflict.",
    "It was written before distributed teams, before software ate the org chart, and before most modern thinking about psychological safety. Some of the mechanics need translation.",
    "OKRs, the book's most-copied export, are frequently implemented as quarterly reporting theatre rather than as the small number of focused objectives Grove intended, which is not the book's fault but is its most visible legacy.",
  ],
  connections: {
    reads: [
      { title: "The Mythical Man-Month", author: "Frederick Brooks", why: "The other founding text of engineering management, and the counterpart: Brooks on why projects run late, Grove on how to run one." },
      { title: "The Effective Executive", author: "Peter Drucker", why: "The predecessor Grove read. Drucker supplies the concept of knowledge work; Grove supplies the operating manual." },
      { title: "Thinking in Systems", author: "Donella Meadows", why: "The general theory behind Grove's production framing — stocks, flows, limiting steps and feedback in any organisation." },
      { title: "The Art of War", author: "Sun Tzu", why: "The same conviction across twenty-five centuries: preparation beats heroics, and decisions belong where the knowledge is." },
    ],
    threads: [
      { label: "OKRs", note: "John Doerr learned the system at Intel under Grove and took it to Google, from which it spread to most of the technology industry." },
      { label: "Management as a craft", note: "Grove's insistence that management is a learnable discipline with measurable output, rather than a personality trait, is the book's underlying argument." },
    ],
  },
  startHere:
    "Chapter 3 on managerial leverage and Chapter 4 on meetings — together about sixty pages and the operational core. Then the chapter on task-relevant maturity.",
  sources: [
    { label: "High Output Management — Wikipedia", url: "https://en.wikipedia.org/wiki/High_Output_Management" },
    { label: "Andrew Grove — Britannica", url: "https://www.britannica.com/biography/Andrew-Grove" },
  ],
};
