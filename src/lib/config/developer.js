/* ---------------------------------------------------------------------------
   Facts about the person who built this site.
   Kept apart from site.js on purpose: his personal Facebook, WhatsApp and
   portfolio are not ASH channels, so they must never leak into SOCIAL_LINKS
   or ORGANIZATION (those feed the footer, the contact page and JSON-LD).
--------------------------------------------------------------------------- */

export const DEVELOPER_PATH = "/developer";

export const DEVELOPER = {
  hero: {
    eyebrow: "Developer",
    title: "Mohammed Ismail",
    description:
      "Independent full-stack web and Android developer in Bangladesh — I designed and built this site for Aurbina Scholars Hub.",
  },

  person: {
    name: "Mohammed Ismail",
    jobTitle: "Full-Stack Web Developer and Android Software Developer",
    country: "Bangladesh",
    countryCode: "BD",
    // Only the two disciplines his own copy names — no framework or stack claims.
    knowsAbout: ["Full-stack web development", "Android software development"],
    portfolio: "https://mdismaildev.netlify.app",
    facebook: "https://www.facebook.com/mdaismail.it",
    whatsapp: "+8801879449789",
  },

  intro: {
    eyebrow: "Who I am",
    title: "Software that communities actually use.",
    body: [
      "I’m Mohammed Ismail, an independent Full-Stack Web Developer and Android Software Developer based in Bangladesh. I’m passionate about creating modern, practical, and user-friendly digital solutions that address real-world challenges.",
      "I enjoy transforming ideas into meaningful digital products, building applications that simplify everyday tasks, connect communities, and make information and resources more accessible.",
    ],
  },

  focus: {
    eyebrow: "Currently focused on",
    statement:
      "Building innovative web applications, Android software, and meaningful digital products.",
  },

  projects: {
    eyebrow: "Projects",
    title: "Designed and developed, independently.",
    description:
      "Throughout my development journey, I have independently designed and developed several projects.",
    // Names only — no invented URLs or descriptions. `current` marks the site you are on.
    items: [
      { name: "Myanmar Book Hub" },
      { name: "RNEB Official Website" },
      { name: "RohLex Android App" },
      { name: "Aurbina Scholars Hub", current: true },
      { name: "VitalDrop" },
      { name: "EduBoard" },
    ],
  },

  principles: {
    eyebrow: "How I work",
    title: "Reliable, impactful products.",
    body: [
      "I believe in continuous learning, creativity, and practical problem-solving. My goal is to build reliable and impactful digital products that create meaningful value for individuals and communities.",
    ],
  },

  links: {
    eyebrow: "Connect",
    title: "Portfolio and direct contact.",
    description:
      "For development work, reach me directly. For anything about Aurbina Scholars Hub — programmes, donations, volunteering — use the organisation’s own contact channels instead.",
  },

  // Verified from package.json rather than assumed, so the credit cannot drift.
  build: {
    label: "This site",
    stack: ["Next.js App Router", "MongoDB + Mongoose", "NextAuth", "Cloudinary", "Tailwind CSS"],
  },
};
