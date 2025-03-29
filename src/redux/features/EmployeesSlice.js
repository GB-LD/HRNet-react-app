import { createSlice, nanoid } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        employeesList: [],
        successMessage: null,
        errorMessage: null
    },
    reducers: {
        addEmployee(state, action) {
            const isDuplicated = state.employeesList.some(
                (employee) =>
                    employee.firstName === action.payload.firstName &&
                    employee.lastName === action.payload.lastName &&
                    employee.birthDate === action.payload.birthDate
            )
            if (isDuplicated ) {
                state.errorMessage = "This employee already exists!"
                state.successMessage = null
            } else {
                const newEmployee = { id: nanoid(), ...action.payload}
                state.employeesList.push(newEmployee)
                state.successMessage = "Employee added successfully!";
                state.errorMessage = null;
            }
        },
        removeEmployee(state, action) {
            state.employeesList = state.employeesList.filter(employee => employee.id !== action.payload);
        },
        clearMessages(state) {
            state.successMessage = null;
            state.errorMessage = null;
        }
    }
});

export const { addEmployee, removeEmployee, clearMessages } = employeeSlice.actions;
export default employeeSlice.reducer;