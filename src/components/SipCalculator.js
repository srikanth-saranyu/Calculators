import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(Tooltip, Legend, ArcElement);

export default function SipCalculator() {
    // State for the SIP amount, duration, and expected return rate
    const [sipAmount, setSipAmount] = useState(5000);
    const [duration, setDuration] = useState(5);
    const [expectedROR, setExpectedROR] = useState(12);
    const [calculatedAmount, setCalculatedAmount] = useState(0);
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });

    // Handlers for input changes
    const handleSipAmountChange = (e) => setSipAmount(Number(e.target.value));
    const handleDurationChange = (e) => setDuration(Number(e.target.value));
    const handleExpectedRORChange = (e) => setExpectedROR(Number(e.target.value));

    // Function to calculate SIP returns and update chart data
    const calculateSIP = () => {
        const monthlyRate = expectedROR / 100 / 12; // Monthly interest rate
        const months = duration * 12; // Duration in months

        // SIP formula for compound interest
        if (isNaN(sipAmount) || isNaN(duration) || isNaN(expectedROR)) {
            console.error("Invalid input values");
            return;
        }

        const futureValue = sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        setCalculatedAmount(futureValue);


        // Total invested amount = SIP amount * months
        const totalInvested = sipAmount * months;

        // Generate data for the chart (monthly growth over time)
        const labels = [];
        const data = [totalInvested, futureValue - totalInvested];
        // let cumulativeAmount = 0;

        // for (let i = 1; i <= months; i++) {
        //   cumulativeAmount += sipAmount;
        //   cumulativeAmount += cumulativeAmount * monthlyRate;
        //   labels.push(`Month ${i}`);
        //   data.push(cumulativeAmount.toFixed(2));
        // }
        setChartData({
            labels,
            datasets: [
                {
                    label: '',
                    data: data,
                    backgroundColor: [
                        'rgb(255, 115, 0)',
                        'rgb(70, 70, 234)'
                    ],
                    hoverOffset: 4,
                    //   fill: false,
                    //   borderColor: 'rgb(75, 192, 192)',
                    //   tension: 0.1,
                },
            ],
        });
        console.log(labels, data);
    };

    // Recalculate chart data whenever inputs change
    useEffect(() => {
        calculateSIP();
    }, [sipAmount, duration, expectedROR]);

    return (
        <div className="ao-tabs-main-container">
            <div className='container'>
                <h3 className="title">SIP Calculator</h3>
                <p>The SIP calculator helps estimate the potential growth of your Systematic Investment Plan (SIP) investment over your chosen time frame. SIP is a convenient method to save for your long-term financial goals.</p>
            </div>
            <div className="container">
                <div className="ao-tabs-content-wrapper">
                    <div className="ao-tabs-content tab-investment-amount" data-ao-tab-content-display="true" data-tab-source="investment-amount">
                        <div className="section-seperator-40-60">
                            <div className="calc-options-container">
                                <div className="returns-est-container">
                                    <div className="vector-container">
                                        <object data="https://w3assets.angelone.in/wp-content/uploads/2023/01/48x48-_-Blue-icons.svg" width="48" height="48"></object>
                                    </div>
                                    <div className="content-container">
                                        <b>Returns Estimator</b>
                                        <p className="description">Estimation is based on the past performance</p>
                                    </div>
                                </div>
                                <div className="sip-actions">
                                    <button className="sip-action-cta active" data-sip-type="simple-sip">SIP</button>
                                    <button className="sip-action-cta" data-sip-type="one-time-sip">Lumpsum</button>
                                    <button className="sip-action-cta" data-sip-type="advance-sip-calc">Advance SIP</button>
                                </div>
                                <div className="simple-sip-container active">
                                    <div className="sip-amount-input-box">
                                        <div className="sip-inner-box">
                                            <p>ENTER AMOUNT</p>
                                            <div className="sip-input-container">
                                                <span className="rupee-symbol">₹</span>
                                                <input
                                                    type="text"
                                                    className="sip-input ao-input-number"
                                                    data-input-name="sipAmount"
                                                    maxlength="15"
                                                    placeholder="0"
                                                    value={sipAmount}
                                                    onChange={handleSipAmountChange}
                                                    style={{ width: '70px' }}
                                                />
                                                <span className="clone-sip-input"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="range-sliders-container">
                                        <div className="duration-slider-container">
                                            <div className="heading-wrapper">
                                                <div className="title">Select Duration</div>
                                                <div className="fake-input-container">
                                                    <input
                                                        type="number"
                                                        className="duration-input ao-input-number"
                                                        id="duration-txt"
                                                        data-input-name="duration"
                                                        placeholder="0"
                                                        min="1"
                                                        max="30"
                                                        value={duration}
                                                        onChange={handleDurationChange}
                                                    />
                                                    <span className="clone-duration-input"></span>
                                                    <span className="symbol">Yrs</span>
                                                </div>
                                            </div>
                                            <div className="range-slider-wrapper">
                                                <label htmlFor="username" className="visually-hidden">duration slider</label>
                                                <input
                                                    type="range"
                                                    aria-label="duration slider"
                                                    min="1"
                                                    max="30"
                                                    value={duration}
                                                    className="duration-range-slider ao-range-slider"
                                                    id="duration"
                                                    data-input-name="duration"
                                                    onChange={(e) => setDuration(Number(e.target.value))}
                                                />
                                                <div className="ranges">
                                                    <span className="min">1 Yr</span>
                                                    <span className="max">30 Yrs</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="expected-ror-slider-container">
                                            <div className="heading-wrapper">
                                                <div className="title">Expected Rate of Return</div>
                                                <div className="fake-input-container">
                                                    <input
                                                        type="number"
                                                        className="expected-ror-input ao-input-number"
                                                        id="rate-txt"
                                                        data-input-name="expectedROR"
                                                        placeholder="0"
                                                        min="8"
                                                        max="30"
                                                        step="0.01"
                                                        value={expectedROR}
                                                        onChange={handleExpectedRORChange}
                                                    />
                                                    <span className="clone-expected-ror-input"></span>
                                                    <span className="symbol">%</span>
                                                </div>
                                            </div>
                                            <div className="range-slider-wrapper">
                                                <label htmlFor="username" className="visually-hidden">interest slider</label>
                                                <input
                                                    type="range"
                                                    aria-label="interest slider"
                                                    min="8"
                                                    max="30"
                                                    value={expectedROR}
                                                    step="0.01"
                                                    className="expected-ror-range-slider ao-range-slider"
                                                    data-input-name="expectedROR"
                                                    id="rate"
                                                    onChange={(e) => setExpectedROR(Number(e.target.value))}
                                                />
                                                <div className="ranges">
                                                    <span className="min">8%</span>
                                                    <span className="max">30%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step-up-slider-container force-hide">
                                            <div className="heading-wrapper">
                                                <div className="title">Step Up</div>
                                                <div className="fake-input-container">
                                                    <input
                                                        type="number"
                                                        className="step-up-input ao-input-number"
                                                        data-input-name="stepUp"
                                                        placeholder="0"
                                                        value="12"
                                                    />
                                                    <span className="clone-step-up-input"></span>
                                                    <span className="symbol">%</span>
                                                </div>
                                            </div>
                                            <div className="range-slider-wrapper">
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="100"
                                                    value="12"
                                                    className="step-up-range-slider ao-range-slider"
                                                    data-input-name="stepUp"
                                                />
                                                <div className="ranges">
                                                    <span className="min">0%</span>
                                                    <span className="max">100%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="calc-graph-container">
                                <div className="opening-statement">
                                    <p>The total value of your investment after<span className="selected-years">&nbsp;{duration} years</span> will be</p>
                                    <div className="investment-amount">
                                        <span className="rupee-symbol">₹</span>
                                        <span className="amount">{calculatedAmount.toFixed(0)}</span>
                                    </div>
                                </div>
                                <div className="graph">
                                    {/* <div className="display-wealth"></div> */}
                                    <div className="SIP-chart-parent">
                                        <div className="canvas-div ebitda-chart-child">
                                            {/* <canvas id="SIPPieChart" height="309px" width="309px"></canvas>
                      <div id="chartTooltip"></div> */}
                                            <Doughnut data={chartData} options={{ responsive: true }} />
                                        </div>
                                        <div className="SIP-chart-child" id="ebitda-val">
                                            <div className="">
                                                <div className="legend-parent">
                                                    <div className="legend-bg"></div>
                                                    <div className="legend-data">
                                                        <p className="legend-txt">Invested Amount</p>
                                                        <p className="legend-value SIP-initial-value" id="SIP-initial-value">₹{(sipAmount * duration * 12).toFixed(0)}</p>
                                                    </div>
                                                </div>
                                                <div className="legend-parent">
                                                    <div className="legend-bg legend-bg-violet"></div>
                                                    <div className="legend-data">
                                                        <p className="legend-txt">Est. Returns</p>
                                                        <p className="legend-value SIP-final-val" id="SIP-final-val">₹{(calculatedAmount - (sipAmount * duration * 12)).toFixed(0)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className="mc-desc-title">What is an SIP Calculator?</h2>
                <div className="mc-desc-para">
                    <p>The Systematic Investment Plan Calculator, or a SIP calculator, is a free online financial tool available on the Angel One website that helps you calculate your returns from SIP investments. You can use it to compare the returns from various SIP investment strategies.</p>
                    <p>A Mutual Fund SIP calculator helps you estimate the future value of your SIP investments. It takes into account various parameters, including the investment amount, i.e., the regular SIP contributions, the expected rate of return, and the investment tenure. By inputting these details, you can get a sense of how your investments may grow over time. While the final maturity amount of your SIP investment may differ due to various external factors, you can get an approximate understanding of the expected returns.</p>
                    <p>Once you have a clear idea of the expected returns and commitment required, you can then make a more informed decision about which SIP strategy is most viable for you.</p>
                </div>
                <h2 className="mc-desc-title">How does SIP Calculator Work?</h2>

                <p>Our SIP calculator online takes three main factors into account:</p>
                <ol>
                    <li>Amount of the initial investment (P)</li>
                    <li>Frequency of the investment (n)</li>
                    <li>Expected rate of return (r)</li>
                </ol>
                <p>By inputting these values, the calculator determines the final invested amount and the estimated returns at the end of a specific period of time.</p>
                <h2 className="mc-desc-title">How Can an SIP Return Calculator Help You?</h2>
                <div className="mc-desc-para">
                    <p>The advantages of using an SIP return calculator are many. Some of them are discussed below:</p>
                    <ol>
                        <li><strong>Estimate required time and rate of return -</strong> Using this tool, you can estimate the rate of return required to reach your desired final amount. Additionally, you can also ascertain the time required for your investment to grow adequately.</li>
                        <li><strong>Choose the right SIP &ndash; </strong>The SIP calculator can swiftly give you multiple variables with which you can assess an SIP scheme. You can use the calculator to compare multiple schemes as per those variables and choose the SIP that is best for you.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
