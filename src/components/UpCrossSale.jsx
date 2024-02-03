import React from 'react'
import point from '../assets/point.jpg'
import taka from '../assets/taka.jpg'


// #F2F9FE
const UpCrossSale = () => {
  return (
    <div className='h-[84.071px]'>
          <div className=' rounded-lg mr-[20px] ml-[20px]'>
 <div className='flex justify-between items-center  bg-[#E1F3FF] px-4 py-[15px] rounded-lg'>

{/* Point */}
<div className='flex items-center justify-center gap-[12px]  '>
  <div  className='bg-[#CEEBFF] p-2 flex justify-center items-center rounded-lg'>
    <img src={point} alt="upsale_crosssale_point" />
  </div>
  <div className='text-[16px] font-medium'>
      Your upsale/cross sales points: 
      <span className='text-[21px] font-semibold text-[#1492E6]'><span className='ml-1'>60.05</span>pt</span>
    </div>
</div>

{/* Bar */}
<div className='w-[1px] h-[39px] bg-[#D8D8D8]'></div>

{/* Cash value */}
<div className='flex items-center justify-center gap-[12px] '>
<div  className='bg-[#CEEBFF] p-2 flex justify-center items-center rounded-lg' >
    <img src={taka} alt="upsale_crosssale_cash_value"   />
  </div>
  <div  className='text-[16px] font-medium'>
      Your upsale/cross sales points: 
      <span  className='text-[21px] font-semibold text-[#1492E6]'><span className='ml-1'>100</span>Taka</span>
    </div>
</div>
</div>
    </div>
    </div>
   
  )
}

export default UpCrossSale