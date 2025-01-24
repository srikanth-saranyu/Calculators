import React, { useState, useEffect } from "react";

export default function MarginCalculator() {

    const [activeTab, setActiveTab] = useState('fo');

    return (
        <div className="container">
            <h3 className="custom-width">Margin Calculator</h3>
            <span className="custom-width">Interested in trading in Futures and Options?</span>
            <p className="custom-width">You need to maintain a margin with your broker before you trade. Let's understand what this margin is all about and how much is required for F&O trading.</p>
            <ul className="nav nav-underline custom-width mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a
                        className={`nav-link ${activeTab === 'fo' ? 'active-tab' : 'inactive'}`}
                        onClick={() => setActiveTab('fo')}
                    >
                        F&O
                    </a>
                </li>
            </ul>

            <div className="row">
                <div className="col-6">

                    <form id="margin-form" className="container ms-2">
                        <div className="row">
                            <div className="col-md-6">
                                <select
                                    id="margin-raw"
                                    className="form-select p-3"
                                    required

                                >
                                    <option value="">Select Exchange</option>
                                    <option value="NSE">MCX</option>
                                    <option value="BSE">NFO</option>
                                    <option value="BSE">CDS</option>
                                    <option value="BSE">NCDEX</option>
                                    <option value="BSE">BFO</option>
                                    <option value="BSE">NSECOM</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <select
                                    id="margin-raw"
                                    className="form-select p-3"
                                    required

                                >
                                    <option value="">Select Product</option>
                                    <option value="NSE">FUTURE</option>
                                    <option value="BSE">OPTION</option>
                                </select>
                            </div>
                        </div>
                        <div className="row py-3">
                            <div className="col-md-6">
                                <select
                                    id="margin-raw"
                                    className="form-select p-3"
                                    required
                                >
                                    <option value="">Select Symbol</option>
                                    <option value="NSE">ALUMINIUM</option>
                                    <option value="BSE">COPPER</option>
                                    <option value="BSE">SILVER</option>
                                    <option value="BSE">GOLD</option>
                                    <option value="BSE">LEAD</option>
                                    <option value="BSE">ZINC</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <select
                                    id="margin-raw"
                                    className="form-select p-3"
                                    required

                                >
                                    <option value="">Select OPTION type</option>
                                    <option value="NSE">CALL</option>
                                    <option value="BSE">PUT</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <select
                                    id="margin-raw"
                                    className="form-select p-3"
                                    required
                                >
                                    <option value="">Select Strike Price</option>
                                    <option value="NSE">ALUMINIUM</option>
                                    <option value="BSE">COPPER</option>
                                    <option value="BSE">SILVER</option>
                                    <option value="BSE">GOLD</option>
                                    <option value="BSE">LEAD</option>
                                    <option value="BSE">ZINC</option>
                                </select>
                            </div>

                        </div>

                        <div className="row py-3">
                            <div className="col-md-6">
                                <input
                                    type="number"
                                    placeholder="Net Quantity"
                                    id="brokerage-sales"
                                    className="form-control p-3"
                                    required
                                    min="1"
                                    maxLength="7"

                                />
                            </div>

                            <div className="col-md-6">
                                <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                                    <label className="btn btn-outline-primary fw-bold py-3" for="btnradio1">BUY</label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                    <label className="btn btn-outline-primary fw-bold py-3" for="btnradio2">SELL</label>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between gap-4 mt-3">
                            <button type="submit" className="w-50 border rounded calculate">Add</button>
                            <button type="reset" className="w-50 border rounded reset">Reset All</button>
                        </div>
                    </form>
                </div>

                <div className="col-6">
                    <h5 className="card-header border rounded-top text-bg-dark p-3 charges-header">Combined Margin Requirements</h5>
                    <table className="table table-bordered" style={{ height: "170px" }}>
                        <tbody className="charges-table">
                            <tr>
                                <td>Span Margin</td>
                                <td>₹12.22</td>
                            </tr>
                            <tr>
                                <td>Exposure Margin</td>
                                <td>₹232</td>
                            </tr>
                            <tr className="fw-bold">
                                <td className="netpl">Total</td>
                                <td className="netpl">₹21893</td>
                            </tr>
                        </tbody>
                    </table> 
                </div>
            </div>

            <div className="col-12 mt-4">
            <table className="table table-bordered">
                <thead className="margin-table">
                <tr className="text-muted">
                                <th>Exchange</th>
                                <th>Symbol</th>
                                <th>Product</th>
                                <th>Strike</th>
                                <th>Instrument Type</th>
                                <th>Trade Type</th>
                                <th>Option Type</th>
                                <th>QTY</th>
                                <th>Initial Margin</th>
                                <th>Exposure</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            </div>

            <div className="container custom-width">
                <h2 className="mc-desc-title">What is a Margin Calculator?</h2>
                <div className="mc-desc-para">
                    <p>Knowing the margin is essential before engaging in F&O trading. A margin calculator helps you find just that. It is an online tool that helps you calculate the required margin for F&O trading.</p>
                    <p>The margin calculator can also be used to calculate the margin for option buying or option selling and for different F&O strategies when trading in equity, commodity, or forex.</p>
                </div>
                <h2 className="mc-desc-title">Types of margins</h2>
                <p>There are different types of margins that the calculator calculates. These include the following:</p>
                <ul>
                    <li><strong>SPAN Margin</strong></li>
                    <li><strong>Exposure margin</strong></li>
                    <li><strong>Value at Rise (VaR) margin</strong></li>
                    <li><strong>Extreme Loss margin</strong></li>
                </ul>

                <h2 className="mc-desc-title">How to use a margin calculator?</h2>
                <p>The margin calculator calculates and shows different margins based on your inputs. To use the calculator, enter the following details:</p>
                <ul>
                    <li>Select Exchange: NFO, CDS, NCX or NCDEX</li>
                    <li>Select Product Type: Futures or Options</li>
                    <li>Select Symbol: This is a variable field depending on your choice of contract (e.g.: NIFTY, BANKNIFTY or any stock)</li>
                    <li>Select Net Quantity: Input the net quantity you want to trade for.</li>
                    <li>Choose Between Buy or Sell</li>
                </ul>
                <p>Based on these inputs, the combined margin requirement of the SPAN margin and exposure margin will be shown. You will also be able to check out the individual margin values.</p>
                <p>So, when trading in futures and options, know the margin requirements for a hassle-free trade. Use the margin calculator for a quick and accurate assessment of margins required, fulfil the requirement and trade easily.</p>
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
    );
}
