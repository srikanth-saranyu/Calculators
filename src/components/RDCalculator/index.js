import React, { useState, useEffect } from "react";
import "../../assets/styles/sip.css"
import DoughnutChart from '../DoughnutChart'
import CalculatorInputs from "../CalculatorInputs";

export default function RDCalculator() {
    const initialInvestment = 50000;
    const [monthlyInvestment, setMonthlyInvestment] = useState(50000);
    const [duration, setDuration] = useState(5);
    const [interestRate, setInterestRate] = useState(6);

    const [maturityValue, setMaturityValue] = useState(0);
    const [investedAmount, setInvestedAmount] = useState(0);
    const [estimatedReturns, setEstimatedReturns] = useState(0);

    const calculateMaturityValue = (R, years, rate) => {
        const i = rate / 400;
        const n = years * 4;
        const maturity = R * ((Math.pow(1 + i, n) - 1) / (1 - Math.pow(1 + i, -1 / 3)));
        return maturity;
    };

    useEffect(() => {
        const totalInvested = monthlyInvestment * 12 * duration;
        const maturity = calculateMaturityValue(monthlyInvestment, duration, interestRate);
        const returns = maturity - totalInvested;

        setInvestedAmount(totalInvested);
        setMaturityValue(maturity);
        setEstimatedReturns(returns);
    }, [monthlyInvestment, duration, interestRate]);


    return (
        <div className="container">
            <h3 className="custom-width">RD Calculator</h3>
            <p className="custom-width">Investing is crucial for achieving financial goals and securing a stable future. It not only helps in wealth accumulation but also provides a hedge against inflation. Among various investment options, Recurring Deposits (RDs) offer a disciplined and low-risk approach to saving and growing your money over time.</p>
            <div className="row border rounded custom-width">

                <CalculatorInputs
                    amountLabel="ENTER AMOUNT"
                    // amountValue={monthlyInvestment}
                    initialInvestment={initialInvestment}
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
                        <p className="text-dark">The total value of your investment after<b><span className="selected-years">&nbsp;{duration} years</span></b> will be</p>
                        <span className="amount">₹ {Math.round(maturityValue).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">

                        <div className="d-flex justify-content-center align-items-center">
                            <DoughnutChart investedAmount={investedAmount} estimatedReturns={estimatedReturns} />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="text-muted ms-2 mb-0">Invested Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹{investedAmount.toLocaleString('en-IN')}</p>
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
                <h2 className="mc-desc-title">What is an RD Calculator?</h2>
                <div className="mc-desc-para">
                    <p>An RD calculator is a valuable financial tool on Angel One designed to help individuals calculate their investment growth in RDs. This online calculator takes basic yet crucial factors such as the investment amount, duration, and interest rate into consideration. And in less than a minute, it displays the future value of the investment.</p>
                </div>
                <h2 className="mc-desc-title">How does RD Calculator Work?</h2>

                <p>Inputs required by the RD Calculator:</p>
                <ul>
                    <li><strong>Monthly Investment: </strong>Enter your monthly investment amount.</li>
                    <li><strong>The duration of the investment: </strong>Enter the duration of the investment.</li>
                    <li><strong>Interest Rate: </strong>Enter the interest rate on the RD.</li>
                </ul>
                <p><strong>Output:</strong></p>
                <p>The recurring deposit calculator will automatically show you the future value of your investment at the end of the duration. It will also break the value down into the total interest earned and the total invested amount.</p>
                <p><strong>RD Calculator Illustration: </strong></p>
                <p>Let's assume you are planning to buy a car in the next 5 years and want to invest ₹15,000 monthly in an RD of 5% interest rate. </p>
                <p>The following will be the inputs for using RD Calculator:</p>
                <ul>
                    <li><strong>Monthly Investment: </strong>Rs.15,000</li>
                    <li><strong>Investment duration: </strong>5 years</li>
                    <li><strong>Interest Rate: </strong>5%</li>
                </ul>
                <p>The recurring deposit calculator will automatically show you the future value of your investment at the end of the duration.</p>
                <ul>
                    <li><strong>Total estimated Future value of investments (A): </strong>Rs.10,23,783</li>
                    <li><strong>Total investments made by investors (B): </strong>Rs.9,00,000</li>
                    <li><strong>Interest Rate earned by the investor (A - B): </strong>Rs.1,23,783</li>
                </ul>
                <p>It is important to note that TDS (Tax Deducted at Source) is applicable on RD if the interest earned is more than ₹40,000 for individuals and ₹50,000 for senior citizens. And investors with no taxable income can submit Form 15G to avoid TDS on their RDs.</p>
                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>
        </div>
    )
}