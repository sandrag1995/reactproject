import React, { useState, useEffect } from 'react';
import SingleUserCard from "../../components/task18comp/SingleUserCard";



const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
       fetchPostData()
    }, []);

    const fetchPostData = () => {
        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(data => {
               setUsers(data.users);
            })

    }



    return (
        <div className="user-list">
            <h1>All users:</h1>
            <div className=" d-flex flex-wrap">
                {users.map((user, index) => (
                    <SingleUserCard user={user} key={index} />
                ))}
            </div>
        </div>
    );
};

export default AllUsers;