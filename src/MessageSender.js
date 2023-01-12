
import { Avatar } from '@material-ui/core'
import React from 'react'
import "./MessageSender.css"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTTF25V8zJE5Xz9Wzk7q7ZFEVrV9DYO2hLQ&usqp=CAU'/>
                <form action="">
                    <input type="text" placeholder={'Whats on your mind'}/>
                    <input type="text" placeholder='Image URL (Optional)'/>

                    <button onClick={handleSubmit} type="submit">Hidden submit</button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3><InsertEmoticonIcon style={{color:"orange"}}/>
                    <h3>Feelings/Activity</h3>
                </div>
            </div>

  </div>
}

export default MessageSender