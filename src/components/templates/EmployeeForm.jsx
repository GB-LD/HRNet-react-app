import { useState } from "react"
import InputField from "../molecules/InputField"
import Select from "../atoms/Select"
import CustomButton from "../atoms/Button"
import AdressForm from "../organisms/AdressForm"

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
    <form>
        <InputField
            label="First Name"
            id='firstName'
            value={form.firstName}
            onChange={(e) => setForm({...form, firstName: e.target.value})}
            placeholder='your first name'
        />
        <InputField
            label="Last Name"
            id='lastName'
            value={form.lastName}
            onChange={(e) => setForm({...form, lastName: e.target.value})}
            placeholder='your last name'
        />
        <InputField
            label="Date of Birth"
            type='date'
            id='dateOfBirth'
            value={form.birthDate}
            onChange={(e) => setForm({...form, birthDate: e.target.value})}
            placeholder='your birth date'
        />
        <InputField
            label="Start Date"
            type='date'
            id='startDate'
            value={form.startDate}
            onChange={(e) => setForm({...form, startDate: e.target.value})}
            placeholder='the start date'
        />
        <AdressForm
            adress={form.adress}
            setAdress={(adress) => setForm({...form, adress: adress})}
        />

        <label>Departement</label>
        <Select
            options={departements}
            value={form.value}
            onChange={(e) => setForm({...form, departement: e.target.value})}
        />
        <CustomButton
            text='Save'
            onClick={hanleFormSubmit}
        />
    </form>
  )
}

export default EmployeeForm