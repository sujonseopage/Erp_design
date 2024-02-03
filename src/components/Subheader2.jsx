import React from 'react'
import Sh2Button from './Buttons/Sh2Button'

const Subheader2 = () => {
  return (

    // px-[30] py-[23px]
    // bg-[#F2F9FE]
    <div className='w-[1506.5px] shrink-0 flex justify-center items-center flex-col ml-[50px]'>
        <div className=' w-full bg-[#F2F9FE]  mt-[34.66px] flex justify-between  gap-[28px] p-[30px] rounded-lg'>
            <Sh2Button pointContent='Your obtained Points'value='500' />
             <Sh2Button pointContent='Cash value for every regular point'value='20' amount='true'  />
        </div>
    </div>
   
  )
}

export default Subheader2