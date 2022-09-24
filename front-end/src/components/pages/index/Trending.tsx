import React from "react";

type Props = {};

const Trending = (props: Props) => {
  return (
    <div className="grid grid-cols-2 items-center rounded-3xl bg-white shadow-xl shadow-gray-200 px-10">
      <div>
        <h1 className="text-4xl mb-4">Dialo Long Dress</h1>
        <p className="mb-6 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="mb-2">
          <ul className="flex gap-14 text-sm">
            <li>Price:</li>
            <li>Color:</li>
            <li>Size:</li>
          </ul>
        </div>
        <div className="mb-6">
          <ul className="flex gap-14 items-center text-sm">
            <li>$500</li>
            <li className="flex items-center gap-3">
              <span className="bg-red-500 w-4 h-4 rounded-full block"></span>
              <span className="bg-yellow-500 w-4 h-4 rounded-full block"></span>
              <span className="bg-purple-500 w-4 h-4 rounded-full block"></span>
            </li>
            <li className="flex gap-3 -translate-x-6 text-gray-400">
              <p>S</p>
              <p>M</p>
              <p>L</p>
              <p>XL</p>
            </li>
          </ul>
        </div>
        <button className=" bg-purple-500 text-white text-sm px-8 py-2 rounded-full">
          Buy Now
        </button>
      </div>
      <div>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b1103cae-0fca-497e-bfee-70bbf7f89e6d/d68mq8a-5cbe3a64-f08a-468f-9a65-375236f405f1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IxMTAzY2FlLTBmY2EtNDk3ZS1iZmVlLTcwYmJmN2Y4OWU2ZFwvZDY4bXE4YS01Y2JlM2E2NC1mMDhhLTQ2OGYtOWE2NS0zNzUyMzZmNDA1ZjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BcLXUgNnNeOVD62FLvxkxtYlFQYemAWZ_AdbR6pAFGE"
          alt=""
          className="max-w-sm"
        />
      </div>
    </div>
  );
};

export default Trending;
