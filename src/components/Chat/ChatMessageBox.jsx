/*===============================================================================*/
/* Made By Evaldo Silva on 21/07/2019                                            */
/* GITHUB: https://github.com/evaldosilva                                        */
/*===============================================================================*/

import React, { Component, Fragment } from "react";
import "./Chat.css";

//===============================================================================
// ChatMessageBox: it represents an area to the avatar write some chat message and
// post it.
//===============================================================================
class ChatMessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
    this.handleOnChangeMessageText = this.handleOnChangeMessageText.bind(this);
    this.handleOnClickSendMessage = this.handleOnClickSendMessage.bind(this);
  }

  handleOnChangeMessageText(e) {
    this.setState({ message: e.target.value });
  }

  handleOnClickSendMessage() {
    // Post the chat message to the chat messages area.
    this.props.handleChatMessageBoxMessage(
      this.props.avatar.id,
      this.state.message,
      0
    );
    this.setState({ message: "" });
  }

  render() {
    return (
      // Draws the avatar's name, textarea and a button to send the message.
      <Fragment>
        <div>
          <div
            className={
              this.props.avatar.avatarStyle === ""
                ? "message-default"
                : this.props.avatar.avatarStyle
            }
          >
            {this.props.avatar.name + " has "}
            <strong>{this.props.avatar.totalLikes}</strong> likes
          </div>
          <textarea
            className="chat-textarea"
            placeholder="Just type some text"
            cols="30"
            rows="4"
            value={this.state.message}
            onChange={this.handleOnChangeMessageText}
          />
          <br />
          <button
            className="standard-normal-button"
            onClick={this.handleOnClickSendMessage}
          >
            Send Message
          </button>
        </div>
      </Fragment>
    );
  }
}

export default ChatMessageBox;
