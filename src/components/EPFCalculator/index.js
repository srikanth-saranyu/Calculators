import "../../assets/styles/sip.css"
import DoughnutChart from '../DoughnutChart'
import React, { useState, useEffect } from "react";

function formatNumber(value) {
    if (isNaN(value) || value === "") {
        return 0;
    }
    const formattedValue = parseFloat(value).toLocaleString("en-IN");
    return formattedValue;
}


export default function EPFCalculator() {

    const [basicPay, setBasicPay] = useState(100000);
    const [age, setAge] = useState(21);
    const [retirementAge, setRetirementAge] = useState(60);
    const [epfContribution, setEpfContribution] = useState(12);
    const [interestRate, setInterestRate] = useState(8.1);
    const [duration, setDuration] = useState(retirementAge - age);

    useEffect(() => {
        setDuration(retirementAge - age);
    }, [age, retirementAge]);

    const handleAmountChange = (e) => {
        const inputValue = e.target.value.replace(/,/g, ""); // Remove commas first
        // Allow only numeric input (with optional decimal point)
        if (/^\d*\.?\d*$/.test(inputValue)) {
            setBasicPay(Number(inputValue)); // Update the basicPay with the numeric value
        }
    };

    // Calculate monthly EPF contribution (Employee + Employer)
    const calculateContributions = (basicSalary) => {
        // Employee contribution: 12% of basic salary
        const employeeContribution = (basicSalary * epfContribution) / 100;

        // Employer contribution: 3.67% to EPF, 8.33% to EPS
        const employerContributionToEPF = (basicSalary * 3.67) / 100;
        const employerContributionToEPS = (basicSalary * 8.33) / 100;

        return {
            employeeContribution,
            employerContributionToEPF,
            employerContributionToEPS
        };
    };

    // EPF Interest Calculation with monthly compounding
    const calculateEPFValue = () => {
        const { employeeContribution, employerContributionToEPF } = calculateContributions(basicPay);
        const monthlyContribution = employeeContribution + employerContributionToEPF;  // Total monthly contribution
        const monthlyInterestRate = interestRate / 12 / 100;  // Monthly interest rate from the annual interest rate
        let balance = 0;
        let totalAmount = 0;

        // Calculate the total contributions over the full period
        let totalContribution = monthlyContribution * duration * 12;

        // Iterate through each month and apply the compounding interest
        for (let month = 0; month < duration * 12; month++) {
            balance += monthlyContribution;  // Add the contribution each month
            totalAmount = balance * (1 + monthlyInterestRate);  // Apply monthly interest to the balance
            balance = totalAmount;
        }

        // Calculate total interest earned as the difference between total amount and total contributions
        const interestEarned = totalAmount - totalContribution;

        return { totalAmount, totalContribution, interestEarned };
    };

    const { totalAmount, totalContribution, interestEarned } = calculateEPFValue();


    return (

        <div className="container">
            <h3 className="custom-width">EPF Calculator</h3>
            <div className="row border rounded custom-width">

                <div className="col-5">
                    <h5 className="pt-4 fw-bold">Returns Estimator</h5>
                    <p className="medium text-muted">Estimation is based on the past performance</p>
                    <div className="border border-2 border-primary rounded input-field">
                        <label className="d-block text-center">Basic Pay</label>
                        <div className="ms-5 d-flex justify-content-center align-items-start">
                            <span className="fs-6">₹</span>
                            <input type="text" className="input-number fs-1 bg-transparent border-0 text-dark text-start"
                                placeholder="0"
                                maxLength={10}
                                value={formatNumber(basicPay)}  // Display formatted number
                                onChange={handleAmountChange}  // Call handleAmountChange on change
                                style={{ width: "10ch" }} />

                        </div>

                    </div>
                    <div className="w-100 mt-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Age</label>
                            <div className="d-flex align-items-baseline border-bottom border-1 mb-1 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-3 text-dark fw-bold">{age}</span>
                                    <span className="fs-6 text ms-2">Yrs</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="15" max="30" step="1"
                            value={age}
                            onChange={(e) => setAge(Number(e.target.value))} />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">15 Yr</p>
                            <p className="text-end text-muted">30 Yrs</p>
                        </div>
                    </div>

                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Retirement Age</label>
                            <div className="d-flex align-items-baseline border-bottom border-1 mb-1 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-3 text-dark fw-bold">{retirementAge}</span>
                                    <span className="fs-6 text ms-2">Yrs</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="18" max="61" step="1"
                            value={retirementAge}
                            onChange={(e) => setRetirementAge(Number(e.target.value))} />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">18 Yr</p>
                            <p className="text-end text-muted">61 Yrs</p>
                        </div>
                    </div>
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">EPF Contribution</label>
                            <div className="d-flex align-items-baseline border-bottom border-1 mb-1 pb-1">
                                <p className="d-flex align-items-baseline text-center mb-0">
                                    <span className="fs-3 text-dark fw-bold">{epfContribution}</span>
                                    <span className="fs-6 text ms-3">%</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="12" max="20" step="1"
                            value={epfContribution}
                            onChange={(e) => setEpfContribution(Number(e.target.value))} />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">12%</p>
                            <p className="text-end text-muted">20%</p>
                        </div>
                    </div>
                    <div>
                        <p className="w-100 p-3 text-center border border-1 rounded-4">Interest Rate is 8.1%</p>
                    </div>
                </div>

                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p className="text-dark">Total Accumulation</p>
                        <span className="amount">₹ {Math.round(totalAmount).toLocaleString('en-IN')}</span>
                    </div>

                    <div className="d-flex flex-row justify-content-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <DoughnutChart investedAmount={totalContribution} estimatedReturns={interestEarned} />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="ms-2 mb-0">Total Contribution</p>
                                <p className="fs-5 fw-semibold ms-2">₹{totalContribution.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="border-start border-5 border-returnsBlue mt-2">
                                <p className="ms-2 mb-0">Interest Earned</p>
                                <p className="fs-5 fw-semibold ms-2">₹{Math.round(interestEarned).toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container custom-width'>
                <h2 className="mc-desc-title">What Is an EPF Calculator?</h2>
                <div className="mc-desc-para">
                    <p>The Employees' Provident Fund (EPF) is a savings scheme run by the Employees Provident Fund Organisation (EPFO) for retirement. This fund helps people accumulate some funds for retirement. Using an EPF calculator, you can calculate how much money you will have in your Employees' Provident Fund (EPF) account when you retire.</p>
                </div>
                <h2 className="mc-desc-title">What is the EPF Calculator Formula?</h2>
                <p>Every month the employees contribute 12% of their basic salary and Dearness Allowance (DA) to the EPF account, while the employer also contributes 12% of the employee’s basic salary (along with DA) towards the retirement savings scheme, of which, 8.33% goes to the Employee Pension Scheme (EPS) and the remaining 3.67% to the EPF.</p>
                <p>Let us consider an example to understand this better. Assume your basic salary is Rs. 25,000 and no dearness allowance, your contribution towards EPF will be 12% of Rs. 25,000, i.e., Rs. 3,000.</p>
                <p>Now your employer provides 8.33% of Rs. 25,000, i.e., Rs. 2,082.50 towards EPS and 3.67% of Rs. 25,000, i.e., Rs. 917.5 towards EPF.</p>
                <p>On the EPF account balance, the EPFO offers interest on the EPF account balance. This interest rate is annually set by the EPFO. However, the interest is calculated at the end of each month.</p>
                <p>In our instance, the EPF contribution in the first month is Rs. 3,000 + Rs. 917.5 = Rs. 3,917.5. The same amount will be contributed in the second month as well. The interest is calculated on the amount available in the account. If the interest rate is 8% per annum, the monthly interest rate is 8/12 = 0.66%. At the end of the second month, the account balance is Rs. 7,835 and the interest will be 0.66% of Rs. 7,835 = Rs. 51.71. As the amount in the account keeps increasing, the interest amount keeps rising too. The interest amount accumulated is deposited in the EPF account at the end of the year.</p>
                <p>However, instead of calculating your EPFs manually, you can use the Angel One EPF calculator and get the results in a few seconds.</p>

                <h2 className="mc-desc-title">Benefits of Online EPF Calculator</h2>
                <ul>
                    <p><li><strong>Plan your finances: </strong>As EPF calculator helps you understand how much you will accumulate by the time you retire, it will help you plan your financial life post-retirement.</li></p>
                    <p><li><strong>Quick results: </strong>EPF calculator can assist you in calculating the EPF amount quickly within a few seconds.</li></p>
                    <p><li><strong>Accurate and error-free: </strong>There can be errors in manual calculation. EPF calculator eliminates the scope for errors and gives the right results.</li></p>
                    <p><li><strong>Free to use: </strong>The EPF calculator is available for free and can be used from anywhere at any time.</li></p>
                </ul>

                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}
