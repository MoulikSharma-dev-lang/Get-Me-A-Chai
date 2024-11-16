"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const [loginForm, setLoginForm] = useState({ username: "", email: "", password: "" })
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    if (!loginForm.username || !loginForm.email || !loginForm.password) {
      alert("Please write all information!")
    } else {
      let data = await fetch("/api/login", {method: "POST", body: JSON.stringify(loginForm), headers: {'Content-Type': 'application/json'}})
      let res = await data.json()
      router.push("/profile")
    }
  }

  return (
    <div>
      <h1>Login to get fans to support you!</h1>
      <br />
      <form onSubmit={handleSubmit} className='text-center'>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[373px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={loginForm.username} onChange={(e) => { setLoginForm({ ...loginForm, [e.target.name]: e.target.value }) }} type="text" name="username" placeholder='Enter your username' />
        <br />
        <br />
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[373px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={loginForm.email} onChange={(e) => { setLoginForm({ ...loginForm, [e.target.name]: e.target.value }) }} type="email" name="email" placeholder='Enter your email' />
        <br />
        <br />
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[373px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={loginForm.password} onChange={(e) => { setLoginForm({ ...loginForm, [e.target.name]: e.target.value }) }} type="password" name="password" placeholder='Enter your password' />
        <br />
        <br />
        <button type='submit' className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
      </form>
    </div>
  )
}

export default Login