import "../../assets/styles/sip.css"
import InflationChart from "./chart"

export default function InflationCalculator() {
    return (
        <div className="container">
            <h3 className="custom-width">Inflation Calculator</h3>
            <div className="row border rounded custom-width shadow">
                <div className="col-5">
                    <h5 className="pt-4 fw-bold">Returns Estimator</h5>
                    <p className="small text-muted">Estimation is based on the past performance</p>
                    <div className="border border-2 border-primary rounded mt-4">
                        <label className="d-block text-center text-dark mb-2">Initial Amount</label>
                        <div className="ms-4 d-flex justify-content-center align-items-start">
                            <span className="fs-5">₹</span>
                            <input type="text" className="form-control fs-1 bg-transparent border-0 text-dark text-start"
                                placeholder="0"
                                value="1,00,000"
                                style={{ width: "8ch" }} />

                        </div>

                    </div>
                    <div className="w-100 mt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Inflation Rate</label>
                            <div className="d-flex align-items-baseline border-bottom border-2 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-5 text-dark fw-bold">6</span>
                                    <span className="fs-6 text ms-1">%</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1" id="customRange3"></input>
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1 %</p>
                            <p className="text-end text-muted">15 %</p>
                        </div>
                    </div>
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="text-dark">Number of Years</label>
                            <div className="d-flex align-items-baseline border-bottom border-2 pb-1">
                                <p className="d-flex align-items-baseline mb-0">
                                    <span className="fs-5 text-dark fw-bold">5</span>
                                    <span className="fs-6 text ms-1">Yrs</span>
                                </p>
                            </div>
                        </div>
                        <input type="range" className="slider" min="1" max="30" step="1" id="customRange3" />
                        <div className="d-flex justify-content-between">
                            <p className="text-start text-muted">1 Yr</p>
                            <p className="text-end text-muted">30 Yrs</p>
                        </div>
                    </div>

                </div>


                <div className="col-7 d-flex flex-column border-start">
                    <div className="text-center mt-4">
                        <p>The total value of your investment after<span className="selected-years">&nbsp;{5} years</span> will be</p>
                        <span>₹</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center">

                        <div className="d-flex justify-content-center align-items-center">
                            <InflationChart />
                        </div>
                        <div className="d-flex flex-column justify-content-center w-23 ms-5">
                            <div className="border-start border-5 border-investedOrange">
                                <p className="text-muted ms-2 mb-0">Initial Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹3,00,000</p>
                            </div>
                            <div className="border-start border-5 border-returnsBlue mt-2">
                                <p className="text-muted ms-2 mb-0">Adjusted Amount</p>
                                <p className="fs-5 fw-semibold ms-2">₹1,12,432</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className="mc-desc-title">What Is an Inflation Calculator?</h2>
                <p>An inflation calculator calculates the effects of inflation on the cost of a specific category of goods or services.</p>
                <p>Inflation is defined as the increase in the price of a basket of goods and services. It is usually calculated for a particular product, sector, or the economy as a whole. It indicates the degree to which the purchasing power of the rupee may fall.</p>
                <p>Inflation is usually calculated in two forms:</p>
                <ul>
                    <li>Consumer price index (CPI), i.e. change in price levels at the retail level experienced by the end consumer.</li>
                    <li>Wholesale price index (WPI), i.e. change in price levels at the wholesale level.</li>
                </ul>
                <p>An inflation calculator is a free tool that is used to understand the difference in the cost of a good or service today compared to a few years later. It helps in financial planning for both the long and short term.</p>

                <h2 className="mc-desc-title">How Does an Inflation Calculator Work?</h2>
                <p>The inflation calculator uses a compound interest formula to calculate the future cost of a set of goods and services based on their current cost and the assumed rate of inflation. You simply have to visit the Angel One inflation calculator page online and enter the required details to find out the potential future cost.</p>

                <h2 className="mc-desc-title">What Is the Inflation Calculator Formula?</h2>
                <p>The rate of inflation can be calculated using either CPI or WPI. In case of CPI, the formula would be:</p>
                <p>CPI= Cost of goods in current year / Cost of goods in the base year * 100</p>
                <p>The following is the inflation calculator formula used to calculate the future cost of a product or service:</p>
                <p>Future Cost = Current Cost(1+i)^t</p>
                <p>i = Rate of inflation</p>
                <p>t = Number of years over which the inflation is calculated</p>
                <p>Before investing in high returns instruments, make sure that you have done adequate research on them. Also, choose a trusted broker who can aid you in your investment journey.</p>

                <p><strong>Disclaimer: </strong>This calculator is meant for investor education and awareness purpose only and shall not be considered as any recommendation to make investments in the schemes of respective Mutual Fund. Please consult your financial / tax advisor(s) before taking any investment decisions.</p>
                <p><strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong></p>
            </div>

        </div>
    )
}