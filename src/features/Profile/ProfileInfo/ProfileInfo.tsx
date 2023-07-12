import React from 'react';
import style from './ProfileInfo.module.scss';
import {ProfileUserType} from "../../../redux/store";
import preload from "../../../assets/images/Reload.svg";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userIcon from "../../../assets/images/profile.svg"
import {Preloader} from "../../../common/components/Preloader/Preloader";

type PropsType= {
    profile: ProfileUserType| null;
    status: string;
    updateStatusTC: (status: string)=>void;
    showEdit: ()=>void;
    isOwner: boolean;

}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile ) {
        return <Preloader/>
        }
    const onClickHandler = ()=> {
        props.showEdit()
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                <div className={style.imgBlock}>
                <img src={props.profile.photos.large || userIcon} alt="фото"/>
                </div>
                <span className={style.name}>{props.profile.fullName}</span>
                <ProfileStatus isOwner={props.isOwner} updateStatusTC={props.updateStatusTC} status={props.status}/>
                {props.isOwner && <button onClick={onClickHandler}>Редактировать профиль </button>}

            </div>
        </div>
    )
}

export default ProfileInfo;
