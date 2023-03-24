import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../util/constant'

const SideNavbar = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center pt-[50px] border-r text-gray-500  bg-gray-50 dark:bg-gray-800 top-0'>
       {links.map((link) => (
        <div className='w-auto h-auto p-2 flex justify-center items-center' >
          <NavLink
          className={(navData) =>
            navData.isActive
            ? "text-gray-900 rounded-lg dark:text-white bg-gray-200 md:px-9 dark:bg-gray-700 text-[23px] flex font-montserrat font-semibold"
            : `text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-5 text-[23px] font-montserrat flex dark:hover:text-slate-400 hover:text-zinc-600  font-semibold`
          }
          key={link.id}
          to={link.to}
          >
            <span className='p-1'>{link.icon}</span>
            <span className='hidden md:block' >
            {link.link}
            </span>
          </NavLink>
            </div>
        ))}
    </div>
  )
}

export default SideNavbar


// amber-300


// dark:bg-stone-800






// text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700