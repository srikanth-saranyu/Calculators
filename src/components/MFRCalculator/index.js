import { useState } from 'react';
import "../../assets/styles/sip.css"
import DoughnutChart from '../DoughnutChart'
import CalculatorInputs from '../CalculatorInputs';

export default function MFRCalculator() {

    // const [investmentAmount, setInvestmentAmount] = useState(100000);
    // const [rateOfReturn, setRateOfReturn] = useState(6.5);
    // const [investmentDuration, setInvestmentDuration] = useState(5);
    const [monthlyInvestment, setMonthlyInvestment] = useState(100000);
    const [interestRate, setInterestRate] = useState(6.5);
    const [duration, setDuration] = useState(5);

    // Calculate Lump Sum Returns
    const calculateLumpsumReturns = () => {
        const r = interestRate / 100;
        const n = duration;
        return monthlyInvestment * Math.pow(1 + r, n);
    };


    const totalValue = calculateLumpsumReturns();
    const estimatedReturns = totalValue - monthlyInvestment;

    return (
        <div className="container">
            <h3 className="custom-width">Mutual Fund Returns Calculator</h3>
            <div className="row border rounded custom-width">
                {/* <div className="col-5">
                    <h5 className="pt-4 fw-bold">Returns Estimator</h5>
                    <p className="small text-muted">Estimation is based on the past performance</p>
                    <div className="border border-2 border-primary rounded mt-4">
                        <label className="d-block text-center text-dark mb-2">Total Investment</label>
                        <div className="ms-4 d-flex justify-content-center align-items-start">
                            <span className="fs-5">₹</span>
                            <input type="text" className="form-control fs-1 bg-transparent border-0 text-dark text-start"
                                placeholder="0"
                                value={investmentAmount}
                                onChange={(e) => setInvestmentAmount(e.target.value)}
                                style={{ width: "8ch" }} />

                        </div>

                    </div>
                    <div className="w-100 mt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Expected Rate of Return</label>
                            <div className="d-flex align-items-baseline border-bottom border-2 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-5 text-dark fw-bold">{rateOfReturn}</span>
                                    <span className="fs-6 text ms-1">%</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1"
                            value={rateOfReturn}
                            onChange={(e) => setRateOfReturn(e.target.value)} />
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
                                    <span className="fs-5 text-dark fw-bold">{investmentDuration}</span>
                                    <span className="fs-6 text ms-1">Yrs</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1"
                            value={investmentDuration}
                            onChange={(e) => setInvestmentDuration(e.target.value)} />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1 Yr</p>
                            <p className="text-end text-muted">30 Yrs</p>
                        </div>
                    </div>
                </div> */}
                <CalculatorInputs
                    amountLabel="ENTER AMOUNT"
                    amountValue={monthlyInvestment}
                    onAmountChange={setMonthlyInvestment}
                    durationLabel="Select Duration"
                    durationValue={duration}
                    onDurationChange={setDuration}
                    rateLabel="Expected Rate of Return"
                    rateValue={interestRate}
                    onRateChange={setInterestRate}
                    minDuration={1}
                    maxDuration={30}
                    minRate={1}
                    maxRate={15}
                />

                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p className="text-dark">The future value of your investment after<b><span className="selected-years">&nbsp;{duration} years</span></b> will be</p>
                        <span className="amount">₹ {Math.round(totalValue).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">

                        <div className="d-flex justify-content-center align-items-center">
                            <DoughnutChart investedAmount={monthlyInvestment} estimatedReturns={estimatedReturns} />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="text-muted ms-2 mb-0">Invested Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹{monthlyInvestment.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="border-start border-5 border-returnsBlue mt-2">
                                <p className="text-muted ms-2 mb-0">Est. Returns</p>
                                <p className="fs-5 fw-semibold ms-2">₹{Math.round(estimatedReturns).toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container custom-width'>
                <h2 className="mc-desc-title">What is a Mutual Fund Returns Calculator?</h2>
                <div className="mc-desc-para">
                    <p>An online mutual funds returns calculator is a tool that helps investors estimate the potential returns on their mutual fund investments. It allows investors to input parameters such as the investment amount, investment duration, expected rate of return, and any additional contributions. The calculator then provides an estimate of the future value of the investment based on the given inputs.</p>

                </div>
                <h2 className="mc-desc-title">Mutual Fund Returns Calculator Formula</h2>

                <p>The mutual fund returns calculator formulas for finding out the future value of a lump sum investment and a Systematic Investment Plan (SIP) are as follows:</p>
                <p><strong>Lump Sum Investment:</strong></p>
                <p><strong>Lumpsum Returns = Present Value × (1 + r/100)^n</strong></p>
                <p>Where,</p>
                <ul>
                    <li>Lumpsum returns are the estimated value of the investment at the end of the investment period.</li>
                    <li>Present Value is the initial investment amount.</li>
                    <li>r is the expected rate of return per period (expressed as a percentage).</li>
                    <li>n is the number of periods (usually in years) for which the investment is held.</li>
                </ul>
                <p><strong>For Systematic Investment Plan (SIP): </strong></p>
                <p><strong>Future Value = P × [(1 + i)^n - 1] × (1 + i)/i</strong></p>
                <ul>
                    <li>Future Value is the estimated value of the investment at the end of the investment period.</li>
                    <li>P is the periodic investment amount (e.g., monthly or quarterly).</li>
                    <li>i is the periodic rate of return (expressed as a percentage) per investment period (e.g., monthly or quarterly).</li>
                    <li>n is the total number of investment periods.</li>
                </ul>
                <p>It's important to note that while online mutual funds calculators can provide helpful estimates, they are based on assumptions and historical data. The actual returns on your investments may vary due to market fluctuations and other factors. Therefore, it's important to consult with a financial advisor as well as conduct thorough research before you make any investment decisions.</p>
                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}