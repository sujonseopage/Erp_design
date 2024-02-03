import React from 'react'
import Sh1Button from './Buttons/Sh1Button'

const Subheader1 = () => {
  return (
    <div className='flex justify-between mt-[40px] pl-[17px] pr-[58px] w-full text-[14px] ml-[10px]' >
        {/* Amount */}
        <div className='flex gap-[24px]'>
            <Sh1Button ButtonName='Current' active='true' />
            <Sh1Button ButtonName='Held Amount' />
            <Sh1Button ButtonName='Incentive Factors' />
          
        </div>

        {/* Time */}
        <div className='flex gap-[24px]'>
        <Sh1Button ButtonName='Monthly' active='true' />
            <Sh1Button ButtonName='Quarterly' />
            <Sh1Button ButtonName='Yearly' />
        </div>

    </div>
  )
}

export default Subheader1