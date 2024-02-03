import React from 'react'
import taka from '../assets/taka.jpg'

const Footer = () => {
  return (
    <div className='h-[221.522px] w-[1511px] bg-[#1492E6] rounded-lg flex  text-white gap-[90px] ml-[50px] mt-[21.46px] mb-[46.48px] mr-[99px] py-[19.1px] px-[31px] '>
        <div className='flex flex-1 gap-[57px] justify-evenly items-center '>
  {/* first */}
  <div className='flex flex-col gap-[17px] justify-center'>
            <span>You Regular points: 500pt</span>
            <span>You Regular points: 500pt</span>
            <span>You Regular points: 500pt</span>
            <span>You Regular points: 500pt</span>
        </div>

        {/* second */}
        <div className='w-[1px] h-[121.891px] bg-white'></div>

        {/* third */}
        <div className='flex flex-col gap-[18px] justify-center'>
        <span>You Regular points: 500pt</span>
            <span>You Regular points: 500pt</span>
            <span>You Regular points: 500pt</span>
        </div>

        {/* fourth */}
        <div className='w-[1px] h-[121.891px] bg-white' ></div>

        {/* fifth */}
        <div className='flex flex-col gap-[15px] justify-center'>
        
            <span>You Regular points: 500pt</span>
            <span>You Regular points: 500pt</span>
            <span>You Regular points: 500pt</span>  
           
        </div>
        </div>
        <div>
            {/* sixth */}
        <div className='w-[280px] h-[183.508px] flex flex-col justify-center items-center bg-white flex-0 rounded-lg gap-1.5  mr-[35px]'>
                <div className='bg-[#CEEBFF] p-1.5 rounded-lg'>
                <img src={taka} alt="value_icon" />
                </div>
               
                <span className='text-black text-[14px] font-medium'>Your final incentive amount </span>
                <span className='text-black text-[20px] font-semibold'>16005 Taka</span>
        </div>
        </div>
      

        
    </div>
  )
}

export default Footer