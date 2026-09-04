import type { Book } from "../types";

export const commonSense: Book = {
  slug: "common-sense",
  title: "Common Sense",
  author: "Thomas Paine",
  year: 1776,
  era: "1776",
  category: "Economics & Politics",
  hook: "Forty-eight pages that turned a tax dispute into a revolution.",
  readingMinutes: 7,
  coreIdea:
    "In January 1776 most American colonists still wanted reconciliation with Britain and a restoration of their rights as Englishmen. Paine argued that the quarrel was not with a bad ministry but with monarchy itself, that hereditary rule is absurd on its face, that an island cannot govern a continent, and that independence was not a distant option but the only reasonable course. He wrote it in plain language for people who had never read political theory, and it worked.",
  whyItEndures:
    "It is the most effective piece of political persuasion ever written in English, and a demonstration that argument changes history when it reaches people who were not part of the conversation. It sold perhaps 150,000 copies in a population of 2.5 million within months, which has no modern equivalent.",
  sections: [
    {
      heading: "Writing for people who do not read pamphlets",
      body: [
        "Paine had arrived in Philadelphia in 1774, a failed corset-maker and excise officer from Thetford with a letter of introduction from Benjamin Franklin. He had no formal education past thirteen.",
        "That is the source of the style. He avoids Latin tags, classical allusions and legal argument, and writes in short declarative sentences with images anyone could picture: there is something absurd in supposing a continent to be perpetually governed by an island.",
        "He published anonymously, priced it cheaply, and waived his royalties so it could be reprinted freely. It was read aloud in taverns and to troops, which mattered in a partly literate population and shaped the prose — it is written to be heard.",
      ],
    },
    {
      heading: "Against monarchy itself",
      body: [
        "The first section separates society from government. Society is produced by our wants and is a blessing; government by our wickedness, and in its best state it is but a necessary evil.",
        "The second attacks monarchy on three grounds: it has no basis in scripture, since the Israelites' demand for a king is presented in the Bible as a rejection of God; it has no basis in reason, since one man cannot be presumed superior to millions; and hereditary succession is an insult and an imposition on posterity.",
        "His demolition of the Norman Conquest is characteristic: a French bastard landing with an armed banditti and establishing himself king of England against the consent of the natives is in plain terms a very paltry rascally original.",
      ],
    },
    {
      heading: "The case for independence",
      body: [
        "Paine addresses the reconciliation arguments one by one. That Britain protected the colonies — she did so for her own commercial interest, and would have protected Turkey on the same terms. That Britain is the parent country — then the more shame upon her conduct, since even brutes do not devour their young. That America has flourished under British rule — America would have flourished as much, and probably more, since the commerce by which she has enriched herself consists of necessaries that will always find a market.",
        "His geographic argument is the one that seems obvious now and did not then: there is something absurd in supposing a continent perpetually governed by an island, and reconciliation is a fallacious dream because nature has deserted the connection.",
        "He also makes a practical case, with numbers: the colonies could build a navy, they had the timber and the tar, and the debt would be manageable. The appendix includes an estimate of the cost of a fleet.",
      ],
    },
    {
      heading: "The wider claim",
      body: [
        "Paine's ambition goes past the immediate question. The cause of America, he writes, is in a great measure the cause of all mankind, and the birthday of a new world is at hand.",
        "He proposes a continental charter, a written constitution, annual assemblies and a president chosen by rotation among the colonies — a sketch that anticipates much of what followed, from someone with no standing to propose anything.",
        "The famous closing line — we have it in our power to begin the world over again — is the reason he mattered beyond America. He went on to the French Revolution, wrote The Rights of Man, was elected to the National Convention, was imprisoned during the Terror, and nearly guillotined.",
      ],
    },
    {
      heading: "What happened to him",
      body: [
        "Paine gave away the profits and died poor. His later work The Age of Reason, a deist attack on organised religion and on biblical authority, made him unacceptable to nearly everyone.",
        "He returned to America in 1802 and was largely shunned. When he died in New York in 1809, six people attended his funeral; he was refused burial in a Quaker cemetery.",
        "Theodore Roosevelt later called him a filthy little atheist, which is a fair measure of how thoroughly the man who made the case for independence was written out of the story of it.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Society and government distinguished", gloss: "Society produced by our wants and a blessing; government produced by our wickedness and at best a necessary evil." },
    { term: "Hereditary succession as absurdity", gloss: "The argument that no reasoning establishes one family's right to rule others in perpetuity, and that the original claim was usually conquest." },
    { term: "The continent and the island", gloss: "The geographic case that colonial rule at that distance and scale was not merely unjust but unworkable." },
    { term: "Plain style as strategy", gloss: "Writing without classical allusion or legal argument, to reach people political pamphlets had never addressed." },
    { term: "The cause of all mankind", gloss: "Framing a colonial dispute as a universal argument about self-government — the move that made Paine matter in France as well." },
  ],
  tensions: [
    "It is polemic, not analysis. Paine caricatures the reconciliation position and passes over the genuine difficulties of governing a continent, which the following fifteen years exposed.",
    "The economic and military estimates are optimistic to the point of fantasy, and the war was far longer and costlier than he suggested.",
    "Slavery is nearly absent. Paine opposed it in other writing, but Common Sense does not address the contradiction at the centre of American liberty.",
    "His constitutional sketch is thin, and the Articles of Confederation that emerged from this moment failed within a decade — a problem the Federalist Papers had to solve.",
  ],
  connections: {
    reads: [
      { title: "The Federalist Papers", author: "Hamilton, Madison and Jay", why: "The hard part Paine skipped: designing institutions that work once you have won." },
      { title: "Reflections on the Revolution in France", author: "Edmund Burke", why: "The counter-argument. Paine's Rights of Man was written specifically to answer Burke, and the exchange defines modern political argument." },
      { title: "The Social Contract", author: "Jean-Jacques Rousseau", why: "The theoretical version of Paine's claim about consent and legitimacy, in the register Paine deliberately avoided." },
      { title: "The Wealth of Nations", author: "Adam Smith", why: "Published the same year, and making the economic case against the mercantile system Paine attacks politically." },
    ],
    threads: [
      { label: "Plain language as politics", note: "Paine's decision to write for people outside the political class is itself the argument, and every subsequent popular political writer works in his shadow." },
      { label: "The pamphlet moment", note: "A short cheap document reaching a mass audience fast is a recurring political technology, and 1776 is its clearest demonstration." },
    ],
  },
  startHere:
    "All of it — it is under fifty pages. The section on monarchy and hereditary succession is the one that changed minds.",
  sources: [
    { label: "Common Sense — Wikipedia", url: "https://en.wikipedia.org/wiki/Common_Sense_(pamphlet)" },
    { label: "Thomas Paine — Britannica", url: "https://www.britannica.com/biography/Thomas-Paine" },
  ],
};
