import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import ClickOutside from "@/hooks/ClickOutside";

const Login = (props: any) => {
  const domNode: any = ClickOutside(() => {
    props.setLogin(false);
  });

  return (
    <section className="fixed bg-black bg-opacity-60 left-0 top-0 z-50 h-screen w-screen px-3">
      <div
        className="bg-white max-w-lg mx-auto translate-y-40 rounded-lg pb-8 pt-3"
        ref={domNode}
      >
        <div className="flex justify-between items-center mb-6 border-b py-3 px-6 ">
          <div>
            <h1 className="text-xl font-bold">Welcome Back!</h1>
          </div>
          <div>
            <button onClick={() => props.setLogin(false)}>
              <RiCloseFill size={30} />
            </button>
          </div>
        </div>

        <div className="mb-5 py-2 px-6">
          <form method="POST">
            <div className="mb-5">
              <input
                type="email"
                name="email"
                placeholder="Email address or phone number"
                className=" w-full p-3.5 rounded-sm text-sm"
              />
            </div>

            <div className="mb-5">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className=" w-full p-3.5 rounded-sm text-sm"
              />
            </div>

            <div className="mb-5 flex items-center justify-between">
              <div>
                <input
                  type="checkbox"
                  name="terms"
                  className=" focus:ring-transparent rounded-sm text-indigo-600 mr-2"
                />
                <label className="text-gray-500 text-xs ">Remember me</label>
              </div>
              <div>
                <button
                  className="text-xs text-indigo-600"
                  onClick={() => {
                    props.setLogin(false);
                    props.setForgotPassword(true);
                  }}
                >
                  Forget your password?
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-indigo-600 p-3 rounded-md text-white w-full"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="text-xs text-indigo-600 text-center">
          <button
            onClick={() => {
              props.setLogin(false);
              props.setRegister(true);
            }}
          >
            Create an Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
