"use client";
import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Input } from "@material-tailwind/react";
import { CiViewTimeline } from "react-icons/ci";
import { PiTimerLight } from "react-icons/pi";
import array from "@/jsons/time-nm.json";
import toast from "react-hot-toast";

function TimeRWPage() {
  const [result, setResult] = useState([]);
  const [day, setDay] = useState(0);

  const handleSearch = () => {
    if (day < 12100) {
      toast.error("Vui lòng nhập day >= 12100");
      return;
    }
    if (array.length === 0) {
      return [];
    }
    let closestIndex = 0;
    let minDiff = Math.abs(array[0].day - day);

    for (let i = 1; i < array.length; i++) {
      let diff = Math.abs(array[i].day - day);
      if (diff < minDiff) {
        closestIndex = i;
        minDiff = diff;
      }
    }

    let result = array.slice(closestIndex, closestIndex + 3);
    setResult(result);
  };

  const handleSearchSample = () => {
 
    if (array.length === 0) {
      return [];
    }
    let closestIndex = 0;
    let minDiff = Math.abs(array[0].day - 12100);

    for (let i = 1; i < array.length; i++) {
      let diff = Math.abs(array[i].day - 12100);
      if (diff < minDiff) {
        closestIndex = i;
        minDiff = diff;
      }
    }

    let result = array.slice(closestIndex, closestIndex + 3);
    setResult(result);
  };


  return (
    <div className="bg-white p-4 rounded-lg grid lg:grid-cols-2">
      <div className="border-r flex flex-col pr-4">
        <h1 className="font-bold">Input:</h1>
        <div className="flex items-center justify-end gap-4">
          <Button onClick={handleSearchSample} size="sm" color="blue" variant="outlined">
            Sample
          </Button>
          <Button
            onClick={handleSearch}
            className="flex items-center gap-2"
            size="sm"
            color="blue"
          >
            <HiOutlineArrowSmRight className="w-5 h-5" /> Tra cứu
          </Button>
        </div>
        <div className="my-4">
          <Input
            value={day}
            onChange={(e) => setDay(e.target.value)}
            label="Nhập day"
            type="number"
          />
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-red-500 font-semibold">Ghi chú: </p>
          <p>- Nhập day trên 12k để xem thời gian nightmare</p>
          <p>- Thời gian có thể sai số nhưng không đáng nhắc đến oke.</p>
        </div>
      </div>
      <div className="flex flex-col pl-0 lg:pl-4 mt-4">
        <h1 className="font-bold">Output:</h1>
        {result.length === 0 && (
          <div className="border p-4 h-[420px] rounded-lg flex flex-col items-center justify-center">
            <img
              src="/empty.svg"
              alt="empty_svg"
              className="w-[124px] h-[124px]"
            />
            <p className="text-xs">Không có dữ liệu</p>
          </div>
        )}
        {result.length > 0 && (
          <div className="border p-4 h-[420px] rounded-lg flex flex-col gap-4">
            {result.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-blue-600/80 font-bold
                   text-white px-4 py-2 rounded-md"
              >
                <p className="flex items-center gap-1 font-bold">
                  <CiViewTimeline className="w-5 h-5" />
                  DAY: {item.day}
                </p>
                <p className="flex items-center gap-1">
                  <PiTimerLight />
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TimeRWPage;
