import type { Book } from "../types";

export const hiroshima: Book = {
  slug: "hiroshima",
  title: "Hiroshima",
  author: "John Hersey",
  year: 1946,
  era: "1946",
  category: "Testimony",
  hook: "Six people's morning, the day the bomb fell — reported without a single adjective of judgement.",
  readingMinutes: 8,
  coreIdea:
    "Hersey followed six survivors of the Hiroshima bombing through the morning of 6 August 1945 and the year that followed, and told their stories in flat, unemphatic prose that contains no editorial and no visible outrage. The restraint is the method: he understood that the scale of the event defeats abstraction, and that the only way to make it legible was to narrow it to six ordinary people doing ordinary things at 8.15 in the morning.",
  whyItEndures:
    "It changed how Americans understood what their government had done, and it changed journalism. The New Yorker gave over an entire issue to it — the only time in its history — and it has been called the most famous magazine article ever published. It is also the founding text of literary nonfiction, twenty years before anyone called it that.",
  sections: [
    {
      heading: "The opening sentence",
      body: [
        "Hersey's first paragraph establishes the whole method. At exactly fifteen minutes past eight in the morning, on August 6, 1945, Japanese time, at the moment when the atomic bomb flashed above Hiroshima, Miss Toshiko Sasaki, a clerk in the personnel department of the East Asia Tin Works, had just sat down at her place in the plant office and was turning her head to speak to the girl at the next desk.",
        "The bomb is subordinate to the clerk turning her head. Everything Hersey does follows from that decision — the enormous event is background, and the foreground is a person doing something recognisable.",
        "The six he follows are a personnel clerk, a widowed seamstress with three children, a German Jesuit priest, two doctors, and a Methodist minister. The choice is deliberate: two are foreign, several are professionals, and all are people an American reader in 1946 could identify with without effort.",
      ],
    },
    {
      heading: "What he leaves out",
      body: [
        "There is no mention of the decision to drop the bomb, no discussion of whether it was justified, no reference to Pearl Harbor or to Japanese conduct in the war, and no rhetoric.",
        "The word atomic barely appears. Hersey describes the flash as the noiseless flash, and the survivors' ignorance of what had happened is preserved — for days they refer to it simply as the bomb, or think a gas main exploded, or that their individual house was hit.",
        "The effect is that the reader accumulates the horror without ever being told to feel it. Descriptions that would be unbearable if underlined — the woman whose skin comes away when she is lifted, the twenty soldiers with faces melted, the eye sockets — are delivered in the same tone as the descriptions of breakfast.",
      ],
    },
    {
      heading: "The publication",
      body: [
        "Hersey went to Japan in May 1946 on assignment for The New Yorker. Editors Harold Ross and William Shawn made the unprecedented decision to devote the entire 31 August 1946 issue to the piece, dropping all other content including the cartoons.",
        "The issue sold out within hours. The ABC network read the full text aloud over four nights; the Book-of-the-Month Club sent free copies to its entire membership; newspapers reprinted it worldwide.",
        "It was banned in occupied Japan under General MacArthur's censorship until 1949. The American occupation had suppressed reporting on radiation effects, and Hersey's account was among the first widely read descriptions of what the bomb did to people.",
      ],
    },
    {
      heading: "Radiation sickness",
      body: [
        "The most important journalistic content, at the time, concerned the illness that followed. American officials had publicly denied that residual radiation was killing people; Hersey's fourth section documents survivors falling ill weeks later with nausea, hair loss, purpura and collapsing blood counts.",
        "Dr Sasaki's records and the confusion of doctors who had no framework for what they were treating give the section its authority. Hersey reports the medical detail without dramatising it, and the cumulative effect is the discovery that the bomb kept killing long after the day.",
        "This is where the book did concrete political work. It made the specific novelty of nuclear weapons — that they poison the survivors — publicly undeniable.",
      ],
    },
    {
      heading: "The fifth chapter",
      body: [
        "In 1985 Hersey returned and added a section, The Aftermath, following the same six people over forty years. It is included in all editions since.",
        "The additions are unsentimental. Miss Sasaki became a nun. Dr Sasaki built a successful practice and had a complicated later life. Reverend Tanimoto's career as an advocate for the Hiroshima Maidens took him to American television in ways that Hersey reports with some discomfort. Mrs Nakamura lived in poverty for decades.",
        "The chapter also records the emergence of the hibakusha as a social category — survivors facing discrimination in marriage and employment because of fears about radiation — which is a consequence nobody planning the bombing had considered.",
      ],
    },
  ],
  keyIdeas: [
    { term: "The six", gloss: "Narrowing an event that killed over a hundred thousand people to six individual mornings, because scale defeats comprehension and specificity does not." },
    { term: "Restraint as technique", gloss: "No adjectives of judgement, no editorial, no argument. The absence of emphasis is what makes the material land." },
    { term: "The noiseless flash", gloss: "The event described only as the survivors experienced it, without the knowledge they did not have." },
    { term: "Radiation sickness", gloss: "The delayed illness that American officials had publicly denied, documented here for a mass readership for the first time." },
    { term: "Hibakusha", gloss: "Survivors as a lasting social category, facing discrimination decades later — a consequence no plan anticipated." },
  ],
  tensions: [
    "The absence of context is a choice with consequences. There is no Japanese conduct in the war, no Nanjing, no Pearl Harbor, and readers seeking a balanced historical account will not find one here.",
    "Later reporting, notably Lesley Blume's Fallout, documented how much American censorship Hersey had to work around, and also that the piece's very restraint made it publishable — a more confrontational version might not have run.",
    "Some critics have argued the calm tone aestheticises suffering, converting an atrocity into a beautifully made object.",
    "Six survivors, chosen partly for their relatability to American readers, cannot represent a city, and Hersey does not claim they do.",
  ],
  connections: {
    reads: [
      { title: "The Making of the Atomic Bomb", author: "Richard Rhodes", why: "The other half of the story, ending where this book begins. The pairing is the complete account." },
      { title: "If This Is a Man", author: "Primo Levi", why: "The same conviction that restraint carries atrocity better than rhetoric, arrived at independently in the same year." },
      { title: "In Cold Blood", author: "Truman Capote", why: "The book usually credited with inventing the nonfiction novel, twenty years after Hersey had already done it." },
      { title: "Black Rain", author: "Masuji Ibuse", why: "The Japanese literary treatment of the same event, built from survivor diaries." },
    ],
    threads: [
      { label: "The birth of literary journalism", note: "Novelistic technique applied to reported fact starts here in practical terms, and the New Journalism of the 1960s is downstream of it." },
      { label: "Making the abstract concrete", note: "Hersey's solution to the problem of scale — six people rather than a hundred thousand — is now the standard method in reporting on catastrophe." },
    ],
  },
  startHere:
    "The whole thing is about 150 pages and should be read straight through. If you sample, read the first section, A Noiseless Flash.",
  sources: [
    { label: "Hiroshima (book) — Wikipedia", url: "https://en.wikipedia.org/wiki/Hiroshima_(book)" },
    { label: "Hiroshima — The New Yorker, 1946", url: "https://www.newyorker.com/magazine/1946/08/31/hiroshima" },
  ],
};
