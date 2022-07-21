import React, {Component} from "react";
// import Form from "./Form";

class EducationInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            degree: '',
        }
    }

    handleChange = (e) => {
        this.setState({degree: document.getElementById('form-degree').value})
    }

    displayEducationForm = () => {
        let parentForm = document.querySelector('.form');
        let educationForm = document.createElement('div')
        educationForm.classList.add('form')
        let subtitle = document.createElement('div')
        subtitle.classList.add('subtitle')
        subtitle.textContent = 'Add Education'

        let degreeInput = document.createElement('input')
        degreeInput.type = 'text'        
        degreeInput.placeholder = 'Degree likho'

        educationForm.appendChild(subtitle)
        educationForm.appendChild(degreeInput)

        parentForm.appendChild(educationForm)

    }

    render(){
        return(
            <>
                <div className="subtitle">Education</div>
                <input onChange={this.handleChange} type='text' placeholder="Degree..." id="form-degree"/>
                <button onClick={this.displayEducationForm}>Add Education</button>
            </>
            
        )
    }
}

export default EducationInfo