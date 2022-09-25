import React, { useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import ClickOutside from '@/hooks/ClickOutside'
import InputError from '../errors/InputError'

import { useMutation } from '@apollo/client'
import { LOGIN, csrf } from '@/graphql/auth'
const Login = (props: any) => {
  const domNode: any = ClickOutside(() => {
    props.setLogin(false)
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldRemember, setShouldRemember] = useState(false)
  const [errors, setErrors] = useState<any>([])
  const [status, setStatus] = useState(null)

  const [authLogin] = useMutation(LOGIN)
  const submitForm = async (event: any) => {
    event.preventDefault()
    await csrf()
    authLogin()
  }
  return (
    <section className="fixed bg-black bg-opacity-30 left-0 top-0 z-50 h-screen w-screen px-3">
      <div
        className="bg-white max-w-lg mx-auto translate-y-40 rounded-lg pb-8 pt-3"
        ref={domNode}>
        <div className="flex justify-between items-center mb-6 border-b py-3 px-6 ">
          <div>
            <h1 className="text-xl font-bold">Welcome Back!</h1>
          </div>
          <div>
            <button onClick={() => props.setLogin(false)}>
              <RiCloseFill size={30} />
            </button>
          </div>
        </div>

        <div className="mb-5 py-2 px-6">
          <InputError messages={errors.email} className="mb-2" />
          <form onSubmit={submitForm}>
            <div className="mb-5">
              <input
                type="email"
                value={email}
                placeholder="Email address or phone number"
                className=" w-full p-3.5 rounded-sm text-sm"
                onChange={event => setEmail(event.target.value)}
              />
            </div>

            <div className="mb-5">
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                className=" w-full p-3.5 rounded-sm text-sm"
                onChange={event => setPassword(event.target.value)}
              />
              <InputError messages={errors.password} className="mt-2" />
            </div>

            <div className="mb-5 flex items-center justify-between">
              <div>
                <input
                  type="checkbox"
                  name="remember"
                  className=" focus:ring-transparent rounded-sm text-indigo-600 mr-2"
                  onChange={event => setShouldRemember(event.target.checked)}
                />
                <label className="text-gray-500 text-xs ">Remember me</label>
              </div>
              <div>
                <button
                  className="text-xs text-indigo-600"
                  onClick={() => {
                    props.setLogin(false)
                    props.setForgotPassword(true)
                  }}>
                  Forget your password?
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-indigo-600 p-3 rounded-md text-white w-full">
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="text-xs text-indigo-600 text-center">
          <button
            onClick={() => {
              props.setLogin(false)
              props.setRegister(true)
            }}>
            Create an Account
          </button>
        </div>
      </div>
    </section>
  )
}

export default Login
