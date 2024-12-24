
import { useState } from 'react';
import '../styles/swpCals.css';

export default function SwpCalculator() {
    // State for the form inputs
    const [principalAmount, setPrincipalAmount] = useState(500000);
    const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(10000);
    const [expectedReturns, setExpectedReturns] = useState(12); // Expected annual returns
    const [duration, setDuration] = useState(5); // Duration in years

    // Function to calculate SWP Results based on user input
    const calculateInvestmentDetails = () => {
        const r = expectedReturns / 100; // Convert annual return percentage to decimal
        const n = 12; // Monthly compounding
        const t = duration; // Duration in years
        const monthlyRate = r / n; // Monthly interest rate
        const totalPeriods = n * t; // Total periods in months

        // Present value of withdrawals
        const withdrawalPresentValue = monthlyWithdrawal * (1 - Math.pow(1 + monthlyRate, -totalPeriods)) / monthlyRate;

        // Future value of principal (compounded monthly)
        // const investedValue = principalAmount * Math.pow(1 + monthlyRate, totalPeriods);

        // Total amount withdrawn over the period
        const totalWithdrawal = monthlyWithdrawal * 12 * t;

        // Remaining balance after withdrawals
        const remainingBalance = principalAmount - withdrawalPresentValue;

        return {
            investedAmount: principalAmount,
            totalWithdrawal: totalWithdrawal,
            remainingBalance: remainingBalance
        };
    };

    const { investedAmount, totalWithdrawal, remainingBalance } = calculateInvestmentDetails();

    console.log("totalWithdrawal", remainingBalance)

    return (
        <div className="container">
            <h3 className="title">SWP Calculator</h3>
            <div className="swp-parent">
                <div className="swp-child">
                    <div className="swp-calc-form">
                        <div className="returns-est-container">
                            <div className="vector-container">
                                <object data="https://w3assets.angelone.in/wp-content/uploads/2023/01/48x48-_-Blue-icons.svg" width="48" height="48"></object>
                            </div>
                            <div className="content-container">
                                <b>Returns Estimator</b>
                                <p className="description">Estimation is based on the past performance</p>
                            </div>
                        </div>

                        <form action="#" id="swp-form">
                            <div className="principal-amount-div">
                                <p>Total Investment</p>
                                <div className="ru-in">
                                    <span>₹</span>
                                    <input
                                        id="principal-amount"
                                        type="number"
                                        min="1"
                                        value={principalAmount}
                                        onChange={(e) => setPrincipalAmount(Number(e.target.value))}
                                        maxLength="9"
                                    />
                                </div>
                            </div>

                            <div className="details" id="fixed-details-div">
                                <div className="details-child details-child-one">
                                    <p>Monthly Withdrawal</p>
                                    <div>
                                        <span className="rupees">₹</span>
                                        <input
                                            type="number"
                                            min="500"
                                            max="50000"
                                            step="10"
                                            style={{ width: '6ch' }}
                                            value={monthlyWithdrawal}
                                            onChange={(e) => setMonthlyWithdrawal(Number(e.target.value))}
                                            id="fc-pa-txt"
                                        />
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    id="fc-pa"
                                    min="500"
                                    max="50000"
                                    step="10"
                                    value={monthlyWithdrawal}
                                    onChange={(e) => setMonthlyWithdrawal(Number(e.target.value))}
                                    className="range-slider"
                                />
                                <div className="details-child details-child-two">
                                    <p>₹500</p>
                                    <p>₹50,000</p>
                                </div>
                            </div>

                            <div className="details">
                                <div className="details-child details-child-one">
                                    <p>Withdrawal Period</p>
                                    <div>
                                        <input
                                            type="number"
                                            min="1"
                                            max="30"
                                            step="1"
                                            value={duration}
                                            onChange={(e) => setDuration(Number(e.target.value))}
                                            id="swp-duration-txt"
                                        />
                                        <span>Yrs</span>
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    id="swp-duration"
                                    min="1"
                                    max="30"
                                    step="1"
                                    value={duration}
                                    onChange={(e) => setDuration(Number(e.target.value))}
                                    className="range-slider"
                                />
                                <div className="details-child details-child-two">
                                    <p>1 Yr</p>
                                    <p>30 Yrs</p>
                                </div>
                            </div>
                            <div className="details">
                                <div className="details-child details-child-one">
                                    <p>Expected Rate of Return</p>
                                    <div>
                                        <input
                                            type="number"
                                            min="1"
                                            max="30"
                                            step="1"
                                            value={expectedReturns}
                                            onChange={(e) => setExpectedReturns(Number(e.target.value))}
                                            id="swp-interest-txt"
                                        />
                                        <span>%</span>
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    id="swp-interest"
                                    min="1"
                                    max="30"
                                    step="1"
                                    value={expectedReturns}
                                    onChange={(e) => setExpectedReturns(Number(e.target.value))}
                                    className="range-slider"
                                />
                                <div className="details-child details-child-two">
                                    <p>1%</p>
                                    <p>30%</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="swp-child">
                    <div className="swp-chart">
                        <p>Invested Amount:</p>
                        <p className="swp-invsted-val" id="swp-invested-value">
                            ₹{investedAmount.toLocaleString()}
                        </p>

                        <p className="swp-net-present-p">Total Withdrawal:</p>
                        <p className="swp-present-val" id="swp-net-present-value">
                            ₹{totalWithdrawal.toLocaleString()}
                        </p>

                        <p>Final value:</p>
                        <p className="swp-present-val" id="swp-present-value">
                            ₹{remainingBalance.toFixed(0)}
                        </p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className="mc-desc-title">What is an SWP calculator?</h2>
                <div className="mc-desc-para">
                    <p>Systematic Withdrawal Plan (SWP) is an offering that an investor can use to make systematic withdrawals from the existing corpus created by the investor in a mutual fund scheme. SWP calculator will facilitate an investor to determine how many withdrawals can they make from the invested corpus given that it will continue to make returns on the remaining balance of the corpus after each systematic withdrawals.</p>
                </div>
                <h2 className="mc-desc-title">How does the SWP Calculator work?</h2>
                <p>Inputs required by the SWP Calculator:</p>
                <ul>
                    <li><strong>Total Corpus: </strong>The investor will need to input the current value of the investments that they hold within a mutual fund scheme.</li>
                    <li><strong>Monthly withdrawals: </strong>The investor will need to input the monthly withdrawal amount that they would like to withdraw from the total corpus each month.</li>
                    <li><strong>Withdrawal Period: </strong>The investor will need to input the number of years for which they would like to make such monthly withdrawals.</li>
                    <li><strong>Expected Rate of Return: </strong>The investor will need to input the expected rate of return from the mutual fund scheme that they are invested in.</li>
                </ul>
                <p><strong>Output:</strong></p>
                <p>The SWP calculator will consume the inputs provided by the investor and would provide the total amount that the investor would be withdrawing and the remaining corpus amount in the mutual fund scheme after making such withdrawals.</p>
                <p><strong>SWP Calculator Illustration: </strong></p>
                <p>Let's assume that an investor has Rs.10,00,000 invested in Mutual Fund scheme and would want to make a monthly withdrawal of Rs.12,000 for 10 years, with an expected rate of return of 12% p.a.</p>
                <p>The following will be the inputs for using SWP Calculator:</p>
                <ul>
                    <li><strong>Total Corpus: </strong>Rs.10,00,000</li>
                    <li><strong>Monthly withdrawals: </strong>Rs.12,000</li>
                    <li><strong>Withdrawal Period: </strong>10 years</li>
                    <li><strong>Expected Rate of Return: </strong>12% p.a.</li>
                </ul>
                <p>This will provide the investor the following outputs, which will help in determining if the investor needs to change any input in order to get the desired output:</p>
                <ul>
                    <li><strong>Total Amount withdrawn by the investor from Corpus (A): </strong>Rs.14,40,000</li>
                    <li><strong>Remaining in Corpus amount after systematic monthly withdrawals (B): </strong>Rs.442,688</li>
                </ul>
                <p>The investor may change the monthly SWP amount or withdrawal period or expected rate of return in order to attain the desired corpus that an investor wants to maintain at the end of withdrawal period.</p>
                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>
        </div>
    );
}



