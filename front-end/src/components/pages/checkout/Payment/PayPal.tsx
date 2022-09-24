import React from "react";
import Paypal from "@/assets/svg/payments/paypal.svg";

const PayPal = () => {
  return (
    <section className="border p-4 max-w-xl">
      <div className="flex items-start justify-between flex-wrap">
        <div className="flex items-start gap-2">
          <input
            type="radio"
            name="pay"
            id="paypal"
            className="translate-y-1"
          />
          <div>
            <label htmlFor="paypal">PayPal</label>
            <p className="text-sm max-w-sm text-gray-500">
              You will be redirected to PayPal website to complete your purchase
              securely.
            </p>
          </div>
        </div>
        <div>
          <img src={Paypal.src} alt="PayPal" />
        </div>
      </div>
    </section>
  );
};

export default PayPal;
