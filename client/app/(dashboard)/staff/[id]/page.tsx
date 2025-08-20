import { StaffDetails } from "@/components/staff/staff-details"

export default function StaffDetailsPage({ params }: { params: { id: string } }) {
  return <StaffDetails staffId={params.id} />
}
