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

export const validatePhoneNumber = (phoneNumber: string) => {
  const phoneRegex = /^\d{7,10}$/;
  return phoneRegex.test(phoneNumber);
};

export const validateBudget = (value: string): boolean => {
  const budgetRegex = /(?:[\$\€\£\₹]|[A-Za-z]{1,3})?\s*\d{1,3}(?:,\d{3})*(?:\.\d{1,2})?\s*(?:[\$\€\£\₹]|[A-Za-z]{1,3})?/;
  return budgetRegex.test(value);
};

export const validateName = (value: string) => {
  const namePattern = /^[a-zA-Z]{2,}(?:[-'\s][a-zA-Z]+)*$/;
  return namePattern.test(value.trim());
};

export const formatDownloads = (downloads: number) => {
  if (downloads >= 1000) {
    const result = Math.floor(downloads / 1000);
    return `${result}K+`;
  }
  return `${downloads}+`;
};

export const gridButtonOpen = "gridButton";
export const deliveringTailored = "deliveringTailored";
