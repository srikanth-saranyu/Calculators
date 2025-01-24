import "../../assets/styles/swp.css"
import React, { useState, useEffect } from "react";
import FVChart from './chart'


export default function FVCalculator() {

    const [pv, setPv] = useState(100000);
    const [interestRate, setInterestRate] = useState(12);
    const [duration, setDuration] = useState(5);
    const [fv, setFv] = useState(0);

    // Format a number as a string with commas for thousands
    function formatNumber(value) {
        if (isNaN(value) || value === "") {
            return 0;
        }
        const formattedValue = parseFloat(value).toLocaleString("en-IN");
        return formattedValue;
    }

    // Helper function to handle only numeric input for the amount field
    const handleAmountChange = (e) => {
        const inputValue = e.target.value.replace(/,/g, ""); // Remove any commas

        // Allow only numeric input (with optional decimal point)
        if (/^\d*\.?\d*$/.test(inputValue)) {
            setPv(Number(inputValue)); // Update the actual principal value
        }
    };

    // Update Future Value when any input changes
    useEffect(() => {
        const r = interestRate / 100;
        const calculatedFV = pv * Math.pow(1 + r, duration); // FV = PV * (1 + r)^n
        setFv(calculatedFV);
    }, [pv, interestRate, duration]);


    return (
        <div className="container">
            <h3 className="custom-width">Future Value Calculator</h3>
            <div className="row border rounded custom-width">
                <div className="col-5 py-4">
                    <div className="border border-2 border-primary rounded input-field">
                        <label className="d-block text-center">Present Value</label>
                        <div className="ms-5 d-flex justify-content-center align-items-start">
                            <span className="fs-5">₹</span>
                            <input type="text" className="input-number fs-1 bg-transparent border-0 text-dark text-start"
                                placeholder="0"
                                maxLength={10}
                                value={formatNumber(pv)}
                                onChange={handleAmountChange}
                                style={{ width: "10ch" }} />
                        </div>
                    </div>

                    <div className="w-100 mt-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Interest rate</label>
                            <div className="d-flex align-items-baseline border-bottom border-1 mb-1 pb-1">
                                <p className="d-flex align-items-baseline text-center mb-0">
                                    <span className="fs-3 text-dark fw-bold">{interestRate}</span>
                                    <span className="fs-6 text ms-3">%</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(e.target.value)}
                        />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1%</p>
                            <p className="text-end text-muted">30%</p>
                        </div>
                    </div>
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Select Duration</label>
                            <div className="d-flex align-items-baseline border-bottom border-1 mb-1 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-3 text-dark fw-bold">{duration}</span>
                                    <span className="fs-6 text ms-2">Yrs</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1 Yr</p>
                            <p className="text-end text-muted">30 Yrs</p>
                        </div>
                    </div>
                </div>

                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-dark pt-4">
                        <p className="text-dark mb-0">The future value of investment will be</p>
                        <p className="amount">₹ {Math.round(fv).toLocaleString('en-IN')}</p>
                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                        < FVChart pv={pv} interestRate={interestRate} duration={duration} />
                    </div>
                </div>
            </div>

            <div className='container custom-width'>
                <h2 className="mc-desc-title">What is a Future Value Calculator?</h2>
                <div className="mc-desc-para">
                    <p>The value of an asset is not constant. It keeps changing over time for various reasons like inflation and the returns earned on it. While inflation steadily erodes the capital, the returns that you earn from it add value. Usually, returns on capital are higher than inflation, so your asset will grow over time. A future value calculator helps compute such growth.</p>
                    <p>Therefore, it is important for individuals and businesses to understand the future value of their assets. The most feasible way to do this is to use a future value calculator. India has many websites that offer such calculators; they are convenient and user-friendly..</p>
                </div>
                <h2 className="mc-desc-title">How Does Future Value Calculator Work?</h2>
                <p>Future Value Calculator is a financial tool designed to estimate the value of an investment at a specific future date, considering variables like initial investment amount, interest rate, and the duration of the investment. This tool operates based on the principle of the time value of money, which suggests that money available at the present time is worth more than the same amount in the future due to its potential earning capacity.</p>
                <p>The calculator primarily uses the formula for compound interest: <strong>FV=PV×(1+r)n</strong></p>
                <ul>
                    <li>FV is the future value of the investment.</li>
                    <li>PV is the present value or initial amount invested.</li>
                    <li>r is the annual interest rate (as a decimal).</li>
                    <li>n is the number of compounding periods.</li>
                </ul>
                <p>Users can adjust the compounding frequency (e.g., annually, semi-annually, quarterly) to see how it affects their investment's growth. By inputting different values, investors can forecast how their money will grow over time. This helps them make informed financial decisions regarding savings and investments, providing a clear understanding of potential future gains based on varying interest rates and investment periods. The Future Value Calculator is essential for anyone looking to plan their financial future effectively.</p>

                <h2 className="mc-desc-title">How to calculate Future value?</h2>
                <p>If you are that inclined, you can do the calculations manually without the help of an online calculator. The most basic step would be to calculate simple interest. You don’t need an FV calculator for that.</p>
                <span><strong>Future value = P + (P*r*t)</strong></span><br />
                <span>P = Initial value</span><br />
                <span>R= Rate of interest</span><br />
                <p>T= Number of years</p>
                <p>A more complex way would be to calculate the value of the compounded asset. In this case, the formula would be:</p>
                <span><strong>Future value = P * (1+r)t</strong></span><br />
                <span>P = Initial value</span><br />
                <span>R= Rate of interest</span><br />
                <p>T= Duration for which you want to calculate future value (in years)</p>

                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}