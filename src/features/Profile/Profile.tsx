import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileUserType, StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import style from "./Profile.module.scss";


type PropsType = {
    profile: ProfileUserType| null
    status: string
    updateStatusTC: (status: string)=> void
}

const Profile = (props: PropsType) => {
    return (
        <div className={style.profileBlock}>
            <ProfileInfo updateStatusTC={props.updateStatusTC} status={props.status} profile={props.profile} />
            <MyPostsContainer profile={props.profile}/>
        </div>
    );
};

export default Profile;
