import React, { useState, useEffect } from 'react'
import "./Feed.css"
import StoryReel from './StoryReel.js'
import MessageSender from './MessageSender.js';
import Post from "./Post.js"
// import MessageSender from 'MessageSender.js'
import setPosts from 'react'
import { dblClick } from '@testing-library/user-event/dist/click';

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
      dblClick.collections('posts').onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) =>({ id:doc.id,
                  data:doc.data()
        })))
      );
  },[])

  return (
    <div className="feed">
      <StoryReel/>
      <MessageSender/>
      {posts.map((post)=>(
        <post
          key={post.id}
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username}
          image={post.image}
        />
      ))}
    </div>
  )


//   return <div className="feed">
//         {/* StoryReel */}

//         <StoryReel />
//         {/* MessageSender */}

//         <MessageSender />

//         {/* Post */}
//         <Post
//           profilePic="https://media.gettyimages.com/id/1199766919/photo/us-actor-leonardo-dicaprio-arrives-for-the-92nd-oscars-at-the-dolby-theatre-in-hollywood.jpg?s=612x612&w=gi&k=20&c=Ev8UMhgQEzlCK24OlQ3UXhlt5MeoQsr1CS05fhZks9M="
//           message="Congratulations to Alaska native group Pedro Bay Corp and supporters on a critical win for the world’s largest wild salmon fishery, found in Alaska’s Bristol Bay."
//           timestamp='2 days ago'

//           username='Leonardo Dicaprio'
//           image='https://www.cheatsheet.com/wp-content/uploads/2020/10/leonardo-dicaprio-1-scaled.jpg?height=332&width=435&format=webp&fit=cover'

//         />
//         <Post
//           profilePic="https://images.hellomagazine.com/imagenes/celebrities/20220530141601/cristiano-ronaldo-toned-torso-sauna-selfie/0-689-676/cristiano-ronaldo-toned-torso-sauna-selfie-t.jpg?tx=w_500"
//           message="Make every workout count💪🏼"
//           timestamp='5 days ago'

//           username='Cristiano Ronaldo'
//           image='https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/324475108_684733533431760_8793279619665114013_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=2HZV79nVhskAX_DY70H&_nc_ht=scontent.fktm9-2.fna&oh=00_AfDi8vmJJGGMuBsNp8m_60nUPNVPc6ZcoWVHGPEqp035ow&oe=63C70D62'

//         />
//         <Post
//           profilePic="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ2Yt_ER0yxQNhXgcmDQw_LIgpagFiXZT40BsFQxy3PlcKCFmnd_5AhiVIf4ihBGUFjX8d1qPylGXsLgiE"
//           message="Road to 2️⃣0️⃣2️⃣2️⃣… 
// Happy New Year everyone
// I wish you health, happiness and success. 🎊❤️"
//           timestamp='january 1, 2022'

//           username='Kylian Mbappe'
//           image='https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/270945575_468520654633060_5535771860963213290_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Da9Dz2scJWgAX-2mDlD&_nc_ht=scontent.fktm9-2.fna&oh=00_AfDcfTDzXouVa4e6yj_25xTV1JL9SfPT3R2xGIyET6MwTQ&oe=63C6EF4B'

//         />
//         <Post
//           profilePic="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/142836521_253505912798853_5330703735152789451_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QpxTXjnEk4MAX9kIwMJ&_nc_ht=scontent.fktm9-2.fna&oh=00_AfBPK6BRngCxE1_glH9U6fzSaL_ldJAj_d4GAUYkwmWCIQ&oe=63E8DCAC"
//           message="Friendsgiving with our Team Downey extended family."
//           timestamp='November 24, 2022'

//           username='Robert Downey Jr'
//           image='https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/316291717_683157073167066_7957903851828430707_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=2c4854&_nc_ohc=JcYQt3HR0CkAX-HjfUN&_nc_ht=scontent.fktm9-2.fna&oh=00_AfBJk4taX0YmVklugUTmrzQTCegBRGCEVCP9-DcivD4KkQ&oe=63C5A7BE'

//         />
//         <Post
//           profilePic="https://static.toiimg.com/thumb/56441969.cms?width=170&height=240"
//         title="Ranbir Kapoor"
//           message="#Bababoltahain out now #Sanju in Cinemas now "
//           timestamp='July 1, 2018'

//           username='Ranbir Kapoor'
//           image='https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/36425822_1692214327562364_9063123010289926144_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=R-b3OxadJr0AX8cwRHy&_nc_ht=scontent.fktm9-2.fna&oh=00_AfB2Qi3N33QFzSvMMF0o21pcR1pXrEFGTJf6kJ885S39og&oe=63E8EFA6'

//         />



        
//   </div>;
}

export default Feed