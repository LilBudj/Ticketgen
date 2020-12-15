import React from "react";
import style from './Error.module.css'
import LoadButton from "../LoadButton";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {discardError} from "../../../redux/jogReducer";

const ErrorPage = (props) => {
    return(
        <div className={style.page}>
            <div className={style.mainStack}>
                <span className={style.heading}>Oops!</span>
                <span className={style.subheading}>You have encountered unexpected network error</span>
                <span className={style.subheading}>Please, sign in anew</span>
                <NavLink to={'/login'}>
                    <LoadButton onClick={props.discardError}>Go to login page</LoadButton>
                </NavLink>
            </div>
        </div>
    )
}

export default connect(null, {
    discardError
})(ErrorPage)