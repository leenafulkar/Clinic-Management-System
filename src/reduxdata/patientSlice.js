import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "patientlist",
    initialState: {
        value: []
    },
    reducers: {
        addPatient: (state, action) => {
            state.value = action.payload
        },
        changePatient: (state, action) => {
            state.value = action.payload
        },
        donePatient: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { addPatient, changePatient, donePatient } = slice.actions
export default slice.reducer