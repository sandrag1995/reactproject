
const UserInput = ({submitMessage, username, message}) =>{

    return (
        <div className="userInputs d-flex m-10">
            <input type="text" placeholder="Username" ref={username}/>
            <input type="text" placeholder="Your message" ref={message}/>
            <button onClick={submitMessage}>Submit!</button>
        </div>
        )

}

export default UserInput