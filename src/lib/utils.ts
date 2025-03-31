import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateText(text: string,len: number) {
  return text.length > len ? text.slice(0, len) + "..." : text;
}

export const validateEmail = (email: string) => {
  const emailRegex = /^(?![0-9]+@[0-9]+\.[a-zA-Z]{2,}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const formatDownloads = (downloads: number) => {
  if (downloads >= 1000) {
    const result = Math.floor(downloads / 1000);
    return `${result}K+`;
  }
  return downloads.toString();
};
