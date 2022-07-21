import React, {Component} from "react";
// import Form from "./Form";

class EducationInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            educations: [{
                degree: '',
                uniname: '',
                city: '',
                from: '',
                to: ''
            },
            {
                degree: '',
                uniname: '',
                city: '',
                from: '',
                to: ''
            }]
        }
    }

    handleChange = (e) => {
        // this.setState({degree: e.target.value})
        console.log(this.state.educations);
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

    render(){
        return(
            <>
                {/* <div className="subtitle">Education</div>
                <input onChange={this.handleChange} type='text' placeholder="Degree..." className="form-degree"/>
                <input onChange={this.handleChange} type='text' placeholder="University name..." id="form-uniname"/>
                <input onChange={this.handleChange} type='text' placeholder="City..." id="form-city"/>
                <input onChange={this.handleChange} type='text' placeholder="From..." id="form-from"/>
                <input onChange={this.handleChange} type='text' placeholder="To..." id="form-to"/>
                <button onClick={this.displayEducationForm}>Add Education</button> */}
            {this.state.educations.map((education, index) => (
                <>
                <div className="subtitle" key={index}>Add Education</div>
                <input onChange={this.handleChange} type='text' placeholder="Degree..." className="form-degree"/>
                <input onChange={this.handleChange} type='text' placeholder="University name..." id="form-uniname"/>
                <input onChange={this.handleChange} type='text' placeholder="City..." id="form-city"/>
                <input onChange={this.handleChange} type='text' placeholder="From..." id="form-from"/>
                <input onChange={this.handleChange} type='text' placeholder="To..." id="form-to"/>
                {this.state.educations.length - 1 === index && (
                    <button onClick={this.displayEducationForm}>Add Education</button>
                )}

                {this.state.educations.length > 1 && (
                    <button onClick={this.displayEducationForm}>Delete Education</button>
                )}
                </>
                
            ))}
            </>
            
        )
    }
}

export default EducationInfo