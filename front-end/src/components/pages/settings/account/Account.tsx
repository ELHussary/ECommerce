import React from "react";

const Account = (props: any) => {
  const submit = (e: any) => {
    e.preventDefault();
    console.log("edit profile");
  };
  return (
    <section className="py-4 px-6">
      <form onSubmit={submit}>
        {/* Name */}
        <div className="mb-6">
          <label className="font-semibold text-sm mb-1 block">Name</label>
          <div>
            <input
              type="text"
              name="newname"
              value={"Ahmed Wael"}
              className="w-96 rounded-md focus:ring-transparent border-gray-300 mb-2"
            />
            <p className="text-xs text-gray-500 max-w-sm">
              You can only change your name twice within 14 days.
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-sm">Email</label>
          <input
            type="email"
            name="newemail"
            value={"AhmedWael@yahoo.com"}
            className="w-96 rounded-md focus:ring-transparent border-gray-300"
          />
        </div>

        <div>
          <button
            type="submit"
            className="p-2.5 w-32 rounded-md bg-indigo-400 hover:bg-indigo-500 text-white text-sm"
          >
            Update profile
          </button>
        </div>
      </form>
    </section>
  );
};

export default Account;
