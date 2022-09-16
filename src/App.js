import './App.css';
import Navbar from '../src/components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark Mode has been enabled","success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },2000)

  }
  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter text down here" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
