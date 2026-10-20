# Resume site starter

Astro resume site for Workshop 1. Edit one file, preview locally, publish with GitHub Pages.

**In class:** open [`WORKSHOP.md`](./WORKSHOP.md) in VS Code and follow it step by step (or use the online student walkthrough your facilitator shares).

## 1. Personalize

Edit `src/data/profile.js`:

- Name, role, about, skills, links
- Education, coursework, activities, experience, projects
- Leave any list as `[]` if you do not have that content yet — empty sections stay hidden
- Replace every `example.com` placeholder with your real URLs

Optional photo: add `public/photo.jpg`, then set `photo: '/photo.jpg'`.

## 2. Preview locally

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:4321`).

## 3. Print / ATS PDF

Use **Print / ATS PDF** to open the browser print dialog. The sidebar hides and you get a clean single-column PDF.

## 4. Connect to GitHub (workshop path)

1. Create an **empty Public** repository on GitHub (**no** README, **no** .gitignore, **no** license).
2. Push this folder with the commands in [`WORKSHOP.md`](./WORKSHOP.md) (or the online guide).
3. Expect a red X in **Actions** until you enable Pages — that is normal.
4. After your pull request merges: **Settings → Pages → Source: GitHub Actions**, then **Re-run** the failed workflow if needed.

## Example project entry

Each project can link to its own page at `/projects/your-slug/` with a walkthrough and screenshots. Put images in `public/projects/`.

```js
{
  title: 'Inventory helper',
  slug: 'inventory-helper', // URL path; keep lowercase with hyphens
  summary: 'Built a tracker that reduced stock-check time for a student org.',
  overview: 'Short story of what the project is and who it helped.',
  problem: 'What was painful before this existed.',
  approach: [
    'Talked to two officers about how they counted stock.',
    'Built a spreadsheet-backed tracker in Python.',
  ],
  outcome: 'Stock checks dropped from ~45 minutes to under 15.',
  skills: ['Python', 'Spreadsheets'],
  link: 'https://github.com/YOUR-USERNAME/YOUR-REPOSITORY',
  screenshots: [
    {
      src: '/projects/inventory-helper-1.svg',
      alt: 'Tracker home screen',
      caption: 'Main view officers used during events.',
    },
  ],
}
```

Set `screenshots: []` if you do not have images yet.
