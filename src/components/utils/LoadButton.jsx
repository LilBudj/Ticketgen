import {Button, withStyles} from '@material-ui/core'

const LoadButton = withStyles({
    root: {
        textTransform: 'none',
        padding: '6px 12px',
        marginBottom: '6vh',
        backgroundColor: '#4444dd',
        color: '#eee',
        fontSize: '16px',
        fontFamily: [
            'San Frans',
            'sans-serif'
        ].join(','),
    }
})(Button);

export default LoadButton