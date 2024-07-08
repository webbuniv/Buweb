"use client";
import Image from "next/image";
import nurses1 from "../../public/images/nav/nurses1.jpg";
// import image from "../../public/images/nav/labs.jpg";
import scie from "../../public/images/scienceTech/scie.png";
import image from "@/public/images/nav/labs.jpg";
import { useState, useEffect } from "react";

const School = ({
  tittle, 
  subtittle,  
  topImg,
  dean,
  deanImage,
  message,
  preamble,
  goal,
  mb = "10px",
}: {
  tittle:string;
  subtittle:string;
  topImg:string;
  dean: string;
  deanImage: string;
  message: string;
  preamble: string;
  goal: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {


      const [admin, setAdmin] = useState([]);
      const [vc, setVc ] = useState ([null])
      const [error, setError] = useState(null);
      const vc_id = "668ba165d23a5f9c4719ae5b"

      useEffect(() => {
        const fetchAdmin = async () => {
          try {
            const response = await fetch("https://buweb.onrender.com/team", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
    
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
    
            const data = await response.json();
            const reversedData = data.slice(0).reverse();
            console.log(data);
            setAdmin(reversedData);

            const vicechancellor = data.filter(vice => vice._id === vc_id );
            console.log(vicechancellor);
            setVc(vicechancellor);

          } catch (err) {
            setError(err.message);
          }
        };
    
        fetchAdmin();
      }, []);


  return (
      
      <div className=" justify-center overflow-hidden -my-14">

            <div className=" my-24 flex flex-col gap-2">

                  
            {/* V I C E   C H A N C E L L O R*/}

            <div className={` my-24 wow fadeInUp w-full flex flex-col md:flex-row justify-center items-center mx-auto`} data-wow-delay=".1s" style={{ marginBottom: mb }}>
                  {vc.map((v) => (
                        v && (
                        <div key={v._id} className=" ">
                              <div className=" flex flex-col justify-center  items-center">
                                    <Image src={v.image_url} alt="VC" width={400} height={200} className="rounded-lg"/>

                                    <h2 className="mb-4 text-center text-dark font-bold  !leading-tight text-black/70 dark:text-white sm:text-4xl">
                                          {v.name}
                                    </h2>
                                    <h1 className="mb-4 text-4xl font-bold text-[#FF0000] ">{v.position}</h1>
                              </div>

                        </div>
                        )

                  ))}

            </div>
            <hr className="text-black text-3xl"/>


            <div >
                  <h1 className="text-center text-4xl font-bold text-dark"> Board Members</h1>
            </div>


      {/* L E C T U R E R S */}

      <div className="my-10 ml-0  flex grid grid-cols-1  md:grid md:grid-cols-4 gap-1 gap-y-3">
            {error && <p>Error: {error}</p>} 
            { admin.map((admin) =>(
            <div key={admin.id} className=" flex flex-col ml-[10%] justify-center items-center">
                  <Image src={admin.image_url} alt="dean" layout="contain" width={400} height={200} className="rounded-lg" />
                  <h1 className=" text-black font-bold">{admin.name}</h1>

                  <h2 className="text-xs md:text-3xl font-bold !leading-tight text-[#FF0000] dark:text-white sm:text-4xl md:text-[30px]">
                        {admin.position}
                  </h2>                  
                        
                  
            </div>))}

            </div>

            </div>
            
            {/* <div className=" overflow-hidden md:overflow-auto flex flex-col space-y-12">
                  
            </div> */}
      </div>


    
  );
};

export default School;
