import '../styles/home.css'
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div>
            <h4></h4>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <Link to="/sip-calculator" className="card-link">
                        <h5 className="card-title">SIP Calculator</h5>
                        <p className="card-text">Make informed investment decisions with our SIP calculator.Estimate your potential returns when investing systematically over time, helping you plan for your finantial goals.</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}