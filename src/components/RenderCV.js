import React, {Component} from "react";
import '../styles/rendercv.css'

class RenderCV extends Component{

    render(){
        return(
            <div className="cv-container">
                <div id="first-name">{this.props.firstname}</div>
                <div id="last-name">{this.props.lastname}</div>
                <div id="phone">{this.props.phone}</div>
                <div id="email">{this.props.email}</div>
            </div>
        )
    }
}

export default RenderCV;