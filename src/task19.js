import './App.css';
import AllUsers from "./pages/task19pages/AllUsers";
import FavUser from "./pages/task19pages/FavUser";

import Toolbar from "./components/task19comp/Toolbar"


import {BrowserRouter, Route, Routes} from "react-router-dom"


import React from "react"



function App() {


    return (
        <div>
            <BrowserRouter>
                <Toolbar/>
                <Routes>
                    <Route path="/" element={<AllUsers/>}/>
                    <Route path="/favusers" element={<FavUser/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )

}

export default App;