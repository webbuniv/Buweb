import AlumniRegistrationForm from "@/components/Alumni/AlumniRegistrationForm"
import Breadcrumb from "@/components/Common/Breadcrumb"

export default function AlumniRegisterPage() {
  return (
    <>
      <Breadcrumb
        pageName="Alumni Registration"
        description="Join the Bugema University Alumni Association and reconnect with your alma mater"
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Join Our Alumni Community
              </h1>
              <p className="text-base text-body-color">
                Register to connect with fellow graduates, access exclusive resources, and stay updated with university
                news and events.
              </p>
            </div>
            <AlumniRegistrationForm />
          </div>
        </div>
      </section>
    </>
  )
}
