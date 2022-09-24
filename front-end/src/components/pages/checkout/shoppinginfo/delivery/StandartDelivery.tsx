import React from "react";

const StandartDelivery = () => {
  return (
    <div className="border p-4">
      <div className="flex items-start mb-6 justify-between">
        <div className="flex items-start gap-2">
          <input
            type="radio"
            checked
            name="delivery"
            id="std"
            className="translate-y-1"
          />
          <div>
            <label htmlFor="std">Standart Delivery</label>
            <p className="text-sm max-w-sm text-gray-500">
              Estimated 3-5 Day Shipping (Duties and taxes may be due upon
              delivery)
            </p>
          </div>
        </div>
        <div>Free</div>
      </div>
    </div>
  );
};

export default StandartDelivery;
