import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import {SvgSelector} from "../../common/components/svgSelector/SvgSelector";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <SvgSelector svgName={"Profile"}/>
                <NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <SvgSelector svgName={"Dialogs"}/>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <SvgSelector svgName={"UsersNav"}/>
                <NavLink to="/users" activeClassName={s.activeLink}>Пользователи</NavLink>
            </div>
            <div className={s.item}>
                <SvgSelector svgName={"Settings"}/>
                <a>Настройки</a>
            </div>
        </nav>
    )
}

export default Navbar;
