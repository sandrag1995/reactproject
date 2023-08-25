import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
const LoginUser = ({loginName, loginPassword, login}) =>{

    const [errorMsg, setErrorMsg] = useState("")
    const navigateUserPage = useNavigate()

    function createUser(){
        const user = {
            username: loginName.current.value,
            password: loginPassword.current.value
        }

        if (user.username === "") return setErrorMsg("username field cannot be empty!")
        if (user.password === "") return setErrorMsg("username field cannot be empty!")

        login(user)
        navigateUserPage("/userlist")

    }

    return(
        <div className="userLogin d-flex m-10">
            <h1>Login form</h1>
            <div>
                <input type="text" placeholder="Enter your username" ref={loginName}/>
                <label> : Username</label>
            </div>

            <div>
                <input type="text" placeholder="Enter your password" ref={loginPassword}/>
                <label> : Password</label>
            </div>
            {errorMsg && <p style={{color: "red"}}>{errorMsg}</p>}
            <button onClick={createUser}>LOGIN!</button>
        </div>
    )
}

export default LoginUser