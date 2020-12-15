import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {startSession} from "../../redux/jogReducer";
import {BrowserRouter, Route} from "react-router-dom";
import style from "../../App.module.css";
import Header from "../header/Header";
import Login from "./Login";
import SignUp from "./SignUp";
import EventsContainer from "../jogs/EventsContainer";
import CardForm from "../CardForm/CardForm";
import Info from "../about/Info";
import UserCab from "../Cabinets/UserCab";
import Admin from "../Cabinets/Admin";
import StageScene from "../jogs/stageScene";
import {API} from "../../API/API";

class InitPage extends React.Component{

    render() {
        if (this.props.isSession) return <Redirect to={'/events'}/>
        else if (this.props.isAdmin) return <Redirect to={'/admin'}/>
        else return <Redirect to={'/signup'}/>;
    }
}

let mapStateToProps = (state) => ({
    isSession: state.isSession,
    isAdmin: state.accountData.isAdmin,
});

export default connect(mapStateToProps, {
    startSession
})(InitPage)