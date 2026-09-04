import type { Book } from "../types";

export const theEmperorOfAllMaladies: Book = {
  slug: "the-emperor-of-all-maladies",
  title: "The Emperor of All Maladies",
  author: "Siddhartha Mukherjee",
  year: 2010,
  era: "2010",
  category: "Science",
  hook: "A biography of cancer, written by an oncologist during his fellowship, covering four thousand years of trying to kill it.",
  readingMinutes: 9,
  coreIdea:
    "Mukherjee treats cancer as a subject with a life story — described in Egyptian papyrus, named by Hippocrates, cut at by nineteenth-century surgeons, poisoned by twentieth-century chemists, and finally understood as a disease of our own genes. The organising insight is that cancer is not an invader but a distortion of normal cellular processes: it is us, our own growth machinery running without brakes, which is precisely why it is so hard to attack.",
  whyItEndures:
    "It won the Pulitzer and is the model for how to write about medicine — the science is rigorous, the history is properly researched, and the patients are people rather than illustrations. Mukherjee wrote it while treating patients, and the book keeps returning to individual cases in a way that prevents the history from becoming abstract.",
  sections: [
    {
      heading: "Radical surgery",
      body: [
        "The first sustained assault was surgical, and its figure is William Halsted at Johns Hopkins, who developed the radical mastectomy in the 1890s on a simple theory: if cancer spreads outward from a centre, cutting wider must work better.",
        "Halsted's operation removed the breast, the underlying chest muscles and the lymph nodes, leaving women disfigured and often disabled. His successors went further — the superradical, removing collarbone and ribs.",
        "The theory was wrong. Mukherjee traces the decades it took to establish that cancer either had already spread microscopically or had not, and that cutting more did not change survival. Bernard Fisher's randomised trials in the 1970s finally proved it, against the opposition of surgeons whose careers rested on the operation.",
      ],
    },
    {
      heading: "Poison",
      body: [
        "Chemotherapy's origin is grim and accidental: mustard gas from the First World War, and the observation that exposed soldiers had depleted white cell counts. If a poison could kill white blood cells, it might kill leukaemia.",
        "Sidney Farber's work in Boston in 1947 is the book's hinge. Working with children dying of acute lymphoblastic leukaemia, he tried folic acid antagonists and produced the first temporary remissions — children who came back from death for a few months and then died anyway.",
        "The chapters on the leukaemia wards of the 1950s and 1960s are the hardest in the book. Emil Frei and Emil Freireich's combination chemotherapy pushed doses to the edge of lethality on the reasoning that partial treatment guaranteed relapse, and their colleagues considered it close to child abuse. It produced the first cures.",
      ],
    },
    {
      heading: "The war on cancer",
      body: [
        "Mukherjee's account of the political campaign is a study in advocacy. Mary Lasker, a socialite and lobbyist, organised a decades-long push that culminated in Nixon's National Cancer Act of 1971 and the declaration of a war on cancer.",
        "The expectation was a cure by the bicentennial in 1976. What followed was two decades of largely flat mortality, because the biology was not understood — the war was declared before anyone knew what they were fighting.",
        "Alongside this runs the tobacco story: the epidemiology of Doll and Hill, the surgeon general's report of 1964, and the industry's forty-year campaign of manufactured doubt. Mukherjee is clear that the single largest reduction in cancer mortality in the twentieth century came from people stopping smoking, not from treatment.",
      ],
    },
    {
      heading: "Oncogenes",
      body: [
        "The turn comes when cancer is understood genetically. Peyton Rous had shown in 1911 that a virus could cause tumours in chickens; sixty years later Bishop and Varmus demonstrated that the viral cancer gene was a corrupted copy of a normal cellular gene.",
        "That result reframes everything. Cancer is not something foreign — it is our own growth-regulating genes, mutated. Oncogenes are accelerators stuck on; tumour suppressor genes are brakes that have failed.",
        "The therapeutic payoff arrives with Gleevec in the late 1990s, a drug designed to block a specific mutant protein in chronic myeloid leukaemia, converting a fatal disease into a manageable one. Mukherjee treats it as the proof of principle for targeted therapy, and is careful about how much it generalises.",
      ],
    },
    {
      heading: "Carla",
      body: [
        "Threaded through the history is the case of Carla Reed, a kindergarten teacher diagnosed with acute lymphoblastic leukaemia in 2004, whom Mukherjee treated during his fellowship.",
        "Her treatment is described across the book in fragments — the induction, the maintenance, the exhaustion, the years of uncertainty — and it does the work that no amount of history can: it keeps the reader in a room with a person rather than in a narrative of progress.",
        "Mukherjee's own position is stated at the end and is not triumphal. Cancer is written into our genome and into our longevity; we will not be rid of it. The realistic aim is to keep making it survivable, and the book's last pages are about a patient, not a cure.",
      ],
    },
  ],
  keyIdeas: [
    { term: "Cancer as us", gloss: "Not an invader but our own growth machinery with the brakes off, which is why it is so difficult to target selectively." },
    { term: "The radical hypothesis", gloss: "Halsted's belief that cutting wider must cure — wrong, enormously influential, and disproved only by randomised trials seventy years later." },
    { term: "Combination chemotherapy", gloss: "Multiple agents at near-lethal doses, on the reasoning that partial treatment guarantees resistance. Brutal, and the origin of actual cures." },
    { term: "Oncogenes and tumour suppressors", gloss: "Accelerators stuck on and brakes that have failed — the genetic model that finally explained the disease." },
    { term: "Targeted therapy", gloss: "Gleevec as proof that a drug designed against a specific mutation can transform a fatal cancer, and the open question of how far it generalises." },
    { term: "Prevention over cure", gloss: "The largest twentieth-century reduction in cancer deaths came from tobacco control, not from treatment." },
  ],
  tensions: [
    "The narrative arc bends toward progress, and critics have argued that the emphasis on molecular breakthroughs understates how modest survival gains have been for the most common solid tumours.",
    "The book gives comparatively little space to palliative care, to cost, and to the question of overtreatment and screening harms, all of which have become central to oncology since publication.",
    "It is written from an elite American academic-medicine vantage, and global cancer care — where most cases and most deaths occur — is largely absent.",
    "Mukherjee's later book on genetics drew criticism from biologists for overstating the role of epigenetics, which is a reason to read his synthesis with the same care he applies to others'.",
  ],
  connections: {
    reads: [
      { title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", why: "The cells that made much of this research possible, and the woman whose consent was never sought." },
      { title: "Silent Spring", author: "Rachel Carson", why: "The other great book about chemicals and cancer, written while its author was dying of the disease." },
      { title: "The Double Helix", author: "James Watson", why: "The discovery that made the genetic account of cancer possible, told by one of the people who made it." },
      { title: "Being Mortal", author: "Atul Gawande", why: "The question this book mostly sets aside: what medicine should do when treatment stops being the right answer." },
    ],
    threads: [
      { label: "Medical history as narrative", note: "The book established a template — rigorous science, real patients, honest about failure — that most serious medical writing since has followed." },
      { label: "Manufactured doubt", note: "The tobacco chapters are one of the clearest accounts of an industry deliberately generating scientific uncertainty, and the template was reused for climate." },
    ],
  },
  startHere:
    "Part One for Farber and the leukaemia wards, and Part Five for oncogenes and Gleevec. Carla's story runs throughout and is worth following as its own thread.",
  sources: [
    { label: "The Emperor of All Maladies — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Emperor_of_All_Maladies" },
    { label: "Siddhartha Mukherjee — Columbia University", url: "https://www.cancer.columbia.edu/profile/siddhartha-mukherjee-md" },
  ],
};
