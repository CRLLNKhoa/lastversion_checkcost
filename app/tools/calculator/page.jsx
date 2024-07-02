"use client";
import { Checkbox } from "@material-tailwind/react";
import SelectDonvi from "@/components/layouts/select-donvi-calculator";
import {
  calculate,
  calculateDefault,
  convertToScientificNotation,
} from "@/lib/convertNumberTolabel";
import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

function Calculator() {
  const [result, setResult] = useState();
  const [wt, setwt] = useState(false);

  const [skill_em, setSkill_em] = useState({
    level_current: 0,
    level_planded: 0,
    unit_current: 1,
    unit_planded: 1,
  });

  const [skill_hl, setSkill_hl] = useState({
    level_current: 0,
    level_planded: 0,
    unit_current: 1,
    unit_planded: 1,
  });

  const [skill_up, setSkill_up] = useState({
    level_current: 0,
    level_planded: 0,
    unit_current: 1,
    unit_planded: 1,
    ml: 2,
  });

  const [skill_db, setskill_db] = useState({
    level_current: 0,
    level_planded: 0,
    unit_current: 1,
    unit_planded: 1,
    ml: 2,
  });

  const [skill_in, setskill_in] = useState({
    level_current: 0,
    level_planded: 0,
    unit_current: 1,
    unit_planded: 1,
    ml: 2,
  });

  const [skill_ms, setskill_ms] = useState({
    level_current: 0,
    level_planded: 0,
    unit_current: 1,
    unit_planded: 1,
    ml: 3,
  });

  const handleSearch = () => {
    // NOTE EM
    const formatCurrentLevel = Math.floor(
      skill_em.level_current * skill_em.unit_current
    ).toExponential(2);
    const formatPlannedLevel = Math.floor(
      skill_em.level_planded * skill_em.unit_planded
    ).toExponential(2);
    const formatCurrentPrice = Number(
      Math.floor(formatCurrentLevel * 5).toExponential(2)
    );
    const formatPlannedPrice = Number(
      Math.floor(formatPlannedLevel * 5).toExponential(2)
    );
    const IK = formatCurrentPrice + formatPlannedPrice;
    const JH = (formatPlannedLevel - formatCurrentLevel) / 2;
    const elixirRequiredOfExlixir = convertToScientificNotation(
      Number(IK) * Number(JH)
    );

    // NOTE HL
    const formatCurrentLevelHL = Math.floor(
      skill_hl.level_current * skill_hl.unit_current
    ).toExponential(2);
    const formatPlannedLevelHL = Math.floor(
      skill_hl.level_planded * skill_hl.unit_planded
    ).toExponential(2);
    const formatCurrentPriceHL = Number(
      Math.floor(formatCurrentLevelHL * 2).toExponential(2)
    );
    const formatPlannedPriceHL = Number(
      Math.floor(formatPlannedLevelHL * 2 - 2).toExponential(2)
    );
    const IKHL = formatCurrentPriceHL + formatPlannedPriceHL;
    const JHHL = (formatPlannedLevelHL - formatCurrentLevelHL) / 2;
    const elixirRequiredOfExlixirHL = convertToScientificNotation(
      Number(IKHL) * Number(JHHL)
    );
    const dayHL = calculate(2, formatPlannedLevelHL, formatCurrentLevelHL);

    // NOTE UP
    const formatCurrentLevelUP = Math.floor(
      skill_up.level_current * skill_up.unit_current
    ).toExponential(2);
    const formatPlannedLevelUP = Math.floor(
      skill_up.level_planded * skill_up.unit_planded
    ).toExponential(2);
    const formatCurrentPriceUP = Number(
      Math.floor(formatCurrentLevelUP * 2).toExponential(2)
    );
    const formatPlannedPriceUP = Number(
      Math.floor(formatPlannedLevelUP * 2 - 2).toExponential(2)
    );
    const IKUP = formatCurrentPriceUP + formatPlannedPriceUP;
    const JHUP = (formatPlannedLevelUP - formatCurrentLevelUP) / 2;
    const elixirRequiredOfExlixirUP = convertToScientificNotation(
      Number(IKUP) * Number(JHUP)
    );
    const dayUP = calculateDefault(
      skill_up.ml,
      formatPlannedLevelUP,
      formatCurrentLevelUP
    );

    // NOTE DB
    const formatCurrentLevelDB = Math.floor(
      skill_db.level_current * skill_db.unit_current
    ).toExponential(2);
    const formatPlannedLevelDB = Math.floor(
      skill_db.level_planded * skill_db.unit_planded
    ).toExponential(2);
    const formatCurrentPriceDB = Number(
      Math.floor(formatCurrentLevelDB * 2).toExponential(2)
    );
    const formatPlannedPriceDB = Number(
      Math.floor(formatPlannedLevelDB * 2 - 2).toExponential(2)
    );
    const IKDB = formatCurrentPriceDB + formatPlannedPriceDB;
    const JHDB = (formatPlannedLevelDB - formatCurrentLevelDB) / 2;
    const elixirRequiredOfExlixirDB = convertToScientificNotation(
      Number(IKDB) * Number(JHDB)
    );
    const dayDB = calculate(
      skill_db.ml,
      formatPlannedLevelDB,
      formatCurrentLevelDB
    );

    // NOTE IN
    const formatCurrentLevelIN = Math.floor(
      skill_in.level_current * skill_in.unit_current
    ).toExponential(2);
    const formatPlannedLevelIN = Math.floor(
      skill_in.level_planded * skill_in.unit_planded
    ).toExponential(2);
    const formatCurrentPriceIN = Number(
      Math.floor(formatCurrentLevelIN * 2).toExponential(2)
    );
    const formatPlannedPriceIN = Number(
      Math.floor(formatPlannedLevelIN * 2 - 2).toExponential(2)
    );
    const IKIN = formatCurrentPriceIN + formatPlannedPriceIN;
    const JHIN = (formatPlannedLevelIN - formatCurrentLevelIN) / 2;
    const elixirRequiredOfExlixirIN = convertToScientificNotation(
      Number(IKIN) * Number(JHIN)
    );
    const dayIN = calculateDefault(
      skill_in.ml,
      formatPlannedLevelIN,
      formatCurrentLevelIN
    );

    // NOTE MS
    const formatCurrentLevelMS = Math.floor(
      skill_ms.level_current * skill_ms.unit_current
    ).toExponential(2);
    const formatPlannedLevelMS = Math.floor(
      skill_ms.level_planded * skill_ms.unit_planded
    ).toExponential(2);
    const formatCurrentPriceMS = Number(
      Math.floor(formatCurrentLevelMS * 2).toExponential(2)
    );
    const formatPlannedPriceMS = Number(
      Math.floor(formatPlannedLevelMS * 2 - 2).toExponential(2)
    );
    const IKMS = formatCurrentPriceMS + formatPlannedPriceMS;
    const JHMS = (formatPlannedLevelMS - formatCurrentLevelMS) / 2;
    const elixirRequiredOfExlixirMS = convertToScientificNotation(
      Number(IKMS) * Number(JHMS)
    );

    const dayMS = calculateDefault(
      skill_ms.ml,
      formatPlannedLevelIN,
      formatCurrentLevelMS
    );

    setResult({
      elixirRequiredOfExlixir,
      elixirRequiredOfExlixirHL,
      dayHL,
      elixirRequiredOfExlixirUP,
      dayUP,
      elixirRequiredOfExlixirDB,
      dayDB,
      elixirRequiredOfExlixirIN,
      dayIN,
      elixirRequiredOfExlixirMS,
      dayMS,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg grid lg:grid-cols-2">
      <div className="border-r flex flex-col pr-4">
        <h1 className="font-bold">Input:</h1>
        <div className="flex items-center justify-between gap-4 pb-4">
          <Checkbox
            checked={wt}
            onChange={() => setwt(!wt)}
            color="blue"
            label="World Tree"
            className="mr-auto"
          />
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
        <div className="flex flex-col gap-2 overflow-y-auto h-[400px] pr-3">
          <div
            className="my-4 grid grid-cols-1 space-y-4 gap-2 border p-4 border-gray-400 
        rounded-lg"
          >
            <h2 className="font-semibold text-sm">Skill Elixir Mastery</h2>
            <div className="flex items-center gap-4">
              <Input
                value={skill_em.level_current}
                onChange={(e) =>
                  setSkill_em({ ...skill_em, level_current: e.target.value })
                }
                label="Nhập level hiện tại"
                type="number"
              />
              <SelectDonvi
                onChangeValue={(e) =>
                  setSkill_em({ ...skill_em, unit_current: e })
                }
              />
            </div>
            <div className="flex items-center gap-4">
              <Input
                value={skill_em.level_planded}
                onChange={(e) =>
                  setSkill_em({ ...skill_em, level_planded: e.target.value })
                }
                label="Nhập level dự kiến"
                type="number"
              />
              <SelectDonvi
                onChangeValue={(e) =>
                  setSkill_em({ ...skill_em, unit_planded: e })
                }
              />
            </div>
          </div>

          <div
            className="my-4 grid grid-cols-1 space-y-4 gap-2 border p-4 border-gray-400 
        rounded-lg"
          >
            <h2 className="font-semibold text-sm">Skill Hard Labour</h2>
            <div className="flex items-center gap-4">
              <Input
                value={skill_hl.level_current}
                onChange={(e) =>
                  setSkill_hl({ ...skill_hl, level_current: e.target.value })
                }
                label="Nhập level hiện tại"
                type="number"
              />
              <SelectDonvi
                onChangeValue={(e) =>
                  setSkill_hl({ ...skill_hl, unit_current: e })
                }
              />
            </div>
            <div className="flex items-center gap-4">
              <Input
                value={skill_hl.level_planded}
                onChange={(e) =>
                  setSkill_hl({ ...skill_hl, level_planded: e.target.value })
                }
                label="Nhập level dự kiến"
                type="number"
              />
              <SelectDonvi
                onChangeValue={(e) =>
                  setSkill_hl({ ...skill_hl, unit_planded: e })
                }
              />
            </div>
          </div>

          <div
            className="my-4 grid grid-cols-1 space-y-4 gap-2 border p-4 border-gray-400 
        rounded-lg"
          >
            <h2 className="font-semibold text-sm">Skill Untapped Power</h2>
            <div className="flex items-center gap-4">
              <Input
                value={skill_up.level_current}
                onChange={(e) =>
                  setSkill_up({ ...skill_up, level_current: e.target.value })
                }
                label="Nhập level hiện tại"
                type="number"
              />
              <SelectDonvi
                onChangeValue={(e) =>
                  setSkill_up({ ...skill_up, unit_current: e })
                }
              />
            </div>
            <div className="flex items-center gap-4">
              <Input
                value={skill_up.level_planded}
                onChange={(e) =>
                  setSkill_up({ ...skill_up, level_planded: e.target.value })
                }
                label="Nhập level dự kiến"
                type="number"
              />
              <SelectDonvi
                onChangeValue={(e) =>
                  setSkill_up({ ...skill_up, unit_planded: e })
                }
              />
            </div>
            <Input
              disabled={!wt}
              value={skill_up.ml}
              onChange={(e) => setSkill_up({ ...skill_up, ml: e.target.value })}
              label="Nhập Milestone Multiplier"
              type="number"
            />
          </div>

          <div
            className="my-4 grid grid-cols-1 space-y-4 gap-2 border p-4 border-gray-400 
        rounded-lg"
          >
            <h2 className="font-semibold text-sm">Skill Beautiful Disaster</h2>
            <div className="flex items-center gap-4">
              <Input
                value={skill_db.level_current}
                onChange={(e) =>
                  setskill_db({ ...skill_db, level_current: e.target.value })
                }
                label="Nhập level hiện tại"
                type="number"
              />
              <SelectDonvi
                onChangeValue={(e) =>
                  setskill_db({ ...skill_db, unit_current: e })
                }
              />
            </div>
            <div className="flex items-center gap-4">
              <Input
                value={skill_db.level_planded}
                onChange={(e) =>
                  setskill_db({ ...skill_db, level_planded: e.target.value })
                }
                label="Nhập level dự kiến"
                type="number"
              />
              <SelectDonvi
                onChangeValue={(e) =>
                  setskill_db({ ...skill_db, unit_planded: e })
                }
              />
            </div>
          </div>

          <div
            className="my-4 grid grid-cols-1 space-y-4 gap-2 border p-4 border-gray-400 
        rounded-lg"
          >
            <h2 className="font-semibold text-sm">Skill Inspire</h2>
            <div className="flex items-center gap-4">
              <Input
                value={skill_in.level_current}
                onChange={(e) =>
                  setskill_in({ ...skill_in, level_current: e.target.value })
                }
                label="Nhập level hiện tại"
                type="number"
              />
              <SelectDonvi
                onChangeValue={(e) =>
                  setskill_in({ ...skill_in, unit_current: e })
                }
              />
            </div>
            <div className="flex items-center gap-4">
              <Input
                value={skill_in.level_planded}
                onChange={(e) =>
                  setskill_in({ ...skill_in, level_planded: e.target.value })
                }
                label="Nhập level dự kiến"
                type="number"
              />
              <SelectDonvi
                onChangeValue={(e) =>
                  setskill_in({ ...skill_in, unit_planded: e })
                }
              />
            </div>
            <Input
              disabled={!wt}
              value={skill_in.ml}
              onChange={(e) => setskill_in({ ...skill_in, ml: e.target.value })}
              label="Nhập Milestone Multiplier"
              type="number"
            />
          </div>

          <div
            className="my-4 grid grid-cols-1 space-y-4 gap-2 border p-4 border-gray-400 
        rounded-lg"
          >
            <h2 className="font-semibold text-sm">Skill Mob Slayer</h2>
            <div className="flex items-center gap-4">
              <Input
                value={skill_ms.level_current}
                onChange={(e) =>
                  setskill_ms({ ...skill_ms, level_current: e.target.value })
                }
                label="Nhập level hiện tại"
                type="number"
              />
              <SelectDonvi
                onChangeValue={(e) =>
                  setskill_ms({ ...skill_ms, unit_current: e })
                }
              />
            </div>
            <div className="flex items-center gap-4">
              <Input
                value={skill_ms.level_planded}
                onChange={(e) =>
                  setskill_ms({ ...skill_ms, level_planded: e.target.value })
                }
                label="Nhập level dự kiến"
                type="number"
              />
              <SelectDonvi
                onChangeValue={(e) =>
                  setskill_ms({ ...skill_ms, unit_planded: e })
                }
              />
            </div>
          </div>
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
             flex flex-col items-start justify-start gap-4"
          >
            <p className="flex items-center gap-2">
              <b className="font-semibold text-pink-200">Elixir Mastery:</b>{" "}
              <img src="/dau.webp" alt="dau" className="w-4 h-4" />{" "}
              {result.elixirRequiredOfExlixir}
            </p>
            <p className="flex items-center gap-2">
              <b className="font-semibold text-yellow-600">Hard Labour:</b>{" "}
              {result.elixirRequiredOfExlixirHL}{" "}
              <img src="/dau.webp" alt="dau" className="w-4 h-4" />
              {result.dayHL}
              <img src="/day.webp" alt="dau" className="w-4 h-4" />
            </p>

            <p className="flex items-center gap-2">
              <b className="font-semibold text-red-600">Beautiful Disaster:</b>{" "}
              {result.elixirRequiredOfExlixirDB}{" "}
              <img src="/dau.webp" alt="dau" className="w-4 h-4" />
              {result.dayDB}
              <img src="/day.webp" alt="dau" className="w-4 h-4" />
            </p>

            <p className="flex items-center gap-2">
              <b className="font-semibold text-purple-600">Untapped Power:</b>{" "}
              {result.elixirRequiredOfExlixirUP}{" "}
              <img src="/dau.webp" alt="dau" className="w-4 h-4" />
              {result.dayUP}
              <img src="/day.webp" alt="dau" className="w-4 h-4" />
            </p>

            <p className="flex items-center gap-2">
              <b className="font-semibold text-green-600">Inspire:</b>{" "}
              {result.elixirRequiredOfExlixirIN}{" "}
              <img src="/dau.webp" alt="dau" className="w-4 h-4" />
              {result.dayIN}
              <img src="/day.webp" alt="dau" className="w-4 h-4" />
            </p>

            <p className="flex items-center gap-2">
              <b className="font-semibold text-gray-600">Mob Slayer:</b>{" "}
              {result.elixirRequiredOfExlixirMS}{" "}
              <img src="/dau.webp" alt="dau" className="w-4 h-4" />
              {result.dayMS}
              <img src="/day.webp" alt="dau" className="w-4 h-4" />
            </p>

            <p className="flex items-center gap-2 border-t pt-2 border-red-500 w-full">
              <b className="font-semibold text-red-600">Tổng cộng:</b>{" "}
              {result.dayMS + result.dayIN + result.dayDB + result.dayHL + result.dayUP}
              <img src="/day.webp" alt="dau" className="w-4 h-4" />
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Calculator;
