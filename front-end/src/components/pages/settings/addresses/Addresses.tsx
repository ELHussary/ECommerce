import { GET_ADDRESSES } from '@/graphql/Addresses/Addresses'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'
import { RiAddLine } from 'react-icons/ri'
import AddAddress from './add/AddAddress'
import DeleteAddress from './delete/DeleteAddress'
import EditAddress from './update/UpdateAddress'

const Addresses = () => {
 const [addAddress, setAddAddress] = React.useState<boolean>(false)
 const [editAddress, setEditAddress] = React.useState<boolean>(false)
 const [deleteAddress, setDeleteAddress] = React.useState<boolean>(false)

 const [addressid, setAddressID] = React.useState<number>()

 const router = useRouter()
 const { data, error, loading } = useQuery(GET_ADDRESSES, {
  onCompleted() {
   setAddAddress(false)
   setEditAddress(false)
   setDeleteAddress(false)
  },
 })

 if (loading) return <>Loading</>
 if (error) router.push('/')

 if (data)
  return (
   <header className="py-4 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {addAddress && <AddAddress setAddAddress={setAddAddress} />}

    <section
     className="border-2 border-dashed font-semibold flex justify-center items-center w-full h-52  cursor-pointer text-gray-500"
     onClick={() => setAddAddress(true)}>
     <RiAddLine size="40" />
     Add Address
    </section>

    {data.me.addresses.map((myAddress: any) => {
     return (
      <section className="border p-4 bg-white" key={myAddress.id}>
       {editAddress && addressid === myAddress.id ? (
        <EditAddress
         setEditAddress={setEditAddress}
         address={myAddress}
         addressid={myAddress.id}
        />
       ) : (
        <></>
       )}
       {deleteAddress && addressid === myAddress.id ? (
        <DeleteAddress
         setDeleteAddress={setDeleteAddress}
         addressid={addressid}
        />
       ) : (
        <></>
       )}

       <ul className="text-sm">
        <li className="grid gap-0.5">
         <p className="font-semibold">{myAddress.full_name}</p>
         <p>{myAddress.street}</p>
         <p>
          {myAddress.city_area} {myAddress.governorate}
         </p>
         <p>{myAddress.country}</p>
         <p>{myAddress.phone_number}</p>
        </li>

        <li className="flex items-center gap-4 pt-4">
         <button
          className="border p-1.5 px-3"
          onClick={() => {
           setAddressID(myAddress.id)
           setEditAddress(true)
          }}>
          Edit address
         </button>
         <button
          className="border px-3 py-1.5 text-indigo-400"
          onClick={() => {
           setAddressID(myAddress.id)
           setDeleteAddress(true)
          }}>
          Remove
         </button>
        </li>
       </ul>
      </section>
     )
    })}
   </header>
  )
}

export default Addresses
