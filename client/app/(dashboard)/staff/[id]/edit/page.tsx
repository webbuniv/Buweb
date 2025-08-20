import { EditStaff } from "@/components/staff/edit-staff"

interface EditStaffPageProps {
  params: {
    id: string
  }
}

export default function EditStaffPage({ params }: EditStaffPageProps) {
  return <EditStaff staffId={params.id} />
}
