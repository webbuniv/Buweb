import AlumniRegistrationForm from "@/components/Alumni/AlumniRegistrationForm"
import Breadcrumb from "@/components/Common/Breadcrumb"

export default function AlumniRegisterPage() {
  return (
    <>
      <Breadcrumb
        pageName="Alumni Registration"
        description="Join the Bugema University Alumni Network and stay connected with your fellow graduates"
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="wow fadeInUp" data-wow-delay=".1s">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Join the Alumni Network
                </h2>
                <p className="text-base !leading-relaxed text-body-color md:text-lg">
                  Register to connect with fellow graduates, access exclusive events, and stay updated with university
                  news.
                </p>
              </div>
              <AlumniRegistrationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
