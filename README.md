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


## Add your profile photo

1. Choose a clear, professional portrait (JPG or WebP works well; a vertical 4:5 crop is ideal).
2. Rename the image to `profile.jpg`.
3. Upload it to the `public/` folder at the root of this repository. The exact path must be `public/profile.jpg`.
4. Commit the change to your GitHub default branch. Vercel will redeploy automatically.

The hero and About section both use `/profile.jpg`. Until you add the photo, a designed RK fallback is shown. No `next.config.js` image-host configuration is required because the image is served locally from `public/`.
