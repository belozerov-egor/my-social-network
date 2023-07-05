import React from 'react';
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {AuthType} from "../../app/auth-reducer";
import {SvgSelector} from "../../common/components/svgSelector/SvgSelector";

type PropsType = {
    auth: AuthType,
    isAuth: boolean,
    logout: () => void
}


const Header = (props: PropsType) => {
    return <header className={s.header}>
        <div className={s.logoBlock}>
            <SvgSelector svgName={'Logo'}/>
            <span >
                Social Network
            </span>
        </div>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.auth.login}</div>

                : <NavLink to={'/login'}>
                    Login
                </NavLink>}
            {props.isAuth && <button onClick={props.logout}>LOGOUT</button>}
        </div>
    </header>
}

export default Header;
