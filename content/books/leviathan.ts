import type { Book } from "../types";

export const leviathan: Book = {
  slug: "leviathan",
  title: "Leviathan",
  author: "Thomas Hobbes",
  year: 1651,
  era: "1651",
  category: "Economics & Politics",
  hook: "Why people would rationally hand almost all their freedom to a sovereign, and why they should.",
  readingMinutes: 10,
  coreIdea:
    "Strip away law and authority and you get the state of nature: no industry, no culture, no society, and continual fear and danger of violent death, where the life of man is solitary, poor, nasty, brutish and short. Hobbes argues that rational self-interested people, seeing this, would agree together to transfer their right of self-government to a sovereign — and that having done so, they cannot rightfully take it back.",
  whyItEndures:
    "It is the first attempt to derive political authority entirely from human psychology and consent, with no appeal to divine right, natural hierarchy or tradition. Every social contract theory since — Locke, Rousseau, Rawls — is an argument with this book, and the state of nature remains the standard device for asking what government is for.",
  sections: [
    {
      heading: "A political theory built from motion",
      body: [
        "Hobbes begins not with politics but with physics. Everything is matter in motion, including thought: sensation is motion in the organs, imagination is decaying sense, and what we call deliberation is the alternation of appetites and aversions until one prevails, with will being simply the last appetite before acting.",
        "This materialism does the crucial work. If humans are mechanisms driven by appetite and aversion, then political order cannot be built on virtue or on natural sociability. It has to be engineered from the motives people actually have — chiefly the fear of death and the desire for commodious living.",
        "It also made him notorious. Contemporaries read the mechanistic psychology as atheism in disguise, and the book was condemned by Parliament and Oxford, and burned.",
      ],
    },
    {
      heading: "The state of nature",
      body: [
        "Hobbes's argument for why the natural condition is war has three legs, and each is more interesting than the famous phrase it produces. First, equality: men are roughly equal in body and mind, because the weakest can kill the strongest by stealth or confederacy. Second, scarcity: if two want the same thing they become enemies. Third, and decisively, anticipation: because no one can be sure of another's intentions, the rational move is to strike first, so even moderate men are driven to conquest for safety.",
        "War, he clarifies, does not mean constant fighting but a known disposition to it — as foul weather lies not in a shower or two but in an inclination thereto of many days together.",
        "He anticipates the objection that this never happened, and answers on three fronts: it partly exists among some peoples, it exists between sovereign states permanently, and it exists between citizens whenever government fails — which he had watched happen in the English Civil War.",
      ],
    },
    {
      heading: "The covenant",
      body: [
        "The way out is a mutual agreement in which each person authorises a common power, saying in effect: I give up my right of governing myself to this man or assembly, on condition that you do the same.",
        "Two features make Hobbes's version severe. The covenant is among the subjects, not between subjects and sovereign, so the sovereign is not a party and cannot breach it. And the transfer is not of obedience only but of judgement — the sovereign determines what counts as just, what doctrines may be taught, and what property anyone holds.",
        "The result is the artificial person of the commonwealth, the Leviathan of the title, which Hobbes calls a mortal god. The famous frontispiece shows a crowned giant whose body is composed of hundreds of individual citizens, all facing inward, holding sword and crozier.",
      ],
    },
    {
      heading: "Why the sovereign must be absolute",
      body: [
        "Hobbes's arguments for absolutism are all arguments from failure modes. A sovereign bound by law needs a judge to enforce the law, and that judge is then sovereign. Divided sovereignty is civil war postponed. A right of resistance held by subjects returns the decision on when to resist to private judgement, which is the state of nature restored.",
        "He is explicit that the sovereign may be a person or an assembly — Leviathan is not a defence of monarchy as such, though he thinks monarchy works better.",
        "The concession he makes is narrow but real. Because the whole point of the covenant is self-preservation, no one can be obliged to kill themselves, to confess a crime, or to refrain from resisting an executioner. And if the sovereign cannot protect you, the obligation lapses entirely — protection and obedience are reciprocal.",
      ],
    },
    {
      heading: "The half of the book nobody reads",
      body: [
        "Parts Three and Four, on the Christian commonwealth and the kingdom of darkness, are longer than the political theory and are usually skipped. They matter for understanding what Hobbes was doing.",
        "His target is the claim that religious authority is independent of civil authority — the doctrine that had, in his view, produced the Wars of Religion and the English Civil War. He argues at enormous length from scripture that the sovereign must also be the interpreter of scripture, because divided allegiance is a fault line that eventually cracks.",
        "The fourth part is a polemic against scholastic philosophy and the Catholic Church that he calls the kingdom of fairies, and it is unexpectedly funny.",
      ],
    },
    {
      heading: "The Fool, and why keeping covenants is rational",
      body: [
        "The sharpest passage in the book is Hobbes's answer to the Fool, who says in his heart that there is no such thing as justice and that breaking a covenant when it profits you is simply reasoning well.",
        "Hobbes's reply is not moral but prudential. Reasoning that leads to your own destruction cannot be good reasoning, and the covenant-breaker cannot be received into any society except by an error others make about him — and no one can reasonably bet their survival on other people's errors.",
        "This is a genuinely early piece of game-theoretic reasoning, and it is why Leviathan appears on economics and political science syllabuses rather than only in philosophy. The state of nature is a prisoner's dilemma, and the sovereign is Hobbes's enforcement mechanism.",
      ],
    },
  ],
  keyIdeas: [
    { term: "The state of nature", gloss: "The condition without common power: not lawlessness for its own sake but a rational spiral into pre-emption driven by uncertainty about others." },
    { term: "The covenant", gloss: "A mutual agreement among subjects to authorise a sovereign. The sovereign is not a party and so cannot violate it." },
    { term: "Leviathan", gloss: "The artificial person of the commonwealth — a mortal god composed of its citizens, holding both sword and crozier." },
    { term: "Protection and obedience", gloss: "The one real limit. Obligation lasts exactly as long as the sovereign's ability to protect you." },
    { term: "The Fool's objection", gloss: "Hobbes's prudential answer to the free rider: no one can rationally stake survival on others failing to notice." },
  ],
  tensions: [
    "The move from 'we consent to be governed' to 'we cannot ever withdraw consent' is the hinge, and Locke attacked it directly. If sovereignty derives from consent, it is not obvious why consent cannot be revoked.",
    "Hobbes offers almost no protection against a sovereign who is merely cruel rather than lethal — his own logic allows tyranny so long as it protects, which most readers find intolerable.",
    "The historical claim about the state of nature is unfalsifiable as he frames it, and anthropology has not been kind to the picture of pre-political life as continuous fear.",
    "His materialist psychology, which motivates everything, is asserted rather than demonstrated, and the political conclusions do not strictly require it.",
  ],
  connections: {
    reads: [
      { title: "Second Treatise of Government", author: "John Locke", why: "The direct reply. Locke accepts the contract and rejects the absolutism, arguing that a state of nature has natural law in it and that government can be dissolved." },
      { title: "The Social Contract", author: "Jean-Jacques Rousseau", why: "The third position: sovereignty stays with the people as a general will, and cannot be transferred at all." },
      { title: "A Theory of Justice", author: "John Rawls", why: "The modern revival of the contract device, asking not what people would accept out of fear but what they would choose behind a veil of ignorance." },
      { title: "The Prince", author: "Niccolò Machiavelli", why: "The other founding text of political realism, arriving at unsentimental conclusions from observation rather than from a theory of human nature." },
    ],
    threads: [
      { label: "The problem of order", note: "Hobbes framed the question every subsequent political theory has had to answer: given people as they are, what makes cooperation stable?" },
      { label: "Collective action", note: "The state of nature is the ancestor of the prisoner's dilemma, the tragedy of the commons, and every modern argument about enforcement." },
    ],
  },
  startHere:
    "Chapters 13, 14 and 17 — the natural condition, the laws of nature, and the generation of the commonwealth. About thirty pages, containing the entire argument.",
  sources: [
    { label: "Leviathan — Wikipedia", url: "https://en.wikipedia.org/wiki/Leviathan_(Hobbes_book)" },
    { label: "Hobbes's Moral and Political Philosophy — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/hobbes-moral/" },
  ],
};
