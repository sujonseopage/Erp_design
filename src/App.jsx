import React from 'react'
import Header from './components/Header'
import Subheader1 from './components/Subheader1'
import Subheader2 from './components/Subheader2'
import UpCrossSale from './components/UpCrossSale'
import Footer from './components/Footer'
import BarChart from './components/BarChart'
import SingleLineChart from './components/SingleLineChart'
import GraphReport from './components/GraphReport'


const App = () => {
  return (
    <div className='w-[1680px] flex justify-center items-center  main_div overflow-y-auto'>
      <div>
      <Header />
     
     <div className='w-[1663px] shrink-0 flex flex-col justify-center'>
     <Subheader1 />
     <Subheader2 />

     <div className='w-[1508px] h-[3084.043px] shrink-0 bg-[#F2F9FE] mt-[32px] ml-[50px] p-4'>
        {/* 1st row */}
        <div className='flex gap-[28px] items-center justify-center'>
          <BarChart />
          <SingleLineChart />
        </div>

        {/* 2st row */}
        <div className='flex gap-[28px] items-center justify-center'>
          <BarChart />
          <SingleLineChart />
        </div>

        {/* 3st row */}
        <div className='flex gap-[28px] items-center justify-center'>
          <BarChart />
          <SingleLineChart />
        </div>

        {/* 4st row */}
        <div className='flex gap-[28px] items-center justify-center'>
          <BarChart />
          <SingleLineChart />
        </div>
        {/* 5st row */}
        <div className='flex gap-[28px] items-center justify-center'>
          <BarChart />
          <SingleLineChart />
        </div>
        {/* 6st row */}
        <div className='flex gap-[28px] items-center justify-center'>
          <BarChart />
          <SingleLineChart />
        </div>
         {/* 7st row */}
         <div className='flex gap-[28px] items-center justify-center'>
          <BarChart />
          <SingleLineChart />
        </div>

     </div>

     {/* Graph Report Div */}
     <div className='w-[1508px] h-[525.992px] bg-[#F2F9FE] mt-[32.6px] ml-[47px] rounded-lg'>
      <GraphReport />
     </div>

    {/* Upsale cross sale */}
    <span className='text-[20px] font-medium ml-[127px] text-start mt-[51.01px] mb-[28.36]'>Upsale/cross sale amount </span>
    <div className='w-[1508px] h-[553.381px] bg-[#F2F9FE] ml-[50px] rounded-lg p-2 flex flex-col gap-[24px]'>
      
        <div className='flex gap-[28px] items-center justify-center'>
            <BarChart />
            <SingleLineChart />
          </div>
      
     <UpCrossSale />
    </div>

    {/* Bonus Point */}
    <span className='text-[20px] font-medium mt-[56.62px] mb-[19px] ml-[50px] text-start'>Bonus Points based on release amount</span>
   
    <div className='w-[1508px] h-[553.381px] bg-[#F2F9FE] ml-[50px] rounded-lg p-2 flex flex-col gap-[24px]'>
      
        <div className='flex gap-[28px] items-center justify-center'>
            <BarChart />
            <SingleLineChart />
          </div>
      
     <UpCrossSale />
    </div>

     {/* <BarChart /> */}
     {/* <SingleLineChart /> */}
     <Footer />
     </div>
      </div>
      
    </div>
  )
}

export default App