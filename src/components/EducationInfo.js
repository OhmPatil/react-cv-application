import React, {Component} from "react";
import uniqid from 'uniqid'

class EducationInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            educations: [{
                degree: '',
                uniname: '',
                city: '',
                from: '',
                to: '',
                id: uniqid()
            }],

            education: {
                degree: '',
                uniname: '',
                city: '',
                from: '',
                to: '',
                id: uniqid()
            }
        }

    }

    handleChange = (e, index) => {
        const educationList = [...this.state.educations]
        educationList[index][e.target.name] = e.target.value
        this.setState({educations: educationList})

        console.log(this.state.educations);
    }

    handleAddEducation = () => {
        this.setState({
            educations: this.state.educations.concat(this.state.education),
            education: {
                degree: '',
                uniname: '',
                city: '',
                from: '',
                to: '',
                id: uniqid()
            }
        })
    }

    handleDeleteEducation = (index) => {
        const educationsList = [...this.state.educations]
        educationsList.splice(index, 1)
        this.setState({educations: educationsList})
    }

    render(){

        // const {educations, education} = this.state
        return(
            <>
            {this.state.educations.map((education, index) => (
                <div className="edu-form" key={index}>
                <div className="subtitle" >Add Education</div>
                <input onChange={(e) => this.handleChange(e, index)} type='text' placeholder="Degree..." className="form-degree" value={education.degree} name='degree'/>
                <input onChange={(e) => this.handleChange(e, index)} type='text' placeholder="University name..." id="form-uniname" value={education.uniname} name='uniname'/>
                <input onChange={(e) => this.handleChange(e, index)} type='text' placeholder="City..." id="form-city" value={education.city} name='city'/>
                <input onChange={(e) => this.handleChange(e, index)} type='text' placeholder="From..." id="form-from" value={education.from} name='from'/>
                <input onChange={(e) => this.handleChange(e, index)} type='text' placeholder="To..." id="form-to" value={education.to} name='to'/>
                {this.state.educations.length - 1 === index && (
                    <button onClick={this.handleAddEducation}>Add Education</button>
                )}

                {this.state.educations.length > 1 && (
                    <button onClick={() => this.handleDeleteEducation(index)}>Delete Education</button>
                )}
                </div>
                
            ))}
            </>
            
        )
    }
}

export default EducationInfo