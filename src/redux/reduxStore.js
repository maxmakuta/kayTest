import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import homeReducer from "./homeReducer";



let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
homePage: homeReducer,
    auth: authReducer,
    form: formReducer
});
let store = createStore (redusers, applyMiddleware(thunkMiddleware));

window.store=store;
export default store;

