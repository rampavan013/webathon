import React, { useState } from 'react'
import Home from './components/Home'
import RootLayout from './components/RootLayout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Book from './components/Book'
import Committee from './components/Committee'
import { UserContext } from './components/Contextprovider'


function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/book',
          element:<Book/>
        },
        {
          path:'/committee',
          element:<Committee />
        }
      ]
    }
  ])
  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
