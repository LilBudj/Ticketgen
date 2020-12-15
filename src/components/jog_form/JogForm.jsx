import React from "react";
import style from "./JogForm.module.css"
import FormDatePicker from "../utils/FormDatePicker";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import close from "../../assets/close.svg"

class JogForm extends React.Component{
    componentDidMount() {
        if (this.props.fixed){
            this.setState({
                distance: this.props.distance,
                time: this.props.time,
                date: new Date(+this.props.date * 1000)
            })
        }
    }

    state = {
        distance: '',
        time: '',
        date: new Date()
    };

    submitJog = () => {
        if (!!this.props.fixed){
            this.props.setEditMode(false);
            this.props.setAnchor(null);
            this.props.updateJog({
                ...this.state,
                date: Date.parse(this.state.date)/1000,
                id: this.props.id,
                user_id: this.props.user_id
            })
        }
        else this.props.submitNewJog(this.state)
    };

    handleCancel = () => {
        if (!!this.props.fixed){
            this.props.setEditMode(false);
            this.props.setAnchor(null)
        }
    };

    render() {
        return(
            <div style={this.props.fixed ? {position: "fixed", top: "30vh"} : {}} className={style.window}>
                <div className={style.closeContainer}>
                <NavLink to={'/jogs'}>
                    <img
                    onClick={this.handleCancel}
                    src={close}
                    style={{color: 'white'}}
                    alt={'close'}
                />
                </NavLink>
                </div>
                <div className={style.fieldStack}>
                    <div className={style.inputField}>
                        <span>Distance:</span>
                        <input
                            className={style.jogInput}
                            value={this.state.distance}
                            onChange={(e) => this.setState({...this.state, distance: e.currentTarget.value})}
                        />
                    </div>
                    <div className={style.inputField}>
                        <span>Time:</span>
                        <input
                            className={style.jogInput}
                            value={this.state.time}
                            onChange={(e) => this.setState({...this.state, time: e.currentTarget.value})}
                        />
                    </div>
                    <div className={style.inputField}>
                        <span>Date:</span>
                        <FormDatePicker
                            variant={'inline'}
                            inputVariant={'outlined'}
                            format={"dd/MM/yyyy"}
                            value={this.state.date}
                            onChange={(date) => this.setState({...this.state, date})}
                        />
                    </div>
                </div>
                <NavLink to={'/jogs'}>
                    <button
                        className={style.jogSubmit}
                        onClick={this.submitJog}
                    >Save
                    </button>
                </NavLink>
            </div>
        )
    }
}

export default connect(null, {
})(JogForm)