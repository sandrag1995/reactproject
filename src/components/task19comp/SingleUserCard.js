import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import {addFavoriteUser, removeFavoriteUser} from "../../features/favuserlist";

const SingleUserCard = ({user}) => {
    const [visibleFavButton, setVisibleFavButton] = useState(true)
    const [visibleRemoveButton, setVisibleRemoveButton] = useState(false)
    const dispatch = useDispatch()
    function addFav(){
        dispatch(addFavoriteUser(user))
        setVisibleFavButton(false)
        setVisibleRemoveButton(true)
    }


    function removeFav() {
        dispatch(removeFavoriteUser(user));
        setVisibleFavButton(true)
        setVisibleRemoveButton(false)
    }


    return (
        <div className="user-card" id={user.id} style={{backgroundColor: user.gender === 'female' ? 'pink' : 'blue'}}>
            <img src={user.image} alt="" />
            <p>Username: {user.username}</p>
            {visibleFavButton && <button onClick={addFav} >Add to favorites</button>}
            {visibleRemoveButton && <button onClick={removeFav}>Remove favorites</button>}
        </div>


    );
};

export default SingleUserCard;