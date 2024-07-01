"use client";
import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Select, Option } from "@material-tailwind/react";
import toast from "react-hot-toast";

function WeaponPage() {
  const [result, setResult] = useState();
  const [day, setDay] = useState(0);
  const [prevWeapon, setPrevWeapon] = useState({
    day: 0,
    type: 0,
  });

  const [currentWeapon, setCurrentWeapon] = useState({
    day: 0,
    type: 0,
  });

  const handleSearch = () => {
    if (currentWeapon.day === 0 || prevWeapon.day === 0) {
      toast.error("Vui lòng nhập day !");
      return;
    }

    const getType = (type) => {
      switch (type) {
        case 0:
          return 0;
        case 1:
          return 156.2;
        case 2:
          return 200;
        default:
          return 0;
      }
    };

    let prevLevel = Number(prevWeapon.day) + Number(getType(prevWeapon.type));
    let currentLevel =
      Number(currentWeapon.day) + Number(getType(currentWeapon.type));

    let result = ((currentLevel - prevLevel) / 78.1) * 11;

    setResult(Math.floor(result));
  };
  return (
    <div className="bg-white p-4 rounded-lg grid lg:grid-cols-2">
      <div className="border-r flex flex-col pr-4">
        <h1 className="font-bold">Input:</h1>
        <div className="flex items-center justify-end gap-4">
          <Button
            onClick={handleSearch}
            className="flex items-center gap-2"
            size="sm"
            color="blue"
          >
            <HiOutlineArrowSmRight className="w-5 h-5" /> Tra cứu
          </Button>
        </div>
        <div className="my-4 grid grid-cols-2 gap-2">
          <Input
            value={prevWeapon.day}
            onChange={(e) =>
              setPrevWeapon({ ...prevWeapon, day: e.target.value })
            }
            label="Nhập day trước đó"
            type="number"
          />
          <Select
            value={prevWeapon.type}
            onChange={(val) => setPrevWeapon({ ...prevWeapon, type: val })}
            label="Chọn loại vũ khí"
          >
            <Option value={0}>Vũ khí thường</Option>
            <Option value={1}>Vũ khí Minigun / Drag</Option>
            <Option value={2}>Vũ khí void</Option>
          </Select>
        </div>
        <div className="my-4 grid grid-cols-2 gap-2">
          <Input
            value={currentWeapon.day}
            onChange={(e) =>
              setCurrentWeapon({ ...currentWeapon, day: e.target.value })
            }
            label="Nhập day hiện tại"
            type="number"
          />
          <Select
            value={currentWeapon.type}
            onChange={(val) =>
              setCurrentWeapon({ ...currentWeapon, type: val })
            }
            label="Chọn loại vũ khí"
          >
            <Option value={0}>Vũ khí thường</Option>
            <Option value={1}>Vũ khí Minigun / Drag</Option>
            <Option value={2}>Vũ khí void</Option>
          </Select>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-red-500 font-semibold">Ghi chú: </p>
          <p>- Chọn loại vũ khí để chính xác hơn</p>
        </div>
      </div>
      <div className="flex flex-col mt-4 lg:mt-0 lg:px-4">
        <h1 className="font-bold">Output:</h1>
        {!result && (
          <div className="border p-4 h-[420px] rounded-lg flex flex-col items-center justify-center">
            <img
              src="/empty.svg"
              alt="empty_svg"
              className="w-[124px] h-[124px]"
            />
            <p className="text-xs">Không có dữ liệu</p>
          </div>
        )}
        {result && (
          <div
            className="border p-4 h-[220px] lg:h-[420px] rounded-lg 
             flex flex-col items-center justify-center"
          >
            <h1>Số day leo được thêm là: {result}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeaponPage;
