import "../../assets/styles/sip.css"
import CAGRChart from "./chart"

export default function CAGRCalculator() {
    return (
        <div className="container">
            <h3 className="custom-width">CAGR Calculator</h3>
            <div className="row border rounded custom-width shadow">
                <div className="col-5">
                    <h5 className="pt-4 fw-bold">Returns Estimator</h5>
                    <p className="small text-muted">Estimation is based on the past performance</p>
                    <div className="border border-2 border-primary rounded mt-4">
                        <label className="d-block text-center text-dark mb-2">Initial Investment</label>
                        <div className="ms-4 d-flex justify-content-center align-items-start">
                            <span className="fs-5">₹</span>
                            <input type="text" className="form-control fs-1 bg-transparent border-0 text-dark text-start"
                                placeholder="0"
                                value="10,000"
                                style={{ width: "8ch" }} />

                        </div>

                    </div>
                    <div className="border border-2 border-primary rounded mt-4">
                        <label className="d-block text-center text-dark mb-2">Final Value Cost</label>
                        <div className="ms-4 d-flex justify-content-center align-items-start">
                            <span className="fs-5">₹</span>
                            <input type="text" className="form-control fs-1 bg-transparent border-0 text-dark text-start"
                                placeholder="0"
                                value="25,000"
                                style={{ width: "8ch" }} />

                        </div>

                    </div>
                    <div className="w-100 mt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Duration of Investment</label>
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

                </div>



                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p>CAGR(%)</p>
                        <span>%</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">

                        <div className="d-flex justify-content-center align-items-center">
                            <CAGRChart />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="text-muted ms-2 mb-0">Initial Value Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹10,000</p>
                            </div>
                            <div className="border-start border-5 border-returnsBlue mt-2">
                                <p className="text-muted ms-2 mb-0">Final Value</p>
                                <p className="fs-5 fw-semibold ms-2">₹25,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className="mc-desc-title">What is a CAGR Calculator?</h2>
                <div className="mc-desc-para">
                    <p>As an investor, you have to make smart decisions about your money. A CAGR calculator can help you achieve that goal. The CAGR calculator is a free calculation tool available online on the Angel One website.</p>
                    <p>Using the CAGR calculator, you can:</p>
                    <ol>
                        <li>Calculate the CAGR of any investment, provided you already know the initial value, the current value, and the duration of the investment.</li>
                        <li>Know the CAGR, which will help you determine how fast and efficiently your investments are growing with time.</li>
                        <li>Knowing the rate of growth helps you evaluate which investment options are performing better compared to others.</li>
                    </ol>
                </div>
                <h2 className="mc-desc-title">How Does the CAGR Calculator Work?</h2>
                <p>A CAGR calculator is a free online calculator available on the Angel One website. It helps you calculate the compound annual growth rate of any investment. You just have to enter the values of the initial investment, the current value of the investment and the time taken by the investment to reach its current value. The compound annual growth rate calculator will show you the CAGR that was required to reach that level of absolute returns. The calculator is able to do so based on the compound annual growth rate formula that is working on the backend of the calculator.</p>
                <h2 className="mc-desc-title">How to Calculate CAGR?</h2>
                <p>The following is the CAGR formula that is used to calculate the CAGR of an investment or any other metric that can grow over the years:</p>
                <p>CAGR = [(End Value/Start Value)^(1/n) – 1]*100</p>
                <p>Where,</p>
                <p>n = Number of years</p>
                <p>Suppose you bought some shares of a company at the beginning of 2018 at ₹10,000, held it for 5 years, and the current value of those shares in 2023, i.e. after 5 years, is ₹15,000. In that case,</p>

                <span>Start Value = ₹10,000</span><br />
                <span>n = 5</span><br />
                <span>End Value = ₹15,000</span><br />
                <span>CAGR = [15,000/10,000]^(⅕) -1 = 0.845</span><br />
                <p>So the CAGR on your investment after 5 years would be 0.845 or 8.45 %.</p>

                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}