import React, {Component} from 'react';
import Header from './components/Header';
// import './styles/reset.css'
import './styles/App.css'
import Form from './components/Form';
import RenderCV from './components/RenderCV';


class App extends Component{
  // constructor(){
  //   super();
  // }

  
  // handleChange = (e) => {
  //   e.preventDefault();
  //   let first_name = document.getElementById('firstname').value
  //   this.setState({first_name: first_name})
  //   let last_name = document.getElementById('lastname').value
  //   let phone = document.getElementById('phone').value
  //   let email = document.getElementById('email').value
  //   console.log('first name:', this.state.first_name);
  //   console.log('last name:', last_name);
  //   console.log('phone:', phone);
  //   console.log('email:', email);
  //   document.querySelector('form').reset();
  // }
  
  render(){
    return(
      <div>
        <Header/>
        <Form/>
        <RenderCV/>
      </div>
    )
  }
}


export default App;