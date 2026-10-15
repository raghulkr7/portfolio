# Raghul KR — Portfolio

A responsive dark portfolio website built with Next.js, React, and custom CSS, using information from the supplied resume.

## Run locally

1. Install Node.js 18.17+.
2. In this folder, run:

   ```bash
   npm install
   npm run dev
   ```
3. Open http://localhost:3000.

## Customize before publishing

- `app/page.jsx`: change text, projects, skills, experience, and links.
- `app/globals.css`: adjust colors, layout, and typography.
- `public/resume.pdf`: replace with your latest resume PDF.
- If you want your own photograph in the hero, add it to `public/` and replace the monogram block in `app/page.jsx` with an image.

## Deploy to Vercel

1. Create a GitHub repository and upload these files (the contents of this folder, not the parent folder).
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository. Vercel should detect Next.js automatically.
4. Click **Deploy**. The generated `*.vercel.app` address can be used as your portfolio URL.

No environment variables are required. Hosting availability and limits depend on Vercel's current plan terms.
