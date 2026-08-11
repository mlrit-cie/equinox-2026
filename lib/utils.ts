/* Class joiner. Plain join is enough here — nothing merges conflicting Tailwind
   utilities, so clsx + tailwind-merge would be two deps for zero behaviour. */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
