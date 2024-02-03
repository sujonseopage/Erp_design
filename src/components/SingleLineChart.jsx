import React from 'react';
import { Bar } from 'react-chartjs-2';

import Line1 from '../assets/Line1.png'
import Line2 from '../assets/Line2.jpg'
import lineUp from '../assets/lineUp.png'
import lineDown from '../assets/lineDown.png'

const SingleLineChart = () => {
  const x = 37;
  const y = 80;

   // Function to create a linear gradient
   const createGradient = () => {
    const gradient = document.createElement('canvas').getContext('2d');
    const barGradient = gradient.createLinearGradient(0, 0, 0, 100);
    barGradient.addColorStop(0.6, 'rgba(0, 0, 255, 1)');
    barGradient.addColorStop(1, 'rgba(0, 0, 255, 0.6)');
    return barGradient;
  };

  const data = {
    labels: [0, 10, 20, 30, 40, 60, 70, 80, 90, 100],
    datasets: [
      {
        data: [
          {
            x: x,
            y: y,
          },
        ],
        backgroundColor: createGradient(), // Use the gradient function to create a gradient
        borderColor: 'rgba(0, 0, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: (value) => `${value}%`,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          values: [0, 10, 20, 40, 50, 60, 70, 80, 90, 100],
          callback: (value) => `${value}%`,
        },
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      bar: {
        // borderRadius: 10,
        barThickness: 10, // Set the fixed bar width
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    animation: false, // Disable animation
  };

//   <div className='w-[500px] ml-[500px]'>
//       <h2 className="text-2xl font-bold mb-4">Single Line Bar Chart</h2>
//       <Bar data={data} options={options} />
    // </div>

  return (
    <div className=" w-[708px] h-[416px] mt-[20px] flex flex-col gap-2  justify-center border border-blue-500 rounded-lg p-4">
    <div className="flex justify-between w-full 		">
        <span className="text-[#000000] text-[14px]">Unreleased Payment Amount</span>
        <div className="bg-[#E7F5FF] px-[30px] py-[1px] rounded-lg"><span className="text-[#1492E6] text-[16px] font-medium	">Ideal</span></div>
    </div>

    <div className="flex items-center h-full">

        <div className="h-full flex items-center flex-0 mt-[-50px] ml-[-40px] ">
            <div className="flex flex-col justify-center gap-[65px] h-full items-center flex-0"> 
                    <div className="">
                    <img src={lineDown} alt="line-down" className="" />
                    </div>
                    <div className="text-[#1492E6] text-[12px] font-medium rotate-90">Incentive Percentage</div>
                    <div className="">
                    <img src={lineUp} alt="line-up" />
                    </div>
                </div>
        </div>
        
        <div className="flex-1">
        <Bar data={data} options={options} />
        </div>
    </div>

    <div className="flex items-center gap-[28px] w-full justify-end">
        <img src={Line1} alt="line-right" />
        <span className="text-[12px] font-medium text-[#1492E6]">Milestone cancelation rate</span>
        <img src={Line2} alt="line-left" />
    </div>
</div>
  );
};

export default SingleLineChart;
