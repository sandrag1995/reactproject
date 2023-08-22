import React from 'react'
import {Link} from "react-router-dom";

const Toolbar = () => {

    return (
        <div className="navigationBar d-flex m-10 gap-20">
             <Link to="/home">Home</Link>
                <Link to="/catphotos">Cat Photos</Link>
            <Link to="/dogphotos">Dog Photos</Link>
            <Link to="/posts">Posts</Link>
        </div>
    )


}

export default Toolbar