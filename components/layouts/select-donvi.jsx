"use client";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import data from "@/jsons/don-vi.json";

function SelectDonvi({ onChangeValue }) {
  const [isShow, setIsShow] = useState(false);
  const [value,setValue] = useState("<1k")

  const handleOnChange = (val,label) => {
    onChangeValue(val)
    setValue(label)
    setIsShow(false)
  };

  return (
   <div className="relative">
      <div
        onClick={() => setIsShow(!isShow)}
        className=" relative h-10 w-[64px] border-l border-gray-500 flex items-center
        justify-between px-2 cursor-pointer select-none"
      >
        <p>{value}</p>
        <FaCaretDown />
       
      </div>
       {isShow && (
        <div
          className="absolute w-24 py-2 h-[200px] overflow-y-auto text-center rounded-md 
        shadow-md top-[100%] border text-sm 
        translate-y-2 flex flex-col gap-1
      bg-white z-50 right-0"
        >
          {data.map((item, index) => (
            <p onClick={() => handleOnChange(item.value,item.label)} className="cursor-pointer hover:bg-blue-300 hover:text-white py-1" key={index}>
              {item.label}
            </p>
          ))}
        </div>
      )}
   </div>
  );
}

export default SelectDonvi;
