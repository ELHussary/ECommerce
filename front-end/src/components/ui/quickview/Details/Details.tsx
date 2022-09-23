import React from "react";
import { RiStarSFill } from "react-icons/ri";

const Details = (props: any) => {
  return (
    <div>
      <h1 className="text-2xl py-1 font-semibold">
        {props.productDetail.name}
      </h1>
      <p className="text-xl font-semibold">{props.productDetail.price}</p>
      <div className="flex items-center gap-1 py-2">
        <RiStarSFill size={18} className="text-indigo-500" />
        <RiStarSFill size={18} className="text-indigo-500" />
        <RiStarSFill size={18} className="text-indigo-500" />
        <RiStarSFill size={18} className="text-gray-300" />
        <RiStarSFill size={18} className="text-gray-300" />
        <p>| 100</p>
      </div>

      <p className="text-sm">
        Availability:
        <span className="font-normal text-indigo-600"> In Stock</span>
      </p>

      <p className="leading-relaxed text-sm py-2 text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        fugit nulla atque quam dolor Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Reprehenderit fugit nulla atque quam dolor
      </p>
    </div>
  );
};

export default Details;
