import React, {Component} from "react";
import '../styles/main.css'
import RenderCV from "./RenderCV";
import uniqid from 'uniqid';
import ReactToPrint from 'react-to-print'


class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
            description: '',
            location: '',
            dob: '',

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
            },

            experiences: [{
                position: '',
                company: '',
                exp_city: '',
                exp_from: '',
                exp_to: '',
                id: uniqid()
            }],

            experience: {
                position: '',
                company: '',
                exp_city: '',
                exp_from: '',
                exp_to: '',
                id: uniqid()
          }

        }

    }

    handlePersonalInfoChange = () => {
        this.setState({first_name: document.getElementById('form-firstname').value})
        this.setState({last_name: document.getElementById('form-lastname').value})
        this.setState({phone: document.getElementById('form-phone').value})
        this.setState({email: document.getElementById('form-email').value})
        this.setState({location: document.getElementById('form-location').value})
        this.setState({dob: document.getElementById('form-dob').value})
        this.setState({description: document.getElementById('form-description').value})
    }

    handleEducationChange = (e, index) => {
        const educationList = [...this.state.educations]
        educationList[index][e.target.name] = e.target.value
        this.setState({educations: educationList})

        console.log(this.state.educations);
    }

    handleExperienceChange = (e, index) => {
        const experienceList = [...this.state.experiences]
        experienceList[index][e.target.name] = e.target.value
        this.setState({experiences: experienceList})
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
            },
        }
        )
    }

    handleAddExperience = () => {
        this.setState({
            experiences: this.state.experiences.concat(this.state.experience),
            experience: {
                position: '',
                company: '',
                exp_city: '',
                exp_from: '',
                exp_to: '',
                id: uniqid()
            }
        })
    }

    handleDeleteEducation = (e, index) => {
        e.preventDefault()
        const educationsList = [...this.state.educations]
        educationsList.splice(index, 1)
        this.setState({educations: educationsList})
    }

    handleDeleteExperience = (e, index) => {
        e.preventDefault()
        const experienceList = [...this.state.experiences]
        experienceList.splice(index, 1)
        this.setState({experiences: experienceList})
    }

    handleFormReset = (e) => {
        e.preventDefault()
        window.location.reload()
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
    }

    loadExample = (e) => {
        e.preventDefault()
        this.setState({
            first_name: 'Eddie',
            last_name: 'Munson',
            phone: '+91 1234567890',
            email: 'eddiemunson@example.com',
            dob: '30 Feb 1969',
            location: 'Hawkins, Indiana',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',

            educations: [{
                degree: 'BTech, Computer Science',
                uniname: 'Indian Institute Of Technology',
                city: 'Kota',
                from: '2016',
                to: '2020',
                id: uniqid()
            },
            {
                degree: 'MTech, Computer Networking',
                uniname: 'University of Technology',
                city: 'New York',
                from: '2020',
                to: '2022',
                id: uniqid()
            }],

            experiences: [{
                position: 'Junior Web Developer',
                company: 'Netflix',
                exp_city: 'Paris',
                exp_from: '2022',
                exp_to: '2024',
                id: uniqid()
            }, 
            {
                position: 'Senior Web Developer',
                company: 'Microsoft',
                exp_city: 'Rotterdam',
                exp_from: '2024',
                exp_to: 'present',
                id: uniqid()
            }]
        })
    }

    render(){
        return(
            <div className="main-container">
                <form className='form' onSubmit={(e) => this.handleFormSubmit(e)} action=''>
                    <div className="subtitle">Personal Information</div>
                    <input onChange={(e) => this.handlePersonalInfoChange(e)} type='text' placeholder="First name" id="form-firstname" value={this.state.first_name} name='first_name'/>
                    <input onChange={(e) => this.handlePersonalInfoChange(e)} type='text' placeholder="Last name" id="form-lastname" value={this.state.last_name} name='last_name'/>
                    <input onChange={(e) => this.handlePersonalInfoChange(e)} type='text' placeholder="Phone" id="form-phone" value={this.state.phone} name='phone'/>
                    <input onChange={(e) => this.handlePersonalInfoChange(e)} type='text' placeholder="Email" id="form-email" value={this.state.email} name='email'/>
                    <input onChange={(e) => this.handlePersonalInfoChange(e)} type='text' placeholder="Location / Address" id="form-location" value={this.state.location} name='location'/>
                    <input onChange={(e) => this.handlePersonalInfoChange(e)} type='text' placeholder="Date Of Birth" id="form-dob" value={this.state.dob} name='dob'/>
                    <input onChange={(e) => this.handlePersonalInfoChange(e)} type='textarea' placeholder="About (optional)" id="form-description" value={this.state.description} name='description'/>
            <>
            <div className="subtitle" >Add Education</div>
            {this.state.educations.map((education, index) => (
                <div className="edu-form" key={education.id}>
                    <input onChange={(e) => this.handleEducationChange(e, index)} type='text' placeholder="Degree / Qualification" className="form-edu-degree" value={education.degree} name='degree'/>
                    <input onChange={(e) => this.handleEducationChange(e, index)} type='text' placeholder="University / School name" id="form-edu-uniname" value={education.uniname} name='uniname'/>
                    <input onChange={(e) => this.handleEducationChange(e, index)} type='text' placeholder="City" id="form-edu-city" value={education.city} name='city'/>
                    <input onChange={(e) => this.handleEducationChange(e, index)} type='text' placeholder="From" id="form-edu-from" value={education.from} name='from'/>
                    <input onChange={(e) => this.handleEducationChange(e, index)} type='text' placeholder="To" id="form-edu-to" value={education.to} name='to'/>
                    {this.state.educations.length > 1 && (
                        <button onClick={(e) => this.handleDeleteEducation(e, index)}>Delete Education</button>
                    )}
                    {this.state.educations.length - 1 === index && (
                        <button onClick={this.handleAddEducation}>Add Education</button>
                    )}
                </div>
            ))}
            </>
            <div className="subtitle">Add Experience</div>
            {this.state.experiences.map((experience, index) => (
                <div className="exp-form" key={experience.id}>
                    <input onChange={(e) => this.handleExperienceChange(e, index)} type='text' placeholder="Position" className="form-exp-position" value={experience.position} name='position'/>
                    <input onChange={(e) => this.handleExperienceChange(e, index)} type='text' placeholder="Company" className="form-exp-company" value={experience.company} name='company'/>
                    <input onChange={(e) => this.handleExperienceChange(e, index)} type='text' placeholder="City" className="form-exp-city" value={experience.exp_city} name='exp_city'/>
                    <input onChange={(e) => this.handleExperienceChange(e, index)} type='text' placeholder="From" className="form-exp-from" value={experience.exp_from} name='exp_from'/>
                    <input onChange={(e) => this.handleExperienceChange(e, index)} type='text' placeholder="To" className="form-exp-to" value={experience.exp_to} name='exp_to'/>
                    {this.state.experiences.length > 1 && (
                        <button onClick={(e) => this.handleDeleteExperience(e, index)}>Delete Experience</button>
                    )}
                    {this.state.experiences.length - 1 === index && (
                        <button onClick={this.handleAddExperience}>Add Experience</button>
                    )}
                </div>
            ))}
                <button id="example-button" onClick={(e) => this.loadExample(e)}>Load Example</button>
                <ReactToPrint
                    trigger={() => {
                        return <button id="print-button" >Print / Save as PDF</button>
                    }}
                    content={() => this.componentRef}
                    pageStyle='print'
                    documentTitle="myCV"
                />
                <button id="reset-button" onClick={(e) => this.handleFormReset(e)}>Reset</button>
                </form>

                <div ref={el => (this.componentRef=el)}>
                <RenderCV firstname={this.state.first_name}
                          lastname={this.state.last_name}
                          phone={this.state.phone}
                          email={this.state.email}
                          location={this.state.location}
                          dob={this.state.dob}
                          description={this.state.description}
                          educations={this.state.educations}
                          experiences={this.state.experiences}/>
                </div>
            </div>
        )
    }
}


export default Main