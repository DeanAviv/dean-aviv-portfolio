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
    context: "Smartwatch for kids",
    description:
      "A smartwatch experience for kids, built around games, interactive activities, and sensor-based play.",
    extendedDescription: [
      "Nickwatch was one of my biggest learning experiences as a developer. I started as a junior developer and grew into a team lead, eventually taking ownership of a full application with multiple interactive experiences.",
      "The project included games and activities designed specifically for a kids’ smartwatch, using sensors, external tools, hardware constraints, and playful interaction design.",
      "It taught me much more than Unity alone: product thinking, UX constraints, teamwork, leadership, debugging under real limitations, and how to build complete experiences for an unusual platform.",
    ],
    tags: [
      "Unity",
      "C#",
      "Smartwatch",
      "Kids Tech",
      "Sensors",
      "UX",
      "Mini Games",
      "Team Leadership",
    ],
    image: "/images/projects/nickwatch.png",
    links: [
      {
        label: "Product website ↗",
        href: "https://nickwatch.co.il/",
      },
    ],
  },
  {
    title: "Work at Zbenko Studio",
    role: "Unity Developer",
    context: "Ouro, Atlas-Kazai, APIs, and educational game systems",
    description:
      "Technical work across educational game products, classroom experiences, Unity systems, APIs, and internal tools.",
    extendedDescription: [
      "At Zbenko Studio, I work across the technical side of our educational game products. This includes Unity development, adding stages, fixing bugs, building features, updating UI, improving performance, researching tools, and supporting production.",
      "I also work with backend systems written in PHP and SQL, building APIs and database queries that support game logic, localization, and data-driven experiences.",
      "A major part of my work includes in-house systems such as Region-Locale support, database-driven multiplayer experiences, and API-based level logic.",
      "I also proposed and developed Atlas-Kazai, an interactive presentation and classroom-control product where the teacher controls the experience through one Unity app, while the student-side Ouro app transforms into a live game-like learning experience inspired by classroom quiz systems.",
    ],
    tags: [
      "Unity",
      "C#",
      "PHP",
      "SQL",
      "APIs",
      "EdTech",
      "Game Systems",
      "Localization",
      "Multiplayer",
      "Production",
    ],
    image: "/images/projects/zbenko.png",
    links: [
      {
        label: "Company website ↗",
        href: "https://zbenko.com/",
      },
    ],
  },
  {
    title: "Teaching at Mentor",
    role: "Unity Instructor",
    context: "Game development course",
    description:
      "Teaching the full Unity game development track, from C# fundamentals to gameplay systems and design patterns.",
    extendedDescription: [
      "I’ve been teaching game development at Mentor for 4+ years, building and delivering lessons, presentations, exercises, and hands-on project guidance.",
      "I teach Unity and C# from the foundations through more advanced topics like gameplay systems, ScriptableObjects, architecture, and design patterns.",
      "My focus is helping students understand how systems actually work, not just which buttons to press. Over time, I’ve guided students from their first scripts to complete playable projects, with some continuing into the industry.",
    ],
    tags: [
      "Teaching",
      "Unity",
      "C#",
      "Game Development Course",
      "Design Patterns",
      "Mentoring",
      "Curriculum",
      "Student Projects",
    ],
    image: "/images/projects/mentor.png",
    links: [
      {
        label: "College website ↗",
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
    image: "/images/projects/alium.png",
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
    image: "/images/projects/coworker.png",
  },
];
