import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import {
  Drawer,
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { GoHomeFill } from "react-icons/go";
import googleLogo from "../assets/images/google-logo.svg";
import appleLogo from "../assets/images/apple-logo.svg";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleOpenLoginModal = () => setOpenLoginModal(!openLoginModal);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 110) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full flex md:px-0 px-3 shadow-md py-4 justify-center items-center transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 bg-white z-50" : "z-50"
      }`}
    >
      <div className="md:w-10/12 w-full flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <LuMenu
            className="text-primary text-3xl cursor-pointer"
            onClick={openDrawer}
          />
          <h1
            className="text-2xl md:text-3xl font-extrabold text-primary cursor-pointer"
            style={{ textShadow: "0px 5.25px 5.25px rgba(0,0,0,0.25)" }}
            onClick={() => navigate("/")}
          >
            Buyer Sathi
          </h1>
        </div>
        <div className="flex items-center h-full gap-[10px]">
          <input
            type="text"
            className="md:flex hidden bg-[#DDE3FF] rounded-xl py-2 px-4 placeholder:font-extralight placeholder:text-[#000] focus:outline-none"
            placeholder="Search Categories"
          />
          <button className="bg-primary h-max w-min p-2 rounded-xl">
            <FiSearch className="text-white text-xl" />
          </button>
          <button
            className="rounded-xl border-2 px-4 py-1 border-primary hover:bg-primary hover:text-white"
            onClick={handleOpenLoginModal}
          >
            Login
          </button>
        </div>
      </div>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <h1
            className="text-2xl md:text-3xl font-extrabold text-primary cursor-pointer"
            style={{ textShadow: "0px 5.25px 5.25px rgba(0,0,0,0.25)" }}
            onClick={() => navigate("/")}
          >
            Buyer Sathi
          </h1>
          <IconButton
            variant="text"
            color=""
            className="text-primary"
            onClick={closeDrawer}
          >
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
        <div className="w-full flex flex-col px-1">
          <div
            className={`group flex gap-[20px] items-center my-1 px-1 py-1 rounded-lg ${
              location.pathname === "/" ? "bg-blue-gray-50" : ""
            } hover:bg-blue-gray-50 cursor-pointer`}
            onClick={() => navigate("/")}
          >
            <GoHomeFill className="text-3xl text-primary " />
            <p className="">Home</p>
          </div>
          <div
            className={`group flex gap-[20px] items-center my-1 px-1 py-1 rounded-lg ${
              location.pathname === "/trending" ? "bg-blue-gray-50" : ""
            } hover:bg-blue-gray-50 cursor-pointer`}
            onClick={() => navigate("/trending")}
          >
            <GoHomeFill className="text-3xl text-primary " />
            <p className="">Trending</p>
          </div>
          <div
            className={`group flex gap-[20px] items-center my-1 px-1 py-1 rounded-lg ${
              location.pathname === "/recommended" ? "bg-blue-gray-50" : ""
            } hover:bg-blue-gray-50 cursor-pointer`}
            onClick={() => navigate("/recommended")}
          >
            <GoHomeFill className="text-3xl text-primary " />
            <p className="">Recommended Deals</p>
          </div>
          <div
            className={`group flex gap-[20px] items-center my-1 px-1 py-1 rounded-lg ${
              location.pathname === "/product-category" ? "bg-blue-gray-50" : ""
            } hover:bg-blue-gray-50 cursor-pointer`}
            onClick={() => navigate("/product-category")}
          >
            <GoHomeFill className="text-3xl text-primary " />
            <p className="">Products Types</p>
          </div>
          <div
            className={`group flex gap-[20px] items-center my-1 px-1 py-1 rounded-lg ${
              location.pathname === "/product-services" ? "bg-blue-gray-50" : ""
            } hover:bg-blue-gray-50 cursor-pointer`}
            onClick={() => navigate("/product-services")}
          >
            <GoHomeFill className="text-3xl text-primary " />
            <p className="">Service Types</p>
          </div>
          <div
            className="group flex gap-[20px] items-center my-1 px-1 py-1 rounded-lg hover:bg-blue-gray-50 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <GoHomeFill className="text-3xl text-primary " />
            <p className="">Menu Item 6</p>
          </div>
          <div
            className={`group flex gap-[20px] items-center my-1 px-1 py-1 rounded-lg ${
              location.pathname === "/product-picked-experts"
                ? "bg-blue-gray-50"
                : ""
            } hover:bg-blue-gray-50 cursor-pointer`}
            onClick={() => navigate("/product-picked-experts")}
          >
            <GoHomeFill className="text-3xl text-primary " />
            <p className="">Picked By experts</p>
          </div>
          <div
            className="group flex gap-[20px] items-center my-1 px-1 py-1 rounded-lg hover:bg-blue-gray-50 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <GoHomeFill className="text-3xl text-primary " />
            <p className="">Menu Item x</p>
          </div>
        </div>
      </Drawer>
      <Dialog
        open={openLoginModal}
        handler={handleOpenLoginModal}
        className="bg-[rgba(87,115,246,0.8)] py-8 px-10 rounded-3xl"
      >
        <p className="text-white text-2xl font-semibold poppins-semibold">
          Login or Signup
        </p>
        <p className="text-white text-sm my-3 font-thin poppins-extralight">
          We will send on SMS to verify
        </p>
        <div className="w-full flex p-3 py-8 items-center justify-center shadow-2xl rounded-3xl bg-white ">
          <div className="w-9/12 flex flex-col justify-center items-center py-2">
            <div className="w-full relative mb-6">
              <label
                htmlFor=""
                className="text-black text-sm absolute left-[20px] top-[-10px] px-3 bg-white poppins-regular"
              >
                Enter phone or email
              </label>
              <input
                type="text"
                className="py-3 px-3 border-2 w-full rounded-2xl border-primary outline-none focus:outline-none poppins-regular"
              />
            </div>
            <div className="w-full relative mb-3">
              <label
                htmlFor=""
                className="text-black text-sm absolute left-[20px] top-[-10px] px-3 bg-white poppins-regular"
              >
                Password
              </label>
              <input
                type="text"
                className="py-3 px-3 border-2 w-full rounded-2xl border-primary outline-none focus:outline-none poppins-regular"
              />
            </div>
            <p className="text-center poppins-regular text-black my-4">
              Or continue with social Account
            </p>
            <div className="flex justify-center items-center  gap-[20px]">
              <img src={googleLogo} alt="" className="h-[60px] w-[60px] " />
              <img src={appleLogo} alt="" className="h-[55px] w-[55px]" />
            </div>
            <button
              className="bg-[#F07B3F] text-white rounded-lg w-full py-2 mt-6"
              onClick={() => {
                navigate("/dashboard");
                handleOpenLoginModal();
              }}
            >
              continue
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Navbar;
