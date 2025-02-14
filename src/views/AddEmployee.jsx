import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import EmployeeForm from "../components/templates/EmployeeForm"

const AddEmployee = () => {
  return (
    <div className="flex flex-col items-center">
        <h1 variant="h4" color="blue-gray">
          Create Employee
        </h1>
        <EmployeeForm />
    </div>
  )
}

export default AddEmployee