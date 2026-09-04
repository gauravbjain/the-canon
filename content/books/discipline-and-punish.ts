import type { Book } from "../types";

export const disciplineAndPunish: Book = {
  slug: "discipline-and-punish",
  title: "Discipline and Punish",
  author: "Michel Foucault",
  year: 1975,
  era: "1975",
  category: "Society & Culture",
  hook: "Prisons stopped torturing bodies and started training souls — and the techniques escaped the prison.",
  readingMinutes: 10,
  coreIdea:
    "Between roughly 1750 and 1840 European punishment shifted from public execution to imprisonment. Foucault argues this was not humanitarian progress but a change in the technology of power: from a sovereign power that displayed itself by destroying bodies to a disciplinary power that operates continuously, invisibly and productively, training individuals through surveillance, timetables and examination. The same techniques then spread to schools, hospitals, barracks and factories.",
  whyItEndures:
    "It reorganised how the humanities and social sciences think about power — not as something held and wielded from above but as something that circulates through everyday practices and produces the individuals it governs. The panopticon has become one of the most-used images in the language, particularly since digital surveillance made it literal.",
  sections: [
    {
      heading: "Two scenes",
      body: [
        "Foucault opens with the 1757 execution of Damiens the regicide, described in unbearable detail over several pages: flesh torn with pincers, molten lead poured into the wounds, an attempt at quartering by four horses that failed and had to be assisted.",
        "He then reprints, without comment, a timetable for a Paris reformatory eighty years later — rising at six, prayer, work, meals, instruction, silence, bed — hour by hour.",
        "The juxtaposition is the book's thesis in two documents. Something changed, and Foucault's question is what kind of change it was. His answer is that the target moved from the body to the soul, and that the new method was not less powerful but more.",
      ],
    },
    {
      heading: "Why the spectacle ended",
      body: [
        "The standard account credits Enlightenment humanitarianism. Foucault's account is different: public execution was politically unreliable.",
        "The scaffold was a site where the crowd could turn. Condemned people made speeches, crowds sometimes rescued them or attacked the executioner, and the ritual meant to display sovereign power could invert into a demonstration against it.",
        "The reformers' real objection, in his reading, was that punishment was too irregular, too discontinuous, and too dependent on spectacular displays that could fail. What they wanted was punishment that reached everyone, at all times, in proportion, without the theatre.",
      ],
    },
    {
      heading: "Discipline",
      body: [
        "The book's analytical core is a description of disciplinary technique, assembled from military, monastic, educational and industrial sources.",
        "Enclosure and partitioning: each individual assigned a place, each place one individual, so that presence and absence are always known. The timetable, inherited from monasteries, breaking activity into rhythms and prescribed occupations. The control of activity itself — not just what is done but how the body performs it, gesture by gesture, in the correlation of body and object.",
        "Hierarchical observation, so that the space is arranged to make people visible. Normalising judgement, in which small deviations are punished not by law but by gradation against a norm. And the examination, which combines observation and judgement and produces a documentary record — turning each person into a case, a describable, analysable object.",
      ],
    },
    {
      heading: "The panopticon",
      body: [
        "Jeremy Bentham's 1791 prison design places cells in a ring around a central tower, backlit so that each inmate is permanently visible from the tower while unable to see whether anyone is watching.",
        "Foucault's point is about the economy of it. The inmate who cannot verify observation must behave as if observed at all times, which means power becomes automatic and the actual guard becomes unnecessary. He who is subjected to a field of visibility, and knows it, assumes responsibility for the constraints of power and becomes the principle of his own subjection.",
        "He treats it as the diagram of a whole modality of power, not merely a building. Its logic — visibility as a trap, surveillance internalised, control achieved with minimal force — is what he claims spread through modern institutions.",
      ],
    },
    {
      heading: "The carceral archipelago",
      body: [
        "The book's final move is that discipline does not stay in the prison. The same techniques appear in schools, hospitals, asylums, factories and barracks, so that the prison resembles them and they resemble it. Is it surprising, he asks, that prisons resemble factories, schools, barracks and hospitals, which all resemble prisons?",
        "The failure of prisons to reduce crime is, on this reading, not a failure. Prisons produce a delinquent class — identifiable, surveilled, useful as informants and as a justification for policing — and that production is what the system actually does.",
        "The word Foucault reaches for is the carceral continuum: not a set of institutions but a diffuse network of normalising practices in which we are all, in different degrees, trained.",
      ],
    },
    {
      heading: "Power and knowledge",
      body: [
        "The book's most quoted general claim is that power and knowledge directly imply one another: there is no power relation without the correlative constitution of a field of knowledge, and no knowledge that does not presuppose and constitute power relations.",
        "This is not the cynical claim that knowledge is merely a weapon. Foucault's argument is that the human sciences — criminology, psychiatry, pedagogy, clinical psychology — emerged from the disciplinary apparatus, because examination and documentation are what make individuals into objects of study.",
        "The subject, in this account, is not repressed by power but produced by it. That reversal is the reason the book mattered outside penology, and it is the source of most of the disagreement about it.",
      ],
    },
  ],
  keyIdeas: [
    { term: "From the body to the soul", gloss: "Punishment shifting from destroying bodies to training souls, which Foucault reads as a change of technique rather than of morality." },
    { term: "Disciplinary power", gloss: "Continuous, invisible and productive — operating through timetables, partitioning and observation rather than through spectacular force." },
    { term: "The panopticon", gloss: "Permanent visibility with unverifiable observation, so that the watched police themselves and the watcher becomes optional." },
    { term: "Normalising judgement", gloss: "Punishment of small deviations by gradation against a norm rather than by law — the school report as much as the sentence." },
    { term: "The examination", gloss: "Observation plus judgement plus documentation, turning each person into a case and generating the human sciences." },
    { term: "Power/knowledge", gloss: "Fields of knowledge and power relations constituting each other, so that studying people and governing them are the same apparatus." },
  ],
  tensions: [
    "Historians have contested the empirical basis. The transition Foucault describes is less clean than he presents it, the sources are selective, and the chronology is compressed to fit the argument.",
    "The book has no room for reform as anything but a change of technique, which many readers find corrosive: if humanitarian improvement is always a redistribution of control, there is no ground for preferring anything.",
    "Foucault's account of power as everywhere and without a subject has been criticised — by Habermas among others — as removing the possibility of legitimate authority and of resistance in the same move.",
    "The panopticon has been overextended almost past usefulness. Bentham's design was never widely built, and treating it as the structure of modernity is a rhetorical choice rather than a historical finding.",
  ],
  connections: {
    reads: [
      { title: "On the Genealogy of Morals", author: "Friedrich Nietzsche", why: "The method's source. Foucault's genealogy of punishment is a direct application of Nietzsche's genealogy of guilt, with archives added." },
      { title: "The Origins of Totalitarianism", author: "Hannah Arendt", why: "The other great twentieth-century account of how modern institutions produce the people who inhabit them, with a very different politics." },
      { title: "Orientalism", author: "Edward Said", why: "The most influential application of power/knowledge outside Europe, and Said credits the method explicitly." },
      { title: "The Death and Life of Great American Cities", author: "Jane Jacobs", why: "An unexpected counterpoint: Jacobs's eyes on the street is voluntary mutual surveillance treated as a public good rather than as discipline." },
    ],
    threads: [
      { label: "Surveillance", note: "Digital tracking, workplace monitoring and algorithmic management have made the panopticon literal, and this book remains the standard reference for what that does to people." },
      { label: "The making of the modern individual", note: "Foucault's claim that the individual is produced by disciplinary practice rather than repressed by it is the idea that carried him into every humanities department." },
    ],
  },
  startHere:
    "The opening pages on Damiens and the timetable, then Part Three, Chapter One on docile bodies, and the panopticism chapter. That is the argument; the rest is evidence.",
  sources: [
    { label: "Discipline and Punish — Wikipedia", url: "https://en.wikipedia.org/wiki/Discipline_and_Punish" },
    { label: "Michel Foucault — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/foucault/" },
  ],
};
