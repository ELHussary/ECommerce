import React from "react";
import { RiStarSFill } from "react-icons/ri";
import Images from "./Images";
import Users from "./Users";

const productReviews = [
  {
    star: "",
  },
];

const Stars = (props: any) => {
  return (
    <div className="flex py-2 items-center gap-3">
      <div className="flex items-center gap-1">
        <RiStarSFill size={24} className="text-indigo-500" />
        <p>{props.number}</p>
      </div>
      <div className="w-40 bg-gray-100 rounded-full">
        <span
          className={`${props.width} h-3 bg-indigo-500 rounded-full block`}
        ></span>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <header className="py-10">
      <h1 className="text-2xl font-semibold">Ratings And Reviews</h1>

      <section className="flex items-start py-6 gap-8">
        <div className="py-3">
          <h1 className="text-3xl font-semibold">4.0</h1>
          <div className="flex items-center gap-1 py-2">
            <RiStarSFill size={18} className="text-indigo-500" />
            <RiStarSFill size={18} className="text-indigo-500" />
            <RiStarSFill size={18} className="text-indigo-500" />
            <RiStarSFill size={18} className="text-indigo-500" />
            <RiStarSFill size={18} className="text-gray-300" />
          </div>
          <p className="pb-4 text-gray-500">20 Ratings</p>
        </div>

        <div>
          <Stars number={5} width="w-10" />
          <Stars number={4} width="w-7" />
          <Stars number={3} width="w-24" />
          <Stars number={2} width="w-20" />
          <Stars number={1} width="w-40" />
        </div>
      </section>

      {/* <section className="pb-14">
        <h1 className="text-2xl pb-4 font-semibold">Reviews With Images</h1>
        <Images />
      </section> */}

      <section>
        <h1 className="text-2xl font-semibold">All Reviews</h1>
        <Users />
        <Users />
        <Users />
      </section>
    </header>
  );
};

export default Reviews;
