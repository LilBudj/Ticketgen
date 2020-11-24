import React from "react";
import style from "./Login.module.css"
import bear from "../../assets/bear-face.svg"
import {connect} from "react-redux";
import {createUser, setPassword, setUsername} from "../../redux/jogReducer";
import {Redirect} from "react-router";
import {NavLink} from "react-router-dom";

class SignUp extends React.Component {
    render() {
        if (this.props.isSession) return <Redirect to={'/jogs'}/>;
        return (
            <div className={style.window}>
                <img className={style.bearImg} src={bear} alt={'bear'}/>
                <input
                    className={style.textField}
                    value={this.state.username}
                    onChange={(e) => {setUsername(e.currentTarget.value)}}
                />
                <input
                    className={style.textField}
                    value={this.state.password}
                    onChange={(e) => {setPassword(e.currentTarget.value)}}
                />
                <button
                    className={style.logButton}
                    onClick={this.props.createUser}
                >
                    Sign Up
                </button>
                <NavLink to={'/login'}>I already have account</NavLink>
            </div>
        )
    };
}

let mapStateToProps = (state) => ({
    isSession: state.isSession,
    loginData: state.loginData
});

export default connect(mapStateToProps, {
    createUser,
    setUsername,
    setPassword
})(SignUp)