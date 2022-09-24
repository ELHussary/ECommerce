import React from "react";
import Range from "rc-slider";
import "rc-slider/assets/index.css";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";

const Price = () => {
  const [price, setPrice] = React.useState<boolean>(false);
  const [currentPrice, setcurrentPrice] = React.useState<number[]>([5, 1000]);
  return (
    <>
      {/* Price */}
      <div className="mb-3">
        <div
          className="flex gap-1 items-center pb-2 cursor-pointer"
          onClick={() => setPrice(!price)}
        >
          {price ? (
            <RiArrowDownSLine size={20} />
          ) : (
            <RiArrowRightSLine size={20} />
          )}
          <h1>Price</h1>
        </div>

        {price && (
          <div className="px-3">
            <div className="flex justify-between text-gray-500 pb-1">
              <p className="-translate-x-2">${currentPrice[0]}</p>
              <p className="translate-x-2.5">${currentPrice[1]}</p>
            </div>
            <Range
              range
              onChange={(sliderValues: any) => setcurrentPrice(sliderValues)}
              defaultValue={currentPrice}
              min={5}
              max={1000}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Price;
