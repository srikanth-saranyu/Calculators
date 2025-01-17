import React, { useState, useEffect } from "react";

export default function DYCalculator() {

    const [annualDividend, setAnnualDividend] = useState(100);
    const [purchasePrice, setPurchasePrice] = useState(50);
    const [dividendYield, setDividendYield] = useState(200);

    // Function to handle form submission and calculate dividend yield
    const handleSubmit = (e) => {
        e.preventDefault();
        if (annualDividend && purchasePrice) {
            const yieldPercentage = (annualDividend / purchasePrice) * 100;
            setDividendYield(yieldPercentage); 
        }
    };

    // Function to handle resetting the form
    const handleReset = () => {
        setAnnualDividend(100);
        setPurchasePrice(50);
        setDividendYield(200);
    };  

    return (
        <div className="container">
            <h3 className="custom-width">Dividend Yield Calculator</h3>
            <p className="custom-width">A dividend yield calculator shows you the proportion of dividends paid to you per share compared to the price of the share. It is expressed in percentage terms, and it helps you ascertain an important part of the returns you get from investing in a particular stock.</p>
            <div className="row custom-width">
                <div className="col-6 p-4">
                    <form onSubmit={handleSubmit} id="ebitda-form" className="container">
                        <div className="mb-2">
                            <label htmlFor="ebitda-sales" className="form-child">Enter Annual Dividend</label>
                            <input
                                type="number"
                                placeholder="0"
                                id="ebitda-sales"
                                className="form-control p-3"
                                required
                                min="1"
                                maxLength="7"
                                value={annualDividend}
                                onChange={(e) => setAnnualDividend(e.target.value)}
                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="ebitda-raw" className="form-child">Enter Purchase Price</label>
                            <input
                                type="number"
                                placeholder="0"
                                id="ebitda-raw"
                                className="form-control p-3"
                                required
                                min="1"
                                maxLength="7"
                                value={purchasePrice}
                                onChange={(e) => setPurchasePrice(e.target.value)}
                            />
                        </div>

                        <div className="d-flex justify-content-between gap-4 mt-3">
                            <button type="submit" className="w-50 border rounded calculate">Calculate</button>
                            <button type="reset" className="w-50 border rounded reset" onClick={handleReset}>Reset</button>
                        </div>
                    </form>
                </div>

                <div className="col-6">
                    <div className="card shadow-none rounded-3">
                        <h5 className="card-header text-bg-dark p-4">Result</h5>
                        <div
                            className="card-body d-flex justify-content-center align-items-center" style={{ height: "200px" }}
                        >
                            <div className="text-center">
                                <p className="card-text mb-0">Dividend Yield Is:</p>
                                <span className="amount">{dividendYield.toFixed(2)}%</span>
                            </div>
                        </div>
                    </div>
                </div>
 
            </div>

            <div className="container custom-width">
                <h2 className="mc-desc-title">What is Dividend Yield Calculator?</h2>
                <div className="mc-desc-para">
                    <p>A dividend yield calculator is a tool used to determine the dividend yield in percentage terms. In other words, it helps you calculate the amount of income that you can expect to receive per share based on the current market price and the company's annual dividend payment. It takes into account the dividend yield and calculates the expected income as a percentage of the investment. The dividend yield calculator can be used to compare different investment options and make informed decisions about where to invest capital.</p>
                    <p>Here are a few benefits of using a dividend yield calculator:</p>
                    <ol>
                        <li>Determining the amount of income that can be expected from a stock investment.</li>
                        <li>Expressing expected income as a percentage of the investment.</li>
                        <li>Comparing different investment options.</li>
                        <li>Gaining insight into the stability and growth potential of a company's dividend payments.</li>
                        <li>Making informed investment decisions and assisting with long-term financial planning and portfolio management.</li>
                    </ol>

                </div>
                <h2 className="mc-desc-title">How Does a Dividend Yield Calculator Work?</h2>
                <p>The dividend yield calculator determines the expected income an investor can receive from a stock investment. It considers the current market price and the annual dividend payment and then calculates the dividend yield as a percentage.</p>
                <p>The calculation is done using the following formula below:</p>
                <p><strong>Dividend Yield = (Annual Dividend Paid / Purchased Price ) * 100</strong></p>
                <p>For instance, if a stock pays an annual dividend of ₹12 and you purchased it at a price of ₹335, the dividend yield would be calculated as follows:</p>
                <p><strong>Dividend Yield = (12 / 335) * 100 = 3.58%</strong></p>
                <p>If you had invested ₹33,500 in that stock, you could expect a dividend of ₹1,200 from that investment, over and above any capital gains.</p>
                <p>This example demonstrates how the dividend yield calculator helps to quickly determine the expected income from an investment in a stock, expressed as a percentage of the investment.</p>

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