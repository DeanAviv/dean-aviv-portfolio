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

Open `src/data/projects.ts`. Main experience cards live in `mainProjects`;
smaller supporting work lives in `additionalProjects` and appears in the
horizontal carousel.

Main project shape:

```ts
{
  title: "Project Name",
  role: "Gameplay Programmer",
  context: "Client, studio, or project type",
  description: "Short card description.",
  extendedDescription: [
    "A little more context about the work and decisions.",
    "Add another paragraph if the project needs more explanation.",
  ],
  tags: ["Unity", "C#", "Gameplay Systems"],
  image: "/images/project-name.svg",
  links: [
    {
      label: "Official website ↗",
      href: "https://example.com/",
    },
  ],
}
```

Project links open in a new tab and should use labels, not raw URLs.

Additional project shape:

```ts
{
  title: "Small Project",
  category: "Game Jam / Solo Project",
  description: "Short card description.",
  extendedDescription: [
    "A little more detail about what the project explores.",
  ],
  tags: ["Unity", "Gameplay"],
  image: "/images/project-small.svg",
}
```

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
  title: "Sequence Manager",
  description: "Short overview of what this system demonstrates.",
  keyIdeas: [
    "Clean sequencing logic",
    "Reusable system design",
  ],
  technologies: ["C#", "Unity"],
  codeSnippet: `public void Example()
{
    // Keep snippets short and teachable.
}`,
  whyThisMatters: "Explain why this pattern helps a real project.",
  githubUrl: "https://github.com/DeanAviv/example",
}
```

Keep code snippets short, focused, and easy to explain. The code showcase
component renders each object as a curated system card with a GitHub link.

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
