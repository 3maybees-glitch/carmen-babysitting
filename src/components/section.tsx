import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
  intro?: string;
  /** Pastel band background (Tailwind class). */
  bandClassName?: string;
};

export function Section({
  id,
  title,
  intro,
  className,
  bandClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-14 sm:py-16",
        bandClassName,
        className,
      )}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2
            id={`${id}-heading`}
            className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-3 text-base leading-relaxed text-foreground/80 sm:text-lg">
              {intro}
            </p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
