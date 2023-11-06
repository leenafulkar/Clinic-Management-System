import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "updateList",
    initialState: {
        value: undefined
    },
    reducers: {

        updateRecp: (state, action) => {
            state.value = action.payload
        },
        updatePatient: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { updateRecp, updatePatient } = slice.actions
export default slice.reducer