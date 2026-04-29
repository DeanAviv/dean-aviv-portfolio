export type Service = {
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    title: "Unity Gameplay Development",
    description:
      "Gameplay systems, prototypes, production features, technical polish, and maintainable architecture.",
    items: ["Core loops", "UI flows", "Tools", "Performance passes"],
  },
  {
    title: "Technical Instruction",
    description:
      "Practical Unity and C# training for students, junior developers, and teams.",
    items: ["Curriculum", "Mentoring", "Code reviews", "Workshops"],
  },
  {
    title: "Project Consulting",
    description:
      "Focused help with scope, systems design, refactoring, and shipping decisions.",
    items: ["Architecture", "Debugging", "Production planning", "Documentation"],
  },
];
