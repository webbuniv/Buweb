import { EditEvent } from "@/components/events/edit-event"

interface EditEventPageProps {
  params: {
    id: string
  }
}

export default function EditEventPage({ params }: EditEventPageProps) {
  return <EditEvent eventId={params.id} />
}
