import React, { useState, useEffect } from "react";
import "../../assets/styles/ebitda.css"
import EBITDAChart from "./chart"

export default function EBITDACalculator() {

    const [sales, setSales] = useState(100);
    const [rawMaterial, setRawMaterial] = useState(50);
    const [employeeCosts, setEmployeeCosts] = useState(10);
    const [otherExpenses, setOtherExpenses] = useState(20);
    const [ebitda, setEbitda] = useState(null);
    const [ebitdaPercentage, setEbitdaPercentage] = useState(20);

    // Handle form submission to calculate EBITDA
    const handleCalculate = (e) => {
        e.preventDefault();
        const totalExpenses = rawMaterial + employeeCosts + otherExpenses;
        const calculatedEbitda = sales - totalExpenses;
        setEbitda(calculatedEbitda);
        setEbitdaPercentage(((calculatedEbitda / sales) * 100));
    };

    // Handle form reset
    const handleReset = () => {
        setSales(100);
        setRawMaterial(50);
        setEmployeeCosts(10);
        setOtherExpenses(20);
        setEbitda(20000);
        setEbitdaPercentage(20);
    };

    return (
        <div className="container">
            <h3 className="custom-width">EBITDA Calculator</h3>
            <div className="row border rounded custom-width">
                <div className="col-5 p-4">
                    <form onSubmit={handleCalculate} id="ebitda-form" className="container">
                        <div className="mb-2">
                            <label htmlFor="ebitda-sales" className="form-child">Sales (₹)</label>
                            <input
                                type="number"
                                placeholder="0"
                                id="ebitda-sales"
                                className="form-control p-3"
                                required
                                min="1"
                                maxLength="7"
                                value={sales}
                                onChange={(e) => setSales(e.target.value)}
                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="ebitda-raw" className="form-child">Raw Material Costs (₹)</label>
                            <input
                                type="number"
                                placeholder="0"
                                id="ebitda-raw"
                                className="form-control p-3"
                                required
                                min="1"
                                maxLength="7"
                                value={rawMaterial}
                                onChange={(e) => setRawMaterial(e.target.value)}
                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="ebitda-employee" className="form-child">Employee Costs (₹)</label>
                            <input
                                type="number"
                                placeholder="0"
                                id="ebitda-employee"
                                className="form-control p-3"
                                required
                                min="1"
                                maxLength="7"
                                value={employeeCosts}
                                onChange={(e) => setEmployeeCosts(e.target.value)}
                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="ebitda-other-expense" className="form-child">Other Operating Expenses (₹)</label>
                            <input
                                type="number"
                                placeholder="0"
                                id="ebitda-other-expense"
                                className="form-control p-3"
                                required
                                min="1"
                                maxLength="7"
                                value={otherExpenses}
                                onChange={(e) => setOtherExpenses(e.target.value)}
                            />
                        </div>

                        <div className=" d-grid gap-2 col-12 mx-auto">
                            <button type="submit" className="border rounded calculate">Calculate</button>
                            <button type="reset" onClick={handleReset} className="border rounded reset">Reset</button>
                        </div>
                    </form>


                </div>
                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p className="text-dark mb-0">EBITDA Margin:</p>
                        <span className="amount">{ebitdaPercentage.toFixed(2)}%</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">

                        <div className="d-flex justify-content-center align-items-center">
                            <EBITDAChart ebitdaPercentage={ebitdaPercentage} totalOperatingExpenses={100 - ebitdaPercentage} />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="text-muted ms-2 mb-0">EBITDA Margin</p>
                                <p className="fs-5 fw-semibold ms-2">{ebitdaPercentage.toFixed(2)}%</p>
                            </div>
                            <div className="border-start border-5 border-returnsBlue mt-2">
                                <p className="text-muted ms-2 mb-0">Total Operating Expenses</p>
                                <p className="fs-5 fw-semibold ms-2">{(100 - ebitdaPercentage).toFixed(2)}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container custom-width">
                <h2 className="mc-desc-title">What is a EBITDA Calculator?</h2>
                <div className="mc-desc-para">
                    <p>
                        EBITDA stands for Earnings Before Interest, Taxes, Depreciation, and Amortization. It is a financial metric that measures a company's profitability, excluding non-operating expenses such as interest, taxes, and non-cash charges.
                    </p>
                </div>
                <h2 className="mc-desc-title">What is an EBITDA Calculator?</h2>
                <p>An EBITDA calculator is a tool used to calculate a company's EBITDA by entering its revenue and expenses. The calculator subtracts expenses such as taxes, interest, depreciation, and amortization to arrive at the EBITDA.</p>
                <h2 className="mc-desc-title">Why should you use an EBIDTA Calculator?</h2>
                <ul>
                    <li>Easy and accurate calculation of EBITDA</li>
                    <li>Better understanding of a company's financial performance</li>
                    <li>Comparison of financial performance with competitors</li>
                    <li>Helps in making informed business decisions</li>
                    <li>Facilitates budgeting and forecasting by providing a benchmark for future performance.</li>
                </ul>

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
    )
}

