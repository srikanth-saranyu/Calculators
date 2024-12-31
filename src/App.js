// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import SIPCalculator from './components/SIPCalculator';
import SWPCalculator from './components/SWPCalculator/index.js';
import TopUpCalculator from './components/TopUpCalculator/index.js';
import LumpsumCalculator from './components/LumpsumCalculator/index.js';
import FDCalculator from './components/FDCalculator/index.js';
import RDCalculator from './components/RDCalculator/index.js';
import NPVCalculator from './components/NPVCalculator/index.js';
import CAGRCalculator from './components/CAGRCalculator/index.js';
import MFRCalculator from './components/MFRCalculator/index.js';
import SICalculator from './components/SICalculator/index.js';
import InflationCalculator from './components/InflationCalculator/index.js';
import EMICalculator from './components/EMICalculator/index.js';

function App() {
  return (
    <div className='container'>
      <h2>Angelone Calculators</h2>
      <Link to='/'>Home</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sip-calculator" element={<SIPCalculator />} />
        <Route path="/swp-calculator" element={<SWPCalculator />} />
        <Route path="/topUp-calculator" element={< TopUpCalculator/>} />
        <Route path="/lumpsum-calculator" element={< LumpsumCalculator/>} />
        <Route path="/fd-calculator" element={< FDCalculator/>} />
        <Route path="/rd-calculator" element={< RDCalculator/>} />
        <Route path="/npv-calculator" element={< NPVCalculator/>} />
        <Route path="/cagr-calculator" element={< CAGRCalculator/>} />
        <Route path="/mfr-calculator" element={< MFRCalculator/>} />
        <Route path="/si-calculator" element={< SICalculator/>} />
        <Route path="/inflation-calculator" element={< InflationCalculator/>} />
        <Route path="/emi-calculator" element={< EMICalculator/>} />


      </Routes>


    </div>
  );
}

export default App;
