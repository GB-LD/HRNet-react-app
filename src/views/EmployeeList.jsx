import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { formatUserData } from '../services/formatUserData'
import { employeesMock } from '../services/employeeMock'
import { Table } from 'gbld-ui-library'

const EmployeeList = () => {
  const { employeesList } = useSelector((state) => state.employee);
  const [data, setData] = useState([]);

  useEffect(() => {
    const formattedReduxEmployeesList = employeesList.map((employee) => formatUserData(employee));
    setData([...formattedReduxEmployeesList, ...employeesMock]);
  }, [employeesList]);

  const columns = [
    { header: 'First Name', accessor: 'firstName', sortable: true },
    { header: 'Last Name', accessor: 'lastName', sortable: true },
    { header: 'Start Date', accessor: 'startDate', sortable: true },
    { header: 'Department', accessor: 'departement', sortable: true },
    { header: 'Date of Birth', accessor: 'birthDate', sortable: true },
    { header: 'Street', accessor: 'street', sortable: false },
    { header: 'City', accessor: 'city', sortable: true },
    { header: 'State', accessor: 'state', sortable: true },
    { header: 'Zip Code', accessor: 'zip', sortable: true },
  ]

  return (
    <>
      <h1>Current Employees</h1>
      <Table
        columns={columns}
        data={data}
      />
    </>
  )
}

export default EmployeeList