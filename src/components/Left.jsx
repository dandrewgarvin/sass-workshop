import React, {Component} from 'react'

// Although this stylesheet is only imported in a single place, 
// it effects both the left and right components because of the way our CSS is compiled.
// import '../styles/Left.css'

class Left extends Component {
    render() {
        return (
            <div className="Left">
                <div className="box" />
            </div>
        )
    }
}

export default Left