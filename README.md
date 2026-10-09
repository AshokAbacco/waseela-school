# Waseela English Medium School — Website

React + Vite (JavaScript / JSX) + Tailwind CSS + React Router + Lucide icons.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build
```

---

## Where to edit what

| I want to change…                         | Open this file |
|-------------------------------------------|----------------|
| Phone, email, address, WhatsApp, admission year, App name, Play Store link, developer credit | `src/data/schoolData.js` |
| Any list of content (facilities, why-choose points, gallery photos, vision, mission, hero card…) | `src/data/schoolData.js` |
| Privacy policy wording / last-updated date | `src/data/privacyData.js` |
| Colours                                    | `tailwind.config.js` |
| Fonts, button styles                       | `src/index.css` (+ font link in `index.html`) |
| Order of sections on a page                | `src/pages/<Page>.jsx` |
| Design of one section                      | `src/components/<page>/<Section>.jsx` (see map below) |

Every component file starts with a comment like `HOME › ABOUT` so you can search for it.

---

## Folder map

```
src/
├── App.jsx                     ← routes (URL → page)
├── data/
│   ├── schoolData.js           ← ALL school content & settings
│   └── privacyData.js          ← privacy policy text
├── pages/                      ← one file per page; just lists its sections in order
│   ├── Home.jsx  About.jsx  Vision.jsx  Mission.jsx
│   ├── Facilities.jsx  Gallery.jsx  Contact.jsx  Privacy.jsx  NotFound.jsx
├── components/
│   ├── layout/                 ← on every page
│   │   ├── Navbar.jsx          (top info bar + menu + mobile menu)
│   │   ├── Footer.jsx          (links, contact, app badge, developer credit)
│   │   ├── WhatsAppButton.jsx  (floating button)
│   │   └── Layout.jsx  ScrollToTop.jsx  StructuredData.jsx
│   ├── home/                   ← HOME PAGE sections, top to bottom
│   │   ├── HeroSection.jsx         "Brighter Tomorrow" + background photo + highlight card
│   │   ├── AboutSection.jsx        "More Than Just a School"
│   │   ├── StrengthsSection.jsx    4-icon strip
│   │   ├── AcademicsSection.jsx    "Excellence in Education…"
│   │   ├── FacilitiesSection.jsx   5 facility cards
│   │   ├── GallerySection.jsx      "Moments That Make Us Proud" strip
│   │   ├── NewsPrincipalSection.jsx  (hidden until news / principal data is added)
│   │   └── WhyChooseSection.jsx    6 poster points
│   ├── about/      AboutHero  StorySection  MottoSection  ValuesSection  EducatorsSection
│   ├── vision/     VisionHero  StatementSection  FocusSection  PillarsSection
│   ├── mission/    MissionHero  PromisesSection
│   ├── facilities/ FacilitiesHero
│   ├── gallery/    GalleryHero
│   ├── contact/    ContactHero  ContactCardsSection  TransportEnquirySection  VisitSection
│   ├── privacy/    PrivacyHero  PromiseSection  TopicBar
│   │               AppDataSections (01–04)  SafetySections (05–08)
│   │               RightsSections (09–10)   ContactSections (11–13)
│   │               policyLayout.jsx (topic list + building blocks)
│   ├── shared/                 ← sections used on more than one page
│   │   ├── AdmissionCTA.jsx        admissions banner (bottom of pages)
│   │   ├── TransportBoarding.jsx   bus + hostel rows
│   │   ├── FacilitiesGrid.jsx      all facility cards
│   │   ├── AdmissionSteps.jsx      3 steps to join
│   │   └── PhotoGallery.jsx        gallery grid + full-screen viewer
│   └── ui/                     ← small reusable pieces (buttons, cards, headings)
│       PageHero  SectionHeading  Eyebrow  Reveal  Logo  FacilityCard  FeatureCard
│       ContactCard  Illustration  Lightbox  PlayStoreBadge  WhatsAppIcon  EmailText
├── assets/
│   ├── brand/          waseela-crest.webp
│   ├── photos/         real school photos (.webp)
│   └── illustrations/  drawings used where no photo exists yet (.webp)
└── hooks/useSeo.js     page titles & meta tags
```

---

## Images

**Photos** (`src/assets/photos/`): `campus-students` (home hero background), `campus-building`,
`campus-gate`, `classroom`, `library`, `computer-lab`, `school-buses`, `student-writing`, `students-group`.

**Illustrations** (`src/assets/illustrations/`): used for science lab, playground, dining, hostel,
educators and the app, until real photos are available.

To replace an image, save the new one as `.webp` with the **same file name** and overwrite the old file.
`computer-lab.webp` is small (~210 px wide) — a larger photo will look sharper.

---

## Before launch — please fill in (`src/data/schoolData.js`)

| Item | Setting | Notes |
|---|---|---|
| Admission year | `school.admissionYear` | Currently "2025–26" from the poster. |
| Hero highlight card | `heroHighlights` | Shows facts (AC classrooms, digital boards…). Swap in real numbers, e.g. "500+ Students", once confirmed. |
| News & events | `news` | Home section appears when you add items. |
| Principal's message | `principal` | Home section appears when you add name, message and photo. |
| WhatsApp number | `contact.whatsapp` | Uses the first enquiry number. |
| Office hours | `contact.officeHours` | Contact page shows a table once filled. |
| Social links | `social` | Footer icons appear once filled. |
| Play Store link | `schoolApp.playStoreUrl` | Until set, the badge opens a Play Store search. |
| Live domain | `SITE_URL` + `public/robots.txt` + `public/sitemap.xml` | Currently `https://www.example.com`. |
| Developer logo | `public/abacco-logo.png` | Optional. |

Facilities text for transport, science lab, library and hostel is general — please confirm the wording with the school office.

## Colours (`tailwind.config.js`)
- `gold` — amber accent (buttons, labels, icons)
- `navy` — headings and text
- `cream` / `peach` — section backgrounds

Fonts: Fraunces (headings), Plus Jakarta Sans (body).

## Deploying
SPA rewrites are included for Netlify (`public/_redirects`) and Vercel (`vercel.json`).
