import React from 'react'
import { CgEye, CgTrashEmpty } from 'react-icons/cg'

const Orders = () => {
  return (
    <section className="py-1 px-6">
      <table className="min-w-max w-full table-auto">
        <thead className="bg-white">
          <tr className="text-sm leading-normal text-gray-600">
            <th className="px-6 py-3 text-left">Order ID</th>
            <th className="py-3 px-6 text-left">Product</th>
            <th className="py-3 px-6 text-left">Ordered On</th>
            <th className="py-3 px-6 text-center">Quantity</th>
            <th className="py-3 px-6 text-center">Status</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr>
            <td className="py-3 px-6 text-left">
              <div className="flex items-center text-indigo-500">
                <span>#6709</span>
              </div>
            </td>

            <td className="py-3 px-6 text-left whitespace-nowrap">
              <div className="flex items-start">
                <div className="mr-1.5">
                  <img
                    src="https://cdn.outfitbook.fr/26317-thickbox_default/jogger-short-dark-green.jpg?_ga=2.61955052.1799479511.1662785947-1104294664.1662785947"
                    alt="product"
                    className="w-11 h-11 object-contain"
                  />
                </div>
                <div>
                  <p>Oversize knit jumper</p>
                  <p className="text-xs text-gray-500">Size: XL</p>
                  <p className="text-xs text-gray-500">Color: Black</p>
                  <p className="text-xs text-gray-500">
                    Price:{' '}
                    <span className="text-black font-semibold text-sm">
                      150 EGP
                    </span>
                  </p>
                </div>
              </div>
            </td>

            <td className="py-3 px-6 text-left">
              <div className="flex items-center">
                <span>31 Mar 2022, 07:30 PM</span>
              </div>
            </td>

            <td className="py-3 px-6 text-center">
              <div className="flex items-center justify-center">
                <span>3</span>
              </div>
            </td>

            <td className="py-3 px-6 text-center">
              <div className="flex items-center justify-center gap-1 bg-yellow-200 py-2 px-1.5 xl:px-0 rounded-xl">
                <span className="text-xs">Out for Delivery</span>
              </div>
            </td>

            <td className="py-3 px-6 text-center">
              <div className="flex item-center justify-center">
                <div
                  className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                  title="Track Order">
                  <CgEye size="17" />
                </div>

                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                  <CgTrashEmpty size="17" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Orders
