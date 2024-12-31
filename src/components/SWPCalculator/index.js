import "../../assets/styles/swp.css"
import React, { useState } from "react";

export default function SWPCalculator() {

    const [principalAmount, setPrincipalAmount] = useState(500000);
    const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(10000);
    const [expectedReturns, setExpectedReturns] = useState(12);
    const [duration, setDuration] = useState(5);

    const calculateInvestmentDetails = () => {
        const r = expectedReturns / 100; // Convert annual return percentage to decimal
        const n = 12; // Monthly compounding
        const t = duration; // Duration in years
        const monthlyRate = r / n; // Monthly interest rate
        const totalPeriods = n * t; // Total periods in months

        // Present value of withdrawals
        const withdrawalPresentValue = monthlyWithdrawal * (1 - Math.pow(1 + monthlyRate, -totalPeriods)) / monthlyRate;


        const totalWithdrawal = monthlyWithdrawal * 12 * t;

        // Remaining balance after withdrawals
        const remainingBalance = principalAmount - withdrawalPresentValue;

        return {
            investedAmount: principalAmount,
            totalWithdrawal: totalWithdrawal,
            remainingBalance: remainingBalance
        };
    };

    const { investedAmount, totalWithdrawal, remainingBalance } = calculateInvestmentDetails();


    return (
        <div className="container">
            <h3 className="custom-width">SWP Calculator</h3>
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
                                value={principalAmount}
                                onChange={(e) => setPrincipalAmount(Number(e.target.value))}
                                style={{ width: "8ch" }} />

                        </div>

                    </div>
                    <div className="w-100 mt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Monthly Withdrawal</label>
                            <div className="d-flex align-items-baseline border-bottom border-2 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-5 text-dark fw-bold">₹</span>
                                    <span className="fs-6 text ms-1">{monthlyWithdrawal}</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="500" max="50000" step="1" 
                        value={monthlyWithdrawal}
                        onChange={(e) => setMonthlyWithdrawal(Number(e.target.value))}/>
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">₹ 500</p>
                            <p className="text-end text-muted">₹ 50000</p>
                        </div>
                    </div>

                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Withdrawal Period</label>
                            <div className="d-flex align-items-baseline border-bottom border-2 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-5 text-dark fw-bold">{duration}</span>
                                    <span className="fs-6 text ms-1">Yrs</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1" 
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}/>
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
                                    <span className="fs-5 text-dark fw-bold">{expectedReturns}</span>
                                    <span className="fs-6 text ms-1">%</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1"
                        value={expectedReturns}
                        onChange={(e) => setExpectedReturns(Number(e.target.value))}/>
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1 %</p>
                            <p className="text-end text-muted">30 %</p>
                        </div>
                    </div>
                </div>



                <div className="col-7 d-flex justify-content-center align-item-center border-start">
                    <div className="text-dark pt-4">
                        <p className="text-dark">Invested Amount:</p>
                        <p className="amount">₹{investedAmount.toLocaleString('en-IN')}</p>
                        <p>Total Withdrawal:</p>
                        <p className="amount">₹{totalWithdrawal.toLocaleString('en-IN')}</p>
                        <p>Final Value:</p>
                        <p className="amount">₹{Math.round(remainingBalance).toLocaleString('en-IN')}</p>
                    </div>


                </div>
            </div>
            <div className='container'>
                <h2 className="mc-desc-title">What is an SWP calculator?</h2>
                <div className="mc-desc-para">
                    <p>Systematic Withdrawal Plan (SWP) is an offering that an investor can use to make systematic withdrawals from the existing corpus created by the investor in a mutual fund scheme. SWP calculator will facilitate an investor to determine how many withdrawals can they make from the invested corpus given that it will continue to make returns on the remaining balance of the corpus after each systematic withdrawals.</p>
                </div>
                <h2 className="mc-desc-title">How does the SWP Calculator work?</h2>
                <p>Inputs required by the SWP Calculator:</p>
                <ul>
                    <li><strong>Total Corpus: </strong>The investor will need to input the current value of the investments that they hold within a mutual fund scheme.</li>
                    <li><strong>Monthly withdrawals: </strong>The investor will need to input the monthly withdrawal amount that they would like to withdraw from the total corpus each month.</li>
                    <li><strong>Withdrawal Period: </strong>The investor will need to input the number of years for which they would like to make such monthly withdrawals.</li>
                    <li><strong>Expected Rate of Return: </strong>The investor will need to input the expected rate of return from the mutual fund scheme that they are invested in.</li>
                </ul>
                <p><strong>Output:</strong></p>
                <p>The SWP calculator will consume the inputs provided by the investor and would provide the total amount that the investor would be withdrawing and the remaining corpus amount in the mutual fund scheme after making such withdrawals.</p>
                <p><strong>SWP Calculator Illustration: </strong></p>
                <p>Let's assume that an investor has Rs.10,00,000 invested in Mutual Fund scheme and would want to make a monthly withdrawal of Rs.12,000 for 10 years, with an expected rate of return of 12% p.a.</p>
                <p>The following will be the inputs for using SWP Calculator:</p>
                <ul>
                    <li><strong>Total Corpus: </strong>Rs.10,00,000</li>
                    <li><strong>Monthly withdrawals: </strong>Rs.12,000</li>
                    <li><strong>Withdrawal Period: </strong>10 years</li>
                    <li><strong>Expected Rate of Return: </strong>12% p.a.</li>
                </ul>
                <p>This will provide the investor the following outputs, which will help in determining if the investor needs to change any input in order to get the desired output:</p>
                <ul>
                    <li><strong>Total Amount withdrawn by the investor from Corpus (A): </strong>Rs.14,40,000</li>
                    <li><strong>Remaining in Corpus amount after systematic monthly withdrawals (B): </strong>Rs.442,688</li>
                </ul>
                <p>The investor may change the monthly SWP amount or withdrawal period or expected rate of return in order to attain the desired corpus that an investor wants to maintain at the end of withdrawal period.</p>
                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}