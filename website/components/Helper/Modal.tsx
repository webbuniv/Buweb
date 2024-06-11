import React from 'react'

interface Props {
    hideModal: () => void
}

export default function Modal({hideModal}: Props) {
  return (
    <div className='relative'>

        {/* Modal overlay */}
        <div 
            onClick={hideModal}
            className='fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] z-[20]'></div>

        {/* Main modal */}
        <div className='fixed top-[50%] left-[50%] w-[350px] h-[250px] md:w-[500px] md:h-[300px] lg:w-[800px] lg:h-[500px] z-[21] translate-x-[-50%] translate-y-[-50%]'>
            <iframe 
                src="https://www.youtube.com/embed/uadddadon-M?si=LdcIJDUgltF0y28f"
                className='w-full h-full'>
            </iframe>
        </div>

    </div>
  )
}