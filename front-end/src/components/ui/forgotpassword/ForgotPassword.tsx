import React from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
import ClickOutside from "@/hooks/ClickOutside";

const ForgotPassword = (props: any) => {
  const domNode: any = ClickOutside(() => {
    props.setForgotPassword(false);
  });
  return (
    <section className="fixed bg-black bg-opacity-60 left-0 top-0  z-50 h-screen w-screen px-3">
      <div
        className="bg-white max-w-lg mx-auto pb-8 pt-3 translate-y-8 md:translate-y-32 rounded-lg"
        ref={domNode}
      >
        <div className="flex justify-between items-center border-b py-2 px-6 mb-5">
          <div>
            <h1 className="text-xl font-bold mb-0.5">Reset your password</h1>
            <p className="text-gray-500 text-sm">
              We'll email you a link to reset your password.
            </p>
          </div>

          <div>
            <button
              className="text-xl"
              onClick={() => props.setForgotPassword(false)}
            >
              <RiCloseFill size={30} />
            </button>
          </div>
        </div>

        <div className="mb-2  px-6">
          <form method="POST">
            <div className="mb-5">
              <label className="mb-2 block text-sm">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className=" w-full p-3.5 rounded-sm text-sm"
              />
            </div>

            <div className="flex justify-between items-start mb-5 px-1">
              <div>
                <button
                  className="text-sm text-indigo-600 flex items-center gap-1"
                  onClick={() => {
                    props.setLogin(true);
                    props.setForgotPassword(false);
                    props.setRegister(false);
                  }}
                >
                  <CgArrowLongLeft size={22} />
                  Back to login
                </button>
              </div>

              <div>
                <button
                  className="text-sm text-indigo-600 flex items-center gap-1"
                  onClick={() => {
                    props.setLogin(false);
                    props.setForgotPassword(false);
                    props.setRegister(true);
                  }}
                >
                  Create an Account
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-indigo-600 p-3 rounded-md text-white w-full"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
