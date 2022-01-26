import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light'); // dark or not 
  const [alert,setalert] = useState(null); 

  const showAlert = (type,message)=>{
    setalert({
      type:type,
      msg:message,
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("success","Dark Mode is applied!!")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("success","Light Mode is applied!!")
    }
  }
  
  return (
    <>
    {/* <Router> */}

    <Navbar title = "TextINFO" about = "About" mode = {mode} toggleMode={toggleMode} />
    {/* <Navbar/> */}
    <Alert alert = {alert}/>
    <div className="container my-3">
    {/* <Switch> */}
      {/* <Route exact path="/about"> */}
        {/* <About /> */}
      {/* </Route> */}
      {/* <Route exact path="/"> */}
      <TextForm showAlert ={showAlert} mode = {mode}/>
      {/* </Route> */}
    {/* </Switch> */}
    </div>
    {/* </Router> */}
    
    </>
  );
}

export default App;
