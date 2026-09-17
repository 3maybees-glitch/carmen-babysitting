import Link from "next/link";
import {
  CalendarDays,
  Heart,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Section } from "@/components/section";
import { WaveDivider } from "@/components/wave-divider";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  FLYER_WEBSITE_LINE,
  PHONE_DISPLAY,
  PHONE_TEL,
  PRODUCTION_HOST,
  PRODUCTION_URL,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

/** Pastel band colors for waves and backgrounds */
const P = {
  heroBottom: "#FFE8DC",
  blush: "#FCE8EF",
  lavender: "#EDE5F7",
  mint: "#DDF0E8",
  peach: "#FFE8DC",
  sky: "#DCEEF7",
  rose: "#F5DDE8",
  cream: "#FFF3E8",
  footer: "#F5E6EF",
} as const;

const PHOTOS = [
  {
    src: "/photos/reading-time.svg",
    alt: "Two children sitting together on a knit blanket, reading a picture book during story time",
    caption: "Story time and quiet moments",
  },
  {
    src: "/photos/playroom.svg",
    alt: "Two children playing together at a low wooden table in a cozy playroom",
    caption: "Creative play at home",
  },
  {
    src: "/photos/outdoors.svg",
    alt: "Three children playing hide-and-seek around trees in the yard",
    caption: "Fresh air and gentle adventures",
  },
  {
    src: "/photos/craft-table.svg",
    alt: "Three children sitting on the grass with beads, play dough, fruit, and snacks",
    caption: "Simple crafts and snacks",
  },
] as const;

