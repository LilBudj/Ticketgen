import React from "react";
import {withStyles} from "@material-ui/core";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const styles = (theme) => ({
    input: {
        width: '100px',
        height: '31px',
        borderRadius: '11px',
        marginLeft: '15px',
        backgroundColor: '#fff',
        fontFamily: [
            'San Frans',
            'sans-serif'
        ].join(','),
        fontSize: '13px',
        [theme.breakpoints.down('sm')]: {
            height: '28px',
            marginLeft: '6px',
        }
    }
});



const HeaderDatePicker = ({classes, ...rest}) => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
            {...rest}
            InputProps={{className: classes.input}}
        />
    </MuiPickersUtilsProvider>
);

export default withStyles(styles)(HeaderDatePicker)