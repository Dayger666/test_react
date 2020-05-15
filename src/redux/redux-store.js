import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./Auth-reducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware  from "redux-thunk";

let reducers=combineReducers({
    auth:authReducer,
    form:formReducer,
});
let store=createStore(reducers,applyMiddleware(thunkMiddleware));



export default store;