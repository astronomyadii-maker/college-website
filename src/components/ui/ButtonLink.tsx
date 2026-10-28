import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type To = "/" | "/about" | "/academics" | "/departments" | "/admissions" | "/student-profile" | "/placements" | "/faculty" | "/hostel" | "/contact" | "/gallery" | "/news";

export function ButtonLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: To;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "gold";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition",
        variant === "primary" && "bg-maroon text-paper hover:bg-navy",
        variant === "gold" && "bg-gold text-navy-deep hover:bg-gold-soft",
        variant === "ghost" && "border border-paper/40 bg-navy/20 text-paper hover:bg-paper/10",
        className,
      )}
    >
      {children}
    </Link>
  );
}
