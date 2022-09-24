import React from 'react'
import { RiAddLine } from 'react-icons/ri'
import AddAddress from './add/AddAddress'
import DeleteAddress from './delete/DeleteAddress'
import EditAddress from './edit/EditAddress'

const Addresses = () => {
  const [addAddress, setAddAddress] = React.useState<boolean>(false)
  const [editAddress, setEditAddress] = React.useState<boolean>(false)

  return (
    <header className="py-4 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {addAddress && <AddAddress setAddAddress={setAddAddress} />}
      {editAddress && <EditAddress setEditAddress={setEditAddress} />}

      <div
        className="border-2 border-dashed font-semibold flex justify-center items-center w-full h-52  cursor-pointer text-gray-500"
        onClick={() => setAddAddress(true)}>
        <RiAddLine size="40" />
        Add Address
      </div>

      <div className="border p-4 bg-white">
        <ul className="grid gap-1 text-sm text-gray-500">
          <li>Ahmed Wael</li>
          <li>El-Marwa Bldg. Moustafa Kamel St., SEMOUHA</li>
          <li>Alexandria</li>
          <li>Egypt</li>
          <li>+201020305060</li>

          <li className="flex items-center gap-4 pt-4">
            <button
              className="border p-1.5 px-3"
              onClick={() => setEditAddress(true)}>
              Edit address
            </button>
            <button
              className="border px-3 py-1.5 text-indigo-400"
              onClick={DeleteAddress}>
              Remove
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Addresses
