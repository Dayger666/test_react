import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Profile from "./Profile";




let ProfileContainer = (props) => {
    if(!props.isAuth){
        return <Redirect to={'/login'}/>
    }
    return (
        <div>
            <Profile/>
        </div>)

};
let mapStateToProps=(state)=>{
    return{
        isAuth: state.auth.isAuth,
    }
};
export default connect(mapStateToProps,{})(ProfileContainer);
