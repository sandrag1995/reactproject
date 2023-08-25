import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "favuser",
    initialState: {
        favoriteUsers: [],
    },

    reducers: {
        addFavoriteUser: (state, action) => {
            state.favoriteUsers.push(action.payload);
        },
        removeFavoriteUser: (state, action) => {
            state.favoriteUsers = state.favoriteUsers.filter(
                (user) => user.id !== action.payload.id
            );
        },
    },
})

export const {addFavoriteUser, removeFavoriteUser} = userSlice.actions

export default userSlice.reducer;