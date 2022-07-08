import { configureStore } from "@reduxjs/toolkit";
import patientsReducer from "./patientsSlice";

export default configureStore({
  reducer: {
    patients : patientsReducer
  }
})
