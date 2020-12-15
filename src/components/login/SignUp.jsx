import React from "react";
import style from "./Login.module.css"
import bear from "../../assets/bear-face.svg"
import {connect} from "react-redux";
import {createUser, setPassword, setUsername, setEmail, startSession} from "../../redux/jogReducer";
import {Redirect} from "react-router";
import {NavLink} from "react-router-dom";
import {API} from "../../API/API";

class SignUp extends React.Component {
    componentDidMount() {
        if (localStorage.getItem('token')){
            API.endureSession().then(res => {
                if (res.data.message === 'ok'){
                    this.props.startSession()
                }
            })
        }
    }

    render() {
        if (this.props.isSession) return <Redirect to={'/events'}/>;
        return (
            <div className={style.window}>
                <img className={style.bearImg} src={bear} alt={'bear'}/>
                <input
                    className={style.textField}
                    value={this.props.loginData.username}
                    onChange={(e) => {this.props.setUsername(e.currentTarget.value)}}
                    placeholder={'Username'}
                />
                <input
                    className={style.textField}
                    value={this.props.loginData.email}
                    onChange={(e) => {this.props.setEmail(e.currentTarget.value)}}
                    placeholder={'Email'}
                />
                <input
                    className={style.textField}
                    value={this.props.loginData.password}
                    onChange={(e) => {this.props.setPassword(e.currentTarget.value)}}
                    placeholder={'Password'}
                />
                {/*<NavLink to={'/jogs'}>*/}
                <button
                    className={style.logButton}
                    onClick={this.props.createUser}
                >
                    Sign Up
                </button>
                {/*</NavLink>*/}
                <NavLink className={style.link} activeClassName={style.activeLink} to={'/login'}>I already have account</NavLink>
            </div>
        )
    };
}

let mapStateToProps = (state) => ({
    isSession: state.isSession,
    loginData: state.loginData,
});

export default connect(mapStateToProps, {
    startSession,
    createUser,
    setUsername,
    setPassword,
    setEmail
})(SignUp)