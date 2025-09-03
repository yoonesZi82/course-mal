import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

function formatDiscount(discount: number): string {
  return `${discount}%`;
}

function formatVersion(version: string): string {
  return `v${version}`;
}

export { cn, formatPrice, formatDiscount, formatVersion };
