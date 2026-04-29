export type Service = {
  title: string;
  description: string;
  suitableFor: string;
  bullets: string[];
  callToAction: string;
};

export const services: Service[] = [
  {
    title: "1-on-1 Unity Mentoring",
    description:
      "Personal guidance for developers who want to understand Unity, C#, and gameplay systems more deeply.",
    suitableFor: "Students, junior developers, and self-taught Unity creators.",
    bullets: ["Weekly sessions", "Code walkthroughs", "Practice plans", "Clear next steps"],
    callToAction: "Book mentoring",
  },
  {
    title: "Project Guidance",
    description:
      "A practical outside perspective when a project has momentum but needs structure, scope, or direction.",
    suitableFor: "Solo developers, small teams, and student final projects.",
    bullets: ["Scope decisions", "Feature planning", "Milestones", "Unity workflow advice"],
    callToAction: "Plan the project",
  },
  {
    title: "Debug Sessions",
    description:
      "Focused sessions for tracking down broken behavior, confusing errors, or systems that stopped making sense.",
    suitableFor: "Developers stuck on a specific Unity or C# problem.",
    bullets: ["Bug isolation", "Runtime checks", "Inspector setup", "Fix explanations"],
    callToAction: "Unblock a bug",
  },
  {
    title: "Code / Architecture Review",
    description:
      "A readable review of your Unity codebase with attention to coupling, responsibilities, and future changes.",
    suitableFor: "Projects that work, but feel harder to change than they should.",
    bullets: ["Class responsibilities", "System boundaries", "Refactor suggestions", "Maintainability notes"],
    callToAction: "Review the code",
  },
  {
    title: "Small Group Workshops",
    description:
      "Hands-on Unity learning for groups that need practical systems, not abstract slides.",
    suitableFor: "Schools, bootcamps, teams, and learning groups.",
    bullets: ["Unity fundamentals", "Gameplay systems", "ScriptableObjects", "Tooling workflows"],
    callToAction: "Run a workshop",
  },
  {
    title: "Portfolio & Final Project Support",
    description:
      "Help shaping a student or junior developer project into something presentable, explainable, and finished.",
    suitableFor: "Students preparing final projects, applications, or portfolio pieces.",
    bullets: ["Project polish", "Feature prioritization", "Presentation flow", "Code cleanup"],
    callToAction: "Polish the project",
  },
];
