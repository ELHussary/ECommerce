import React from "react";
import { RiCloseFill } from "react-icons/ri";
import Governorates from "@/data/governorates.json";
import Cities from "@/data/cities.json";
import Egypt from "@/assets/images/egypt.png";
import ClickOutside from "@/hooks/ClickOutside";

const EditAddress = (props: any) => {
  const domNode: any = ClickOutside(() => {
    props.setEditAddress(false);
  });

  const [data, setData] = React.useState<any>({
    country: "",
    fullname: "",
    mobile_number: "",
    street: "",
    city: "",
    governorate: "",
    governorateid: "",
  });

  const FilterCities = Cities.filter(
    (city: any) => city.governorate_id == data.governorateid
  );
  const HandleEditAddress = (e: any) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <section className="fixed bg-black bg-opacity-30 left-0 top-0  z-50 h-screen w-screen px-3">
      <div
        className="bg-white max-w-xl mx-auto pb-8 pt-3 translate-y-8 md:translate-y-20 rounded-lg"
        ref={domNode}
      >
        <div className="flex justify-between items-center border-b py-2 px-6 mb-5">
          <div>
            <h1 className="text-lg font-bold">Edit Shipping Address</h1>
          </div>

          <div>
            <button className="text-xl">
              <RiCloseFill
                size={30}
                onClick={() => props.setEditAddress(false)}
              />
            </button>
          </div>
        </div>

        <div className="mb-2  px-6">
          <form method="POST" onSubmit={HandleEditAddress}>
            <div className="mb-3">
              <label className="mb-2 block text-sm">Country/Region</label>
              <select
                name="country"
                className=" w-full p-2.5 rounded-sm text-sm"
              >
                <option value="مصر">مصر</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="mb-2 block text-sm">Full Name</label>
              <input
                type="text"
                name="fullname"
                placeholder="First and last name"
                value={data.fullname}
                className=" w-full p-2.5 rounded-sm text-sm"
                onChange={(event) =>
                  setData({ ...data, fullname: event.target.value })
                }
              />
            </div>

            <div className="mb-3 relative">
              <label className="mb-2 block text-sm">Mobile number</label>
              <div className="flex items-center gap-1 text-sm absolute top-9 left-2">
                <img src={Egypt.src} alt="egypt" />
                <span> +20</span>
              </div>
              <input
                type="text"
                name="mobile_number"
                placeholder="e.g. 1XXXXXXXXX"
                value={data.mobile_number}
                className=" w-full p-2.5 rounded-sm text-sm pl-16"
                onChange={(event) =>
                  setData({ ...data, mobile_number: event.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label className="mb-2 block text-sm">Street name</label>
              <input
                type="text"
                name="street"
                value={data.street}
                placeholder="e.g. 15 Hafez Hassan St., AGOUZA"
                className=" w-full p-2.5 rounded-sm text-sm"
                onChange={(event) =>
                  setData({ ...data, street: event.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label className="mb-2 block text-sm">Governorate</label>
              <select
                name="governorate"
                className=" w-full p-2.5 rounded-sm text-sm"
                onChange={(event) =>
                  setData({
                    ...data,
                    governorateid: event.target.selectedIndex + 1,
                    governorate: event.target.value,
                  })
                }
              >
                {Governorates.map((gov: any) => {
                  return (
                    <option value={gov.governorate_name_ar} key={gov.id}>
                      {gov.governorate_name_ar}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mb-3">
              <label className="mb-2 block text-sm">City / Area</label>
              <select
                name="city"
                value={data.city}
                className=" w-full p-2.5 rounded-sm text-sm"
                onChange={(event) =>
                  setData({ ...data, city: event.target.value })
                }
              >
                {FilterCities.map((city: any) => {
                  return (
                    <option value={city.city_name_ar} key={city.id}>
                      {city.city_name_ar}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="bg-indigo-600 p-3 rounded-md text-white w-full"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditAddress;
