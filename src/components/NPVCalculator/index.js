import "../../assets/styles/npv.css"

export default function NPVCalculator() {
    return (
        <div className="container">
            <h3 className="custom-width">NPV Calculator</h3>
            <div className="row border rounded custom-width shadow">
                <div className="col-5">
                    <h5 className="pt-4 fw-bold">Returns Estimator</h5>
                    <p className="small text-muted">Estimation is based on the past performance</p>
                    <div className="border border-2 border-primary rounded mt-4">
                        <label className="d-block text-center text-dark mb-2">Total Investment</label>
                        <div className="ms-4 d-flex justify-content-center align-items-start">
                            <span className="fs-5">₹</span>
                            <input type="text" className="form-control fs-1 bg-transparent border-0 text-dark text-start"
                                placeholder="0"
                                value="5,00,000"
                                style={{ width: "8ch" }} />

                        </div>

                    </div>
                    <div className="w-100 mt-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Discount Rate</label>
                            <div className="d-flex align-items-baseline border-bottom border-2 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-5 text-dark fw-bold">12</span>
                                    <span className="fs-6 text ms-1">%</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1"></input>
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
                        <input type="range" className="slider" min="1" max="30" step="1" />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1 Yr</p>
                            <p className="text-end text-muted">30 Yrs</p>
                        </div>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label className="form-check-label" for="inlineRadio1">Yearly, Fixed Cash Inflows</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className="form-check-label" for="inlineRadio2">Yearly, Variable Cash Inflows</label>
                    </div>

                    <div className="w-100 mt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Amount of Fixed Cash Inflows Per Annum</label>
                            <div className="d-flex align-items-baseline border-bottom border-2 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-5 text-dark fw-bold">₹</span>
                                    <span className="fs-6 text ms-1">10000</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="500" max="50000" step="1" />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">₹ 10</p>
                            <p className="text-end text-muted">₹ 20,00,000</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="amount1" className="form-label">Year 1 Cash Flow</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="amount1" placeholder="Enter amount 1" />
                                <span className="input-group-text">₹</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="amount2" className="form-label">Year 2 Cash Flow</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="amount1" placeholder="Enter amount 1" />
                                <span className="input-group-text">₹</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="amount1" className="form-label">Year 3 Cash Flow</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="amount1" placeholder="Enter amount 1" />
                                <span className="input-group-text">₹</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="amount2" className="form-label">Year 4 Cash Flow</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="amount1" placeholder="Enter amount 1" />
                                <span className="input-group-text">₹</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label htmlFor="amount1" className="form-label">Year 5 Cash Flow</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="amount1" placeholder="Enter amount 1" />
                                <span className="input-group-text">₹</span>
                            </div>
                        </div>

                    </div>
                </div>



                <div className="col-7 d-flex justify-content-center align-item-center border-start">
                    <div className="text-dark mt-4">
                        <p>Present Value Of Cash Inflows is</p>
                        <p>₹</p>
                        <p className="pt-5">Net Present Value</p>
                        <p>₹</p>
                    </div>

                </div>
            </div>
            <div className='container'>
                <h2 className="mc-desc-title">What is an Net Present Value(NPV) calculator?</h2>
                <div className="mc-desc-para">
                    <p>The net present value (NPV) is a significant concept in the world of finance. It deals in cash flows. It involves comparing the present value of cash inflows with the present value of cash outflows over time. It is used by investors to gauge the profitability of an investment in the future. You can use NPV calculators or net present value calculators available online to do such calculations.</p>
                    <p>We use the present value of annuity calculators because the value of money changes over time. It could be higher or lower in the future, depending on the inflation rate and rate of return. If the rate of return crosses the inflation rate, the value of money will be more. If the rate of return is less than the inflation rate, the value of money will be less. The NPV evens out this value so that the present value of money can be compared to that in the future.</p>
                </div>
                <h2 className="mc-desc-title">How to use Net Present Value (NPV) Calculator?</h2>
                <p>The process involves complicated calculations, and it’s better to use a PV calculator India. But at times, it’s wise to know how it works. Here’s the formula for calculating NPV:</p>
                <p><strong>NPV = [Cn/(1+r)^n]</strong>, where n=0-N</p>
                <p>Cn is the difference between cash flows</p>
                <p>R is the discount rate. This is the rate of return – interest rate or returns on alternative investments</p>
                <p>N is the time in years</p>
                <h2 className="mc-desc-title">How to interpret NPV results?</h2>
                <p>The NPV basically indicates if earnings in the future will be more than the anticipated costs. An investment will be considered profitable if the NPV is positive. If it is negative, the costs would be more than the returns, and thus, the investment would be considered unprofitable.</p>
                <p>The present value calculator has a set of limitations. It makes assumptions about future returns and costs that may not be correct. It does not take into account the risks of investment or an escalation in project costs.</p>
                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}