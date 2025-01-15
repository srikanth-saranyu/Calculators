import React, { useState } from "react";

function formatNumber(value) {
  if (isNaN(value) || value === "") {
    return 0;
  }
  const formattedValue = parseFloat(value).toLocaleString("en-IN");
  return formattedValue;
}

const CalculatorInputs = ({
  amountLabel,
  //   amountValue,
  onAmountChange,
  initialInvestment,
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
  const [displayValue, setDisplayValue] = useState(
    formatNumber(initialInvestment)
  );
  // Helper function to handle only numeric input for the amount field
  const handleAmountChange = (e) => {
    const inputValue = e.target.value.replace(/,/g, "");
    // Allow only numeric input (with optional decimal point)
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setDisplayValue(formatNumber(inputValue));
      onAmountChange(Number(inputValue));
    }
  };

  return (
    <div className="col-5">
      <h5 className="pt-4 fw-bold">Returns Estimator</h5>
      <p className="medium text-muted">
        Estimation is based on the past performance
      </p>
      <div className="border border-2 border-primary rounded input-field">
        <label className="d-block text-center">{amountLabel}</label>
        <div className="d-flex justify-content-center align-items-center ms-5">
          <span className="fs-6">₹</span>
          <input
            type="text"
            className="input-number fs-2 bg-transparent border-0 text-dark text-start ps-2"
            placeholder="0"
            maxLength={10}
            value={displayValue}
            onChange={handleAmountChange}
            style={{ width: "10ch" }}
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
