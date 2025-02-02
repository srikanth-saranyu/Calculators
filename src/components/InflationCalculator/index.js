import React, { useState, useEffect } from 'react';
import "../../assets/styles/sip.css"
import DoughnutChart from '../DoughnutChart'
import CalculatorInputs from '../CalculatorInputs'

export default function InflationCalculator() {

    const initialInvestment = 100000;
    const [initialAmount, setInitialAmount] = useState(100000);
    const [inflationRate, setInflationRate] = useState(6);
    const [years, setYears] = useState(5);
    const [futureCost, setFutureCost] = useState(0);

    function calculateFutureCost(currentCost, inflationRate, years) {
        const i = inflationRate / 100;
        return currentCost * Math.pow(1 + i, years);
    }

    useEffect(() => {
        setFutureCost(calculateFutureCost(initialAmount, inflationRate, years));
    }, [initialAmount, inflationRate, years]);


    return (
        <div className="container">
            <h3 className="custom-width">Inflation Calculator</h3>
            <div className="row border rounded custom-width">

                <CalculatorInputs
                    amountLabel="INITIAL AMOUNT"
                    // amountValue={initialAmount}
                    initialInvestment={initialInvestment}
                    onAmountChange={setInitialAmount}
                    durationLabel="Select Duration"
                    durationValue={years}
                    onDurationChange={setYears}
                    rateLabel="Inflation Rate"
                    rateValue={inflationRate}
                    onRateChange={setInflationRate}
                    minDuration={1}
                    maxDuration={30}
                    minRate={1}
                    maxRate={15}
                />

                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p className="text-dark">The total value of your investment after<b><span className="selected-years">&nbsp;{years} years</span></b> will be</p>
                        <span className="amount">₹ {Math.round(futureCost).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <DoughnutChart investedAmount={initialAmount} estimatedReturns={futureCost - initialAmount} />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="text-muted ms-2 mb-0">Initial Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹{initialAmount.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="border-start border-5 border-returnsBlue mt-2">
                                <p className="text-muted ms-2 mb-0">Adjusted Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹{Math.round(futureCost - initialAmount).toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container custom-width'>
                <h2 className="mc-desc-title">What Is an Inflation Calculator?</h2>
                <p>An inflation calculator calculates the effects of inflation on the cost of a specific category of goods or services.</p>
                <p>Inflation is defined as the increase in the price of a basket of goods and services. It is usually calculated for a particular product, sector, or the economy as a whole. It indicates the degree to which the purchasing power of the rupee may fall.</p>
                <p>Inflation is usually calculated in two forms:</p>
                <ul>
                    <li>Consumer price index (CPI), i.e. change in price levels at the retail level experienced by the end consumer.</li>
                    <li>Wholesale price index (WPI), i.e. change in price levels at the wholesale level.</li>
                </ul>
                <p>An inflation calculator is a free tool that is used to understand the difference in the cost of a good or service today compared to a few years later. It helps in financial planning for both the long and short term.</p>

                <h2 className="mc-desc-title">How Does an Inflation Calculator Work?</h2>
                <p>The inflation calculator uses a compound interest formula to calculate the future cost of a set of goods and services based on their current cost and the assumed rate of inflation. You simply have to visit the Angel One inflation calculator page online and enter the required details to find out the potential future cost.</p>

                <h2 className="mc-desc-title">What Is the Inflation Calculator Formula?</h2>
                <p>The rate of inflation can be calculated using either CPI or WPI. In case of CPI, the formula would be:</p>
                <p>CPI= Cost of goods in current year / Cost of goods in the base year * 100</p>
                <p>The following is the inflation calculator formula used to calculate the future cost of a product or service:</p>
                <p>Future Cost = Current Cost(1+i)^t</p>
                <p>i = Rate of inflation</p>
                <p>t = Number of years over which the inflation is calculated</p>
                <p>Before investing in high returns instruments, make sure that you have done adequate research on them. Also, choose a trusted broker who can aid you in your investment journey.</p>

                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}