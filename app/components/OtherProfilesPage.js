"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from 'next/navigation'

const OtherProfilesPage = ({ username }) => {
  const [userPayments, setUserPayments] = useState([]);
  const [paymentForm, setPaymentForm] = useState({ name: "", message: "", amount: "" });
  const router = useRouter()

  useEffect(() => {
    getPayments()
  }, [])

  async function getPayments(){
    let data = await fetch("/api/fetchPayments")
    let res = await data.json()
    setUserPayments(res.payments)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!paymentForm.name || !paymentForm.message || !paymentForm.amount) {
      alert("Please write all information!")
    } else {
      setUserPayments([...userPayments, { ...paymentForm }])
      let data = await fetch("/api/createPayment", { method: "POST", body: JSON.stringify(paymentForm), headers: { 'Content-Type': 'application/json' } })
      let res = await data.json()
    }
  }

  async function handleLogout() {
    let data = await fetch("/api/logout", { method: "DELETE" })
    let res = await data.json()
    router.push("/login")
  }

  return (
    <div>
      <Image src={"/JB2A.gif"} height={400} width={2140} className="h-[400px]" alt="Image" />
      <div className="text-center">
        <button onClick={handleLogout} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Logout</button>
      </div>
      <Image src={"/cat2.jpg"} height={90} width={90} className="rounded-full mx-auto" alt="Cat" />
      <p className="text-center font-bold">{username}</p>
      <br />
      <br />
      <form className='text-center' onSubmit={handleSubmit}>
        <input value={paymentForm.name} onChange={(e) => { setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[373px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="name" placeholder='Enter your name' />
        <br />
        <br />
        <input value={paymentForm.message} onChange={(e) => { setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[373px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="message" placeholder='Enter your message' />
        <br />
        <br />
        <input value={paymentForm.amount} onChange={(e) => { setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[373px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="amount" placeholder='Enter your amount' />
        <br />
        <br />
        <button type='submit' className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
      </form>
      <br />
      <div className="flex justify-center">
        <div className={userPayments.length > 0 ? "bg-blue-900 text-white rounded-lg w-[500px] py-7" : ""}>
          {userPayments.map((item, index) => {
            return <div key={index} className="text-center">
              <p>{item.name} donated {item.amount} with message "{item.message}"</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default OtherProfilesPage
