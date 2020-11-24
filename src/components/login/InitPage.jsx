import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {startSession} from "../../redux/jogReducer";


class InitPage extends React.Component{
    componentDidMount() {
        this.props.startSession()
    }
    render() {
        if (this.props.isSession) {
            return <Redirect to={'/jogs'}/>
        }
        else return <Redirect to={'/signup'}/>;
    }
}

let mapStateToProps = (state) => ({
    isSession: state.isSession
});

export default connect(mapStateToProps, {
    startSession
})(InitPage)