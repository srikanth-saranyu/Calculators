import React, { useState } from "react";
import "../../assets/styles/gst.css"

export default function TDSCalculator() {


    const [paymentAmount, setPaymentAmount] = useState(100000);
    const [natureOfPayment, setNatureOfPayment] = useState("Section 192A - Payment of accumulated PF balance to an employee");
    const [recipientType, setRecipientType] = useState("individual");
    const [panAvailable, setPanAvailable] = useState("yes");
    const [tdsAmount, setTdsAmount] = useState(null);
    const [displayValue, setDisplayValue] = useState(formatNumber(paymentAmount));

    // Function to handle calculation
    const calculateTDS = () => {
        let tdsRate = 0;

        if (natureOfPayment === "Section 192A - Payment of accumulated PF balance to an employee") {
            // For Section 192A (Example: 10% tax rate)
            tdsRate += 0.10;
        } else if (natureOfPayment === "Section 193 - Interest on Securities") {
            // For Section 193 (Example: 10% tax rate)
            tdsRate = 0.10;
        } else if (natureOfPayment === "Section 194 - Dividend other than the Dividend as referred to in & Section 115-O") {
            // For Section 194 (Example: 10% tax rate)
            tdsRate = 0.10;
        } else if (natureOfPayment === "Section 194A - Interest other than Banks") {
            // For Section 194A (Example: 10% tax rate)
            tdsRate = 0.10;
        }

        // Compute the basic TDS
        let baseTDS = paymentAmount * tdsRate;
        // Applying cess (4% education cess)
        // let totalTDS = baseTDS * 1.04; // Adding 4% education cess
        // Set the result state
        setTdsAmount(baseTDS);
    };

    // Format number function
    function formatNumber(value) {
        if (isNaN(value) || value === "") {
            return 0;
        }
        const formattedValue = parseFloat(value).toLocaleString("en-IN");
        return formattedValue;
    }

    // Handle amount input change
    const handleAmountChange = (e) => {
        const inputValue = e.target.value.replace(/,/g, ""); // Remove commas
        // Allow only numeric input (with optional decimal point)
        if (/^\d*\.?\d*$/.test(inputValue)) {
            setPaymentAmount(inputValue);  // Update raw value without formatting
            setDisplayValue(formatNumber(inputValue)); // Set the formatted value
        }
    };


    return (
        <div className="container">
            <h2 className="custom-width">TDS Calculator</h2>
            <p className="custom-width">A (Tax Deducted at Source) TDS calculator determines the amount of tax to be deducted at source from various income streams in India, ensuring accurate tax compliance.</p>
            <div className="row border rounded tds-parent">
                <div className="p-4 border-bottom tds-child">
                    <div className="border border-2 border-primary rounded p-1">
                        <label className="d-block text-center">Amount of Payment</label>
                        <div className="ms-5 d-flex justify-content-center align-items-center">
                            <span className="fs-5">₹</span>
                            <input type="text" className="input-number fs-1 bg-transparent border-0 text-dark text-start"
                                placeholder="0"
                                maxLength={10}
                                value={displayValue}
                                onChange={handleAmountChange}
                                style={{ width: "10ch" }} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="nature-of-payment" className="mt-4 form-label text-muted">Nature of Payment / Section</label>
                        <select
                            id="nature-of-payment"
                            className="form-select p-3 input-shadow"
                            required
                            // value={exchange}
                            onChange={(e) => setNatureOfPayment(e.target.value)}
                        >
                            <option value="Section 192A - Payment of accumulated PF balance to an employee">
                                Section 192A - Payment of accumulated PF balance to an employee
                            </option>
                            <option value="Section 193 - Interest on Securities">
                                Section 193 - Interest on Securities
                            </option>
                            <option value="Section 194 - Dividend other than the Dividend as referred to in & Section 115-O">
                                Section 194 - Dividend other than the Dividend as referred to in & Section 115-O
                            </option>
                            <option value="Section 194A - Interest other than Banks">
                                Section 194A - Interest other than Banks
                            </option>
                        </select>

                    </div>

                    <div className="mb-3 mt-3">
                        <p className="text-muted">Pan of recipient available</p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="pan_of_receipe" value="yes" id="panYes"
                                checked={panAvailable === "yes"}
                                onChange={() => setPanAvailable("yes")} />
                            <label className="form-check-label" htmlFor="panYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="pan_of_receipe" value="no" id="panNo"
                                checked={panAvailable === "no"}
                                onChange={() => setPanAvailable("no")} />
                            <label className="form-check-label" htmlFor="panNo">No</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <p className="text-muted">Recipient Type</p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="recipe-type" id="individual" value="individual"
                                checked={recipientType === "individual"}
                                onChange={() => setRecipientType("individual")} />
                            <label className="form-check-label" htmlFor="individual">Individual / HUF / Sole Proprietor</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="recipe-type" id="others" value="other"
                                checked={recipientType === "other"}
                                onChange={() => setRecipientType("other")} />
                            <label className="form-check-label" htmlFor="others">Others</label>
                        </div>
                    </div>
                </div>


                <div className="container d-flex justify-content-center py-4">
                    <div className="p-4">
                        <button type="submit" className="border rounded calculate py-2 px-5" onClick={calculateTDS}>Calculate TDS</button>
                    </div>
                </div>

                {/* Conditionally render the TDS result container */}
                {tdsAmount !== null && (
                    <div className="container tds-container d-flex justify-content-center align-items-center border rounded py-4">
                        <div className="p-4 text-center">
                            <p className="m-0 text-dark p-2">Total Applicable TDS</p>
                            <span className="fs-3 fw-bold">₹ {tdsAmount}</span>
                            {panAvailable === 'no' && (
                                <p>(In case Pan is not available TDS will be applicable at higher rates)</p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="container custom-width">
                <h2 className="mc-desc-title">What is TDS?</h2>
                <div className="mc-desc-para">
                    <p>TDS, or Tax Deducted at Source, is a method where taxes are deducted from the source of income itself, as the income is earned or paid. This system applies to various payments such as salaries, commissions, rent, and interest, among others. The rate at which TDS is deducted varies depending on the nature of the payment. For example, salary payments are subject to TDS at the applicable income tax rate of the individual, while rent payments might see TDS deductions ranging from 2% to 10% based on the transaction details. Understanding these variations is crucial for accurate tax planning and compliance.</p>
                </div>
                <h2 className="mc-desc-title">What Is a TDS Calculator?</h2>
                <p>A Tax Deducted at Source (TDS) calculator is a tool used in India to figure out how much tax would be deducted from various sources of income, including salary, interest, rent, etc., at the source. Instead of waiting until the end of the fiscal year, the TDS system enables the government to collect taxes as they are generated.</p>
                <p>TDS, or Tax Deducted at Source, is a form of advance tax that applies to the following income types:</p>
                <ul>
                    <li>Salaries</li>
                    <li>Interest payments by bank</li>
                    <li>Commission payment</li>
                    <li>Rent payment</li>
                    <li>Consultation fees</li>
                    <li>Professional fees</li>
                </ul>
                <p>Here is an example to help you understand better:</p>
                <p>Suppose your current monthly salary is ₹1,00,000, or ₹12,00,000 annually. The TDS calculated based on the ongoing income tax slab under Section 192 is ₹142,500. A 4% education and higher education cess is added to the calculation, and the total payable tax comes to ₹1,48,200.</p>
                <p>The average tax rate would be ₹(148,500/12,00,000) *100 = 12.35%. So, the TDS deducted from your monthly salary is ₹12,350.</p>

                <h2 className="mc-desc-title">How Does the TDS Calculator Work?</h2>
                <p>Angel One’s online TDS calculator calculates TDS obligations based on the input provided by the user. It helps you learn the tax deducted from the income you are receiving and how much you are required to deduct while making any payments. An online TDS calculator automates the TDS calculation process while eliminating the chances of human error.</p>
                <p>It is important to note that there is no fixed rate for TDS. It varies depending on the nature of the payment. In the case of salary payments, the TDS is usually deducted as per the applicable income tax rate. However, if you are making a rent payment, the TDS can be from 2-10%, depending on the nature of the transaction and tax rules. Similarly, if you’re receiving interest payments, you are liable for 10%-20%, depending on the different scenarios. It makes the TDS calculation even more complex. This is where a TDS calculator comes in handy. TDS interest calculator has tax rules built in for hassle-free calculation. You’ll have to enter basic information such as the transaction amount, recipient type, and payment nature into the calculator to instantly calculate the TDS.</p>
                <h2 className="mc-desc-title">What is TDS calculator Formula?</h2>
                <p>Angel One’s TDS calculator formula is based on the current tax rates. Depending on the variables you enter, the calculator will compute the tax amount based on the tax rules.</p>
                <p><strong>Rate of average income tax = Income tax payable (computed with slab rate)/Estimated income for the financial year.</strong></p>
                <p>To ensure proper TDS calculation and compliance with tax regulations, remember that while TDS calculators are useful tools for tax compliance, it's crucial to speak with a tax expert or refer to the official guidelines issued by the Income Tax Department. Keeping up with changes to tax rules and rates is essential.</p>

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