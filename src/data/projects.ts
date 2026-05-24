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
  links?: ProjectLink[];
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
    context: "APIs, internal systems, and educational game development",
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
    title: "Allium",
    category: "Collaborative Project",
    description:
      "A graduation project from Bezalel Academy, where I provided development support and helped bring the core systems to life.",
    extendedDescription: [
      "My work focused on building UI systems around zooming interactions, enabling smooth transitions between different scales of the experience.",
    ],
    tags: ["Unity", "Gameplay", "Collaboration"],
    image: "/images/projects/alium.png",
    links: [
      {
        label: "Itch.io page",
        href: "https://noalev.itch.io/allium",
      },
      {
        label: "Creator: Noa Lev",
        href: "https://noalev.itch.io/",
      },
    ],
  },
  {
    title: "Seeker of Light",
    category: "Game Jam / Solo Project",
    description:
      "Seeker of Light is a hand-drawn atmospheric maze adventure created for the GameDev.tv Game Jam 2026.",
    extendedDescription: [
      "The player guides the Nomad through ancient maze levels inside a fading spire, following the light, avoiding traps, and trying to reignite the mother flame.",
      "A solo Unity game jam project with hand-drawn visuals created in Procreate and a focus on atmospheric storytelling.",
    ],
    tags: [
      "Unity",
      "C#",
      "Game Jam",
      "2D",
      "Puzzle",
      "Atmospheric",
      "Hand-drawn",
    ],
    image: "/images/projects/SeekerOfLight.png",
    links: [
      {
        label: "Play on itch.io",
        href: "https://deanaviv.itch.io/seeker-of-light",
      },
    ],
  },
  {
    title: "Coworker",
    category: "Solo Experiment",
    description:
      "An ongoing project that started as an experimental systems prototype and evolved into a full game in development.",
    extendedDescription: [
      "Currently expanding into a hybrid Roguelike, Arcade, and Clicker experience, with a strong focus on systems design and progression.",
    ],
    tags: ["In development", "Unity", "Systems", "Solo Project", "Game Design"],
    image: "/images/projects/coworker.png",
  },
  {
    title: "Power Cut",
    category: "Game Jam / Solo Project",
    description:
      "A game jam project built over a single weekend, where I handled the full development - design, visuals, and code.",
    extendedDescription: [
      "PowerCut is a hand-drawn experience focused on atmosphere and moment-to-moment gameplay, created under tight constraints and rapid iteration.",
    ],
    tags: ["Unity", "2D", "Game Jam", "Solo Project", "Game Design"],
    image: "/images/projects/powercut.jpeg",
    links: [
      {
        label: "Itch.io page",
        href: "https://deanaviv.itch.io/power-cut",
      },
    ],
  },
];
