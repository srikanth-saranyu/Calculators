// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import SIPCalculator from './components/SIPCalculator';
import SWPCalculator from './components/SWPCalculator/index.js';
import TopUpCalculator from './components/TopUpCalculator/index.js';


function App() {
  return (
    <div className='container'>
      <h2>Angelone Calculators</h2>
      <Link to='/'>Home</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sip-calculator" element={<SIPCalculator />} />
        <Route path="/swp-calculator" element={<SWPCalculator />} />
        <Route path="/topup-calculator" element={< TopUpCalculator/>} />
      </Routes>


    </div>
  );
}

export default App;
