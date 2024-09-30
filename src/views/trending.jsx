import React, { useState } from "react";
import { BsBoxes } from "react-icons/bs";
import { FaGears } from "react-icons/fa6";
import itemImg1 from "../assets/images/item-img-1.png";
import amazonLogo from "../assets/images/amazon-logo.svg";
import ProductItemCard from "../components/productItemCard";

const Trending = () => {
  const [isTrendingItemsShow, setIsTrendingItemsShow] = useState(true);
  return (
    <div className="md:w-10/12 w-full flex flex-col items-center">
      <div className="w-max mt-5 flex items-center justify-center rounded-lg bg-[#D9D9D9]">
        <div
          className={`${
            isTrendingItemsShow ? "bg-[#F07B3F] rounded-lg" : ""
          }  md:px-16 px-3 py-2 cursor-pointer gap-[10px] flex items-center justify-center`}
          onClick={() => setIsTrendingItemsShow(true)}
        >
          <BsBoxes
            className={` ${
              isTrendingItemsShow ? "text-white" : "text-black"
            }  md:text-3xl text-lg `}
          />
          <p
            className={`md:text-base text-xs ${
              isTrendingItemsShow ? "text-white" : "text-black"
            }  `}
          >
            Trending Items
          </p>
        </div>
        <div
          className={`${
            isTrendingItemsShow ? "" : "bg-[#34A853] rounded-lg"
          } md:px-16 px-3 py-2 cursor-pointer gap-[10px] flex items-center justify-center`}
          onClick={() => setIsTrendingItemsShow(false)}
        >
          <FaGears
            className={` ${
              isTrendingItemsShow ? "text-black" : "text-white"
            }  md:text-3xl text-lg `}
          />
          <p
            className={`md:text-base text-xs ${
              isTrendingItemsShow ? "text-black" : "text-white"
            }  `}
          >
            Recommended Deals
          </p>
        </div>
      </div>
      {isTrendingItemsShow ? (
        <>
          <p className="text-base font-light my-4 px-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="w-full flex flex-wrap gap-y-6">
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
          </div>
        </>
      ) : (
        <>
          <p className="text-base font-light my-4 px-3">
            Recommended deals are launched, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="w-full flex flex-wrap gap-y-6">
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
            <ProductItemCard
              image={itemImg1}
              name="Apple iphone 13 (Blue, 6GB | 128 GB)"
              rating="4.3"
              price="14499"
              discountedPrice="10499"
              discountPercentage="16"
              companyLogo={amazonLogo}
              cashbackPercent="12"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Trending;
