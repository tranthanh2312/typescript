import { ApexOptions } from 'apexcharts';
import React from 'react'
import Chart from 'react-apexcharts'

interface GoalChart {
  name: string,
  actualNumber: number,
  expectedNumber: number
}


type Props = {
  dataTuitionChart: GoalChart[]
}



// const data = [
//   { name: "Mar 1", actualNumber: 1000, expectedNumber: 1200 },
//   { name: "Mar 2", actualNumber: 800, expectedNumber: 900 },
//   { name: "Mar 3", actualNumber: 1200, expectedNumber: 1100 },
//   { name: "Mar 4", actualNumber: 1500, expectedNumber: 1400 },
//   { name: "Mar 5", actualNumber: 1300, expectedNumber: 1200 },
//   { name: "Mar 6", actualNumber: 1600, expectedNumber: 1500 },
//   { name: "Mar 7", actualNumber: 1800, expectedNumber: 1700 },
//   { name: "Mar 8", actualNumber: 2000, expectedNumber: 1900 },
// ];

export default function RoundChart({ dataTuitionChart }: Props) {
  const options: any = {
    chart: {
      id: "revenue-bar-chart",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: dataTuitionChart.map((d: any) => d.name),
      labels: {
        style: {
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value: any) => `$${value}`,
        style: {
          fontSize: "14px",
        },
      },
    },
    legend: {
      fontSize: "14px",
      position: "bottom",
    },
  };

  const series = [
    {
      name: "Actual",
      data: dataTuitionChart.map((d: any) => d.actualNumber),
    },
    {
      name: "Expected",
      data: dataTuitionChart.map((d: any) => d.expectedNumber),
    },
  ];

  return (
    <Chart options={options} series={series} type="bar" height={400} />
  )
}