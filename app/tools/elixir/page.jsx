"use client";
import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Select, Option } from "@material-tailwind/react";
import toast from "react-hot-toast";
import SelectDonvi from "@/components/layouts/select-donvi";
import InputCustom from "@/components/layouts/input-custom";
import { convertNumberToLabel } from "@/lib/convertNumberTolabel";

function ElixirPage() {
  const [result, setResult] = useState();

  const [prevElixir, setPrevElixir] = useState({
    day: 0,
    num: 0,
    donvi: 1,
  });

  const [currentElixir, setCurrentElixir] = useState({
    day: 0,
    num: 0,
    donvi: 1,
  });

  const handleSearch = () => {
    if (currentElixir.day === 0 || prevElixir.day === 0) {
      toast.error("Vui lòng nhập day !");
      return;
    }
    function computeValue(F) {
      const maxComponent = Math.max(0, F - 3000) * 0.0002;
      const exponent = 2.5 + maxComponent;
      const base = F / 10.6;
      return Math.floor(50 + Math.pow(base, exponent));
    }
    // Compute the values for F13 and F14
    const valueF14 = computeValue(currentElixir.day);
    const valueF13 = computeValue(prevElixir.day);

    // Calculate the final result
    const result = valueF14 / valueF13 - 1;
    const valueF12 = prevElixir.num * prevElixir.donvi * result;
    setResult({ percent: result * 100, cost: convertNumberToLabel(valueF12) });
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
        {/* Input */}
        <div className="my-4 grid grid-cols-2 gap-2">
          <Input
            value={prevElixir.day}
            onChange={(e) =>
              setPrevElixir({ ...prevElixir, day: e.target.value })
            }
            label="Nhập day hiện tại"
            type="number"
          />
          <Input
            value={currentElixir.day}
            onChange={(e) =>
              setCurrentElixir({ ...currentElixir, day: e.target.value })
            }
            label="Nhập day dự kiến"
            type="number"
          />
        </div>
        <div className="flex items-center border rounded-md mb-4 border-gray-500">
          <div className="flex-1">
            <InputCustom
              value={prevElixir.num}
              onChangeValue={(v) => setPrevElixir({ ...prevElixir, num: v })}
            />
          </div>
          <div className="">
            <SelectDonvi
              onChangeValue={(v) => setPrevElixir({ ...prevElixir, donvi: v })}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-red-500 font-semibold">Ghi chú: </p>
          <p>Đúng hay sai thì tui cũng khi biết.</p>
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
            <h1 className="flex items-center gap-2">
              Số elixir tăng lên{" "}
              <p className="text-blue-500">{Math.floor(result.percent)}%</p> -
              <p className="text-red-500">tăng {result?.cost}</p>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ElixirPage;
