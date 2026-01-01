import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function validateZip(zip: string): boolean {
  return /^\d{5}$/.test(zip)
}

export function formatPhoneForDisplay(phone: string): string {
  return phone
}
