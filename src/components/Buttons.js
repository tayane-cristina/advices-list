import React from "react";
import "../App.css"

class Buttons extends React.Component{
    render(){
        const { saveAdvice, newAdvice } = this.props
        return(
            <div className='buttons'>
                <button type='button' onClick={saveAdvice}>Save Advice</button>
                <button type='button' onClick={newAdvice}>New Advice</button>
            </div>
        )
    }
}
export default Buttons