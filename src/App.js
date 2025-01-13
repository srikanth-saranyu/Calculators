// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom'
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
import NPSCalculator from './components/NPSCalculator/index.js';


const nameConverstion = (str) => {
  let result = str.replace(/^\/+/, '');
  // Step 2: Replace hyphens with spaces
  result = result.replace(/-/g, ' ');

  // Step 3: Capitalize the first letter of each word
  result = result
    .split(' ') // Split into an array of words
    .map((word, index) => index === 0 ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join the words back into a string 
  return result;
}

function App() {

  const location = useLocation();
  return (
    <div className='container'>
      <h2>Angelone Calculators</h2>
      <nav
        style={{
          "--bs-breadcrumb-divider": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`,
        }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Calculators
          </li>
          {nameConverstion(location.pathname) !== "" && <li className="breadcrumb-item active" aria-current="page">
            {nameConverstion(location.pathname)}
          </li>}

        </ol>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sip-calculator" element={<SIPCalculator />} />
        <Route path="/swp-calculator" element={<SWPCalculator />} />
        <Route path="/topUp-calculator" element={< TopUpCalculator />} />
        <Route path="/lumpsum-calculator" element={< LumpsumCalculator />} />
        <Route path="/fd-calculator" element={< FDCalculator />} />
        <Route path="/rd-calculator" element={< RDCalculator />} />
        <Route path="/npv-calculator" element={< NPVCalculator />} />
        <Route path="/cagr-calculator" element={< CAGRCalculator />} />
        <Route path="/mfr-calculator" element={< MFRCalculator />} />
        <Route path="/si-calculator" element={< SICalculator />} />
        <Route path="/inflation-calculator" element={< InflationCalculator />} />
        <Route path="/emi-calculator" element={< EMICalculator />} />
        <Route path="/nps-calculator" element={< NPSCalculator />} />


      </Routes>


    </div>
  );
}

export default App;
