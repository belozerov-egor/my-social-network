import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {ProfileUserType} from "../../../../redux/store";
import {Input, Textarea} from "../../../../common/components/FormControls/FormControls";

type ProfileDataFormPropsType = {
    profile: ProfileUserType | null
    initialValues: ProfileUserType
}

export const ProfileUpdateForm = (props: InjectedFormProps<ProfileUserType, ProfileDataFormPropsType> & ProfileDataFormPropsType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>Обновить профиль</button>
            </div>
            <div >
                <h3>Полное имя:</h3>
                <Field
                    name={'fullName'}
                    placeholder={'Полное имя'}
                    component={Input}
                    type={'text'}
                    validate={[]}
                />
            </div>
            <div >
                <h3>Обо мне:</h3>
                <Field
                    name={'aboutMe'}
                    placeholder={'Обо мне'}
                    component={Input}
                    type={'text'}
                    validate={[]}
                />
            </div>
            <div >
                <h3 >В поисках работы:</h3>
                <Field
                    name={'lookingForAJob'}
                    component={Input}
                    text={'I am looking for a job'}
                    type={'checkbox'}
                    validate={[]}
                    hello={'hello text'}
                />
                <Field
                    name={'lookingForAJobDescription'}
                    placeholder={'My professional skills'}
                    component={Textarea}
                    type={'text'}
                    validate={[]}
                />
            </div>
            {props.profile && Object.keys(props.profile.contacts).map((key, index) => {
                return <div key={index} >
                    <h3 >{key}:</h3>
                    <Field
                        name={'contacts.' + key}
                        placeholder={key}
                        component={Input}
                        type={'text'}
                        validate={[]}
                    />
                </div>
            })}
        </form>
    );
};

export const ProfileDataReduxForm = reduxForm<ProfileUserType, ProfileDataFormPropsType>({form: 'profileData'})(ProfileUpdateForm)
