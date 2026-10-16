# Ahmed Fakhfakh — DevOps & Kubernetes Engineer

A responsive English/French portfolio, based on Ahmed's supplied CVs. Includes three engineering case studies, all five professional experiences, the technology stack, education, CKA certification, a portrait, contact links, and both original PDF CVs.

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
- `assets/ahmed.jpg`: portrait reused from Ahmed's previous public portfolio.
- `cv/`: original English and French CVs. Replace both PDFs together when updating your résumé.

Project diagrams are conceptual illustrations, not live infrastructure status. Project facts and dates reflect the supplied CVs. There is no backend, contact-form storage, analytics, or API key requirement. Email and phone links open the visitor's own applications.

## Vercel

Import this repository into Vercel with **Other** as the framework, repository root as the root directory, no build command, and `.` as the output directory. The `main` branch is the production branch. Git integration can redeploy subsequent pushes automatically.

`vercel.json` supplies security headers and permits only local page assets. No environment variables are required.

## Validation

The portfolio was reviewed against both CVs and checked in a browser at desktop and mobile sizes. Verification covers EN/FR switching, language persistence, project filters and details, mobile navigation, matching PDF download targets, and JavaScript console errors.

Personal résumé content and photographs belong to Ahmed Fakhfakh.
