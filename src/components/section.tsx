import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
  intro?: string;
};

export function Section({ id, title, intro, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-14 sm:py-16", className)}
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
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {intro}
            </p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
