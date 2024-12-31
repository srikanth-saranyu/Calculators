import "../../assets/styles/sip.css"
import LumpsumChart from "./chart"

export default function LumpsumCalculator() {
    return (
        <div className="container">
            <h3 className="custom-width">Lumpsum Calculator</h3>
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
                    <div className="text-center mt-4">
                        <p>The total value of your investment after<span className="selected-years">&nbsp;{5} years</span> will be</p>
                        <span>₹</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">

                        <div className="d-flex justify-content-center align-items-center">
                            <LumpsumChart />
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
                <h2 className="mc-desc-title">What Is Lumpsum Investment?</h2>
                <div className="mc-desc-para">
                    <p>It is a one-time investment that allows you to put your money in a mutual fund, allowing it to grow and compound over time. A lumpsum investment is one of the best ways to maximise your potential returns in a mutual fund and secure your financial future.</p>
                </div>
                <h2 className="mc-desc-title">How does Lumpsum Calculator Work?</h2>

                <p>Inputs required by the Lumpsum Calculator:</p>
                <ul>
                    <li>Your initial investment</li>
                    <li>The expected rate of return</li>
                    <li>The duration of the investment</li>
                </ul>
                <p>The online calculator considers these factors and uses the lumpsum calculator formula to estimate your potential returns on mutual funds.</p>
                <p><strong>Lumpsum Calculator Illustration: </strong></p>
                <p>Let's assume that an investor wants to invest Rs. 2,50,000 on a monthly basis for a period of 5 years that will give them an expected rate of return of 13% p.a.</p>
                <p>The following will be the inputs for using Lumpsum Calculator:</p>
                <ul>
                    <li><strong>Investment amount: </strong>Rs.2,50,000</li>
                    <li><strong>Investment duration: </strong>5 years</li>
                    <li><strong>Expected Rate of Return: </strong>13% p.a.</li>
                </ul>
                <p>This will provide the investor with the estimated Future value of investments, Monthly investments made by investor and the expected returns earned:</p>
                <ul>
                    <li><strong>Total estimated Future value of investments (A): </strong>Rs.4,60,609</li>
                    <li><strong>Total Monthly investments made by investors (B): </strong>Rs.2,50,000</li>
                    <li><strong>Total Return earned by the investor (A - B): </strong>Rs.2,10,609</li>
                </ul>
                <p>Basis the estimated Future value of investments and Expected return, the investor may change the Monthly Lumpsum amount or Investment Period or Expected Rate of Return in order to attain the desired Expected returns that an investor wants to achieve over the given period of time.</p>
                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}