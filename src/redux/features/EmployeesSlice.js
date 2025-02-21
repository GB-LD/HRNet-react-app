import { createSlice, nanoid } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        employeesList: []
    },
    reducers: {
        addEmployee(state, action) {
            const newEmployee = {
                id: nanoid(),
                ...action.payload
            }
            state.employeesList.push(newEmployee);
        },
        removeEmployee(state, action) {
            state.employeesList = state.employeesList.filter(employee => employee.id !== action.payload);
        }
    }
});

export const { addEmployee, removeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;