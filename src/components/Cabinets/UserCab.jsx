import React from "react";
import style from "./Cabs.module.css"
import {connect} from "react-redux";
import {
    logOut,
    deleteAccount,
    updateUserData, fetchCards
} from "../../redux/jogReducer";
import {Redirect} from "react-router";
import {NavLink} from "react-router-dom";
import NegativeButton from "../utils/NegativeButton";
import user from '../../assets/user.svg'
import LoadButton from "../utils/LoadButton";
import Order from "./Subcomponents/Order";
import Fade from "react-reveal";
import Card from "./Subcomponents/Card";

class UserCab extends React.Component {
    componentDidMount() {
        this.props.fetchCards()
    }

    state = {
        isEditMode: false,
        userData: {
            username: this.props.accountData.username,
            email: this.props.accountData.email,
            password: this.props.accountData.password
        },
    }

    toggleEditMode = () => {
        this.setState(() => ({isEditMode: !this.state.isEditMode}))
    }
    submitUserData = () => {
        this.props.updateUserData(this.state.userData)
    }

    render() {
        const cardsArray = this.props.cards.map(c => <Card {...c}/>)
        const ticketsArray = this.props.accountData.orders.map(t => <Order {...t}/>)
        if (!this.props.isSession) return <Redirect to={'/login'}/>;
        return (
            <div className={style.cabinet}>
                <div className={style.infoSection}>
                    <div className={style.headInfo}>
                        <img className={style.avatar} src={user}/>
                        <span>{this.props.accountData.username}</span>
                    </div>
                    <div className={style.actionGroup}>
                        <NegativeButton onClick={this.props.logOut}>LOG OUT</NegativeButton>
                        <NegativeButton onClick={this.props.deleteAccount}>DELETE ACCOUNT</NegativeButton>
                        <NavLink to={'/events'}>
                        <LoadButton>Quit</LoadButton>
                        </NavLink>
                    </div>
                </div>
                <div className={style.ordersSection}>
                    {ticketsArray}
                    <NegativeButton>Cancel Orders</NegativeButton>
                </div>
                <div className={style.cardSection}>
                    {cardsArray}
                </div>
                <div className={style.editButton}>
                    <LoadButton onClick={this.toggleEditMode}>Edit your user info</LoadButton>
                </div>
                {this.state.isEditMode && <Fade top>
                    <div className={style.editSection}>
                        <div className={style.fieldsStack}>
                            <input
                                className={style.textField}
                                value={this.state.username}
                                onChange={(e) => {
                                    this.setState({...this.state,
                                        userData: {...this.state.userData, username: e.currentTarget.value}})
                                }}
                                placeholder={'Username'}
                            />
                            <input
                                className={style.textField}
                                value={this.state.email}
                                onChange={(e) => {
                                    this.setState({...this.state,
                                        userData: {...this.state.userData, email: e.currentTarget.value}})
                                }}
                                placeholder={'Email'}
                            />
                            <input
                                className={style.textField}
                                value={this.state.password}
                                onChange={(e) => {
                                    this.setState({...this.state,
                                        userData: {...this.state.userData, password: e.currentTarget.value}})
                                }}
                                placeholder={'Password'}
                            />
                            <LoadButton onClick={this.submitUserData}>Submit</LoadButton>
                        </div>
                    </div>
                </Fade>}
            </div>
        )
    };
}

let mapStateToProps = (state) => ({
    isSession: state.isSession,
    accountData: state.accountData,
    cards: state.cards
});

export default connect(mapStateToProps, {
    fetchCards,
    logOut,
    deleteAccount,
    updateUserData
})(UserCab)