const REFERENCES = [
  {
    quote:
      "Carmen was calm, kind, and our kids felt safe right away. We’d happily book her again.",
    name: "Church family — Lynchburg",
    note: "Replace with a real name when ready",
  },
  {
    quote:
      "She communicated clearly, showed up on time, and left the house peaceful. A real blessing.",
    name: "Liberty alumni parents",
    note: "Replace with a real name when ready",
  },
  {
    quote:
      "We needed afternoon cover for appointments — Carmen was flexible and our children loved her.",
    name: "Hospital colleague family",
    note: "Replace with a real name when ready",
  },
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div id="top" className="flex flex-1 flex-col bg-[#FFF0E8]">
        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#FFE8DC] via-[#F5E0F5] to-[#D8EEF5]">
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-[40%] bg-[#F4A8C8]/45 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 size-72 rounded-[45%] bg-[#8FD4E8]/50 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-[15%] top-[40%] size-40 rounded-full bg-[#C8E6A0]/40 blur-xl"
            aria-hidden
          />
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
            <Badge
              variant="secondary"
              className="mb-4 rounded-full border border-[#E8B8D0]/80 bg-[#FCE8EF] px-3 py-1 text-xs font-medium text-foreground shadow-sm"
            >
              Lynchburg, VA &amp; nearby communities
            </Badge>
            <h1 className="font-heading max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl sm:leading-tight">
              Babysitting with Carmen
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/85 sm:text-xl">
              Reliable, low-stress care for families in our church, Liberty
              University alumni circles, and friends connected through my
              husband&apos;s hospital colleagues — with many years of experience
              loving and looking after children.
            </p>
            <p className="mt-6 max-w-xl font-heading text-base italic leading-relaxed text-[#5C6B58] sm:text-lg">
              &ldquo;Let your gentleness be evident to all.&rdquo; — warmth,
              hospitality, and safe hands for your children.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${PHONE_TEL}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full border border-[#C97898]/30 bg-[#C97898] px-8 text-[#FFFBF8] shadow-md hover:bg-[#B86888]",
                )}
              >
                <Phone className="size-5" aria-hidden />
                Text or call {PHONE_DISPLAY}
              </a>
              <Link
                href="#about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full border-[#9B7BB8]/40 bg-[#EDE5F7]/90 text-center text-foreground hover:bg-[#E0D4F2]",
                )}
              >
                Learn more
              </Link>
            </div>
            <p className="mt-8 rounded-2xl border border-[#D4A574]/50 bg-[#FFF3E8]/90 px-4 py-3 text-sm text-foreground/80 shadow-sm">
              <span className="font-medium text-foreground">For your flyer: </span>
              {FLYER_WEBSITE_LINE}
            </p>
          </div>
        </div>

        <WaveDivider fill={P.blush} flip tall />

        <Section
          id="about"
          title="Hi — I'm Carmen"
          bandClassName="bg-[#FCE8EF]"
          intro="I offer reliable, low-stress babysitting for families in our church, Liberty University alumni circles, and family, friends, and hospital colleagues connected through my husband."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="rounded-2xl border-[#E8B8D0]/60 bg-[#FFF5F8] shadow-md">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-[#F5C2D8] text-[#7A4A5E]">
                  <Heart className="size-5" aria-hidden />
                </div>
                <CardTitle className="font-heading text-xl">
                  Warm, steady care
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-foreground/85">
                  I bring a calm, fun energy — reassuring for parents and
                  enjoyable for kids. Christian hospitality is at the heart of
                  how I serve families (gentle and welcoming, never heavy or
                  preachy).
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl border-[#A8C8E8]/60 bg-[#E8F4FC] shadow-md">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-[#A8D8F0] text-[#3A5A6B]">
                  <Sparkles className="size-5" aria-hidden />
                </div>
                <CardTitle className="font-heading text-xl">
                  Many years with children
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-foreground/85">
                  From school-age through teens, I&apos;ve spent many years
                  working with children — in homes, church settings, and
                  everyday family life. Your routines and values matter to me.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Section>

        <WaveDivider fill={P.lavender} />

        <Section
          id="availability"
          title="When I'm available"
          bandClassName="bg-[#EDE5F7]"
          intro="Afternoons through evenings, plus weekends. I can often start as early as early afternoon when you need cover for doctor visits or similar appointments."
        >
          <Card className="max-w-2xl rounded-2xl border-[#B8A8D8]/50 bg-[#F5F0FC] shadow-md">
            <CardContent className="flex gap-4 pt-6">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#A8D8B8] text-[#2A5A45]">
                <CalendarDays className="size-6" aria-hidden />
              </div>
              <div className="space-y-2 text-foreground/80">
                <p className="text-base leading-relaxed text-foreground">
                  Flexible afternoons &amp; evenings
                </p>
                <p className="text-base leading-relaxed">
                  Weekends welcome — great for date nights, events, or rest
                  for busy parents.
                </p>
                <p className="text-base leading-relaxed">
                  Early-afternoon starts when you need appointment coverage or
                  a hand before the school pickup rush.
                </p>
              </div>
            </CardContent>
          </Card>
        </Section>

        <WaveDivider fill={P.mint} flip />

        <Section
          id="families"
          title="Who I sit for"
          bandClassName="bg-[#DDF0E8]"
          intro="I'm open on ages and whether it's one child or more than one. We'll talk through what your kids need and what feels like a good fit."
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-[#C8B8E8] text-[#4A3A6B] shadow-sm">
              <Users className="size-7" aria-hidden />
            </div>
            <ul className="list-inside list-disc space-y-2 text-base leading-relaxed text-foreground/85 marker:text-[#C97898] sm:text-lg">
              <li>School-age children and older</li>
              <li>One child or siblings — happy to meet your whole crew</li>
              <li>
                Church families, Liberty alumni, and hospital-connected friends
              </li>
              <li>
                A quick chat first so we both feel confident about the fit
              </li>
            </ul>
          </div>
        </Section>

        <WaveDivider fill={P.peach} />

        <Section
          id="rates"
          title="Rates"
          bandClassName="bg-[#FFE8DC]"
          intro="Negotiable. I'm fair and flexible — happy to find something that works for both of us."
        >
          <p className="max-w-2xl rounded-2xl border border-[#E8C4A8]/60 bg-[#FFF3E8]/80 p-5 text-base leading-relaxed text-foreground/85 shadow-sm sm:text-lg">
            Every family&apos;s schedule and needs are a little different. I&apos;m
            glad to discuss what works for you — whether it&apos;s a regular
            slot or occasional help.
          </p>
        </Section>

        <WaveDivider fill={P.sky} flip tall />

        <Section
          id="photos"
          title="A glimpse of care"
          bandClassName="bg-[#DCEEF7]"
          intro="Story time, imaginative play, crafts and snacks, and time outside."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {PHOTOS.map((photo) => (
              <figure
                key={photo.src}
                className="group overflow-hidden rounded-2xl border border-[#98C8E0]/50 bg-[#EBF6FC] shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#C8E8F5]">
                  {/* Native img: gallery files are JPEG-in-SVG photos */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-foreground/75">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <WaveDivider fill={P.rose} />

        <Section
          id="references"
          title="Kind words from families"
          bandClassName="bg-[#F5DDE8]"
          intro="Placeholder references you can replace with real quotes and names when you're ready."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {REFERENCES.map((ref) => (
              <Card
                key={ref.name}
                className="flex flex-col rounded-2xl border-[#E8A8C0]/50 bg-[#FFF0F5] shadow-md"
              >
                <CardHeader className="flex-1">
                  <CardDescription className="text-base leading-relaxed text-foreground">
                    &ldquo;{ref.quote}&rdquo;
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Separator className="mb-3 bg-[#E8B8D0]/60" />
                  <p className="font-medium text-foreground">{ref.name}</p>
                  <p className="text-xs text-foreground/65">{ref.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <WaveDivider fill={P.cream} flip />

        <Section
          id="contact"
          title="Get in touch"
          bandClassName="bg-[#FFF3E8]"
          intro="Text or call 609-221-5318. I'd love to hear about your family and set up a time to meet."
        >
          <div className="flex flex-col gap-6 rounded-[1.75rem] border border-[#E8C4A8]/70 bg-gradient-to-br from-[#FFE8DC] via-[#F5E8F0] to-[#D8EEF5] p-6 shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-lg font-medium text-foreground">
                Ready when you are
              </p>
              <p className="mt-2 text-foreground/80">
                The fastest way to reach me is a text or call — tell me your
                dates, ages, and what you&apos;re looking for.
              </p>
              <p className="mt-4 text-sm text-foreground/75">
                Live site:{" "}
                <a
                  href={PRODUCTION_URL}
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {PRODUCTION_HOST}
                </a>
              </p>
            </div>
            <a
              href={`tel:${PHONE_TEL}`}
              data-testid="contact-phone"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-auto min-h-12 shrink-0 rounded-full border border-[#C97898]/30 bg-[#C97898] px-8 py-3 text-base text-[#FFFBF8] shadow-md hover:bg-[#B86888]",
              )}
            >
              <Phone className="size-5" aria-hidden />
              {PHONE_DISPLAY}
            </a>
          </div>
        </Section>

        <WaveDivider fill={P.footer} />

        <footer className="bg-[#F5E6EF] py-10">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 text-sm text-foreground/75 sm:px-6">
            <p className="font-heading text-base font-medium text-foreground">
              Babysitting with Carmen · Lynchburg &amp; nearby
            </p>
            <p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="rounded-xl bg-[#FCE8EF]/80 px-3 py-2 text-xs sm:text-sm">
              Flyer line: {FLYER_WEBSITE_LINE}
            </p>
            <p className="text-xs">
              © {new Date().getFullYear()} Carmen Maybee. Made with care for
              local families.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
