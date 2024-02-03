import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import "chartjs-plugin-datalabels";

import Line1 from '../assets/Line1.png'
import Line2 from '../assets/Line2.jpg'
import lineUp from '../assets/lineUp.png'
import lineDown from '../assets/lineDown.png'

const BarChart = () => {
	const chartRef = useRef(null);
	const chartInstanceRef = useRef(null);

	useEffect(() => {
		const data = [
			{ label: "Category 1", value: 100 },
			{ label: "Category 2", value: 80 },
			{ label: "Category 3", value: 50 },
			{ label: "Category 4", value: 20 },
			{ label: "Category 5", value: 4 },
		];
		const valuesArray =  data.map((item)=> item.value)

		if (chartRef.current) {
			const ctx = chartRef.current.getContext("2d");

			if (chartInstanceRef.current) {
				chartInstanceRef.current.destroy();
			}

			chartInstanceRef.current = new Chart(ctx, {
				type: "bar",
				
				data: {
					labels: data.map((item) => item.label),
					datasets: [
						{
							label: "Values",
							data: data.map((item) => item.value),
							backgroundColor: (context) => {
								const index = context.dataIndex;
								const gradient = ctx.createLinearGradient(
									0,
									0,
									0,
									200
								);

								if (data[index].value < 6) {
									gradient.addColorStop(
										0.9,
										"rgba(255, 192, 203, 0.6)"
									);
									gradient.addColorStop(
										1,
										"rgba(255, 192, 203, 1)"
									);
								} else if (data[index].value < 10) {
									gradient.addColorStop(
										0.8,
										"rgba(255, 140, 0, 0.6)"
									);
									gradient.addColorStop(
										1,
										"rgba(255, 140, 0, 1)"
									);
								} else if (data[index].value < 60) {
									gradient.addColorStop(
										0.6,
										"rgba(255, 140, 0, 1)"
									);
									gradient.addColorStop(
										1,
										"rgba(255, 140, 0, 0.4)"
									);
								} else if (data[index].value < 81) {
									gradient.addColorStop(
										0.6,
										"rgba(0, 0, 255, 1)"
									);
									gradient.addColorStop(
										1,
										"rgba(0, 0, 255, 0.3)"
									);
								} else {
									gradient.addColorStop(
										0.6,
										"rgba(0, 128, 0, 1)"
									);
									gradient.addColorStop(
										1,
										"rgba(0, 128, 0, 0.3)"
									);
								}

								return gradient;
							},
							borderColor: (context) => {
								const index = context.dataIndex;
								if (index === 0) {
									return "rgba(255, 192, 203, 1)";
								} else if (data[index].value < 10) {
									return "rgba(255, 165, 0, 1)";
								} else if (data[index].value < 60) {
									return "rgba(255, 255, 0, 1)";
								} else if (data[index].value < 81) {
									return "rgba(0, 0, 255, 1)";
								} else {
									return "rgba(0, 128, 0, 1)";
								}
							},
							
							
							
						},
					],
				},
				options: {
					scales: {
						x: {
							grid: {
								display: false,
								// drawBorder: false,
									 
							},
						},
						y: {

							afterTickToLabelConversion:(ctx)=> {
								console.log(ctx.ticks)
								ctx.ticks = [];
								valuesArray.forEach((value) => {
									ctx.ticks.push({ value: value, label: `${value} %` });
								  });
							},

							ticks: {
								
								callback: (value) => {
									
									return valuesArray.includes(value) ? value + "%" : "";
								},
								
								
							},
							grid: {
								drawTicks:false,
								display: true,
								drawBorder:false,
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
							borderRadius: 10,
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
				},
				
			});
		}

		return () => {
			if (chartInstanceRef.current) {
				chartInstanceRef.current.destroy();
			}
		};
	}, []); // Empty dependency array since data is now defined inside the useEffect

	return (

		<div className=" w-[708px] h-[416px] mt-[20px] flex flex-col gap-2  justify-center border border-blue-500 rounded-lg p-4">
			<div className="flex justify-between w-full">
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
				<canvas ref={chartRef} ></canvas>
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

export default BarChart;
