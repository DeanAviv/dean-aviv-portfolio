export type StudentCredit = {
  name: string;
  linkedInUrl: string;
};

export type StudentProject = {
  title: string;
  description: string;
  students: StudentCredit[];
  videoUrl: string;
  embedUrl: string;
  steamUrl?: string;
  projectUrl?: string;
};

export const studentProjects: StudentProject[] = [
  {
    title: "Cheese Pull",
    description:
      "A solo-developed multiplayer graduation project, built through extensive independent research, focused on networking, interaction, and responsive game feel. Wishlist on Steam now!",
    students: [
      {
        name: "Illay Shlomo",
        linkedInUrl: "http://linkedin.com/in/ilay-shlomo/",
      },
    ],
    videoUrl: "https://www.youtube.com/watch?v=zT-74QjsivQ",
    embedUrl: "https://www.youtube.com/embed/zT-74QjsivQ",
    steamUrl: "https://store.steampowered.com/app/4525440/Cheese_Pull/",
  },
  {
    title: "SOL 7 Supernova Mk",
    description:
      "A solo-developed project built through independent research, exploring physics-based behaviors, movement systems, and reactive gameplay.",
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
    description:
      "A team-based graduation project developed over several months, combining Git workflows, asset management, and strategy gameplay with gacha-inspired systems.",
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
  {
    title: "The Inspector",
    description:
      "A solo-developed semester final project created for a horror games theme. Yagel built an atmospheric experience inspired by Exit 8, drawing from both the game and the movie.",
    students: [
      {
        name: "Yagel Ravid",
        linkedInUrl: "https://www.linkedin.com/in/yagel-ravid/",
      },
    ],
    videoUrl: "https://www.youtube.com/watch?v=0aUxG23t9Pc",
    embedUrl: "https://www.youtube.com/embed/0aUxG23t9Pc",
    steamUrl: "https://store.steampowered.com/app/4767740/The_Inspector/",
    projectUrl: "https://normal-blando.itch.io/the-inspector",
  },
];
