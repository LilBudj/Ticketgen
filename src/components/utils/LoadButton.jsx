import {Button, withStyles} from '@material-ui/core'

const LoadButton = withStyles({
    root: {
        textTransform: 'none',
        padding: '6px 12px',
        marginBottom: '6vh',
        backgroundColor: '#e990f9',
        color: '#fff',
        fontSize: '16px',
        fontFamily: [
            'San Frans',
            'sans-serif'
        ].join(','),
    }
})(Button);

export default LoadButton