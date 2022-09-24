import React from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

const Category = [
  {
    name: "Pants & Shorts",
  },
  {
    name: "Tees",
  },
  {
    name: "Sweatshirts",
  },
  {
    name: "Crewnecks",
  },
];
const Colors = [
  {
    name: "Black",
  },
  {
    name: "White",
  },
  {
    name: "Red",
  },
];

const Size = [
  {
    name: "Small",
  },
  {
    name: "Medium",
  },
  {
    name: "Large",
  },
  {
    name: "X-Large",
  },
  {
    name: "XX-Large",
  },
];

const GetFilter = (props: any) => {
  return (
    <form>
      {props.data.map((mac: any, idx: number) => {
        return (
          <div className="flex items-center py-2 text-sm px-1" key={idx}>
            <input
              type="checkbox"
              name="color[]"
              id={mac.name}
              value={mac.name}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor={mac.name}
              className="ml-2 min-w-0 flex-1 text-gray-500"
            >
              {mac.name}
            </label>
          </div>
        );
      })}
    </form>
  );
};
const Filter = () => {
  const [category, setCategory] = React.useState<boolean>(true);
  const [price, setPrice] = React.useState<boolean>(true);
  const [colors, setColors] = React.useState<boolean>(true);
  const [size, setSize] = React.useState<boolean>(true);

  const [currentPrice, setcurrentPrice] = React.useState<number[]>([5, 1000]);
  return (
    <header>
      {/* Category */}
      <div className="mb-6">
        <div
          className="flex gap-1 items-center pb-2 cursor-pointer"
          onClick={() => setCategory(!category)}
        >
          <h1>Category</h1>
          {category ? (
            <RiArrowUpSLine size={20} />
          ) : (
            <RiArrowDownSLine size={20} />
          )}
        </div>

        {category && <GetFilter data={Category} />}
      </div>

      {/* Price */}
      <div className="mb-6">
        <div
          className="flex gap-1 items-center pb-2 cursor-pointer"
          onClick={() => setPrice(!price)}
        >
          <h1>Price</h1>
          {price ? (
            <RiArrowUpSLine size={20} />
          ) : (
            <RiArrowDownSLine size={20} />
          )}
        </div>

        {price && (
          <div className=" px-1 w-52 relative">
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

      {/* Colors */}
      <div className="mb-6">
        <div
          className="flex gap-1 items-center pb-2 cursor-pointer"
          onClick={() => setColors(!colors)}
        >
          <h1>Colour</h1>
          {colors ? (
            <RiArrowUpSLine size={20} />
          ) : (
            <RiArrowDownSLine size={20} />
          )}
        </div>

        {colors && <GetFilter data={Colors} />}
      </div>

      {/* Size */}
      <div className="mb-6">
        <div
          className="flex gap-1 items-center pb-2 cursor-pointer"
          onClick={() => setSize(!size)}
        >
          <h1>Size</h1>
          {size ? <RiArrowUpSLine size={20} /> : <RiArrowDownSLine size={20} />}
        </div>

        {size && <GetFilter data={Size} />}
      </div>

      <div className="mb-6 flex gap-3 items-center">
        <button className="bg-indigo-600 py-1 px-4 rounded-md text-white ">
          Apply
        </button>
        <button className="border py-1 px-4 rounded-md">Reset</button>
      </div>
    </header>
  );
};

export default Filter;
