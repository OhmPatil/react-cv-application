import React, {Component} from "react";
import '../styles/form.css'

class Form extends Component{

    render(){
        return(
            <div className="form-container">
                <form onSubmit={this.props.handleSubmit}>
                    <input type='text' placeholder="First name..." id="firstname"/>
                    <input type='text' placeholder="Last name..." id="lastname"/>
                    <input type='number' placeholder="Phone..." id="phone"/>
                    <input type='text' placeholder="Email..." id="email"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default Form