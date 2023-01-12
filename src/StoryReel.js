import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      {/* Story */}
      <Story
        image="https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg"
        profileSrc="https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg?w=400&h=300&c=crop"
        title="Leonardo DiCaprio"
        />
      {/* Story */}
      <Story
        image="https://images.hellomagazine.com/imagenes/celebrities/20220530141601/cristiano-ronaldo-toned-torso-sauna-selfie/0-689-676/cristiano-ronaldo-toned-torso-sauna-selfie-t.jpg?tx=w_500"
        profileSrc="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt201e5db629572735/632ae0f166b35c473c48cbba/GettyImages-1241127731.jpg"
        title="Cristiano Ronaldo"
        />
      {/* Story */}
      <Story
        image="https://imageio.forbes.com/specials-images/imageserve/622e4e2c48cfef516b8590a8/Lionel-Messi-wants-to-leave-PSG-and-make-a-sensational-summer-return-to-FC-Barcelona-/960x0.jpg?format=jpg&width=960"
        profileSrc="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"
        title="Lionel Andres Messi"
        />
      {/* Story */}
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwUgqIceNfgJNvxFNsrg-WOvVj2C07vuo3MBbsPhkuA&s"
        profileSrc="https://media.gettyimages.com/id/1370784773/photo/kylian-mbappe-of-paris-saint-germain-celebrates-after-scoring-their-teams-first-goal-during.jpg?s=612x612&w=gi&k=20&c=U1RrDXEdi2eFhbo9bAOwtVsf8sDloDCwieAbh9uQVlk="
        title="Kylian Mbappe"
        />
      {/* Story */}
      <Story
        image="https://media.gettyimages.com/id/803015182/photo/robert-downey-jr-attends-the-premiere-of-columbia-pictures-spider-man-homecoming-at-tcl.jpg?s=612x612&w=gi&k=20&c=WVhnE9zY_nbCXfgrUyxgcfkoZnLoEkVgFKH-WHrZvbk="
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/800px-Robert_Downey%2C_Jr._2012.jpg"
        title="Robert Downey. Jr"
        />
        {/* Story */}
      {/* <Story
        image="https://static.toiimg.com/thumb/56441969.cms?width=170&height=240"
        profileSrc="https://static.toiimg.com/photo/54475662.cms"
        title="Ranbir Kapoor"
        /> */}
        
        <Story
        image="https://static.toiimg.com/photo/54475662.cms "
        profileSrc="  https://static.toiimg.com/thumb/56441969.cms?width=170&height=240"
        title="Ranbir Kapoor"
        />
    </div>
  );
}

export default StoryReel;
