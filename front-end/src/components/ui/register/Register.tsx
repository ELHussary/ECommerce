import React from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
import ClickOutside from "@/hooks/ClickOutside";

const Register = (props: any) => {
  const domNode: any = ClickOutside(() => {
    props.setRegister(false);
  });
  return (
    <section className="fixed bg-black bg-opacity-60 left-0 top-0  z-50 h-screen w-screen px-3">
      <div
        className="bg-white max-w-lg mx-auto pb-8 pt-3 translate-y-8 md:translate-y-20 rounded-lg"
        ref={domNode}
      >
        <div className="flex justify-between items-center border-b py-2 px-6 mb-5">
          <div>
            <h1 className="text-xl font-bold">Create an Account</h1>
          </div>

          <div>
            <button
              className="text-xl"
              onClick={() => props.setRegister(false)}
            >
              <RiCloseFill size={30} />
            </button>
          </div>
        </div>

        <div className="mb-2  px-6">
          <form method="POST">
            <div className="mb-5">
              <label className="mb-2 block text-sm">Name</label>
              <input
                type="text"
                name="username"
                placeholder="Full Name"
                className=" w-full p-3.5 rounded-sm text-sm"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className=" w-full p-3.5 rounded-sm text-sm"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm">Password</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                className=" w-full p-3.5 rounded-sm text-sm"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm">Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                placeholder="********"
                className=" w-full p-3.5 rounded-sm text-sm"
              />
            </div>

            <div className="flex justify-between items-start mb-5 px-1">
              <div>
                <button
                  className="text-sm text-indigo-600 flex items-center gap-1"
                  onClick={() => {
                    props.setRegister(false);
                    props.setLogin(true);
                  }}
                >
                  <CgArrowLongLeft size={22} /> Sign in
                </button>
              </div>
              <div className="flex items-center translate-y-0.5">
                <input
                  type="checkbox"
                  name="terms"
                  className="focus:ring-transparent rounded-sm text-indigo-500 mr-1"
                />
                <label className="text-gray-400 text-xs">
                  Agree to our
                  <span className="text-indigo-500"> Terms & Conditions</span>
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-indigo-600 p-3 rounded-md text-white w-full"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
