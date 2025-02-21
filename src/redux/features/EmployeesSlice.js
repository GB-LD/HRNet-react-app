import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        employeesList: []
    },
    reducers: {
        addEmployee(state, action) {
            console.log("addEmployee")
            state.employeesList.push(action.payload);
        },
        removeEmployee(state, action) {
            state.employeesList = state.employeesList.filter(employee => employee.id !== action.payload);
        }
    }
});

export const { addEmployee, removeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;