/**
 * Helper function to generate a file URL from a file ID
 * This is used only for preview purposes and not for database storage
 */
export function getFilePreviewUrl(fileId: string): string {
  return `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${fileId}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`
}
