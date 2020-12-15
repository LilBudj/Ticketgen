import React from "react";
import style from "./Login.module.css"
import bear from "../../assets/bear-face.svg"
import {connect} from "react-redux";
import {logInUser, setPassword, setUsername, setSecret, setAdmin, discardLoginError} from "../../redux/jogReducer";
import {Redirect} from "react-router";
import {NavLink} from "react-router-dom";
import ErrorModal from "../utils/CardModal/ErrorModal";

class Login extends React.Component {

    render() {
        if (this.props.isSession) return <Redirect to={'/events'}/>;
        else if (this.props.isAuthorizationError) return <Redirect to={'/error'}/>
        else if (this.props.accountData.isAdmin) return <Redirect to={'/admin'}/>
        return (
            <>
                {this.props.isLoginError && <ErrorModal setModal={this.props.discardLoginError}/>}
                {!this.props.loginData.isAdmin ?
                    <div className={style.window}>
                        <img className={style.bearImg} src={bear} alt={'bear'}/>
                        <input
                            className={style.textField}
                            value={this.props.loginData.username}
                            onChange={(e) => {
                                this.props.setUsername(e.currentTarget.value)
                            }}
                            placeholder={'Username'}
                        />
                        <input
                            className={style.textField}
                            value={this.props.loginData.password}
                            onChange={(e) => {
                                this.props.setPassword(e.currentTarget.value)
                            }}
                            placeholder={'Password'}
                        />
                        <button
                            className={style.logButton}
                            onClick={this.props.logInUser}
                        >
                            Let me in
                        </button>
                        <span className={style.link} onClick={() => this.props.setAdmin(true)}>Admin
                            Access</span>
                    </div>
                    :
                    <div className={style.window}>
                        <img className={style.bearImg} src={bear} alt={'bear'}/>
                        <input
                            className={style.textField}
                            value={this.props.loginData.secretAdminUUID}
                            onChange={(e) => {
                                this.props.setSecret(e.currentTarget.value)
                            }}
                            placeholder={'secret uuid'}
                        />
                        <button
                            className={style.logButton}
                            onClick={this.props.logInUser}
                        >
                            Submit UUID
                        </button>
                    </div>
                }
                </>
        )
    };
}

let mapStateToProps = (state) => ({
    isSession: state.isSession,
    loginData: state.loginData,
    accountData: state.accountData,
    isAuthorizationError: state.isAuthorizationError,
    isLoginError: state.isLoginError
});

export default connect(mapStateToProps, {
    logInUser,
    setUsername,
    setPassword,
    setSecret,
    setAdmin,
    discardLoginError
})(Login)