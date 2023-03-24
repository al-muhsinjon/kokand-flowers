import { Button } from "flowbite-react";
// import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const AddButton = () => {
  // const [show, setShow] = useState(false)

  return (
    <>
      {/* <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 fixed top-[85%] right-10 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'> <AiOutlinePlus className='font-semibold' /></button> */}
      {/* <button onClick={()=>setShow()} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block fixed top-[85%] right-10 text-white bg-blue-700 hover:bg-blue-800 p-5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  </button> */}
      <div className="fixed top-[85%] md:right-10 md:left-auto left-3">
        <Link className="" to="/customer/add">
          <Button>
            <AiOutlinePlus className="font-semibold" />
          </Button>
        </Link>
      </div>
      {/* <Modal
    show={show}
    size="md"
    // height="100vh"
    popup={true}
    onClose={()=> setShow(!show)}
    >
    <Modal.Header />
    <Modal.Body>
      <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h3>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Your email"
              />
          </div>
          <TextInput
            id="email"
            placeholder="name@company.com"
            required={true}
            />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Your password"
              />
          </div>
          <TextInput
            id="text"
            type="text"
            required={true}
            />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Your password"
              />
          </div>
          <TextInput
            id="text"
            type="text"
            required={true}
            />
        </div>
        <div className="flex justify-between">
            <Textarea/> */}

      {/* </div>
        <div className="w-full">
          <Button>
            add
          </Button>
        </div> */}
      {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered? 
           <a
            href="/modal"
            className="text-blue-700 hover:underline dark:text-blue-500"
            >
            Create account
          </a> 
        </div> */}
      {/* </div>
    </Modal.Body>
  </Modal>
            </div> */}
    </>
  );
};

export default AddButton;

// w-[50px] h-[50px] rounded-full fixed top-[85%] right-10 bg-slate-500 flex justify-center items-center

// text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800

// Chota maniyam bloger qivoradi wekilli bula like lardi qara 🤣
