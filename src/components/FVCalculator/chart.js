
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary components from Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function FVChart({ pv, interestRate, duration }) {
    // Generate years array
    const years = Array.from({ length: duration }, (_, index) => index + 1);

    // Calculate the future values (as numbers)
    const data = years.map((year) => {
        const r = interestRate / 100; // Convert percentage to decimal
        const fv = pv * Math.pow(1 + r, year); // FV = PV * (1 + r)^n
        return Math.round(fv); // Round off to the nearest integer
    });

    // Format data for display (using toLocaleString for formatted values)
    const formattedData = data.map(value => value.toLocaleString('en-IN'));

    // Chart data (keep it as numbers)
    const chartData = {
        labels: years,
        datasets: [
            {
                label: 'Future Value',
                data: data, // Use numeric values for chart
                borderColor: 'rgba(255, 99, 132, 1)', // red color for the line 
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // transparent red for the area
                fill: false // Don't fill the area under the line
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
            }
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
