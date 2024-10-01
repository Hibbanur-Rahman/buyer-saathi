import React, { useEffect } from "react";
import ProductItemCard from "../../components/productItemCard";
import itemImg1 from "../../assets/images/item-img-1.png";
import amazonLogo from "../../assets/images/amazon-logo.svg";
const SavedItems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full flex flex-wrap gap-y-[20px]">
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
  );
};

export default SavedItems;
