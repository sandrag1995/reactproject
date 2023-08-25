import React, {useEffect, useState} from "react";

import {useParams, useNavigate} from "react-router-dom";

const SingleUser = () =>{
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const usersFromStorage = JSON.parse(localStorage.getItem('users')) || [];

        if (id >= 0 && id < usersFromStorage.length) {
            setSelectedUser(usersFromStorage[id]);
        } else {
            navigate('/userlist');
        }
    }, [id, navigate]);


    if (!selectedUser) {
        return (
            <div>
                <button onClick={() => navigate('/userlist')}>Return to user list</button>
                <h1>User's profile card:</h1>
                <p>Loading...</p>
            </div>
        );
    }

    return(
        <div>
            <button onClick={() => navigate('/userlist')}>Return to user list</button>
            <h1>{selectedUser.username}'s profile card:</h1>
            <div className="d-flex m-10">
                <img src={selectedUser.photo} alt=""/>
                <div>
                    <p><b>Username: </b> {selectedUser.username}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleUser