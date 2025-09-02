"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {getAdmin} from "@/lib/actions/staff.actions"
import { staffItem } from "@/lib/types"
import Loader from "@/components/Loader/loader";

const School = () => {


      const [admin, setAdmin] = useState<staffItem[]>([]);

              useEffect(()=>{
                      const fetchAdmin = async () => {
                              const adminData = await getAdmin();
                              setAdmin(adminData);
                      }
                      fetchAdmin();
              }, [])

 if(!admin || admin.length===0){
        return <div className="flex justify-center items-center h-screen" >
                <Loader/>
        </div>
 }
  return (
      
      <div className=" justify-center overflow-hidden -my-14">

            <div className=" my-24 flex flex-col gap-2">

                  
            {/* V I C E   C H A N C E L L O R*/}

            <div className={` my-24 wow fadeInUp w-full flex flex-col md:flex-row justify-center items-center mx-auto`} data-wow-delay=".1s" style={{ marginBottom: "10px"}}>
                  {admin.filter((v) => (
                        v.role==="VC"
                  )).map((v) => (
                        <div key={v.id} className=" ">
                              <div className=" flex flex-col justify-center  items-center">
                                    <Image src={v.photoUrl} alt="VC" width={400} height={200} className="rounded-lg"/>

                                    <h2 className="mb-4 text-center text-dark font-bold  !leading-tight text-black/70 dark:text-white sm:text-4xl">

                                          {v.name}
                                    </h2>
                                    <h1 className="mb-4 text-4xl font-bold text-[#FF0000] ">{v.role}</h1>
                              </div>

                        </div>
                        )

                  )}

            </div>
            <hr className="text-black text-3xl"/>


            <div >
                  <h1 className="text-center text-4xl font-bold text-dark"> Board Members</h1>
            </div>




      <div className="my-10 ml-0   grid grid-cols-1  md:grid md:grid-cols-4 gap-1 gap-y-3">
            {/* {error && <p>Error: {error}</p>}  */}
            { admin.filter((admin)=>admin.isAdmin && admin.role!="VC").map((admin) =>(
            <div key={admin.id} className=" flex flex-col ml-[10%] justify-center items-center">
                  <Image src={admin.photoUrl} alt="dean" layout="contain" width={400} height={200} className="rounded-lg" />
                  <h1 className=" text-black font-bold">{admin.name}</h1>
                  <h1 className=" text-black font-bold">{admin.qualification}</h1>
                  <h2 className="text-xs md:text-3xl font-bold !leading-tight text-[#FF0000] dark:text-white sm:text-4xl md:text-[30px]">
                        {admin.role}
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
