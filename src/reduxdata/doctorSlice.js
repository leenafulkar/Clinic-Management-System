import { createSlice } from "@reduxjs/toolkit";

const savedata = JSON.parse(localStorage.getItem('mydata')) || {}

const initialState = {
    value: {
        name: savedata.name || undefined,
        msg: savedata.msg || undefined,
        isLogin: savedata.isLogin || false,
        type: savedata.type || undefined
    }
}

const slice = createSlice({
    name: "doctor",
    initialState,
    reducers: {
        doctorReducer: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { doctorReducer } = slice.actions
export default slice.reducer