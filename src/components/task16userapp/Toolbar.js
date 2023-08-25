import React from 'react'
import {Link, useLocation} from "react-router-dom";

const Toolbar = () =>{
    const location = useLocation();

    return(
        <div className="toolbar m-10">
            {location.pathname === '/register' && (
                <Link to="/login"><button>Login</button></Link>
            )}

            {(location.pathname === '/' || location.pathname.startsWith('/login')) && (
                <Link to="/register"><button>Register</button></Link>
            )}

            {(location.pathname === '/userlist' || location.pathname.startsWith('/userlist/')) && (
                <Link to="/"><button>Log out</button></Link>
            )}
        </div>
    )
}

export default Toolbar