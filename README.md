# Dean Aviv Portfolio

A local portfolio website for Dean Aviv, a Unity Developer & Instructor.

Built with:
- Next.js
- TypeScript
- React components
- Tailwind CSS

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL printed in the terminal, usually:

```text
http://localhost:3000
```

## Where To Edit Site Text

Most important content lives in `src/data` so the site is easy to edit without
digging through components.

- General site text, logo config, navigation, hero, section headers, and contact: `src/data/site.ts`
- Featured projects: `src/data/projects.ts`
- Student projects and student links: `src/data/studentProjects.ts`
- Code showcase examples: `src/data/codeShowcases.ts`
- Services: `src/data/services.ts`

Reusable presentation components live in `src/components`.

## Replace The Logo

Logo rendering is centralized in `src/components/LogoMark.tsx`, and the editable
logo settings are in `src/data/site.ts`.

Logo files are located in `/public/images/brand`. Replace `logo-da.svg` to
update the site logo.

1. Add the logo file to `public/images`, for example:

```text
public/images/brand/logo-da.svg
```

2. Update `site.logo.src`:

```ts
logo: {
  src: "/images/brand/logo-da.svg",
  pngFallback: "/images/brand/logo-da.png",
  alt: "Dean Aviv logo",
  fallbackText: "DA",
}
```

If `src` is empty, the header uses the fallback `DA` mark.

## Replace Project Images

Images are stored in:

```text
public/images
```

The current images are SVG placeholders. Replace them with real project images
when ready.

Suggested sizes:
- Project images: `1600 x 1000`
- Student project images: `1200 x 900`

If you keep the same filename, no code changes are needed. If you rename an
image, update the matching `image` field in `src/data/projects.ts` or
`src/data/studentProjects.ts`.

## Add A New Project

Open `src/data/projects.ts` and add a new item:

```ts
{
  title: "Project Name",
  role: "Gameplay Programmer",
  company: "Client or Studio Name",
  description: "Short card description.",
  extendedDescription: "A little more context about the work and decisions.",
  tags: ["Unity", "C#", "Gameplay Systems"],
  image: "/images/project-name.svg",
  projectLink: "https://example.com",
  caseStudyLink: "/case-studies/project-name",
  isFeatured: true,
}
```

`company`, `projectLink`, and `caseStudyLink` are optional. If a link is missing,
its button is hidden.

## Add Student Links

Open `src/data/studentProjects.ts`. Each student card supports these optional
links:

```ts
{
  title: "Student Game",
  studentName: "Student Name",
  description: "Short description of what they built.",
  image: "/images/student-game.svg",
  profileUrl: "https://example.com",
  linkedInUrl: "https://www.linkedin.com/",
  githubUrl: "https://github.com/",
  projectUrl: "https://example.com/play",
  note: "Optional short note about what makes the project stand out.",
}
```

Missing links are automatically hidden.

## Add A Service

Open `src/data/services.ts` and add:

```ts
{
  title: "Debug Sessions",
  description: "Focused help with a specific Unity or C# problem.",
  suitableFor: "Developers stuck on a bug or confusing system.",
  bullets: ["Bug isolation", "Runtime checks", "Fix explanations"],
  callToAction: "Unblock a bug",
}
```

Keep service copy practical and direct. The site is meant to feel helpful, not
salesy.

## Add A Code Showcase

Open `src/data/codeShowcases.ts` and add a new object:

```ts
{
  id: "signals",
  title: "Zenject Signals",
  summary: "Short overview of what this code demonstrates.",
  technologies: ["Unity", "C#", "Zenject"],
  files: [
    {
      fileName: "SignalExample.cs",
      language: "csharp",
      code: `public readonly struct SignalExample { }`,
    },
  ],
  explanation: {
    title: "What Dean would walk through",
    points: [
      "Explain the design decision.",
      "Explain how it stays maintainable.",
    ],
  },
  whyThisMatters: "Explain why this pattern helps a real project.",
}
```

The code showcase component automatically creates the showcase tabs and file
tabs from this data.

## Deploy Later To Vercel

When the site is ready:

1. Push the project to GitHub.
2. Create a new Vercel project and import the repository.
3. Keep the default Next.js build settings.
4. Deploy.

The default commands are:

```text
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```
