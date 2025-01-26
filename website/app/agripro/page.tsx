import Image from 'next/image'
import AgricPro from '@/components/AgriculturePro';

const AgriProPage = () => {
  return (
      // <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <>
      <div 
        className="max-container lg:h-[600px] h-[300px] mt-[100px] -my-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/agric/crop.jpeg)' }}
      >
        <div className="container mx-auto ">
          <div className="flex flex-wrap text-center justify-center al -mx-6 gap-2 lg:gap-6 ">
            <h3 className=" mb-2 lg:mt-40 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-4xl"> Agriculture </h3>
          </div>
          <p className="text-center justify-center">Opportunities and joint research collaborations</p>
          <div className="flex justify-between items-center w-full mt-20 "> 
          </div>
        </div>
      </div>
        <AgricPro/>
</>

  )
}

export default AgriProPage