import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {jogReducer} from "./jogReducer";


const store = createStore(jogReducer, compose(applyMiddleware(thunkMiddleware)));

export default store