import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import quizReducer from "./quizReducer";



const rootReducer = combineReducers({
    user: userReducer,
    quizs: quizReducer

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))