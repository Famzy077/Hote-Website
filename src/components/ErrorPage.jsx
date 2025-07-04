// import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='bg-gray-700 h-[100vh] place-items-center place-content-center text-white' >
      <h1 className='text-4xl font-semibold'>404 Page could not be found</h1>
      <p><Link className='underline' to={'/'}>Please click to go back to home page</Link></p>
    </div>
  )
}

export default ErrorPage
