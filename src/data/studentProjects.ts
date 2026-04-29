export type StudentProject = {
  title: string;
  studentName: string;
  description: string;
  image: string;
  profileUrl?: string;
};

export const studentProjects: StudentProject[] = [
  {
    title: "Neon Drift",
    studentName: "Maya Cohen",
    description: "Arcade driving prototype focused on momentum and readable level flow.",
    image: "/images/student-neon-drift.svg",
    profileUrl: "https://example.com",
  },
  {
    title: "Rootbound",
    studentName: "Noam Levi",
    description: "Puzzle platformer built around growing paths and environmental switches.",
    image: "/images/student-rootbound.svg",
  },
  {
    title: "Moon Courier",
    studentName: "Lior Ben-David",
    description: "Small delivery game with gravity shifts, timing challenges, and charm.",
    image: "/images/student-moon-courier.svg",
  },
];
