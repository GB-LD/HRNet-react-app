import { useState } from "react"
import CustomSelect from "../atoms/Select"
import CustomButton from "../atoms/Button"
import AdressForm from "../organisms/AdressForm"
import CustomInput from "../atoms/Input"
import CustomInputDate from "../atoms/InputDate"
import { format } from "date-fns";


const EmployeeForm = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        startDate: '',
        adress: { street: '', city: '', state: 'Alabama', zip:'' },
        departement: 'Sales'
    })

    const departements = ["Sales", "HR", "Engineering", "Marketing"]

    const hanleFormSubmit = (e) => {
        e.preventDefault()
        console.log('form is submit', form)
    }

  return (
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col gap-6">
        <CustomInput
            label="First Name"
            id='firstName'
            value={form.firstName}
            onChange={(e) => setForm({...form, firstName: e.target.value})}
            placeholder='Employee first name'
        />
        <CustomInput
            label="Last Name"
            id='lastName'
            value={form.lastName}
            onChange={(e) => setForm({...form, lastName: e.target.value})}
            placeholder='Employee last name'
        />
        <CustomInputDate
            label="Date of Birth"
            type='date'
            id='dateOfBirth'
            value={form.birthDate}
            onChange={(date) => {setForm({...form, birthDate: date ? format(date, "yyyy-MM-dd") : ""})}}
            placeholder='Employee birth date'
        />
        <CustomInputDate
            label="Start Date"
            type='date'
            id='startDate'
            value={form.startDate}
            onChange={(date) => setForm({...form, startDate:  date ? format(date, "yyyy-MM-dd") : ""})}
            placeholder='Employee start date'
        />
        <AdressForm
            adress={form.adress}
            setAdress={(adress) => setForm({...form, adress: adress})}
        />
        <CustomSelect
            label="Departement"
            options={departements}
            value={form.value}
            onChange={(value) => setForm({...form, departement: value})}
        />
        <CustomButton
            text='Save'
            onClick={hanleFormSubmit}
        />
    </form>
  )
}

export default EmployeeForm