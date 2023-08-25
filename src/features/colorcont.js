import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "color",
    initialState: {
    userColor: "white",
        userText: "Default text sample"
    },

        reducers: {
            updateColor: (state, action) => {
                state.userColor = action.payload
            },
            updateText: (state, action) => {
                state.userText = action.payload
            },
        }
})

export const {updateColor, updateText} = userSlice.actions

export default userSlice.reducer;