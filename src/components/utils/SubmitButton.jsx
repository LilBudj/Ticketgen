import {Button, withStyles} from '@material-ui/core'

const SubmitButton = withStyles({
    root: {
        textTransform: 'none',
        padding: '6px 12px',
        color: "white",
        marginBottom: '6vh',
        fontSize: '16px',
        fontFamily: [
            'San Frans',
            'sans-serif'
        ].join(','),
    }
})(Button);

export default SubmitButton