const Users_task5 = ({user}) => {
console.log(user)

    return (

        <div className="card m-10" style={{backgroundColor: user.gender === 'male'? "blue" : "pink"}}>
            <div className="colorField" style={{backgroundColor: user.eyeColor}}></div>
            <img src={user.image} alt=""/>
            <p><b>Name:</b> {user.firstName}</p>
        </div>
    );
}

export default Users_task5;