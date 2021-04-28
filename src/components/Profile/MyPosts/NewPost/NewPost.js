import React from 'react';
import ss from "./NewPost.module.css";

const NewPost = () => {
    return (
        <div className={ss.main}>
            <textarea name="" id="" cols="50" rows="2"></textarea>
            <button>add post</button>
        </div>
    );
}

export default NewPost;