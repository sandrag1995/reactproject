import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const Toolbar = () => {
    const [visibleFavUsers, setVisibleFavUsers] = useState(true)
    const [visibleAllUsers, setVisibleAllUsers] = useState(false)

    function toFavs(){
        setVisibleFavUsers(false)
        setVisibleAllUsers(true)
    }

    function toAllUsers(){
        setVisibleFavUsers(true)
        setVisibleAllUsers(false)
    }

    const favoriteUsers = useSelector((state) => state.favuser.favoriteUsers);

    return (
        <div className="toolbar m-10 d-flex">
            <p>Favorite users: ({favoriteUsers.length})</p>
            {visibleFavUsers && <Link to="/favusers"><button className="m-10" onClick={toFavs}>Favorite users</button></Link>}
            {visibleAllUsers && <Link to="/"><button className="m-10" onClick={toAllUsers}>Back to all users</button></Link>}
        </div>
    );
};

export default Toolbar;