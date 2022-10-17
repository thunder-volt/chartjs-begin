import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Donought = ({ chartData }) => {
    return (
        <div>
            <Doughnut
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
                    },
                    maintainAspectRatio: false
                }}
                height={"550px"}
            />
        </div>
    )
}

export default Donought