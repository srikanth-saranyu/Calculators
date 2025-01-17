import React, { useState } from "react";
import "../../assets/styles/sip.css"
import DoughnutChart from '../DoughnutChart'
import CalculatorInputs from "../CalculatorInputs";

export default function FDCalculator() {
    const initialInvestment = 100000;
    const [principal, setPrincipal] = useState(100000);
    const [interestRate, setInterestRate] = useState(7);
    const [duration, setDuration] = useState(5);

    const calculateMaturity = () => {
        const r = interestRate / 100;
        const n = 4;

        // Maturity Amount = p * (1 + r/n) ^ (nt)
        const maturityAmount = principal * Math.pow(1 + (r / n), n * duration);
        return maturityAmount;
    };

    const maturityAmount = calculateMaturity();
    const estimatedReturns = maturityAmount - principal;


    return (
        <div className="container">
            <h3 className="custom-width">FD Calculator</h3>
            <p className="custom-width">An FD calculator is used for calculating the final amount that you will get if you invest in a Fixed Deposit (FD) with a given amount, a given rate of interest, and a given duration of investment.</p>
            <div className="row border rounded custom-width">

                <CalculatorInputs
                    amountLabel="ENTER AMOUNT"
                    // amountValue={principal}
                    initialInvestment={initialInvestment}
                    onAmountChange={setPrincipal}
                    durationLabel="Select Duration"
                    durationValue={duration}
                    onDurationChange={setDuration}
                    rateLabel="Expected Rate of Return"
                    rateValue={interestRate}
                    onRateChange={setInterestRate}
                    minDuration={1}
                    maxDuration={30}
                    minRate={1}
                    maxRate={30}
                />


                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p className="text-dark">The future value of your investment after<b><span className="selected-years">&nbsp;{duration} years</span></b> will be</p>
                        <span className="amount">₹ {Math.round(maturityAmount).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">

                        <div className="d-flex justify-content-center align-items-center">
                            <DoughnutChart investedAmount={principal} estimatedReturns={estimatedReturns} />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="text-muted ms-2 mb-0">Invested Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹ {principal.toLocaleString('en-IN')}</p>
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
                <h2 className="mc-desc-title">What is an FD Calculator?</h2>
                <div className="mc-desc-para">
                    <p>A FD calculator is a free, online tool that can help you automatically calculate the future value of your fixed deposit investment based on the amount invested, the duration of investment, and the rate of returns offered by the bank. It is a better alternative to manually calculating the maturity amount of an FD. Since it is publicly available online, anyone with a device with internet access can use it to accurately calculate returns on their FD investments.</p>
                </div>
                <h2 className="mc-desc-title">How does FD Calculator Work?</h2>

                <p>Inputs required by the FD Calculator:</p>
                <ul>
                    <li><strong>Total Investment: </strong>Enter the principal amount that you are investing under “Total Investment”</li>
                    <li><strong>The duration of the investment: </strong>Enter the duration of the investment</li>
                    <li><strong>Interest Rate: </strong>Enter the interest rate on the FD</li>
                </ul>
                <p><strong>Output:</strong></p>
                <p>The fixed deposit calculator will automatically show you the future value of your investment at the end of the duration. It will also break the value down into the total interest earned and the total invested amount.</p>
                <p><strong>FD Calculator Illustration: </strong></p>
                <p>Let's assume that an investor wants to invest Rs. 3,00,000 for a period of 7 years at a 6.5% interest rate.</p>
                <p>The following will be the inputs for using FD Calculator:</p>
                <ul>
                    <li><strong>Total Investment: </strong>Rs.3,00,000</li>
                    <li><strong>Investment duration: </strong>7 years</li>
                    <li><strong>Interest Rate: </strong>6.5% p.a.</li>
                </ul>
                <p>The fixed deposit calculator will automatically show you the future value of your investment at the end of the duration.</p>
                <ul>
                    <li><strong>Total estimated Future value of investments (A): </strong>Rs.4,71,126</li>
                    <li><strong>Total investments made by investors (B): </strong>Rs.3,00,000</li>
                    <li><strong>Interest Rate earned by the investor (A - B): </strong>Rs.1,71,126</li>
                </ul>
                <p>The FD may have a lock-in period during which the funds cannot be withdrawn without paying a penalty. Fixed deposits are generally considered a low-risk, low-return investment option and are popular among investors in India.</p>
                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}