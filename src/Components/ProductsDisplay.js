import React from "react";
import Products from "./Products";

const ProductsDisplay = () => {
  return (
    <div className="">
      <div className="relative bg-gradient-to-b from-[o] to-white flex justify-center  ">

      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" className="z-0 mix-blend-overlay " alt="" />

      </div>
      <div className=" relative  z-10" >
        <Products/>
      </div>
   
    </div>
  );
};

export default ProductsDisplay;
