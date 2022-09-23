import React from "react";
import Details from "./Details/Details";
import Quantity from "./Details/Quantity";
import Size from "./Details/Size";
import AddtoCart from "./Details/AddtoCart";
import Photos from "./Photos";
import AvailableIn from "./Details/AvailableIn";
import Payment from "./Details/Payment";
import ClickOutside from "@/hooks/ClickOutside";

const Quickview = ({
  product,
  setQuickview,
}: {
  product: any;
  setQuickview: any;
}) => {
  const domNode: any = ClickOutside(() => {
    setQuickview(false);
  });
  return (
    <header className="fixed top-0 left-0 bg-black bg-opacity-40 w-full h-full z-50 overflow-auto">
      <section
        className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full sm:max-w-3xl bg-white p-6 mx-auto sm:translate-y-20"
        ref={domNode}
      >
        <Photos productimages={product.image} />

        <div>
          <Details productDetail={product} />
          <AvailableIn />
          <div className="flex gap-3 py-3 items-end text-sm">
            <Size />
            <Quantity />
            <AddtoCart />
          </div>
          <Payment />
        </div>
      </section>
    </header>
  );
};

export default Quickview;
