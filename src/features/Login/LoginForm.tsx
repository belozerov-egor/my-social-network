import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/components/FormControls/FormControls";
import {required} from "../../common/utils/validator/validator";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'login'} type={"text"} placeholder={'Login'} component={Input}
    validate={[required]}
    />
    </div>
    <div>
    <Field name={'password'} type={"password"} placeholder={'Password'} component={Input}
    validate={[required]}
    />
    </div>
    <div>
    <Field name={'rememberMe'} type={'checkbox'} component={Input}
    validate={[required]}
    /> Remember me
    </div>
    <div>
        <div>{props.error}</div>
    <button>
        Login
    </button>
    </div>
    </form>
)

}


export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
