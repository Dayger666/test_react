import React from "react";
import {Field, reduxForm} from "redux-form";
import classes from './Login.module.css';

let Login = (props) => {
    return (
        <div className={classes.wrapper}>
        <div className={classes.LoginForm}>
            <form className={classes.form} onSubmit={props.handleSubmit((values) => {
                props.reset();
                props.onSubmit(values);
            })}>
                <h3>Log In</h3>
                <div>
                    <Field className={classes.field} placeholder='Username' name={'username'} component={'input'}/>
                </div>
                <div>
                    <Field className={classes.field} placeholder='Password' name={'password'} component={'input'}
                           type={'password'}/>
                </div>
                <div>
                    <button className={classes.sendBtn}>
                        Login
                    </button>
                </div>

            </form>
            <div className={classes.alert} hidden={props.errorMsg===''}>
                {props.errorMsg}
            </div>
        </div>
        </div>)
};

let LoginReduxForm = reduxForm({
    form: 'login'
})(Login);
export default LoginReduxForm;