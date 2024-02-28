import React from 'react';
import "../index.css";

export default function Card({ name, id }) {
  return (
    <div className="flex font-semibold cursor-pointer bg-white text-sm hover:border-[3px] hover:border-red-500">
      {/* Left side of the button */}
      <div className="p-1 bg-red-500">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
          width={20}
          alt="pokeball"
          className='pixel-img'
        />
      </div>

      {/* Right side of the button */}
      <div className="text-[#4e4e45] flex items-center justify-center pl-1 drop-shadow-[1px_1px_#a2b2b2]">
        {id}
        {'\t'}
        {name}
      </div>
    </div>
  );
}
