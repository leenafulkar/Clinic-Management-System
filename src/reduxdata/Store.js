import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "./doctorSlice";
import addPatient from "./patientSlice";
import addReception from "./receptionSlice";
import updateRecp from "./updateSlice";

const store = configureStore(
    {
        reducer: {
            dinfo: doctorReducer,
            patient: addPatient,
            reception: addReception,
            updaterec: updateRecp
        }
    }

);

store.subscribe(() => {

    const { name, msg, isLogin, type } = store.getState().dinfo.value
    const savedata = JSON.stringify({ name, msg, isLogin, type })
    localStorage.setItem('mydata', savedata)


})


export default store