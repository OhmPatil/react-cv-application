import React, {Component} from 'react';
import Header from './components/Header';
// import './styles/reset.css'
import './styles/App.css'
import Form from './components/Form';


class App extends Component{

  handleChange = (e) => {
    e.preventDefault();
    let first_name = document.getElementById('firstname').value
    let last_name = document.getElementById('lastname').value
    let phone = document.getElementById('phone').value
    let email = document.getElementById('email').value
    console.log('first name:', first_name);
    console.log('last name:', last_name);
    console.log('phone:', phone);
    console.log('email:', email);
    document.querySelector('form').reset();
  }
  
  render(){
    return(
      <div>
        <Header/>
        <Form handleSubmit={this.handleChange}/>
      </div>
    )
  }
}


export default App;