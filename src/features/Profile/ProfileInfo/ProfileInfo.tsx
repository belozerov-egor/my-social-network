import React from 'react';
import style from './ProfileInfo.module.scss';
import {ProfileUserType} from "../../../redux/store";
import preload from "../../../assets/images/Reload.svg";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {SvgSelector} from "../../../common/components/svgSelector/SvgSelector";
import userIcon from "../../../assets/images/profile.svg"
type PropsType= {
    profile: ProfileUserType| null
    status: string
    updateStatusTC: (status: string)=>void
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile ) {
        return <img src={preload} alt="загрузка"/>
        }

    return (
        <div>
            <div className={style.descriptionBlock}>
                <div className={style.imgBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : userIcon} alt="фото"/>
                </div>
                <span className={style.name}>{props.profile.fullName}</span>
                <ProfileStatus updateStatusTC={props.updateStatusTC} status={props.status}/>
            </div>
        </div>
    )
}

export default ProfileInfo;
