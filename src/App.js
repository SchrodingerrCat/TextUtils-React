import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
// import About from './components/About';
import { useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  const[mode,setMode] = useState('dark')
  const[alert,setAlert] = useState(null) ;

  const showAlert = (message, type)=> {

    setAlert({
      msg: message ,
      type: type
    })

    setTimeout(() => {
      setAlert(null) ;
    }, 1500);

  }

  const toggleMode = ()=>{

    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3b4045' ;
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#e0dede' ;
      showAlert("Light Mode has been enabled","success") ;
    }

  }

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode= {mode} toggleMode = {toggleMode} ></Navbar>
      <Alert alert = {alert} />
      <div className='container my-3'>
      {/* <Routes> */}
            {/* <Route path="/about" element={<About />}> */}
            {/* </Route> */}
            {/* <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}> */}
            {/* </Route> */}
      {/* </Routes> */}
      <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
