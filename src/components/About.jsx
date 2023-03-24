import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const About = () => {
  const navigate = useNavigate()
 

  const LoadEdit = (id) => {
    navigate('/customer/edit/'+id)
  }

  const RemovFunction = (id) => {
    if(window.confirm("Do you want to remove")){
      fetch("http://localhost:8000/posts/"+ id, {
      method: "DELETE"
    })
      .then((res) => {
        // alert("Removed successfully. ");
        // window.location.reload()
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
  }

  const { empid } = useParams();
  const [empdata, setEmpdata] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/posts/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpdata(resp);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }, []);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      {/* <h2 className='text-black'>Mijoz haqida Malumot</h2> */}
      {/* <Card>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
  <div className="card" style={{ "textAlign": "left" }}>
              <div className="card-title">
                <h2>Employee Create</h2>
              </div>
              <div className="card-body"></div>
      {empdata &&
      <div>
        <h1>The Employee name is: {empdata.name} ({empdata.id}) </h1>
        <h3>Contact Details</h3>
        <h5>Email is : {empdata.descript} </h5>
        <h5>Phone is : {empdata.phone} </h5>
        <Link to='/' className='bg-slate-600' >Back to Listing</Link>
    </div>
  }
  


  </div>
</Card> */}

      <Card className="w-[90%]">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Mijoz haqida ma'lumot
        </h5>
        <p className="font-normal text-gray-700 flex flex-col dark:text-gray-400">
          <span>
            Mijoz ismi :{" "}
            <b className="dark:text-white text-black">{empdata.name}</b>
          </span>
          <span>
            Telefon raqami :{" "}
            <b className="dark:text-white text-black">{empdata.phone}</b>
          </span>
          <span>
            Xarid haqida :{" "}
            <i className="dark:text-white text-black">{empdata.descrip}</i>
          </span>
          <span className="flex">
            Narx : <h2 className="pl-2">{empdata.summa}so'm</h2>
          </span>
        </p>
        <div className="flex justify-between">
          <div className="flex">
            <div className="w-24 ">
                <Button color="warning" onClick={()=> LoadEdit(empdata.id)}>
                  <FiEdit />
                </Button>
            </div>
            <div className="w-24 ">
                <Button color='failure' onClick={()=> RemovFunction(empdata.id)} >
                  <RiDeleteBin6Line />
                </Button>
            </div>
          </div>
          <div className="w-24">
            <Link className="w-full" to="/">
              <Button>Orqaga</Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
