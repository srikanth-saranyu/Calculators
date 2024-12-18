import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import SipCalculator from './components/SipCalculator';

function App() {
  return (
    <div>
      <h2>Angelone Calculators</h2>
      <Link to='/'>Home</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sip-calculator" element={<SipCalculator />} />
      </Routes>


    </div>
  );
}

export default App;
