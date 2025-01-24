
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Registering necessary components from Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function FVChart({ pv, interestRate, duration }) {
    // Generate years array
    const years = Array.from({ length: duration }, (_, index) => index + 1);

    // Calculate the future values (as numbers)
    const data = years.map((year) => {
        const r = interestRate / 100;
        const fv = pv * Math.pow(1 + r, year); // FV = PV * (1 + r)^n
        return Math.round(fv);
    });

    // Format data for display (using toLocaleString for formatted values)
    // const formattedData = data.map(value => value.toLocaleString('en-IN'));

    const chartData = {
        labels: Array.from({ length: duration }, (_, index) => `Year ${index + 1}`),
        datasets: [
            {
                label: 'Future Value',
                data: data,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: 'start'
            }
        ]
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Years'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Total Amount (₹)'
                }
            },
            stacked: true
        },
        plugins: {
            tooltip: {
                callbacks: {
                    // Customize tooltips to show formatted values
                    label: function (context) {
                        // Return the formatted value for the tooltip
                        return '₹ ' + context.raw.toLocaleString('en-IN');
                    }
                }
            }
        }
    };

    return (
        <div style={{ width: '100%', height: '300px' }}>
            <Line data={chartData} options={options} />
        </div>
    );
}
