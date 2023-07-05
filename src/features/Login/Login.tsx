import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

import {required} from "../../common/utils/validator/validator";
import {Input} from "../../common/components/FormControls/FormControls";
import {connect} from "react-redux";
import {login} from "../../app/auth-reducer";
import {FormDataType, LoginReduxForm} from './LoginForm';
import {AppStateType} from "../../app/redux-store";
import {Redirect} from "react-router-dom";



type LoginType = {
    isAuth: boolean
    login:  (email: string, password: string, rememberMe: boolean)=> void
}

const Login = (props: LoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)

