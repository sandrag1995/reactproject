import './App.css';


import {BrowserRouter, Route, Routes} from "react-router-dom"
import {useSelector} from "react-redux"

import React, {useState, useRef} from "react"

function task17() {

    const user = useSelector(state => state.user)

    console.log(user)

    return (
        <div style={{backgroundColor: user.userFavoriteColor}}>
            <img src={user.userImage} alt=""/>
            <p>Gender: {user.userGender}</p>
            <p>City: {user.userCity}</p>
            <p>Favorite color: {user.userFavoriteColor}</p>
        </div>
    )

}

export default task17;
