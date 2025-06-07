import { EventDetails } from "@/components/events/event-details"

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  return <EventDetails eventId={params.id} />
}
