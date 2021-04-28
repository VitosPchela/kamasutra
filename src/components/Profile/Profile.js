import React from 'react';
import ss from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Avatar from "./Avatar/Avatar";
import Desc from "./Description/Desc";

const Profile = () => {
    return (
        <div className={ss.main}>
            <Avatar/>
            <Desc/>
            <MyPosts/>
        </div>
    );
}

export default Profile;