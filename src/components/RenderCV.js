import React, {Component} from "react";
import '../styles/rendercv.css'
import RenderEducation from "./RenderEducation";

class RenderCV extends Component{

    render(){
        return(
            <div className="cv-container">
                <div className="name">
                    <div id="first-name">{this.props.firstname}</div>
                    <div id="last-name">{this.props.lastname}</div>
                </div>
                <div className="contact-details">
                    <div id="phone">Phone: {this.props.phone}</div>
                    <div id="email">Email: {this.props.email}</div>
                </div>
                <div>
                    <div className='subtitle'>About me</div>
                    <div className="divider"></div>
                    <div id="description">{this.props.description}</div>
                </div>
                <div>
                    <div className="subtitle">Education</div>
                    <div className="divider"></div>
                    <div id="degree">{this.props.degree}</div>
                </div>
                <RenderEducation/>   
            </div>
        )
    }
}

export default RenderCV;