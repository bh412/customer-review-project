import {Rating} from "@mui/material";
import {Bar} from "react-chartjs-2";
import React from "react";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";
import {Row} from "./Utils";

interface ReviewChartProps {
    ratings: number[];
    avgRating: number | null;
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const ReviewChart = ({ratings, avgRating}: ReviewChartProps) => {

    const labels = [1, 2, 3, 4, 5];
    const data = {
        labels,
        datasets: [
            {
                label: 'Ratings',
                data: ratings,
                borderColor: '#EFBD0A',
                backgroundColor: '#EFBD0A'
            },
        ],
    };

    const options = {
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        scales: {
            y: {
                ticks: {
                    stepSize: 1
                }
            }
        },
        responsive: true,
        plugins: {
            datalabels: {
                anchor: 'end',
                font: {
                    weight: 'bold'
                }
            },
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: 'Reviews',
            },
        },
    };

    return (
        <div className="review-chart">
            <Row>
                <Rating name="read-only" value={avgRating} readOnly />
                <h3>&nbsp;{avgRating} out of 5</h3>
            </Row>
            <Row>
                <Bar options={options} data={data}/>
            </Row>
        </div>
    )
}
