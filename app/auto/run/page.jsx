"use client";
import { Button } from "@material-tailwind/react";
import React from "react";
import toast from "react-hot-toast";

function RunPage() {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col gap-4">
      <div className="grid grid-cols-3">
        <div className="flex flex-col col-span-2">
          <h1 className="font-bold uppercase mb-2">Screen</h1>
          <div className="h-[420px] bg-black/10 rounded-lg flex">
            <Button onClick={() => toast.error("Bạn không được cấp quyền !")} color="blue" className="mt-auto mb-4 ml-auto mr-4">Open Game</Button>
          </div>
        </div>
        <div className="bg-black ml-4 rounded-lg flex flex-col text-white p-4">
          <h1 className="font-bold uppercase mb-2">Thao tác: </h1>
          <Button onClick={() => toast.error("Bạn không được cấp quyền !")} color="blue">Add script</Button>
          {/* <div className="mt-2 flex flex-col gap-1 text-sm">
            <p>1/ .env.step$1, delay: 1000ms, random: 6px</p>
            <p>2/ .env.step$2, delay: 1000ms</p>
            <p>3/ .env.step$3, delay: 1000ms, random: 6px</p>
            <p>4/ .env.step$4, delay: 1000ms, random: 6px</p>
            <p>5/ .env.step$5, delay: 1000ms, random: 6px</p>
            <p>6/ .env.step$6, delay: 1000ms, random: 6px </p>
            <p>7/ .env.step$7, delay: 1000ms, random: 6px</p>
            <p>8/ .env.step$8, delay: 1000ms, random: 6px</p>
            <p>9/ .env.step$9, delay: 1000ms, random: 6px</p>
            <p>10/ .env.step$10, delay: 330000ms </p>
            <p>11/ .env.step$11, delay: 5000ms, checked</p>
            <p>12/ .env.step$12, delay: 1000ms</p>
            <p>13/ .env.step$13, delay: 1000ms</p>
            <p>loop: 82</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default RunPage;
