import {logIn} from "../utils/authService";

const SET_IS_AUTH='SET-IS-AUTH';
const SET_ERROR_MSG='SET_ERROR-MSG';
let initialState={
    isAuth:false,
    errorMsg:'',
};
const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_IS_AUTH:
            return {
                ...state,
                ...action.data,
            };
        case SET_ERROR_MSG:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }

};
export let setIsAuth=(isAuth)=>{
    return {
        type:SET_IS_AUTH,
        data: {
            isAuth,
        }
    }
};
export let setErrorMsg=(errorMsg)=>{
    return {
        type:SET_ERROR_MSG,
        data: {
            errorMsg,
        }
    }
};
export let loginThunkCreator=(username,password)=>{
    return (dispatch)=>{
        logIn(username,password).then((res)=>{
            dispatch(setErrorMsg(''));
            localStorage.setItem('isAuth', 'true');
            dispatch(setIsAuth(true));
        }).catch((err)=>{dispatch(setErrorMsg(err.message))})
    }
};
export let logOutThunkCreator=()=>{
    return (dispatch)=>{
        localStorage.setItem('isAuth', 'false');
        dispatch(setIsAuth(false));
    }
};


export default authReducer;