import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"

function Post({profilePic, image, username, timestamp, message}) {
  return (<div className="post">
    This is the post
    <div className="post_top">
        <Avatar src={profilePic} className="post_avatar"/>
        <div className="post_topInfo">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
    </div>
  </div>
  );
}

export default Post