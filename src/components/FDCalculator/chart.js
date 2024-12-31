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

export default function FDChart() {

    const data = {
        labels: [],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 150],
            backgroundColor: [
                'rgb(255, 115, 0)',
                'rgb(70, 70, 234)'
            ],
            hoverOffset: 4
        }]
    };

    return (
        <div className='graph justify-content-center'>
            <Doughnut data={data} options={{ responsive: true }} />
        </div>
    )
}