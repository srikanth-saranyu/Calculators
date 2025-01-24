import React, { useState, useEffect } from "react";
import "../../assets/styles/sip.css"
import DoughnutChart from '../DoughnutChart'

export default function TopUpCalculator() {

    const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
    const [investmentPeriod, setInvestmentPeriod] = useState(10);
    const [annualTopUp, setAnnualTopUp] = useState(10);
    const [expectedReturn, setExpectedReturn] = useState(12);

    const [totalValue, setTotalValue] = useState(0);
    const [totalInvested, setTotalInvested] = useState(0);
    const [estimatedReturns, setEstimatedReturns] = useState(0);
    const [displayValue, setDisplayValue] = useState(formatNumber(monthlyInvestment));

    useEffect(() => {

        calculateInvestment();
        // eslint-disable-next-line
    }, [monthlyInvestment, investmentPeriod, annualTopUp, expectedReturn]);

    // Format number with commas for the Indian numbering system
    function formatNumber(value) {
        if (isNaN(value) || value === "") {
            return 0;
        }
        const formattedValue = parseFloat(value).toLocaleString("en-IN");
        return formattedValue;
    }

    // Handle the amount change in the input field
    const handleAmountChange = (e) => {
        const inputValue = e.target.value.replace(/,/g, ""); // Remove commas
        // Allow only numeric input (with an optional decimal point)
        if (/^\d*\.?\d*$/.test(inputValue)) {
            setMonthlyInvestment(inputValue); // Set the numeric value without commas
            setDisplayValue(formatNumber(inputValue)); // Set the formatted value with commas for display
        }
    };


    const calculateInvestment = () => {
        let investedAmount = 0;
        let totalValueAfterCompounding = 0;
        let monthlyInvestmentCurrent = monthlyInvestment;
        let annualInvestment = monthlyInvestment * 12;

        for (let year = 1; year <= investmentPeriod; year++) {
            investedAmount += annualInvestment;

            totalValueAfterCompounding += annualInvestment * Math.pow(1 + expectedReturn / 100, investmentPeriod - year);

            monthlyInvestmentCurrent *= (1 + annualTopUp / 100);
            annualInvestment = monthlyInvestmentCurrent * 12;
        }

        const returns = totalValueAfterCompounding - investedAmount;

        setTotalInvested(investedAmount);
        setEstimatedReturns(returns);
        setTotalValue(totalValueAfterCompounding);
    };

    return (
        <div className="container">
            <h3 className="custom-width">SIP Top Up Calculator</h3>
            <div className="row border rounded custom-width">
                <div className="col-5">
                    <h5 className="pt-4 fw-bold">Returns Estimator</h5>
                    <p className="medium text-muted">Estimation is based on the past performance</p>
                    <div className="border border-2 border-primary rounded input-field">
                        <label className="d-block text-center">MONTHLY INVESTMENT</label>
                        <div className="ms-5 d-flex justify-content-center align-items-start">
                            <span className="fs-6">₹</span>
                            <input type="text" className="input-number fs-1 bg-transparent border-0 text-dark text-start"
                                placeholder="0"
                                maxLength={10}
                                value={displayValue} // Display the formatted value
                                onChange={handleAmountChange} // Use handleAmountChange
                                style={{ width: "10ch" }} />

                        </div>

                    </div>
                    <div className="w-100 mt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Select Investment Period</label>
                            <div className="d-flex align-items-baseline border-bottom border-1 mb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-3 text-dark fw-bold">{investmentPeriod}</span>
                                    <span className="fs-6 text ms-2">Yrs</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1"
                            value={investmentPeriod}
                            onChange={(e) => setInvestmentPeriod(Number(e.target.value))} />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1 Yr</p>
                            <p className="text-end text-muted">30 Yrs</p>
                        </div>
                    </div>
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Annual Top Up</label>
                            <div className="d-flex align-items-baseline border-bottom border-1 mb-1 pb-1">
                                <p className="d-flex align-items-baseline text-center mb-0">
                                    <span className="fs-3 text-dark fw-bold">{annualTopUp}</span>
                                    <span className="fs-6 text ms-3">%</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1"
                            value={annualTopUp}
                            onChange={(e) => setAnnualTopUp(Number(e.target.value))} />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1%</p>
                            <p className="text-end text-muted">30%</p>
                        </div>
                    </div>

                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Expected Rate of Return</label>
                            <div className="d-flex align-items-baseline border-bottom border-1 mb-1 pb-1">
                                <p className="d-flex align-items-baseline text-center mb-0">
                                    <span className="fs-3 text-dark fw-bold">{expectedReturn}</span>
                                    <span className="fs-6 text ms-3">%</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1"
                            value={expectedReturn}
                            onChange={(e) => setExpectedReturn(Number(e.target.value))} />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1%</p>
                            <p className="text-end text-muted">30%</p>
                        </div>
                    </div>
                </div>


                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p className="text-dark">The total value of your investment after<b><span className="selected-years">&nbsp;{investmentPeriod} years</span></b> will be</p>
                        <span className="amount">₹ {Math.round(totalValue).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">

                        <div className="d-flex justify-content-center align-items-center">
                            <DoughnutChart investedAmount={totalInvested} estimatedReturns={estimatedReturns} />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="text-muted ms-2 mb-0">Invested Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹ {Math.round(totalInvested).toLocaleString('en-IN')}</p>
                            </div>
                            <div className="border-start border-5 border-returnsBlue mt-2">
                                <p className="text-muted ms-2 mb-0">Est. Returns</p>
                                <p className="fs-5 fw-semibold ms-2">₹ {Math.round(estimatedReturns).toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container custom-width'>
                <h2 className="mc-desc-title">What is a SIP Top Up calculator?</h2>
                <div className="mc-desc-para">
                    <p>SIP Top Up Calculator tool is useful for investors who would like to increase their investment income along with their growth in income, spending and cost of living. This tool will enable the investor to understand how they can stimulate growth in their investment income by gradually growing their SIPs on a periodic basis. The tool assumes that your expected rate of return is constant over the selected period, which may vary with your actual investments made in real time.</p>
                </div>
                <h2 className="mc-desc-title">How does SIP Top Up Calculator Work?</h2>

                <p>Inputs required by the SIP Top Up Calculator:</p>
                <ul>
                    <li><strong>Monthly SIP amount: </strong>The investor needs to input the monthly investment amount.</li>
                    <li><strong>Top Up % (Annual): </strong>The investor would have to input the percentage increase in monthly SIP that they would like to foresee every year.</li>
                    <li><strong>Investment Period: </strong>The investor needs to select the number of years for which they would like to make the monthly investments in a mutual fund scheme.</li>
                    <li><strong>Expected Rate of Return: </strong>The investor also needs to feed in the expected rate of return that one may expect on an annual basis.</li>
                </ul>
                <p><strong>Output:</strong></p>
                <p>The SIP Calculator would consume the inputs provided by the investor and would give them the estimated Future value of the systematic monthly investments (after taking into account the annual Top Up) made by the investor and the Expected return the investor may earn over and above the investments made by the investor</p>
                <p><strong>SIP Top Up Calculator Illustration: </strong></p>
                <p>Let's assume that an investor wants to invest Rs. 10,000 on a monthly basis for a period of 10 years that will give them an expected rate of return of 12% p.a.The investor would also like to increase the monthly SIP amount every year by 10%.</p>
                <p>The following will be the inputs for using SIP Top Up Calculator:</p>
                <ul>
                    <li><strong>Monthly SIP amount: </strong>Rs.10,000</li>
                    <li><strong>Annual Top Up: </strong>10%</li>
                    <li><strong>Investment Period: </strong>10 years</li>
                    <li><strong>Expected Rate of Return: </strong>12% p.a.</li>
                </ul>
                <p>This will provide the investor with the estimated Future value of investments, Monthly investments using Annual Top Ups made by investor and the expected returns earned:</p>
                <ul>
                    <li><strong>Total estimated Future value of investments (A): </strong>Rs.33,74,326</li>
                    <li><strong>Total Monthly investments made by investors (B): </strong>Rs.19,12,491</li>
                    <li><strong>Total Return earned by the investor (A - B): </strong>Rs.14,61,835</li>
                </ul>
                <p>Basis the estimated Future value of investments and Expected return, the investor may change the Monthly SIP amount or Annual Top Up or Investment Period or Expected Rate of Return in order to attain the desired Expected returns that an investor wants to achieve over the given period of time.</p>
                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}

