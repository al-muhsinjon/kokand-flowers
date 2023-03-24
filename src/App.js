import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import { About, AddCustomer, EditUser, Home } from './components'
import Tolov from './components/Tolov'

const App = () => {
  return (
    // <div className='w-full h-auto bg-red-800'>
      
      
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/tulov'element={<Tolov/>} />
        <Route path='/customer/add'element={<AddCustomer/>} />
        <Route path='/customer/detail/:empid'element={<About/>} />
        <Route path='/customer/edit/:empid'element={<EditUser/>} />
      </Routes>
      </BrowserRouter>
    // </div>
  )
}

export default App