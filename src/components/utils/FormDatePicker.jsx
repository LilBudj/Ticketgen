import React from "react";
import {createStyles, withStyles} from "@material-ui/core";
import {DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const styles = (theme) => ({
    input: {
        boxShadow: '0 0 5px #555',
        width: '232px',
        height: '31px',
        backgroundColor: '#fff',
        fontWeight: 700,
        fontFamily: [
            'San Frans',
            'sans-serif'
        ].join(','),
        fontSize: '14px',
        [theme.breakpoints.down('sm')]: {
            height: '24px',
            width: '101px'
        }
    }
});



const FormDatePicker = ({classes, ...rest}) => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
            {...rest}
            InputProps={{className: classes.input}}
        />
    </MuiPickersUtilsProvider>
);

export default withStyles(styles)(FormDatePicker)