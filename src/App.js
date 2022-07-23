import React, {Component} from 'react';
import Header from './components/Header';
// import './styles/reset.css'
import './styles/App.css'
import Main from './components/Main';
// import RenderCV from './components/RenderCV';
// import EducationInfo from './components/EducationInfo';


class App extends Component{
  
  render(){
    return(
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}


export default App;