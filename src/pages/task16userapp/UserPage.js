import React from "react";
import {useNavigate, useParams} from "react-router-dom";

const UserPage = ({ users, me }) => {
    const navigateUser = useNavigate();
    const { id } = useParams();

    function displayUser(id) {
        navigateUser("/userlist/" + id);
    }

    return (
        <div>
            {me && (
                <h1>Hello, {me.username}</h1>
            )}
            <h2>User list:</h2>
            <div className="availableUsers d-flex flex-wrap">
                {users.map((user, index) => (
                    <div key={index} className="userCard d-flex" id={index}>
                        <img src={user.photo} alt="" className="m-10" style={{ height: "80px" }} />
                        <h4 onClick={() => displayUser(index)}>{user.username}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPage