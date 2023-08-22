const RegisterScreen = ({registerUser, registerName, registerPass1, registerPass2, alertMsg}) => {

    return(
        <div className="registerForm m-10">
            <h1>REGISTER</h1>
            <div>
                <input type="text" placeholder="Enter your username" ref={registerName}/>
                <label>: Username</label>
            </div>

            <div>
                <input type="text" placeholder="Enter your password" ref={registerPass1}/>
                <label>: Password</label>
            </div>

            <div>
                <input type="text" placeholder="Repeat password" ref={registerPass2}/>
                <label>: Repeat password</label>
            </div>
            <p style={{color: "red"}}>{alertMsg}</p>
            <button onClick={registerUser}>REGISTER</button>
        </div>
    )
}

export default RegisterScreen