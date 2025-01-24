
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Registering necessary components from Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);


export default function CIChart({ principal, rate, duration, compoundsPerYear }) {

    // Function to generate the data for the compound interest graph based on inputs
    const generateData = () => {
        return Array.from({ length: duration }, (_, index) => {
            // Calculate the compounded value
            const amount = principal * Math.pow(1 + rate / 100 / compoundsPerYear, compoundsPerYear * (index + 1));
            // Round to 2 decimal places and return the value
            return Math.round(amount);
        });
    };

    const data = {
        labels: Array.from({ length: duration }, (_, index) => `Year ${index + 1}`),
        datasets: [
            {
                label: 'Compound Interest',
                data: generateData(),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: "start"
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
                },
                stacked: true,
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        // Add ₹ symbol to the tooltip value
                        return '₹ ' + tooltipItem.raw.toLocaleString('en-IN');  // Using toFixed to round it to 2 decimal places
                    }
                }
            }
        }
    }


    return (
        <div style={{ width: '100%', height: '350px' }}>
            <Line data={data} options={options} />
        </div>
    );
}
