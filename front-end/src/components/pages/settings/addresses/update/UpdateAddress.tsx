import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import Governorates from '@/data/governorates.json'
import Cities from '@/data/cities.json'
import Egypt from '@/assets/images/egypt.png'
import ClickOutside from '@/hooks/ClickOutside'
import { UPDATE_ADDRESSES } from '@/graphql/Addresses/Addresses'
import { useMutation } from '@apollo/client'

const UpdateAddress = (props: any) => {
 const domNode: any = ClickOutside(() => {
  props.setEditAddress(false)
 })

 const [UPDATEADDRESSES] = useMutation(UPDATE_ADDRESSES, {
  onCompleted(data) {
   location.reload()
  },
 })

 const [data, setData] = React.useState<any>({
  country: props.address.country,
  full_name: props.address.full_name,
  phone_number: props.address.phone_number,
  street: props.address.street,
  city_area: props.address.city_area,
  governorate: props.address.governorate,
  governorateid: props.address.governorateid,
 })

 const FilterCities = Cities.filter(
  (city: any) => city.governorate_id == data.governorateid,
 )
 const HandleEditAddress = (e: any) => {
  e.preventDefault()
  UPDATEADDRESSES({ variables: { ...data, id: props.address.id } })
 }

 React.useEffect(() => {
  setData({ ...data, city_area: FilterCities[0].city_name_ar })
 }, [data.governorateid])

 return (
  <section className="fixed bg-black bg-opacity-30 left-0 top-0  z-50 h-screen w-screen px-3">
   <div
    className="bg-white max-w-xl mx-auto pb-8 pt-3 translate-y-8 md:translate-y-20 rounded-lg"
    ref={domNode}>
    <div className="flex justify-between items-center border-b py-2 px-6 mb-5">
     <div>
      <h1 className="text-lg font-bold">Update Shipping Address</h1>
     </div>

     <div>
      <button className="text-xl">
       <RiCloseFill size={30} onClick={() => props.setEditAddress(false)} />
      </button>
     </div>
    </div>

    <div className="mb-2  px-6">
     <form method="POST" onSubmit={HandleEditAddress}>
      <div className="mb-3">
       <label className="mb-2 block text-sm">Country/Region</label>
       <select name="country" className=" w-full p-2.5 rounded-sm text-sm">
        <option value="مصر">مصر</option>
       </select>
      </div>

      <div className="mb-3">
       <label className="mb-2 block text-sm">Full Name</label>
       <input
        type="text"
        name="fullname"
        placeholder="First and last name"
        value={data.full_name}
        className=" w-full p-2.5 rounded-sm text-sm"
        onChange={event => setData({ ...data, full_name: event.target.value })}
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
        name="phone_number"
        placeholder="e.g. 1XXXXXXXXX"
        value={data.phone_number}
        className=" w-full p-2.5 rounded-sm text-sm pl-16"
        onChange={event =>
         setData({ ...data, phone_number: event.target.value })
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
        onChange={event => setData({ ...data, street: event.target.value })}
       />
      </div>

      <div className="mb-3">
       <label className="mb-2 block text-sm">Governorate</label>
       <select
        name="governorate"
        className=" w-full p-2.5 rounded-sm text-sm"
        value={data.governorate}
        onChange={event =>
         setData({
          ...data,
          governorateid: event.target.selectedIndex + 1,
          governorate: event.target.value,
         })
        }>
        {Governorates.map((gov: any) => {
         return (
          <option value={gov.governorate_name_ar} key={gov.id}>
           {gov.governorate_name_ar}
          </option>
         )
        })}
       </select>
      </div>

      <div className="mb-3">
       <label className="mb-2 block text-sm">City / Area</label>
       <select
        name="city_area"
        value={data.city_area}
        className=" w-full p-2.5 rounded-sm text-sm"
        onChange={event => setData({ ...data, city_area: event.target.value })}>
        {FilterCities.map((city: any) => {
         return (
          <option value={city.city_name_ar} key={city.id}>
           {city.city_name_ar}
          </option>
         )
        })}
       </select>
      </div>

      <div>
       <button
        type="submit"
        className="bg-indigo-600 p-3 rounded-md text-white w-full">
        Add
       </button>
      </div>
     </form>
    </div>
   </div>
  </section>
 )
}

export default UpdateAddress
