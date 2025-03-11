import { PublicationDetails } from "@/components/PublicationFeed/publication-details"

// This is the dynamic route page that will show details for a specific publication
export default function PublicationDetailsPage({ params }: { params: { id: string } }) {
  return <PublicationDetails id={params.id} />
}

