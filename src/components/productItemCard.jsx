import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { RiHeartLine } from "react-icons/ri";
import { RiHeartFill } from "react-icons/ri";
import { PiShareNetworkLight } from "react-icons/pi";
import { PiInfo } from "react-icons/pi";
const ProductItemCard = (props) => {
  const [wishlist, setWishlist] = useState(false);
  return (
    <div className="md:w-3/12 w-6/12 flex md:p-0 md:py-0 py-3 md:px-0 px-2 flex-shrink-0">
      <div className=" relative w-full bg-[#F5F5F5] rounded-2xl overflow-hidden border-[1px] shadow-lg p-0 border-primary">
        <div className="flex md:flex-row flex-col-reverse  w-full md:justify-between">
          <h1 className="p-3 font-semibold text-[#222222] md:text-base text-sm md:mt-0 mt-6">
            {props.name}
          </h1>
          <div className="bg-[#34A853] flex md:w-auto w-min absolute right-0 top-0 md:relative items-center justify-center rounded-bl-2xl rounded-tr-2xl px-4 h-min py-2 gap-[3px]">
            <p className="text-white text-xs">{props.rating}</p>
            <IoMdStar className="text-white text-sm" />
          </div>
        </div>
        <div className="flex px-3 items-center justify-center relative">
          <img src={props.image} alt="" className="md:h-[150px] h-[100px]" />
          {wishlist ? (
            <RiHeartFill
              className="absolute right-[1rem] md:text-3xl text-xl cursor-pointer text-[#EA0707] top-0"
              onClick={() => setWishlist(!wishlist)}
            />
          ) : (
            <RiHeartLine
              className="absolute right-[1rem] md:text-3xl text-xl cursor-pointer text-primary top-0"
              onClick={() => setWishlist(!wishlist)}
            />
          )}
          <img
            src={props.companyLogo}
            alt=""
            className="mx-3 absolute left-0 bottom-0 md:w-[50px] md:h-[20px]"
          />
          <PiShareNetworkLight className="md:text-3xl text-xl absolute bottom-0 right-[1rem] cursor-pointer hover:text-primary" />
        </div>
        <div className="flex w-full items-baseline gap-[3px] px-3 my-4">
          <p className="text-base ">Description</p>
          <div className="border-b-2 border-[#626262] h-min border-dotted w-full "></div>
        </div>
        <div className="md:flex hidden px-3 flex-col w-full">
          <div className="border-b-2 border-[#626262] h-min border-dotted w-full "></div>
          <div className="border-b-2 border-[#626262] h-min border-dotted w-4/12 mt-5"></div>
        </div>
        <div className="w-full flex justify-end px-3">
          <div className="flex items-center gap-[3px]">
            <p className="md:text-lg text-sm font-semibold text-[#34A853]">
              +{props.cashbackPercent}% Cashback
            </p>
            <PiInfo className="text-lg cursor-pointer hover:text-primary" />
          </div>
        </div>
        <div className="flex flex-col items-center bg-white w-full p-3">
          <div className="w-full flex gap-[10px]  items-center border-b-[1px] pb-2">
            <p className="md:text-xl text-sm font-semibold text-[#222222]">
              ₹{props.discountedPrice}
            </p>
            <p className="md:text-xl text-sm line-through text-[#222222]">
              ₹{props.discountedPrice}
            </p>
            <p className="text-[#34A853] md:text-sm text-[8px] font-medium">
              ({props.discountPercentage} % Off)
            </p>
          </div>
          <button className="bg-[#F07B3F] text-white rounded-lg px-6 py-1 my-2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItemCard;
