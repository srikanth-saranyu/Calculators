import "../../assets/styles/sip.css"
import SIPChart from "./chart"

export default function SIPCalculator() {
    return (
        <div className="container">
            <h3 className="custom-width">SIP Calculator</h3>
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
                                value="5,000"
                                style={{ width: "8ch" }} />

                        </div>

                    </div>
                    <div className="w-100 mt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Select Investment Period</label>
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
                            <label className="text-dark">Expected Rate of Return</label>
                            <div className="d-flex align-items-baseline border-bottom border-2 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-5 text-dark fw-bold">12</span>
                                    <span className="fs-6 text ms-1">%</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1" id="customRange3"></input>
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1 %</p>
                            <p className="text-end text-muted">30 %</p>
                        </div>
                    </div>
                </div>



                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center">
                        <p>The total value of your investment after<span className="selected-years">&nbsp;{5} years</span> will be</p>
                        <span>₹</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">

                        <div className="d-flex justify-content-center align-items-center">
                            <SIPChart />
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
                <h2 className="mc-desc-title">What is an SIP Calculator?</h2>
                <div className="mc-desc-para">
                    <p>SIP Calculator is a tool which facilitates the investor to calculate the estimated future value of the systematic monthly investments made in the mutual fund scheme. This tool assumes that your expected rate of return is constant over the selected investment period, which may vary with your actual investments made in real time.</p>
                </div>
                <h2 className="mc-desc-title">How does SIP Calculator Work?</h2>

                <p>Inputs required by the SIP Calculator:</p>
                <ul>
                    <li><strong>Monthly SIP amount: </strong>The investor needs to input the monthly investment amount.</li>
                    <li><strong>Investment Period: </strong>Frequency of the investment (n)</li>
                    <li><strong>Expected Rate of Return: </strong>The investor also needs to feed in the expected rate of return that one may expect on an annual basis.</li>
                </ul>
                <p><strong>Output:</strong></p>
                <p>The SIP Calculator would consume the inputs provided by the investor and would give them the estimated Future value of the systematic monthly investments made by the investor and the Expected return the investor may earn over and above the investments made by the investor.</p>
                <p><strong>SIP Calculator Illustration: </strong></p>
                <p>Let's assume that an investor wants to invest Rs. 10,000 on a monthly basis for a period of 10 years that will give them an expected rate of return of 12% p.a.</p>
                <p>The following will be the inputs for using SIP Calculator:</p>
                <ul>
                    <li><strong>Monthly SIP amount: </strong>Rs.10,000</li>
                    <li><strong>Investment Period: </strong>10 years</li>
                    <li><strong>Expected Rate of Return: </strong>12% p.a.</li>
                </ul>
                <p>This will provide the investor with the estimated Future value of investments, Monthly investments made by investor and the expected returns earned:</p>
                <ul>
                    <li><strong>Total estimated Future value of investments (A): </strong>Rs.23,23,391</li>
                    <li><strong>Total Monthly investments made by investors (B): </strong>Rs.12,00,000</li>
                    <li><strong>Total Return earned by the investor (A - B): </strong>Rs.11,23,391</li>
                </ul>
                <p>Basis the estimated Future value of investments and Expected return, the investor may change the Monthly SIP amount or Investment Period or Expected Rate of Return in order to attain the desired Expected returns that an investor wants to achieve over the given period of time.</p>
                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}