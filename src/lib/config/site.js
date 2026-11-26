// Canonical origin for metadata, canonical links, JSON-LD and next-sitemap.
// Must match next-sitemap.js `siteUrl`.
export const SITE_URL = "https://ashedui.vercel.app";

export const ORGANIZATION = {
  name: "Aurbina Scholars Hub",
  shortName: "ASH",
  // Single published contact address; forms and mailto links use emails[0].
  emails: ["ashassist262@gmail.com"],
  phone: "+601160740897",
};

// ASH is not formally registered yet, so donations arrive through a personal
// e-wallet / DuitNow account. The donate page states this openly.
export const DONATION = {
  accountName: "SAYEDUL BAHAR FAYEZ AHMED",
  duitNowId: "150485761012",
  paypal: "https://www.paypal.me/MohammedRofik218",
  tagline: "For Refugee, By Refugee | Learn • Grow • Lead",
};

// Aurbina Scholars Hub operates in Malaysia and Bangladesh, but the client asked
// for a single published address, so only the Kuala Lumpur location is listed.
export const OFFICES = [
  {
    // `country` doubles as the React key where offices are listed.
    country: "Malaysia",
    lines: ["53100 Kuala Lumpur, Malaysia"],
  },
];

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/1FXQExQcCi/",
  x: "https://x.com/mrofik262",
  instagram: "https://www.instagram.com/scholarshuboffical?igsh=MWR3YTY1MjY4bHB5ZQ==",
  linkedin: "https://www.linkedin.com/company/aurbinascholarshub1/",
  tiktok: "https://www.tiktok.com/@scholarshuboffical?_r=1&_t=ZS-92LIXwQpfgl",
};
