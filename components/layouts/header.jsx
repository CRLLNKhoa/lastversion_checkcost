"use client";
import { Button } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import React from "react";
import { RiMenuFold2Line } from "react-icons/ri";
import { RiFullscreenFill } from "react-icons/ri";
import { SidebarMobile } from "./sidebar-mobile";

const getTitlePage = (title) => {
  switch (title) {
    case "/":
      return "Trang chủ";
    case "/tools/single-rewind":
      return "Single Rewind";
    case "/tools/double-rewind":
      return "Double Rewind";
    case "/tools/time-rewind":
      return "Time Rewind";
    case "/tools/time-nightmare":
      return "Time Nightmare";
    default:
      return "Trang chủ";
  }
};

function Header() {
  const pathname = usePathname();
  return (
    <header className="bg-white h-24 lg:h-16 border-l flex items-center justify-between lg:px-4 shadow-lg z-50">
      <SidebarMobile />
      <h1 className="hidden lg:flex font-bold text-xl">
        {getTitlePage(pathname)}
      </h1>
      <div className="flex items-center">
        <Button variant="text" size="sm">
          {" "}
          <RiFullscreenFill className="w-6 h-6" />
        </Button>
      </div>
    </header>
  );
}

export default Header;
