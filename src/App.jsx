// import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  ) 
  
}


export default App
