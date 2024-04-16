import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GLOBAL_URL, getAllData } from "../../api/data";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";
import axios from "axios";
import "./home.css";

export default function Home() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAllData = async () => {
    const response = await getAllData();
    setUserData(response.data.data);
  };

  const handleSearch = () => {
    // Ensure both searchTerm and item.title are in lowercase for case-insensitive comparison
    const searchTermLower = searchTerm.toLowerCase();
    
    const newFilteredData = userData.filter((item) =>
      item.title.toLowerCase().includes(searchTermLower)
    );
    
    // Update the userData state with the filtered data regardless of the length of filtered data
    setUserData(newFilteredData);
};


  const handleClear = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    fetchAllData();
  }, [searchTerm]);

  return (
    <div className="view-todo-con">
      <div className="search-bar-con">
        {/* <h2 className="view-title">Students Data Management</h2> */}
        <div className="search-bar-content">
          <SearchIcon onClick={handleSearch} className="search-input-icon" />
          <Tooltip
            hasArrow
            label="give input and click search icon "
            bg="green"
          >
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="search..."
              className="search-input-box"
            />
          </Tooltip>
          <button className="search-bar-clear-box" onClick={handleClear}>
            <SmallCloseIcon />
          </button>
        </div>
        <div className="addStudent">
          <button
            className="add-new-btn"
            onClick={() => navigate(`/students/create`)}
          >
            Add New
          </button>
        </div>
      </div>
      <div className="content-map">
        {
          <div className="home-contents">
            <table className="custom-table">
              <thead className="table-header">
                <tr>
                  <th>STUDENT_NO</th>
                  <th>STUDENT_NAME</th>
                  <th>STUDENT_DEP</th>
                  <th>STUDENT_YEAR</th>
                  <th>STUDENT_PHONE</th>
                  <th>UPDATE</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {userData.length > 0 &&
                  userData.map((row) => (
                    <tr key={row._id}>
                      <td>{row.StudentNo}</td>
                      <td>{row.StudentName}</td>
                      <td>{row.StudentDep}</td>
                      <td>{row.StudentYear}</td>
                      <td>{row.StudentPhone}</td>
                      <td>
                        <button
                          className="tableEmpedit"
                          onClick={() => navigate(`/students/${row._id}`)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="tableEmpeDelete"
                          onClick={() => {
                            axios
                              .delete(`${GLOBAL_URL}/students/${row._id}`)
                              .then(() => fetchAllData());
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>
  );
}
