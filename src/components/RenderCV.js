import React, {Component} from "react";
import '../styles/rendercv.css'
// import RenderEducation from "./RenderEducation";

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
                </div>
                {this.props.educations.map((education, index) => (
                    <div key={index} className='edu-container'>
                        <div className="from-to">{education.from} - {education.to}</div>
                        <div className="edu-details">
                            <div className="uniname-city">{education.uniname}, {education.city}</div>
                            <div>{education.degree}</div>
                        </div>
                    </div>
                
                ))}

                <div>
                    <div className="subtitle">Experience</div>
                    <div className="divider"></div>
                </div>
                {this.props.experiences.map((experience, index) => (
                    <div key={index} className='exp-container'>
                        <div className="from-to">{experience.exp_from} - {experience.exp_to}</div>
                        <div className="exp-details">
                            <div className="position">{experience.position}</div>
                            <div className="company">{experience.company}<span className="city">, {experience.exp_city}</span></div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default RenderCV;