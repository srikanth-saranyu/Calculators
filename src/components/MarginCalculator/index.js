import React, { useState } from "react";

export default function MarginCalculator() {

    const [activeTab, setActiveTab] = useState('fo');
    const [exchange, setExchange] = useState("");
    const [product, setProduct] = useState("");
    const [symbol, setSymbol] = useState("");
    const [optionType, setOptionType] = useState("");
    const [strikePrice, setStrikePrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [tradeType, setTradeType] = useState("BUY");
    const [spanMargin, setSpanMargin] = useState(0);
    const [exposureMargin, setExposureMargin] = useState(0);
    const [showTable, setShowTable] = useState(false);
    const [marginEntries, setMarginEntries] = useState([]);

    const calculateMargins = () => {
        if (!quantity || !symbol || !product) return;

        // Simple mock logic for SPAN and Exposure Margin calculation
        let span = 0;
        let exposure = 0;

        // Example mock calculations (replace with actual margin calculation logic)
        const qty = parseInt(quantity);

        if (isNaN(qty)) return;  // Ensure quantity is a valid number

        // Example mock calculations (you can replace this logic with actual margin calculation logic based on your API or business logic)
        if (product === "FUTURE") {
            span = 100 * parseInt(quantity);
            exposure = 50 * parseInt(quantity);
        } else if (product === "OPTION") {
            span = 200 * parseInt(quantity);
            exposure = 100 * parseInt(quantity);
        }

        setSpanMargin(span);
        setExposureMargin(exposure);
        setShowTable(true);
    };


    const handleTradeTypeChange = (e) => {
        setTradeType(e.target.id === "btnradio1" ? "BUY" : "SELL");
    }

    const generateStrikePrices = () => {
        const options = [];
        for (let i = 100; i <= 10000; i += 100) {
            options.push(i);
        }
        return options;
    };

    const handleAddClick = (e) => {
        e.preventDefault();

        // Check if all the necessary fields are filled
        if (!exchange || !product || !symbol || !quantity) {
            alert('Please fill in all the required fields.');
            return; // Exit the function if any field is missing
        }

        calculateMargins(); // Calculate the margins on Add button click

        // Add the current entry to the marginEntries array
        const newEntry = {
            exchange,
            symbol,
            product,
            strikePrice,
            tradeType,
            optionType,
            quantity,
            spanMargin,
            exposureMargin
        };

        setMarginEntries([...marginEntries, newEntry]);  // Add the new entry to the array
        // { marginEntries.length === 0 ? setShowTable(false) : setShowTable(true) }
        setShowTable(true);
        // handleResetClick(); 
    };


    const handleResetClick = () => {
        setExchange("");
        setProduct("");
        setSymbol("");
        setOptionType("");
        setStrikePrice("");
        setQuantity("");
        setTradeType("BUY");
        setSpanMargin(null);
        setExposureMargin(null);
        setShowTable(false);
        setMarginEntries([])
    };

    const handleDeleteClick = (index) => {
        // Remove the entry at the specified index
        const updatedEntries = marginEntries.filter((_, i) => i !== index);
        setMarginEntries(updatedEntries);
        if (updatedEntries.length === 0) {
            setShowTable(false)
        } else {
            setShowTable(true)
        }

    };

    return (
        <div className="container">
            <h3 className="custom-width">Margin Calculator</h3>
            <span className="custom-width">Interested in trading in Futures and Options?</span>
            <p className="custom-width">You need to maintain a margin with your broker before you trade. Let's understand what this margin is all about and how much is required for F&O trading.</p>
            <ul className="nav nav-underline custom-width mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation"                                        >
                    <a
                        href="#"
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
                                    className="form-select p-3 input-shadow"
                                    required
                                    value={exchange}
                                    onChange={(e) => setExchange(e.target.value)}
                                >
                                    <option value="">Select Exchange</option>
                                    <option value="MCX">MCX</option>
                                    <option value="NFO">NFO</option>
                                    <option value="CDS">CDS</option>
                                    <option value="NCDEX">NCDEX</option>
                                    <option value="BFO">BFO</option>
                                    <option value="NSECOM">NSECOM</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <select
                                    id="margin-raw"
                                    className="form-select p-3 input-shadow"
                                    required
                                    value={product}
                                    onChange={(e) => setProduct(e.target.value)}
                                    disabled={!exchange}  // Disabled until exchange is selected
                                >
                                    <option value="">Select Product</option>
                                    <option value="FUTURE">FUTURE</option>
                                    <option value="OPTION">OPTION</option>
                                </select>
                            </div>
                        </div>
                        <div className="row py-3">
                            <div className="col-md-6">
                                <select
                                    id="margin-raw"
                                    className="form-select p-3 input-shadow"
                                    value={symbol}
                                    onChange={(e) => setSymbol(e.target.value)}
                                    disabled={!product}  // Disabled until product is selected
                                >
                                    <option value="">Select Symbol</option>
                                    <option value="ALUMINIUM">ALUMINIUM</option>
                                    <option value="COPPER">COPPER</option>
                                    <option value="SILVER">SILVER</option>
                                    <option value="GOLD">GOLD</option>
                                    <option value="LEAD">LEAD</option>
                                    <option value="ZINC">ZINC</option>
                                </select>
                            </div>

                            {product === 'OPTION' && (
                                <div className="col-md-6">
                                    <select
                                        id="margin-raw"
                                        className="form-select p-3 input-shadow"
                                        required
                                        value={optionType}
                                        onChange={(e) => setOptionType(e.target.value)}
                                    >
                                        <option value="">Select OPTION type</option>
                                        <option value="CALL">CALL</option>
                                        <option value="PUT">PUT</option>
                                    </select>
                                </div>
                            )}
                        </div>

                        {product === 'OPTION' && (
                            <div className="row">
                                <div className="col-md-6">
                                    <select
                                        id="margin-raw"
                                        className="form-select p-3 input-shadow"
                                        required
                                        value={strikePrice}
                                        onChange={(e) => setStrikePrice(e.target.value)}
                                        disabled={!optionType}  // Disabled until optionType is selected
                                    >
                                        <option value="">Select Strike Price</option>
                                        {generateStrikePrices().map((price) => (
                                            <option key={price} value={price}>
                                                {price}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        )}

                        <div className="row py-3">
                            <div className="col-md-6">
                                <input
                                    type="number"
                                    placeholder="Net Quantity"
                                    id="margin-quantity"
                                    className="form-control p-3 input-shadow"
                                    required
                                    min="1"
                                    maxLength="7"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    disabled={!symbol}  // Disabled until symbol is selected
                                    style={{ backgroundColor: !quantity ? 'white' : '' }}
                                />
                            </div>

                            <div className="col-md-6">
                                <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1"
                                        checked={tradeType === "BUY"}
                                        onChange={handleTradeTypeChange}
                                        autoComplete="off" />
                                    <label className="btn btn-outline-primary fw-bold py-3" htmlFor="btnradio1">BUY</label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2"
                                        checked={tradeType === "SELL"}
                                        onChange={handleTradeTypeChange}
                                        autoComplete="off" />
                                    <label className="btn btn-outline-primary fw-bold py-3" htmlFor="btnradio2">SELL</label>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between gap-4">
                            <button type="submit" className="w-50 border rounded calculate" onClick={handleAddClick}                                                                    >Add</button>
                            <button type="reset" className="w-50 border rounded reset" onClick={handleResetClick}>Reset All</button>
                        </div>
                    </form>
                </div>

                <div className="col-6 ps-4">
                    <h5 className="card-header border rounded-top text-bg-dark p-3 charges-header">Combined Margin Requirements</h5>
                    <table className="table table-bordered">
                        <tbody className="margin-table">
                            {showTable ? (
                                <>
                                    <tr>
                                        <td>Span Margin</td>
                                        <td>₹{spanMargin}</td>
                                    </tr>
                                    <tr>
                                        <td>Exposure Margin</td>
                                        <td>₹{exposureMargin}</td>
                                    </tr>
                                    <tr className="fw-bold">
                                        <td className="netpl">Total</td>
                                        <td className="netpl">₹{spanMargin + exposureMargin}</td>
                                    </tr>
                                </>
                            ) : (
                                <>
                                    <tr className="border">
                                        <td>
                                            <em>Add entries to view results</em>
                                        </td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-12 mt-4">
                <table className="table table-bordered custom-width">
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

                    <tbody className="margin-table-body">
                        {marginEntries.length > 0 ? (
                            marginEntries.map((entry, index) => (
                                <tr key={index} className="text-center">
                                    <td>{entry.exchange}</td>
                                    <td>{entry.symbol}</td>
                                    <td>{entry.product}</td>
                                    <td>{entry.strikePrice}</td>
                                    <td>{entry.product}</td>
                                    <td>{entry.tradeType}</td>
                                    <td>{entry.optionType}</td>
                                    <td>{entry.quantity}</td>
                                    <td>₹{spanMargin || entry.spanMargin}</td>
                                    <td>₹{exposureMargin || entry.exposureMargin}</td>
                                    <td>₹{(spanMargin + exposureMargin) || entry.spanMargin + entry.exposureMargin}</td>
                                    <td>
                                        <button className="btn btn-light" onClick={() => handleDeleteClick(index)}>
                                            <svg width="40" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 14.5998H28.7132" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M27.7435 14.6004C27.7435 14.1862 27.4077 13.8504 26.9935 13.8504C26.5793 13.8504 26.2435 14.1862 26.2435 14.6004H27.7435ZM26.9935 27.1995L27.7433 27.2196C27.7434 27.2129 27.7435 27.2062 27.7435 27.1995H26.9935ZM25.0972 28.9994L25.1163 28.2496C25.1099 28.2495 25.1036 28.2494 25.0972 28.2494V28.9994ZM15.617 28.9994V28.2494C15.6107 28.2494 15.6043 28.2495 15.598 28.2496L15.617 28.9994ZM13.7207 27.1995H12.9707C12.9707 27.2062 12.9708 27.2129 12.971 27.2196L13.7207 27.1995ZM14.4707 14.6004C14.4707 14.1862 14.1349 13.8504 13.7207 13.8504C13.3065 13.8504 12.9707 14.1862 12.9707 14.6004H14.4707ZM15.8144 14.6004C15.8144 15.0146 16.1502 15.3504 16.5644 15.3504C16.9786 15.3504 17.3144 15.0146 17.3144 14.6004H15.8144ZM16.5644 12.8005L15.8147 12.7804C15.8145 12.7871 15.8144 12.7938 15.8144 12.8005H16.5644ZM18.4607 11.0006L18.4417 11.7504C18.448 11.7505 18.4544 11.7506 18.4607 11.7506V11.0006ZM22.2533 11.0006V11.7506C22.2596 11.7506 22.266 11.7505 22.2723 11.7504L22.2533 11.0006ZM24.1496 12.8005H24.8996C24.8996 12.7938 24.8995 12.7871 24.8993 12.7804L24.1496 12.8005ZM23.3996 14.6004C23.3996 15.0146 23.7354 15.3504 24.1496 15.3504C24.5638 15.3504 24.8996 15.0146 24.8996 14.6004H23.3996ZM26.2435 14.6004V27.1995H27.7435V14.6004H26.2435ZM26.2438 27.1794C26.2275 27.7861 25.723 28.265 25.1163 28.2496L25.0782 29.7492C26.5123 29.7856 27.7048 28.6536 27.7433 27.2196L26.2438 27.1794ZM25.0972 28.2494H15.617V29.7494H25.0972V28.2494ZM15.598 28.2496C14.9912 28.265 14.4867 27.7861 14.4704 27.1794L12.971 27.2196C13.0094 28.6536 14.202 29.7856 15.636 29.7492L15.598 28.2496ZM14.4707 27.1995V14.6004H12.9707V27.1995H14.4707ZM17.3144 14.6004V12.8005H15.8144V14.6004H17.3144ZM17.3141 12.8206C17.3304 12.2139 17.8349 11.735 18.4417 11.7504L18.4797 10.2508C17.0457 10.2144 15.8531 11.3464 15.8147 12.7804L17.3141 12.8206ZM18.4607 11.7506H22.2533V10.2506H18.4607V11.7506ZM22.2723 11.7504C22.8791 11.735 23.3836 12.2139 23.3999 12.8206L24.8993 12.7804C24.8609 11.3464 23.6683 10.2144 22.2343 10.2508L22.2723 11.7504ZM23.3996 12.8005V14.6004H24.8996V12.8005H23.3996Z" fill="#000000" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="border">
                                <td colSpan="12">
                                    <em>Add entries to view results</em>
                                </td>
                            </tr>
                        )}
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
