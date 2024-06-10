'use client'
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { AllNps, Top10Nps } from '@/app/api/jusik/route';
import { useEffect, useState } from 'react';
import { INpstype } from '@/app/api/jusik/model/nps-model';
import { resolve } from 'path/posix';
Chart.register(CategoryScale);

export default function NpsBarchart() {

  const [datazip, setDatazip] = useState<INpstype[]>()

  const npsdata = async () => {
    try {
      const response: INpstype[] = await Top10Nps();
      setDatazip(response);
      console.log("npsdata stock : " + JSON.stringify(datazip));
    } catch (error) {
      console.log("npsdata error : " + error)
    }
  }

  useEffect(() => {
    // npsdata()
  }, [])


  // const data =

  //   datazip !== undefined ? datazip.map((nps: INpstype, i: number) => {
  //     const data = {
  //       datasets: [
  //         {
  //           type: 'bar',
  //           label: 'stock',
  //           borderColor: '#FFDA78',
  //           borderWidth: 2,
  //           data: [
  //             { x: nps.stock, y: nps.valuation }

  //             // { x: 'January', y: 4 },
  //             // { x: 'February', y: 2 },
  //             // { x: 'March', y: 8 },
  //             // { x: 'April', y: 1 },
  //             // { x: 'May', y: 5 }
  //           ]
  //         }
  //         // yAxisID: 'y_sub',
  //       ]
  //     }
  //   }) : null








const options = {
  spanGaps: true,
  maxBarThickness: 30,
  grouped: true,
  interaction: {
    mode: 'index',
  },
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        padding: 10,
        font: {
          family: "'Noto Sans KR', 'serif'",
          lineHeight: 1,
        },
      }
    },
    tooltip: {
      backgroundColor: '#6F4E37',
      padding: 10,
      bodySpacing: 5,
      bodyFont: {
        font: {
          family: "'Noto Sans KR', sans-serif",
        }
      },
      usePointStyle: true,
      filter: (item: any) => item.parsed.y !== null,
      callbacks: {
        title: (context: any) => context[0].label + '💙',
        label: (context: any) => {
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null
            ? label + ': ' + context.parsed.y + '배'
            : null;
        },
      },
    },
  },
  scales: {
    x: {
      // afterTickToLabelConversion: function (scaleInstance:any) {
      //   const ticks = scaleInstance.ticks;
      //   const newTicks = ticks.map((tick:any) => {
      //     return {
      //       ...tick,
      //       label: tick.label + '🎵'
      //     };
      //   });
      //   scaleInstance.ticks = newTicks;
      // },
      grid: {
        display: false,
        drawTicks: true,
        tickLength: 4,
        color: '#E2E2E230'
      },
      //하단 제목 기울기
      // axis: 'x',
      // position: 'bottom',
      // ticks: {
      //   minRotation: 45,
      //   padding: 5,
      // },
    },
    y: {
      type: 'linear',
      grid: {
        color: '#E2E2E230',
      },
      afterDataLimits: (scale: any) => {
        scale.max = scale.max * 1.2;
      },
      axis: 'y',
      display: true,
      position: 'left',
      // title: {
      //   display: true,
      //   align: 'end',
      //   color: '#808080',
      //   font: {
      //     size: 12,
      //     family: "'Noto Sans KR', sans-serif",
      //     weight: 300,
      //   },
      //   text: '단위: 배'
      // }
    },

  }
};



const data = {
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      data: [
        { x: 'January', y: 4 },
        { x: 'February', y: 2 },
        { x: 'March', y: 8 },
        { x: 'April', y: 1 },
        { x: 'May', y: 5 }
      ],
      yAxisID: 'y_sub',
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [
        { x: 'January', y: 20 },
        { x: 'February', y: 20 },
        { x: 'March', y: 32 },
        { x: 'April', y: 41 },
        { x: 'May', y: 15 },
        { x: 'June', y: 26 }
      ],
      borderColor: 'red',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [
        { x: 'January', y: 1 },
        { x: 'February', y: 2 },
        { x: 'March', y: 3 },
        { x: 'April', y: 4 },
        { x: 'May', y: 5 },
        { x: 'June', y: 6 }
      ],
      yAxisID: 'y_sub',
    },
  ],
};

return (
  <Container>
    <Line type="line" data={data} options={options} />
  </Container>
);
};

const Container = styled.div`
  width: 90vw;
  max-width: 900px;
`;