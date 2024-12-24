import '../styles/home.css'
import { Link } from 'react-router-dom';
import imgSrc from '../assets/images/images.png';

export default function Home() {

    return (
        <div className='container p-4'>
            <div className='row d-flex justify-content-start'>
                <div className='col-3 mb-4'>
                    <Link to="/sip-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund image" />
                            <div className="card-body">
                                <h5 className="card-title">SIP Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-3 mb-4'>
                    <Link to="/swp-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund image" />
                            <div className="card-body">
                                <h5 className="card-title">SWP Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-3 mb-4'>
                    <Link to="/topUp-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund image" />
                            <div className="card-body">
                                <h5 className="card-title">Top Up Calculator</h5>
                            </div>
                        </div>

                    </Link>
                </div>
                <div className='col-3 mb-4'>
                    <Link to="/lumpsum-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund image" />
                            <div className="card-body">
                                <h5 className="card-title">Lumpsum Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}