import React, {Component} from "react";
import '../styles/form.css'

class Form extends Component{
    constructor(props){
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
          };

          this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({first_name: document.getElementById('firstname').value})
        this.setState({last_name: document.getElementById('lastname').value})
        this.setState({phone: document.getElementById('phone').value})
        this.setState({email: document.getElementById('email').value})
      }
    
    handleSubmit = (e) => {
        e.preventDefault();
        document.querySelector('form').reset();
        console.log('first name:', this.state.first_name);
        console.log('last name:', this.state.last_name);
        console.log('phone:', this.state.phone);
        console.log('email:', this.state.email);
    }


    render(){
        return(
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' placeholder="First name..." id="firstname" value={this.state.first_name}/>
                    <input onChange={this.handleChange} type='text' placeholder="Last name..." id="lastname" value={this.state.last_name}/>
                    <input onChange={this.handleChange} type='number' placeholder="Phone..." id="phone" value={this.state.phone}/>
                    <input onChange={this.handleChange} type='text' placeholder="Email..." id="email" value={this.state.email}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default Form