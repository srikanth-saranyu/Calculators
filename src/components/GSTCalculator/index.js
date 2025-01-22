import React, { useState } from "react";
import "../../assets/styles/gst.css"

export default function GSTCalculator() {

    const [selectedSlab, setSelectedSlab] = useState("5%");
    const [selectedButton, setSelectedButton] = useState("GST Exclusive");
    const [initialAmount, setInitialAmount] = useState(5000);

    const handleButtonClick = (buttonType) => {
        setSelectedButton(buttonType);
    };

    // Function to handle selecting a GST slab
    const handleSlabSelection = (slab) => {
        setSelectedSlab(slab); // Update the selected slab
    };

    const calculateGST = () => {
        if (!selectedSlab) return { gstAmount: 0, netPrice: 0, originalCost: 0 };

        const gstPercentage = parseFloat(selectedSlab.replace('%', '')) / 100;
        let gstAmount = 0;
        let netPrice = 0;
        let originalCost = 0;

        if (selectedButton === "GST Exclusive") {
            gstAmount = initialAmount * gstPercentage;
            netPrice = initialAmount + gstAmount;
            return { gstAmount, netPrice, originalCost: initialAmount, cgst: gstAmount / 2, sgst: gstAmount / 2 };
        }

        if (selectedButton === "GST Inclusive") {
            originalCost = initialAmount / (1 + gstPercentage);
            gstAmount = initialAmount - originalCost;
            netPrice = initialAmount;
            return { gstAmount, netPrice, originalCost, cgst: gstAmount / 2, sgst: gstAmount / 2 };
        }

        return { gstAmount, netPrice, originalCost, cgst: 0, sgst: 0 };
    };

    const { gstAmount, netPrice, originalCost, cgst, sgst } = calculateGST();

    return (
        <div className="container">
            <h2 className="custom-width">GST Calculator</h2>
            <p className="custom-width">A GST (Goods and Services Tax) calculator can help individuals calculate the GST amount on the products or services purchased.</p>
            <div className="row border rounded gratuity-child">
                <div className="gst-calc border-bottom">
                    <p className="fw-medium gst-text">Select GST Type</p>
                    <div className="container">
                        <div class="row d-flex justify-content-center">
                            <div class="col-12">
                                <div class="d-flex justify-content-center">
                                    <div
                                        className={`button ${selectedButton === "GST Exclusive" ? "selected" : "non-selected"} d-flex col-5 align-items-center justify-content-center p-3 border bg-light rounded-start`}
                                        onClick={() => handleButtonClick("GST Exclusive")}
                                    >
                                        <p class="d-none">1</p>
                                        <span>GST Exclusive</span>
                                        <i class="info-icon ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="GST Exclusive: Total amount of the product with GST">
                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="bi:info-circle" clip-path="url(#clip0_405_1563)">
                                                    <g id="Group">
                                                        <path id="Vector" d="M7.35418 14.3C5.68331 14.3 4.08088 13.6362 2.8994 12.4548C1.71792 11.2733 1.05417 9.67085 1.05417 7.99999C1.05417 6.32912 1.71792 4.72669 2.8994 3.54522C4.08088 2.36374 5.68331 1.69999 7.35418 1.69999C9.02504 1.69999 10.6275 2.36374 11.8089 3.54522C12.9904 4.72669 13.6542 6.32912 13.6542 7.99999C13.6542 9.67085 12.9904 11.2733 11.8089 12.4548C10.6275 13.6362 9.02504 14.3 7.35418 14.3ZM7.35418 15.2C9.26373 15.2 11.0951 14.4414 12.4453 13.0912C13.7956 11.7409 14.5542 9.90955 14.5542 7.99999C14.5542 6.09043 13.7956 4.25908 12.4453 2.90882C11.0951 1.55856 9.26373 0.799988 7.35418 0.799988C5.44462 0.799988 3.61327 1.55856 2.26301 2.90882C0.912744 4.25908 0.154175 6.09043 0.154175 7.99999C0.154175 9.90955 0.912744 11.7409 2.26301 13.0912C3.61327 14.4414 5.44462 15.2 7.35418 15.2Z" fill="#777D87" />
                                                        <path id="Vector_2" d="M8.19123 6.72921L6.13023 6.98751L6.05643 7.32951L6.46143 7.40421C6.72603 7.46721 6.77823 7.56261 6.72063 7.82631L6.05643 10.9475C5.88183 11.7548 6.15093 12.1346 6.78363 12.1346C7.27413 12.1346 7.84383 11.9078 8.10213 11.5964L8.18133 11.222C8.00133 11.3804 7.73853 11.4434 7.56393 11.4434C7.31643 11.4434 7.22643 11.2697 7.29033 10.9637L8.19123 6.72921ZM8.25423 4.85001C8.25423 5.08871 8.15941 5.31763 7.99063 5.48641C7.82184 5.65519 7.59292 5.75001 7.35423 5.75001C7.11553 5.75001 6.88662 5.65519 6.71783 5.48641C6.54905 5.31763 6.45423 5.08871 6.45423 4.85001C6.45423 4.61132 6.54905 4.3824 6.71783 4.21362C6.88662 4.04483 7.11553 3.95001 7.35423 3.95001C7.59292 3.95001 7.82184 4.04483 7.99063 4.21362C8.15941 4.3824 8.25423 4.61132 8.25423 4.85001Z" fill="#777D87" />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_405_1563">
                                                        <rect width="14.4" height="14.4" fill="white" transform="translate(0.154175 0.799988)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </i>
                                    </div>
                                    <div
                                        className={`button ${selectedButton === "GST Inclusive" ? "selected" : "non-selected"} d-flex col-5 align-items-center justify-content-center p-3 border bg-light rounded-end`}
                                        onClick={() => handleButtonClick("GST Inclusive")}
                                    >
                                        <p class="d-none">2</p>
                                        <span>GST Inclusive</span>
                                        <i class="info-icon ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="GST Inclusive: Amount of the product without GST">
                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="bi:info-circle" clip-path="url(#clip0_405_1563)">
                                                    <g id="Group">
                                                        <path id="Vector" d="M7.35418 14.3C5.68331 14.3 4.08088 13.6362 2.8994 12.4548C1.71792 11.2733 1.05417 9.67085 1.05417 7.99999C1.05417 6.32912 1.71792 4.72669 2.8994 3.54522C4.08088 2.36374 5.68331 1.69999 7.35418 1.69999C9.02504 1.69999 10.6275 2.36374 11.8089 3.54522C12.9904 4.72669 13.6542 6.32912 13.6542 7.99999C13.6542 9.67085 12.9904 11.2733 11.8089 12.4548C10.6275 13.6362 9.02504 14.3 7.35418 14.3ZM7.35418 15.2C9.26373 15.2 11.0951 14.4414 12.4453 13.0912C13.7956 11.7409 14.5542 9.90955 14.5542 7.99999C14.5542 6.09043 13.7956 4.25908 12.4453 2.90882C11.0951 1.55856 9.26373 0.799988 7.35418 0.799988C5.44462 0.799988 3.61327 1.55856 2.26301 2.90882C0.912744 4.25908 0.154175 6.09043 0.154175 7.99999C0.154175 9.90955 0.912744 11.7409 2.26301 13.0912C3.61327 14.4414 5.44462 15.2 7.35418 15.2Z" fill="#777D87" />
                                                        <path id="Vector_2" d="M8.19123 6.72921L6.13023 6.98751L6.05643 7.32951L6.46143 7.40421C6.72603 7.46721 6.77823 7.56261 6.72063 7.82631L6.05643 10.9475C5.88183 11.7548 6.15093 12.1346 6.78363 12.1346C7.27413 12.1346 7.84383 11.9078 8.10213 11.5964L8.18133 11.222C8.00133 11.3804 7.73853 11.4434 7.56393 11.4434C7.31643 11.4434 7.22643 11.2697 7.29033 10.9637L8.19123 6.72921ZM8.25423 4.85001C8.25423 5.08871 8.15941 5.31763 7.99063 5.48641C7.82184 5.65519 7.59292 5.75001 7.35423 5.75001C7.11553 5.75001 6.88662 5.65519 6.71783 5.48641C6.54905 5.31763 6.45423 5.08871 6.45423 4.85001C6.45423 4.61132 6.54905 4.3824 6.71783 4.21362C6.88662 4.04483 7.11553 3.95001 7.35423 3.95001C7.59292 3.95001 7.82184 4.04483 7.99063 4.21362C8.15941 4.3824 8.25423 4.61132 8.25423 4.85001Z" fill="#777D87" />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_405_1563">
                                                        <rect width="14.4" height="14.4" fill="white" transform="translate(0.154175 0.799988)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 mt-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <label className="text-muted">Initial Amount (Cost of Good/Service)</label>
                                <div className="d-flex align-items-baseline border-bottom border-1 mb-1">
                                    <p className="d-flex align-items-baseline mb-0">
                                        <span className="fs-3 text-dark">₹</span>
                                        <span className="fs-3 text ms-1">{initialAmount}</span>
                                    </p>
                                </div>
                            </div>
                            <input type="range" className="gst-slider" min="5000" max="500000" step="1000"
                                value={initialAmount}
                                onChange={(e) => setInitialAmount(e.target.value)}
                            />
                            <div className="d-flex justify-content-between">
                                <p className="text-start text-muted">₹5000</p>
                                <p className="text-end text-muted">₹500000</p>
                            </div>
                        </div>

                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <label className="fw-medium gst-text">GST Slab</label>
                                    <div className="d-flex align-items-center mt-3 text-muted fw-medium">
                                        {/* Box for each GST slab */}
                                        {["3%", "5%", "12%", "18%", "28%"].map((slab) => (
                                            <div
                                                key={slab}
                                                className={`box p-3 border rounded me-2 ${selectedSlab === slab ? 'bg-light border-1 border-primary text-primary' : 'bg-light text-muted'}`}
                                                onClick={() => handleSlabSelection(slab)}
                                            >
                                                {slab}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container gst-container mt-5">
                    <div className="row border rounded gst-container-child">
                        <div className="col-md-4 p-4 border-end">
                            <div className="text-center">
                                <div className="symbol"></div>
                                <p className="result-type">Cost of Good/Service</p>
                                <p className="gst-amount">
                                    <span>₹</span>
                                    <span className="total-cost-service">{Math.round(originalCost).toLocaleString('en-IN')}</span>
                                </p>

                            </div>
                        </div>

                        <div className="col-md-4 p-4 border-end ">
                            <div className="text-center">
                                <div className="symbol equal-symbol"></div>
                                <p className="result-type">Total GST*</p>
                                <p className="gst-amount">
                                    <span>₹</span>
                                    <span className="total-gst">{Math.round(gstAmount).toLocaleString('en-IN')}</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 p-4">
                            <div className="text-center">
                                <p className="result-type">Total Selling Price</p>
                                <p className="gst-amount">
                                    <span>₹</span>
                                    <span className="total-selling-price">{Math.round(netPrice).toLocaleString('en-IN')}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="gst-info fw-medium gst-text mt-3">*Total GST: <b className="bold-txt" id="cgst">₹{Math.round(cgst).toLocaleString('en-IN')}</b> (CGST) + <b className="bold-txt" id="sgst">₹{Math.round(sgst).toLocaleString('en-IN')}</b> (SGST)</p>
                </div>

            </div>

            <div className="container custom-width">
                <h2 className="mc-desc-title">What is GST?</h2>
                <div className="mc-desc-para">
                    <p>GST is a comprehensive indirect tax introduced in India on July 1, 2017. Before GST, there were multiple indirect taxes like excise duty, VAT, service tax, etc., levied and collected by the central and state governments, which were replaced by the introduction of GST.</p>
                </div>
                <p>There are four segments under GST:</p>
                <ul>
                    <li><strong>Central Goods and Services Tax (CGST) </strong>- Collected by the central government.</li>
                    <li><strong>State Goods and Services Tax (SGST) </strong>Collected by the state government.</li>
                    <li><strong>Union Territory Goods and Services Tax (UTGST) </strong>- Collected by the Union Territory government.</li>
                    <li><strong>Integrated Goods and Services Tax (IGST) </strong>- Collected by the central government. It is charged for the interstate supply of goods and services where the location of the supplier is different from where the goods or services are supplied. IGST = CGST+SGST.</li>
                </ul>

                <h2 className="mc-desc-title">What Is a GST Calculator?</h2>
                <p>Many products or services in India are taxed under the GST. Hence, it is essential to calculate the GST amount that will be levied on your purchase. To calculate the GST amount, you can use an online GST calculator.</p>
                <h2 className="mc-desc-title">Formula To Determine GST</h2>
                <p>While calculating the GST on a product or service, remember that there are two aspects here:</p>
                <ul>
                    <li>Adding GST to the price - to find the GST amount and total purchase price.</li>
                    <li>Removing GST from the total purchase price - to find the original price of the product/service and GST amount.</li>
                </ul>
                <p>To add GST, the formula used is,</p>
                <p><strong>GST amount = Price * GST%</strong></p>
                <p><strong>Net price = Price of the product/service + GST amount</strong></p>
                <p>To remove GST from the net price of a product/service, the formula used is,</p>
                <p><strong>{`GST= Net price – [Net price x{100/(100+GST%)}]`}</strong></p>
                <p><strong>Original cost = Net price - GST</strong></p>

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