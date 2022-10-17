import React from 'react'
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const Charts = ({ chartData }) => {

    return (
        <div>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Cryptocurrency prices"
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }
                }}
            />
        </div>
    )
}

export default Charts
