import { cn } from "@/lib/utils";

type WaveDividerProps = {
  /** Fill color for the wave (typically the section below). */
  fill: string;
  className?: string;
  /** Flip wave direction for variety. */
  flip?: boolean;
  /** Taller wave on larger screens. */
  tall?: boolean;
};

export function WaveDivider({
  fill,
  className,
  flip = false,
  tall = false,
}: WaveDividerProps) {
  return (
    <div
      className={cn(
        "relative z-[1] -mt-px w-full overflow-hidden leading-[0]",
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className={cn(
          "block w-full text-[fill]",
          tall ? "h-10 sm:h-14" : "h-7 sm:h-10",
          flip && "scale-y-[-1]",
        )}
        style={{ fill }}
      >
        <path d="M0,36 C240,8 480,52 720,28 C960,4 1200,48 1440,22 L1440,56 L0,56 Z" />
      </svg>
    </div>
  );
}
