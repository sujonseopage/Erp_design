import React from 'react'
import starIcon from '../../assets/star-icon.svg'
import { FaStar } from "react-icons/fa6";

const Sh2Button = ({pointContent,value, amount}) => {
    return (
        <div className='w-[708px] h-[88.931px] border-solid border-blue-300 bg-[#1492E6] rounded-lg flex items-center justify-center' >
            <div className='flex  items-center justify-center gap-[12px] '>

                <div className=' w-[40px] h-[40px] p-8 flex items-center justify-center bg-white/20 rounded-lg'>
                    <div className='bg-white p-2 rounded-full flex items-center justify-center ' >             
                        <FaStar  className='text-[#1492E6] w-[24px] h-[24px]'/>
                    </div>  
                </div>

                <div className='text-[18px] font-medium text-white'>
                    {pointContent}: <span><span className='text-[20px] font-semibold'>{value}</span>{amount === 'true' ? 'taka' : 'pt'}</span>
                </div>
            </div>
        </div>
      )
}

export default Sh2Button