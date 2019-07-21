/*===============================================================================*/
/* Made By Evaldo Silva on 21/07/2019                                            */
/* GITHUB: https://github.com/evaldosilva                                        */
/*===============================================================================*/

import React, { Component } from "react";
import ChatMessage from "./ChatMessage";
import "./Chat.css";

//===============================================================================
// ChatMessageList: it's a container area to draw all the chat messages posted by
// avatars.
//===============================================================================
class ChatMessageList extends Component {
  render() {
    // It renders the lists of messages written by the avatars. Here, the avatar's message becomes a post.
    return (
      <div className="chat-message-list-container">
        {this.props.messageList.map(item => (
          <ChatMessage
            key={item.id}
            avatarPost={item}
            handleTotalLikesCount={this.props.handleTotalLikesCount}
          />
        ))}
      </div>
    );
  }
}

export default ChatMessageList;
