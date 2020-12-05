import React, { useState, useEffect } from 'react'
import './LineGraph.css'
import { Line } from 'react-chartjs-2'
import { useStateValue } from '../../context/StateProvider'

const dateStringToLocal = (date) => {
    let [m, d, y] = date.split("/")
    //console.log(d.length);
    if (d.length == 1) {
        d = 0 + d;
        //console.log(d);
    }
    const localDate = [d, m, y].join("/");
    return localDate;

};

export default function LineGraph() {

    //const [{ countryCode }, dispatch] = useStateValue();

    const [chartDataCases, setChartDataCases] = useState({});

    const buildDataChart = (data) => {

        const chartDate = [];
        const chartCases = []
        let lastDate;
        let date;
        let diffrenceValue = 0;
        if (data) {
            for (const [key, value] of Object.entries(data)) {
                if (lastDate) {
                    date = dateStringToLocal(key);
                    //console.log(date);
                    chartDate.push(date);
                    //console.log(chartDate);
                    console.log(value);
                    diffrenceValue = value - lastDate;
                    //console.log('diffrence:', diffrenceValue);
                    chartCases.push(diffrenceValue);
                    console.log(chartCases);
                }
                lastDate = value
            }
            setChartDataCases({
                labels: chartDate,
                datasets: [
                    {
                        label: 'Cas dans le monde',
                        data: chartCases,
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)'
                        ],
                        borderColor: 'rgb(75, 192, 192)',
                        borderWith: 4,
                        fill: false

                    }
                ],
                datasets: [
                    {
                        label: 'Cas dans le monde',
                        data: chartCases,
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)'
                        ],
                        borderColor: 'rgb(75, 192, 192)',
                        borderWith: 4,
                        fill: false

                    }
                ]
            });
        }
        //console.log(chartDate);
        //console.log(chartCases);
    };
    /* setChartData({
        labels: ['Lundi', 'mardi', 'Mercredi', 'jeudi', 'Vendredi', 'samedi', 'Dimanche'],
        datasets: [
            {
                label: 'level of thickness',
                data: ['32', '67', '28', '89', '13', '43'],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderWith: 4

            }
        ]
    }); 

    /* const chart = () => {
        setChartData({
            labels: ['Lundi', 'mardi', 'Mercredi', 'jeudi', 'Vendredi', 'samedi', 'Dimanche'],
            datasets: [
                {
                    label: 'level of thickness',
                    data: ['320', '670', '280', '890', '130', '430'],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWith: 4

                }
            ]
        })

    }; */

    /* useEffect(() => {

        chart();
    }, []); */

    useEffect(() => {

        const fetchDataCases = async () => {

            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
                .then(response => response.json())
                .then(data => {
                    //console.log(data);
                    buildDataChart(data.cases)
                })
        }
        fetchDataCases();

    }, []);

    return (
        <div className="lineGraph">
            <h3>Cas dans le monde(30 derniers jours)</h3>
            <Line data={chartDataCases} />
        </div>
    )
}
