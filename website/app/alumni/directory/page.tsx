import Breadcrumb from "@/components/Common/Breadcrumb"
import AlumniDirectoryFull from "@/components/Alumni/AlumniDirectoryFull"

const AlumniDirectoryPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Alumni Directory"
        description="Connect with fellow Bugema University graduates from around the world."
      />
      <AlumniDirectoryFull />
    </>
  )
}

export default AlumniDirectoryPage
