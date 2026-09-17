/** Update after Vercel deploy if the project URL differs. */
export const PRODUCTION_HOST = "carmen-babysitting.vercel.app";

export const PRODUCTION_URL = `https://${PRODUCTION_HOST}`;

export const PHONE_DISPLAY = "609-221-5318";
export const PHONE_TEL = "+16092215318";

export const FLYER_WEBSITE_LINE = `Website: ${PRODUCTION_HOST} (coming soon — set to your live .vercel.app after deploy)`;

export const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#availability", label: "Availability" },
  { href: "#families", label: "Who I sit for" },
  { href: "#rates", label: "Rates" },
  { href: "#photos", label: "Photos" },
  { href: "#references", label: "References" },
  { href: "#contact", label: "Contact" },
] as const;
