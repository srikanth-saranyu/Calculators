import React, { useState } from 'react';
import "../../assets/styles/sip.css"
import DoughnutChart from '../DoughnutChart'
import CalculatorInputs from '../CalculatorInputs';

export default function SICalculator() {

    const initialInvestment = 100000;
    const [principal, setPrincipal] = useState(100000);
    const [rate, setRate] = useState(6.5);
    const [years, setYears] = useState(5);

    // Function to calculate Simple Interest
    const calculateTotalAmount = (P, r, t) => {
        return P * (1 + (r / 100) * t);
    };

    const totalAmount = calculateTotalAmount(principal, rate, years);
    const interest = totalAmount - principal;


    return (
        <div className="container">
            <h3 className="custom-width">Simple Interest Calculator</h3>
            <p className="custom-width">Simple interest is calculated based on a fixed percentage of the initial principal amount. Use this calculator to calculate simple interest on your loan or investment/savings.</p>
            <div className="row border rounded custom-width">

                <CalculatorInputs
                    amountLabel="Principal Amount"
                    // amountValue={principal}
                    initialInvestment={initialInvestment}
                    onAmountChange={setPrincipal}
                    durationLabel="Select Duration"
                    durationValue={years}
                    onDurationChange={setYears}
                    rateLabel="Expected Rate of Return"
                    rateValue={rate}
                    onRateChange={setRate}
                    minDuration={1}
                    maxDuration={30}
                    minRate={1}
                    maxRate={15}
                />

                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p className="text-dark">The total value of your investment after<b><span className="selected-years">&nbsp;{years} years</span></b> will be</p>
                        <span className="amount">₹ {totalAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">

                        <div className="d-flex justify-content-center align-items-center">
                            <DoughnutChart investedAmount={principal} estimatedReturns={interest} />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="text-muted ms-2 mb-0">Principal Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹{principal.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="border-start border-5 border-returnsBlue mt-2">
                                <p className="text-muted ms-2 mb-0">Interest</p>
                                <p className="fs-5 fw-semibold ms-2">₹{interest.toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container custom-width'>
                <h2 className="mc-desc-title">What Is a Simple Interest Calculator?</h2>
                <div className="mc-desc-para">
                    <p>Simple interest (SI) is very straightforward. It is a method of calculating returns on an investment that does not compound. Since many real-life situations use a simple interest formula, it is helpful for investors to understand the interest calculation method. One can do it manually, which consumes time and increases the chances of error. The other option is to take the help of an online simple interest calculator, which uses external inputs and returns the results accurately and quickly.</p>

                </div>
                <h2 className="mc-desc-title">How Does a Simple Interest Calculator Work?</h2>
                <p>Calculating the return you will get on your investment in advance is crucial for financial decision-making. A simple interest calculator can help you understand how much return you will receive at maturity if the investment is not compounding.</p>
                <p>The simple interest calculator on the Angel One website is a free tool available to all. Investors can use it to compute returns on specific investments and compare alternative options by entering the relevant principal amounts, interest rates, and durations. The user-friendly interface helps anyone easily use it without market knowledge or technical expertise.</p>

                <h2 className="mc-desc-title">What Is the Simple Interest Calculator Formula?</h2>
                <p>As it is clear from the name, simple interest is calculated on the principal amount only. A simple interest calculation doesn't consider the interest accrued on the principal amount.</p>
                <p>The simple interest calculator formula uses the following to determine the final amount:</p>
                <p><strong>A= P(1+rt)</strong></p>
                <span>A = total amount accumulated, including principal and interest</span><br />
                <span>P = the principal amount</span><br />
                <span>r = rate of interest</span><br />
                <span>t = time period</span>

                <p>Suppose you have invested ₹1 lakh at a simple interest rate of 5% for 3 years.</p>
                <span><strong>A = P(1 + rt)</strong></span><br />
                <span>= 1,00,000 (1 + 0.05*3)</span><br />
                <span>= 1,15,000</span>
                <p>At the end of the 3 years, your investment will be ₹1,15,000.</p>
                <p>Instead of manual calculations, you can use an online calculator. A simple interest calculator has a simple interest formula built into it. All you have to do is input the variables based on which it will do the calculation.</p>

                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}