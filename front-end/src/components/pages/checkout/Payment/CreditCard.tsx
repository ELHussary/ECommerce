import React from "react";
import Creditcard from "@/assets/svg/payments/mastercard.svg";
import Visa from "@/assets/svg/payments/visa-credit-card.svg";

const CreditCard = () => {
  return (
    <section className="border p-4 max-w-xl mb-10">
      <div className="flex items-center mb-6 justify-between flex-wrap">
        <div className="flex items-start gap-2">
          <input
            type="radio"
            checked
            name="pay"
            id="card"
            className="translate-y-1"
          />
          <div>
            <label htmlFor="card">Credit Card</label>
            <p className="text-sm max-w-xs text-gray-500">
              Save money transfer using your banck account Visa Mastero
              Discover, American Express
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <img src={Creditcard.src} alt="Creditcard" className="h-8" />
          <img src={Visa.src} alt="Visa" className="h-8" />
        </div>
      </div>

      <form className="text-sm">
        <div className="mb-6">
          <label className="block text-gray-500 mb-1">Card Number</label>
          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            className="w-full text-gray-500 border-gray-200"
          />
        </div>

        <div className="flex justify-between flex-wrap">
          <div className="mb-4">
            <label className="block text-gray-500 mb-1">Name on card</label>
            <input
              type="text"
              placeholder="Ahmed Wael"
              className="w-72 text-gray-500 border-gray-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 mb-1">Expiry date</label>
            <input
              type="text"
              placeholder="2020/4"
              className="w-28 text-gray-500 border-gray-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 mb-1">Cvv code</label>
            <input
              type="text"
              placeholder="201"
              className="w-28 text-gray-500 border-gray-200"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreditCard;
