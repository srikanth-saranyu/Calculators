import "../../assets/styles/sip.css"
import SIChart from "./chart"

export default function SICalculator() {
    return (
        <div className="container">
            <h3 className="custom-width">Simple Interest Calculator</h3>
            <div className="row border rounded custom-width shadow">
                <div className="col-5">
                    <h5 className="pt-4 fw-bold">Returns Estimator</h5>
                    <p className="small text-muted">Estimation is based on the past performance</p>
                    <div className="border border-2 border-primary rounded mt-4">
                        <label className="d-block text-center text-dark mb-2">Principal Amount</label>
                        <div className="ms-4 d-flex justify-content-center align-items-start">
                            <span className="fs-5">₹</span>
                            <input type="text" className="form-control fs-1 bg-transparent border-0 text-dark text-start"
                                placeholder="0"
                                value="1,00,000"
                                style={{ width: "8ch" }} />

                        </div>

                    </div>
                    <div className="w-100 mt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Interest rate</label>
                            <div className="d-flex align-items-baseline border-bottom border-2 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-5 text-dark fw-bold">6.5</span>
                                    <span className="fs-6 text ms-1">%</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1" id="customRange3"></input>
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1 %</p>
                            <p className="text-end text-muted">15 %</p>
                        </div>
                    </div>
                    <div className="w-100">
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

                </div>


                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p>The total value of your investment after<span className="selected-years">&nbsp;{5} years</span> will be</p>
                        <span>₹</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">

                        <div className="d-flex justify-content-center align-items-center">
                            <SIChart />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="text-muted ms-2 mb-0">Principal Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹3,00,000</p>
                            </div>
                            <div className="border-start border-5 border-returnsBlue mt-2">
                                <p className="text-muted ms-2 mb-0">Interest</p>
                                <p className="fs-5 fw-semibold ms-2">₹1,12,432</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className="mc-desc-title">What Is a Simple Interest Calculator?</h2>
                <div className="mc-desc-para">
                    <p>Simple interest (SI) is very straightforward. It is a method of calculating returns on an investment that does not compound. Since many real-life situations use a simple interest formula, it is helpful for investors to understand the interest calculation method. One can do it manually, which consumes time and increases the chances of error. The other option is to take the help of an online simple interest calculator, which uses external inputs and returns the results accurately and quickly.</p>

                </div>
                <h2 className="mc-desc-title">How Does a Simple Interest Calculator Work?</h2>
                <p>Calculating the return you will get on your investment in advance is crucial for financial decision-making. A simple interest calculator can help you understand how much return you will receive at maturity if the investment is not compounding.</p>
                <p>The simple interest calculator on the Angel One website is a free tool available to all. Investors can use it to compute returns on specific investments and compare alternative options by entering the relevant principal amounts, interest rates, and durations. The user-friendly interface helps anyone easily use it without market knowledge or technical expertise.</p>

                <h2 className="mc-desc-title">What Is the Simple Interest Calculator Formula?</h2>
                <p>As it is clear from the name, simple interest is calculated on the principal amount only. A simple interest calculation doesn't consider the interest accrued on the principal amount.</p>
                <p>The simple interest calculator formula uses the following to determine the final amount:</p>
                <p><strong>A= P(1+rt)</strong></p>
                <span>A = total amount accumulated, including principal and interest</span><br />
                <span>P = the principal amount</span><br />
                <span>r = rate of interest</span><br />
                <span>t = time period</span>

                <p>Suppose you have invested ₹1 lakh at a simple interest rate of 5% for 3 years.</p>
                <span><strong>A = P(1 + rt)</strong></span><br />
                <span>= 1,00,000 (1 + 0.05*3)</span><br />
                <span>= 1,15,000</span>
                <p>At the end of the 3 years, your investment will be ₹1,15,000.</p>
                <p>Instead of manual calculations, you can use an online calculator. A simple interest calculator has a simple interest formula built into it. All you have to do is input the variables based on which it will do the calculation.</p>

                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}