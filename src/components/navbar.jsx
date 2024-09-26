import React from "react";
import { LuMenu } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="w-full flex shadow-md py-4 justify-center items-center">
      <div className="w-10/12 flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <LuMenu
            className="text-primary text-3xl cursor-pointer"
            onClick={openDrawer}
          />
          <h1
            className="text-3xl font-extrabold text-primary "
            style={{ textShadow: "0px 5.25px 5.25px rgba(0,0,0,0.25)" }}
          >
            Buyer Sathi
          </h1>
        </div>
        <div className="flex items-center h-full gap-[10px]">
          <input
            type="text"
            className="bg-[#DDE3FF] rounded-xl py-2 px-4 placeholder:font-extralight placeholder:text-[#000] focus:outline-none"
            placeholder="Search Categories"
          />
          <button className="bg-primary h-max w-min p-2 rounded-xl">
            <FiSearch className="text-white text-xl" />
          </button>
          <button className="rounded-xl border-2 px-4 py-1 border-primary hover:bg-primary hover:text-white">
            Login
          </button>
        </div>
      </div>{" "}
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
