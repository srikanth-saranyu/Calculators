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

export default function PPFCalculator() {

    const [investmentAmount, setInvestmentAmount] = useState(100000);
    // const [interestRate, setInterestRate] = useState(0); // Rate of interest
    const [investmentPeriod, setInvestmentPeriod] = useState(15);
    const [maturityAmount, setMaturityAmount] = useState(0);

    const interestRate = 7.1
    // Function to calculate PPF maturity amount using the formula
    const calculateMaturityAmount = () => {
        const i = interestRate / 100;
        const n = investmentPeriod;
        const P = investmentAmount;

        // Apply the PPF formula: F = P * [((1 + i) ^ n - 1) / i]
        const futureValue = P * (((Math.pow(1 + i, n) - 1) / i));
        setMaturityAmount(futureValue);
    };

    // Effect hook to calculate maturity amount when inputs change
    useEffect(() => {
        if (investmentAmount > 0 && interestRate > 0 && investmentPeriod > 0) {
            calculateMaturityAmount();
        }
    }, [investmentAmount, interestRate, investmentPeriod]);

    // Handle amount input change with number formatting
    const handleAmountChange = (e) => {
        const inputValue = e.target.value.replace(/,/g, "");
        // Allow only numeric input (with optional decimal point)
        if (/^\d*\.?\d*$/.test(inputValue)) {
            setInvestmentAmount(Number(inputValue));
        }
    };

    return (

        <div className="container">
            <h3 className="custom-width">PPF Calculator</h3>
            <p className="custom-width">The online Public Provident Fund (PPF) calculator helps individuals plan their long-term savings and investments by providing insights into potential returns and maturity amounts.</p>
            <div className="row border rounded custom-width">

                <div className="col-5">
                    <h5 className="pt-4 fw-bold">Returns Estimator</h5>
                    <p className="medium text-muted">Estimation is based on the past performance</p>
                    <div className="border border-2 border-primary rounded input-field">
                        <label className="d-block text-center">Total Investment(Yearly)</label>
                        <div className="ms-5 d-flex justify-content-center align-items-start">
                            <span className="fs-6">₹</span>
                            <input type="text" className="input-number fs-1 bg-transparent border-0 text-dark text-start"
                                placeholder="0"
                                maxLength={10}
                                value={formatNumber(investmentAmount)}
                                onChange={handleAmountChange}
                                style={{ width: "10ch" }} />
                        </div>

                    </div>
                    <div className="w-100 mt-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Interest rate</label>
                            <div className="d-flex align-items-baseline mb-1 pb-1">
                                <p className="disabled-input align-items-baseline mb-0 p-2 border border-0">
                                    <span className="fs-3 text-dark fw-bold">7.1</span>
                                    <span>%</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-100 pt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Select Duration</label>
                            <div className="d-flex align-items-baseline border-bottom border-1 mb-1 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-3 text-dark fw-bold">{investmentPeriod}</span>
                                    <span className="fs-6 text ms-2">Yrs</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="18" max="61" step="1"
                            value={investmentPeriod}
                            onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                        />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">15 Yr</p>
                            <p className="text-end text-muted">30 Yrs</p>
                        </div>
                    </div>

                </div>


                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p className="text-dark">Maturity Amount</p>
                        <span className="amount">₹ {Math.round(maturityAmount).toLocaleString('en-IN')}</span>
                    </div>

                    <div className="d-flex flex-row justify-content-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <DoughnutChart investedAmount={investmentAmount * investmentPeriod} estimatedReturns={maturityAmount - (investmentAmount * investmentPeriod)} />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="ms-2 mb-0">Invested Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹{(investmentAmount * investmentPeriod).toLocaleString('en-IN')}</p>
                            </div>
                            <div className="border-start border-5 border-returnsBlue mt-2">
                                <p className="ms-2 mb-0">Est. Returns</p>
                                <p className="fs-5 fw-semibold ms-2">₹{Math.round(maturityAmount - (investmentAmount * investmentPeriod)).toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container custom-width'>
                <h2 className="mc-desc-title">What Is a PPF Calculator?</h2>
                <div className="mc-desc-para">
                    <p>A PPF calculator is an online financial tool that allows you to determine the value of your investment in PPF at maturity and returns. It simplifies the difficult computations linked with the Public Provident Funds account, allowing you to evaluate the long-term growth of your investment amount. The main advantage offered by online calculators is accuracy, which often goes amiss in the case of manual calculations. Additionally, these digital calculations are not time intensive, contrary to manual calculations.</p>
                    <p>The online PPF calculator by Angel One is among these robust online calculators that allow you to compare various investing possibilities. By modifying these variables, you may analyse how changes in parameters such as the yearly investment and time duration will affect your maturity amount and interest received.</p>
                    <p>This enables you to optimise your investments to achieve your financial goals.</p>
                </div>
                <h2 className="mc-desc-title">How Does a PPF Calculator Work?</h2>

                <p>A PPF calculator computes the growth of your contributions in a PPF account using a preset compound interest formula. It takes into account your yearly deposit amount, fixed rate of return, and investment tenure. The PPF calculator offers an estimation of the amount you will receive at the end of the investment tenure.</p>
                <h2 className="mc-desc-title">What Is the PPF Calculator Formula?</h2>
                <p>The formula used to calculate PPF is below:</p>
                <p><strong>{`F = P [({(1+i) ^n}-1)/i]`}</strong></p>
                <span>Where,</span><br />
                <span>i is the rate of interest</span><br />
                <span>F is the maturity amount of PPF</span><br />
                <span>N is the number of years</span><br />
                <p>P is the amount invested annually</p>

                <p>Let us consider an example to calculate the PPF investment manually. Suppose starting April 2022 you are investing ₹50,000 for the wedding expenses of your child in a PPF account with an annual interest rate of 7.1% for 15 years.</p>


                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}
