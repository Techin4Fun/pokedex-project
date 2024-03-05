import React from 'react';
import "../index.css";

export default function Display({ name, image, topColor1, bottomColor1, typeName1, typeName2, topColor2, bottomColor2, animation }) {

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
        <img src={image} alt={name} className={animation + ' pixel-img mx-auto'}/>

        {/* Seen and Owned*/}
        <div className='text-[#4e4e45] bg-red-500 border-[3px] border-black rounded-md'>
          <div className='bg-red-300 mx-4'>
            <div className='bg-white mx-1 px-2'>


              <div className='text-center pb-1'>
                <span className='drop-shadow-[1px_1px_#a2b2b2]'>Types:</span>
              </div>

              <div className='flex gap-1 pb-1'>
                <div className="flex flex-col justify-between text-xs w-12 h-5 bg-slate-500 rounded-md relative font-bold text-white">
                    <div className={topColor1 + " w-full h-1/2 rounded-t-sm"}></div>
                    <div className={bottomColor1 + " w-full h-1/2 rounded-b-sm"}></div>
                    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-56%] drop-shadow-[1px_1px_#4e4e45]">{typeName1}</div>
                </div>
                <div className="flex flex-col justify-between text-xs w-12 h-5 bg-slate-500 rounded-md relative font-bold text-white">
                    <div className={topColor2 + " w-full h-1/2 rounded-t-sm"}></div>
                    <div className={bottomColor2 + " w-full h-1/2 rounded-b-sm"}></div>
                    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-56%] drop-shadow-[1px_1px_#4e4e45]">{typeName2}</div>
                </div>
              </div>


            </div>              
          </div>           
        </div>


    </div>
  );
}
