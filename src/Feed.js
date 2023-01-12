import React from 'react'
import "./Feed.css"
import StoryReel from './StoryReel.js'
import MessageSender from './MessageSender.js';
import Post from "./Post.js"
// import MessageSender from 'MessageSender.js'

function Feed() {
  return <div className="feed">
        {/* StoryReel */}

        <StoryReel />
        {/* MessageSender */}

        <MessageSender />

        {/* Post */}
        <Post/>



        
  </div>;
}

export default Feed