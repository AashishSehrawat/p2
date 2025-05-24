import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// scroll function
export const scrollToSection = (ref) => {
  if (ref?.current) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};


