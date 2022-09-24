import React from "react";

const Product = () => {
  return (
    <div className="flex gap-4 mb-6">
      <img
        src="https://cdn.outfitbook.fr/26317-thickbox_default/jogger-short-dark-green.jpg?_ga=2.61955052.1799479511.1662785947-1104294664.1662785947"
        alt=""
        className="w-24 object-cover rounded-lg"
      />
      <div>
        <h1 className="font-semibold">Oversize knit jumper</h1>
        <p>120 EGP</p>
        <div className="grid gap-1 pt-0.5 text-xs">
          <p className="text-gray-600">Color: Black</p>
          <p className="text-gray-600">Size: XL</p>
          <div className="flex gap-1 items-center">
            <p className="text-gray-600">Quantity: 1</p>
            <button className=" text-indigo-600">Change</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShoppingCart = () => {
  return (
    <>
      <h1 className="text-lg font-semibold mb-5">Shopping Cart</h1>
      <section className="border p-4 mb-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-2">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="items-center mb-2 text-sm text-gray-500">
          <p className="mb-1">Subtotal: $160</p>
          <p>Shipping: Free</p>
        </div>
        <p className="font-semibold">Total: $160</p>
      </section>
    </>
  );
};

export default ShoppingCart;
