import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../../common/components/FormControls/FormControls";
import {required} from "../../../common/utils/validator/validator";
import style from './LoginForm.module.scss'
export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.loginBlock}>
            <div className={style.inputBlock}>
                <div className={style.firstInput}>
                    <Field name={'login'} type={"text"} placeholder={'Login'} component={Input}
                           validate={[required]}
                    />
                </div>
                <div>
                    <Field name={'password'} type={"password"} placeholder={'Password'} component={Input}
                           validate={[required]}
                    />
                </div>
            </div>
    <div className={style.checkBox}>
    <Field name={'rememberMe'} type={'checkbox'} component={Input}
    /> Запомнить меня
    </div>
    <div>
        <div>{props.error}</div>
    <button>
        Войти
    </button>
    </div>
    </form>
)

}


export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
