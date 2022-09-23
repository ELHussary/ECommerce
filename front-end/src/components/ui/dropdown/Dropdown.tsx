import React from "react";

const Dropdown = () => {
  return (
    <div className="dropdown hidden w-56 absolute z-10 translate-y-1 left-0 rounded-md bg-white border border-gray-100  text-sm font-normal">
      <ul className="py-2.5">
        <li>
          <button className="flex w-full items-center justify-between px-4 py-2 hover:bg-gray-50">
            1. Target
          </button>
        </li>

        <li>
          <button className="flex w-full items-center justify-between px-4 py-2 hover:bg-gray-50">
            2. Pitch
          </button>
        </li>

        <li>
          <button className="flex w-full items-center justify-between px-4 py-2 hover:bg-gray-50">
            3. Follow up
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
