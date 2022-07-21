import React, {Component} from "react";
// import Form from "./Form";
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

    handleChange = (e) => {
        // this.setState({degree: e.target.value})
        // console.log(this.state.educations);
        this.setState({
            education: {
                degree: e.target.value,
                uniname: e.target.value,
                city: e.target.value,
                from: e.target.value,
                to: e.target.value,
            }
        })
    }

    displayEducationForm = (e) => {
        e.preventDefault()
        let parentForm = document.querySelector('.form');
        let educationForm = document.createElement('div')
        educationForm.classList.add('form')

        let subtitle = document.createElement('div')
        subtitle.classList.add('subtitle')
        subtitle.textContent = 'Add Education'

        let degreeInput = document.createElement('input')
        degreeInput.type = 'text'        
        degreeInput.placeholder = 'Degree likho'
        degreeInput.setAttribute('id', 'form-degree')
        degreeInput.onchange = this.handleChange
        // degreeInput.addEventListener('change', this.handleChange)

        let uniInput = document.createElement('input')
        uniInput.type = 'text'
        uniInput.placeholder = ''

        educationForm.appendChild(subtitle)
        educationForm.appendChild(degreeInput)

        parentForm.appendChild(educationForm)

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
                <input onChange={this.handleChange} type='text' placeholder="Degree..." className="form-degree"/>
                <input onChange={this.handleChange} type='text' placeholder="University name..." id="form-uniname"/>
                <input onChange={this.handleChange} type='text' placeholder="City..." id="form-city"/>
                <input onChange={this.handleChange} type='text' placeholder="From..." id="form-from"/>
                <input onChange={this.handleChange} type='text' placeholder="To..." id="form-to"/>
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