import { useState } from "react";

import ProductItem from "../components/ProductItem";
import { BsBoxes } from "react-icons/bs";
import { FaGears } from "react-icons/fa6";
import productCategorySidebarImg from "../assets/images/product-category-sidebar-img.png";

// Product images
import productItemImg1 from "../assets/images/product-img-1.png";
import productItemImg2 from "../assets/images/product-img-2.png";
import productItemImg3 from "../assets/images/product-img-3.png";
import productItemImg4 from "../assets/images/product-img-4.png";
import productItemImg5 from "../assets/images/product-img-5.png";
import productItemImg6 from "../assets/images/product-img-6.png";
import productItemImg7 from "../assets/images/product-img-7.png";

// Sidebar Item Component
const SidebarItem = ({ title }) => (
  <div className="w-full flex items-center py-2 px-4 gap-[10px] hover:bg-[#F07B3F] cursor-pointer">
    <img
      src={productCategorySidebarImg}
      alt={title}
      className="w-[40px] h-[40px]"
    />
    <p className="text-base">{title}</p>
  </div>
);

// Category Section Component
const CategorySection = ({ sectionTitle, highlight, products }) => (
  <div className="w-full flex flex-col my-6  md:px-0 px-4">
    <div className="w-full flex justify-between">
      <p className="text-xl font-medium text-black">
        {sectionTitle} <span className="text-primary">{highlight}</span>
      </p>
    </div>
    <div className="flex w-full border-b-[1px] mt-4">
      <div className="h-[3px] w-3/12 bg-primary rounded-md"></div>
    </div>
    <div
      className="flex md:flex-nowrap flex-wrap md:gap-[30px] gap-[10px] my-4 justify-between overflow-x-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      {products.map((product, index) => (
        <ProductItem
          key={index}
          images={product.img}
          productName={product.name}
        />
      ))}
    </div>
  </div>
);

// Main Product Category Component
const ProductCategory = () => {
  const [isProductCategoryShow, setIsProductCategoryShow] = useState(true);
  const categories = [
    "Popular Products",
    "Lifestyle Products",
    "Mobile & Gadgets",
    "Consumer Electronics",
    "Category Group",
    "Popular Products",
    "Lifestyle Products",
  ];
  const services = [
    "House clean",
    "welding",
    "Electrician",
    "Consumer Electronics",
    "Category Group",
    "Popular Products",
    "Lifestyle Products",
  ];

  // Products for each category section
  const products = [
    { img: productItemImg1, name: "Air Conditioner" },
    { img: productItemImg2, name: "Printer" },
    { img: productItemImg3, name: "Laptop" },
    { img: productItemImg4, name: "Camera" },
    { img: productItemImg5, name: "Earbuds" },
    { img: productItemImg6, name: "SmartWatch" },
    { img: productItemImg7, name: "Mobile" },
  ];

  return (
    <div className="w-10/12 flex flex-col items-center">
      <div className="w-min mt-5 flex items-center justify-center rounded-lg bg-[#D9D9D9]">
        <div
          className={`${
            isProductCategoryShow ? "bg-primary rounded-lg" : ""
          }  px-16 py-2 cursor-pointer gap-[10px] flex items-center justify-center`}
          onClick={() => setIsProductCategoryShow(true)}
        >
          <BsBoxes
            className={` ${
              isProductCategoryShow ? "text-white" : "text-black"
            }  text-3xl `}
          />
          <p
            className={` ${
              isProductCategoryShow ? "text-white" : "text-black"
            }  `}
          >
            Products
          </p>
        </div>
        <div
          className={`${
            isProductCategoryShow ? "" : "bg-primary rounded-lg"
          } px-16 py-2 cursor-pointer gap-[10px] flex items-center justify-center`}
          onClick={() => setIsProductCategoryShow(false)}
        >
          <FaGears
            className={` ${
              isProductCategoryShow ? "text-black" : "text-white"
            }  text-3xl `}
          />
          <p
            className={` ${
              isProductCategoryShow ? "text-black" : "text-white"
            }  `}
          >
            Services
          </p>
        </div>
      </div>

      <div className="w-full flex gap-[2rem] mt-5">
        {isProductCategoryShow ? (
          <>
            {/** Sidebar for categories */}
            <div className="w-3/12 flex h-max flex-col rounded-xl bg-[#F1F1F1] border py-3">
              {categories.map((category, index) => (
                <SidebarItem key={index} title={category} />
              ))}
            </div>

            {/** Items listing for the category products */}
            <div
              className="w-9/12 flex flex-col overflow-x-scroll h-[90vh] overflow-y-scroll"
              style={{ scrollbarWidth: "none" }}
            >
              <CategorySection
                sectionTitle="Mobile"
                highlight="Phones"
                products={products}
              />
              <CategorySection
                sectionTitle="Computer &"
                highlight="Accessories"
                products={products}
              />
              <CategorySection
                sectionTitle="Other"
                highlight="Categories"
                products={products}
              />
            </div>
          </>
        ) : (
            <>
            {/** Sidebar for categories */}
            <div className="w-3/12 flex h-max flex-col rounded-xl bg-[#F1F1F1] border py-3">
              {services.map((category, index) => (
                <SidebarItem key={index} title={category} />
              ))}
            </div>

            {/** Items listing for the category products */}
            <div
              className="w-9/12 flex flex-col overflow-x-scroll h-[90vh] overflow-y-scroll"
              style={{ scrollbarWidth: "none" }}
            >
              <CategorySection
                sectionTitle="House"
                highlight="Clean"
                products={products}
              />
              <CategorySection
                sectionTitle="Welding"
                highlight="Machines"
                products={products}
              />
              <CategorySection
                sectionTitle="Other"
                highlight="Services"
                products={products}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
