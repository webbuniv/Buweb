import Image from "next/image";
import nurses1 from "../../public/images/nav/nurses1.jpg";
import image from "../../public/images/nav/labs.jpg";
import scie from "../../public/images/scienceTech/scie.png";

const Course = ({
  tittle, 
  subtittle,  
  topImg,
  mb = "1px",
}: {
  tittle:string;
  subtittle:string;
  topImg:string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
      
      <div className="mx-0">

      
            <div className="overflow-hidden relative -my-10 bg-black w-full left-0" >
                  <div className="absolute justify-center ml-[2%] my-[24%]"> 
                        <h1 className="font-bold text-start text-xs text-white md:text-7xl">
                              {tittle} 
                        </h1>
                        <h1 className=" hidden my-5 text-start  text-white md:text-3xl md:block ">{subtittle}</h1>
                        </div>
                        
                  <Image src={topImg} alt='img' objectFit="contain" width={1920} height={500} className="opacity-50 "/>
                  
            </div>

            <div className=" overflow-hidden md:overflow-auto flex flex-col space-y-12">
                  

                  <div className=" my-24 flex flex-col gap-2">

            
                        {/* Dean's Message section div */}
                        <div
                        className={`wow mt-20 fadeInUp w-full gap-16 max-w-full justify-center items-center  md:flex ` }
                        data-wow-delay=".1s"
                        style={{ marginBottom: mb }}>

                              


                        </div>

                        <div
                        className={` my-24 wow fadeInUp w-full flex flex-col md:flex-row justify-center items-center mx-auto`}
                        data-wow-delay=".1s" style={{ marginBottom: mb }}>

                              


                        </div>
                       

                  </div>

                  
            </div>
      </div>


    
  );
};

export default Course;
