import Image from 'next/image'
import Button from './Button'

const Agriculture = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px] items-center text-center">
        Agriculture At Bugema University
        </h2>
        <p className="regular-16 mt-6 text-blue-800 xl:max-w-[520px]">
        “9 out of 10 people breathe polluted air”
        </p>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        We empower communities with accurate, hyperlocal and timely air quality data to drive air pollution mitigation actions
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/images/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
        <button
            type="button"
            className="ml-4 bg-blue-100 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
          >
            Get Involved
            <img src="/images/user.svg" alt="icon" className="inline-block w-4 h-4 ml-2" />
          </button>
          <button
            type="button"
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Explore Data
            <img src="/images/user.svg" alt="icon" className="inline-block w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      <div className=" flex flex-1 items-start">
      {/* <Image 
        src="/images/agric/agri.jpg" 
        alt="agriculture" 
        className=" w-full h-full object-cover"
        width={100}
        height={100}
        // style={{ filter: 'brightness(1.5)' }}
      /> */}
            <img
              src="/images/agric/agri.jpg"
              alt="Bugema University"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
      </div>
    </section>
  )
}

export default Agriculture