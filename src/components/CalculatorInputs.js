import React from 'react';

const CalculatorInputs = ({
    amountLabel,
    amountValue,
    onAmountChange,
    durationLabel,
    durationValue,
    onDurationChange,
    rateLabel,
    rateValue,
    onRateChange,
    minDuration = 1,
    maxDuration = 30,
    minRate = 1,
    maxRate = 30,
}) => {

    // Helper function to handle only numeric input for the amount field
    const handleAmountChange = (e) => {
        const value = e.target.value;
        // Allow only numeric input (with optional decimal point)
        if (/^\d*\.?\d*$/.test(value)) {
            onAmountChange(value);
        }
    };

    // function formatNumber(e) {
    //     // Remove formatting (commas) for raw value
    //     console.log(e.target.value)
    //     const rawValue = e.target.value.replace(/,/g, "");
  
    //     // If the input is not a valid number, do nothing
    //     if (isNaN(rawValue) || rawValue === "") {
    //       e.target.value = "";
    //       return;
    //     }
  
    //     // Format the number with commas
    //     const formattedValue = parseFloat(rawValue).toLocaleString("en-IN");
    //     e.target.value = formattedValue;
    //   }


    return (
        <div className="col-5">
            <h5 className="pt-4 fw-bold">Returns Estimator</h5>
            <p className="medium text-muted">Estimation is based on the past performance</p>
            <div className="border border-2 border-primary rounded input-field">
                <label className="d-block text-center">{amountLabel}</label>
                <div className="ms-5 d-flex justify-content-center align-items-start">
                    <span className="fs-6">₹</span>
                    <input
                        type="text"
                        className="input-number fs-2 bg-transparent border-0 text-dark text-start"
                        placeholder="0"
                        value={amountValue}
                        onChange={handleAmountChange}
                        // onInput={formatNumber}
                        style={{ width: "8ch" }}
                    />
                </div>
            </div>


            <div className="w-100 mt-4">
                <div className="d-flex justify-content-between align-items-center">
                    <label className="text-dark">{durationLabel}</label>
                    <div className="d-flex align-items-baseline border-bottom border-1 pb-1">
                        <p className="d-flex align-items-baseline mb-0">
                            <span className="fs-3 text-dark fw-bold">{durationValue}</span>
                            <span className="fs-6 text ms-3">Yrs</span>
                        </p>
                    </div>
                </div>
                <input
                    type="range"
                    className="slider"
                    min={minDuration}
                    max={maxDuration}
                    step="1"
                    value={durationValue}
                    onChange={(e) => onDurationChange(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between">
                    <p className="text-start text-muted">{minDuration} Yr</p>
                    <p className="text-end text-muted">{maxDuration} Yrs</p>
                </div>
            </div>


            <div className="w-100">
                <div className="d-flex justify-content-between align-items-center">
                    <label className="text-dark">{rateLabel}</label>
                    <div className="d-flex align-items-baseline border-bottom border-1 pb-1">
                        <p className="d-flex align-items-baseline mb-0">
                            <span className="fs-3 text-dark fw-bold">{rateValue}</span>
                            <span className="fs-6 text ms-3">%</span>
                        </p>
                    </div>
                </div>
                <input
                    type="range"
                    className="slider"
                    min={minRate}
                    max={maxRate}
                    step="1"
                    value={rateValue}
                    onChange={(e) => onRateChange(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between">
                    <p className="text-start text-muted">{minRate}%</p>
                    <p className="text-end text-muted">{maxRate}%</p>
                </div>
            </div>
        </div>
    );
};

export default CalculatorInputs;