import React from 'react'
import ClickOutside from '@/hooks/ClickOutside'
import { useMutation } from '@apollo/client'
import { DELETE_ADDRESS, GET_ADDRESSES } from '@/graphql/Addresses/Addresses'

const DeleteAddress = (props: any) => {
 const domNode: React.MutableRefObject<any> = ClickOutside(() => {
  props.setDeleteAddress(false)
 })

 const [delete_Address] = useMutation(DELETE_ADDRESS, {})

 const DeleteAddress = (e: any) => {
  e.preventDefault()
  delete_Address({
   variables: {
    id: props.addressid,
   },
   refetchQueries: [{ query: GET_ADDRESSES }],
  })
 }

 return (
  <div className="fixed top-0 left-0 bg-black bg-opacity-30 h-screen w-screen z-50">
   <div
    className="bg-gray-50  mx-auto p-1.5 rounded-lg max-w-sm transform translate-y-60"
    ref={domNode}>
    <div className="text-center p-3">
     <h1 className="mb-1 font-semibold text-lg">Delete an Address</h1>
     <p className="text-sm text-gray-600">
      Are you sure you want to <br></br> delete this address?
     </p>
    </div>
    <div className="flex justify-evenly items-center border-t p-1.5 mt-2">
     <button className="p-1" onClick={() => props.setDeleteAddress(false)}>
      Cancel
     </button>

     <button className="text-red-500" onClick={e => DeleteAddress(e)}>
      Delete
     </button>
    </div>
   </div>
  </div>
 )
}

export default DeleteAddress
