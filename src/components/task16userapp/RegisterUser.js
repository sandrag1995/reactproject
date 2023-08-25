import React from 'react'
import {useState} from 'react';
import {useNavigate} from "react-router-dom";


const RegisterUser = ({photoUrl, registerName, pass1, pass2, registration}) =>{
    const [errorMsg, setErrorMsg] = useState("")
    const navigateLogin = useNavigate()
    function register(){

        const user = {
            username: registerName.current.value,
            password: pass1.current.value,
            photo: photoUrl.current.value
        }
        if (user.photo === "") return setErrorMsg("Photo url cannot be empty!")
        if (user.username === "") return setErrorMsg("Username cannot be empty!")
        if (user.password === "" || pass2.current.value === "") return setErrorMsg("Password field be empty!")
        if (user.password !== pass2.current.value) return setErrorMsg("Password doesn't match!")

        registration(user)
        navigateLogin("/login")
    }

    return(
        <div className="userRegistration d-flex m-10">
            <h1>Registration form</h1>
            <div>
                <input type="text" placeholder="Enter photo url" ref={photoUrl}/>
                <label> : User photo</label>
            </div>

            <div>
                <input type="text" placeholder="Enter your username" ref={registerName}/>
                <label> : Username</label>
            </div>

            <div>
                <input type="text" placeholder="Enter your password" ref={pass1}/>
                <label> : Password 1</label>
            </div>
            <div>
                <input type="text" placeholder="Repeat your password" ref={pass2}/>
                <label> : Password 2</label>
            </div>
            {errorMsg && <p style={{color: "red"}}>{errorMsg}</p>}

            <button onClick={register}>REGISTER!</button>
        </div>
    )
}

export default RegisterUser