import React from 'react';
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../reducers/userReducer";

const Header = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();
    return (
        <div className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container d-flex">
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/api/quiz">Result</NavLink>
                </div>
                {!isAuth && <div>
                    <NavLink to="/login">Log In </NavLink>
                    <NavLink to="/reg"> Registration</NavLink>
                </div>}
                {isAuth && <div onClick={()=> dispatch(logOut())}><a href="/">Log OUT</a>
                </div>}

            </div>
        </div>

    );
};
export default Header;