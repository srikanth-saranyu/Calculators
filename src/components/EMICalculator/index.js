import { useState } from 'react';
import "../../assets/styles/sip.css"
import EMIChart from "./chart"
import CalculatorInputs from '../CalculatorInputs';

export default function EMICalculator() {

    const initialInvestment = 100000;
    const [loanAmount, setLoanAmount] = useState(100000);
    const [interestRate, setInterestRate] = useState(6);
    const [loanDuration, setLoanDuration] = useState(5);

    const calculateEMI = () => {
        const P = loanAmount;
        const R = (interestRate / 12) / 100;
        const N = loanDuration * 12;

        // EMI Calculation using the formula
        const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        return EMI;
    };

    const EMI = calculateEMI();
    const totalInterest = EMI * loanDuration * 12 - loanAmount;
    const totalPayable = loanAmount + totalInterest;


    return (
        <div className="container">
            <h3 className="custom-width">EMI Calculator</h3>
            <p className="custom-width">Understanding your monthly loan payments is crucial for effective financial management, especially when budgeting for goals like home renovations or debt reduction. Using an EMI calculator simplifies this process. It can help you quickly estimate your payments by entering the loan amount, term, and interest rate, giving you an instant view of your monthly instalments.</p>
            <div className="row border rounded custom-width">
                
                <CalculatorInputs
                    amountLabel="LOAN AMOUNT"
                    // amountValue={loanAmount}
                    initialInvestment={initialInvestment}
                    onAmountChange={setLoanAmount}
                    durationLabel="Select Duration"
                    durationValue={loanDuration}
                    onDurationChange={setLoanDuration}
                    rateLabel="Interest Rate"
                    rateValue={interestRate}
                    onRateChange={setInterestRate}
                    minDuration={1}
                    maxDuration={30}
                    minRate={1}
                    maxRate={30}
                />

                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p className="text-dark mb-0">EMI</p>
                        <span className="amount">₹ {Math.round(EMI).toLocaleString('en-IN')}/month</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">

                        <div className="d-flex justify-content-center align-items-center">
                            <EMIChart loanAmount={loanAmount} totalInterest={totalInterest} />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="text-muted ms-2 mb-0">Principal Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹{loanAmount.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="border-start border-5 border-returnsBlue mt-2">
                                <p className="text-muted ms-2 mb-0">Interest</p>
                                <p className="fs-5 fw-semibold ms-2">₹{Math.round(totalInterest).toLocaleString('en-IN')}</p>
                            </div>
                            <div className="border-start border-5 border-returnsgrey mt-2">
                                <p className="text-muted ms-2 mb-0">Total Payable</p>
                                <p className="fs-5 fw-semibold ms-2">₹{Math.round(totalPayable).toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container custom-width'>
                <h2 className="mc-desc-title">What Is an EMI Calculator?</h2>
                <p>An EMI calculator helps you calculate EMI amount for any loan, such as a home loan, car loan, personal loan, education loan, etc. online for free. It takes the entered values and computes the EMI amount in seconds. The online EMI calculator can also show you a break-up of total payment into principal and interest components. It also helps you compare different loan options and plan your monthly budget accordingly.</p>

                <h2 className="mc-desc-title">How Does an EMI Calculator Work?</h2>
                <p>The online EMI calculator is simple to use. It just considers the basic details of a loan and provides the EMI amount. It considers the loan amount, rate of interest and duration of the loan. Once these details are entered into the calculator, it displays the EMI of the loan along with a detailed breakdown of the principal amount, interest amount and total payable on the loan.</p>

                <h2 className="mc-desc-title">EMI Calculator Formula</h2>
                <p>Here's the formula to calculate EMI:</p>
                <p><strong>E = [P x R x (1+R) ^N] / [(1+R) ^ (N-1)]</strong></p>
                <p>Where,</p>
                <span>E = EMI</span><br />
                <span>P = Principal Amount</span><br />
                <span>R = Rate of interest. This is calculated on a monthly basis. If the interest rate is 4% per annum then R will be 4/12/100 = 0.0033.</span><br />
                <p>N = Duration in months</p>

                <p>By using an EMI calculator, you can easily estimate how much you'll need to pay each month, making it easier to decide on the right loan amount and repayment term that fits your financial situation.</p>
                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}