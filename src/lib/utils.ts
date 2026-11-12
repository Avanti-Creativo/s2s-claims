import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PHONE_NUMBER = "(830) 214-2701";
export const PHONE_HREF = "tel:+18302142701";
export const EMAIL = "admin@s2sclaims.com";
export const INTAKE_URL = "https://app.drodat.com/intake/s/BACBF-5CB6D";
