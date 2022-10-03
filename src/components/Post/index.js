import React, { useState } from 'react';
import "./post.css";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import TurnedInIcon from "@mui/icons-material/TurnedIn";



const Post = () => {
    const [liked, setliked] = useState(false);
    const [saved, setsaved] = useState(false);
  return (
   
    <section className="main">
    <div className="wrapper">
        <div className="left-col">
            

            <div className="post">
                <div className="info">
                    <div className="user">
                        <div className="profile-pic"><img src="" alt=""/></div>
                        <p className="username">Page Name</p>
                    </div>
                    <img src="https://i.imgur.com/UXdKE3o.jpg" className="options" alt=""/>
                </div>
                <img src="https://i.imgur.com/UXdKE3o.jpg" className="post-image" alt=""/>
                <div className="post-content">
                    
                <div class="d-flex justify-content-between align-items-center">
                <div
                  onClick={() => setliked(!liked)}
                  style={{ cursor: "pointer" }}
                  class="d-flex flex-row icons d-flex align-items-center"
                >
                
                  {liked ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
                  
                </div>
                <div
                  onClick={() => alert("Commented!")}
                  style={{ cursor: "pointer" }}
                  class="d-flex flex-row icons d-flex align-items-center"
                >
                  <CommentIcon />
                </div>
                <div
                  onClick={() => setsaved(!saved)}
                  style={{ cursor: "pointer" }}
                  class="d-flex flex-row muted-color"
                >
                  {saved ? <TurnedInIcon /> : <TurnedInNotIcon />}
                </div>
             
                    </div>
                    
                    
                </div>
                <div className="comment-wrapper">
                    <img src="img/smile.PNG" className="icon" alt=""/>
                    <input type="text" className="comment-box" placeholder="Add a comment"/>
                    <button className="comment-btn">post</button>
                </div>
            </div>
           
           
        </div>
    </div>
</section>

  )
}

export default Post;