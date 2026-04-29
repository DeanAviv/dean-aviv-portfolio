export type Project = {
  title: string;
  role: string;
  description: string;
  tags: string[];
  image: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Ouro",
    role: "Gameplay Programmer",
    description: "Production Unity project developed at Zbenko.",
    tags: ["Unity", "C#", "Systems", "Tools"],
    image: "/images/project-ouro.svg",
  },
  {
    title: "Nickwatch",
    role: "Developer",
    description: "Cross-platform smartwatch companion app.",
    tags: ["Unity", "C#", "Mobile", "UI/UX"],
    image: "/images/project-nickwatch.svg",
  },
  {
    title: "Android APK Installer",
    role: "Developer",
    description: "Windows tool for installing APK files to Android devices.",
    tags: ["C#", "WPF", "ADB", "Tool"],
    image: "/images/project-apk-installer.svg",
  },
  {
    title: "Power Cut",
    role: "Game Developer",
    description: "2D platformer created for a game jam.",
    tags: ["Unity", "2D", "Platformer"],
    image: "/images/project-power-cut.svg",
  },
];
