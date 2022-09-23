import React from "react";

const Colour = () => {
  return (
    <div>
      <form>
        <label className="block mb-0.5 text-sm">Colour :</label>
        <select
          name="colour"
          className="border-gray-300 focus:ring-indigo-200 text-sm rounded-sm"
        >
          <option value="black">Black</option>
          <option value="grey">Grey</option>
          <option value="white">White</option>
        </select>
      </form>
    </div>
  );
};

export default Colour;
