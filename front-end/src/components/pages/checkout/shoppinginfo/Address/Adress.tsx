import React from "react";

const Adress = () => {
  return (
    <div className="mb-10">
      <h1 className="text-lg font-semibold mb-3">Shopping Information</h1>
      <div className="border p-4 max-w-lg">
        <ul className="grid gap-1 text-sm text-gray-500">
          <li>Ahmed Wael</li>
          <li>El-Marwa Bldg. Moustafa Kamel St., SEMOUHA</li>
          <li>Alexandria</li>
          <li>Egypt</li>
          <li>+201020305060</li>

          <li className="flex items-center gap-4 pt-4">
            <button className="border p-1.5 px-3">Edit address</button>
            <button className="border px-3 py-1.5 text-indigo-400">
              Add new
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Adress;
