import Image from "next/image";
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

const PHOTOS = [
  {
    src: "/photos/reading-time.svg",
    alt: "Soft illustration placeholder for reading with children",
    caption: "Story time and quiet moments",
  },
  {
    src: "/photos/playroom.svg",
    alt: "Soft illustration placeholder for playroom activities",
    caption: "Creative play at home",
  },
  {
    src: "/photos/outdoors.svg",
    alt: "Soft illustration placeholder for outdoor play",
    caption: "Fresh air and gentle adventures",
  },
  {
    src: "/photos/craft-table.svg",
    alt: "Soft illustration placeholder for crafts at the table",
    caption: "Simple crafts and snacks",
  },
] as const;

const REFERENCES = [
  {
    quote:
      "Carmen was calm, kind, and our kids felt safe right away. We'd happily book her again.",
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
      "We needed afternoon cover for appointments — Carmen was flexible and our toddler loved her.",
    name: "Hospital colleague family",
    note: "Replace with a real name when ready",
  },
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div id="top" className="flex flex-1 flex-col">
        <div className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-[#FDF8F3] via-[#F5F0FA] to-[#EEF6F4]">
          <div
            className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-[#F4C2C2]/30 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 size-64 rounded-full bg-[#B8D4E8]/35 blur-3xl"
            aria-hidden
          />
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
            <Badge
              variant="secondary"
              className="mb-4 rounded-full border border-border/60 bg-white/70 px-3 py-1 text-xs font-medium text-foreground"
            >
              Lynchburg, VA &amp; nearby communities
            </Badge>
            <h1 className="font-heading max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl sm:leading-tight">
              Babysitting with Carmen
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Reliable, low-stress care for families in our church, Liberty
              University alumni circles, and friends connected through my
              husband&apos;s hospital colleagues — with many years of experience
              loving and looking after children.
            </p>
            <p className="mt-6 max-w-xl font-heading text-base italic leading-relaxed text-[#5C6B58] sm:text-lg">
              &ldquo;Let your gentleness be evident to all.&rdquo; — warmth,
              hospitality, and safe hands for your little ones.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${PHONE_TEL}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-8 shadow-sm",
                )}
              >
                <Phone className="size-5" aria-hidden />
                Text or call {PHONE_DISPLAY}
              </a>
              <Link
                href="#about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full border-border/80 bg-white/60 text-center",
                )}
              >
                Learn more
              </Link>
            </div>
            <p className="mt-8 rounded-xl border border-dashed border-[#C9B8A8]/80 bg-white/50 px-4 py-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">For your flyer: </span>
              {FLYER_WEBSITE_LINE}
            </p>
          </div>
        </div>

        <Section
          id="about"
          title="Hi — I'm Carmen"
          intro="I offer reliable, low-stress babysitting for families in our church, Liberty University alumni circles, and family, friends, and hospital colleagues connected through my husband."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="border-border/70 bg-card/80 shadow-sm">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-[#F5E6EF] text-[#8B6B7A]">
                  <Heart className="size-5" aria-hidden />
                </div>
                <CardTitle className="font-heading text-xl">
                  Warm, steady care
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  I bring a calm, fun energy — reassuring for parents and
                  enjoyable for kids. Christian hospitality is at the heart of
                  how I serve families (gentle and welcoming, never heavy or
                  preachy).
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border/70 bg-card/80 shadow-sm">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-[#E8F4F8] text-[#5A7A8B]">
                  <Sparkles className="size-5" aria-hidden />
                </div>
                <CardTitle className="font-heading text-xl">
                  Many years with children
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  From infants through school age, I&apos;ve spent many years
                  working with children — in homes, church settings, and
                  everyday family life. Your routines and values matter to me.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Section>

        <div className="bg-secondary/40">
          <Section
            id="availability"
            title="When I'm available"
            intro="Afternoons through evenings, plus weekends. I can often start as early as early afternoon when you need cover for doctor visits or similar appointments."
          >
            <Card className="max-w-2xl border-border/70 bg-card shadow-sm">
              <CardContent className="flex gap-4 pt-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#E3F0E8] text-[#4A6B55]">
                  <CalendarDays className="size-6" aria-hidden />
                </div>
                <div className="space-y-2 text-muted-foreground">
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
        </div>

        <Section
          id="families"
          title="Who I sit for"
          intro="I'm open on ages and whether it's one child or more than one. We'll talk through what your kids need and what feels like a good fit."
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#F0EBF8] text-[#6B5A8B]">
              <Users className="size-7" aria-hidden />
            </div>
            <ul className="list-inside list-disc space-y-2 text-base leading-relaxed text-muted-foreground marker:text-[#C9A882] sm:text-lg">
              <li>Infants, toddlers, and school-age children</li>
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

        <div className="bg-secondary/40">
          <Section
            id="rates"
            title="Rates"
            intro="Negotiable. I'm fair and flexible — happy to find something that works for both of us."
          >
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Every family&apos;s schedule and needs are a little different. I&apos;m
              glad to discuss what works for you — whether it&apos;s a regular
              slot or occasional help.
            </p>
          </Section>
        </div>

        <Section
          id="photos"
          title="A glimpse of care"
          intro="Swap these placeholders for your own photos anytime — reading, play, snacks, or time outside."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {PHOTOS.map((photo) => (
              <figure
                key={photo.src}
                className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <div className="bg-secondary/40">
          <Section
            id="references"
            title="Kind words from families"
            intro="Placeholder references you can replace with real quotes and names when you're ready."
          >
            <div className="grid gap-5 md:grid-cols-3">
              {REFERENCES.map((ref) => (
                <Card
                  key={ref.name}
                  className="flex flex-col border-border/70 bg-card/90 shadow-sm"
                >
                  <CardHeader className="flex-1">
                    <CardDescription className="text-base leading-relaxed text-foreground">
                      &ldquo;{ref.quote}&rdquo;
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Separator className="mb-3" />
                    <p className="font-medium text-foreground">{ref.name}</p>
                    <p className="text-xs text-muted-foreground">{ref.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>
        </div>

        <Section
          id="contact"
          title="Get in touch"
          intro="Text or call 609-221-5318. I'd love to hear about your family and set up a time to meet."
        >
          <div className="flex flex-col gap-6 rounded-2xl border border-border/70 bg-gradient-to-br from-[#FDF8F3] to-[#EEF6F4] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-lg font-medium text-foreground">
                Ready when you are
              </p>
              <p className="mt-2 text-muted-foreground">
                The fastest way to reach me is a text or call — tell me your
                dates, ages, and what you&apos;re looking for.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Live site (after deploy):{" "}
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
                "h-auto min-h-12 shrink-0 rounded-full px-8 py-3 text-base",
              )}
            >
              <Phone className="size-5" aria-hidden />
              {PHONE_DISPLAY}
            </a>
          </div>
        </Section>

        <footer className="border-t border-border/60 bg-[#FAF7F4] py-10">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 text-sm text-muted-foreground sm:px-6">
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
            <p className="rounded-lg bg-white/60 px-3 py-2 text-xs sm:text-sm">
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
