import React from "react";

const ProductItem = ({ images, productName }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" rounded-full h-[115px] w-[115px] p-5 bg-[#F5F5F5] shadow-xl flex items-center justify-center">
        <img src={images} alt="" className="w-full h-full" />
      </div>
      <p className="text-sm mt-4">{productName}</p>
    </div>
  );
};

export default ProductItem;
