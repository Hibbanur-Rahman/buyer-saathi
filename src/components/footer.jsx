import React from "react";
import logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <div className="w-10/12 flex justify-between">
        <div className="w-1/12">
          <img src={logo} alt="" />
        </div>
        <div className="w-4/12">
          <p>Best information about the company goes here but now lorem ipsum is Best information about the company goes here but now lorem ipsum is</p>
          
        </div>
        <div className="w-2/12"></div>
        <div className="w-2/12"></div>
        <div className="w-2/12"></div>
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
