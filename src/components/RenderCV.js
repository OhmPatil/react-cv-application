import React, {Component} from "react";
import '../styles/rendercv.css'


class RenderCV extends Component{

    render(){
        return(
            <div className="cv-container">
                <div className="name">
                    <div id="first-name">{this.props.firstname}</div>
                    <div id="last-name">{this.props.lastname}</div>
                </div>
                <div className="contact-details">
                    {this.props.phone && (<div id="phone">Phone: {this.props.phone}</div>)}
                    {this.props.email && (<div id="email">Email: {this.props.email}</div>)}
                </div>

                {this.props.description && (
                <div>
                    <div className='cv-subtitle'>About me</div>
                    <div className="divider"></div>
                    <div id="description">{this.props.description}</div>
                </div>
                )}
                <div>
                    <div className="cv-subtitle">Education</div>
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
                    <div className="cv-subtitle">Experience</div>
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