import "../../assets/styles/sip.css";
import DoughnutChart from "../DoughnutChart";
import React, { useState, useEffect } from "react";
import CalculatorInputs from "../CalculatorInputs";

export default function SIPCalculator() {
  const initialInvestment = 5000;
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [investmentPeriod, setInvestmentPeriod] = useState(5);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);

  const calculateSIP = () => {
    const months = investmentPeriod * 12;
    const rate = expectedReturn / 100 / 12;

    const futureValue =
      monthlyInvestment *
      ((Math.pow(1 + rate, months) - 1) / rate) *
      (1 + rate);
    return futureValue;
  };

  useEffect(() => {
    const totalInvested = monthlyInvestment * investmentPeriod * 12;
    setInvestedAmount(totalInvested);

    const futureValue = calculateSIP();
    const returns = futureValue - totalInvested;
    setEstimatedReturns(returns);
    // eslint-disable-next-line
  }, [monthlyInvestment, investmentPeriod, expectedReturn]);

  return (
    <div className="container">
      <h3 className="custom-width">SIP Calculator</h3>
      <p className="custom-width">
        The SIP calculator helps estimate the potential growth of your
        Systematic Investment Plan (SIP) investment over your chosen time frame.
        SIP is a convenient method to save for your long-term financial goals.
      </p>
      <div className="row border rounded custom-width">
        <CalculatorInputs
          amountLabel="ENTER AMOUNT"
          //   amountValue={monthlyInvestment}
          initialInvestment={initialInvestment}
          onAmountChange={setMonthlyInvestment}
          durationLabel="Select Duration"
          durationValue={investmentPeriod}
          onDurationChange={setInvestmentPeriod}
          rateLabel="Expected Rate of Return"
          rateValue={expectedReturn}
          onRateChange={setExpectedReturn}
          minDuration={1}
          maxDuration={30}
          minRate={1}
          maxRate={30}
        />

        <div className="col-7 d-flex flex-column border-start">
          <div className="text-center mt-4">
            <p className="text-dark">
              The total value of your investment after
              <b>
                <span>&nbsp;{investmentPeriod} years</span>
              </b>{" "}
              will be
            </p>
            <span className="amount">
              ₹{" "}
              {Math.round(investedAmount + estimatedReturns).toLocaleString(
                "en-IN"
              )}
            </span>
          </div>
              
          <div className="d-flex flex-row justify-content-center">
            <div className="d-flex justify-content-center align-items-center">
              <DoughnutChart
                investedAmount={investedAmount}
                estimatedReturns={estimatedReturns}
              />
            </div>
            <div className="d-flex flex-column justify-content-center w-23 ms-5">
              <div className="border-start border-5 border-investedOrange">
                <p className="ms-2 mb-0">Invested Amount</p>
                <p className="fs-5 fw-semibold ms-2">
                  ₹{investedAmount.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="border-start border-5 border-returnsBlue mt-2">
                <p className="ms-2 mb-0">Est. Returns</p>
                <p className="fs-5 fw-semibold ms-2">
                  ₹{Math.round(estimatedReturns).toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container custom-width">
        <h2 className="mc-desc-title">What is an SIP Calculator?</h2>
        <div className="mc-desc-para">
          <p>
            SIP Calculator is a tool which facilitates the investor to calculate
            the estimated future value of the systematic monthly investments
            made in the mutual fund scheme. This tool assumes that your expected
            rate of return is constant over the selected investment period,
            which may vary with your actual investments made in real time.
          </p>
        </div>
        <h2 className="mc-desc-title">How does SIP Calculator Work?</h2>

        <p>Inputs required by the SIP Calculator:</p>
        <ul>
          <li>
            <strong>Monthly SIP amount: </strong>The investor needs to input the
            monthly investment amount.
          </li>
          <li>
            <strong>Investment Period: </strong>Frequency of the investment (n)
          </li>
          <li>
            <strong>Expected Rate of Return: </strong>The investor also needs to
            feed in the expected rate of return that one may expect on an annual
            basis.
          </li>
        </ul>
        <p>
          <strong>Output:</strong>
        </p>
        <p>
          The SIP Calculator would consume the inputs provided by the investor
          and would give them the estimated Future value of the systematic
          monthly investments made by the investor and the Expected return the
          investor may earn over and above the investments made by the investor.
        </p>
        <p>
          <strong>SIP Calculator Illustration: </strong>
        </p>
        <p>
          Let's assume that an investor wants to invest Rs. 10,000 on a monthly
          basis for a period of 10 years that will give them an expected rate of
          return of 12% p.a.
        </p>
        <p>The following will be the inputs for using SIP Calculator:</p>
        <ul>
          <li>
            <strong>Monthly SIP amount: </strong>Rs.10,000
          </li>
          <li>
            <strong>Investment Period: </strong>10 years
          </li>
          <li>
            <strong>Expected Rate of Return: </strong>12% p.a.
          </li>
        </ul>
        <p>
          This will provide the investor with the estimated Future value of
          investments, Monthly investments made by investor and the expected
          returns earned:
        </p>
        <ul>
          <li>
            <strong>Total estimated Future value of investments (A): </strong>
            Rs.23,23,391
          </li>
          <li>
            <strong>Total Monthly investments made by investors (B): </strong>
            Rs.12,00,000
          </li>
          <li>
            <strong>Total Return earned by the investor (A - B): </strong>
            Rs.11,23,391
          </li>
        </ul>
        <p>
          Basis the estimated Future value of investments and Expected return,
          the investor may change the Monthly SIP amount or Investment Period or
          Expected Rate of Return in order to attain the desired Expected
          returns that an investor wants to achieve over the given period of
          time.
        </p>
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
