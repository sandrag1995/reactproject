import './App.css';
import AllUsers from "./pages/task18pages/AllUsers";
import FavUser from "./pages/task18pages/FavUser";

import Toolbar from "./components/task18comp/Toolbar"


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

