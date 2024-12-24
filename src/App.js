import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import SipCalculator from './components/SipCalculator';
import SwpCalculator from './components/SwpCalculator';

function App() {
  return (
    <div>
      <h2>Angelone Calculators</h2>
      <Link to='/'>Home</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sip-calculator" element={<SipCalculator />} />
        <Route path="/swp-calculator" element={<SwpCalculator />} />
      </Routes>


    </div>
  );
}

export default App;
