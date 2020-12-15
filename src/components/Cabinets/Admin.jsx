import React from "react";
import style from "./Cabs.module.css"
import {connect} from "react-redux";
import {
    createUser,
    setPassword,
    setUsername,
    setEmail,
    fetchUsers,
    uploadEvent,
    removeUser, removeEvent, logOut, fetchEvents
} from "../../redux/jogReducer";
import {Redirect} from "react-router";
import {NavLink} from "react-router-dom";
import NegativeButton from "../utils/NegativeButton";
import LoadButton from "../utils/LoadButton";
import admin from '../../assets/admin.svg'
import Event from "./Subcomponents/Event";
import User from "./Subcomponents/User";
import FormDatePicker from "../utils/FormDatePicker";
import Fade from "react-reveal";

class Admin extends React.Component {
    componentDidMount() {
        this.props.fetchUsers()
        this.props.fetchEvents()
    }

    state = {
        currentOperation: 'events',
        isEventCreationMode: false,
        eventData: {
            name: "",
            date: new Date(),
            type: "",
            prices: ""
        }
    }

    render() {
        const eventsArray = this.props.events.map(e => <Event removeEvent={this.props.removeEvent} {...e}/>)
        const usersArray = this.props.users.map(u => <User removeUser={this.props.removeUser} {...u}/>)
        console.log(this.props)
        if (!this.props.accountData.isAdmin) return <Redirect to={'/login'}/>;
        return (
            <div className={style.cabinet}>
                <div className={style.infoSection}>
                    <div className={style.headInfo}>
                        <img src={admin}/>
                        <span>Administrator</span>
                    </div>
                </div>
                <div className={style.adminActionGroup}>
                    <LoadButton onClick={() => this.setState({ currentOperation: 'events' })} disabled={this.state.currentOperation === 'events'}>
                        Events Operations</LoadButton>
                    <LoadButton onClick={() => this.setState({currentOperation: 'users'})} disabled={this.state.currentOperation === 'users'}>
                        Users Operations</LoadButton>
                    <LoadButton onClick={this.props.logOut}>Quit</LoadButton>
                </div>
                {(this.state.currentOperation === 'events') ? <div className={style.events}>
                    <div className={style.eventsList}>
                        {eventsArray}
                    </div>
                    <LoadButton onClick={() => this.setState({...this.state, isEventCreationMode: true})}>Create new event</LoadButton>
                        {this.state.isEventCreationMode &&
                        <Fade top>
                            <div className={style.editSection}>
                                <div className={style.fieldsStack}>
                                    <input
                                        className={style.textField}
                                        value={this.state.eventData.name}
                                        onChange={(e) => {
                                            this.setState({...this.state,
                                                eventData: {...this.state.eventData, name: e.currentTarget.value}})
                                        }}
                                        placeholder={'Event name'}
                                    />
                                    <FormDatePicker
                                        variant={'inline'}
                                        inputVariant={'outlined'}
                                        format={"dd/MM/yyyy"}
                                        value={this.state.eventData.date}
                                        onChange={(date) =>
                                            this.setState({...this.state,
                                                eventData: {...this.state.eventData, date}})
                                        }
                                    />
                                    <input
                                        className={style.textField}
                                        value={this.state.eventData.type}
                                        onChange={(e) => {
                                            this.setState({...this.state,
                                                eventData: {...this.state.eventData, type: e.currentTarget.value}})
                                        }}
                                        placeholder={'Type'}
                                    />
                                    <input
                                        className={style.textField}
                                        value={this.state.eventData.prices}
                                        onChange={(e) => {
                                            this.setState({...this.state,
                                                eventData: {...this.state.eventData, prices: e.currentTarget.value}})
                                        }}
                                        placeholder={'Prices'}
                                    />
                                    <LoadButton
                                        onClick={() => this.props.uploadEvent(this.state.eventData)}
                                    >
                                        Submit
                                    </LoadButton>
                                </div>
                            </div>
                        </Fade>}
                </div>
                    :
                <div className={style.events}>
                    <div className={style.eventsList}>
                        {usersArray}
                    </div>
                </div>}
            </div>
        )
    };
}

let mapStateToProps = (state) => ({
    isSession: state.isSession,
    accountData: state.accountData,
    events: state.events,
    users: state.users
});

export default connect(mapStateToProps, {
    fetchUsers,
    fetchEvents,
    uploadEvent,
    removeUser,
    removeEvent,
    logOut,
})(Admin)