import React, { Children } from 'react'

const Model = ({isvisible, onClose, children}) => {
      if (!isvisible) return null;
const handleclose = (e)=>{
      if( e.target.id === 'wrapper ') onClose();
}
  return (
      <>
        
            <div className="inset-0 backdrop-blur-sm flex justify-center items-center w-full h-2/4 mr-0 ml-0 overflow-auto bg-white" id="wrapper" onClick={handleclose}>
                  <div style={{ position: 'absolute', top: '0', right: '0' }}>
                        <button className="text-black text-xl place-self-end ml-5 rounded-full bg-black" onClick={onClose}>
                        <span className="text-white text-xl rounded-full">X</span>
                        </button>
                  </div>
                        
                  <h5 className='text-black'>Agricultural Marketting System.
                        ClyCites website serves as the central hub for revolutionizing agriculture in Uganda and across Africa. 
                        Seamlessly connecting farmers, agribusinesses, retailers, and consumers, our platform offers a dynamic 
                        online marketplace designed to simplify the buying and selling of agricultural products.
                        With comprehensive product listings, secure transactions, and invaluable market insights, 
                        ClyCites empowers stakeholders of all sizes to thrive in the digital age of agriculture.
                        Join us in transforming the agricultural landscape and building a sustainable future for 
                        farmers and consumers alike
                  </h5>

                  <h5 className='text-black'>Agricultural Marketting System.
                        ClyCites website serves as the central hub for revolutionizing agriculture in Uganda and across Africa. 
                        Seamlessly connecting farmers, agribusinesses, retailers, and consumers, our platform offers a dynamic 
                        online marketplace designed to simplify the buying and selling of agricultural products.
                        With comprehensive product listings, secure transactions, and invaluable market insights, 
                        ClyCites empowers stakeholders of all sizes to thrive in the digital age of agriculture.
                        Join us in transforming the agricultural landscape and building a sustainable future for 
                        farmers and consumers alike
                  </h5>
                  <h5 className='text-black'>Agricultural Marketting System.
                        ClyCites website serves as the central hub for revolutionizing agriculture in Uganda and across Africa. 
                        Seamlessly connecting farmers, agribusinesses, retailers, and consumers, our platform offers a dynamic 
                        online marketplace designed to simplify the buying and selling of agricultural products.
                        With comprehensive product listings, secure transactions, and invaluable market insights, 
                        ClyCites empowers stakeholders of all sizes to thrive in the digital age of agriculture.
                        Join us in transforming the agricultural landscape and building a sustainable future for 
                        farmers and consumers alike
                  </h5>
                  <h5 className='text-black'>Agricultural Marketting System.
                        ClyCites website serves as the central hub for revolutionizing agriculture in Uganda and across Africa. 
                        Seamlessly connecting farmers, agribusinesses, retailers, and consumers, our platform offers a dynamic 
                        online marketplace designed to simplify the buying and selling of agricultural products.
                        With comprehensive product listings, secure transactions, and invaluable market insights, 
                        ClyCites empowers stakeholders of all sizes to thrive in the digital age of agriculture.
                        Join us in transforming the agricultural landscape and building a sustainable future for 
                        farmers and consumers alike
                  </h5>
                  <h5 className='text-black'>Agricultural Marketting System.
                        ClyCites website serves as the central hub for revolutionizing agriculture in Uganda and across Africa. 
                        Seamlessly connecting farmers, agribusinesses, retailers, and consumers, our platform offers a dynamic 
                        online marketplace designed to simplify the buying and selling of agricultural products.
                        With comprehensive product listings, secure transactions, and invaluable market insights, 
                        ClyCites empowers stakeholders of all sizes to thrive in the digital age of agriculture.
                        Join us in transforming the agricultural landscape and building a sustainable future for 
                        farmers and consumers alike
                  </h5>
                  <h5 className='text-black'>Agricultural Marketting System.
                        ClyCites website serves as the central hub for revolutionizing agriculture in Uganda and across Africa. 
                        Seamlessly connecting farmers, agribusinesses, retailers, and consumers, our platform offers a dynamic 
                        online marketplace designed to simplify the buying and selling of agricultural products.
                        With comprehensive product listings, secure transactions, and invaluable market insights, 
                        ClyCites empowers stakeholders of all sizes to thrive in the digital age of agriculture.
                        Join us in transforming the agricultural landscape and building a sustainable future for 
                        farmers and consumers alike
                  </h5>
                  <h5 className='text-black'>Agricultural Marketting System.
                        ClyCites website serves as the central hub for revolutionizing agriculture in Uganda and across Africa. 
                        Seamlessly connecting farmers, agribusinesses, retailers, and consumers, our platform offers a dynamic 
                        online marketplace designed to simplify the buying and selling of agricultural products.
                        With comprehensive product listings, secure transactions, and invaluable market insights, 
                        ClyCites empowers stakeholders of all sizes to thrive in the digital age of agriculture.
                        Join us in transforming the agricultural landscape and building a sustainable future for 
                        farmers and consumers alike
                  </h5>
                  <h5 className='text-black'>Agricultural Marketting System.
                        ClyCites website serves as the central hub for revolutionizing agriculture in Uganda and across Africa. 
                        Seamlessly connecting farmers, agribusinesses, retailers, and consumers, our platform offers a dynamic 
                        online marketplace designed to simplify the buying and selling of agricultural products.
                        With comprehensive product listings, secure transactions, and invaluable market insights, 
                        ClyCites empowers stakeholders of all sizes to thrive in the digital age of agriculture.
                        Join us in transforming the agricultural landscape and building a sustainable future for 
                        farmers and consumers alike
                  </h5>
                  <h5 className='text-black'>Agricultural Marketting System.
                        ClyCites website serves as the central hub for revolutionizing agriculture in Uganda and across Africa. 
                        Seamlessly connecting farmers, agribusinesses, retailers, and consumers, our platform offers a dynamic 
                        online marketplace designed to simplify the buying and selling of agricultural products.
                        With comprehensive product listings, secure transactions, and invaluable market insights, 
                        ClyCites empowers stakeholders of all sizes to thrive in the digital age of agriculture.
                        Join us in transforming the agricultural landscape and building a sustainable future for 
                        farmers and consumers alike
                  </h5>
                  
                              
                  
            </div>
      </>
      
  );
};

export default Model;