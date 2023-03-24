import { Button, Card, Label, Textarea, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  // const [id, setIdChange] = useState();
  const [name, setNameChange] = useState();
  const [date, setDateChange] = useState();
  const [phone, setPhoneChange] = useState();
  const [summa, setSumma] = useState();
  const [descrip, setDescrip] = useState();

  const { empid } = useParams();
  // const [empdata, setEmpdata] = useState({})
  useEffect(() => {
    fetch("http://localhost:8000/posts/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // id, name, date, phone, summa,  descript
        setNameChange(resp.name);
        setDateChange(resp.date);
        setPhoneChange(resp.phone);
        setDescrip(resp.descrip);
        setSumma(resp.summa);
        // console.log(resp);
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const empData = { name, date, phone, summa, descrip };
    fetch("http://localhost:8000/posts/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empData),
    })
      .then((res) => {
        alert("Saved successfully. ");
        navigate("/customer/detail/"+ empid);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Card className="w-full rounded-none h-[100vh]">
      <form
        onSubmit={handleSubmit}
        className="flex w-[90%] md:w-[50%] m-auto flex-col gap-4"
      >
        {/* <div>
        <div className="mb-2 block">
          <Label htmlFor="id" value="ID" />
        </div>
        <TextInput
          id={id}
          type="text"
          //   required={true}
        />
      </div> */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Text" value="Mijoz ismi" />
          </div>
          <TextInput
            id="name"
            type="text"
            required={true}
            value={name}
            onChange={(e) => setNameChange(e.target.value)}
          />

          <div className="mb-2 block">
            <Label htmlFor="Text" value="Telefon raqami" />
          </div>
          <TextInput
            id="phone"
            type="text"
            required={true}
            value={phone}
            onChange={(e) => setPhoneChange(e.target.value)}
          />

          <div className="mb-2 block">
            <Label htmlFor="Text" value="Xarid narxi" />
          </div>
          <TextInput
            id="date"
            type="date"
            required={true}
            placeholder="24-12-2022"
            value={date}
            onChange={(e) => setDateChange(e.target.value)}
          />

          <div className="mb-2 block">
            <Label htmlFor="Text" value="Xarid narx" />
          </div>
          <TextInput
            id="summa"
            type="number"
            required={true}
            value={summa}
            onChange={(e) => setSumma(e.target.value)}
          />

          <div className="mb-2 block">
            <Label htmlFor="Text" value="Batafsil" />
          </div>
          <Textarea
            id="descript"
            type="text"
            required={true}
            value={descrip}
            onChange={(e) => setDescrip(e.target.value)}
          />
        </div>
        <Button type="submit">Qo'shish</Button>
        <Link to={"/customer/detail/"+ empid} className="btn btn-danger">
          <Button type="button">Orqaga</Button>
        </Link>
      </form>
    </Card>
  );
};

export default EditUser;
