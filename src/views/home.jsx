import React from "react";
import { GoChevronRight } from "react-icons/go";
import heroBgImg from "../assets/images/hero-section-img-1.png";
import heroImg1 from "../assets/images/hero-section-img-2.png";
import heroPaymentImg1 from "../assets/images/hero-payment-1.svg";
import heroPaymentImg2 from "../assets/images/hero-payment-2.svg";
import heroPaymentImg3 from "../assets/images/hero-payment-3.svg";
import productItemImg1 from "../assets/images/product-img-1.png";
import productItemImg2 from "../assets/images/product-img-2.png";
import productItemImg3 from "../assets/images/product-img-3.png";
import productItemImg4 from "../assets/images/product-img-4.png";
import productItemImg5 from "../assets/images/product-img-5.png";
import productItemImg6 from "../assets/images/product-img-6.png";
import productItemImg7 from "../assets/images/product-img-7.png";

import itemListingImg1 from "../assets/images/home-item-listing-1.jpg";
import itemImg1 from "../assets/images/item-img-1.png";
import amazonLogo from "../assets/images/amazon-logo.svg";

import ProductItem from "../components/productItem";
import ProductItemCard from "../components/productItemCard";

const Home = () => {
  return (
    <div className="flex flex-col  w-10/12 py-4">
      {/**========= Hero Section ============ */}
      <div className="w-full flex justify-between gap-[10px]">
        <div className="w-8/12">
          <div
            className="w-full flex justify-between items-center p-5 px-8 rounded-xl overflow-hidden  h-[300px] bg-no-repeat bg-cover"
            style={{
              background: `url(${heroBgImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="">
              <p className="text-2xl font-semibold">Discover Your Ultimate</p>
              <h1 className="text-[4rem] leading-[4rem] font-bold">
                Digital Companion
              </h1>
              <button className="mt-8 bg-primary flex items-center text-white px-6 py-2 rounded-lg">
                All Products &gt;&gt;
              </button>
            </div>
            <div className="flex items-center justify-center w-5/12">
              <img src={heroImg1} alt="" className="h-full" />
            </div>
          </div>
        </div>
        <div className="w-4/12">
          <div className="w-full p-6 py-6 rounded-xl bg-[#E6E6E6] h-full flex flex-col justify-between">
            <div className="">
              <p className="text-[#222222] text-3xl font-medium">
                Payment solutions with flexibility
              </p>
              <p className="font-light text-lg">
                We offer a variety of payment solutions that enable you to
                purchase the devices through convenient monthly installments.{" "}
              </p>
            </div>
            <div className="flex gap-[10px] justify-between">
              <img src={heroPaymentImg1} alt="" className="h-[35px]" />
              <img src={heroPaymentImg2} alt="" className="h-[35px]" />
              <img src={heroPaymentImg3} alt="" className="h-[35px]" />
            </div>
          </div>
        </div>
      </div>
      {/**======== products listing=========== */}
      <div className="w-full flex flex-col my-8">
        <div className="w-full flex justify-between">
          <p className="text-xl font-medium text-primary">Products</p>
          <div className="flex gap-[5px] items-center cursor-pointer">
            <p className="text-[#A3A3A3] hover:text-black">View More </p>
            <GoChevronRight className="text-[#A3A3A3] hover:text-black" />
          </div>
        </div>
        <div className="flex w-full border-b-[1px] mt-4">
          <div className="h-[3px] w-3/12 bg-primary rounded-md"></div>
        </div>
        <div className="flex gap-[30px] my-4 justify-between">
          <ProductItem images={productItemImg1} productName="Air Conditioner" />
          <ProductItem images={productItemImg2} productName="Printer" />
          <ProductItem images={productItemImg3} productName="Laptop" />
          <ProductItem images={productItemImg4} productName="Camera" />
          <ProductItem images={productItemImg5} productName="Earbuds" />
          <ProductItem images={productItemImg6} productName="SmartWatch" />
          <ProductItem images={productItemImg7} productName="Mobile" />
          <ProductItem images={productItemImg1} productName="Air Conditioner" />
        </div>
      </div>
      {/**======== services listing=========== */}
      <div className="w-full flex flex-col my-8">
        <div className="w-full flex justify-between">
          <p className="text-xl font-medium text-primary">Services</p>
          <div className="flex gap-[5px] items-center cursor-pointer">
            <p className="text-[#A3A3A3] hover:text-black">View More </p>
            <GoChevronRight className="text-[#A3A3A3] hover:text-black" />
          </div>
        </div>
        <div className="flex w-full border-b-[1px] mt-4">
          <div className="h-[3px] w-3/12 bg-primary rounded-md"></div>
        </div>
        <div className="flex gap-[30px] my-4 justify-between">
          <ProductItem images={productItemImg1} productName="Air Conditioner" />
          <ProductItem images={productItemImg2} productName="Printer" />
          <ProductItem images={productItemImg3} productName="Laptop" />
          <ProductItem images={productItemImg4} productName="Camera" />
          <ProductItem images={productItemImg5} productName="Earbuds" />
          <ProductItem images={productItemImg6} productName="SmartWatch" />
          <ProductItem images={productItemImg7} productName="Mobile" />
          <ProductItem images={productItemImg1} productName="Air Conditioner" />
        </div>
      </div>

      {/**========  listing=========== */}
      <div
        className="w-full flex gap-[20px] overflow-x-scroll border-y-[1px] py-8"
        style={{ scrollbarWidth: "none" }}
      >
        <div
          className="h-full w-[300px] flex-shrink-0 bg-cover p-3"
          style={{ backgroundImage: `url(${itemListingImg1})` }}
        >
          <p className="text-xl font-semibold">
            Trending items on the internet
          </p>
          <button className="bg-white text-sm font-medium px-6 py-2 rounded-md mt-8">
            View All
          </button>
        </div>
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
      {/**========  listing=========== */}
      <div
        className="w-full flex gap-[20px] overflow-x-scroll border-y-[1px] py-8"
        style={{ scrollbarWidth: "none" }}
      >
        <div
          className="h-full w-[300px] flex-shrink-0 bg-cover p-3"
          style={{ backgroundImage: `url(${itemListingImg1})` }}
        >
          <p className="text-xl font-semibold">
            Trending items on the internet
          </p>
          <button className="bg-white text-sm font-medium px-6 py-2 rounded-md mt-8">
            View All
          </button>
        </div>
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
    </div>
  );
};

export default Home;
