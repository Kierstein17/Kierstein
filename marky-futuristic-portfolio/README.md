# Marky Mallari — Futuristic Programmer Portfolio

A responsive Next.js portfolio with a neon blue/violet interface, animated grid/orbits, project cards, skill indicators, education timeline, and contact section.

## Run locally

1. Install Node.js 20 or later.
2. Extract this folder and open a terminal inside it.
3. Run:

```bash
npm install
npm run dev
```

4. Visit http://localhost:3000

## Deploy to Vercel

### Option A — GitHub (recommended)
1. Create a new GitHub repository.
2. Upload/push all files in this folder to the repository root.
3. Sign in at https://vercel.com and choose **Add New → Project**.
4. Import the repository. Vercel detects Next.js automatically.
5. Click **Deploy**. No environment variables are required.

### Option B — Vercel CLI
Install the Vercel CLI, sign in, then run `vercel` from this project directory and follow the prompts.

## Personalize before publishing

- Replace `public/profile.jpg` with your preferred portrait (keep the same filename).
- In `app/page.tsx`, update the education entries with your official school, course, and dates.
- Replace the sample contact email `your.email@example.com` in the contact link.
- Replace the starter project concepts with real projects and GitHub/demo links.
- Skills and percentages are illustrative self-assessments. Adjust them to match your actual ability.
- Update the metadata in `app/layout.tsx` if you want a different title or description.

## Notes

- Project cards are clearly described as starter concepts; they should not be represented as completed client work.
- The experience section does not invent employment. It highlights student practice and leaves room for real work experience.
- Responsive layout and reduced-motion accessibility support are included.
