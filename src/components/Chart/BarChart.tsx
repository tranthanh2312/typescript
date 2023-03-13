import React from "react";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { Pie, measureTextWidth } from '@ant-design/plots';


type Props = {
    dataPie: {
        invoices: number;
        orders: number;
        attendances: number;
    }
};



function renderStatistic(containerWidth: number, text: string, style: any) {
    const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
    const R = containerWidth / 2;

    let scale = 1;

    if (containerWidth < textWidth) {
        scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
    }

    const textStyleStr = `width:${containerWidth}px;`;
    return `<div style="${textStyleStr};font-size:${scale}em;line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
}

export default function BarChart({ dataPie }: Props) {

    const data = [
        {
            type: 'Invoice',
            value: dataPie.invoices,
        },
        {
            type: 'Orders',
            value: dataPie.orders,
        },
        {
            type: 'Attendace',
            value: dataPie.attendances,
        }
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.64,
        meta: {
          value: {
            formatter: (v: number) => `${v} ¥`,
          },
        },
        label: {
          type: 'inner',
          offset: '-50%',
          style: {
            textAlign: 'center',
          },
          autoRotate: false,
          content: '{value}',
        },
        statistic: {
          title: {
            offsetY: -4,
            customHtml: (container: any, view: any, datum: any) => {
              const { width, height } = container.getBoundingClientRect();
              const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
              const text = datum ? datum.type : 'Total';
              return renderStatistic(d, text, {
                fontSize: 28,
              });
            },
          },
          content: {
            offsetY: 4,
            style: {
              fontSize: '40px',
            },
            customHtml: (container: any, view: any, datum: any, data: any) => {
              const { width } = container.getBoundingClientRect();
              const text = datum ? `${datum.value}` : ` ${data.reduce((r: number, d: any) => r + d.value, 0)}`;
              return renderStatistic(width, text, {
                fontSize: 32,
              });
            },
          },
        },
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
          {
            type: 'pie-statistic-active',
          },
        ],
      };
    return (
        <div>
            {/* <h2>Total Statistical Warning: {totalChart}</h2>
            <ReactApexChart
                options={options}
                series={options.series}
                type="donut"
                height={350}
            /> */}
                    <Pie { ...config } />
        </div>
    );
}
