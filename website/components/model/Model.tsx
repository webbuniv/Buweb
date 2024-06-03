import React, { Children } from 'react'

const Model = ({isvisible, onClose, children}) => {
      if (!isvisible) return null;
const handleclose = (e)=>{
      if( e.target.id === 'wrapper ') onClose();
}
  return (
      <>
        
            <div className=" fixed inset-0 backdrop-blur-sm flex justify-center items-center w-full h-4/5 my-24 overflow-auto bg-white" id="wrapper" onClick={handleclose}>
                  
                  <div className='flex'>
                        {/* <button style = {border-radius: '50%';width: '30px';height: '30px';background-color: 'red';color: 'white';font-size: '20px';text-align: 'center';line-height: '30px';position: 'absolute';right: '10px';top: '10px'} onClick={onClose}>
                        <span className="text-black text-xl rounded-full">X</span>
                        </button> */}
                        <button 
                              style={{
                              borderRadius: '50%',
                              width: '30px',
                              height: '30px',
                              backgroundColor: 'black',
                              borderColor:'black',
                              color: 'white',
                              fontSize: '20px',
                              textAlign: 'center',
                              lineHeight: '30px',
                              position: 'absolute',
                              right: '10px',
                              top: '10px',
                              }}
                              onClick={onClose}>
                              <span className="text-white text-xl">X</span>
                        </button>

                  </div>             
                  
            </div>
      </>
      
  );
};

export default Model;