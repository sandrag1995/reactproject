import './App.css';


import React, {useState, useEffect, useRef} from "react"

function App() {

    const [errorMsg, setErrorMsg] = useState("");

    const usernameInp = useRef();
    const emailInp = useRef();
    const phoneInp = useRef();
    const passwordInp = useRef();
    const repeatPasswordInp = useRef();

    function displayMsg(message) {
        setErrorMsg(message);
        setTimeout(() => setErrorMsg(""), 1000);
    }

    const validatePhoneNumber = (phoneValue) => {
        if (/[a-zA-Z]/.test(phoneValue)) {
            return "Phone number should not have letters!";
        } else if (phoneValue.length !== 9) {
            return "Phone number must contain 9 digits!";
        } else if (!phoneValue.startsWith("86")) {
            return "Phone number must start with 86!";
        }
        return "";
    };

    const validateForm = () => {
        const usernameValue = usernameInp.current.value;
        const emailValue = emailInp.current.value;
        const phoneValue = phoneInp.current.value;
        const password1Value = passwordInp.current.value;
        const password2Value = repeatPasswordInp.current.value;

        const validationErrors = [];

        if (password1Value !== password2Value) {
            validationErrors.push("Your entered passwords don't match!");
        }

        const phoneError = validatePhoneNumber(phoneValue);
        if (phoneError) {
            validationErrors.push(phoneError);
        }

        if (usernameValue.length < 3) {
            validationErrors.push("Your username is too short!");
        } else if (usernameValue.length > 20) {
            validationErrors.push("Your username is too long!");
        }

        if (!usernameValue || !emailValue || !phoneValue || !password1Value || !password2Value) {
            validationErrors.push("You cannot leave empty fields!");
        }

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailValue.match(validRegex)) {
            validationErrors.push("Invalid email!");
        }

        return validationErrors;
    };

    const handleSubmit = () => {
        const validationErrors = validateForm();

        if (validationErrors.length === 0) {
            displayMsg("Registration successful!");
            const newUser = {
                username: usernameInp.current.value,
                email: emailInp.current.value,
                phone: phoneInp.current.value,
                password: passwordInp.current.value
            };

            const storedUserData = localStorage.getItem("userData");
            let userDataArray = [];

            if (storedUserData) {
                userDataArray = JSON.parse(storedUserData);
            }

            userDataArray.push(newUser);

            localStorage.setItem("userData", JSON.stringify(userDataArray));
        } else {
            displayMsg(validationErrors[0]);
        }

    }


    return (
        <div className="registrationForm m-10 d-flex">
            <div>
                <input type="text" placeholder="Enter your username" ref={usernameInp}/>
                <label>: Username</label>
            </div>

            <div>
                <input type="email" placeholder="Enter your email" ref={emailInp}/>
                <label>: Email</label>
            </div>

            <div>
                <input type="number" placeholder="Enter your phone number" ref={phoneInp}/>
                <label>: Phone</label>
            </div>

            <div>
                <input type="password" placeholder="Enter your password" ref={passwordInp}/>
                <label>: Password</label>
            </div>

            <div>
                <input type="password" placeholder="Repeat your password" ref={repeatPasswordInp}/>
                <label>: Repeat Password</label>
            </div>
            <p style={{color: "red"}}>{errorMsg}</p>
            <button onClick={handleSubmit}>Register</button>
        </div>

    );
}

export default App;

