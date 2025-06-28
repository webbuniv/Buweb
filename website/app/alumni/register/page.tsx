import Breadcrumb from "@/components/Common/Breadcrumb"
import AlumniRegistrationForm from "@/components/Alumni/AlumniRegistrationForm"

const AlumniRegisterPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Alumni Registration"
        description="Join the Bugema University Alumni Network and stay connected with your fellow graduates."
      />
      <AlumniRegistrationForm />
    </>
  )
}

export default AlumniRegisterPage
