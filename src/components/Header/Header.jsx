import classes from './Header.module.css';
import React from "react";
import mainLogo from './../../assets/images/mainLogo.png'
import phoneImg from './../../assets/images/заказать звонок.png'
import {NavLink} from "react-router-dom";

let Header = (props) => {

    return (<div className={classes.header}>
        <div className={classes.nav}>
            <div className={classes.logoWrapper}>
                <NavLink to={'/home'}>
                    <img src={mainLogo} alt=""/>
                </NavLink>
            </div>
            <div className={classes.navItems}>
                <NavLink to={'/news'}>
                    <div className={classes.navItem}>Новости</div>
                </NavLink>
                <NavLink to={'/profile'}>
                    <div className={classes.navItem}>Профиль</div>
                </NavLink>
            </div>
            <div className={classes.buttonsWrapper}>
                <div className={classes.phoneImg}>
                    <img src={phoneImg} alt=""/>
                </div>
                <div className={classes.logAndOutBtn}>
                    {props.isAuth ?
                        < button onClick={()=>{props.logOutThunkCreator()}} className={classes.btn}>Выйти</button> : <NavLink to={'/login'}>
                            <button className={classes.btn}>Войти</button>
                        </NavLink>
                    }
                </div>
            </div>
        </div>
    </div>)
};

export default Header