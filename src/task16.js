import './App.css';
import RegisterUser from "./components/task16userapp/RegisterUser";
import LoginUser from "./components/task16userapp/LoginUser";
import Toolbar from "./components/task16userapp/Toolbar";
import IndexPage from "./pages/task16userapp/IndexPage";
import UserPage from "./pages/task16userapp/UserPage";
import SingleUser from "./pages/task16userapp/SingleUser";

import {BrowserRouter, Route, Routes} from "react-router-dom"


import React, {useState, useRef} from "react"

function App() {
    const [errorMsg, setErrorMsg] = useState("")
    const [myUser, setMyUser] = useState(null)
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

    const photoInp = useRef()
    const registerNameInp = useRef()
    const registerPassword1Inp = useRef()
    const registerPassword2Inp = useRef()

    const loginNameInp = useRef()
    const loginPasswordInp = useRef()


    ///////////////////USER REGISTRATION////////////////////
    const registerNewUser = (user) =>{
        setErrorMsg("")
        const foundUser = users.find(x => x.username === user.username)

        if(foundUser) {
            return setErrorMsg("Username is taken!")
        }

        const updatedUsers = [...users, user];
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));

    }

    //////////////////////////USER LOGIN///////////////////////////////

    const loginUser = (user) =>{
        setErrorMsg("")
        const foundUser = users.find(x => x.username === user.username && x.password === user.password)
        if(!foundUser) return  setErrorMsg("User doesn't exit!")

        setMyUser(foundUser)

    }

    return (
        <div>
            <BrowserRouter>
                <Toolbar/>
                <Routes>
                    <Route path="/" element={<IndexPage/>}/>
                    <Route path="/register" element={<RegisterUser photoUrl={photoInp} registerName={registerNameInp} pass1={registerPassword1Inp} pass2={registerPassword2Inp} registration={registerNewUser} errorMsg={errorMsg}/>}/>
                    <Route path="/login" element={ <LoginUser loginName={loginNameInp} loginPassword={loginPasswordInp} login={loginUser} errorMsg={errorMsg}/>}/>

                    <Route path="/userlist" element={<UserPage me={myUser} users={users}/>}/>
                    <Route path="/userlist/:id" element={<SingleUser/>}/>

                </Routes>

            </BrowserRouter>

        </div>
    )

}

export default App;

