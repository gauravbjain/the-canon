import type { Book } from "../types";

export const howToWinFriendsAndInfluencePeople: Book = {
  slug: "how-to-win-friends-and-influence-people",
  title: "How to Win Friends and Influence People",
  author: "Dale Carnegie",
  year: 1936,
  era: "1936",
  category: "Craft & Work",
  hook: "The book that invented self-help, built on one observation: people are far more interested in themselves than in you.",
  readingMinutes: 7,
  coreIdea:
    "Carnegie's premise is that most of what people want is a feeling of importance, that almost nobody responds well to criticism, and that the way to influence someone is to arrange for them to want what you want. The principles are simple to the point of banality — take a genuine interest in others, remember names, listen, talk about their interests, let them save face — and they work, which is the interesting part.",
  whyItEndures:
    "It has sold over thirty million copies and created an entire publishing category. It is also more honest than its reputation: Carnegie repeatedly insists the techniques fail if they are insincere, which is either the book's saving qualification or its central evasion, depending on how you read it.",
  sections: [
    {
      heading: "Where it came from",
      body: [
        "Carnegie was a Missouri farm boy who failed as a salesman and an actor and began teaching public speaking at a YMCA in New York in 1912, initially for whatever the class would pay.",
        "The book grew out of fifteen years of those classes. Its content came from students' reported experiences — Carnegie had them try techniques and report back — supplemented by biographical research on Lincoln, Roosevelt and other figures he admired.",
        "This origin explains the form. It is a course, not an argument: short principles, each illustrated with several anecdotes, with instructions to practise one at a time. The anecdotes are the weakest part and the structure is why the book works.",
      ],
    },
    {
      heading: "Don't criticise",
      body: [
        "The first and most emphasised principle is that criticism is futile because it puts a person on the defensive and makes them strive to justify themselves. It wounds pride and arouses resentment, and it almost never produces the change intended.",
        "Carnegie's evidence is characteristic: he quotes letters from notorious criminals describing themselves as misunderstood men who had done nothing to deserve their treatment. If Al Capone did not think himself a bad man, he asks, what are the chances that the person you want to correct does?",
        "The positive version is that appreciation, specific and sincere, is the strongest lever available, because the deepest human urge is the desire to be important — a claim he takes from William James and from Dewey.",
      ],
    },
    {
      heading: "The name and the interest",
      body: [
        "The best-known principles concern attention. Remember and use a person's name, which Carnegie calls to that person the sweetest and most important sound in any language. Become genuinely interested in other people, on the grounds that you will make more friends in two months by being interested in others than in two years by trying to get others interested in you.",
        "Be a good listener and encourage others to talk about themselves, which he illustrates with an account of a dinner where he said almost nothing and was afterwards described as a most interesting conversationalist.",
        "Talk in terms of the other person's interests, which is his central sales principle: he uses the image of baiting a hook with what the fish wants rather than what you want.",
      ],
    },
    {
      heading: "Winning people to your way of thinking",
      body: [
        "The third section is the most practically useful and the least comfortable. The only way to get the best of an argument is to avoid it. Never say you're wrong. If you are wrong, admit it quickly and emphatically.",
        "Get the other person saying yes immediately — the Socratic method reduced to a sales technique. Let the other person do a great deal of the talking. Let them feel the idea is theirs. Try honestly to see things from their point of view.",
        "The section on handling mistakes is the part most worth taking into a workplace: begin with praise, call attention to errors indirectly, mention your own mistakes first, ask questions instead of giving orders, and let the other person save face.",
      ],
    },
    {
      heading: "Sincerity, and the objection",
      body: [
        "The standing charge against the book is that it teaches manipulation — a set of techniques for producing the appearance of interest in service of getting what you want.",
        "Carnegie anticipates this and insists throughout that the principles only work when the interest is real, that flattery is counterfeit and is found out, and that the difference between appreciation and flattery is that one is sincere and the other is not.",
        "Whether this holds is the honest question about the book. A technique presented as effective, taught as a method, and justified by results does not obviously become sincere by being labelled so. But the underlying observations — that people want to be taken seriously, that criticism rarely changes behaviour, that most conversation is competitive rather than curious — are true, and acting on them makes people better company whatever the motive.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Criticism is futile", gloss: "It triggers self-justification rather than change, because almost nobody believes themselves to be in the wrong." },
    { term: "The desire to be important", gloss: "Carnegie's single motivational premise, borrowed from James and Dewey, on which every principle rests." },
    { term: "Genuine interest", gloss: "Attention as the scarcest social resource — the reason listening outperforms talking as a way of being liked." },
    { term: "Let it be their idea", gloss: "Influence achieved by arranging for someone to want the outcome, rather than by arguing them into it." },
    { term: "Let them save face", gloss: "The most useful workplace principle in the book: a correction that costs someone their standing will be resisted regardless of its merit." },
  ],
  tensions: [
    "The manipulation charge is not fully answerable. A method for producing sincerity is a strange object, and Carnegie's insistence on genuineness sits awkwardly with a book of techniques.",
    "The evidence is anecdote. There are no controlled studies, the historical illustrations are simplified, and the students' reports are self-selected successes.",
    "The advice to avoid all argument and never say you're wrong is bad counsel in contexts where being right matters — engineering review, medicine, editing — and the book has no account of when disagreement is obligatory.",
    "It assumes a world of face-to-face selling and management that has partly disappeared, and the register is relentlessly upbeat in a way many readers find hard to take.",
  ],
  connections: {
    reads: [
      { title: "High Output Management", author: "Andrew Grove", why: "The systematic version of the same territory, with measurement instead of anecdote and no reluctance about direct feedback." },
      { title: "Influence", author: "Robert Cialdini", why: "The experimental successor: the same phenomena studied properly, with the ethics of using them addressed directly." },
      { title: "The Varieties of Religious Experience", author: "William James", why: "The source of Carnegie's premise about the craving to be appreciated, which James called the deepest principle in human nature." },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", why: "Why the techniques work — the fast system's responses to attention, reciprocity and consistency, described from the other end." },
    ],
    threads: [
      { label: "The invention of self-help", note: "The modern genre begins here, and its conventions — numbered principles, anecdotal proof, an upbeat voice — are all Carnegie's." },
      { label: "Sincerity and technique", note: "The book's unresolved problem is a genuinely interesting one: whether a disposition can be adopted as a method without becoming a performance." },
    ],
  },
  startHere:
    "Part One, which is three principles and about thirty pages, and Part Four on changing people without giving offence. The middle is repetitive.",
  sources: [
    { label: "How to Win Friends and Influence People — Wikipedia", url: "https://en.wikipedia.org/wiki/How_to_Win_Friends_and_Influence_People" },
    { label: "Dale Carnegie — Britannica", url: "https://www.britannica.com/biography/Dale-Carnegie" },
  ],
};
