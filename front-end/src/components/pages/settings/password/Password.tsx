import React from "react";

const Password = () => {
  const Password = (e: any) => {
    e.preventDefault();
    console.log("edit password");
  };
  return (
    <section className="py-4 px-6">
      <form onSubmit={Password}>
        {/* Current password */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-sm">
            Current password
          </label>
          <input
            type="password"
            name="currentpassword"
            value={""}
            className="w-96 rounded-md focus:ring-transparent border-gray-300 mb-1.5"
          />
        </div>

        {/* New password */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-sm">
            New password
          </label>
          <input
            type="password"
            name="newpassword"
            value={""}
            className="w-96 rounded-md focus:ring-transparent border-gray-300 mb-1.5"
          />
        </div>

        {/* Confirmation password */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-sm">
            Confirm password
          </label>
          <input
            name="password_confirmation"
            value={""}
            type="password"
            className="w-96 rounded-md focus:ring-transparent border-gray-300 mb-1.5"
          />
        </div>

        <div>
          <button
            type="submit"
            className="p-2.5 w-36 rounded-md bg-indigo-400 hover:bg-indigo-500 text-white text-sm"
          >
            Change Password
          </button>
        </div>
      </form>
    </section>
  );
};

export default Password;
