import React from "react";
import shipping from "@/assets/svg/actions/shipping.svg";
import cashondelivery from "@/assets/svg/actions/cashondelivery.svg";

const cache: string[] = [];

function importAll(r: any) {
  r.keys().forEach((key: any) => (cache[key] = r(key)));
}

importAll(require.context("/assets/svg/payments", false, /\.(png|jpe?g|svg)$/));
const images = Object.entries(cache).map((module: any) => module[1].default);

const Payment = () => {
  return (
    <>
      <div className="pt-4 flex gap-3 text-gray-500">
        <div className="flex items-center gap-2 text-sm">
          <img src={shipping.src} className="w-8" alt="" />
          <p>Shipping in 2-3 days</p>
        </div>

        <div className="flex items-center gap-2 text-sm ">
          <img src={cashondelivery.src} className="w-8" alt="" />
          <p>Cash on delivery</p>
        </div>
      </div>

      <div className="py-4 flex gap-3 items-center flex-wrap">
        <p className="text-sm text-gray-500">Payment method:</p>
        {images.map((image) => (
          <img className="w-9" src={image.src} alt={image} />
        ))}
      </div>
    </>
  );
};

export default Payment;
