import React from "react";
import style from "./JogNote.module.css"
import JogNote from "./JogNote";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import HeaderDatePicker from "../utils/HeaderDatePicker";
import sad from "../../assets/nothing.svg"
import add from "../../assets/addJog.svg"
import {connect} from "react-redux";
import {fetchEvents, setFromDate, setToDate} from "../../redux/jogReducer";
import {NavLink, Redirect} from "react-router-dom";
import LoadButton from "../utils/LoadButton";

class EventsContainer extends React.Component{
    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        let eventsArray = this.props.events.map(j => {
            if (this.props.filter.isFilter) {
                if (Date.parse(this.props.filter.fromDate) < (Date.parse(j.startDate)) && Date.parse(this.props.filter.toDate) > (Date.parse(j.startDate))) {
                    return <JogNote {...j} submitJogDelete={this.props.submitJogDelete} key={j.id}/>
                }
            }
            else return <JogNote {...j} submitJogDelete={this.props.submitJogDelete} key={j.id}/>
        });

        if (!this.props.isSession) return <Redirect to={'/login'}/>
        else return(
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {this.props.filter.isFilter && <div className={style.postHeader}>
                    <div className={style.dateContainer}>
                        <span>Date from</span>
                        <HeaderDatePicker
                            variant={'inline'}
                            inputVariant={'outlined'}
                            format={"MM/dd/yyyy"}
                            value={this.props.filter.fromDate}
                            onChange={(date) => this.props.setFromDate(date)}
                        />
                    </div>
                    <div className={style.dateContainer}>
                        <span>Date to</span>
                        <HeaderDatePicker
                            variant={'inline'}
                            inputVariant={'outlined'}
                            format={"MM/dd/yyyy"}
                            value={this.props.filter.toDate}
                            onChange={(date) => this.props.setToDate(date)}
                        />
                    </div>
                </div>}
                {this.props.events.length ? <div className={style.jogsContainer}>
                    {eventsArray}
            </div>: <div className={style.emptyStack}>
                    <div className={style.emptyMessage}>
                        <img className={style.sadImage} src={sad} alt={'sad'}/>
                        <div className={style.message}>Nothing is there</div>
                    </div>
                </div>}
            </MuiPickersUtilsProvider>
        )
    }
}

let mapStateToProps = (state) => ({
    events: state.events,
    filter: state.filter,
    isSession: state.isSession
});

export default connect(mapStateToProps, {
    fetchEvents,
    setFromDate,
    setToDate,
})(EventsContainer)