import React, { useState, useEffect } from "react";
import "../../assets/styles/ebitda.css"

export default function GratuityCalculator() {

    const [salary, setSalary] = useState(10000);
    const [yearsOfService, setYearsOfService] = useState(5);
    const [gratuity, setGratuity] = useState(0);
    const [tds, setTds] = useState(0);
    const [averageTaxRate, setAverageTaxRate] = useState(0);

    // Function to format number to Indian format
    function formatNumber(value) {
        if (isNaN(value) || value === "") {
            return 0;
        }
        const formattedValue = parseFloat(value).toLocaleString("en-IN");
        return formattedValue;
    }

    // Helper function to handle only numeric input for the amount field
    const handleAmountChange = (e, setterFunction) => {
        const inputValue = e.target.value.replace(/,/g, "");  // Remove any existing commas
        // Allow only numeric input (with optional decimal point)
        if (/^\d*\.?\d*$/.test(inputValue)) {
            setterFunction(Number(inputValue));
        }
    };

    // Function to calculate Gratuity
    const calculateGratuity = () => {
        if (salary > 0 && yearsOfService >= 5) {
            const gratuityAmount = (salary * yearsOfService * 15) / 26;
            setGratuity(gratuityAmount);
        } else {
            setGratuity(0);
        }
    };

    // Function to calculate TDS based on given salary and tax rates
    const calculateTds = () => {
        if (salary > 0) {
            const annualSalary = salary * 12;
            const incomeTax = calculateIncomeTax(annualSalary);
            const educationCess = (incomeTax * 0.04);
            const totalTax = incomeTax + educationCess;
            const monthlyTds = totalTax / 12;
            const averageRate = (totalTax / annualSalary) * 100;

            setTds(monthlyTds);
            setAverageTaxRate(averageRate.toFixed(2));
        } else {
            setTds(0);
            setAverageTaxRate(0);
        }
    };

    // Function to calculate income tax based on the salary (simple tax slab for demonstration)
    const calculateIncomeTax = (annualSalary) => {
        let tax = 0;

        if (annualSalary <= 250000) {
            tax = 0; // No tax for income up to ₹2.5 lakh
        } else if (annualSalary <= 500000) {
            tax = (annualSalary - 250000) * 0.05;
        } else if (annualSalary <= 1000000) {
            tax = (annualSalary - 500000) * 0.2 + 12500;
        } else {
            tax = (annualSalary - 1000000) * 0.3 + 125000;
        }

        return tax;
    };

    // Automatically calculate gratuity and TDS whenever salary or yearsOfService changes
    useEffect(() => {
        calculateGratuity();
        calculateTds();
        // eslint-disable-next-line
    }, [salary, yearsOfService]);
    // console.log(tds)
    // console.log(averageTaxRate)

    return (
        <div className="container">
            <h2 className="custom-width">Gratuity Calculator</h2>
            <p className="custom-width">Gratuity is one of the key monetary benefits offered by an employer to an employee. Using a gratuity calculator, you can calculate the gratuity you may receive from your employer.</p>
            <div className="row border rounded gratuity-child">
                <form className="row d-flex justify-content-between gratuity-form border-bottom ms-0">
                    <div className="col-md-6">
                        <label htmlFor="gratuity-sales" className="text-muted">Monthly Salary (Basic + Dearness allowance)</label>
                        <input
                            type="text"
                            placeholder="0"
                            id="gratuity-sales"
                            className="form-control p-3 input-shadow"
                            required
                            min="1"
                            maxLength="10"
                            value={formatNumber(salary)}
                            onChange={(e) => handleAmountChange(e, setSalary)}
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="gratuity-raw" className="text-muted">Years of Service (Minimum 5 Years)</label>
                        <input
                            type="text"
                            placeholder="0"
                            id="gratuity-raw"
                            className="form-control p-3 input-shadow"
                            required
                            min="0"
                            maxLength="3"
                            value={formatNumber(yearsOfService)}
                            onChange={(e) => handleAmountChange(e, setYearsOfService)}
                        />
                    </div>
                </form>

                <div className="container gratuity-container d-flex justify-content-center align-items-center border rounded p-4">
                    <div className="p-3 text-center">
                        <p className="m-0">Gratuity amount</p>
                        <span className="fs-4 fw-bold">₹{Math.round(gratuity).toLocaleString('en-IN')}</span>
                    </div>
                </div>
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