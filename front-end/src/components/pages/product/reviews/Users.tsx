import React from "react";
import { RiStarSFill, RiThumbUpLine, RiThumbDownLine } from "react-icons/ri";
const Users = () => {
  return (
    <div className="flex gap-16 items-start py-6">
      <div className="flex gap-4">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt=""
          className="w-8 h-8 object-cover rounded-full"
        />
        <div className="text-sm whitespace-nowrap">
          <p>Ahmed Wael</p>
          <p className="text-gray-500">2 days ago</p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-1 pb-2">
          <RiStarSFill size={18} className="text-indigo-500" />
          <RiStarSFill size={18} className="text-indigo-500" />
          <RiStarSFill size={18} className="text-indigo-500" />
        </div>

        <h1 className="font-semibold text-lg mb-2">
          Lorem ipsum dolor sit amet consectetur
        </h1>

        <p className="text-sm leading-relaxed max-w-xl mb-3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          doloremque iste dolor ea ullam magni velit Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatibus doloremque iste dolor ea
          ullam magni velit
        </p>

        {/* <div className="mb-3">Images if Exists</div> */}

        <div className="flex items-center gap-3 ">
          <button className="text-gray-500 border px-3 p-1.5 rounded-2xl flex items-start gap-1">
            <RiThumbUpLine size={19} />
            <p className="text-sm">(11)</p>
          </button>
          <button className="text-gray-500 border px-3 p-1.5 rounded-2xl flex items-start gap-1">
            <RiThumbDownLine size={19} />
            <p className="text-sm">(5)</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
