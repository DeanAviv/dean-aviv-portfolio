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

## Where To Edit Text

Most content is intentionally kept in `src/data` so the site is easy to edit.

- General site text, navigation, contact, and hero lines: `src/data/site.ts`
- Featured projects: `src/data/projects.ts`
- Student projects: `src/data/studentProjects.ts`
- Code showcase examples: `src/data/codeShowcases.ts`
- Services: `src/data/services.ts`

Reusable components live in `src/components`.

## Where To Replace Images

Images are stored in:

```text
public/images
```

The current images are SVG placeholders. Replace them with real project images when ready.

Suggested sizes:
- Project images: `1600 x 1000`
- Student project images: `1200 x 900`

If you keep the same filename, no code changes are needed. If you rename an image,
update the matching `image` field in `src/data/projects.ts` or
`src/data/studentProjects.ts`.

## Add A New Project

Open `src/data/projects.ts` and add a new item:

```ts
{
  title: "Project Name",
  role: "Developer",
  description: "Short description of the project.",
  tags: ["Unity", "C#", "Tools"],
  image: "/images/project-name.svg",
}
```

Add the matching image to `public/images`.

## Add A New Student Project

Open `src/data/studentProjects.ts` and add a new item:

```ts
{
  title: "Student Game",
  studentName: "Student Name",
  description: "Short description of what they built.",
  image: "/images/student-game.svg",
  profileUrl: "https://example.com",
}
```

`profileUrl` is optional. Remove it if there is no profile link yet.

## Add A New Code Showcase

Open `src/data/codeShowcases.ts`.

The current section uses the first item in the `codeShowcases` array. To replace
the example, edit that first item. To prepare future examples like Signals,
Dependency Injection, ScriptableObjects, or Localization, add more objects with
this shape:

```ts
{
  title: "Signals",
  summary: "Short overview of what this code demonstrates.",
  tags: ["Unity", "C#", "Architecture"],
  files: [
    {
      fileName: "SignalBus.cs",
      language: "csharp",
      code: `public sealed class SignalBus { }`,
    },
  ],
  explanation: {
    title: "What this example shows",
    points: [
      "Explain the design decision.",
      "Explain how it stays maintainable.",
    ],
  },
}
```

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
