"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { cn } from "@/lib/cn";
function Output({ data }) {
  const [open, setOpen] = useState(99999);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  if (!data  || data.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <h2 className="font-bold">Output:</h2>
        <div className="border p-4 h-[420px] rounded-md flex flex-col items-center justify-center">
          <img
            src="/empty.svg"
            alt="empty_svg"
            className="w-[124px] h-[124px]"
          />
          <p className="text-xs">Không có dữ liệu</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="font-bold">Output:</h2>
      <div className="border p-4 h-[420px] overflow-y-auto rounded-md flex flex-col items-start">
        {data?.map((item, index) => (
          <Accordion key={index}
            open={open === index}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(index)}
              className={`border-b-0 transition-colors text-sm w-full flex items-center justify-between ${
                open === index ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              <p>Cost: {item?.cost}</p>
              <p className="text-red-500">Count: {item?.items.length}</p>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal flex flex-col gap-2">
              <div className="grid grid-cols-4 text-center font-bold text-blue-600">
                <p>DAY</p>
                <p>SKIP</p>
                <p>TICKETS</p>
                <p>COST</p>
              </div>
              {item?.items?.map((item, index) => (
                <div key={index} className={cn(
                  "grid grid-cols-4 text-center w-full font-bold text-white",
                  item.cost > 161 &&
                    item.cost < 184 &&
                    "bg-[#7CFC00]/70 text-black",
                  item.cost > 184 &&
                    item.cost < 207 &&
                    "bg-[#00FF00]/70 text-black",
                  item.cost > 207 && item.cost < 230 && "bg-[#008000]/70",
                  item.cost > 230 &&
                    item.cost < 253 &&
                    "bg-[#FFD700]/70 text-black",
                  item.cost > 253 && item.cost < 276 && "bg-[#FFA500]/70",
                  item.cost > 276 && item.cost < 299 && "bg-[#FF8C00]/70",
                  item.cost > 299 && item.cost < 322 && "bg-[#FF6347]/70",
                  item.cost > 322 && item.cost < 345 && "bg-[#FF0000]/70",
                  item.cost > 345 && item.cost < 368 && "bg-[#DC143C]/70",
                  item.cost > 368 && item.cost < 385 && "bg-[#8B0000]/70"
                )}>
                  <p>{item.day}</p>
                  <p>{Math.floor(item.skipp)}</p>
                  <p>{Math.floor(item.ticket)}</p>
                  <p>{Math.round(item.cost)}</p>
                </div>
              ))}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Output;
