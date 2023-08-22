import React from 'react';

// const ChatField = ({
//                        selectedChatUser,
//                        loginUserMessage,
//                        userMessage,
//                        loggedInUser,
//                        removeMessage,
//                        sentMessageInp,
//                        sendMessage,
//                        alertMsg
//                    }) => {
//     return (
//         <div className="chatField m-10">
//             <h2>Your chat with {selectedChatUser.username}</h2>
//             <div className="messageField">
//
//                 {/* Render received messages from selectedChatUser */}
//                 {loginUserMessage
//                     .filter(loginMsg => loginMsg.username === selectedChatUser.username)
//                     .map((loginMsg, index) => (
//                         <div className="receivedMessage" key={index}>
//                             <p><span>{selectedChatUser.username}</span>: {loginMsg.message}</p>
//                             <small><span>Date posted: </span> {loginMsg.date}</small><br />
//                             <button onClick={() => removeMessage(index)}>Remove message</button>
//                         </div>
//                     ))}
//
//                 {/* Render sent messages from the logged-in user */}
//                 <div className="senderMessage">
//                     {userMessage
//                         .filter(msg => msg.username === loggedInUser.username && msg.receiver === selectedChatUser.username)
//                         .map((msg, index) => (
//                             <div className="sentMessage m-10" key={index}>
//                                 <p><span>You</span>: {msg.message}</p>
//                                 <small><span>Date posted: </span> {msg.date}</small><br />
//                                 <button onClick={() => removeMessage(index)}>Remove message</button>
//                             </div>
//                         ))}
//                 </div>
//             </div>
//
//             <p style={{ color: "red" }}>{alertMsg}</p>
//             <div className="sendMessageField d-flex m-10">
//                 <input
//                     type="text"
//                     placeholder="Enter your message"
//                     ref={sentMessageInp}
//                     disabled={!selectedChatUser}
//                 />
//                 <button onClick={sendMessage} disabled={!selectedChatUser}>
//                     Send message
//                 </button>
//             </div>
//         </div>
//     );
// };

const ChatField = ({
                       selectedChatUser,
                       loginUserMessage,
                       userMessage,
                       loggedInUser,
                       removeMessage,
                       sentMessageInp,
                       sendMessage,
                       alertMsg
                   }) => {
    const receivedMessages = loginUserMessage.filter(msg => msg.username === selectedChatUser.username);
    const sentMessages = userMessage.filter(msg => msg.username === loggedInUser.username && msg.receiver === selectedChatUser.username);

    const allMessages = [...receivedMessages, ...sentMessages];
    allMessages.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <div className="chatField m-10">
            <h2>Your chat with {selectedChatUser.username}</h2>
            <div className="messageField">
                {allMessages.map((msg, index) => (
                    <div
                        className={msg.username === loggedInUser.username ? "sentMessage" : "receivedMessage"}
                        key={index}
                    >
                        <p>
                            <span>{msg.username === loggedInUser.username ? "You" : selectedChatUser.username}</span>: {msg.message}
                        </p>
                        <small><span>Date posted: </span> {msg.date}</small><br />
                        <button onClick={() => removeMessage(index)}>Remove message</button>
                    </div>
                ))}
            </div>
            <p style={{ color: "red" }}>{alertMsg}</p>
            <div className="sendMessageField d-flex m-10">
                <input
                    type="text"
                    placeholder="Enter your message"
                    ref={sentMessageInp}
                    disabled={!selectedChatUser}
                />
                <button onClick={sendMessage} disabled={!selectedChatUser}>
                    Send message
                </button>
            </div>
        </div>
    );
};


export default ChatField;