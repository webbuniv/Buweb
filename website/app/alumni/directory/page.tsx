import AlumniDirectoryFull from "@/components/Alumni/AlumniDirectoryFull"
import Breadcrumb from "@/components/Common/Breadcrumb"

export default function AlumniDirectoryPage() {
  return (
    <>
      <Breadcrumb
        pageName="Alumni Directory"
        description="Connect with Bugema University graduates from around the world"
      />
      <AlumniDirectoryFull />
    </>
  )
}
