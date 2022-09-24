import React from "react";
import FastDelivery from "./FastDelivery";
import StandartDelivery from "./StandartDelivery";

const Delivery = () => {
  return (
    <div className="mb-4">
      <h1 className="text-lg font-semibold mb-3">Shipping Method</h1>
      <div className="flex items-center gap-2 md:gap-10 flex-wrap">
        <StandartDelivery />
        <FastDelivery />
      </div>
    </div>
  );
};

export default Delivery;
