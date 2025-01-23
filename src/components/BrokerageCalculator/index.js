import React, { useState } from 'react';
import Brokerage from "./Brokerage"

export default function BrokerageCalculator() {

    const [activeTab, setActiveTab] = useState('equity');

    const getButtonLabels = () => {
        if (activeTab === 'equity') {
            return { delivery: "Delivery", intraday: "Intraday" };
        } else if (activeTab === 'equityFO') {
            return { delivery: "Futures", intraday: "Options" };
        } else if (activeTab === 'currency') {
            return { delivery: "Futures", intraday: "Options" }; // You can adjust this if needed for Currency tab.
        }
    };

    const { delivery, intraday } = getButtonLabels();

    //     return (
    //         <div>
    //             <h3 className="custom-width">Brokerage Calculator</h3>
    //             {/* Tabs Section */}
    //             <ul className="nav nav-underline custom-width mb-3" id="pills-tab" role="tablist">
    //                 <li className="nav-item" role="presentation">
    //                     <a
    //                         className={`nav-link ${activeTab === 'equity' ? 'active-tab' : 'inactive'}`}
    //                         onClick={() => setActiveTab('equity')}
    //                     >
    //                         Equity
    //                     </a>
    //                 </li>
    //                 <li className="nav-item" role="presentation">
    //                     <a
    //                         className={`nav-link ${activeTab === 'equityFO' ? 'active-tab' : 'inactive'}`}
    //                         onClick={() => setActiveTab('equityFO')}
    //                     >
    //                         Equity - F&O
    //                     </a>
    //                 </li>
    //                 <li className="nav-item" role="presentation">
    //                     <a
    //                         className={`nav-link ${activeTab === 'currency' ? 'active-tab' : 'inactive'}`}
    //                         onClick={() => setActiveTab('currency')}
    //                     >
    //                         Currency
    //                     </a>
    //                 </li>
    //             </ul>

    //             {/* Content for the Tabs */}
    //             <div className="tab-content" id="pills-tabContent">
    //                 {activeTab === 'equity' && (
    //                     <div className="tab-pane fade show active" id="equity" role="tabpanel">
    //                         <Brokerage />
    //                     </div>
    //                 )}
    //                 {activeTab === 'equityFO' && (
    //                     <div className="tab-pane fade show active" id="equityFO" role="tabpanel">
    //                         <Brokerage />
    //                     </div>
    //                 )}
    //                 {activeTab === 'currency' && (
    //                     <div className="tab-pane fade show active" id="currency" role="tabpanel">
    //                         <Brokerage />
    //                     </div>
    //                 )}
    //             </div>

    //         </div>
    //     )
    // }

    return (
        <div>
            <h3 className="custom-width">Brokerage Calculator</h3>
            {/* Tabs Section */}
            <ul className="nav nav-underline custom-width mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a
                        className={`nav-link ${activeTab === 'equity' ? 'active-tab' : 'inactive'}`}
                        onClick={() => setActiveTab('equity')}
                    >
                        Equity
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        className={`nav-link ${activeTab === 'equityFO' ? 'active-tab' : 'inactive'}`}
                        onClick={() => setActiveTab('equityFO')}
                    >
                        Equity - F&O
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        className={`nav-link ${activeTab === 'currency' ? 'active-tab' : 'inactive'}`}
                        onClick={() => setActiveTab('currency')}
                    >
                        Currency
                    </a>
                </li>
            </ul>

            {/* Content for the Tabs */}
            <div className="tab-content" id="pills-tabContent">
                {activeTab === 'equity' && (
                    <div className="tab-pane fade show active" id="equity" role="tabpanel">
                        <Brokerage Delivery={delivery} Intraday={intraday} />
                    </div>
                )}
                {activeTab === 'equityFO' && (
                    <div className="tab-pane fade show active" id="equityFO" role="tabpanel">
                        <Brokerage Delivery={delivery} Intraday={intraday} />
                    </div>
                )}
                {activeTab === 'currency' && (
                    <div className="tab-pane fade show active" id="currency" role="tabpanel">
                        <Brokerage Delivery={delivery} Intraday={intraday} />
                    </div>
                )}
            </div>

        </div>
    );
}