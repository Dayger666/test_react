import React from "react";
import MainBLock from "./MainBlock/MainBlock";
import classes from './MainPage.module.css';

let MainPage = (props) => {

    return (
        <div className={classes.wrapper}>
            <MainBLock/>
        </div>
    )

};
export default MainPage;