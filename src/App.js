import './App.css';
import Navbar from '../src/components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title='TextUtils'/>
    <div className="container">
      <TextForm heading="Enter text to analyse" />
    </div>
    </>
  );
}

export default App;
