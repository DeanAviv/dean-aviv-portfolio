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
];
