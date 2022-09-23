import React from "react";

const Quantity = () => {
  return (
    <form>
      <label className="block mb-0.5 text-sm">Quantity :</label>
      <input
        type="number"
        min="1"
        defaultValue={1}
        max="10"
        className="border-gray-300 focus:ring-indigo-200 text-sm"
      />
    </form>
  );
};

export default Quantity;
