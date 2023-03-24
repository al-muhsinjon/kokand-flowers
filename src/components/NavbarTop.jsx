import React, { useEffect, useState } from 'react'
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';

const NavbarTop = () => {
  const [active, setActive] = useState("");

  const activeHandler = (id) => setActive(id);

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    if (localStorage.theme === "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggleDarkMode]);
  return (
    <>
        <nav className='w-[80%] left-[20%] flex justify-around items-center bg-gray-50 dark:bg-gray-800 h-12 border-b sticky top-0 '>
          <div className='flex'>
          <input type="text" placeholder='search...' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '  />
              <button type='submit' className='rounded-r-lg p-2 bg-slate-200'>
                <FiSearch/>
              </button>
          </div>
          <button
        className="ml-10 w-[35px] h-[35px] rounded-full flex justify-center items-center bg-slate-400"
        onClick={toggleDarkMode}
        >
        {darkMode === true ? (
          <MdDarkMode className="text-stone-700" />
          ) : (
            <CiLight className="text-teal-50 text-[25px] font-semibold" />
            )}
      </button>
        </nav>
    </>
  )
}

export default NavbarTop




// rounded-l-sm outline-none indent-5 p-1