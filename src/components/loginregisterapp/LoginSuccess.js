import React from 'react';
import UserList from './UserList';
import ChatField from './ChatField';

const LoginSuccess = ({
                          loggedInUser,
                          user,
                          userDataArray,
                          selectChatUser,
                          sentMessageInp,
                          sendMessage,
                          alertMsg,
                          selectedChatUser,
                          borderStyle,
                          loginUserMessage,
                          removeMessage,
                          userMessage
                      }) => {
    const filteredUserDataArray = userDataArray.filter(userData => userData.username !== user.username);

    const getUserLastMessages = () => {
        return filteredUserDataArray.map(userData => {
            const lastMessage = loginUserMessage.find(message => message.username === userData.username);
            return {
                ...userData,
                lastMessage: lastMessage ? lastMessage.message : "",
            };
        });
    };

    return (
        <div className="chatRoom">
            <h1>Welcome to the chat room, {user.username}!</h1>
            <div className="d-flex m-10">
                <UserList
                    filteredUserDataArray={filteredUserDataArray}
                    selectChatUser={selectChatUser}
                    borderStyle={borderStyle}
                    user={user}
                    selectedChatUser={selectedChatUser}
                    loginUserMessage={loginUserMessage}
                />
                <ChatField
                    selectedChatUser={selectedChatUser}
                    loginUserMessage={loginUserMessage}
                    userMessage={userMessage}
                    loggedInUser={loggedInUser}
                    removeMessage={removeMessage}
                    sentMessageInp={sentMessageInp}
                    sendMessage={sendMessage}
                    alertMsg={alertMsg}
                />
            </div>
        </div>
    );
};

export default LoginSuccess;


// const conversation = {  id: "conversationId",
// participants: ["user1", "user2"],
// messages: [{    username: "user1",
// message: "labas"  }],
// lastMessage: {    username: "user1",    message: "labas"
// }}
