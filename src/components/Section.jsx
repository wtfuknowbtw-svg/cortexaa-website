import { cn } from "../lib/utils";

export default function Section({
  id,
  children,
  className,
  fullWidth = false,
}) {
  return (
    <section
      id={id}
      className={cn("relative py-20 overflow-hidden", className)}
    >
      <div
        className={cn(
          "relative mx-auto px-4 sm:px-6 lg:px-8",
          !fullWidth && "max-w-7xl"
        )}
      >
        {children}
      </div>
    </section>
  );
}
