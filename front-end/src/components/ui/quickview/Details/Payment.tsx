import React from 'react'
import shipping from '@/assets/svg/actions/shipping.svg'
import cashondelivery from '@/assets/svg/actions/cashondelivery.svg'
import Importimages from '@/hooks/Importimages'
const Images = Importimages(
  require.context('@/assets/svg/payments', false, /\.(png|jpe?g|svg)$/),
)

const Payment = () => {
  return (
    <>
      <div className="pt-4 flex gap-3 text-gray-500">
        <div className="flex items-center gap-2 text-sm">
          <img src={shipping.src} className="w-8" alt="" />
          <p>Shipping in 2-3 days</p>
        </div>

        <div className="flex items-center gap-2 text-sm ">
          <img src={cashondelivery.src} className="w-8" alt="" />
          <p>Cash on delivery</p>
        </div>
      </div>

      <div className="py-4 flex gap-3 items-center flex-wrap">
        <p className="text-sm text-gray-500">Payment method:</p>
        {Images.map(image => (
          <img className="w-9" src={image} alt={image} />
        ))}
      </div>
    </>
  )
}

export default Payment
