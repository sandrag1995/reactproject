import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"

import React from "react"
import PlayerStart from "./pages/monopolypages/PlayerStart";
import GameBoard from "./pages/monopolypages/GameBoard";


function App() {

    return (
        <div>
<BrowserRouter>
    <Routes>
        <Route path="/" element={<PlayerStart/>}/>
        <Route path="/gameboard" element={<GameBoard/>}/>
    </Routes>
</BrowserRouter>
        </div>
    )

}

export default App;

