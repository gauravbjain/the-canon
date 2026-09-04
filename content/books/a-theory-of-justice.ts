import type { Book } from "../types";

export const aTheoryOfJustice: Book = {
  slug: "a-theory-of-justice",
  title: "A Theory of Justice",
  author: "John Rawls",
  year: 1971,
  era: "1971",
  category: "Philosophy",
  hook: "What rules would you choose if you did not know who you were going to be?",
  readingMinutes: 10,
  coreIdea:
    "Imagine designing a society's basic institutions from behind a veil of ignorance: you know general facts about economics and psychology but nothing about your own position — not your class, talents, race, sex, or even your conception of the good life. Rawls argues that rational people in that position would choose two principles: equal basic liberties for all, and social and economic inequalities arranged so that they benefit the least advantaged.",
  whyItEndures:
    "It revived political philosophy as a serious discipline after decades in which it had been declared dead, and it did so by giving egalitarian liberalism a rigorous foundation. Almost every subsequent work in the field, including the ones attacking it, is organised around this book.",
  sections: [
    {
      heading: "Against utilitarianism",
      body: [
        "Rawls's target is the utilitarian consensus that had dominated Anglophone moral and political thought. Its defect, he argues, is that it treats society as a single agent maximising a total, which permits imposing losses on some people for larger gains to others.",
        "His formulation is precise: utilitarianism does not take seriously the distinction between persons. Each of us has a separate life, and the fact that a benefit to you exceeds a cost to me does not license the transfer.",
        "The alternative he wants is a theory that generates the intuitive priority of individual rights while still being systematic — not a list of rights asserted, but rights derived from a procedure anyone could accept.",
      ],
    },
    {
      heading: "The original position",
      body: [
        "The device is a thought experiment in the social contract tradition, but the contract is hypothetical and its purpose is to model fairness. Parties choose principles for the basic structure of society knowing nothing about their own place in it.",
        "The veil of ignorance removes exactly the information that would let someone rig the rules in their favour — natural talents, social starting point, race, sex, religion, and their particular conception of the good.",
        "Rawls's claim is that this makes the choice fair by construction. Because you might be anyone, you must consider the position of everyone. He calls the result justice as fairness — not because justice equals fairness, but because principles chosen under fair conditions are for that reason just.",
      ],
    },
    {
      heading: "The two principles",
      body: [
        "First: each person has an equal claim to a fully adequate scheme of equal basic liberties — conscience, speech, assembly, the vote, due process, personal property.",
        "Second: social and economic inequalities are to satisfy two conditions. They must be attached to positions open to all under fair equality of opportunity, and they must be to the greatest benefit of the least advantaged members of society. The second half is the difference principle.",
        "The principles are lexically ordered: liberty comes first and cannot be traded for economic gain, and fair opportunity comes before the difference principle. You may not sell basic freedoms for prosperity, however large the gain.",
      ],
    },
    {
      heading: "The difference principle",
      body: [
        "This is Rawls's most distinctive and most contested idea. Inequality is permitted only when it improves the position of those at the bottom — a surgeon may earn more if higher pay produces better healthcare for the worst-off, but not simply because she is more talented.",
        "The reasoning is that the distribution of natural talents is arbitrary from a moral point of view. No one deserves their starting point, their genes, or the family that shaped their willingness to work. Rawls extends this to effort itself: even the capacity to make an effort depends on happy family and social circumstances.",
        "He therefore treats the distribution of talents as a common asset, with the more fortunate entitled to gain from their gifts only on terms that improve the situation of the less fortunate. This is where his critics on both left and right take their stand.",
      ],
    },
    {
      heading: "Reflective equilibrium",
      body: [
        "Rawls's method deserves as much attention as his conclusions. He does not derive principles from self-evident axioms. He works back and forth between general principles and considered judgements about particular cases, adjusting each until they cohere.",
        "This is reflective equilibrium, and it is now the standard method in analytic moral philosophy. It is deliberately modest: it does not claim to prove principles true, only to reach a position we can accept on reflection.",
        "It also explains why he keeps testing the theory against intuitions like the wrongness of slavery. If a derivation produced slavery as just, that would count against the derivation, not for slavery.",
      ],
    },
    {
      heading: "The later revision",
      body: [
        "Rawls spent twenty years responding to criticism and published Political Liberalism in 1993 with a significant change of framing.",
        "The problem he came to see is that A Theory of Justice appeared to rest on a particular comprehensive doctrine — a Kantian view of persons — which citizens holding other religious or philosophical views could reasonably reject.",
        "His revision is that justice as fairness should be presented as a political conception only, capable of attracting an overlapping consensus from people who disagree profoundly about everything else. The principles largely survive; the justification is deliberately made thinner.",
      ],
    },
  ],
  keyIdeas: [
    { term: "The original position", gloss: "A hypothetical choice situation designed to model fairness by removing the information that would let anyone rig the rules." },
    { term: "The veil of ignorance", gloss: "Not knowing your class, talents, sex, race or conception of the good, so you must weigh every position as possibly yours." },
    { term: "The difference principle", gloss: "Inequalities are just only insofar as they improve the position of the least advantaged." },
    { term: "Lexical priority", gloss: "Basic liberties come first and cannot be traded for economic gains, however large." },
    { term: "The moral arbitrariness of talent", gloss: "No one deserves their genes or upbringing, so distribution by natural endowment has no claim to justice." },
    { term: "Reflective equilibrium", gloss: "Adjusting principles and considered judgements against each other until they cohere — now the standard method in moral philosophy." },
  ],
  tensions: [
    "Robert Nozick's Anarchy, State, and Utopia (1974) is the classic libertarian reply: patterned principles of distribution cannot be maintained without continuous interference in people's voluntary transactions.",
    "Communitarian critics — Sandel, MacIntyre, Taylor, Walzer — argue the veil produces an unencumbered self that does not exist, since people's identities are constituted by attachments the device strips away.",
    "The decision-theoretic argument is contested. Choosing the maximin rule — maximise the minimum — is only rational under specific assumptions about risk, and Harsanyi argued that expected-utility reasoning behind the veil yields average utilitarianism instead.",
    "Feminist critics, notably Susan Moller Okin, pointed out that the family is left largely outside the basic structure, exempting the institution where much injustice is produced.",
    "Amartya Sen and Martha Nussbaum argued that primary goods are the wrong metric — people differ in what they can convert resources into — and built the capability approach as an alternative.",
  ],
  connections: {
    reads: [
      { title: "Anarchy, State, and Utopia", author: "Robert Nozick", why: "The essential counterweight, written by Rawls's Harvard colleague and generally read alongside it." },
      { title: "Leviathan", author: "Thomas Hobbes", why: "The social contract tradition Rawls revives, and the contrast: Hobbes derives from fear, Rawls from fairness." },
      { title: "The Republic", author: "Plato", why: "Glaucon's challenge is the same question — what would you choose if reputation and position were unknown — asked twenty-three centuries earlier." },
      { title: "The Idea of Justice", author: "Amartya Sen", why: "The most serious constructive alternative: comparative judgements about actual injustices rather than a specification of perfectly just institutions." },
    ],
    threads: [
      { label: "The revival of political philosophy", note: "The field was widely considered moribund in 1970. This single book restarted it, and the shape of the subsequent literature is largely a map of responses to it." },
      { label: "Luck egalitarianism", note: "Rawls's claim that natural talent is morally arbitrary generated an entire research programme on distinguishing chosen disadvantage from unchosen bad luck." },
    ],
  },
  startHere:
    "Sections 1 to 4 for the project and the original position, Section 11 for the two principles, and Sections 12 to 17 for the difference principle. That is about seventy pages of a six-hundred-page book and contains the argument.",
  sources: [
    { label: "A Theory of Justice — Wikipedia", url: "https://en.wikipedia.org/wiki/A_Theory_of_Justice" },
    { label: "John Rawls — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/rawls/" },
  ],
};
