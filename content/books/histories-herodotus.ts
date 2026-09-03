import type { Book } from "../types";

export const historiesHerodotus: Book = {
  slug: "histories-herodotus",
  title: "The Histories",
  author: "Herodotus",
  year: -430,
  era: "c. 430 BCE",
  category: "History",
  hook: "The book that invented history by refusing to leave out the good stories.",
  readingMinutes: 9,
  coreIdea:
    "Herodotus set out to record why the Greeks and Persians went to war, so that human achievements would not fade and great deeds would not go uncelebrated. What he produced is the first work of prose research in the West — the word historia means enquiry — and it is as much ethnography, geography and moral inquiry as it is a war narrative.",
  whyItEndures:
    "Cicero called him the father of history; his critics have called him the father of lies since antiquity. Both are right, and the combination is what makes him readable. He is the first writer to systematically ask what happened and why, to name his sources, to give competing versions, and to say when he does not believe what he is reporting.",
  sections: [
    {
      heading: "The method, such as it is",
      body: [
        "Herodotus travelled — Egypt, the Black Sea, Babylon, probably Italy — and talked to people. His sources are priests, guides, local informants and hearsay, and he is unusually candid about it. He repeatedly says that he is obliged to report what is said but not obliged to believe it, and applies that formula to stories he finds absurd.",
        "This is the birth of a discipline. Before him, the past was epic or genealogy; Herodotus treats it as something you could be wrong about, and therefore something you could investigate. He distinguishes what he saw, what he was told and what he inferred.",
        "His standards are not modern. He accepts oracles, portents and divine intervention as causal factors, and his geography of the far north and far east is fantasy. But the crucial move — that competing accounts exist and can be weighed — is entirely his.",
      ],
    },
    {
      heading: "The long approach to the war",
      body: [
        "The first half of the nine books is barely about Greeks. Herodotus builds toward the Persian Wars by narrating the rise of Persia itself, and each conquest becomes an excuse for a full account of the conquered people: Lydians, Egyptians, Scythians, Babylonians, Indians, Libyans.",
        "The Egyptian book alone runs to a substantial ethnography, complete with a theory of the Nile's flooding, an account of mummification, and the observation that the Egyptians do everything the opposite way round from the Greeks. Herodotus is genuinely curious about other people rather than merely cataloguing them.",
        "The digressive structure is a feature. His subject is not a campaign but the collision of two ways of organising human life, and you cannot see the collision without seeing both sides at length.",
      ],
    },
    {
      heading: "Solon and Croesus",
      body: [
        "The moral frame arrives in Book One. Croesus, the fabulously rich king of Lydia, shows the Athenian sage Solon his treasury and asks who is the happiest man Solon has met. Solon names an obscure Athenian who died well after a good life, and then two brothers who died in their sleep after an act of devotion. Croesus is insulted.",
        "Solon's explanation is the book's thesis: count no man happy until he is dead, because the god shows many men a glimpse of happiness and then destroys them utterly. Croesus subsequently misreads an oracle, destroys his own empire, and remembers Solon on the pyre.",
        "This pattern — prosperity, overreach, reversal — governs the whole work. Xerxes at the Hellespont, lashing the sea for wrecking his bridges, is Croesus at a larger scale.",
      ],
    },
    {
      heading: "The war itself",
      body: [
        "The final three books contain the battles everyone knows: Marathon, where the Athenians ran at the Persian line; Thermopylae, where Leonidas and three hundred Spartans held a pass for three days and died after being betrayed by a local guide; Salamis, where Themistocles manoeuvred the Persian fleet into narrow water; and Plataea, which ended the invasion.",
        "Herodotus's account of Thermopylae created the story as the West still tells it, including the Spartan reply that they would fight in the shade if the arrows blocked the sun. He is also careful to record that other Greeks fought and died there.",
        "His explanation for the Greek victory is political rather than military. Free men fighting for their own city outperform subjects driven by whips — a claim he puts in the mouth of the exiled Spartan king Demaratus, warning Xerxes that the Spartans obey a master, the law, and fear it more than his men fear him.",
      ],
    },
    {
      heading: "The constitutional debate",
      body: [
        "In Book Three, three Persian nobles debate whether Persia should become a democracy, an oligarchy or a monarchy — arguing the merits of each in what is the earliest surviving systematic comparison of constitutions.",
        "Herodotus anticipates disbelief and insists the debate really happened. It almost certainly did not; the arguments are Greek political theory in Persian dress. But it is a remarkable thing to have written, and it shows a historian using his material to think rather than merely to record.",
        "The passage also demonstrates his habitual fairness. The case for monarchy is given its full strength and it wins, which is not the answer an Athenian audience would have wanted.",
      ],
    },
    {
      heading: "Customs and the limits of judgement",
      body: [
        "The most philosophically interesting moment in Herodotus is small. Darius asks some Greeks what they would take to eat their dead fathers; they say no price. He asks some Indians, whose custom is to eat their dead, what they would take to burn them; they cry out at the impiety.",
        "Herodotus's conclusion — that custom is king of all — is one of the earliest statements of cultural relativism, and he arrives at it empirically, from travel, rather than as a doctrine.",
        "It sits alongside his willingness to admire enemies. Persians are not caricatures; several are the most sympathetic figures in the book. For a work written by a Greek about the Greek victory, the absence of triumphalism is striking.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Historia", gloss: "Enquiry. The concept that the past is something one investigates and can be wrong about, rather than something one recites." },
    { term: "Count no man happy until he is dead", gloss: "Solon's rule, and the book's structural principle. Fortune is not settled until the life is over." },
    { term: "Hubris and nemesis", gloss: "Overreach followed by reversal, applied to individuals and empires alike, with the gods jealous of anything conspicuously great." },
    { term: "Custom is king", gloss: "Peoples judge by their own conventions and find others' repulsive. An early, empirically derived relativism." },
    { term: "Freedom and fighting power", gloss: "Herodotus's explanation of the Greek victory: free men under law outfight subjects under compulsion." },
  ],
  tensions: [
    "Accuracy is the standing charge, made as early as Plutarch's essay On the Malice of Herodotus. Numbers are wildly inflated — a Persian army of over five million is not possible — and many marvels are secondhand or invented.",
    "Thucydides, writing a generation later, implicitly rebukes him for entertaining his readers, and the contrast between the two founded a permanent argument about what history is for.",
    "His causal explanations mix divine jealousy, oracles and dreams with political and material factors, and he does not rank them.",
    "Archaeology has vindicated him surprisingly often on ethnography while confirming the scepticism about his military numbers — the reliability varies enormously by subject, and the reader has to keep track.",
  ],
  connections: {
    reads: [
      { title: "History of the Peloponnesian War", author: "Thucydides", why: "The immediate reaction. Thucydides strips out the gods, the marvels and the pleasure, and produces something colder and arguably narrower." },
      { title: "The Decline and Fall of the Roman Empire", author: "Edward Gibbon", why: "The other great historian who is also a stylist, and who likewise treats the rise and fall of a civilisation as a moral question." },
      { title: "The Guns of August", author: "Barbara Tuchman", why: "Narrative history in the Herodotean tradition — character, contingency and the pleasure of the telling put back at the centre." },
      { title: "Persian Fire", author: "Tom Holland", why: "A modern retelling of the same war using the archaeological and Persian evidence Herodotus lacked." },
    ],
    threads: [
      { label: "East and West", note: "The Histories is the founding text of the idea that Greece and Persia represent opposed principles — an idea Edward Said later traced forward as Orientalism." },
      { label: "Narrative versus analysis", note: "The Herodotus–Thucydides split is the original version of an argument historians are still having about what counts as evidence and what counts as history." },
    ],
  },
  startHere:
    "Book One for Croesus and Solon, which sets the moral machinery. Then Book Seven for Xerxes' invasion and Thermopylae. Book Two, on Egypt, is the best of the ethnographies if you want the curious traveller rather than the war.",
  sources: [
    { label: "Histories (Herodotus) — Wikipedia", url: "https://en.wikipedia.org/wiki/Histories_(Herodotus)" },
    { label: "Herodotus — Britannica", url: "https://www.britannica.com/biography/Herodotus-Greek-historian" },
  ],
};
