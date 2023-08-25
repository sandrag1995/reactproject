import React from "react";
import {useSelector} from "react-redux";
const UserField = () =>{
    const data = useSelector(state => state.color)
return (
    <div className="userField m-10" style={{backgroundColor: data.userColor}}>
<h1>{data.userText}</h1>
    </div>
)
}

export default UserField