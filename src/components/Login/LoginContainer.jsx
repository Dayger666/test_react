import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {loginThunkCreator, setIsAuth} from "../../redux/Auth-reducer";
import Login from "./Login";



let LoginContainer = (props) => {
    const onSubmit=(formData)=>{
        props.loginThunkCreator(formData.username,formData.password);
    };
    if(props.isAuth){
        return <Redirect to={'/home'}/>
    }
    return (
        <div>
            <Login onSubmit={onSubmit} errorMsg={props.errorMsg}/>
        </div>)

};
let mapStateToProps=(state)=>{
    return{
        isAuth: state.auth.isAuth,
        errorMsg: state.auth.errorMsg,
    }
};
export default connect(mapStateToProps,{setIsAuth,loginThunkCreator})(LoginContainer);
