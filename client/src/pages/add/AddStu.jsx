import React, { useState } from "react";
import "./addStu.css";
import { createStu } from "../../api/data";
import { useToast } from "@chakra-ui/react";

export default function AddStu() {
  
  const toast = useToast();
  const [StudentNo, setStudentNo] = useState("");
  const [StudentName, setStudentName] = useState("");
  const [StudentDep, setStudentDep] = useState("");
  const [StudentYear, setStudentYear] = useState(""); 
  const [StudentPhone, setStudentPhone] = useState("");

  // submit handler func
  const submitHandler = async() => {
    try{
        const formData = {
          StudentNo,
          StudentName,
          StudentDep,
          StudentYear,
          StudentPhone
        }
        const response = await createStu(formData);
        console.log(response);
        toast({
          title: "Created Successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-end",
        });
        setStudentNo("");
        setStudentName("");
        setStudentDep("");
        setStudentYear("");
        setStudentPhone("");
        window.location.href='/home';
    }
    catch(error){
      console.log(`Error occured: ${error.message}`);
      toast({
        title: "Failed to Create Data!!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-end",
      });
    }
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
            type="text"
            className="addItemInput"
            placeholder="Enter StudentNo"
            value={StudentNo}
            onChange={(e) => setStudentNo(e.target.value)}
          />
        </div>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
          StudentName
          </label>
          <input
            type="text"
            className="addItemInput"
            placeholder="Enter StudentName"
            value={StudentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
          StudentDep
          </label>
          <input
            type="text"
            className="addItemInput"
            placeholder="Enter StudentDep"
            value={StudentDep}
            onChange={(e) => setStudentDep(e.target.value)}
          />
        </div>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
          StudentYear
          </label>
          <input
            type="text"
            className="addItemInput"
            placeholder="Enter StudentYear"
            value={StudentYear}
            onChange={(e) => setStudentYear(e.target.value)}
          />
        </div>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
          StudentPhone
          </label>
          <input
            type="text"
            className="addItemInput"
            placeholder="Enter StudentPhone"
            value={StudentPhone}
            onChange={(e) => setStudentPhone(e.target.value)}
          />
        </div>
        <button className="submit"
          onClick={submitHandler}
        >Submit</button>
      </div>
    </div>
  );
}