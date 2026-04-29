export type StudentProject = {
  title: string;
  studentName: string;
  description: string;
  image: string;
  profileUrl?: string;
  linkedInUrl?: string;
  githubUrl?: string;
  projectUrl?: string;
  note?: string;
};

export const studentProjects: StudentProject[] = [
  {
    title: "Neon Drift",
    studentName: "Maya Cohen",
    description: "Arcade driving prototype focused on momentum and readable level flow.",
    image: "/images/student-neon-drift.svg",
    profileUrl: "https://example.com",
    linkedInUrl: "https://www.linkedin.com/",
    projectUrl: "https://example.com",
    note: "A strong example of tuning feel before adding more features.",
  },
  {
    title: "Rootbound",
    studentName: "Noam Levi",
    description: "Puzzle platformer built around growing paths and environmental switches.",
    image: "/images/student-rootbound.svg",
    githubUrl: "https://github.com/",
    projectUrl: "https://example.com",
    note: "Smart scope, clear mechanic, and a nice sense of progression.",
  },
  {
    title: "Moon Courier",
    studentName: "Lior Ben-David",
    description: "Small delivery game with gravity shifts, timing challenges, and charm.",
    image: "/images/student-moon-courier.svg",
    linkedInUrl: "https://www.linkedin.com/",
    githubUrl: "https://github.com/",
    note: "Proof that a compact idea can still have personality.",
  },
  {
    title: "Signal Grove",
    studentName: "Dana Mor",
    description: "Puzzle adventure prototype built around switches, timing, and readable cause-and-effect.",
    image: "/images/student-neon-drift.svg",
    projectUrl: "https://example.com",
    note: "A good example of turning system logic into player-facing clarity.",
  },
  {
    title: "Tiny Factory",
    studentName: "Amit Shalev",
    description: "Resource-management prototype with simple production chains and compact UI feedback.",
    image: "/images/student-rootbound.svg",
    githubUrl: "https://github.com/",
    note: "Focused scope, clean iteration, and a strong final presentation.",
  },
  {
    title: "Skyline Runner",
    studentName: "Roni Bar",
    description: "Fast 2D runner project focused on level rhythm, camera feel, and forgiving controls.",
    image: "/images/student-moon-courier.svg",
    linkedInUrl: "https://www.linkedin.com/",
  },
  {
    title: "Echo Lab",
    studentName: "Yuval Katz",
    description: "Small exploration game using sound cues, environmental triggers, and careful pacing.",
    image: "/images/student-rootbound.svg",
    projectUrl: "https://example.com",
    note: "A project that made debugging part of the learning process.",
  },
  {
    title: "Garden Guard",
    studentName: "Tamar Azulay",
    description: "Wave-defense prototype with upgrade choices, enemy patterns, and clear player feedback.",
    image: "/images/student-neon-drift.svg",
    githubUrl: "https://github.com/",
    linkedInUrl: "https://www.linkedin.com/",
  },
];
