import { NewsDetails } from "@/components/news/news-details"

export default function NewsDetailsPage({ params }: { params: { id: string } }) {
  return <NewsDetails newsId={params.id} />
}
