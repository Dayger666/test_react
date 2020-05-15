import React, {useEffect} from 'react';
import classes from './App.module.css';
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import LoginContainer from "./components/Login/LoginContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {setIsAuth} from "./redux/Auth-reducer";
import MainPage from "./components/MainPage/MainPage";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";


let App = (props) => {
    useEffect(() => {
        {
            localStorage.getItem('isAuth') === 'true' ? props.setIsAuth(true) : props.setIsAuth(false)
        }
    }, []);
    return (
        <div className={classes.appWrapper}>
            <HeaderContainer/>
            <div className={classes.content}>
                <Route path='/home' render={() => <MainPage/>}/>
                <Route path='/login' render={() => <LoginContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/profile' render={() => <ProfileContainer/>}/>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
    }
};
export default connect(mapStateToProps, {setIsAuth})(App);
