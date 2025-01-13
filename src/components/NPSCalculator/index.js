import "../../assets/styles/sip.css"
import DoughnutChart from '../DoughnutChart'
import React, { useState, useEffect } from "react";
import CalculatorInputs from '../CalculatorInputs'

export default function NPSCalculator() {

    const [monthlyInvestment, setMonthlyInvestment] = useState(100000);
    const [investmentPeriod, setInvestmentPeriod] = useState(19);
    const [expectedReturn, setExpectedReturn] = useState(9);

    const [investedAmount, setInvestedAmount] = useState(0);
    const [estimatedReturns, setEstimatedReturns] = useState(0);
    const [maturityValue, setMaturityValue] = useState(0);


    const calculateNPS = () => {
        const P = monthlyInvestment;
        const r = expectedReturn / 100;
        const n = 12;  // Number of compounding periods per year (monthly compounding)
        const t = 60 - investmentPeriod;  // Investment duration in years

        // Total invested amount (Principal Amount)
        const totalInvested = P * 12 * t;
        setInvestedAmount(totalInvested);

        // Compound Interest Formula for SIP
        const futureValue = P * ((Math.pow(1 + r / n, n * t) - 1) / (r / n)) * (1 + r / n);
        setMaturityValue(futureValue);

        // Interest earned: Future Value - Total Invested Amount
        const returns = futureValue - totalInvested;
        setEstimatedReturns(returns);
    };

    useEffect(() => {
        calculateNPS();
        // eslint-disable-next-line
    }, [monthlyInvestment, investmentPeriod, expectedReturn]);



    return (

        <div className="container">
            <h3 className="custom-width">NPS Calculator</h3>
            <p className="custom-width">An NPS (National Pension Scheme) calculator helps you determine the estimated pension and lumpsum amount you can expect to receive on maturity.</p>
            <div className="row border rounded custom-width">

                <CalculatorInputs
                    amountLabel="MONTHLY INVESTMENT"
                    amountValue={monthlyInvestment}
                    onAmountChange={setMonthlyInvestment}
                    durationLabel="Your Age"
                    durationValue={investmentPeriod}
                    onDurationChange={setInvestmentPeriod}
                    rateLabel="Interest Rate"
                    rateValue={expectedReturn}
                    onRateChange={setExpectedReturn}
                    minDuration={18}
                    maxDuration={60}
                    minRate={1}
                    maxRate={15}
                />


                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p className="text-dark">The future value of your investment will be</p>
                        <span className="amount">₹ {Math.round(maturityValue).toLocaleString('en-IN')}</span>
                    </div>

                    <div className="d-flex flex-row justify-content-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <DoughnutChart investedAmount={investedAmount} estimatedReturns={estimatedReturns} />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="ms-2 mb-0">Principal Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹{investedAmount.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="border-start border-5 border-returnsBlue mt-2">
                                <p className="ms-2 mb-0">Interest</p>
                                <p className="fs-5 fw-semibold ms-2">₹{Math.round(estimatedReturns).toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container custom-width'>
                <h2 className="mc-desc-title">What is an NPS Calculator?</h2>
                <div className="mc-desc-para">
                    <p>A person can use the NPS pension calculator to determine the temporary lumpsum payment and pension amount they can expect under the NPS (National Pension Scheme) based on the amount they invest each month. The National Pension Scheme calculator shows the estimated benefit that can be received.</p>
                    <p>Simply put, an NPS calculator is an online tool that helps investors determine how much capital has been accumulated, how much the entire investment will be worth at maturity, and how much monthly pension payments they will receive.</p>
                    <p>The National Pension Scheme contribution and investment length are considered when calculating this amount. The Angel One NPS calculator is a nifty tool that you can use free of charge to calculate the future value of your NPS investment and compare results before making a decision.</p>
                </div>
                <h2 className="mc-desc-title">How Does an Online NPS Calculator Work?</h2>

                <p>An NPS calculator online allows investors to select their monthly contribution, expected rate of return, and investment tenure to calculate the future value of their investments. It uses the compounding interest formula for the calculation. You must enter the following variables into the online NPS calculator to get the result:</p>
                <ul>
                    <li>Enter the amount of the monthly contribution</li>
                    <li>Adjust the expected rate of return.</li>
                    <li>Set your age.</li>
                </ul>
                <p>Once you enter the above values, the NPS pension calculator will calculate the estimated amount you will earn in the future. The NPS pension calculator saves time and effort by returning accurate results each time. It is important to note that the NPS calculator represents an approximate value, which might change in a changing market situation.</p>
                <h2 className="mc-desc-title">What Is the NPS Calculator Formula?</h2>
                <p>The NPS functions like any other pension system. The returns are calculated using the compounding interest formula used in the NPS scheme calculator.</p>
                <p><strong>Maturity value = p (1 + rn) nt</strong></p>
                <p>Where,</p>
                <p>p is the principal amount</p>
                <p>r is the rate of interest</p>
                <p>n is the frequency of compounding</p>
                <p>t is the duration of investment. </p>

                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}
