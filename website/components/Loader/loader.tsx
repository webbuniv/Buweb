import React from 'react'
import { Oval } from 'react-loader-spinner'

const loader = () => {
  return (
     <div className="flex  opacity-95 w-[100%] h-[100%] items-center justify-center animate-pulse">
                            <div className="flex"><h1 className='text-sm md:text-2xl text-dark  '>l</h1></div>
                            <div className="flex">
                                    <Oval
                                            visible={true}
                                            height="25"
                                            width="25"
                                            color="#0000FF"
                                            secondaryColor="#FFD700"
                                            ariaLabel="oval-loading"
                                            />
                            </div>
                                            <div className="flex text-sm md:text-2xl text-dark  ">a<span className="text-gold">ding</span>.  .  .</div>
                                    </div>
  )
}

export default loader