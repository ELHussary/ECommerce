import React from "react";

const FastDelivery = () => {
  return (
    <div className="border px-4 py-4">
      <div className="flex items-start mb-6 justify-between">
        <div className="flex items-start gap-2">
          <input
            type="radio"
            name="delivery"
            id="ftd"
            className="translate-y-1"
          />
          <div>
            <label htmlFor="ftd">Fast Delivery</label>
            <p className="text-sm max-w-sm text-gray-500">
              Estimated 1-2 Days Shipping (Duties and taxes may be due upon
              delivery)
            </p>
          </div>
        </div>
        <div>$2</div>
      </div>
    </div>
  );
};

export default FastDelivery;
