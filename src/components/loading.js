import React from 'react' 
import '../App.css'

class Loading extends React.Component {
    render() {
        return (
            <div>
                <div className="lds-hourglass"></div>
            </div>
        )
    }
}

export default Loading