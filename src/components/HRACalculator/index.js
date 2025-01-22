import React, { useState } from "react";
import "../../assets/styles/ebitda.css"
import HRAChart from "./chart"

export default function HRACalculator() {

    const [basicSalary, setBasicSalary] = useState(750000);
    const [dearnessAllowance, setDearnessAllowance] = useState(0);
    const [hraReceived, setHraReceived] = useState(250000);
    const [rentPaid, setRentPaid] = useState(180000);
    const [isMetro, setIsMetro] = useState(true);
    const [taxableHRA, setTaxableHRA] = useState(145000);
    const [exemptedHRA, setExemptedHRA] = useState(105000);

    const handleCalculate = (e) => {
        e.preventDefault();

        // Calculate the components for HRA exemption
        const A = hraReceived;
        const B = isMetro ? (0.5 * basicSalary) : (0.4 * basicSalary);
        const C = rentPaid - 0.1 * (basicSalary + dearnessAllowance);

        // HRA Exemption is the minimum of A, B, and C
        const exemption = Math.min(A, B, C);
        setExemptedHRA(exemption);

        // Taxable HRA is the received HRA minus the exemption
        const taxable = hraReceived - exemption;
        setTaxableHRA(taxable);
    };

    return (
        <div className="container">
            <h3 className="custom-width">HRA Calculator</h3>
            <p className="custom-width">The House Rent Allowance (HRA) calculator helps estimate the tax liability and exemption amount on your housing allowance, making it easier to manage your finances.</p>
            <div className="row border rounded custom-width">
                <div className="col-5 p-4">
                    <form onSubmit={handleCalculate} className="container">
                        <div className="mb-2">
                            <label htmlFor="basic-salary" className="form-child">Basic Salary (P.A)</label>
                            <input
                                type="number"
                                placeholder="0"
                                id="basic-salary"
                                className="form-control p-3"
                                required
                                min="1"
                                maxLength="7"
                                value={basicSalary}
                                onChange={(e) => setBasicSalary(Number(e.target.value))}

                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="dearness-allowance" className="form-child">Dearness allowance (P.A)</label>
                            <input
                                type="number"
                                placeholder="0"
                                id="dearness-allowance"
                                className="form-control p-3"
                                required
                                min="0"
                                maxLength="7"
                                value={dearnessAllowance}
                                onChange={(e) => setDearnessAllowance(Number(e.target.value))}

                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="hra-received" className="form-child">HRA received (P.A)</label>
                            <input
                                type="number"
                                placeholder="0"
                                id="hra-received"
                                className="form-control p-3"
                                required
                                min="1"
                                maxLength="7"
                                value={hraReceived}
                                onChange={(e) => setHraReceived(Number(e.target.value))}

                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="rent-paid" className="form-child">Total Rent Paid (P.A)</label>
                            <input
                                type="number"
                                placeholder="0"
                                id="rent-paid"
                                className="form-control p-3"
                                required
                                min="1"
                                maxLength="7"
                                value={rentPaid}
                                onChange={(e) => setRentPaid(Number(e.target.value))}

                            />
                        </div>
                        <label htmlFor="is-metro" className="form-child">Do you live in a metro city</label>
                        <div className="form-check form-check-inline p-3 ms-2">
                            <input className="form-check-input" type="radio" name="is-metro"
                                id="metro-yes"
                                checked={isMetro}
                                onChange={() => setIsMetro(true)} />
                            <label className="form-check-label form-child" for="metro-yes">Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="is-metro"
                                id="metro-no"
                                checked={!isMetro}
                                onChange={() => setIsMetro(false)} />
                            <label className="form-check-label form-child" for="metro-no">No</label>
                        </div>
                        <div className=" d-grid gap-2 col-12 mx-auto">
                            <button type="submit" className="border rounded calculate">Calculate</button>
                        </div>
                    </form>
                </div>

                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p className="text-dark mb-0">Taxable HRA</p>
                        <span className="amount">₹{taxableHRA.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <HRAChart taxableHRA={taxableHRA} exemptedHRA={exemptedHRA} />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="text-muted ms-2 mb-0">Taxable HRA</p>
                                <p className="fs-5 fw-semibold ms-2">₹{taxableHRA.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="border-start border-5 border-returnsBlue mt-2">
                                <p className="text-muted ms-2 mb-0">Exempted HRA</p>
                                <p className="fs-5 fw-semibold ms-2">₹{exemptedHRA.toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>

            <div className="container custom-width">
                <h2 className="mc-desc-title">What Is HRA?</h2>
                <div className="mc-desc-para">
                    <p>HRA is an allowance employers provide to employees to meet their rental expenses if they live in rented accommodation. The purpose of the HRA is to assist employees in coping with the rising cost of living, particularly in cities where housing prices have increased significantly.</p>
                    <p>The HRA amount is usually a percentage of the employee's basic salary and is paid as a part of their CTC (Cost to the Company). The actual percentage may vary depending on the organisation's policies, but generally, it is around 40-50% of the basic salary. The HRA received by employees is partially or fully exempt from income tax, subject to certain conditions.</p>
                </div>
                <h2 className="mc-desc-title">How Is HRA Exemption Calculated?</h2>
                <p>While calculating the HRA, you need to consider several factors as follows:</p>
                <ul>
                    <li>Determine the HRA received: Check your pay slip or employment contract to find the exact amount of HRA received from your employer.</li>
                    <li>Determine the rent paid: Calculate your total rent for the accommodation in a financial year (April to March).</li>
                </ul>
                <p>The formula for HRA calculation is:</p>
                <p><strong>HRA Exemption = Minimum of (A, B, C)</strong></p>
                <p>After calculating the HRA exemption, the remaining HRA, i.e., HRA received - HRA exemption is added to your taxable income and is subject to income tax as per the tax slab you fall under.</p>
                <h2 className="mc-desc-title">How To Use the HRA Calculator?</h2>
                <p>Using an online HRA calculator on Angel One is typically a simple and straightforward process. Here are the steps to follow:</p>
                <ul>
                    <li>Open the HRA Calculator on Angel One</li>
                    <li>Enter your annual basic salary, Dearness Allowance, and HRA you get as per your salary slip</li>
                    <li>Enter the actual rent paid for the entire financial year and specify whether you live in a metro city.</li>
                </ul>
                <p>That’s it! The HRA Calculator on Angel One will determine the exempted HRA and Taxable HRA in seconds.</p>
                <p>Let us consider an example to understand the usage of the HRA calculator better. Suppose you live in Mumbai and your basic annual salary is ₹2,70,000, your HRA received is ₹1,00,000, there is no dearness allowance, and the rent paid in the financial year is ₹1,20,000. Enter the same details in the online calculator.</p>
                <p>The calculator computes the values and determines that the exempted HRA is ₹93,000 and the taxable HRA is ₹7,000.</p>

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

