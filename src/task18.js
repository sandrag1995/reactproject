import './App.css';
import UserField from "./components/colortextchange/UserField";
import ChangeText from "./components/colortextchange/ChangeText";
import ChangeColor from "./components/colortextchange/ChangeColor";


import {BrowserRouter, Route, Routes} from "react-router-dom"
import {useSelector} from "react-redux"

import React, {useState, useRef} from "react"

function task18() {

    return (
        <div>
            <UserField/>
            <div className="d-flex m-10">
                <ChangeColor/>
                <ChangeText/>
            </div>
        </div>
    )

}

export default task18;
