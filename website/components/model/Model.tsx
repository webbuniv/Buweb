import React, { Children } from 'react'

const Model = ({isvisible, onClose, children}) => {
      if (!isvisible) return null;
const handleclose = (e)=>{
      if( e.target.id === 'wrapper ') onClose();
}
  return (
      <>
        
<div
className="fixed inset-0 bg-white backdrop-blur-sm flex justify-center items-center w-full h-screen overflow-auto"
id="wrapper"
onClick={onClose}>
      <h5 className='text-white'>Agricultural Marketting System.
            ClyCites website serves as the central hub for revolutionizing agriculture in Uganda and across Africa. 
            Seamlessly connecting farmers, agribusinesses, retailers, and consumers, our platform offers a dynamic 
            online marketplace designed to simplify the buying and selling of agricultural products.
            With comprehensive product listings, secure transactions, and invaluable market insights, 
            ClyCites empowers stakeholders of all sizes to thrive in the digital age of agriculture.
            Join us in transforming the agricultural landscape and building a sustainable future for 
            farmers and consumers alike
      </h5>
      
<div className="w-full flex flex-col bg-primary">
  <div className="bg-white p-2 rounded text-black h-full">
    <button className="text-black text-xl place-self-end ml-5" onClick={onClose}>
      X
    </button>
    <h5 className='text-white'>Agricultural Marketting System.
            ClyCites website serves as the central hub for revolutionizing agriculture in Uganda and across Africa. 
            Seamlessly connecting farmers, agribusinesses, retailers, and consumers, our platform offers a dynamic 
            online marketplace designed to simplify the buying and selling of agricultural products.
            With comprehensive product listings, secure transactions, and invaluable market insights, 
            ClyCites empowers stakeholders of all sizes to thrive in the digital age of agriculture.
            Join us in transforming the agricultural landscape and building a sustainable future for 
            farmers and consumers alike
      </h5>
    <div>
     
    </div>
  </div>
</div>
</div>
      </>
      
  );
};

export default Model;