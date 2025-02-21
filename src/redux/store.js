import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./features/EmployeesSlice";

export const store = configureStore({
    reducer: {
        employee: employeeReducer
    }
});

export default store;