import React from "react";
import classes from './NewsBlock.module.css';

let NewsBlock = (props) => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.text}>{props.text}</div>
        </div>
    )

};
export default NewsBlock;