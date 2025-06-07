import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { appwriteConfig } from "./appwrite/config"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseStringify<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function constructFileUrl(fileId: string): string {
  return `https://cloud.appwrite.io/v1/storage/buckets/${appwriteConfig.bucketId}/files/${fileId}/view?project=${appwriteConfig.projectId}`
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}
