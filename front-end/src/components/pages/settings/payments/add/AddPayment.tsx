import ClickOutside from "@/hooks/ClickOutside";
import React from "react";
import { RiCloseFill } from "react-icons/ri";

const AddPayment = (props: any) => {
  const domNode: any = ClickOutside(() => {
    props.setAddPayment(false);
  });

  return (
    <section className="fixed bg-black bg-opacity-30 left-0 top-0  z-50 h-screen w-screen px-3">
      <div
        className="bg-white max-w-lg mx-auto pb-4 pt-3 translate-y-8 md:translate-y-20 rounded-2xl"
        ref={domNode}
      >
        <div className="flex justify-between items-center border-b py-2 px-6 mb-5">
          <div>
            <h1 className="text-lg font-bold">Add a payment method</h1>
          </div>

          <div>
            <button
              className="text-xl"
              onClick={() => props.setAddPayment(false)}
            >
              <RiCloseFill size={30} />
            </button>
          </div>
        </div>

        <div className="mb-2  px-4 text-sm">
          <form method="POST">
            <div className="mb-5">
              <label className="text-sm block mb-1 px-0.5">Name on card</label>
              <input
                type="text"
                name="username"
                placeholder="First and last name"
                className="w-full p-3 rounded-xl border-gray-200 text-sm"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-1 px-0.5">Card number</label>
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                className="w-full p-3 rounded-xl border-gray-200 text-sm"
              />
            </div>

            <div className="flex gap-3 flex-wrap mb-2">
              <div className="mb-4">
                <label className="block mb-1 px-0.5">Expiry date</label>
                <input
                  type="text"
                  placeholder="08/2024"
                  className="w-40 p-3 rounded-xl border-gray-200 text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 px-0.5">Cvv code</label>
                <input
                  type="text"
                  placeholder="201"
                  className="w-40 p-3 rounded-xl border-gray-200 text-sm"
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="border-gray-200 text-sm focus:ring-transparent text-indigo-500"
                  id="make_def"
                />
                <label htmlFor="make_def">Set as default</label>
              </div>

              <button
                type="submit"
                className="bg-indigo-500 w-28 h-9 rounded-md text-white "
              >
                Add Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddPayment;
