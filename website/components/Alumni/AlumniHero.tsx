import Link from "next/link"

const AlumniHero = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Welcome to the Bugema University Alumni Network
              </h1>
              <p className="mb-12 text-base !leading-relaxed text-white opacity-90 sm:text-lg md:text-xl">
                Connect with fellow graduates, advance your career, and give back to your alma mater. Join thousands of
                Bugema University alumni making a difference worldwide.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/alumni/register"
                  className="rounded-md bg-white py-4 px-8 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-opacity-90"
                >
                  Join Alumni Network
                </Link>
                <Link
                  href="/alumni/directory"
                  className="rounded-md border-2 border-white py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-white hover:text-primary"
                >
                  Browse Directory
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
          <defs>
            <linearGradient
              id="paint0_linear_25:217"
              x1="652.5"
              y1="40"
              x2="37.5"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.08" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <svg width="364" height="201" viewBox="0 0 364 201" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_25:218)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:218"
              x1="184.389"
              y1="69.2405"
              x2="184.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default AlumniHero
