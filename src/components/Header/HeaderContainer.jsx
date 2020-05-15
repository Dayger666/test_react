import React from 'react';
import {connect} from "react-redux";
import {logOutThunkCreator} from "../../redux/Auth-reducer";
import Header from "./Header";



let HeaderContainer = (props) => {

    return <Header isAuth={props.isAuth} logOutThunkCreator={props.logOutThunkCreator}/>

};
let mapStateToProps=(state)=>{
    return{
        isAuth: state.auth.isAuth,
    }
};
export default connect(mapStateToProps,{logOutThunkCreator})(HeaderContainer);
