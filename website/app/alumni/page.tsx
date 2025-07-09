import Breadcrumb from "@/components/Common/Breadcrumb"
import AlumniHero from "@/components/Alumni/AlumniHero"
import AlumniStats from "@/components/Alumni/AlumniStats"
import AlumniDirectory from "@/components/Alumni/AlumniDirectory"
import AlumniEvents from "@/components/Alumni/AlumniEvents"
import AlumniNews from "@/components/Alumni/AlumniNews"
import AlumniDonation from "@/components/Alumni/AlumniDonation"

const AlumniPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Alumni"
        description="Connect with fellow graduates, advance your career, and give back to your alma mater."
      />
      {/* <AlumniHero /> */}
      {/* <AlumniStats /> */}
      <AlumniDirectory />
      {/* <AlumniEvents /> */}
      {/* <AlumniNews /> */}
      {/* <AlumniDonation /> */}
    </>
  )
}

export default AlumniPage
