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
    <div className="w-full flex flex-col items-center bg-white">
      <div className="w-10/12 flex justify-between gap-[20px] my-6">
        <div className="flex w-5/12">
          <div className="w-4/12">
            <img src={logo} alt="" />
          </div>
          <div className="w-8/12">
            <p className="text-[#505050]">
              Best information about the company goes here but now lorem ipsum
              is Best information about the company goes here but now lorem
              ipsum is
            </p>
            <div className="mt-6">
              <p>Follow us on:</p>
              <div className="flex gap-[15px] items-center mt-3">
                <img
                  src={facebook}
                  alt=""
                  className="h-[35px] w-[35px] cursor-pointer hover:scale-105 transition-all duration-150"
                />
                <img
                  src={instagram}
                  alt=""
                  className="h-[35px] w-[35px] cursor-pointer hover:scale-105 transition-all duration-150"
                />
                <img
                  src={linkedIn}
                  alt=""
                  className="h-[35px] w-[35px] cursor-pointer hover:scale-105 transition-all duration-150"
                />
                <img
                  src={youtube}
                  alt=""
                  className="h-[35px] w-[35px] cursor-pointer hover:scale-105 transition-all duration-150"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-6/12">
          <div className="w-4/12">
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
          <div className="w-4/12">
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
          <div className="w-1/12">
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
