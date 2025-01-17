
import "../../assets/styles/sip.css";
import DoughnutChart from "../DoughnutChart";
import React, { useState, useEffect } from "react";
import CalculatorInputs from "../CalculatorInputs";

export default function ELSSCalculator() {
    const initialInvestment = 5000;

    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [investmentPeriod, setInvestmentPeriod] = useState(5);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [investedAmount, setInvestedAmount] = useState(0);
    const [estimatedReturns, setEstimatedReturns] = useState(0);
    const [oneTimeTotalAmount, setOneTimeTotalAmount] = useState(0)
    const [activeTab, setActiveTab] = useState('sip');  // To manage active tab (SIP or One-time)

    const calculateSIP = () => {
        const months = investmentPeriod * 12;
        const rate = expectedReturn / 100 / 12;

        const futureValue =
            monthlyInvestment *
            ((Math.pow(1 + rate, months) - 1) / rate) *
            (1 + rate);
        return futureValue;
    };

    const calculateOneTimeInvestment = () => {
        const futureValue =
            monthlyInvestment * Math.pow(1 + expectedReturn / 100, investmentPeriod);
        setOneTimeTotalAmount(futureValue)
        return futureValue;
    };

    useEffect(() => {
        let totalInvested = 0;
        let futureValue = 0;

        if (activeTab === 'sip') {
            totalInvested = monthlyInvestment * investmentPeriod * 12;
            futureValue = calculateSIP();
        } else {
            totalInvested = initialInvestment;
            futureValue = calculateOneTimeInvestment();
        }

        setInvestedAmount(totalInvested);
        setEstimatedReturns(futureValue - totalInvested);
    }, [monthlyInvestment, investmentPeriod, expectedReturn, activeTab]);

    return (
        <div className="container">
            <h3 className="custom-width">ELSS Calculator</h3>
            {/* Tabs Section */}

            <ul className="nav nav-underline custom-width mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a
                        className={`nav-link ${activeTab === 'sip' ? 'active-tab' : 'inactive'}`}
                        onClick={() => setActiveTab('sip')}
                    >
                        SIP
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        className={`nav-link ${activeTab === 'oneTime' ? 'active-tab' : 'inactive'}`}
                        onClick={() => setActiveTab('oneTime')}
                    >
                        One Time
                    </a>
                </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
                {/* SIP Tab Content */}
                <div className={`tab-pane fade ${activeTab === 'sip' ? 'show active' : ''}`} id="pills-sip" role="tabpanel" aria-labelledby="pills-sip-tab">
                    <div className="row border rounded custom-width">
                        <CalculatorInputs
                            amountLabel="Monthly Investment"
                            initialInvestment={initialInvestment}
                            onAmountChange={setMonthlyInvestment}
                            durationLabel="Select Duration"
                            durationValue={investmentPeriod}
                            onDurationChange={setInvestmentPeriod}
                            rateLabel="Expected Rate of Return"
                            rateValue={expectedReturn}
                            onRateChange={setExpectedReturn}
                            minDuration={1}
                            maxDuration={30}
                            minRate={1}
                            maxRate={30}
                        />
                        <div className="col-7 d-flex flex-column border-start">
                            <div className="text-center mt-4">
                                <p className="text-dark">
                                    The future value of investment will be
                                </p>
                                <span className="amount">
                                    ₹{" "}
                                    {Math.round(investedAmount + estimatedReturns).toLocaleString("en-IN")}
                                </span>
                            </div>

                            <div className="d-flex flex-row justify-content-center">
                                <div className="d-flex justify-content-center align-items-center">
                                    <DoughnutChart
                                        investedAmount={investedAmount}
                                        estimatedReturns={estimatedReturns}
                                    />
                                </div>
                                <div className="d-flex flex-column justify-content-center w-23 ms-5">
                                    <div className="border-start border-5 border-investedOrange">
                                        <p className="ms-2 mb-0">Invested Amount</p>
                                        <p className="fs-5 fw-semibold ms-2">
                                            ₹{investedAmount.toLocaleString("en-IN")}
                                        </p>
                                    </div>
                                    <div className="border-start border-5 border-returnsBlue mt-2">
                                        <p className="ms-2 mb-0">Est. Returns</p>
                                        <p className="fs-5 fw-semibold ms-2">
                                            ₹{Math.round(estimatedReturns).toLocaleString("en-IN")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* One-Time Investment Tab Content */}
                <div className={`tab-pane fade ${activeTab === 'oneTime' ? 'show active' : ''}`} id="pills-oneTime" role="tabpanel" aria-labelledby="pills-oneTime-tab">
                    <div className="row border rounded custom-width">
                        <CalculatorInputs
                            amountLabel="Total Investment"
                            initialInvestment={initialInvestment}
                            onAmountChange={setMonthlyInvestment}
                            durationLabel="Select Duration"
                            durationValue={investmentPeriod}
                            onDurationChange={setInvestmentPeriod}
                            rateLabel="Expected Rate of Return"
                            rateValue={expectedReturn}
                            onRateChange={setExpectedReturn}
                            minDuration={1}
                            maxDuration={30}
                            minRate={1}
                            maxRate={30}
                        // isMonthly={false}
                        />
                        <div className="col-7 d-flex flex-column border-start">
                            <div className="text-center mt-4">
                                <p className="text-dark">
                                    The future value of investment will be
                                </p>
                                <span className="amount">
                                    ₹{" "}
                                    {Math.round(oneTimeTotalAmount).toLocaleString("en-IN")}
                                </span>
                            </div>

                            <div className="d-flex flex-row justify-content-center">
                                <div className="d-flex justify-content-center align-items-center">
                                    <DoughnutChart
                                        investedAmount={monthlyInvestment}
                                        estimatedReturns={oneTimeTotalAmount - monthlyInvestment}
                                    />
                                </div>
                                <div className="d-flex flex-column justify-content-center w-23 ms-5">
                                    <div className="border-start border-5 border-investedOrange">
                                        <p className="ms-2 mb-0">Invested Amount</p>
                                        <p className="fs-5 fw-semibold ms-2">
                                            ₹{monthlyInvestment.toLocaleString("en-IN")}
                                        </p>
                                    </div>
                                    <div className="border-start border-5 border-returnsBlue mt-2">
                                        <p className="ms-2 mb-0">Est. Returns</p>
                                        <p className="fs-5 fw-semibold ms-2">
                                            ₹{Math.round(oneTimeTotalAmount - monthlyInvestment).toLocaleString("en-IN")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container custom-width">
                    <h2 className="mc-desc-title">What is an ELSS Calculator?</h2>
                    <div className="mc-desc-para">
                        <p>
                            An ELSS calculator is a tool that helps individuals estimate the potential returns and tax savings they can achieve by investing in Equity-Linked Savings Schemes (ELSS). It is designed to give users a quick and convenient way to calculate the same. Based on these the investment amount, the investment duration, the expected rate of return, and the individual's income tax bracket, the calculator generates projections of the investment value over time and calculates the tax savings that can be availed under Section 80C of the Income Tax Act, 1961.
                        </p>
                        <p>By using an ELSS mutual fund calculator, investors can assess the potential growth of their investments and make informed decisions regarding the amount they want to invest and the duration of the investment. It provides a useful tool for individuals to plan their tax savings and investment strategies more effectively.</p>
                    </div>
                    <h2 className="mc-desc-title">ELSS Calculator Formula For Maturity Amount</h2>

                    <p>The formula for calculating the maturity amount of an ELSS investment is as follows:</p>
                    <p><strong>FV = C(1+r)^t</strong></p>
                    <p>Where,</p>
                    <p>FV = Future Value</p>
                    <p>C = Investment</p>
                    <p>r = Expected rate of return</p>
                    <p>t = Time horizon of investment</p>
                    <h2 className="mc-desc-title">ELSS Calculator Example</h2>
                    <h5 className="fw-bold">ELSS Lumpsum Calculator Example</h5>
                    <p>
                        Angel One's ELSS Lumpsum Calculator helps you estimate the potential growth of your investment in Equity-Linked Savings Schemes (ELSS). For example, if you invest ₹5,00,000 with an expected annual return of 12% for 5 years, the future value of your investment would be ₹8,81,171. This means your investment would grow by ₹3,81,171 over the 5-year period.
                    </p>
                    <span>To calculate this, the ELSS formula uses compound interest:</span><br />
                    <p>Future Value = Principal × (1 + Rate of Return) ^ Time Period.</p>

                    <p>
                        The ELSS Lumpsum Calculator helps you understand how your investment can grow over time, giving you the confidence to make informed decisions for your financial goals.
                    </p>

                    <p>
                        <strong>Disclaimer: </strong>This calculator is meant for investor
                        education and awareness purpose only and shall not be considered as
                        any recommendation to make investments in the schemes of respective
                        Mutual Fund. Please consult your financial / tax advisor(s) before
                        taking any investment decisions.
                    </p>
                    <p>
                        <strong>
                            Mutual fund investments are subject to market risks, read all scheme
                            related documents carefully.
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    );
}
