/*===============================================================================*/
/* Made By Evaldo Silva on 21/07/2019                                            */
/* GITHUB: https://github.com/evaldosilva                                        */
/*===============================================================================*/

import React, { Component, Fragment } from "react";
import "./Chat.css";

// 'Likes' step increment.
const LIKE_STEP = 1;

//===============================================================================
// ChatMessage: it represents a chat message posted by some avatar.
//===============================================================================
class ChatMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { likeCount: props.avatarPost.likesCount };
    this.handleOnClickLikeButton = this.handleOnClickLikeButton.bind(this);
  }

  handleOnClickLikeButton() {
    // Increment the local count
    this.incrementLikeCount();
    // Increment the avatar's total count
    this.incrementTotalLikesCount();
  }

  incrementLikeCount() {
    // Increment the number of likes
    this.setState(state => ({
      likeCount: state.likeCount + LIKE_STEP
    }));
  }

  incrementTotalLikesCount() {
    // Increment the number of likes of the avatar, in the parent componnet.
    this.props.handleTotalLikesCount(
      this.props.avatarPost.avatarId,
      this.props.avatarPost.id,
      LIKE_STEP
    );
  }

  render() {
    return (
      // Renders the avatar's post.
      <Fragment>
        <div
          className={
            this.props.avatarPost.avatarStyle === ""
              ? "message-default"
              : this.props.avatarPost.avatarStyle
          }
        >
          Post Likes: <strong>{this.state.likeCount}</strong>
          <br />
          <strong>{this.props.avatarPost.avatarName}</strong>
          {" said: " + this.props.avatarPost.message} <br />
          <button
            className="standard-normal-button"
            onClick={this.handleOnClickLikeButton}
          >
            Like
          </button>
        </div>
      </Fragment>
    );
  }
}

export default ChatMessage;
