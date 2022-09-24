import React, { useState } from 'react'
import { CgArrowLongLeft } from 'react-icons/cg'
import { RiCloseFill } from 'react-icons/ri'
import ClickOutside from '@/hooks/ClickOutside'
import { useAuth } from '@/hooks/auth'
import InputError from '../errors/InputError'

interface IEvent {
  preventDefault: () => void
}

const Register = (props: any) => {
  const domNode: any = ClickOutside(() => {
    props.setRegister(false)
  })

  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [
    agree_on_Terms_and_Conditions,
    setAgree_on_Terms_and_Conditions,
  ] = useState<any>(false)
  const [errors, setErrors] = useState<any>([])
  const [status, setStatus] = useState(null)

  const submitForm = (event: IEvent) => {
    event.preventDefault()

    register({
      name,
      email,
      password,
      password_confirmation: password_confirmation,
      setErrors,
      setStatus,
      agree_on_Terms_and_Conditions,
    })
  }

  return (
    <section className="fixed bg-black bg-opacity-30 left-0 top-0  z-50 h-screen w-screen px-3">
      <div
        className="bg-white max-w-xl mx-auto pb-8 pt-3 translate-y-8 md:translate-y-20 rounded-lg"
        ref={domNode}>
        <div className="flex justify-between items-center border-b py-2 px-6 mb-5">
          <div>
            <h1 className="text-xl font-bold">Create an Account</h1>
          </div>

          <div>
            <button
              className="text-xl"
              onClick={() => props.setRegister(false)}>
              <RiCloseFill size={30} />
            </button>
          </div>
        </div>
        <div className="mb-2  px-6">
          <form method="POST" onSubmit={submitForm}>
            <div className="mb-5">
              <label className="mb-2 block text-sm">Name</label>
              <input
                value={name}
                type="text"
                name="username"
                placeholder="Full Name"
                className=" w-full p-3.5 rounded-sm text-sm"
                onChange={event => setName(event.target.value)}
                required
              />
              <InputError messages={errors.name} className="mt-2" />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm">Email</label>
              <input
                type="email"
                value={email}
                placeholder="example@email.com"
                className=" w-full p-3.5 rounded-sm text-sm"
                onChange={event => setEmail(event.target.value)}
                required
              />
              <InputError messages={errors.email} className="mt-2" />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm">Password</label>
              <input
                type="password"
                value={password}
                placeholder="********"
                className=" w-full p-3.5 rounded-sm text-sm"
                onChange={event => setPassword(event.target.value)}
                required
              />
              <InputError messages={errors.password} className="mt-2" />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm">Confirm Password</label>
              <input
                type="password"
                placeholder="********"
                value={password_confirmation}
                className=" w-full p-3.5 rounded-sm text-sm"
                onChange={event => setPasswordConfirmation(event.target.value)}
                required
              />
              <InputError
                messages={errors.password_confirmation}
                className="mt-2"
              />
            </div>
            <InputError
              messages={errors.agree_on_Terms_and_Conditions}
              className="mb-3"
            />
            <div className="flex justify-between items-center mb-5 px-1">
              <div>
                <button
                  className="text-sm text-indigo-600 flex items-center gap-1"
                  onClick={() => {
                    props.setRegister(false)
                    props.setLogin(true)
                  }}>
                  <CgArrowLongLeft size={22} /> Sign in
                </button>
              </div>
              <div className="flex items-center translate-y-0.5">
                <input
                  type="checkbox"
                  value={agree_on_Terms_and_Conditions}
                  onChange={event =>
                    setAgree_on_Terms_and_Conditions(event.target.checked)
                  }
                  className="focus:ring-transparent rounded-sm text-indigo-500 mr-1"
                />
                <label className="text-gray-400 text-xs">
                  Agree to our
                  <span className="text-indigo-500"> Terms & Conditions</span>
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-indigo-600 p-3 rounded-md text-white w-full">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
