import './App.css';
import Toolbar from "./components/loginregisterapp/Toolbar";
import RegisterScreen from "./components/loginregisterapp/RegisterScreen";
import LoginScreen from "./components/loginregisterapp/LoginScreen";
import LoginSuccess from "./components/loginregisterapp/LoginSuccess";

import React, {useState, useEffect, useRef} from "react"

function task14() {

    const [newUser, setNewUser] = useState([])
    const [alertMessage, setAlertMessage] = useState("")
    const [visibleRegister, setVisibleRegister] = useState(true)
    const [visibleLogin, setVisibleLogin] = useState(false)
    const [visibleLogout, setVisibleLogout] = useState(false)

    const [visibleLoginBtn, setVisibleLoginBtn] = useState(true)
    const [visibleRegisterBtn, setVisibleRegisterBtn] = useState(false)
    const [visibleLogoutBtn, setVisibleLogoutBtn] = useState(false)

    const registerNameInp = useRef()
    const registerPassword1Inp = useRef()
    const registerPassword2Inp = useRef()

    const loginNameInp = useRef()
    const loginPasswordInp = useRef()

    const [loggedInUser, setLoggedInUser] = useState(null);

    const sentMessageInp = useRef()
    const [userMessage, setUserMessage] = useState([])



    /////////////////////////USER SELECTION///////////////////////////
    const [selectedChatUser, setSelectedChatUser] = useState("");
    const [borderStyle, setBorderStyle] = useState("3px solid lightseagreen")

    function selectChatUser(user) {
        setSelectedChatUser(user);
        setBorderStyle("5px solid indianred")
    }

    console.log(selectedChatUser)


    useEffect(() => {
        const initialConversations = localStorage.getItem('conversations')
            ? JSON.parse(localStorage.getItem('conversations'))
            : [];

        localStorage.setItem('conversations', JSON.stringify(initialConversations));
    }, []);

    useEffect(() => {
        const storedConversations = localStorage.getItem('conversations');
        if (loggedInUser && selectedChatUser && storedConversations) {
            const parsedConversations = JSON.parse(storedConversations);
            const selectedConversation = parsedConversations.find(
                conversation =>
                    conversation.participants.includes(loggedInUser.username) &&
                    conversation.participants.includes(selectedChatUser.username)
            );

            if (selectedConversation) {
                setUserMessage(selectedConversation.messages);
            }
        }
    }, [loggedInUser, selectedChatUser]);

    function sendMessage() {

        if (!selectedChatUser) {
            setAlertMessage("Please select a user to chat with.");
            setTimeout(alertMsg, 1000);
            return;
        }

        const messageVal = sentMessageInp.current.value;

        if (messageVal === "") {
            setAlertMessage("Message is too short!");
            setTimeout(alertMsg, 1000);
        } else {
            const date = new Date(Date.now());
            const formattedDate = date.toLocaleString();

            const conversationId = `${loggedInUser.username}_${selectedChatUser.username}`;
            const newMessage = {
                username: loggedInUser.username,
                message: messageVal,
                date: formattedDate,
                receiver: selectedChatUser.username
            };

            const storedConversations = localStorage.getItem('conversations');
            const updatedConversations = storedConversations
                ? JSON.parse(storedConversations)
                : [];

            const existingConversation = updatedConversations.find(
                conversation => conversation.id === conversationId
            );

            if (existingConversation) {
                existingConversation.messages.push(newMessage);
                existingConversation.lastMessage = newMessage;
            } else {
                const newConversation = {
                    id: conversationId,
                    date: formattedDate,
                    participants: [loggedInUser.username, selectedChatUser.username],
                    messages: [newMessage],
                    lastMessage: newMessage
                };
                updatedConversations.push(newConversation);
            }

            setUserMessage(prevMessages => [...prevMessages, newMessage]);
            localStorage.setItem('conversations', JSON.stringify(updatedConversations));

            // Clear the message input field after sending
            sentMessageInp.current.value = "";
        }
    }


////////////////////BUTTONS///////////////////////////////
    function toLoginScreen(){
        setVisibleRegister(false)
        setVisibleLogin(true)
        setVisibleLogout(false)
        setVisibleLoginBtn(false)
        setVisibleRegisterBtn(true)
        setVisibleLogout(false)
    }

    function toRegisterScreen(){
        setVisibleLogin(false)
        setVisibleRegister(true);
        setVisibleLogout(false)
        setVisibleLoginBtn(true)
        setVisibleRegisterBtn(false)
        setVisibleLogout(false)
    }


    function removeMessage(index) {
        setUserMessage(prevMessages => {
            const updatedMessages = [...prevMessages];
            updatedMessages.splice(index, 1);
            return updatedMessages;
        });

        // Update localStorage with the updated messages
        const storedConversations = localStorage.getItem('conversations');
        const updatedConversations = storedConversations
            ? JSON.parse(storedConversations)
            : [];

        const conversationId = `${loggedInUser.username}_${selectedChatUser.username}`;
        const existingConversation = updatedConversations.find(
            conversation => conversation.id === conversationId
        );

        if (existingConversation) {
            existingConversation.messages = userMessage; // Update messages array
        }

        localStorage.setItem('conversations', JSON.stringify(updatedConversations));
    }

    ///////////////////LOG OUT USER/////////////////////

    function logOutUser(){
        setVisibleRegister(true)
        setVisibleLogin(false)
        setVisibleLoginBtn(true)
        setVisibleRegisterBtn(false)
        setVisibleLogoutBtn(false)
        setVisibleLogout(false)

    }
    function alertMsg(message) {
        setAlertMessage(message);
        setTimeout(() => setAlertMessage(""), 1000);
    }

    ///////////////USER LOGIN/////////////////////

    function loginUser() {

        const loginNameVal = loginNameInp.current.value;
        const loginPasswordVal = loginPasswordInp.current.value;

        if (loginNameVal === "" || loginPasswordVal === "") {
            setAlertMessage("You cannot leave empty fields!");
            setTimeout(alertMsg, 1000);
        } else {
            const storedUserData = localStorage.getItem("userData");
            if (storedUserData) {
                const userDataArray = JSON.parse(storedUserData);
                const matchingUser = userDataArray.find(user =>
                    user.username === loginNameVal && user.password === loginPasswordVal
                );

                if (matchingUser) {
                    setLoggedInUser(matchingUser)
                    setVisibleLogin(false);
                    setVisibleLogout(true);
                    setVisibleRegisterBtn(false);
                    setVisibleLogoutBtn(true);
                } else {
                    setAlertMessage("Invalid username or password");
                    setTimeout(alertMsg, 1000);
                }
            }
        }
    }

    ////////////////USER REGISTRATION///////////////////

    function registerUser(){

        const validationErrors = [];

        const registerNameVal = registerNameInp.current.value
        const registerPassword1Val = registerPassword1Inp.current.value
        const registerPassword2Val = registerPassword2Inp.current.value

        if (registerNameVal === "" || registerPassword1Val === "" || registerPassword2Val === ""){
            validationErrors.push("You cannot leave empty fields!");
        } else if (registerNameVal.length < 3) {
            validationErrors.push("Username is too short!");
        } else if (registerNameVal.length > 20) {
            validationErrors.push("Username is too long!");
        }

        const hasDigit = /\d/.test(registerPassword1Val);

        if (registerPassword1Val !== registerPassword2Val){
            validationErrors.push("Your entered passwords don't match!");
        } else if (!hasDigit){
            validationErrors.push("Your password must contain at least one digit!");
        }

        const existingUser = userDataArray.find(user => user.username === registerNameVal);
        if (existingUser) {
            validationErrors.push("Username already taken!");
        }

        return validationErrors;

    }

    const handleSubmit = () => {
        const validationErrors = registerUser();
        if (validationErrors.length === 0) {
            const newUser = {
                username: registerNameInp.current.value,
                password: registerPassword1Inp.current.value
            };

            const storedUserData = localStorage.getItem("userData");
            const userDataArray = storedUserData ? JSON.parse(storedUserData) : [];


            const existingUser = userDataArray.find(user => user.username === newUser.username);
            if (existingUser) {
                alertMsg("Username already taken!");
            } else {

                const updatedUserDataArray = [...userDataArray, newUser];


                localStorage.setItem("userData", JSON.stringify(updatedUserDataArray));


                registerNameInp.current.value = "";
                registerPassword1Inp.current.value = "";
                registerPassword2Inp.current.value = "";

                alertMsg("Registration successful! You can now log in.");
            }
        } else {
            alertMsg(validationErrors[0]);
        }
    };


    const storedUserData = localStorage.getItem("userData");
    const userDataArray = storedUserData ? JSON.parse(storedUserData) : [];

    return (
        <div className="userLoginRegisterWindow">
            <Toolbar
                toLoginScreen={toLoginScreen}
                toRegisterScreen={toRegisterScreen}
                logoutUser={logOutUser}
                visibleLoginBtn={visibleLoginBtn}
                visibleRegisterBtn={visibleRegisterBtn}
                visibleLogoutBtn={visibleLogoutBtn}
            />
            <div className="d-flex">
                {visibleRegister && (
                    <RegisterScreen
                        registerUser={handleSubmit}
                        registerName={registerNameInp}
                        registerPass1={registerPassword1Inp}
                        registerPass2={registerPassword2Inp}
                        alertMsg={alertMessage}
                    />
                )}
                {visibleLogin && (
                    <LoginScreen
                        loginUser={loginUser}
                        loginName={loginNameInp}
                        loginPass={loginPasswordInp}
                        alertMsg={alertMessage}

                    />
                )}

                {visibleLogout && (<LoginSuccess
                    user={loggedInUser}
                    userDataArray={userDataArray}
                    selectChatUser={selectChatUser}
                    sentMessageInp={sentMessageInp}
                    sendMessage={sendMessage}
                    alertMsg={alertMessage}
                    borderStyle={borderStyle}
                    selectedChatUser={selectedChatUser}
                    loginUserMessage={userMessage}
                    removeMessage={removeMessage}
                    ///////////////
                    userMessage={userMessage}
                    loggedInUser={loggedInUser}
                />)}


            </div>
        </div>
    );

}

export default task14;