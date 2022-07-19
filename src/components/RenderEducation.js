import React, {Component} from "react";
// import EducationInfo from "./EducationInfo";

class RenderEducation extends Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div>
                {this.props.degree}
            </div>
        )
    }
}

export default RenderEducation