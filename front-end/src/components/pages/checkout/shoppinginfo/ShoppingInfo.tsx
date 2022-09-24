import React from "react";
import Adress from "./Address/Adress";
import Delivery from "./delivery/Delivery";
import { CgArrowLongLeft } from "react-icons/cg";
import Link from "next/link";

const ShoppingInfo = (props: any) => {
  return (
    <section>
      <Adress />
      <Delivery />

      <div className="flex justify-between py-5 px-3 items-center">
        <Link href="/cart">
          <a className="flex items-center gap-1 text-gray-500 text-sm">
            <CgArrowLongLeft size={24} /> Return to cart
          </a>
        </Link>

        <button
          className="bg-indigo-600 p-3 text-white rounded-md "
          onClick={() => {
            props.setShoppingInfo(false);
            props.setPaymentSelection(true);
          }}
        >
          Countine to Payment
        </button>
      </div>
    </section>
  );
};

export default ShoppingInfo;
