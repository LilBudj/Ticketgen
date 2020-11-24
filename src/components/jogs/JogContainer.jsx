import React from "react";
import style from "./JogNote.module.css"
import JogNote from "./JogNote";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import HeaderDatePicker from "../utils/HeaderDatePicker";
import sad from "../../assets/nothing.svg"
import add from "../../assets/addJog.svg"
import {connect} from "react-redux";
import {displayExtraJogs, fetchJogs, setFromDate, setToDate, submitJogDelete} from "../../redux/jogReducer";
import {NavLink, Redirect} from "react-router-dom";
import LoadButton from "../utils/LoadButton";

class JogContainer extends React.Component{

    componentDidMount() {
        this.props.fetchJogs();
        if(this.props.jogsToDisplay.length < 20) {
            let jogsChunk = this.props.jogs.slice(this.props.jogs.length - 20, this.props.jogs.length);
            jogsChunk.reverse();
            this.props.displayExtraJogs(jogsChunk)
        }
    }

    loadExtraJogs = () => {
        let jogsChunk = this.props.jogs
            .slice(this.props.jogs.length - (this.props.jogsToDisplay.length + 20),
                this.props.jogs.length - this.props.jogsToDisplay.length);
        jogsChunk.reverse();
        this.props.displayExtraJogs(jogsChunk)
    };

    render() {
        let jogsArray = this.props.jogsToDisplay.map(j => {
            if (this.props.filter.isFilter) {
                if (Date.parse(this.props.filter.fromDate) < (j.date * 1000) && Date.parse(this.props.filter.toDate) > (j.date * 1000)) {
                    return <JogNote {...j} submitJogDelete={this.props.submitJogDelete} key={j.id}/>
                }
            }
            else return <JogNote {...j} submitJogDelete={this.props.submitJogDelete} key={j.id}/>
        });

        if (this.props.jogs.length && !jogsArray.length) return <Redirect to={'/login'}/>;

        return(
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
                {this.props.jogsToDisplay.length ? <div className={style.jogsContainer}>
                    {jogsArray}
                    <LoadButton
                        onClick={this.loadExtraJogs}
                    >
                        Load more jogs
                    </LoadButton>
                    <NavLink to={'/form'}><img className={style.addButton} src={add} alt={'add'}/></NavLink>
            </div>: <div className={style.emptyStack}>
                    <div className={style.emptyMessage}>
                        <img className={style.sadImage} src={sad} alt={'sad'}/>
                        <div className={style.message}>Nothing is there</div>
                    </div>
                    <button className={style.jogCreate}>
                        Create your first jog
                    </button>
                </div>}
            </MuiPickersUtilsProvider>
        )
    }
}

let mapStateToProps = (state) => ({
    jogs: state.jogs,
    jogsToDisplay: state.jogsToDisplay,
    filter: state.filter
});

export default connect(mapStateToProps, {
    fetchJogs,
    setFromDate,
    setToDate,
    displayExtraJogs,
    submitJogDelete
})(JogContainer)