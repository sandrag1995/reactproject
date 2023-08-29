import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "player",
    initialState: {
        figure: null,
        money: 200,
        loopCount: 0,
        streets: {
            'The Strand': { owned: false, price: 60 },
            'Fleet Street': { owned: false, price: 60 },
            'Trafalgar Square': { owned: false, price: 100 },
            'Leicester Square': { owned: false, price: 100 },
            'Coventry Street': { owned: false, price: 100 },
            'Piccadilly': { owned: false, price: 120 },
            'Regent Street': { owned: false, price: 140 },
            'Oxford Street': { owned: false, price: 140 },
            'Bond Street': { owned: false, price: 160 },
            'Mayfair': { owned: false, price: 180 },
            'Park Lane': { owned: false, price: 180 },
            'Vermont Avenue': { owned: false, price: 200 },
            'The Angel Islington': { owned: false, price: 200 },
            'Euston Road': { owned: false, price: 220 },
            'Pentonville Road': { owned: false, price: 220 },
        }
    },


    reducers: {
        selectedPlayer: (state, action) => {
            state.figure = action.payload;
        },
        updateMoney: (state, action) => {
            state.money += action.payload;
        },
        incrementLoopCount: (state) => {
            state.loopCount += 1;
        },
        buyStreet: (state, action) => {
            const streetName = action.payload;
            state.streets[streetName].owned = true;
            state.money -= state.streets[streetName].price;
        },
        sellStreet: (state, action) => {
            const streetName = action.payload;
            state.streets[streetName].owned = false;
            state.money += state.streets[streetName].price / 2;
        },

    },
});

export const {
    selectedPlayer,
    updateMoney,
    incrementLoopCount,
    buyStreet,
    sellStreet
} = userSlice.actions;

export default userSlice.reducer;