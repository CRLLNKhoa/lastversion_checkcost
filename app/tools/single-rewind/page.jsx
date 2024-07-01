"use client";
import Output from "@/components/layouts/output";
import { Button, Radio, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import data from "@/jsons/new-single-rw.json";
import OutputDefault from "@/components/layouts/output-default";

function SingleRWPage() {
  const [result, setResult] = useState();
  const [resultNew, setResultNew] = useState();
  const [inputValueCurrent, setInputValueCurrent] = useState(0);
  const [inputValuePlaned, setInputValuePlaned] = useState(0);
  const [typeResult, setTypeResult] = useState(0);
  const [isSortCost,setIsSortCost] = useState(false)

  const handleSearch = () => {
    if (inputValueCurrent < 1000 || inputValuePlaned < 1000) {
      toast.error("Vui lòng nhập day trên 1000 !");
    }

    if (inputValueCurrent > inputValuePlaned) {
      toast.error("Vui lòng nhập day dự kiến cao hơn !");
    }

    const tempArray = data.filter((item) => {
      return item.day >= inputValueCurrent && item.day <= inputValuePlaned;
    });

    const groupedByRoundedCost = tempArray.reduce((acc, item) => {
      const roundedCost = Math.round(item.cost);
      let group = acc.find((group) => group.cost === roundedCost);

      if (!group) {
        group = { cost: roundedCost, items: [] };
        acc.push(group);
      }

      group.items.push(item);
      return acc.sort((a,b) => a.cost - b.cost);
    }, []);

    setResultNew(groupedByRoundedCost);

    setResult(tempArray);
  };

  const handleSortCost = () => {
    if(isSortCost){
      setResult(result.sort((a,b) => a.cost - b.cost));
      setIsSortCost(!isSortCost)
    }else {
      setResult(result.sort((a,b) => b.cost - a.cost));
      setIsSortCost(!isSortCost)
    }
   
  };

  return (
    <div className="bg-white p-4 rounded-lg grid lg:grid-cols-2">
      <div className="border-r flex flex-col pr-4">
        <h2 className="font-semibold text-md">Input: </h2>
        <div className="flex items-center justify-between w-full flex-wrap">
          <div className="flex gap-4">
            <Radio
              defaultChecked={typeResult === 0}
              value={0}
              onChange={() => setTypeResult(0)}
              name="type"
              label="Giao diện cũ"
            />
            <Radio
            defaultChecked={typeResult === 1}
              value={1}
              onChange={() => setTypeResult(1)}
              name="type"
              label="Giao diện mới"
            />
          </div>
          <Button
            onClick={handleSearch}
            className="flex items-center gap-2 ml-auto"
            size="sm"
            color="blue"
          >
            <HiOutlineArrowSmRight className="w-5 h-5" /> Tra cứu
          </Button>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <Input type="number"
            value={inputValueCurrent}
            onChange={(e) => setInputValueCurrent(e.target.value)}
            label="Ngày hiện tại"
          />
          <Input type="number"
            value={inputValuePlaned}
            onChange={(e) => setInputValuePlaned(e.target.value)}
            label="Ngày dự kiến"
          />
        </div>
        <div className="flex itemscenter gap-4 my-4">
          <Button onClick={() => setInputValuePlaned(Number(inputValueCurrent) + 100)} size="sm" color="blue" variant="outlined">+100</Button>
          <Button onClick={() => setInputValuePlaned(Number(inputValueCurrent) + 300)} size="sm" color="blue" variant="outlined">+300</Button>
          <Button onClick={() => setInputValuePlaned(Number(inputValueCurrent) + 500)} size="sm" color="blue" variant="outlined">+500</Button>
        </div>
        {typeResult === 0 && (
          <Button disabled={!result} color="blue" className="w-[160px]" onClick={handleSortCost}>Sort Cost: {isSortCost ? "ASC" : "DESC"}</Button>
        )}
        <div className="flex flex-col mt-6 text-sm">
          <h3 className="font-bold">Ghi chú: </h3>
          <p>* Giá trị cost tỉ lệ nghịch với thời gian rewind.</p>
        </div>
      </div>
      {/* NOTE ------ */}
      <div className="lg:pl-4 border-t lg:border-t-0 pt-4 lg:pt-0 mt-12 lg:mt-0">
        {typeResult === 0 ? (
          <OutputDefault data={result} />
        ) : (
          <Output data={resultNew} />
        )}
      </div>
    </div>
  );
}

export default SingleRWPage;
