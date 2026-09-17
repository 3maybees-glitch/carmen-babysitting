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
