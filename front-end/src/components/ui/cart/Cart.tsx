import Link from "next/link";
import React from "react";
import { RiDeleteBin7Line, RiCloseLine } from "react-icons/ri";

const Cart = ({ cart, setCart }: { cart: boolean; setCart: any }) => {
  return (
    <section
      className={`bg-white shadow-2xl p-6 fixed right-0 top-0 w-full sm:w-96 rounded-lg h-full transition ease-in-out duration-500 ${
        cart ? "translate-x-0" : "translate-x-full"
      } z-20 overflow-auto`}
    >
      <div className="flex items-center justify-between mb-3">
        <h1 className="font-bold text-lg ">Shopping cart:</h1>
        <button onClick={() => setCart(!cart)}>
          <RiCloseLine size={28} />
        </button>
      </div>

      {/* <p className="text-lg text-center ">Your cart is empty</p> */}

      <div>
        <div className="flex justify-between mb-10">
          <div className="flex gap-5 items-center">
            <img
              src={
                "https://cdn.outfitbook.fr/27989-thickbox_default/oversize-knit-jumper.jpg?_ga=2.128613324.1799479511.1662785947-1104294664.1662785947"
              }
              className="w-14"
              alt=""
            />
            <div>
              <p className="font-bold text-sm">Product Name</p>
              <div className="font-bold">
                <p>$600</p>
              </div>
            </div>
          </div>
          <div>
            <button>
              <RiDeleteBin7Line size={21} />
            </button>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-5">
            <p className="font-bold text-lg">Subtotal:</p>
            <p className="font-bold text-lg">$60.00</p>
          </div>
          <div className="flex justify-center text-center">
            <Link href="#">
              <a className="px-6 p-2.5 rounded-lg text-white bg-indigo-600">
                To checkout
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
