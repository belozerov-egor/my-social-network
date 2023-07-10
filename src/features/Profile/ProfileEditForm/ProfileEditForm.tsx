import React, {ChangeEvent, FC} from 'react';
import style from './ProfileEditForm.module.scss'
import {ProfileDataReduxForm, ProfileUpdateForm} from "./ProfileUpdateForm/ProfileUpdateForm";
import {ProfileUserType} from "../../../redux/store";

type PropsType = {
    edit: boolean;
    updatePhoto: (photo: File)=> void
    profile: ProfileUserType | null
}
export const ProfileEditForm: FC<PropsType> = (props) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=> {
       if (e.target?.files?.length) {
           props.updatePhoto(e.target.files[0])
       }
    }

    return (
        <>
            {props.edit &&
                <div className={style.profileEditBlock}>
                    <label className={style.customFile}>
                        <input type="file" onChange={onChangeHandler}/>
                    </label>
                    <ProfileDataReduxForm profile={props.profile}/>
                </div>
            }
        </>
    );
};

