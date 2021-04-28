import React from 'react';
import ss from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = () => {
    return (
        <div className={ss.main}>
            <h2>My posts</h2>
            <NewPost/>
            <Post message="Battlefield 6 cooming soon on PC, PS4, PS5"/>
            <Post message="Watch new trailer on my chanel"/>
        </div>
    );
}

export default MyPosts;