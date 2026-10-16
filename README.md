# Ahmed Fakhfakh — DevOps & Kubernetes Engineer

A responsive English/French portfolio, based on Ahmed's updated CVs. Includes three engineering case studies, four career entries, the technology stack, education, CKA and AZ-104 certifications, his supplied professional portrait, contact links, and both original PDF CVs.

**Live:** [English](https://ahmed-fakhfakh-portfolio.vercel.app/?lang=en) · [Français](https://ahmed-fakhfakh-portfolio.vercel.app/?lang=fr)

**Source:** [fakhfakhahmed/ahmed-fakhfakh-portfolio](https://github.com/fakhfakhahmed/ahmed-fakhfakh-portfolio)

## Run locally

No dependencies or build step are needed. Serve this directory with any static web server:

```sh
python -m http.server 4173
```

Open `http://localhost:4173`. Use `?lang=en` or `?lang=fr` to select a language directly. The switch remembers a visitor's preference; first-time visitors otherwise use their browser language (French or English).

## Update the content

- `app.js`: English/French text, experience, projects, skills, and interactions.
- `index.html`: semantic page structure, hero illustration, and metadata.
- `styles.css`: responsive design, keyboard focus states, and reduced-motion support.
- `motion.js` and `motion.css`: staggered reveals, animated infrastructure signals, and hover effects. Device reduced-motion settings are respected by default; visitors can explicitly enable or pause animations with the control below the hero. Motion stops in hidden tabs and diagrams stop when off screen.
- `assets/ahmed.webp`: the newly supplied portrait, resized and compressed for the web without altering its appearance.
- `cv/`: original English and French CVs. Replace both PDFs together when updating your résumé.

Project diagrams are conceptual illustrations, not live infrastructure status. Project facts and dates reflect the supplied CVs. There is no backend, contact-form storage, analytics, or API key requirement. Email and phone links open the visitor's own applications.

## Vercel

Import this repository into Vercel with **Other** as the framework, repository root as the root directory, no build command, and `.` as the output directory. The `main` branch is the production branch. Git integration can redeploy subsequent pushes automatically.

`vercel.json` supplies security headers and permits only local page assets. No environment variables are required.

## Validation

The portfolio was reviewed against both updated CVs and checked in a browser at desktop and mobile sizes. Verification covers EN/FR switching, language persistence, project filters and details, mobile navigation, matching PDF downloads, motion controls, and JavaScript console errors.

Personal résumé content and photographs belong to Ahmed Fakhfakh.
