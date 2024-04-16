import React, { useEffect, useState } from "react";
import { GLOBAL_URL } from "../../api/data";
import { useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import  axios from "axios";

let intialObject = {
  StudentNo : "",
  StudentName : "",
  StudentDep : "",
  StudentYear : "",
  StudentPhone : ""
}
export default function AddEMP() {
  
  const toast = useToast();
  const {id} = useParams();
  const [formData, setFormData] = useState(intialObject);

  // input handler function for input
  const inputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   setFormData({...formData, [name]: value})
}

  // getData ById:
  const getById = () => {
    axios.get(`${GLOBAL_URL}/students/${id}`)
    .then((response) => {
        console.log(response.data);
        setFormData(response.data.data);
    })
    .catch((error) => {
        console.log(`Error occred!!!`);
})
}

// getById();
useEffect(() => {
  getById();
},[])

// submitHandler for update emp data
const submitHandler = async(event) => {
  event.preventDefault();

  const updateById = {
    StudentNo: formData.StudentNo,
    StudentName: formData.StudentName,
    StudentDep: formData.StudentDep,
    StudentYear: formData.StudentYear,
    StudentPhone: formData.StudentPhone
  }
  fetch(`${GLOBAL_URL}/students/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateById),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      toast({
        title: "Student data Updated",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-end",
      });
      window.location.href = "/home";
    })
  .catch((error) => {
      console.log(`Error occured!!!`);
  })
}


  return (
    <div className="addEMP-container">
      <div className="addEMPform">
        <h1 className="addEMPTitle">Add Student Data</h1>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
          StudentNo
          </label>
          <input
            name="StudentNo"
            className="addItemInput"
            value={formData.StudentNo}
            onChange={inputHandler}
          />
        </div>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
          StudentName
          </label>
          <input
            name="StudentName"
            className="addItemInput"
            value={formData.StudentName}
            onChange={inputHandler}
          />
        </div>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
          StudentDep
          </label>
          <input
            name="StudentDep"
            className="addItemInput"
            value={formData.StudentDep}
            onChange={inputHandler}
          />
        </div>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
          StudentYear
          </label>
          <input
            name="StudentYear"
            className="addItemInput"
            value={formData.StudentYear}
            onChange={inputHandler}
          />
        </div>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
          StudentPhone
          </label>
          <input
            name="StudentPhone"
            className="addItemInput"
            value={formData.StudentPhone}
            onChange={inputHandler}
          />
        </div>
        <button className="submit"
          onClick={submitHandler}
        >Submit</button>
      </div>
    </div>
  );
}