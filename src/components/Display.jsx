import React from 'react';
import "../index.css";

export default function Display({ name, seen, owned, image }) {
  return (
    <div className="w-[175px] flex flex-col items-center justify-between mx-2">

      {/* Pokemon Name */}
        <div className='bg-red-500 border-[3px] border-black rounded-md mb-2'>
          <div className='bg-red-300 mx-4'>
            <div className='bg-white mx-1 px-2'>
              <p className='text-md text-[#4e4e45] drop-shadow-[1px_1px_#a2b2b2]'>{name}</p>
            </div>              
          </div>           
        </div>

        {/* Pokemon Image */}
        <img src={image} alt={name} className='pixel-img mx-auto animate-jump'/>

        {/* Seen and Owned*/}
        <div className='text-[#4e4e45] bg-red-500 border-[3px] border-black rounded-md'>
          <div className='bg-red-300 mx-4'>
            <div className='bg-white mx-1 px-2'>


              <div className='flex justify-between'>
                <span className='drop-shadow-[1px_1px_#a2b2b2]'>Seen:</span>
                <span className='drop-shadow-[1px_1px_#a2b2b2]'>{seen}</span>
              </div>

              <div className='flex justify-between'>
                <span className='drop-shadow-[1px_1px_#a2b2b2]'>Owned:</span>
                <span className='drop-shadow-[1px_1px_#a2b2b2]'>{owned}</span>
              </div>


            </div>              
          </div>           
        </div>


    </div>
  );
}
