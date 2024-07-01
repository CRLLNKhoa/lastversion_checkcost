"use client";
import { cn } from "@/lib/cn";
import Link from "next/link";
import React, { useState } from "react";
import { FaCaretRight, FaChevronDown, FaChevronUp } from "react-icons/fa";

function MenuList({ title, list }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col duration-300 transition-all">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center select-none pl-2 group"
      >
        <div className="bg-black h-10 w-[6px] rounded-full duration-300  group-hover:bg-black/80 hover:text-white"></div>

        <h2
          className={cn(
            "text-md group-hover:bg-black/80 hover:text-white  duration-300 ml-1 h-10 flex-1 cursor-pointer rounded-ss-md rounded-es-md text-center text-md font-semibold p-4 flex items-center justify-between gap-2",
            "bg-black text-white"
          )}
        >
          {title}
          {open ? (
            <FaChevronUp className="text-xs" />
          ) : (
            <FaChevronDown className="text-xs" />
          )}
        </h2>
      </div>
      <div
        className={cn(
          "flex flex-col gap-2 px-4 h-0 duration-200 overflow-hidden transition-all ml-2",
          open && "h-auto mt-4"
        )}
      >
        {list.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center gap-2"
          >
            <FaCaretRight />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuList;
