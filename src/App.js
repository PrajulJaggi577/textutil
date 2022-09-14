import './App.css';
import Navbar from '../src/components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title='TextUtil'/>
    <div className="container">
      <TextForm heading="Enter text down here" />
    </div>
    </>
  );
}

export default App;
