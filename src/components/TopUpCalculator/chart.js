import { Doughnut } from 'react-chartjs-2';
import "../../assets/styles/chart.css"

import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(Tooltip, Legend, ArcElement);

export default function TopUpChart({ investedAmount, estimatedReturns }) {

    const data = {
        labels: [],
        datasets: [{
            label: '',
            data: [investedAmount, estimatedReturns],
            backgroundColor: [
                'rgb(255, 115, 0)',
                'rgb(70, 70, 234)'
            ],
            hoverOffset: 4
        }]
    };

    // Define chart options
    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        // Get the value based on the index (0 for Invested Amount, 1 for Estimated Returns)
                        const value = tooltipItem.raw;

                        // Format and return the tooltip string
                        if (tooltipItem.dataIndex === 0) {
                            return `Invested Amount: ₹${Math.round(value).toLocaleString('en-IN')}`;
                        } else if (tooltipItem.dataIndex === 1) {
                            return `Est. Returns: ₹${Math.round(value).toLocaleString('en-IN')}`;
                        }
                    }
                }
            }
        }
    };

    return (
        <div className='graph justify-content-center'>
            <Doughnut data={data} options={options} />
        </div>
    )
}
