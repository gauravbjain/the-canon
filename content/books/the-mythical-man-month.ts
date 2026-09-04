import type { Book } from "../types";

export const theMythicalManMonth: Book = {
  slug: "the-mythical-man-month",
  title: "The Mythical Man-Month",
  author: "Frederick P. Brooks Jr.",
  year: 1975,
  era: "1975",
  category: "Craft & Work",
  hook: "Adding people to a late software project makes it later.",
  readingMinutes: 9,
  coreIdea:
    "Brooks managed IBM's OS/360, one of the largest software projects ever attempted, and wrote this to explain why it went so badly. The central insight is that people and months are not interchangeable: work that can be partitioned without communication scales with headcount, and software work cannot, because every new person must be trained and must then communicate with everyone else. Effort and progress are different quantities, and confusing them is the standard way projects fail.",
  whyItEndures:
    "Fifty years on, the failure modes are unchanged. Brooks was writing about mainframes and punch cards, and every observation about estimation, communication overhead, conceptual integrity and the second system transfers directly to modern software, which is a depressing kind of vindication.",
  sections: [
    {
      heading: "Why programming is a joy and a tar pit",
      body: [
        "The opening chapter describes large-system programming as a tar pit in which many strong animals have thrashed, with no single obstacle causing the difficulty — just the accumulation of many.",
        "Brooks distinguishes a program, which one person can write and run, from a programming systems product, which is generalised, tested, documented, and integrated with others. His estimate is that the product is roughly nine times the effort of the program, and that most estimation errors come from pricing the first while delivering the second.",
        "He is also clear-eyed about why people do it anyway: the joy of making things, of making things useful to others, of the fascination of assembling moving parts, and of working in a medium as tractable as pure thought-stuff.",
      ],
    },
    {
      heading: "Brooks's Law",
      body: [
        "The title chapter contains the observation everyone knows. Cost varies as the product of people and months; progress does not. Men and months are interchangeable only when a task can be partitioned among workers with no communication between them, and software cannot be.",
        "Two costs are incurred when people are added late: training, which the existing team must provide, taking them off the work; and communication, which grows as the square of team size because every pair may need to coordinate.",
        "Hence the law: adding manpower to a late software project makes it later. Brooks calls it an outrageous oversimplification and then notes that it is the right first approximation.",
        "The related observation is about optimism. Programmers estimate assuming everything will go well, and all will not go well. Scheduling, he says, assumes that things will go as planned, which is an assumption no other engineering discipline makes.",
      ],
    },
    {
      heading: "Conceptual integrity",
      body: [
        "Brooks's most important claim, and the one he later said was the book's real thesis, is that conceptual integrity is the most important consideration in system design — that a system should reflect one set of design ideas, and that it is better to have one good idea consistently applied than several good ideas inconsistently.",
        "This requires that design come from one mind or a very small number in agreement, which sits awkwardly with democratic team ideals and with large teams.",
        "His organisational answer is the surgical team: a chief programmer who does the design and the critical code, supported by a copilot, an administrator, a toolsmith, a tester and a language lawyer. The aim is to get the productivity of a small sharp team while having the capacity of a large one.",
      ],
    },
    {
      heading: "The second-system effect",
      body: [
        "Brooks identifies a specific and reliable failure. An architect's first system is lean, because they are unsure and cautious. Flourishes they left out accumulate in a mental list.",
        "The second system is where those accumulated ideas all get built, and it is the most dangerous system a person ever designs — over-general, over-featured, and shaped by problems that no longer exist.",
        "The remedy he offers is self-discipline and an awareness of the pattern. Later chapters extend the point into an argument for planning to throw one away, since you will anyway — an idea he revised twenty years on toward incremental development, which achieves the same end without the discarded system.",
      ],
    },
    {
      heading: "Communication, documentation and the manual",
      body: [
        "A large part of the book is about information flow: the project workbook, formal documents, the manual as a specification, and the need for a single architect to own the external specification while implementers own the internals.",
        "Brooks argues that the written specification is the architect's real product, and that if it cannot be written clearly the design is not yet finished.",
        "He also observes that adding formal communication mechanisms is the only defence against the quadratic growth of informal ones, and that projects usually discover this too late.",
      ],
    },
    {
      heading: "No Silver Bullet",
      body: [
        "The 1986 essay, added to the twentieth-anniversary edition, is the book's second famous contribution. Brooks distinguishes essential complexity — inherent in the problem being solved — from accidental complexity, arising from the tools and representations used.",
        "Decades of progress had attacked accidental complexity successfully: high-level languages, time-sharing, integrated environments. But since accidental complexity was now a minority of the total, even eliminating it entirely would not produce an order-of-magnitude gain.",
        "So there is no single development, in technology or management technique, which by itself promises even one order of magnitude improvement within a decade. The essay has been challenged repeatedly, and the challenges have mostly ended by conceding the essential/accidental distinction while arguing about the proportions.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Brooks's Law", gloss: "Adding people to a late project makes it later, because of training cost and communication overhead that grows quadratically." },
    { term: "The man-month fallacy", gloss: "People and time are interchangeable only for partitionable work with no communication. Software is neither." },
    { term: "Conceptual integrity", gloss: "One coherent set of design ideas beats several good ones inconsistently applied. Brooks's own choice for the book's central claim." },
    { term: "The second-system effect", gloss: "The most dangerous system anyone designs is their second, where every idea omitted from the first finally gets built." },
    { term: "Essential and accidental complexity", gloss: "The complexity of the problem versus the complexity of the tools. Only the second yields to better technology." },
    { term: "Plan to throw one away", gloss: "The first build is a prototype whether you intended it or not — later revised toward incremental delivery." },
  ],
  tensions: [
    "Brooks himself retracted or qualified several claims in the twentieth-anniversary edition, most notably 'plan to throw one away', which he came to think endorsed waterfall development rather than iteration.",
    "The surgical team model assumes a hierarchy of talent and a single strong designer, which conflicts with modern practice around collective ownership and with distributed teams.",
    "Some empirical work has found Brooks's Law is not universal — it depends on task partitionability, onboarding cost and how late 'late' is — though the direction of the effect is well supported.",
    "The examples are from 1960s mainframe development, and readers have to translate constantly. The ideas survive the translation; the surface does not.",
  ],
  connections: {
    reads: [
      { title: "High Output Management", author: "Andrew Grove", why: "The complement: Brooks explains why projects fail, Grove explains how to run an organisation, and both treat management as engineering." },
      { title: "Peopleware", author: "Tom DeMarco and Timothy Lister", why: "The follow-on argument that the major problems of software work are sociological rather than technological — Brooks's insight, developed with data." },
      { title: "Thinking in Systems", author: "Donella Meadows", why: "The general vocabulary for what Brooks observed: delays, feedback and the counterintuitive behaviour of interconnected work." },
      { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn", why: "Another argument that a shared conceptual frame is what makes coherent collective work possible, in a different domain." },
    ],
    threads: [
      { label: "Estimation", note: "Brooks's account of programmer optimism and its consequences is still the best explanation for why software schedules are wrong in one direction." },
      { label: "Team size", note: "The quadratic communication argument underlies two-pizza teams, Conway's Law applications, and most modern thinking about organisational structure in engineering." },
    ],
  },
  startHere:
    "Chapters 1 and 2 for the tar pit and Brooks's Law, Chapter 4 for conceptual integrity, and the No Silver Bullet essay at the back. Under a hundred pages of essential reading.",
  sources: [
    { label: "The Mythical Man-Month — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Mythical_Man-Month" },
    { label: "No Silver Bullet — Wikipedia", url: "https://en.wikipedia.org/wiki/No_Silver_Bullet" },
  ],
};
