import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateText(text: string) {
  return text.length > 200 ? text.slice(0, 200) + "..." : text;
}

export const validateEmail = (email: string) => {
  const emailRegex = /^(?![0-9]+@[0-9]+\.[a-zA-Z]{2,}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};