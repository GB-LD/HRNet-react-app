import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addEmployee, clearMessages } from "../../redux/features/EmployeesSlice"
import CustomSelect from "../atoms/Select"
import CustomButton from "../atoms/Button"
import AdressForm from "../organisms/AdressForm"
import CustomInput from "../atoms/Input"
import CustomInputDate from "../atoms/InputDate"
import { format } from "date-fns";


const EmployeeForm = () => {
    const dispatch = useDispatch()

    const { successMessage, errorMessage } = useSelector(state => state.employee)

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        startDate: '',
        adress: { street: '', city: '', state: '', zip:'' },
        departement: ''
    })

    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let newErrors = {}

        if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
        if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
        if (!form.birthDate) newErrors.birthDate = "Date of birth is required.";
        if (!form.startDate) newErrors.startDate = "Start date is required.";
        if (!form.departement) newErrors.departement = "Departement is required.";
        if (!form.adress.street.trim()) newErrors.street = "Street is required.";
        if (!form.adress.city.trim()) newErrors.city = "City is required.";
        if (!form.adress.state.trim()) newErrors.state = "State is required.";
        if (!form.adress.zip.trim()) newErrors.zip = "Zip code is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const departements = ["Sales", "HR", "Engineering", "Marketing"]

    const hanleFormSubmit = (e) => {
        e.preventDefault()
        validateForm()
        if (validateForm()) {
            dispatch(addEmployee(form))
            setErrors({})
        }
    }

    useEffect(() => {
        if (successMessage || errorMessage) {
            const timer = setTimeout(() => {
                dispatch(clearMessages());
                if (successMessage) {
                    setForm({
                        firstName: '',
                        lastName: '',
                        birthDate: '',
                        startDate: '',
                        adress: { street: '', city: '', state: '', zip:'' },
                        departement: ''
                    })
                }
            }, 3000)
            return () => {clearTimeout(timer)}
        }
    }, [successMessage, errorMessage, dispatch])

  return (
    <>
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col gap-6">
            <CustomInput
                label="First Name"
                id='firstName'
                value={form.firstName}
                onChange={(e) => setForm({...form, firstName: e.target.value})}
                placeholder='Employee first name'
                status={errors.firstName ? "error" : ""}
            />
            <CustomInput
                label="Last Name"
                id='lastName'
                value={form.lastName}
                onChange={(e) => setForm({...form, lastName: e.target.value})}
                placeholder='Employee last name'
                status={errors.lastName ? "error" : ""}
            />
            <CustomInputDate
                label="Date of Birth"
                type='date'
                id='dateOfBirth'
                value={form.birthDate}
                onChange={(date) => {setForm({...form, birthDate: date ? format(date, "yyyy-MM-dd") : ""})}}
                placeholder='Employee birth date'
                status={errors.birthDate ? "error" : ""}
            />
            <CustomInputDate
                label="Start Date"
                type='date'
                id='startDate'
                value={form.startDate}
                onChange={(date) => setForm({...form, startDate:  date ? format(date, "yyyy-MM-dd") : ""})}
                placeholder='Employee start date'
                status={errors.startDate ? "error" : ""}
            />
            <AdressForm
                adress={form.adress}
                setAdress={(adress) => setForm({...form, adress: adress})}
                errors={errors}
            />
            <CustomSelect
                label="Departement"
                options={departements}
                value={form.value}
                onChange={(value) => setForm({...form, departement: value})}
                status={errors.departement ? "error" : ""}
            />
            <CustomButton
                text='Save'
                onClick={hanleFormSubmit}
            />
        </form>
    </>
  )
}

export default EmployeeForm