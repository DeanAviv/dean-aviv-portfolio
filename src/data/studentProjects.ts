export type StudentCredit = {
  name: string;
  linkedInUrl: string;
};

export type StudentProject = {
  title: string;
  students: StudentCredit[];
  videoUrl: string;
  embedUrl: string;
  projectUrl?: string;
};

export const studentProjects: StudentProject[] = [
  {
    title: "Cheese Pull",
    students: [
      {
        name: "Illay Shlomo",
        linkedInUrl: "http://linkedin.com/in/ilay-shlomo/",
      },
    ],
    videoUrl: "https://www.youtube.com/watch?v=Bx21us-Kr-M",
    embedUrl: "https://www.youtube.com/embed/Bx21us-Kr-M",
  },
  {
    title: "SOL 7 Supernova Mk",
    students: [
      {
        name: "Eitan Kalihman",
        linkedInUrl: "https://www.linkedin.com/in/eytankal/",
      },
    ],
    videoUrl: "https://www.youtube.com/watch?v=TjLGms4Vl-g",
    embedUrl: "https://www.youtube.com/embed/TjLGms4Vl-g",
    projectUrl: "https://skip-the-stone.itch.io/sol-7",
  },
  {
    title: "Dungeon Purge",
    students: [
      {
        name: "Ron Star (Programmer)",
        linkedInUrl: "https://www.linkedin.com/in/ron-star/",
      },
      {
        name: "Or Benbenisti (Game design, Programmer)",
        linkedInUrl: "https://www.linkedin.com/in/or-benbenisti-b1670832b/",
      },
      {
        name: "Aleksandra (Sasha) Saatchi (Art, UI/ UX)",
        linkedInUrl: "https://www.linkedin.com/in/aleksandra-saatchi-309109287/",
      },
    ],
    videoUrl: "https://www.youtube.com/watch?v=1UtOGtIv_m0",
    embedUrl: "https://www.youtube.com/embed/1UtOGtIv_m0",
    projectUrl: "https://ronstar0.itch.io/dungeon-purge",
  },
];
