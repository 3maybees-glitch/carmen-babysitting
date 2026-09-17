"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { NAV_ITEMS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="#top"
          className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl"
          onClick={() => setOpen(false)}
        >
          Carmen Maybee
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden rounded-full shadow-sm sm:inline-flex",
            )}
          >
            <Phone className="size-4" aria-hidden />
            Call
          </a>

          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border/60 bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${PHONE_TEL}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-2 w-full rounded-full",
            )}
          >
            <Phone className="size-4" aria-hidden />
            {PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </header>
  );
}
