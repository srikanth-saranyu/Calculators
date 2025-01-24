import "../../assets/styles/swp.css"
import React, { useState } from "react";
import CIChart from './chart'

export default function CICalculator() {

    const [selectedButton, setSelectedButton] = useState("Monthly");
    const [principal, setPrincipal] = useState(10000);
    const [rate, setRate] = useState(15);
    const [duration, setDuration] = useState(5);
    const [compoundsPerYear, setCompoundsPerYear] = useState(12);

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
            setPrincipal(Number(inputValue)); // Update the actual principal value
        }
    };

    // Calculate compound interest using the formula: A = P(1 + r/n) ^ nt
    const calculateCompoundInterest = () => {
        const P = principal;
        const r = rate / 100;
        const n = compoundsPerYear;
        const t = duration;

        // Calculate total amount after compound interest
        const A = P * Math.pow(1 + r / n, n * t);
        return Math.round(A).toLocaleString('en-IN');
    };

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        // Set the number of compounds per year based on the selected interval
        if (buttonName === "Monthly") setCompoundsPerYear(12);
        else if (buttonName === "Quarterly") setCompoundsPerYear(4);
        else if (buttonName === "Yearly") setCompoundsPerYear(1);
    };

    return (
        <div className="container">
            <h3 className="custom-width">Compound Interest Calculator</h3>
            <p className="custom-width">Compound interest is a popular way for interest calculation that stands out due to its ability to magnify savings over time. The power of compounding effects results in exponential growth, allowing your money to work harder for you.</p>
            <div className="row border rounded custom-width">
                <div className="col-5 py-4">
                    <div className="border border-2 border-primary rounded input-field">
                        <label className="d-block text-center">Principal Amount</label>
                        <div className="ms-5 d-flex justify-content-center align-items-start">
                            <span className="fs-5">₹</span>
                            <input type="text" className="input-number fs-1 bg-transparent border-0 text-dark text-start"
                                placeholder="0"
                                maxLength={10}
                                value={formatNumber(principal)}  // Format the value to show commas
                                onChange={handleAmountChange}
                                style={{ width: "10ch" }} />
                        </div>
                    </div>

                    <div className="w-100 mt-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Interest rate</label>
                            <div className="d-flex align-items-baseline border-bottom border-1 mb-1 pb-1">
                                <p className="d-flex align-items-baseline text-center mb-0">
                                    <span className="fs-3 text-dark fw-bold">{rate}</span>
                                    <span className="fs-6 text ms-3">%</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1"
                            value={rate}
                            onChange={(e) => setRate(Number(e.target.value))}
                        />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1%</p>
                            <p className="text-end text-muted">50%</p>
                        </div>
                    </div>
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Duration</label>
                            <div className="d-flex align-items-baseline border-bottom border-1 mb-1 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-3 text-dark fw-bold">{duration}</span>
                                    <span className="fs-6 text ms-2">Yrs</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1"
                            value={duration}
                            onChange={(e) => setDuration(Number(e.target.value))}
                        />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1 Yr</p>
                            <p className="text-end text-muted">30 Yrs</p>
                        </div>
                    </div>

                    <h5 className="card-title mb-2">Compounding Interval</h5>
                    <p className="text-muted">Select the interval when the interest is compounded</p>

                    <div class="d-flex justify-content-center">
                        <div
                            className={`button ${selectedButton === "Monthly" ? "ci-button-selected" : "ci-button-non-selected"} d-flex col-4 align-items-center justify-content-center p-2 border bg-light rounded`}
                            onClick={() => handleButtonClick("Monthly")}
                        >
                            <span>Monthly</span>
                        </div>
                        <div
                            className={`button ${selectedButton === "Quarterly" ? "ci-button-selected" : "ci-button-non-selected"} d-flex col-4 align-items-center justify-content-center p-2 border bg-light rounded`}
                            onClick={() => handleButtonClick("Quarterly")}
                        >
                            <span>Quarterly</span>
                        </div>
                        <div
                            className={`button ${selectedButton === "Yearly" ? "ci-button-selected" : "ci-button-non-selected"} d-flex col-4 align-items-center justify-content-center p-2 border bg-light rounded`}
                            onClick={() => handleButtonClick("Yearly")}
                        >
                            <span>Yearly</span>
                        </div>
                    </div>
                </div>

                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-dark pt-4">
                        <p className="text-dark mb-0">Total Amount</p>
                        <p className="amount">₹ {calculateCompoundInterest()}</p>
                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                        < CIChart principal={principal} rate={rate} duration={duration} compoundsPerYear={compoundsPerYear} />
                    </div>
                </div>
            </div>

            <div className='container custom-width'>
                <h2 className="mc-desc-title">What is a Compound Interest Calculator?</h2>
                <div className="mc-desc-para">
                    <p>A compound interest calculator is a tool used to calculate the interest earned on a principal amount over a specified period of time, taking into account the compounding effect of reinvesting the interest earned. This calculator takes inputs such as the initial investment, the interest rate, and the compounding frequency and provides an estimate of the total amount that will be accumulated after a given period of time. It is a simple and convenient way to understand the potential growth of an investment and make informed financial decisions.</p>
                </div>
                <h2 className="mc-desc-title">What is the Compound Interest Formula?</h2>
                <p>The calculation of compound interest is done using the following compound interest formula:</p>
                <p><strong>A = P (1 + r/n) ^ nt</strong></p>
                <span>Where,</span><br />
                <span>A = Compound Interest</span><br />
                <span>p = Principal Amount</span><br />
                <span>r = Rate of interest</span><br />
                <span>n = Number of times interest compounds in a year</span><br />
                <span>t = Duration in years</span><br />

                <h2 className="mc-desc-title">How to Calculate Compound Interest?</h2>
                <p>You can use the compound interest formula to calculate compound interest. Here is an example to understand the calculation of compound interest easily.</p>
                <p>Assume you have invested ₹10,000 with an annual interest rate of 15% for 5 years, with yearly compounding frequency. The returns for the first year will be 10,000 x 15/100 = ₹1,500.</p>
                <p>For the second year, the interest will be calculated for ₹10,000 + ₹1,500 = ₹11,500. The interest will be ₹1,725 and the investment will be ₹13,325.</p>
                <p>For the third year, the interest amount will stand at ₹1,998.75 and so on. This way you need to calculate for the entire investment duration. Finally, the investment amount will be approximately ₹20,114 by the end of 5 years.</p>
                <p>Let us take the same example and use the compound interest formula</p>

                <span>A = P (1 + r/n) ^ nt,</span><br />
                <span>P = ₹10,000</span><br />
                <span>r = 15% = 0.15</span><br />
                <span>n = 1</span><br />
                <span>t=5</span><br />
                <p>A = 10,000 (1+0.15)^5 = ~₹20,113.57</p>
                <p>Obviously, it is difficult to calculate these amounts manually or even using the formula especially when you have longer tenures. It takes time and is prone to errors easily. That is why you need a compound interest calculator online in India by Angel One to make the task easier.</p>

                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}