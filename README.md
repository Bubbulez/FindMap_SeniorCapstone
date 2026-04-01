# FindMap Senior Capstone – Team Development Guide

This document explains how to install the project, run it locally, and collaborate with teammates using GitHub.

Use **Ctrl+F** to quickly find commands like:
- install
- run server
- pull
- push
- branch
- merge
- commit

---

# SECTION 1 — INSTALLATION (FIRST TIME SETUP)

## Install Node.js

Check if Node is installed:

```
node -v
```

Check npm:

```
npm -v
```

If not installed, download Node.js:

https://nodejs.org

Install **Node 20 LTS or higher**.

---

## Clone the Repository

```
git clone <repository-url>
```

Move into the project folder:

```
cd FindMap_SeniorCapstone/findmap
```

---

## Install Project Dependencies

```
npm install
```

This installs all required packages.

---

# SECTION 2 — RUNNING THE PROJECT

Start development server:

```
npm run dev
```

The site will run at:

```
http://localhost:3000
```

If using **GitHub Codespaces**, open **Port 3000**.

Stop the server:

```
Ctrl + C
```

Restart server:

```
npm run dev
```

---

# SECTION 3 — PROJECT STRUCTURE

Example project structure:

```
findmap
│
├ app
│ ├ page.tsx
│ ├ events
│ │ └ page.tsx
│ ├ buildings
│ │ └ page.tsx
│ ├ dining
│ │ └ page.tsx
│ └ clubs
│   └ page.tsx
│
├ public
├ node_modules
├ package.json
└ README.md
```

Next.js automatically creates routes.

Example:

```
app/events/page.tsx → /events
```

---

# SECTION 4 — DAILY TEAM WORKFLOW (IMPORTANT)

Follow this order **every time you work on the project**.

### Step 1 — Pull latest changes

```
git checkout main
git pull origin main
```

---

### Step 2 — Create a new branch

Example branch:

```
git checkout -b feature-events
```

You are now working in your own branch.

---

### Step 3 — Work on your code

Edit files normally.

Example:

```
app/events/page.tsx
```

---

### Step 4 — Add files

```
git add .
```

---

### Step 5 — Commit changes

```
git commit -m "describe your change"
```

Example:

```
git commit -m "added events page"
```

---

### Step 6 — Push branch

```
git push origin feature-events
```

Your branch is now on GitHub.

---

# SECTION 5 — MERGING BRANCHES

### Option A (Recommended — GitHub)

1. Go to GitHub repository
2. Click **Compare & Pull Request**
3. Review code
4. Click **Merge into main**

---

### Option B (Merge locally)

Switch to main:

```
git checkout main
```

Pull latest code:

```
git pull origin main
```

Merge your branch:

```
git merge feature-events
```

Push updated main:

```
git push origin main
```

---

# SECTION 6 — PULLING UPDATES

Always pull before coding:

```
git pull origin main
```

If Git shows a branch conflict error:

```
git pull origin main --rebase
```

---

# SECTION 7 — PUSHING CHANGES

Standard push workflow:

```
git add .
git commit -m "message"
git push origin main
```

---

# SECTION 8 — CHECKING CHANGES

See changed files:

```
git status
```

See commit history:

```
git log
```

See current branch:

```
git branch
```

---

# SECTION 9 — INSTALLING NEW PACKAGES

If someone installs a new package:

```
git pull origin main
npm install
```

Example installing a library:

```
npm install axios
```

---

# SECTION 10 — CREATING NEW PAGES

Create a folder inside `app`.

Example:

```
app/events/page.tsx
```

Example page code:

```tsx
export default function EventsPage() {
  return (
    <div>
      <h1>Events Page</h1>
    </div>
  );
}
```

Then visit:

```
/events
```

---

# SECTION 11 — COMMON COMMANDS

Install packages:

```
npm install
```

Run server:

```
npm run dev
```

Stop server:

```
Ctrl + C
```

Add files:

```
git add .
```

Commit:

```
git commit -m "message"
```

Push:

```
git push origin main
```

Pull:

```
git pull origin main
```

Create branch:

```
git checkout -b branch-name
```

Merge branch:

```
git merge branch-name
```

Delete branch:

```
git branch -d branch-name
```

---

# SECTION 12 — TEAM RULES

Always:

- Pull before coding
- Work in branches
- Commit small changes
- Write clear commit messages

Never:

- Push directly without pulling
- Delete teammate code
- Force push unless necessary

---

# SECTION 13 — DEPLOYMENT

Deploy using **Vercel**:

1. Connect GitHub repository
2. Import project
3. Click **Deploy**

Every push to `main` will automatically update the site.

---

# SECTION 14 — TROUBLESHOOTING

If the project breaks:

Restart server:

```
Ctrl + C
npm run dev
```

Reinstall dependencies:

```
npm install
```

Update repository:

```
git pull origin main
```

Fix branch conflicts:

```
git pull origin main --rebase
```

---

# SECTION 15 — QUICK TEAM WORKFLOW SUMMARY

```
git checkout main
git pull origin main
git checkout -b feature-name
make changes
git add .
git commit -m "message"
git push origin feature-name
```

Then create a **Pull Request** on GitHub and merge into `main`.

---