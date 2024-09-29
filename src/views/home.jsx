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
import itemListingImgMobile from "../assets/images/home-item-listing-mobile.png";
import itemImg1 from "../assets/images/item-img-1.png";
import amazonLogo from "../assets/images/amazon-logo.svg";
import mobileAppGroupImg from "../assets/images/mobile-app-group.png";
import appStoreLogo from "../assets/images/app-store-logo.svg";
import playStoreLogo from "../assets/images/play-store-logo.svg";
import websiteTourImg from "../assets/images/website-tour-img.png";
import { FaPlay } from "react-icons/fa";

import ProductItem from "../components/productItem";
import ProductItemCard from "../components/productItemCard";

const Home = () => {
  return (
    <div
      className="flex flex-col  md:w-10/12 w-full py-4"
      style={{ scrollbarWidth: "none" }}
    >
      {/**========= Hero Section ============ */}
      <div className="w-full flex md:flex-row flex-col justify-between gap-[10px]">
        <div className="w-full md:w-8/12">
          <div
            className="w-full flex justify-between items-center p-5 px-8 rounded-xl overflow-hidden  md:h-[300px] bg-no-repeat bg-cover"
            style={{
              background: `url(${heroBgImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="">
              <p className="md:text-2xl text-lg font-semibold">
                Discover Your Ultimate
              </p>
              <h1 className="text-2xl md:text-[4rem] md:leading-[4rem] font-bold">
                Digital Companion
              </h1>
              <button className="mt-8 bg-primary flex items-center text-white px-6 py-2 rounded-lg">
                All Products &gt;&gt;
              </button>
            </div>
            <div className="flex items-center justify-center w-5/12">
              <img
                src={heroImg1}
                alt=""
                className="md:h-full md:w-auto h-[130px] w-[200px]"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/12">
          <div className="w-full p-6 py-6 rounded-xl bg-[#E6E6E6] h-full flex flex-col justify-between">
            <div className="">
              <p className="text-[#222222] md:text-3xl text-xl md:font-medium font-semibold">
                Payment solutions with flexibility
              </p>
              <p className="font-light text-lg">
                We offer a variety of payment solutions that enable you to
                purchase the devices through convenient monthly installments.{" "}
              </p>
            </div>
            <div className="flex gap-[10px] justify-between md:mt-0 mt-4">
              <img
                src={heroPaymentImg1}
                alt=""
                className="md:h-[35px] h-[20px]"
              />
              <img
                src={heroPaymentImg2}
                alt=""
                className="md:h-[35px] h-[20px]"
              />
              <img
                src={heroPaymentImg3}
                alt=""
                className="md:h-[35px] h-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/**======== products listing =========== */}
      <div className="w-full flex flex-col my-8 md:px-0 px-4">
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
        <div className="flex md:flex-nowrap flex-wrap md:gap-[30px] gap-[10px] my-4 justify-between">
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
      <div className="w-full flex flex-col my-8 md:px-0 px-4">
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
        <div className="flex md:flex-nowrap flex-wrap md:gap-[30px] gap-[10px] my-4 justify-between">
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

      {/**========  listing =========== */}
      <div
        className="w-full flex md:flex-nowrap flex-wrap md:gap-[20px]  overflow-x-scroll border-y-[1px] py-8"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="md:h-full h-[200px] md:w-[300px] w-full flex-shrink-0 bg-cover p-3 md:px-3 px-8 md:pt-3 pt-6 bg-image ">
          <p className="md:text-xl text-2xl font-semibold">
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
       {/**========  listing =========== */}
       <div
        className="w-full flex md:flex-nowrap flex-wrap md:gap-[20px]  overflow-x-scroll border-y-[1px] py-8"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="md:h-full h-[200px] md:w-[300px] w-full flex-shrink-0 bg-cover p-3 md:px-3 px-8 md:pt-3 pt-6 bg-image ">
          <p className="md:text-xl text-2xl font-semibold">
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

      {/**============ mobile app group banner ============== */}
      <p className="text-center text-2xl font-medium my-4">
        Download <span className="text-primary">BuyerSathi</span> App
      </p>
      <div className="w-full flex pt-4   justify-center bg-[#E8E8E8] rounded-xl">
        <div className="md:w-8/12  w-full md:px-0 px-3 gap-[15px] flex justify-between">
          <div className="flex justify-center items-end">
            <img
              src={mobileAppGroupImg}
              alt=""
              className="h-[200px] w-[230px] "
            />
          </div>
          <div className="w-6/12 py-5">
            <p className="text-base">
              Get the best products picked by experts at the best price with
              exciting offers from Flipkart, Amazon, Paytm and lots more.
            </p>
            <p className="text-base mt-8 ">Download App From</p>
            <div className="flex gap-[20px] mt-4 md:mb-8">
              <button className="bg-[#000000] rounded-lg px-2 py-1">
                <img src={appStoreLogo} alt="" className="w-[120px] h-[50px]" />
              </button>
              <button className="bg-[#000000] rounded-lg px-2 py-1">
                <img
                  src={playStoreLogo}
                  alt=""
                  className="w-[120px] h-[50px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/**============ complete guide row ============== */}
      <p className="font-medium text-center my-8 text-2xl">
        A complete Guide to use <span className="text-primary">BuyerSathi</span>
      </p>
      <div className="w-full flex md:flex-row flex-col md:px-0 px-3  justify-between gap-[30px] ">
        <div className="md:w-3/12 w-full shadow-lg rounded-lg overflow-hidden border pb-8">
          <div className="relative w-full flex items-center justify-center">
            <img src={websiteTourImg} alt="" className="w-full h-[150px]" />
            <div className="group absolute w-[50px] h-[50px] rounded-full flex items-center justify-center border-[7px] border-white shadow-2xl cursor-pointer hover:border-primary transition-all duration-150">
              <FaPlay className="text-white text-lg shadow-xl group-hover:text-primary" />
            </div>
          </div>

          <p className="text-center my-3 text-base">Title 1</p>
          <div className="flex w-full items-baseline gap-[3px] px-3 my-4">
            <p className="text-base text-[#1C1C1C]">Description</p>
            <div className="border-b-2 border-[#1C1C1C] h-min border-dotted w-full "></div>
          </div>
          <div className="flex px-3 flex-col w-full">
            <div className="border-b-2 border-[#1C1C1C] h-min border-dotted w-full "></div>
            <div className="border-b-2 border-[#1C1C1C] h-min border-dotted w-4/12 mt-5"></div>
          </div>
        </div>
        <div className="md:w-3/12 w-full shadow-lg rounded-lg overflow-hidden border pb-8">
          <div className="relative w-full flex items-center justify-center">
            <img src={websiteTourImg} alt="" className="w-full h-[150px]" />
            <div className="group absolute w-[50px] h-[50px] rounded-full flex items-center justify-center border-[7px] border-white shadow-2xl cursor-pointer hover:border-primary transition-all duration-150">
              <FaPlay className="text-white text-lg shadow-xl group-hover:text-primary" />
            </div>
          </div>

          <p className="text-center my-3 text-base">Title 1</p>
          <div className="flex w-full items-baseline gap-[3px] px-3 my-4">
            <p className="text-base text-[#1C1C1C]">Description</p>
            <div className="border-b-2 border-[#1C1C1C] h-min border-dotted w-full "></div>
          </div>
          <div className="flex px-3 flex-col w-full">
            <div className="border-b-2 border-[#1C1C1C] h-min border-dotted w-full "></div>
            <div className="border-b-2 border-[#1C1C1C] h-min border-dotted w-4/12 mt-5"></div>
          </div>
        </div>
        <div className="md:w-3/12 w-full shadow-lg rounded-lg overflow-hidden border pb-8">
          <div className="relative w-full flex items-center justify-center">
            <img src={websiteTourImg} alt="" className="w-full h-[150px]" />
            <div className="group absolute w-[50px] h-[50px] rounded-full flex items-center justify-center border-[7px] border-white shadow-2xl cursor-pointer hover:border-primary transition-all duration-150">
              <FaPlay className="text-white text-lg shadow-xl group-hover:text-primary" />
            </div>
          </div>

          <p className="text-center my-3 text-base">Title 1</p>
          <div className="flex w-full items-baseline gap-[3px] px-3 my-4">
            <p className="text-base text-[#1C1C1C]">Description</p>
            <div className="border-b-2 border-[#1C1C1C] h-min border-dotted w-full "></div>
          </div>
          <div className="flex px-3 flex-col w-full">
            <div className="border-b-2 border-[#1C1C1C] h-min border-dotted w-full "></div>
            <div className="border-b-2 border-[#1C1C1C] h-min border-dotted w-4/12 mt-5"></div>
          </div>
        </div>
        <div className="md:w-3/12 w-full shadow-lg rounded-lg overflow-hidden border pb-8">
          <div className="relative w-full flex items-center justify-center">
            <img src={websiteTourImg} alt="" className="w-full h-[150px]" />
            <div className="group absolute w-[50px] h-[50px] rounded-full flex items-center justify-center border-[7px] border-white shadow-2xl cursor-pointer hover:border-primary transition-all duration-150">
              <FaPlay className="text-white text-lg shadow-xl group-hover:text-primary" />
            </div>
          </div>

          <p className="text-center my-3 text-base">Title 1</p>
          <div className="flex w-full items-baseline gap-[3px] px-3 my-4">
            <p className="text-base text-[#1C1C1C]">Description</p>
            <div className="border-b-2 border-[#1C1C1C] h-min border-dotted w-full "></div>
          </div>
          <div className="flex px-3 flex-col w-full">
            <div className="border-b-2 border-[#1C1C1C] h-min border-dotted w-full "></div>
            <div className="border-b-2 border-[#1C1C1C] h-min border-dotted w-4/12 mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
