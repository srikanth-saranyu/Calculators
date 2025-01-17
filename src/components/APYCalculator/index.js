import "../../assets/styles/swp.css"
import React, { useState, useEffect } from "react";

export default function APYCalculator() {

    const [age, setAge] = useState(25); 
    const [monthlyPension, setMonthlyPension] = useState(1000); 
    const [apy, setApy] = useState(0);
    const [finalValue, setFinalValue] = useState(0);
    const [monthlyContribution, setMonthlyContribution] = useState(0);

    const compoundingFrequency = 12;
    const investmentDuration = 60 - age; 
    const rateOfInterest = 0.08;

    const calculateAPY = (r, n) => {
        return Math.pow(1 + r / n, n) - 1;
    };

    // Function to calculate final accumulated value based on monthly contributions
  const calculateFinalValue = (monthlyContribution, rateOfInterest, compoundingFrequency, duration) => {
    const months = duration * 12; 
    const monthlyRate = rateOfInterest / 12; 
    let totalAmount = 0;

    // Compound the monthly contributions over time
    for (let month = 1; month <= months; month++) {
      totalAmount += monthlyContribution * Math.pow(1 + monthlyRate, months - month);
    }

    return totalAmount;
  };

  // Function to calculate the monthly contribution required to reach the desired pension
  const calculateMonthlyContribution = (desiredPension, rateOfInterest, duration) => {
    const months = duration * 12; 
    const monthlyRate = rateOfInterest / 12; 
    let totalContribution = 0;
    let finalAmount = 0;

    // Iteratively calculate until we reach the target amount for desired pension
    while (finalAmount < desiredPension * 12) {
      totalContribution += 1; 
      finalAmount = calculateFinalValue(totalContribution, rateOfInterest, compoundingFrequency, duration);
    }

    return totalContribution;
  };

  // Update the APY, Monthly Contribution, and Final Value whenever inputs change
  useEffect(() => {
    const calculatedAPY = calculateAPY(rateOfInterest, compoundingFrequency);
    setApy(calculatedAPY * 100); 

    // Calculate the required monthly contribution to meet the desired pension
    const requiredMonthlyContribution = calculateMonthlyContribution(monthlyPension, rateOfInterest, investmentDuration);
    setMonthlyContribution(requiredMonthlyContribution);

    // Calculate the final accumulated value of the investment
    const finalAmount = calculateFinalValue(requiredMonthlyContribution, rateOfInterest, compoundingFrequency, investmentDuration);
    setFinalValue(finalAmount); 
  }, [monthlyPension, age, investmentDuration]);


    return (
        <div className="container">
            <h3 className="custom-width">Atal Pension Yojana (APY) Calculator</h3>
            <div className="row border rounded custom-width">
                <div className="col-5">
                    <div className="w-100 mt-5 pt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Age</label>
                            <div className="d-flex align-items-baseline border-bottom border-1 mb-1 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-3 text-dark fw-bold">{age}</span>
                                    <span className="fs-6 text ms-2">Yrs</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="18" max="39" step="1"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">18 Yr</p>
                            <p className="text-end text-muted">39 Yrs</p>
                        </div>
                    </div>
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Expected Monthly Pension</label>
                            <div className="d-flex align-items-baseline border-bottom border-1 mb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-3 text-dark">₹</span>
                                    <span className="fs-3 text ms-1">{monthlyPension}</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1000" max="5000" step="1"
                            value={monthlyPension}
                            onChange={(e) => setMonthlyPension(e.target.value)}
                        />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">₹1000</p>
                            <p className="text-end text-muted">₹5000</p>
                        </div>
                    </div>
                </div>

                <div className="col-7 d-flex justify-content-center align-item-center border-start">
                    <div className="text-dark pt-4">
                        <p className="text-dark">Monthly Investment</p>
                        <p className="apy-amount">₹ {monthlyContribution.toLocaleString('en-IN')}</p>
                        <p>Investment Duration</p>
                        <p className="apy-amount">{investmentDuration} Yrs</p>
                        <p>Total Amount</p>
                        <p className="apy-amount pb-4">₹ {Math.round(finalValue).toLocaleString('en-IN')}</p>
                    </div>

                </div>
            </div>
            <div className='container custom-width'>
                <h2 className="mc-desc-title">What Is an APY Calculator?</h2>
                <div className="mc-desc-para">
                    <p>The Atal Pension Yojana (APY), introduced during the Union Budget of 2015-16, is a pension scheme for employees in the unorganised and private sectors that don’t have pension benefits. It allows subscribers to contribute a fixed monthly amount that will accumulate as a retirement corpus.</p>
                    <p>The monthly contribution amount depends on the pension amount you would like to receive upon reaching 60 years of age. You’ll become eligible to receive a fixed pension of Rs. 1,000, Rs. 2,000, Rs. 3,000, Rs. 4,000, or Rs. 5,000 (maximum) monthly. If you want to participate in the scheme, you can use an APY calculator to determine your monthly contribution to the plan.  </p>
                    <p>The Angel One APY calculator allows you to determine your monthly contribution towards APY depending on variables like your age and desired pension amount. In turn, this helps with budgeting and financial planning.</p>
                </div>
                <h2 className="mc-desc-title">How Does the APY Calculator Work?</h2>
                <p>The tool uses inputs like age and desired monthly pension to calculate the monthly contribution that you will have to make to the scheme. The online APY calculator helps estimate the following:</p>
                <ul>
                    <li>The total amount you would accumulate at 60.</li>
                    <li>The total investment period.</li>
                    <li>The monthly contribution would help you receive your desired pension.</li>
                </ul>
                <h2 className="mc-desc-title">What Is the APY Calculator Formula?</h2>
                <p>The calculator has the APY formula built in. Here’s the APY calculator formula:</p>
                <p><strong>APY = (1 + r/n)n – 1</strong></p>
                <p>Where,</p>
                <p>r represents the rate of interest</p>
                <p>n represents the frequency of compounding per year</p>
                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}