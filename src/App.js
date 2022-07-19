import React, {Component} from 'react';
import Header from './components/Header';
// import './styles/reset.css'
import './styles/App.css'
import Form from './components/Form';
// import RenderCV from './components/RenderCV';
// import EducationInfo from './components/EducationInfo';


class App extends Component{
  
  render(){
    return(
      <div>
        <Header/>
        <Form/>
      </div>
    )
  }
}


export default App;