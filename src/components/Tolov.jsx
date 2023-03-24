import React from 'react'
import NavbarTop from './NavbarTop'
import SideNavbar from './SideNavbar'

const Tolov = () => {

    return (
        <>
          <div className='w-full h-full bg-slate-100'>
            <div className='sticky top-0'>
              <NavbarTop/>
            </div>
            <div className='w-full flex h-[100vh] bg-slate-700'>
              <div className='w-[20%] fixed top-0'>
              <SideNavbar/>
              </div>
              <div className='w-[80%] ml-[20%] h-full bg-red-300'>jhbfkh</div>
            </div>
          </div>
        </>
    )
}

export default Tolov