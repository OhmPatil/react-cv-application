import React, {Component} from "react";
import '../styles/rendercv.css'

class RenderCV extends Component{

    render(){
        return(
            <div className="cv-container">
                <div id="first-name">{this.props.firstname}</div>
            </div>
        )
    }
}

export default RenderCV;