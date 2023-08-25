import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        age: 0,
        email: "",
        userGender: "female",
        userCity: "Vilnius",
        userFavoriteColor: "forestgreen",
        userImage: "https://picsum.photos/200"
    },

    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        },
    }
})

export const {changeName} = userSlice.actions

export default userSlice.reducer;