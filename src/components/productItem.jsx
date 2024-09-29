import React from "react";

const ProductItem = ({ images, productName }) => {
  return (
    <div className="flex flex-col justify-center items-center md:my-0 my-3">
      <div className=" rounded-full md:h-[115px] h-[80px] md:w-[115px] w-[80px] p-5 bg-[#F5F5F5] shadow-xl flex items-center justify-center">
        <img src={images} alt="" className="w-full h-full" />
      </div>
      <p className="md:text-sm text-xs mt-4">{productName}</p>
    </div>
  );
};

export default ProductItem;
