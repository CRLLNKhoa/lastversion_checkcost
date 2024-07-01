import { cn } from '@/lib/cn';
import React from 'react'

function OutputTime({ data }) {
  
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
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Output:</h2>
          <div className="border p-4 h-[420px] overflow-y-auto rounded-md flex flex-col gap-1 text-white items-start">
            <div className="grid grid-cols-4 text-center w-full font-bold mb-2 text-blue-600">
              <p>DAY</p>
              <p></p>
              <p className='col-span-2'>Thời gian</p>
            </div>
            {data?.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "grid grid-cols-4 text-center w-full font-bold",
                  index % 2 === 0 ? "bg-blue-400" : "bg-blue-700"
                )}
              >
                <p>{item.day}</p>
                <p></p>
                <p className='col-span-2'>{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default OutputTime