import React, {Component} from "react";
import '../styles/form.css'
import RenderCV from "./RenderCV";
import EducationInfo from "./EducationInfo";

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

        //   this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({first_name: document.getElementById('form-firstname').value})
        this.setState({last_name: document.getElementById('form-lastname').value})
        this.setState({phone: document.getElementById('form-phone').value})
        this.setState({email: document.getElementById('form-email').value})
        this.setState({description: document.getElementById('form-description').value})
      }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('first name:', this.state.first_name);
        console.log('last name:', this.state.last_name);
        console.log('phone:', this.state.phone);
        console.log('email:', this.state.email);
        document.querySelector('form').reset();
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

                <EducationInfo/> 
                </form>
                <div>
                <RenderCV firstname={this.state.first_name}
                          lastname={this.state.last_name}
                          phone={this.state.phone}
                          email={this.state.email}
                          description={this.state.description}/>
                </div>
            </div>
        )
    }
}


export default Form