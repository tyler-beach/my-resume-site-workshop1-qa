# Workshop 1 journey — follow along in VS Code

Open this file beside your editor (**View → Editor Layout → Two Columns**, or click the file in Explorer). Check boxes as you go. Online screenshots and copy buttons live in the class walkthrough if you need them.

**Goal:** run this site locally → personalize it → review one change with a pull request → publish on GitHub Pages.

---

## Before you start

- [ ] GitHub account signed in (browser)
- [ ] VS Code installed
- [ ] Git, Node.js, and npm work in the VS Code terminal:

```bash
git --version
node --version
npm --version
```

Prefer Node.js **22** (what Actions uses). Node 18+ usually works locally.

**VS Code map:** Activity Bar (far left) · Side Bar · Editor · Status Bar (bottom, shows branch name).

---

## Step 1 — Open this folder

You should already have unzipped the starter into a folder named `my-resume-site`.

- [ ] **File → Open Folder…** and select `my-resume-site` itself (you should see `package.json`, `src`, `public`, and this `WORKSHOP.md`)
- [ ] Trust the authors if VS Code asks
- [ ] **Terminal → New Terminal**

---

## Step 2 — Create an empty GitHub repository

In the browser: [github.com/new](https://github.com/new)

- [ ] Name it something like `my-resume-site`
- [ ] Choose **Public**
- [ ] Leave **Add a README**, license, and .gitignore **unchecked**
- [ ] Click **Create repository**
- [ ] Copy the HTTPS URL (`https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git`) into a note

Do not push yet.

---

## Step 3 — Run locally, then first push

### Preview

```bash
npm install
npm run dev
```

- [ ] Open the URL in the terminal (usually `http://localhost:4321`)
- [ ] You see the sample resume

Keep that terminal running. Open a **second** terminal (`+` in the terminal panel) for Git.

### First push (second terminal)

Replace the remote URL with yours:

```bash
git init
git add .
git commit -m "Create my portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

- [ ] Files appear on github.com
- [ ] **Expected:** **Actions** may show a **red X** on deploy (“enable GitHub Pages”). That is normal. Do **not** rewrite files to “fix” it yet — Pages comes in Step 6.

If Git asks for author identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "YOUR-GITHUB-NOREPLY-EMAIL"
```

Then retry the commit. For push auth: browser sign-in, or a Personal Access Token with `repo` scope — **not** your GitHub password.

---

## Step 4 — Personalize (do not commit yet)

Stay on `main`. **Do not Commit / Sync in Source Control yet.**

- [ ] Explorer → `src` → `data` → `profile.js`
- [ ] Replace name, role, about, email, GitHub, LinkedIn (remove every `example.com` placeholder)
- [ ] Update skills, education, coursework, activities
- [ ] Leave `experience: []` if you have none yet
- [ ] Edit or add a project (include a `slug` like `inventory-tracker` for the project page URL)
- [ ] Optional: add `public/photo.jpg` and set `photo: '/photo.jpg'`
- [ ] Save · refresh localhost · check desktop and narrow width
- [ ] Still **no commit** on `main`

---

## Step 5 — Issue → branch → commit → pull request

### 5a · Issue (browser)

- [ ] Repo → **Issues** → **New issue**
- [ ] Title e.g. `Add a featured project card`
- [ ] Body: honest summary · working link · readable on phone · no secrets
- [ ] **Create**

### 5b · Branch (VS Code)

- [ ] Status Bar (bottom left) → click `main`
- [ ] **Create new branch…** → `add-featured-project`
- [ ] Status Bar now shows `add-featured-project`

Your uncommitted Step 4 edits move with this branch.

### 5c · Finish the task change

- [ ] Adjust the featured project in `profile.js` so it matches the issue
- [ ] Save · refresh localhost

### 5d · Commit and publish (VS Code)

- [ ] Activity Bar → **Source Control**
- [ ] Click `profile.js` · read the diff
- [ ] **+** to Stage · message e.g. `Add featured project card` · **Commit**
- [ ] **Publish Branch** (or Sync Changes)

### 5e · Pull request (browser)

- [ ] **Compare & pull request** (or Pull requests → New)
- [ ] base: `main` · compare: `add-featured-project`
- [ ] Mention the issue (`Closes #1` if that is your issue number)
- [ ] **Files changed** — matches the issue?
- [ ] **Merge pull request** → Confirm · delete branch if offered

---

## Step 6 — GitHub Actions and Pages

Your ZIP already includes `.github/workflows/deploy.yml`. You do not write YAML today.

### What the workflow does

1. **When:** push / merge to `main`
2. **Build:** `npm install` → `npm run build` → upload `dist/`
3. **Deploy:** publish to GitHub Pages  
   Feature branches do **not** publish.

### Turn Pages on

- [ ] Open `.github/workflows/deploy.yml` in Explorer once so you recognize it
- [ ] Repo → **Settings** → **Pages**
- [ ] **Build and deployment → Source** = **GitHub Actions**
- [ ] **Actions** tab → open the latest **Build and deploy portfolio** run
- [ ] If it failed earlier: **Re-run all jobs**
- [ ] Wait for green
- [ ] **Settings → Pages** → open the site URL  
  (`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`)
- [ ] Check homepage, photo (if any), one project link, narrow window

---

## If something breaks

| Symptom | Try this |
| --- | --- |
| Push asks for a password | Browser GitHub login, or PAT with `repo` — not your account password |
| Actions deploy failed | Pages Source = GitHub Actions, then Re-run all jobs |
| 404 on the live site | Full project URL? Latest run green? Hard refresh |
| Change missing on live site | Merged to `main`? Wait for Actions · hard refresh |
| `profile.js` SyntaxError | Missing/extra comma in a list — Undo, save, retry |

When stuck: show a helper `git status`, your Status Bar branch name, and the first clear error line.

---

## Done when

- [ ] Live URL opens
- [ ] You can point to the issue, the PR diff, and the green Actions run
- [ ] You did **not** paste secrets into Copilot or the repo

Optional AI: ask Copilot to **explain** `profile.js` first, then request **one** focused edit — you review every line.
