import React from 'react';
import style from './LoginInfo.module.scss'
import {SvgSelector} from "../../../common/components/svgSelector/SvgSelector";
export const LoginInfo = () => {
    return (
        <div className={style.loginInfoBlock}>
                    <h1>Social network</h1>
                <p >
                   Это онлайн площадка, где люди общаются, знакомятся, развлекаются.
                </p>
                <div>
                    <p>Для входа зарегистрируйтесь  <a href={'https://social-network.samuraijs.com/'}
                                                   target={'_blank'}>здесь
                    </a>
                    </p>
                    <p>Или используйте общие учетные данные тестовой учетной записи:</p>
                    <p>Email: <b>free@samuraijs.com</b></p>
                    <p>Password: <b>free</b></p>
                </div>
        </div>
    );
};

