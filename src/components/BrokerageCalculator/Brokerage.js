import React, { useState } from "react";
import '../../assets/styles/brokerage.css'

export default function Brokerage({ Delivery, Intraday }) {

    const [selectedButton, setSelectedButton] = useState("Delivery");
    const [buyPrice, setBuyPrice] = useState(100);
    const [sellPrice, setSellPrice] = useState(200);
    const [noOfShares, setNoOfShares] = useState(10);
    const [exchange, setExchange] = useState("NSE");

    const [brokerage, setBrokerage] = useState(0);
    const [otherCharges, setOtherCharges] = useState(0);
    const [breakeven, setBreakeven] = useState(0);
    const [netPL, setNetPL] = useState(0);

    // Breakdown state
    const [sttCtt, setSttCtt] = useState(0);
    const [transactionCharges, setTransactionCharges] = useState(0);
    const [gst, setGst] = useState(0);
    const [stateStampDuty, setStateStampDuty] = useState(0);
    const [sebiTurnoverFees, setSebiTurnoverFees] = useState(0);
    const [dpCharges, setDpCharges] = useState(0);

    const handleCalculate = (e) => {
        e.preventDefault();

        const brokeragePercentage = selectedButton === "Delivery" ? 0.02 / 100 : 0.04 / 100; // Delivery 0.02%, Intraday 0.04%

        // Formula for brokerage charges
        const calculatedBrokerage = buyPrice * noOfShares * brokeragePercentage;
        setBrokerage(calculatedBrokerage);

        // Calculate Other Charges Breakdown
        const calculatedSttCtt = 0.0125 * buyPrice * noOfShares; // Example for STT/CTT (0.0125%)
        const calculatedTransactionCharges = 0.0015 * buyPrice * noOfShares; // Example for transaction charges (0.15%)
        const calculatedGst = 0.18 * (calculatedBrokerage + calculatedSttCtt + calculatedTransactionCharges); // Example for GST (18%)
        const calculatedStateStampDuty = 0.003 * buyPrice * noOfShares; // Example for state stamp duty (0.3%)
        const calculatedSebiTurnoverFees = 0.000025 * buyPrice * noOfShares; // Example for SEBI fees (0.0025%)
        const calculatedDpCharges = 20; // Fixed DP Charges as per the example

        setSttCtt(calculatedSttCtt);
        setTransactionCharges(calculatedTransactionCharges);
        setGst(calculatedGst);
        setStateStampDuty(calculatedStateStampDuty);
        setSebiTurnoverFees(calculatedSebiTurnoverFees);
        setDpCharges(calculatedDpCharges);

        // Total other charges
        const totalOtherCharges = calculatedSttCtt + calculatedTransactionCharges + calculatedGst + calculatedStateStampDuty + calculatedSebiTurnoverFees + calculatedDpCharges;
        setOtherCharges(totalOtherCharges);

        // Breakeven calculation
        const calculatedBreakeven = (sellPrice - buyPrice) / (sellPrice - buyPrice - calculatedBrokerage - totalOtherCharges);
        setBreakeven(calculatedBreakeven.toFixed(2));

        // Net Profit/Loss calculation
        const calculatedNetPL = (sellPrice * noOfShares) - (buyPrice * noOfShares) - calculatedBrokerage - totalOtherCharges;
        setNetPL(calculatedNetPL.toFixed(2));
    };

    const handleReset = () => {
        setBuyPrice(100);
        setSellPrice(200);
        setNoOfShares(10);
        setExchange("NSE");
        setBrokerage(0);
        setOtherCharges(0);
        setBreakeven(0);
        setNetPL(0);
        setSttCtt(0);
        setTransactionCharges(0);
        setGst(0);
        setStateStampDuty(0);
        setSebiTurnoverFees(0);
        setDpCharges(0);
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-7 p-4">
                    <div class="d-flex justify-content-center">
                        <div
                            className={`button ${selectedButton === "Delivery" ? "brok-button-selected" : "brok-button-non-selected"} d-flex col-6 align-items-center justify-content-center border bg-light rounded-start`}
                            onClick={() => setSelectedButton("Delivery")}
                        >
                            <span>{Delivery}</span>
                        </div>
                        <div
                            className={`button ${selectedButton === "Intraday" ? "brok-button-selected" : "brok-button-non-selected"} d-flex col-6 align-items-center justify-content-center border bg-light rounded-end`}
                            onClick={() => setSelectedButton("Intraday")}
                        >
                            <span>{Intraday}</span>
                        </div>
                    </div>
                    <form id="brokerage-form" className="container" onSubmit={handleCalculate}>
                        <div className="row py-3">
                            <div className="col-md-6">
                                <label htmlFor="brokerage-sales" className="form-child">Buy</label>
                                <input
                                    type="text"
                                    placeholder="0"
                                    id="brokerage-sales"
                                    className="form-control p-3 input-shadow"
                                    required
                                    min="1"
                                    maxLength="7"
                                    value={buyPrice}
                                    onChange={(e) => setBuyPrice(e.target.value)}
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="brokerage-raw" className="form-child">Sell</label>
                                <input
                                    type="text"
                                    placeholder="0"
                                    id="brokerage-raw"
                                    className="form-control p-3 input-shadow"
                                    required
                                    min="1"
                                    maxLength="7"
                                    value={sellPrice}
                                    onChange={(e) => setSellPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row py-3">
                            <div className="col-md-6">
                                <label htmlFor="brokerage-sales" className="form-child">No. of Shares</label>
                                <input
                                    type="text"
                                    placeholder="0"
                                    id="brokerage-sales"
                                    className="form-control p-3 input-shadow"
                                    required
                                    min="1"
                                    maxLength="7"
                                    value={noOfShares}
                                    onChange={(e) => setNoOfShares(e.target.value)}
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="brokerage-raw" className="form-child">Exchange</label>
                                <select
                                    id="brokerage-raw"
                                    className="form-select p-3 input-shadow"
                                    required
                                    value={exchange}
                                    onChange={(e) => setExchange(e.target.value)}
                                >
                                    <option value="NSE">NSE</option>
                                    <option value="BSE">BSE</option>
                                </select>
                            </div>

                        </div>

                        <div className="d-flex justify-content-between gap-4 mt-3">
                            <button type="submit" className="w-50 border rounded calculate">Calculate Brokerage</button>
                            <button type="reset" className="w-50 border rounded reset" onClick={handleReset}>Reset</button>
                        </div>
                    </form>
                </div>

                <div className="col-5 mt-5">
                    <h5 className="card-header border rounded-top text-bg-dark p-4 charges-header">Charges</h5>
                    <table className="table table-bordered" style={{ height: "230px" }}>
                        <tbody className="charges-table">
                            <tr>
                                <td>Brokerage</td>
                                <td>₹{brokerage.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Other Charges</td>
                                <td>₹{otherCharges.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Breakeven</td>
                                <td>₹{breakeven}</td>
                            </tr>
                            <tr className="fw-bold">
                                <td className="netpl">Net P&L</td>
                                <td className="netpl">₹{netPL}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="container mt-4 custom-width">
                <h3 className="mb-4">Charges Breakup</h3>
                <table className="table table-bordered charges-table">
                    <tbody>
                        <tr>
                            <td>Brokerage</td>
                            <td>₹{brokerage.toFixed(2)}</td>
                        </tr>

                        <tr className="charges-table-child">
                            <td>STT/CTT</td>
                            <td>₹{sttCtt.toFixed(2)}</td>
                        </tr>

                        <tr>
                            <td>Transaction Charges</td>
                            <td>₹{transactionCharges.toFixed(2)}</td>
                        </tr>

                        <tr>
                            <td>IPFT Charges</td>
                            <td>₹0.00</td>
                        </tr>

                        <tr>
                            <td>DP Charges</td>
                            <td>₹{dpCharges.toFixed(2)}</td>
                        </tr>

                        <tr>
                            <td>State Stamp Duty</td>
                            <td>₹{stateStampDuty.toFixed(2)}</td>
                        </tr>

                        <tr>
                            <td>SEBI Turnover Fees</td>
                            <td>₹{sebiTurnoverFees.toFixed(2)}</td>
                        </tr>

                        <tr>
                            <td>GST</td>
                            <td>₹{gst.toFixed(2)}</td>
                        </tr>

                        <tr className="fw-bold">
                            <td>TOTAL TAXES AND CHARGES</td>
                            <td className="fw-bold">₹{otherCharges.toFixed(2)}</td>
                        </tr>

                        <tr className="fw-bold">
                            <td>NET BUY VALUE</td>
                            <td className="fw-bold">₹{(buyPrice * noOfShares).toFixed(2)}</td>
                        </tr>

                        <tr className="fw-bold">
                            <td>NET SELL VALUE</td>
                            <td className="fw-bold">₹{(sellPrice * noOfShares).toFixed(2)}</td>
                        </tr>

                        <tr className="fw-bold">
                            <td>POINTS TO BREAKEVEN</td>
                            <td className="fw-bold">₹{breakeven}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="container custom-width">
                <h2 className="mc-desc-title">Brokerage Calculator</h2>
                <div className="mc-desc-para">
                    <p>Investments come with certain transaction costs, which go on to reduce your overall returns significantly. Therefore, it is important to know the estimates of such costs to optimise your investment returns. Being aware of the charges involved in trading-related transactions is particularly important. These include brokerage fees and other charges levied by parties like regulators. A brokerage calculator can help you estimate the charges associated with your trades. Once you know how these costs impact your returns, you can effectively manage them and maximise them.</p>
                </div>
                <h2 className="mc-desc-title">What Is the Brokerage Calculator?</h2>
                <p>A brokerage calculator helps calculate the brokerage charges on trades across equity, futures and options, commodity, currency, intraday, and carry forward transactions. You can use this calculator across different stocks and exchanges.</p>
                <p>The Angel One brokerage calculator is a comprehensive tool that not only considers the brokerage but also other important parameters like GST, transaction charges, state-wise stamp duty, Securities Transaction Tax (STT), Commodities Transaction Tax (CTT), SEBI turnover fees, and DP (Depository Participant) charges while calculating the net profit/loss.</p>
                <h2 className="mc-desc-title">How Does Online Brokerage Calculator Work?</h2>
                <p>The online brokerage calculator considers basic trade details, such as the buy and sell prices, quantity and the exchange house. It uses a simple brokerage formula and calculates the charges for equity delivery and intraday, futures and options (for stocks, indices, commodity, and currency).</p>

                <h2 className="mc-desc-title">What is the Brokerage Calculator Formula?</h2>
                <p>The formula to calculate brokerage charges is as follows:</p>
                <p>Brokerage charges = Buy/Sell quantity X Price of one unit of stock X Brokerage percentage</p>
                <p>Here’s an example to better understand the usage and working of the online brokerage calculator.</p>
                <p>Suppose you want to buy 50 shares of a company in intraday trading. On NSE, the buy price is Rs. 1,000 a piece, and the sell price is Rs. 2,000 per share. When you enter these values in the online brokerage calculator, the following items are displayed:</p>
                <ul>
                    <li>Brokerage = Rs. 40</li>
                    <li>Other Charges = Rs. 41.92</li>
                    <li>Breakeven = Rs. 1.67</li>
                    <li>Net P&L = Rs. 49,016.08</li>
                </ul>
                <p>Along with this, you will also get a breakdown of the following:</p>
                <ul>
                    <li>Brokerage: Rs. 40.00</li>
                    <li>STT/CTT: Rs. 24.50</li>
                    <li>Transaction Charges: Rs. 4.77</li>
                    <li>DP Charges: Rs. 0</li>
                    <li>State Stamp Duty: Rs. 4.41</li>
                    <li>SEBI Turnover Fees: Rs. 0.15</li>
                    <li>GST: Rs. 8.09</li>
                    <li>Total Taxes and Charges: Rs. 81.92</li>
                    <li>Net Buy Value: Rs. 48,902.00</li>
                    <li>Net Sell Value: Rs. 98,000.00</li>
                    <li>Points to Breakeven: Rs. 1.67</li>
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


