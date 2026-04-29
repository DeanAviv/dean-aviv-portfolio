export type ProjectLink = {
  label: string;
  href: string;
};

export type MainProject = {
  title: string;
  role: string;
  context: string;
  description: string;
  extendedDescription: string[];
  tags: string[];
  image: string;
  links: ProjectLink[];
};

export type AdditionalProject = {
  title: string;
  category: string;
  description: string;
  extendedDescription: string[];
  tags: string[];
  image: string;
};

export const mainProjects: MainProject[] = [
  {
    title: "Nickwatch",
    role: "Developer → Team Lead",
    context: "Cross-platform smartwatch product",
    description:
      "Cross-platform smartwatch experience built around interactive sensor-based gameplay.",
    extendedDescription: [
      "I started on this project as a junior developer and grew into a team lead, taking ownership of a full application built around multiple interactive experiences.",
      "The project included 5 different sensor-based interactions, external tool integrations, and several mini-games designed specifically for smartwatch constraints.",
      "Beyond Unity, I worked with hardware limitations, UX challenges, and cross-platform behavior, gaining hands-on experience in building complete products under real-world constraints.",
    ],
    tags: ["Unity", "Mobile", "Sensors", "UX", "Systems", "Team Leadership"],
    image: "/images/project-nickwatch.svg",
    links: [
      {
        label: "Official website ↗",
        href: "https://nickwatch.co.il/",
      },
    ],
  },
  {
    title: "Zbenko Studio / Ouro + Atlas-Kazai",
    role: "Unity Developer",
    context: "Production educational game systems and internal tools",
    description:
      "Production educational game systems, interactive classroom experiences, APIs, and internal tools.",
    extendedDescription: [
      "At Zbenko Studio, I’m responsible for the technical side of the Ouro platform — including Unity development, gameplay systems, UI updates, new features, bug fixing, optimization, and ongoing production support.",
      "Beyond Unity, I also work with backend systems written in PHP, building APIs and writing SQL queries that support game logic, localization, and data-driven features.",
      "I designed and implemented internal systems such as a Region-Locale system, database-driven multiplayer experiences, and API-based level logic.",
      "I also initiated and built Atlas-Kazai, an interactive presentation system where teachers control real-time classroom gameplay, transforming the student experience into a live, game-driven learning environment.",
      "These systems are now in production.",
    ],
    tags: ["Unity", "C#", "PHP", "SQL", "Systems Design", "APIs", "EdTech"],
    image: "/images/project-ouro.svg",
    links: [
      {
        label: "Zbenko Studio ↗",
        href: "https://zbenko.com/",
      },
    ],
  },
  {
    title: "Teaching at Mentor",
    role: "Unity Instructor",
    context: "Game development education",
    description:
      "4+ years teaching Unity, C#, gameplay systems, and project-based game development.",
    extendedDescription: [
      "I’ve built and delivered dozens of lessons, presentations, exercises, and student-facing learning materials focused on Unity, C#, and game development.",
      "My teaching focuses on helping students understand how systems actually work — not just how to use tools.",
      "Over the years, I’ve guided students from zero experience to complete playable projects, with some continuing into the industry.",
      "This work strongly influences how I approach development: clear structure, explainable systems, and practical thinking.",
    ],
    tags: ["Teaching", "Unity", "C#", "Mentoring", "Curriculum", "Systems Thinking"],
    image: "/images/project-mentor.svg",
    links: [
      {
        label: "Mentor College ↗",
        href: "https://www.mentor.co.il/",
      },
    ],
  },
];

export const additionalProjects: AdditionalProject[] = [
  {
    title: "Alium",
    category: "Collaborative Project",
    description:
      "Collaborative student project I contributed to during development.",
    extendedDescription: [
      "I was involved in parts of the gameplay and technical implementation, working alongside a team to help bring the project to life.",
      "This project reflects collaboration, iteration, and supporting a larger creative vision.",
    ],
    tags: ["Unity", "Gameplay", "Collaboration"],
    image: "/images/project-alium.svg",
  },
  {
    title: "Android APK Installer",
    category: "Tooling",
    description:
      "A Windows utility for installing APK files to Android devices through ADB.",
    extendedDescription: [
      "A practical tool built to simplify Android APK installation workflows. The project reflects my interest in developer tools, workflow improvement, and C# desktop development.",
    ],
    tags: ["C#", "WPF", "ADB", "Tooling"],
    image: "/images/project-apk-installer.svg",
  },
  {
    title: "Power Cut",
    category: "Game Jam / Solo Project",
    description:
      "A game jam project about surviving a power outage using charge-based mechanics.",
    extendedDescription: [
      "Designed and built as a solo project, with full ownership over game design and implementation.",
      "The project explores resource management, tension, and a focused 2D gameplay loop.",
    ],
    tags: ["Unity", "2D", "Game Jam", "Solo Project", "Game Design"],
    image: "/images/project-power-cut.svg",
  },
  {
    title: "Coworker",
    category: "Solo Experiment",
    description:
      "An experimental solo project exploring idle and active gameplay loops alongside the user’s workflow.",
    extendedDescription: [
      "Designed as a hybrid between idle, clicker, and system-driven gameplay, focusing on interaction patterns and player engagement over time.",
      "This project reflects experimentation with systems, feedback loops, and player behavior.",
    ],
    tags: ["Unity", "Systems", "Solo Project", "Game Design"],
    image: "/images/project-coworker.svg",
  },
];
