import React from 'react';
import ss from "./Post.module.css";

const Post = (props) => {
    return (

    <div className={ss.item}>
        <div><img className={ss.img} src="https://avatarfiles.alphacoders.com/126/126787.png" alt=""/></div>
        <div><p>{props.message}</p></div>
        <div>like</div>
    </div>


    );
}

export default Post;