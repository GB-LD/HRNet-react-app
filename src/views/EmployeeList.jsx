import React from 'react'
import { useSelector } from "react-redux"

const EmployeeList = () => {
  const { employeesList } = useSelector((state) => state.employee)

  return (
    <>
      <h1>Current Employees</h1>
      <ul>
        {employeesList.map((employee) => (
          <li key={employee.id}>
            {employee.firstName} {employee.lastName} - ID: {employee.id}
          </li>
        ))}
      </ul>
    </>
  )
}

export default EmployeeList