import type { Book } from "../types";

export const thinkingFastAndSlow: Book = {
  slug: "thinking-fast-and-slow",
  title: "Thinking, Fast and Slow",
  author: "Daniel Kahneman",
  year: 2011,
  era: "2011",
  category: "Mind & Psychology",
  hook: "The definitive account of how confident and how wrong the mind can be at the same time.",
  readingMinutes: 14,
  coreIdea:
    "Your mind runs two systems. One is fast, automatic and always on; it produces impressions, intuitions and answers without any sense of effort. The other is slow, deliberate and lazy; it can check the first system's work but usually cannot be bothered. Most of the errors people make are not failures of intelligence. They are the fast system answering a question the slow system never noticed it had been asked.",
  whyItEndures:
    "Kahneman spent forty years, much of it with Amos Tversky, showing that human judgment departs from rationality in patterned, predictable ways — not randomly, but in the same directions, in the same situations, for everyone including experts. This book is where that programme is finally told whole, by the person who built it, with unusual candour about what it does and does not establish.",
  sections: [
    {
      heading: "Two systems, one mind",
      body: [
        "Kahneman names them System 1 and System 2, and is explicit that these are useful fictions rather than parts of the brain. System 1 recognises a face, completes the phrase \"bread and…\", detects hostility in a voice, drives on an empty road. It never turns off and it has no volume control. System 2 multiplies 17 by 24, fills in a tax form, compares two apartments on six dimensions. It has limited capacity, and running it feels like work — pupils dilate, blood glucose drops, self-control degrades.",
        "The division of labour is efficient and mostly correct. System 1 generates a continuous stream of suggestions; System 2 endorses them with little modification. Trouble arrives at the edges — situations where System 1's answer is confidently produced and wrong, and System 2 is not alerted that anything needs checking.",
        "The most quoted demonstration is the bat and ball: a bat and ball cost $1.10 together, the bat costs a dollar more than the ball, how much is the ball? Ten cents arrives instantly and is wrong. More than half of students at Harvard, MIT and Princeton gave the intuitive answer. Not because they cannot do the arithmetic — because nothing signalled that arithmetic was required.",
      ],
    },
    {
      heading: "Substitution: answering an easier question",
      body: [
        "The single most useful idea in the book is also the least famous. When faced with a hard question, System 1 quietly swaps in an easier one and answers that instead, without notifying you of the substitution.",
        "How happy are you with your life these days? — hard. How is my mood right now? — easy. How likely is this startup to succeed? — hard. How impressive is the founder? — easy. How much should this company be fined? — hard. How angry does the story make me? — easy.",
        "The answer to the easy question gets mapped onto the hard question's scale and delivered with the confidence appropriate to the easy one. This is the machinery underneath most of the specific biases: they are not separate defects, they are the same shortcut wearing different clothes.",
      ],
    },
    {
      heading: "The heuristics that follow",
      body: [
        "Availability: we judge how common something is by how easily examples come to mind. Vivid, recent, or heavily reported events therefore feel more probable than they are. Plane crashes over car crashes; shark attacks over falling coconuts.",
        "Representativeness: we judge probability by resemblance to a stereotype and ignore how many of each kind exist. Kahneman's Linda — the philosophy graduate concerned with social justice — is judged more likely to be a feminist bank teller than a bank teller, which is impossible, because the description resembles the story better.",
        "Anchoring: any number in the vicinity contaminates the estimate that follows, including numbers everyone knows are meaningless. Kahneman had judges roll dice before recommending sentences; the dice moved the sentences.",
        "Framing: logically identical options produce different choices depending on wording. Surgery with 90% survival is chosen over surgery with 10% mortality, by doctors as well as patients.",
        "What binds these together is that none of them feel like errors from the inside. The wrong answer arrives with exactly the same subjective signature as the right one.",
      ],
    },
    {
      heading: "WYSIATI, and the manufacture of confidence",
      body: [
        "Kahneman's acronym for the deepest problem: What You See Is All There Is. System 1 builds the best possible story out of whatever information is present, and it does not track what is missing. Coherence, not completeness, is what generates the feeling of understanding.",
        "This has an uncomfortable consequence. Confidence is a measure of how neatly the available evidence hangs together — not of how much evidence there is, and not of its quality. A story built from three consistent facts feels more certain than one built from thirty mixed ones. So the less you know, the easier it is to be sure.",
        "It also explains hindsight. Once you know the outcome, System 1 rebuilds the past so that the outcome looks inevitable, and you lose access to the genuine uncertainty you felt at the time. Which is why organisations reliably punish good decisions with bad outcomes and reward the reverse.",
      ],
    },
    {
      heading: "Prospect theory, and why losses dominate",
      body: [
        "The work that won the Nobel. Classical economics assumed people evaluate outcomes in terms of final wealth states. Kahneman and Tversky showed that people evaluate changes relative to a reference point, and that the function is bent: losses hurt roughly twice as much as equivalent gains please.",
        "That asymmetry generates a great deal of ordinary behaviour. The endowment effect — you demand more to give up the mug than you would have paid for it. Status quo bias — any change creates losers who fight harder than the winners campaign. Risk-seeking in the domain of losses — people who are already down will take a bad gamble to get back to even, which is how small trading losses become large ones.",
        "There is also a probability weighting: we overweight tiny probabilities and underweight moderate-to-high ones. This is the same person buying a lottery ticket and an extended warranty on a toaster.",
      ],
    },
    {
      heading: "Experts, formulas, and the illusion of skill",
      body: [
        "One of the book's most contested sections. Kahneman marshals decades of evidence that simple statistical models outperform expert judgment across a startling range of domains — clinical diagnosis, academic admissions, recidivism, wine futures. Not because experts are stupid, but because they add noise: the same expert, given the same case twice, often disagrees with himself.",
        "He distinguishes environments where intuition can be trusted from environments where it cannot. Skilled intuition requires a regular, predictable world and rapid, unambiguous feedback. Chess and firefighting qualify. Long-horizon stock picking and political forecasting do not — the environment is too noisy and the feedback too slow and too confounded to train the pattern-matcher.",
        "He is candid that he lived this himself, describing his own years of confidently producing officer-selection assessments that turned out to have almost no predictive value — and continuing to feel confident while producing them.",
      ],
    },
    {
      heading: "The two selves",
      body: [
        "The last part turns to wellbeing, and Kahneman separates the experiencing self, which lives moment to moment, from the remembering self, which writes the story afterwards and makes all the decisions about the future.",
        "They disagree, and memory wins. In the cold-water and colonoscopy experiments, remembered unpleasantness tracks the peak and the ending, and is almost entirely indifferent to duration. Patients who endured a longer procedure with a gentler finish remembered it as better and were more willing to repeat it.",
        "The upshot is unsettling: we do not choose between experiences, we choose between memories of experiences, and we systematically sacrifice the experiencing self's interests to the remembering self's story. Kahneman thought this had real implications for how we plan holidays, careers, and health care, and did not pretend to have resolved it.",
      ],
    },
    {
      heading: "What to actually do about it",
      body: [
        "Kahneman is famously pessimistic about self-correction. He said repeatedly that decades of studying these biases had not made him noticeably less susceptible to them, and that the realistic gain from reading the book is a better vocabulary for other people's mistakes and, occasionally, for your own in retrospect.",
        "The leverage, he argues, is organisational rather than personal. Institutions can slow decisions down, impose checklists and structured formats, force separate independent estimates before discussion, and adopt the premortem — assume the project has failed a year from now and write the story of why — which gives dissent a legitimate channel.",
        "The honest summary is that the book is far better at diagnosis than at cure, and says so.",
      ],
    },
  ],
  keyIdeas: [
    {
      term: "System 1 / System 2",
      gloss:
        "Fast, automatic, always-on intuition versus slow, effortful, lazy deliberation. Not brain regions — a working shorthand for two modes of arriving at an answer.",
    },
    {
      term: "Substitution",
      gloss:
        "Silently answering an easier question than the one asked, and reporting the answer with unearned confidence. The engine behind most named biases.",
    },
    {
      term: "WYSIATI",
      gloss:
        "What You See Is All There Is. The mind builds coherent stories from available evidence and does not register what is absent, so confidence tracks coherence rather than completeness.",
    },
    {
      term: "Loss aversion",
      gloss:
        "Losses register roughly twice as strongly as equivalent gains, measured from a reference point rather than in absolute terms.",
    },
    {
      term: "The planning fallacy",
      gloss:
        "Forecasting from the best-case inside view of your own project instead of the base rate of similar projects. Reliably produces optimistic schedules.",
    },
    {
      term: "The remembering self",
      gloss:
        "The narrator who evaluates an experience by its peak and its ending, ignores duration, and makes all the decisions the experiencing self has to live with.",
    },
  ],
  tensions: [
    "The replication crisis hit this book hard. The priming research in Chapter 4 has largely failed to replicate. In 2017 Kahneman publicly accepted the criticism, saying he had placed too much faith in underpowered studies. He handled it about as well as a scientist can, but the chapter is still in the book.",
    "Ego depletion — the claim that self-control draws on a limited glucose-linked resource — is now widely regarded as unsupported. It appears in the book as settled.",
    "Gerd Gigerenzer's long-running critique holds that heuristics are not defective shortcuts but efficient adaptations to real environments, and that many classic 'biases' shrink or vanish when questions are posed in natural frequencies rather than probabilities. The disagreement is unresolved and worth knowing about.",
    "The book is long, and the middle chapters read as a survey of experiments rather than an argument. Many readers get most of the value from Parts 1 and 4.",
    "Kahneman's own conclusion — that knowing about biases barely helps you avoid them — sits awkwardly with how the book is usually sold and applied.",
  ],
  connections: {
    reads: [
      {
        title: "Noise: A Flaw in Human Judgment",
        author: "Daniel Kahneman, Olivier Sibony & Cass Sunstein",
        why: "The sequel, and arguably the more actionable book. Bias is systematic error; noise is scatter — and organisations bleed far more from scatter than they realise.",
      },
      {
        title: "The Undoing Project",
        author: "Michael Lewis",
        why: "The story of Kahneman and Tversky as people. Explains the collaboration, and the friendship, that produced everything in this book.",
      },
      {
        title: "Nudge",
        author: "Richard Thaler & Cass Sunstein",
        why: "What happens when you take this research and ask what a policymaker should do with it. Behavioural economics turned into design.",
      },
      {
        title: "Superforecasting",
        author: "Philip Tetlock & Dan Gardner",
        why: "The constructive answer to Kahneman's pessimism: evidence that calibrated forecasting is a trainable skill, if you keep score.",
      },
      {
        title: "Risk Savvy",
        author: "Gerd Gigerenzer",
        why: "The best-argued case for the other side — that fast heuristics are frequently the smart move, not a bug to be engineered around.",
      },
      {
        title: "The Black Swan",
        author: "Nassim Nicholas Taleb",
        why: "Same target, wilder aim. Where Kahneman documents systematic error in the lab, Taleb argues the errors that matter live in the tails no lab captures.",
      },
    ],
    threads: [
      {
        label: "The replication crisis",
        note: "This book is the highest-profile casualty and the clearest case study. Reading it alongside what happened to it afterwards teaches more about how science self-corrects than either does alone.",
      },
      {
        label: "Algorithms versus judgment",
        note: "Kahneman's case for simple models over expert intuition is the intellectual ancestor of most arguments now being had about algorithmic decision-making in hiring, lending and medicine.",
      },
      {
        label: "Behavioural economics in policy",
        note: "The line from these experiments to nudge units inside real governments is short and direct — as is the backlash about paternalism and about effect sizes that shrank at scale.",
      },
    ],
  },
  startHere:
    "Part 1 for the machinery, then Part 4 on prospect theory, then Part 5 on the two selves. The middle sections are a catalogue and can be sampled. If you read nothing else, read the chapter on substitution — it reframes every other bias in the book.",
  sources: [
    {
      label: "Thinking, Fast and Slow — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow",
    },
    {
      label: "Daniel Kahneman — Nobel Prize biographical",
      url: "https://www.nobelprize.org/prizes/economic-sciences/2002/kahneman/facts/",
    },
    {
      label: "Kahneman accepts the priming criticism — Retraction Watch, 2017",
      url: "https://retractionwatch.com/2017/02/20/placed-much-faith-underpowered-studies-nobel-prize-winner-admits-mistakes/",
    },
  ],
};
