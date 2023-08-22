const LoginScreen = ({loginUser, loginName, loginPass, alertMsg}) =>{



    return(
        <div className="loginForm m-10">
            <div>
                <h1>LOGIN</h1>
                <input type="text" placeholder="Enter your username" ref={loginName}/>
                <label>: Username</label>
            </div>

            <div>
                <input type="text" placeholder="Enter your password" ref={loginPass}/>
                <label>: Password</label>
            </div>
            <p style={{color: "red"}}>{alertMsg}</p>
            <button onClick={loginUser}>LOGIN</button>
        </div>
    )
}

export default LoginScreen