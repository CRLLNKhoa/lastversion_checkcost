"use client";
import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { PiToolboxFill } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import Link from "next/link";
import { RxDownload } from "react-icons/rx";
import { cn } from "@/lib/cn";
import { usePathname } from "next/navigation";
import { MdOutlineAutoMode } from "react-icons/md";

const menu = {
  tool: [
    {
      href: "/tools/single-rewind",
      title: "Kiểm tra Single Rewind",
    },
    {
      href: "/tools/double-rewind",
      title: "Kiểm tra Double Rewind",
    },
    {
      href: "/tools/time-rewind",
      title: "Kiểm tra Time Rewind",
    },
    {
      href: "/tools/time-nightmare",
      title: "Kiểm tra Time Nighmare",
    },
    {
      href: "/tools/calculator",
      title: "Tính toán day",
    },
    {
      href: "/tools/weapon",
      title: "Tính day vũ khí",
    },
    {
      href: "/tools/elixir",
      title: "Tính elixir",
    },
  ],
  auto: [
    {
      href: "/auto/run",
      title: "Khởi chạy auto",
    },
    {
      href: "/auto/run",
      title: "Nhật ký",
    },
  ]
};

function Sidebar() {
  const [open, setOpen] = React.useState(2);
  const pathname = usePathname();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="bg-white py-4 h-screen shadow-md hidden lg:flex flex-col">
      <Link
        href={"/"}
        className="flex items-center px-4 justify-bettween select-none border-b pb-4 mb-8"
      >
        <img src="/logo.svg" alt="logo" className="h-8 w-auto" />
        <h2 className="text-xl ml-1 font-semibold">Checkcost</h2>
      </Link>
      <List className="overflow-y-auto pb-6 mb-4">
        <Accordion
          open={open === 1}
          icon={
            <FaAngleDown
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <PiToolboxFill className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Công cụ
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              {menu.tool.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center",
                    item.href === pathname && "!text-blue-500 font-medium"
                  )}
                >
                  <ListItem>
                    <ListItemPrefix>
                      <FaAngleRight strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    {item.title}
                  </ListItem>
                </Link>
              ))}
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <FaAngleDown
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <FaUserFriends className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Cộng đồng
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0"></List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          icon={
            <FaAngleDown
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 3 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <MdOutlineAutoMode className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                 Auto notification
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
          <List className="p-0">
              {menu.auto.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center",
                    item.href === pathname && "!text-blue-500 font-medium"
                  )}
                >
                  <ListItem>
                    <ListItemPrefix>
                      <FaAngleRight strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    {item.title}
                  </ListItem>
                </Link>
              ))}
            </List>
          </AccordionBody>
        </Accordion>
      </List>
      <Button
        color="blue"
        className="mt-auto mx-4 flex items-center gap-3 justify-center"
      >
        <RxDownload className="w-5 h-5" /> Tải ứng dụng
      </Button>
    </div>
  );
}

export default Sidebar;
