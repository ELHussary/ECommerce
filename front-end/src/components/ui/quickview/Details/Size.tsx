import React from "react";

const Size = () => {
  return (
    <form>
      <label className="block mb-0.5 text-sm">Size :</label>
      <select
        name="size"
        className="border-gray-300 focus:ring-indigo-200 text-sm"
      >
        <option value="small">Small</option>
        <option value="meduim">Meduim</option>
        <option value="large">Large</option>
        <option value="xl_large">X-large</option>
        <option value="xx_large">XX-large</option>
      </select>
    </form>
  );
};

export default Size;
