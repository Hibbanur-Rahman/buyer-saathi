import React from "react";
import logo from "../assets/images/logo.png";
import instagram from "../assets/images/instagram.svg";
import youtube from "../assets/images/youtube.svg";
import linkedIn from "../assets/images/linkedin.svg";
import facebook from "../assets/images/facebook.svg";

import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center bg-white mt-8">
      <div className="w-full md:px-0 px-6 py-10 flex flex-col items-center justify-center bg-[#F5F5F5]">
        <p className="text-[#1C1C1C] md:text-2xl text-lg font-semibold text-center">
          Subscribe on our newsletter
        </p>
        <p className="md:text-sm text-xs text-[#606060] font-regular text-center">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className="flex md:gap-[20px] gap-[10px] my-4">
          <input type="text" className=" bg-white border rounded-lg p-2 px-4 md:w-[300px] w-[200px] focus:outline-none shadow-sm" placeholder="Email or Phone Number" />
          <button className="bg-primary text-white px-4 rounded-lg shadow-sm md:text-base text-sm">Subscribe</button>
        </div>
      </div>
      <div className="relative md:w-10/12 w-full flex md:flex-row flex-col justify-between gap-[20px] my-6 md:pb-0 pb-[4rem] md:px-0 px-3">
        <div className="flex md:w-5/12 w-full md:gap-[0px] gap-[15px] justify-between">
          <div className="md:w-4/12 ">
            <img src={logo} alt="" className="rounded-lg md:w-auto w-[50px] md:h-auto h-[50px]" />
          </div>
          <div className="md:w-8/12 w-10/12">
            <p className="text-[#505050] md:text-base text-sm">
              Best information about the company goes here but now lorem ipsum
              is Best information about the company goes here but now lorem
              ipsum is
            </p>
            <div className="mt-6 md:relative absolute bottom-[-10px] left-[10px] md:block flex items-center md:gap-[0px] gap-[10px]">
              <p className="font-medium">Follow us on:</p>
              <div className="flex gap-[15px] items-center md:mt-3 mt-0">
                <img
                  src={facebook}
                  alt=""
                  className="md:h-[35px] h-[30px] w-[30px] md:w-[35px] cursor-pointer hover:scale-105 transition-all duration-150"
                />
                <img
                  src={instagram}
                  alt=""
                  className="md:h-[35px] h-[30px] w-[30px] md:w-[35px] cursor-pointer hover:scale-105 transition-all duration-150"
                />
                <img
                  src={linkedIn}
                  alt=""
                  className="md:h-[35px] h-[30px] w-[30px] md:w-[35px] cursor-pointer hover:scale-105 transition-all duration-150"
                />
                <img
                  src={youtube}
                  alt=""
                  className="md:h-[35px] h-[30px] w-[30px] md:w-[35px] cursor-pointer hover:scale-105 transition-all duration-150"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:w-6/12 w-full justify-between">
          <div className="w-3/12">
            <p className="font-medium mb-3 text-[#1C1C1C]">Company</p>
            <p
              className="text-[#8B96A5] cursor-pointer hover:text-[#1c1c1c]"
              onClick={() => navigate("/")}
            >
              About us
            </p>
            <p
              className="text-[#8B96A5] cursor-pointer hover:text-[#1c1c1c]"
              onClick={() => navigate("/")}
            >
              Contact us
            </p>
            <p
              className="text-[#8B96A5] cursor-pointer hover:text-[#1c1c1c]"
              onClick={() => navigate("/")}
            >
              Our Vision
            </p>
          </div>
          <div className="w-3/12">
            <p className="font-medium mb-3 text-[#1C1C1C]">Policies</p>
            <p
              className="text-[#8B96A5] cursor-pointer hover:text-[#1c1c1c]"
              onClick={() => navigate("/")}
            >
              Disclaimer
            </p>
            <p
              className="text-[#8B96A5] cursor-pointer hover:text-[#1c1c1c]"
              onClick={() => navigate("/")}
            >
              Privacy
            </p>
            <p
              className="text-[#8B96A5] cursor-pointer hover:text-[#1c1c1c]"
              onClick={() => navigate("/")}
            >
              Terms
            </p>
          </div>
          <div className="w-3/12">
            <p className="font-medium mb-3 text-[#1C1C1C]">Product</p>
            <p
              className="text-[#8B96A5] cursor-pointer hover:text-[#1c1c1c]"
              onClick={() => navigate("/")}
            >
              Support
            </p>
            <p
              className="text-[#8B96A5] cursor-pointer hover:text-[#1c1c1c]"
              onClick={() => navigate("/")}
            >
              Submit
            </p>
            <p
              className="text-[#8B96A5] cursor-pointer hover:text-[#1c1c1c]"
              onClick={() => navigate("/")}
            >
              Query
            </p>
          </div>
          <div className="w-3/12">
            <p className="font-medium mb-3 text-[#1C1C1C]">Resources</p>
            <p
              className="text-[#8B96A5] cursor-pointer hover:text-[#1c1c1c]"
              onClick={() => navigate("/")}
            >
              Business
            </p>
            <p
              className="text-[#8B96A5] cursor-pointer hover:text-[#1c1c1c]"
              onClick={() => navigate("/")}
            >
              Blog
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-primary py-4 text-center flex items-center justify-center">
        <p className="text-white text-center">
          © 2023 BuyerSathi. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
