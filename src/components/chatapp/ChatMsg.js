const ChatMsg = ({userMessage}) => {

    return (
        <div className="sentMsg">
            {userMessage.map((message, index) => (
                <div key={index} className="message">
                    <p><span>{message.username}</span>: {message.message}</p>
                    <p><span>Date posted: </span>{message.date}</p>
                </div>
            ))}
        </div>
        )


}

export default ChatMsg