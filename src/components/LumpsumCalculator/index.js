import { useState } from "react";
import "../../assets/styles/sip.css"
import DoughnutChart from '../DoughnutChart'
import CalculatorInputs from '../CalculatorInputs'

export default function LumpsumCalculator() {
    const initialInvestment = 5000;
    const [lumpsumInvestment, setLumpsumInvestment] = useState(50000);
    const [duration, setDuration] = useState(5);
    const [rateOfReturn, setRateOfReturn] = useState(12);

    const compoundsPerYear = 1

    const calculateTotalAmount = (p, r, n, t) => {
        const rate = r / 100;
        const totalAmount = p * Math.pow(1 + rate / n, n * t);
        return totalAmount;
    };

    const totalAmount = calculateTotalAmount(lumpsumInvestment, rateOfReturn, compoundsPerYear, duration);
    const totalInvested = lumpsumInvestment ? lumpsumInvestment : 0;
    const returns = totalAmount - totalInvested;

    return (
        <div className="container">
            <h3 className="custom-width">Lumpsum Calculator</h3>
            <p className="custom-width">If you are considering making a one-time investment in a mutual fund, you can estimate the potential returns it can generate using a lumpsum calculator.</p>
            <div className="row border rounded custom-width">
                <CalculatorInputs
                    amountLabel="ENTER AMOUNT"
                    // amountValue={lumpsumInvestment}
                    initialInvestment={initialInvestment}
                    onAmountChange={setLumpsumInvestment}
                    durationLabel="Select Duration"
                    durationValue={duration}
                    onDurationChange={setDuration}
                    rateLabel="Expected Rate of Return"
                    rateValue={rateOfReturn}
                    onRateChange={setRateOfReturn}
                    minDuration={1}
                    maxDuration={30}
                    minRate={1}
                    maxRate={30}
                />


                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p className="text-dark">The total value of your investment after<span className="selected-years">&nbsp;{duration} years</span> will be</p>
                        <span className="amount">₹ {Math.round(totalAmount).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">

                        <div className="d-flex justify-content-center align-items-center">
                            <DoughnutChart investedAmount={totalInvested} estimatedReturns={returns} />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="text-muted ms-2 mb-0">Invested Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹ {Math.round(totalInvested).toLocaleString('en-IN')}</p>
                            </div>
                            <div className="border-start border-5 border-returnsBlue mt-2">
                                <p className="text-muted ms-2 mb-0">Est. Returns</p>
                                <p className="fs-5 fw-semibold ms-2">₹ {Math.round(returns).toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container custom-width'>
                <h2 className="mc-desc-title">What Is Lumpsum Investment?</h2>
                <div className="mc-desc-para">
                    <p>It is a one-time investment that allows you to put your money in a mutual fund, allowing it to grow and compound over time. A lumpsum investment is one of the best ways to maximise your potential returns in a mutual fund and secure your financial future.</p>
                </div>
                <h2 className="mc-desc-title">How does Lumpsum Calculator Work?</h2>

                <p>Inputs required by the Lumpsum Calculator:</p>
                <ul>
                    <li>Your initial investment</li>
                    <li>The expected rate of return</li>
                    <li>The duration of the investment</li>
                </ul>
                <p>The online calculator considers these factors and uses the lumpsum calculator formula to estimate your potential returns on mutual funds.</p>
                <p><strong>Lumpsum Calculator Illustration: </strong></p>
                <p>Let's assume that an investor wants to invest Rs. 2,50,000 on a monthly basis for a period of 5 years that will give them an expected rate of return of 13% p.a.</p>
                <p>The following will be the inputs for using Lumpsum Calculator:</p>
                <ul>
                    <li><strong>Investment amount: </strong>Rs.2,50,000</li>
                    <li><strong>Investment duration: </strong>5 years</li>
                    <li><strong>Expected Rate of Return: </strong>13% p.a.</li>
                </ul>
                <p>This will provide the investor with the estimated Future value of investments, Monthly investments made by investor and the expected returns earned:</p>
                <ul>
                    <li><strong>Total estimated Future value of investments (A): </strong>Rs.4,60,609</li>
                    <li><strong>Total Monthly investments made by investors (B): </strong>Rs.2,50,000</li>
                    <li><strong>Total Return earned by the investor (A - B): </strong>Rs.2,10,609</li>
                </ul>
                <p>Basis the estimated Future value of investments and Expected return, the investor may change the Monthly Lumpsum amount or Investment Period or Expected Rate of Return in order to attain the desired Expected returns that an investor wants to achieve over the given period of time.</p>
                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}