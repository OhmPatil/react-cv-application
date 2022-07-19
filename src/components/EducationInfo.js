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

    render(){
        return(
            <div className="form">
                <div className="subtitle">Education</div>
                <input onChange={this.handleChange} type='text' placeholder="Degree..." id="form-degree"/>
                <button type="submit">Submit</button>
            </div>
            
        )
    }
}

export default EducationInfo