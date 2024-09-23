// import { useState } from 'react';




const Home = () => {


  

  return (
    <div className="flex w-full min-h-screen rounded-[2rem]">
      
      <div className="w-full sm:w-3/4 bg-white p-8 shadow-lg flex justify-between border items-start space-x-8 rounded-[2rem]">
          
          <div className="flex items-center space-x-2">
            <button className="bg-black text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
              Start
            </button>
            <span className="text-gray-500">
              press <span className="font-semibold">Enter</span> 
              <span className="inline-block align-middle">⎆</span>
            </span>
          </div>
        </div>

        
        <div className="sm:w-1/2 flex h-full mt-16">
          
        </div>
      </div>
    
  );
};

export default Home;
