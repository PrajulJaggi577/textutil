import './App.css';
import Navbar from '../src/components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'


function App() {

  const [mode,setMode] = useState('light');
  
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
    } else {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
    <div className="container">
      <TextForm heading="Enter text down here" mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
