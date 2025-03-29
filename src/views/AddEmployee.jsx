import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Modal } from "gbld-ui-library"
import EmployeeForm from "../components/templates/EmployeeForm"

const AddEmployee = () => {
  const [isOpen, setIsOpen] = useState(false)

  const formIsSubmit = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 4500);
  }

  const { successMessage, errorMessage } = useSelector(state => state.employee)

  return (
    <div className="flex flex-col items-center">
        <h1 variant="h4" color="blue-gray">
          Create Employee
        </h1>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Create an employee">
          <div>
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
        </Modal>
        <EmployeeForm hanleFormSubmit={formIsSubmit} />
    </div>
  )
}

export default AddEmployee