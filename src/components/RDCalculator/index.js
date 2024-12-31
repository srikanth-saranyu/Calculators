import "../../assets/styles/sip.css"
import RDChart from "./chart"

export default function RDCalculator() {
    return (
        <div className="container">
            <h3 className="custom-width">RD Calculator</h3>
            <div className="row border rounded custom-width shadow">
                <div className="col-5">
                    <h5 className="pt-4 fw-bold">Returns Estimator</h5>
                    <p className="small text-muted">Estimation is based on the past performance</p>
                    <div className="border border-2 border-primary rounded mt-4">
                        <label className="d-block text-center text-dark mb-2">Monthly Investment</label>
                        <div className="ms-4 d-flex justify-content-center align-items-start">
                            <span className="fs-5">₹</span>
                            <input type="text" className="form-control fs-1 bg-transparent border-0 text-dark text-start"
                                placeholder="0"
                                value="50,000"
                                style={{ width: "8ch" }} />

                        </div>

                    </div>
                    <div className="w-100 mt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Select Duration</label>
                            <div className="d-flex align-items-baseline border-bottom border-2 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-5 text-dark fw-bold">5</span>
                                    <span className="fs-6 text ms-1">Yrs</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1" id="customRange3" />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1 Yr</p>
                            <p className="text-end text-muted">30 Yrs</p>
                        </div>
                    </div>
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Interest Rate</label>
                            <div className="d-flex align-items-baseline border-bottom border-2 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-5 text-dark fw-bold">6</span>
                                    <span className="fs-6 text ms-1">%</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="15" step="0.5" id="customRange3"></input>
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1 %</p>
                            <p className="text-end text-muted">15 %</p>
                        </div>
                    </div>
                </div>



                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p>The total value of your investment after<span className="selected-years">&nbsp;{5} years</span> will be</p>
                        <span>₹</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">

                        <div className="d-flex justify-content-center align-items-center">
                            <RDChart />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="text-muted ms-2 mb-0">Invested Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹3,00,000</p>
                            </div>
                            <div className="border-start border-5 border-returnsBlue mt-2">
                                <p className="text-muted ms-2 mb-0">Est. Returns</p>
                                <p className="fs-5 fw-semibold ms-2">₹1,12,432</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className="mc-desc-title">What is an RD Calculator?</h2>
                <div className="mc-desc-para">
                    <p>An RD calculator is a valuable financial tool on Angel One designed to help individuals calculate their investment growth in RDs. This online calculator takes basic yet crucial factors such as the investment amount, duration, and interest rate into consideration. And in less than a minute, it displays the future value of the investment.</p>
                </div>
                <h2 className="mc-desc-title">How does RD Calculator Work?</h2>

                <p>Inputs required by the RD Calculator:</p>
                <ul>
                    <li><strong>Monthly Investment: </strong>Enter your monthly investment amount.</li>
                    <li><strong>The duration of the investment: </strong>Enter the duration of the investment.</li>
                    <li><strong>Interest Rate: </strong>Enter the interest rate on the RD.</li>
                </ul>
                <p><strong>Output:</strong></p>
                <p>The recurring deposit calculator will automatically show you the future value of your investment at the end of the duration. It will also break the value down into the total interest earned and the total invested amount.</p>
                <p><strong>RD Calculator Illustration: </strong></p>
                <p>Let's assume you are planning to buy a car in the next 5 years and want to invest ₹15,000 monthly in an RD of 5% interest rate. </p>
                <p>The following will be the inputs for using RD Calculator:</p>
                <ul>
                    <li><strong>Monthly Investment: </strong>Rs.15,000</li>
                    <li><strong>Investment duration: </strong>5 years</li>
                    <li><strong>Interest Rate: </strong>5%</li>
                </ul>
                <p>The recurring deposit calculator will automatically show you the future value of your investment at the end of the duration.</p>
                <ul>
                    <li><strong>Total estimated Future value of investments (A): </strong>Rs.10,23,783</li>
                    <li><strong>Total investments made by investors (B): </strong>Rs.9,00,000</li>
                    <li><strong>Interest Rate earned by the investor (A - B): </strong>Rs.1,23,783</li>
                </ul>
                <p>It is important to note that TDS (Tax Deducted at Source) is applicable on RD if the interest earned is more than ₹40,000 for individuals and ₹50,000 for senior citizens. And investors with no taxable income can submit Form 15G to avoid TDS on their RDs.</p>
                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>
        </div>
    )
}