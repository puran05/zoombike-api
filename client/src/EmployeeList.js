import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the employees!", error);
      });
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.firstname} {employee.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
