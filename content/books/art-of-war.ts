import type { Book } from "../types";

export const artOfWar: Book = {
  slug: "art-of-war",
  title: "The Art of War",
  author: "Sun Tzu",
  year: -500,
  era: "c. 5th century BCE",
  category: "Craft & Work",
  hook: "The best victory costs nothing, because the fight was decided before it started.",
  readingMinutes: 8,
  coreIdea:
    "War is too expensive to be settled by fighting. Sun Tzu's argument is that battles are won or lost in the preparation — in intelligence, position, timing and the shaping of the opponent's choices — and that by the time swords are drawn the outcome has usually been fixed. The supreme skill is to break the enemy's resistance without a battle at all.",
  whyItEndures:
    "Thirteen short chapters, no wasted words, and almost nothing tied to bronze-age technology. Because Sun Tzu writes about the structure of conflict rather than the mechanics of it, the text transfers cleanly to negotiation, litigation, competition and politics — which is why it has been read continuously for two and a half thousand years by people who will never see a battlefield.",
  sections: [
    {
      heading: "Five factors, assessed before anything begins",
      body: [
        "The book opens with an audit. Before committing, a commander weighs five things: moral influence (whether the people are aligned with their ruler), weather, terrain, the qualities of the commander, and doctrine — organisation, discipline and logistics. Sun Tzu claims that whoever makes more calculations in the temple beforehand wins, and whoever makes fewer loses.",
        "This sounds banal until you notice what it excludes. There is no appeal to courage, honour, or the justice of the cause. The assessment is coldly comparative: which side is stronger on each dimension, and therefore what is likely to happen. Conflict is treated as a problem with a calculable answer, and the point of the calculation is often to decide not to fight.",
      ],
    },
    {
      heading: "Deception as the organising principle",
      body: [
        "All warfare is based on deception, Sun Tzu says early, and the list that follows is almost mechanical: when able, appear unable; when near, appear far; offer bait to lure; feign disorder and strike.",
        "The reason deception is central is that his whole theory turns on information asymmetry. If your opponent knows your position and intentions, he can concentrate against them. If he does not, he must defend everywhere, and defending everywhere means being weak everywhere. Concealment is not a trick but the mechanism that produces local superiority from equal forces.",
        "The corollary is that intelligence is the cheapest weapon available. The final chapter, on spies, argues that a ruler who begrudges a few hundred pieces of silver for information while spending a fortune on an army for years is simply innumerate about his own war.",
      ],
    },
    {
      heading: "The cost of protracted war",
      body: [
        "Chapter Two is essentially an economic argument. Long campaigns blunt weapons, exhaust troops, drain treasuries, and invite third parties to intervene while you are weakened. No country has ever benefited from a prolonged war, he writes, and the sentence is meant literally.",
        "From this follows a set of practical rules that read as logistics rather than strategy: feed your army from the enemy's territory, reward soldiers who capture supplies, value a swift imperfect victory over a slow flawless one. Sun Tzu is entirely willing to accept a worse plan that ends sooner.",
        "This is the part of the book most often ignored by the executives who quote it, and it is arguably the most important. The text is far more interested in avoiding conflict, or ending it quickly, than in winning gloriously.",
      ],
    },
    {
      heading: "Shape, position, and the hollow at the centre",
      body: [
        "The middle chapters develop a concept usually translated as form or disposition — shih. The idea is that advantage comes from arranging yourself so that force is released without effort, the way water held behind a dam does the work when it is let go, or a round stone rolls down a mountain by its own weight.",
        "Sun Tzu's recurring image for this is water: it has no constant shape, it avoids heights and hurries to the low ground, it finds whatever gap exists. An army should be shapeless in the same way — not committed to a plan, but conforming to the opponent's weaknesses as they appear.",
        "The practical translation is: attack where the enemy is not, avoid strength and strike emptiness, and make him move so that he is never set. Victory comes from being unassailable yourself and waiting for the opportunity the opponent eventually creates. You can make yourself invulnerable; you cannot make the enemy vulnerable — that part is up to him.",
      ],
    },
    {
      heading: "Knowing both sides",
      body: [
        "The most quoted line in the book is the one about knowing yourself and knowing the enemy. What is usually lost is that Sun Tzu gives three cases, not two. Know both and you will not be endangered in a hundred battles. Know yourself but not the enemy and you will win one and lose one. Know neither and you will lose every time.",
        "The asymmetry is the point: self-knowledge alone gets you to roughly even odds, which is another way of saying that most of the advantage available in conflict lies in understanding the other side. It is an argument for spending your effort outward.",
      ],
    },
    {
      heading: "The general and the sovereign",
      body: [
        "One recurring theme is the danger of political interference. Sun Tzu lists the ways a ruler can ruin his own army: ordering advances or retreats without knowing the situation, administering the army as if it were a court, appointing commanders by favour. The commander in the field, he says, may decline an order from the sovereign.",
        "This is a genuinely radical claim in an imperial context, and it explains part of the text's appeal to modern managers. Its underlying argument is about the location of knowledge — decisions should be made where the information is, not where the authority sits.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Winning without fighting", gloss: "The highest excellence is subduing the enemy's forces without battle. Fighting is evidence that earlier stages were handled badly." },
    { term: "Shih", gloss: "Strategic advantage arising from position and momentum — arranging things so force is released rather than exerted." },
    { term: "Emptiness and fullness", gloss: "Attack where the opponent is not concentrated. Concentration is finite, so force him to spread and the gaps appear on their own." },
    { term: "Know both sides", gloss: "Self-knowledge alone gets you even odds. The available edge lies almost entirely in understanding the opponent." },
    { term: "Deception as economy", gloss: "Concealment is not dishonour but the cheapest way to produce local superiority from equal forces." },
  ],
  tensions: [
    "Authorship and date are unsettled. Sun Tzu may be a real general of the Spring and Autumn period, a later compiler, or a tradition; the received text likely dates to the Warring States era and shows signs of multiple hands.",
    "Its aphoristic style is also its weakness: the maxims are general enough that almost any outcome can be explained after the fact as having followed or violated them. It resists being wrong.",
    "The business-strategy adaptation strips out the thing Sun Tzu cared most about — that war is ruinous and should be avoided — and keeps only the tactics, inverting the book's actual argument.",
    "Compared with Clausewitz, Sun Tzu underrates friction and chance. His commander operates with a clarity that real campaigns rarely permit.",
  ],
  connections: {
    reads: [
      { title: "On War", author: "Carl von Clausewitz", why: "The Western counterpart and near-opposite. Clausewitz starts from friction, uncertainty and the political nature of war, and doubts that battle can be avoided." },
      { title: "The Prince", author: "Niccolò Machiavelli", why: "The same refusal to let moral preference distort analysis, applied to holding power rather than winning campaigns." },
      { title: "The Book of Five Rings", author: "Miyamoto Musashi", why: "A swordsman's version of the same instincts, written from individual combat rather than command, and more concerned with the practitioner's mind." },
      { title: "High Output Management", author: "Andrew Grove", why: "The modern management text that shares Sun Tzu's core conviction: decisions belong where the knowledge is, and preparation beats heroics." },
    ],
    threads: [
      { label: "Strategy as positioning", note: "Michael Porter's competitive strategy, and most of what business schools mean by 'strategy', is recognisably Sun Tzu's shih translated into markets." },
      { label: "Information asymmetry", note: "The text is an early and unusually clear account of why knowing more than your counterpart is worth more than being stronger." },
    ],
  },
  startHere:
    "Chapter Three, on attack by stratagem, which contains the argument for winning without fighting and the passage about knowing both sides. Then Chapter Six on weakness and strength, which is where the theory actually lives.",
  sources: [
    { label: "The Art of War — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Art_of_War" },
    { label: "Sun Tzu — Internet Encyclopedia of Philosophy", url: "https://iep.utm.edu/sun-tzu/" },
  ],
};
