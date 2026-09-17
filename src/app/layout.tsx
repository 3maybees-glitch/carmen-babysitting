import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import { PRODUCTION_HOST } from "@/lib/site-config";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Babysitting with Carmen | Lynchburg, VA & Nearby",
  description:
    "Warm, reliable babysitting in Lynchburg and nearby communities. Church families, Liberty University alumni, and hospital-connected friends welcome.",
  metadataBase: new URL(`https://${PRODUCTION_HOST}`),
  openGraph: {
    title: "Babysitting with Carmen",
    description:
      "Reliable, low-stress babysitting in Lynchburg, VA and nearby communities.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
