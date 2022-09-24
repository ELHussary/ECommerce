import React from 'react'
import Visa from '@/assets/svg/payments/visa-credit-card.svg'
import { CgTrashEmpty, CgCheck } from 'react-icons/cg'
import AddPayment from './add/AddPayment'
const Payments = () => {
  const [addpayment, setAddPayment] = React.useState<boolean>(false)
  return (
    <header className="py-1 px-6">
      {addpayment && <AddPayment setAddPayment={setAddPayment} />}
      <p className="text-sm text-gray-600 mb-5">
        If you want to edit your payment method, please remove the current and
        add the new payment.
      </p>
      <section className="border border-indigo-300 flex items-center p-4 gap-1 max-w-xl rounded-lg justify-between mb-5 flex-wrap bg-white">
        <div className="flex items-center gap-2">
          <img src={Visa.src} alt="visa" className="w-10 border pr-1" />
          <div>
            <h1 className="font-semibold">Visa ending in 4620</h1>
          </div>
        </div>

        <div>
          <ul className="flex items-center gap-2 text-xs">
            <li>
              <button className="flex items-center text-indigo-600 ">
                Set as default
                <CgCheck size="24" />
              </button>
            </li>
            <li>
              <button className="flex items-center gap-0.5 text-indigo-600">
                <CgTrashEmpty size={23.5} />
                Remove
              </button>
            </li>
          </ul>
        </div>
      </section>

      <button
        className="px-3 py-1.5 rounded-md bg-indigo-600 text-white"
        onClick={() => setAddPayment(true)}>
        Add Payment
      </button>
    </header>
  )
}

export default Payments
