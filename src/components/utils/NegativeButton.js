import {Button, withStyles} from '@material-ui/core'

const LoadButton = withStyles({
    root: {
        textTransform: 'none',
        padding: '8px 16px',
        backgroundColor: '#ff3333',
        color: '#222',
        fontSize: '18px',
        fontFamily: [
            'San Frans',
            'sans-serif'
        ].join(','),
    }
})(Button);

export default LoadButton