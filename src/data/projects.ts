export type Project = {
  title: string;
  role: string;
  company?: string;
  description: string;
  extendedDescription: string;
  tags: string[];
  image: string;
  projectLink?: string;
  caseStudyLink?: string;
  isFeatured: boolean;
};

export const projects: Project[] = [
  {
    title: "Ouro",
    role: "Gameplay Programmer",
    company: "Zbenko Studio",
    description:
      "Unity gameplay and system development for a production project at Zbenko Studio.",
    extendedDescription:
      "Focused on gameplay implementation, supporting systems, and practical tooling for a production Unity workflow.",
    tags: ["Unity", "C#", "Gameplay Systems", "Tools"],
    image: "/images/project-ouro.svg",
    isFeatured: true,
  },
  {
    title: "Nickwatch",
    role: "Developer",
    description:
      "Cross-platform smartwatch companion experience with focus on UI, interaction flow, and maintainable Unity architecture.",
    extendedDescription:
      "A companion app project shaped around mobile-friendly interaction, clear interface states, and code that stays approachable as screens evolve.",
    tags: ["Unity", "C#", "Mobile", "UI/UX"],
    image: "/images/project-nickwatch.svg",
    isFeatured: true,
  },
  {
    title: "Android APK Installer",
    role: "Developer",
    description:
      "A Windows utility built with C# and WPF for installing APK files to Android devices through ADB.",
    extendedDescription:
      "A small developer tool designed to remove repetitive setup friction when testing Android builds on connected devices.",
    tags: ["C#", "WPF", "ADB", "Tooling"],
    image: "/images/project-apk-installer.svg",
    isFeatured: true,
  },
  {
    title: "Power Cut",
    role: "Game Developer",
    description:
      "A game jam project about surviving a power outage using charge-based mechanics and a focused 2D gameplay loop.",
    extendedDescription:
      "Built around quick iteration, readable constraints, and a compact mechanic that gives the jam concept a strong playable center.",
    tags: ["Unity", "2D", "Game Jam"],
    image: "/images/project-power-cut.svg",
    isFeatured: true,
  },
];
