import "../../assets/styles/sip.css"
import EMIChart from "./chart"

export default function EMICalculator() {
    return (
        <div className="container">
            <h3 className="custom-width">EMI Calculator</h3>
            <div className="row border rounded custom-width shadow">
                <div className="col-5">
                    <h5 className="pt-4 fw-bold">Returns Estimator</h5>
                    <p className="small text-muted">Estimation is based on the past performance</p>
                    <div className="border border-2 border-primary rounded mt-4">
                        <label className="d-block text-center text-dark mb-2">Loan Amount</label>
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
                                    <span className="fs-5 text-dark fw-bold">6</span>
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
                            <label className="text-dark">Loan Duration</label>
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
                        <p>EMI</p>
                        <span>₹</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">

                        <div className="d-flex justify-content-center align-items-center">
                            <EMIChart />
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
                            <div className="border-start border-5 border-returnsgrey mt-2">
                                <p className="text-muted ms-2 mb-0">Total Payable</p>
                                <p className="fs-5 fw-semibold ms-2">₹1,12,432</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className="mc-desc-title">What Is an EMI Calculator?</h2>
                <p>An EMI calculator helps you calculate EMI amount for any loan, such as a home loan, car loan, personal loan, education loan, etc. online for free. It takes the entered values and computes the EMI amount in seconds. The online EMI calculator can also show you a break-up of total payment into principal and interest components. It also helps you compare different loan options and plan your monthly budget accordingly.</p>

                <h2 className="mc-desc-title">How Does an EMI Calculator Work?</h2>
                <p>The online EMI calculator is simple to use. It just considers the basic details of a loan and provides the EMI amount. It considers the loan amount, rate of interest and duration of the loan. Once these details are entered into the calculator, it displays the EMI of the loan along with a detailed breakdown of the principal amount, interest amount and total payable on the loan.</p>

                <h2 className="mc-desc-title">EMI Calculator Formula</h2>
                <p>Here's the formula to calculate EMI:</p>
                <p><strong>E = [P x R x (1+R) ^N] / [(1+R) ^ (N-1)]</strong></p>
                <p>Where,</p>
                <span>E = EMI</span><br />
                <span>P = Principal Amount</span><br />
                <span>R = Rate of interest. This is calculated on a monthly basis. If the interest rate is 4% per annum then R will be 4/12/100 = 0.0033.</span><br />
                <p>N = Duration in months</p>

                <p>By using an EMI calculator, you can easily estimate how much you'll need to pay each month, making it easier to decide on the right loan amount and repayment term that fits your financial situation.</p>
                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}