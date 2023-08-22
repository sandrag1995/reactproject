const Toolbar = ({toLoginScreen, toRegisterScreen, logoutUser, visibleLoginBtn, visibleRegisterBtn, visibleLogoutBtn}) =>{

    return(
        <div className="userToolbar m-10 d-flex">
            {visibleLoginBtn && (<button onClick={toLoginScreen}>TO LOGIN</button>)}
            {visibleRegisterBtn && (<button onClick={toRegisterScreen}>TO REGISTER</button>)}
            {visibleLogoutBtn && (<button onClick={logoutUser}>LOG OUT</button>)}
        </div>
    )
}

export default Toolbar