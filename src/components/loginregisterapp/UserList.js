import React from 'react';

const UserList = ({
                      filteredUserDataArray,
                      selectChatUser,
                      borderStyle,
                      user,
                      selectedChatUser,
                      loginUserMessage
                  }) => {
    return (
        <div className="users">
            <h3 style={{ color: "antiquewhite" }}>Users: </h3>
            <div className="userList m-10">
                {filteredUserDataArray.map((userData, index) => (
                    <div
                        key={index}
                        className="user"
                        style={{
                            border: userData.username === selectedChatUser.username ? borderStyle : "3px solid lightseagreen"
                        }}
                    >
                        <p
                            className="userNameStyle"
                            onClick={() => selectChatUser(userData)}
                        >
                            <b>{userData.username}</b>
                        </p>
                        <small>
                            <b>Last message from</b>: {userData.username}<br />
                            <small>
                                <b>Message:</b> {userData.username === user.username ? "You" : userData.lastMessage}
                            </small>
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;