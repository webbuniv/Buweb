import { EditNews } from "@/components/news/edit-news"

interface EditNewsPageProps {
  params: {
    id: string
  }
}

export default function EditNewsPage({ params }: EditNewsPageProps) {
  return <EditNews newsId={params.id} />
}
