# Resume site starter

Astro resume site for Workshop 1. Edit one file, preview locally, publish with GitHub Pages.

No prior web experience required. Follow the workshop student guide, or use this README.

## 1. Personalize

Edit `src/data/profile.js`:

- Name, role, about, skills, links
- Education, coursework, activities, experience, projects
- Leave any list as `[]` if you do not have that content yet — empty sections stay hidden

Optional photo: add `public/photo.jpg`, then set `photo: '/photo.jpg'`.

## 2. Preview locally

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:4321`).

## 3. Print / ATS PDF

Use **Print / ATS PDF** to open the browser print dialog. The sidebar hides and you get a clean single-column PDF.

## 4. Publish

Push to a public GitHub repository and enable **Settings → Pages → Source: GitHub Actions**.

## Example project entry

Each project can link to its own page at `/projects/your-slug/` with a walkthrough and screenshots. Put images in `public/projects/`.

```js
{
  title: 'Inventory helper',
  slug: 'inventory-helper', // optional — derived from title if omitted
  summary: 'Built a tracker that reduced stock-check time for a student org.',
  overview: 'Short story of what the project is and who it helped.',
  problem: 'What was painful before this existed.',
  approach: [
    'Talked to two officers about how they counted stock.',
    'Built a spreadsheet-backed tracker in Python.',
  ],
  outcome: 'Stock checks dropped from ~45 minutes to under 15.',
  skills: ['Python', 'Spreadsheets'],
  link: 'https://github.com/your-user/your-repo',
  screenshots: [
    {
      src: '/projects/inventory-helper-1.svg',
      alt: 'Tracker home screen',
      caption: 'Main view officers used during events.',
    },
  ],
}
```
