import React from "react";
import CreditCard from "./CreditCard";
import PayPal from "./PayPal";
import { CgArrowLongLeft } from "react-icons/cg";

const Payment = (props: any) => {
  return (
    <>
      <CreditCard />
      <PayPal />
      <section className="flex justify-between py-5 px-3 items-center">
        <button
          className="flex items-center gap-1 text-gray-500 text-sm"
          onClick={() => {
            props.setShoppingInfo(true);
            props.setPaymentSelection(false);
          }}
        >
          <CgArrowLongLeft size={24} /> Back to Shipping Info
        </button>
        <button className="bg-indigo-600 p-2.5 px-6 text-white rounded-md ">
          Pay $60
        </button>
      </section>
    </>
  );
};

export default Payment;
