import './App.css';
import UserInput from "./components/chatapp/UserInput";
import ChatMsg from "./components/chatapp/ChatMsg";

import React, {useState, useEffect, useRef} from "react"

function task13() {

    const [userMessage, setUserMessage] = useState([])
    const [errorMsg, setErrorMsg] = useState("")

    const usernameInp = useRef()
    const msgInp = useRef()

    function errorMessage(){
        setErrorMsg("")
    }

    function submitMessage() {
        const usernameVal = usernameInp.current.value;
        const messageVal = msgInp.current.value;


        if (usernameVal === "") {
            setErrorMsg("Username cannot be empty!");
            setTimeout(errorMessage, 1000);
        } else if (messageVal.length < 20 || messageVal === "") {
            setErrorMsg("Message is too short!");
            setTimeout(errorMessage, 1000);
        } else {
            const date = new Date(Date.now());
            const formattedDate = date.toLocaleString();

            const newMessage = {
                username: usernameVal,
                message: messageVal,
                date: formattedDate
            };

            setUserMessage(prevMessages => [...prevMessages, newMessage]);

            usernameInp.current.value = "";
            msgInp.current.value = "";
        }
    }

    return (
        <div className="chatApp d-flex">
            <h1 style={{textAlign: "center"}}>CHAT APP</h1>
            <ChatMsg
                userMessage={userMessage}
            />
            <p style={{color: "red"}} className="m-10"> {errorMsg}</p>
            <UserInput
                username={usernameInp}
                message={msgInp}
                submitMessage={submitMessage}
            />
        </div>

    );
}

export default task13;