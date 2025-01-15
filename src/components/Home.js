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
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title">SIP Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-3 mb-4'>
                    <Link to="/swp-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title">SWP Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-3 mb-4'>
                    <Link to="/topUp-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title">Top Up Calculator</h5>
                            </div>
                        </div>

                    </Link>
                </div>
                <div className='col-3 mb-4'>
                    <Link to="/lumpsum-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title">Lumpsum Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='row d-flex justify-content-start'>
                <div className='col-3 mb-4'>
                    <Link to="/fd-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title">FD Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-3 mb-4'>
                    <Link to="/rd-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title">RD Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-3 mb-4'>
                    <Link to="/npv-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title">NPV Calculator</h5>
                            </div>
                        </div>

                    </Link>
                </div>
                <div className='col-3 mb-4'>
                    <Link to="/cagr-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title">CAGR Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='row d-flex justify-content-start'>
                <div className='col-3 mb-4'>
                    <Link to="/mfr-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title">Mutual Fund Returns Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-3 mb-4'>
                    <Link to="/si-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title pb-4">Simple Interest Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-3 mb-4'>
                    <Link to="/emi-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title pb-4">EMI Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-3 mb-4'>
                    <Link to="/inflation-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title pb-4">Inflation Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='row d-flex justify-content-start'>
                <div className='col-3 mb-4'>
                    <Link to="/nps-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title">NPS Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-3 mb-4'>
                    <Link to="/epf-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title">EPF Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-3 mb-4'>
                    <Link to="/ppf-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title">PPF Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* <div className='col-3 mb-4'>
                    <Link to="/inflation-calculator">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imgSrc} class="card-img-top" alt="fund" />
                            <div className="card-body">
                                <h5 className="card-title pb-4">Inflation Calculator</h5>
                            </div>
                        </div>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}