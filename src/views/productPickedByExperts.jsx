import React, { useState } from "react";
import starImg1 from "../assets/images/star-1.svg";
import starImg2 from "../assets/images/star-2.svg";
import starImg3 from "../assets/images/star-3.svg";
import { IoMdStar } from "react-icons/io";
import itemImg1 from "../assets/images/item-img-1.png";
import amazonLogo from "../assets/images/amazon-logo.svg";
import { PiInfo } from "react-icons/pi";
import { RiHeartLine } from "react-icons/ri";
import { RiHeartFill } from "react-icons/ri";
import { PiShareNetworkLight } from "react-icons/pi";

const ProductPickedByExperts = () => {
  const [wishlist, setWishlist] = useState(false);

  return (
    <div className="w-10/12 flex flex-col my-4">
      <h1 className="text-3xl underline decoration-primary font-semibold">
        Picked by <span className="text-primary">Experts</span>
      </h1>
      <p className="text-[#222222] font-light my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut eveniet
        sit ratione, iure quidem at dicta quisquam, laboriosam obcaecati
        officiis corrupti.
      </p>
      <div className="w-full flex gap-[20px]">
        <div className="w-9/12 flex flex-col">
          <div className="w-full flex justify-between my-4 ">
            <div className="relative flex justify-center items-center">
              <img src={starImg1} alt="" className="w-[100px]" />
              <p className="absolute text-3xl font-semibold top-[48%] text-white">
                1
              </p>
            </div>
            <div className=" relative w-10/12 flex flex-col rounded-2xl border-[1px] border-primary px-8 py-3 overflow-hidden bg-[#F5F5F5]">
              <div className="bg-[#34A853]  flex md:w-min w-min absolute right-[0px] top-0  items-center justify-center rounded-bl-2xl rounded-tr-2xl px-4 h-min py-2 gap-[3px]">
                <p className="text-white text-xs">4.3</p>
                <IoMdStar className="text-white text-sm" />
              </div>
              <p className="font-semibold">
                Apple iphone 13 (Blue , 6GB | 128GB)
              </p>
              <div className="w-full flex gap-[15px] my-2 relative">
                <img src={itemImg1} alt="" className="w-[200px]" />
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
                <div className="w-full">
                  <div className="flex w-full items-baseline gap-[3px] my-4">
                    <p className="text-base ">Description</p>
                    <div className="border-b-2 border-[#626262] h-min border-dotted w-full "></div>
                  </div>
                  <div className="md:flex hidden flex-col w-full">
                    <div className="border-b-2 border-[#626262] h-min border-dotted w-full "></div>
                    <div className="border-b-2 border-[#626262] h-min border-dotted w-4/12 mt-5"></div>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <div className=" mt-4 flex gap-[10px]  items-center  pb-2">
                      <p className="md:text-xl text-sm font-semibold text-[#222222]">
                        ₹10499
                      </p>
                      <p className="md:text-xl text-sm line-through text-[#222222]">
                        ₹14499
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <p className="md:text-lg text-sm font-semibold text-[#34A853]">
                        +12% Cashback
                      </p>
                      <PiInfo className="text-lg cursor-pointer hover:text-primary" />
                    </div>
                  </div>

                  <p className="text-[#34A853] md:text-sm text-[8px] font-medium border-b-2 pb-2">
                    (16 % Off)
                  </p>
                  <div className="w-full flex justify-between items-center">
                    <button className="bg-[#F07B3F] text-white rounded-lg px-6 py-1 my-2">
                      Buy Now
                    </button>
                    <PiShareNetworkLight className="md:text-3xl text-xl  cursor-pointer hover:text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between my-4 ">
            <div className="relative flex justify-center items-center">
              <img src={starImg2} alt="" className="w-[100px]" />
              <p className="absolute text-3xl font-semibold top-[48%] text-white">
                2
              </p>
            </div>
            <div className=" relative w-10/12 flex flex-col rounded-2xl border-[1px] border-primary px-8 py-3 overflow-hidden bg-[#F5F5F5]">
              <div className="bg-[#34A853]  flex md:w-min w-min absolute right-[0px] top-0  items-center justify-center rounded-bl-2xl rounded-tr-2xl px-4 h-min py-2 gap-[3px]">
                <p className="text-white text-xs">4.3</p>
                <IoMdStar className="text-white text-sm" />
              </div>
              <p className="font-semibold">
                Apple iphone 13 (Blue , 6GB | 128GB)
              </p>
              <div className="w-full flex gap-[15px] my-2 relative">
                <img src={itemImg1} alt="" className="w-[200px]" />
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
                <div className="w-full">
                  <div className="flex w-full items-baseline gap-[3px] my-4">
                    <p className="text-base ">Description</p>
                    <div className="border-b-2 border-[#626262] h-min border-dotted w-full "></div>
                  </div>
                  <div className="md:flex hidden flex-col w-full">
                    <div className="border-b-2 border-[#626262] h-min border-dotted w-full "></div>
                    <div className="border-b-2 border-[#626262] h-min border-dotted w-4/12 mt-5"></div>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <div className=" mt-4 flex gap-[10px]  items-center  pb-2">
                      <p className="md:text-xl text-sm font-semibold text-[#222222]">
                        ₹10499
                      </p>
                      <p className="md:text-xl text-sm line-through text-[#222222]">
                        ₹14499
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <p className="md:text-lg text-sm font-semibold text-[#34A853]">
                        +12% Cashback
                      </p>
                      <PiInfo className="text-lg cursor-pointer hover:text-primary" />
                    </div>
                  </div>

                  <p className="text-[#34A853] md:text-sm text-[8px] font-medium border-b-2 pb-2">
                    (16 % Off)
                  </p>
                  <div className="w-full flex justify-between items-center">
                    <button className="bg-[#F07B3F] text-white rounded-lg px-6 py-1 my-2">
                      Buy Now
                    </button>
                    <PiShareNetworkLight className="md:text-3xl text-xl  cursor-pointer hover:text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between my-4 ">
            <div className="relative flex justify-center items-center">
              <img src={starImg3} alt="" className="w-[100px]" />
              <p className="absolute text-3xl font-semibold top-[48%] text-white">
                3
              </p>
            </div>
            <div className=" relative w-10/12 flex flex-col rounded-2xl border-[1px] border-primary px-8 py-3 overflow-hidden bg-[#F5F5F5]">
              <div className="bg-[#34A853]  flex md:w-min w-min absolute right-[0px] top-0  items-center justify-center rounded-bl-2xl rounded-tr-2xl px-4 h-min py-2 gap-[3px]">
                <p className="text-white text-xs">4.3</p>
                <IoMdStar className="text-white text-sm" />
              </div>
              <p className="font-semibold">
                Apple iphone 13 (Blue , 6GB | 128GB)
              </p>
              <div className="w-full flex gap-[15px] my-2 relative">
                <img src={itemImg1} alt="" className="w-[200px]" />
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
                <div className="w-full">
                  <div className="flex w-full items-baseline gap-[3px] my-4">
                    <p className="text-base ">Description</p>
                    <div className="border-b-2 border-[#626262] h-min border-dotted w-full "></div>
                  </div>
                  <div className="md:flex hidden flex-col w-full">
                    <div className="border-b-2 border-[#626262] h-min border-dotted w-full "></div>
                    <div className="border-b-2 border-[#626262] h-min border-dotted w-4/12 mt-5"></div>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <div className=" mt-4 flex gap-[10px]  items-center  pb-2">
                      <p className="md:text-xl text-sm font-semibold text-[#222222]">
                        ₹10499
                      </p>
                      <p className="md:text-xl text-sm line-through text-[#222222]">
                        ₹14499
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <p className="md:text-lg text-sm font-semibold text-[#34A853]">
                        +12% Cashback
                      </p>
                      <PiInfo className="text-lg cursor-pointer hover:text-primary" />
                    </div>
                  </div>

                  <p className="text-[#34A853] md:text-sm text-[8px] font-medium border-b-2 pb-2">
                    (16 % Off)
                  </p>
                  <div className="w-full flex justify-between items-center">
                    <button className="bg-[#F07B3F] text-white rounded-lg px-6 py-1 my-2">
                      Buy Now
                    </button>
                    <PiShareNetworkLight className="md:text-3xl text-xl  cursor-pointer hover:text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/12 flex items-center justify-center bg-[#CACFE3] border-primary border-[1px] rounded-xl">
                <p className="text-black font-bold text-lg text-center">Place Holder<br/>
                Rich Text Format</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPickedByExperts;
