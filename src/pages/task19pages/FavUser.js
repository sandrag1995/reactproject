import React from 'react';
import {useSelector, useDispatch } from "react-redux";
import {removeFavoriteUser} from "../../features/favuserlist";

const FavUser = () => {
    const favoriteUsers = useSelector((state) => state.favuser.favoriteUsers);
    const dispatch = useDispatch()
    const handleRemoveFav = (user) => {
        dispatch(removeFavoriteUser(user));
    };

    return (
        <div>
        <h1>Favorite users:</h1>
            <div className="d-flex flex-wrap m-10">
                {favoriteUsers.map((user) => (
                    <div key={user.id} className="user-card" style={{backgroundColor: user.gender === 'female' ? 'pink' : 'blue'}}>
                        <img src={user.image} alt="" />
                        <p>Username: {user.username}</p>
                        <button onClick={() => handleRemoveFav(user)}>Remove favorites</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavUser;