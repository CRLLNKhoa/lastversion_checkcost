"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { cn } from "@/lib/cn";
function OutputDB({ data }) {
  const [open, setOpen] = useState(99999);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  if (!data || data.length === 0) {
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
          <Accordion
            key={index}
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
                <div
                  key={index}
                  className={cn(
                    "grid grid-cols-4 text-center w-full font-bold text-white",
                    item.cost > 262 &&
                      item.cost <= 285 &&
                      "bg-[#7CFC00]/70 text-black",
                    item.cost > 285 &&
                      item.cost <= 308 &&
                      "bg-[#00FF00]/70 text-black",
                    item.cost > 308 && item.cost <= 331 && "bg-[#008000]/70",
                    item.cost > 331 &&
                      item.cost <= 354 &&
                      "bg-[#FFD700]/70 text-black",
                    item.cost > 354 && item.cost <= 377 && "bg-[#FFA500]/70",
                    item.cost > 377 && item.cost <= 400 && "bg-[#FF8C00]/70",
                    item.cost > 400 && item.cost <= 423 && "bg-[#FF6347]/70",
                    item.cost > 423 && item.cost <= 446 && "bg-[#FF0000]/70",
                    item.cost > 446 && item.cost <= 469 && "bg-[#DC143C]/70",
                    item.cost > 469 && item.cost <= 562 && "bg-[#8B0000]/70"
                  )}
                >
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

export default OutputDB;
