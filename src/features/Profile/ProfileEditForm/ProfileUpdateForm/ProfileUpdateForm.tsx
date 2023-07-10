import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {ProfileUserType} from "../../../../redux/store";

type ProfileDataFormPropsType = {
    profile: ProfileUserType | null
}

export const ProfileUpdateForm = (props: InjectedFormProps<ProfileUserType, ProfileDataFormPropsType> & ProfileDataFormPropsType) => {
    return (
        <form>

        </form>
    );
};

export const ProfileDataReduxForm = reduxForm<ProfileUserType, ProfileDataFormPropsType>({form: 'profileData'})(ProfileUpdateForm)
