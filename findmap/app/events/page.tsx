# FindMap Senior Capstone Project

This repository contains the code for the **FindMap campus navigation and events application**.  
This document explains how to install the project, run it locally, and collaborate using GitHub.

---

# 1. Project Requirements

This project requires:

- Node.js (v20 or higher)
- npm
- Next.js
- Git / GitHub

---

# 2. Installing Node.js and npm

Check if Node.js is installed:

```
node -v
```

Check npm:

```
npm -v
```

If Node.js is not installed, download it from:

https://nodejs.org

Install the **LTS version (Node 20 or higher)**.

---

# 3. Clone the Repository (First Time Setup)

Clone the project from GitHub:

```
git clone <repository-url>
```

Move into the project folder:

```
cd FindMap_SeniorCapstone/findmap
```

---

# 4. Install Project Dependencies

Install required packages:

```
npm install
```

This installs all dependencies listed in `package.json`.

---

# 5. Running the Project

Start the development server:

```
npm run dev
```

The project will run at:

```
http://localhost:3000
```

If using **GitHub Codespaces**, open **Port 3000**.

Stop the server:

```
Ctrl + C
```

---

# 6. Project Structure

Example folder structure:

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

Next.js automatically creates routes from folders.

Example:

```
app/events/page.tsx → /events
app/dining/page.tsx → /dining
```

---

# 7. Creating New Pages

Create a new folder inside the `app` directory.

Example:

```
app/events/page.tsx
```

Example code:

```tsx
export default function EventsPage() {
  return (
    <div>
      <h1>Events Page</h1>
      <p>Campus events will go here.</p>
    </div>
  );
}
```

Then visit:

```
/events
```

---

# 8. GitHub Workflow (Team Collaboration)

Always follow this order when working.

---

## Step 1 Pull the latest code

Before starting work:

```
git pull origin main
```

This downloads your teammates' latest updates.

---

## Step 2 Make your changes

Edit your project files.

Example:

```
app/page.tsx
app/events/page.tsx
```

---

## Step 3 Add files to Git

```
git add .
```

This stages all changes.

---

## Step 4 Commit your changes

```
git commit -m "describe your changes"
```

Example:

```
git commit -m "added events page"
```

---

## Step 5 Push to GitHub

```
git push origin main
```

This uploads your changes to the repository.

---

# 9. Full Team Workflow

Every time you work on the project:

```
git pull origin main
make changes
git add .
git commit -m "your message"
git push origin main
```

---

# 10. Check Git Status

To see which files changed:

```
git status
```

---

# 11. Fix Diverging Branch Error

If you see this error:

```
fatal: Need to specify how to reconcile divergent branches
```

Run:

```
git pull origin main --rebase
```

---

# 12. Installing New Packages

If a teammate adds new packages:

```
git pull origin main
npm install
```

Example installing a new package:

```
npm install axios
```

---

# 13. Restarting the Server

If the site breaks or new folders were added:

Stop server:

```
Ctrl + C
```

Restart:

```
npm run dev
```

---

# 14. Useful Commands

Check Node version:

```
node -v
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Add changes:

```
git add .
```

Commit changes:

```
git commit -m "message"
```

Push changes:

```
git push origin main
```

Pull updates:

```
git pull origin main
```

---

# 15. Deployment (Optional)

The project can be deployed using **Vercel**.

Steps:

1. Connect the GitHub repository to Vercel
2. Import the project
3. Click **Deploy**

Every push to **main** will automatically update the site.

---

# 16. Team Guidelines

Always:

- Pull before coding
- Commit small changes
- Write clear commit messages
- Push after finishing work

Never:

- Push without pulling first
- Delete teammate files
- Force push unless necessary