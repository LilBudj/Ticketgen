import React from "react"
import ReactDOM from "react-dom"

class Portal extends React.Component {

    render() {
        return ReactDOM.createPortal(
            this.props.children, document.getElementById('app-root')
        )
    }
}

export default Portal