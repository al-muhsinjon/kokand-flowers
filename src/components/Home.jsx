import React, { useEffect, useState } from "react";
import AddButton from "./AddButton";
// import Navbar from './Navbar'
import NavbarTop from "./NavbarTop";
import SideNavbar from "./SideNavbar";
import Users from "./Users";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/posts").then((response) =>
      response.json().then((data) => {
        setUsers(data);
      })
    );
  }, []);

  return (
    <>
      {/* Navbar qismi  start */}
      <div className="w-full h-full ">
        <div className="sticky top-0">
          <NavbarTop />
        </div>
        <div className="w-full flex h-auto  bg-slate-700">
          <div className="w-[20%] fixed top-0">
            <SideNavbar />
          </div>
          <div className="w-[80%] ml-[20%]  pb-10 h-[auto] dark:bg-gray-800 bg-slate-200">
            <AddButton />
            <Users data={users} />
          </div>
        </div>
      </div>
      {/* mijozlar qismi */}
    </>
  );
};

export default Home;
