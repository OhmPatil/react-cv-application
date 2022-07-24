import React, { Component } from "react";
import '../styles/footer.css'
import { FaGithub } from 'react-icons/fa'


class Footer extends Component {

    render(){
        return(
            <div id="footer">
                <p id="footer-text">Made By Ohm Patil<a href="https://github.com/OhmPatil" target='_blank' rel="noopener noreferrer"><FaGithub size='1.20rem'/></a></p>
            </div>
        )
    }
}


export default Footer