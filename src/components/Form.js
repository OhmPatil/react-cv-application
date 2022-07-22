import React, {Component} from "react";
import '../styles/form.css'
import RenderCV from "./RenderCV";
// import EducationInfo from "./EducationInfo";
import uniqid from 'uniqid'


class Form extends Component{
    constructor(props){
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
            description: '',
          };

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
        this.setState({first_name: document.getElementById('form-firstname').value})
        this.setState({last_name: document.getElementById('form-lastname').value})
        this.setState({phone: document.getElementById('form-phone').value})
        this.setState({email: document.getElementById('form-email').value})
        this.setState({description: document.getElementById('form-description').value})
      }

      handleEducationChange = (e, index) => {
        const educationList = [...this.state.educations]
        educationList[index][e.target.name] = e.target.value
        this.setState({educations: educationList})

        console.log(this.state.educations);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        document.querySelector('form').reset();
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
        return(
            <div className="main-container">
                <form onSubmit={this.handleSubmit} className='form'>
                    <div className="subtitle">Peronal Information</div>
                    <input onChange={this.handleChange} type='text' placeholder="First name..." id="form-firstname" value={this.state.first_name}/>
                    <input onChange={this.handleChange} type='text' placeholder="Last name..." id="form-lastname" value={this.state.last_name}/>
                    <input onChange={this.handleChange} type='number' placeholder="Phone..." id="form-phone" value={this.state.phone}/>
                    <input onChange={this.handleChange} type='text' placeholder="Email..." id="form-email" value={this.state.email}/>
                    <input onChange={this.handleChange} type='textarea' placeholder="Description..." id="form-description" value={this.state.description}/>
                    <>
            {this.state.educations.map((education, index) => (
                <div className="edu-form" key={index}>
                <div className="subtitle" >Add Education</div>
                <input onChange={(e) => this.handleEducationChange(e, index)} type='text' placeholder="Degree..." className="form-degree" value={education.degree} name='degree'/>
                <input onChange={(e) => this.handleEducationChange(e, index)} type='text' placeholder="University name..." id="form-uniname" value={education.uniname} name='uniname'/>
                <input onChange={(e) => this.handleEducationChange(e, index)} type='text' placeholder="City..." id="form-city" value={education.city} name='city'/>
                <input onChange={(e) => this.handleEducationChange(e, index)} type='text' placeholder="From..." id="form-from" value={education.from} name='from'/>
                <input onChange={(e) => this.handleEducationChange(e, index)} type='text' placeholder="To..." id="form-to" value={education.to} name='to'/>
                {this.state.educations.length - 1 === index && (
                    <button onClick={this.handleAddEducation}>Add Education</button>
                )}

                {this.state.educations.length > 1 && (
                    <button onClick={() => this.handleDeleteEducation(index)}>Delete Education</button>
                )}
                </div>
                
            ))}
            </>
                </form>
                <div>
                <RenderCV firstname={this.state.first_name}
                          lastname={this.state.last_name}
                          phone={this.state.phone}
                          email={this.state.email}
                          description={this.state.description}
                          educations={this.state.educations}/>
                </div>
            </div>
        )
    }
}


export default Form