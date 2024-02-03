import React from 'react'


//Icons
import DateIcon from '../assets/calendar.svg';
import EmployeeIcon from '../assets/tag-user.svg'
import DepartMentIcon from '../assets/group_1.svg'
import ArrowDownIcon from '../assets/arrow-down.svg'

const Header = () => {
  return (
    <div className=' flex justify-between items-center mt-[30px] text-[12px] font-medium py-[22px] px-[31px]  '>

        {/* Calender */}
        <div className='flex gap-1 items-center'>
            <img src={DateIcon} />
            <span>Date:</span>
            <span>December 1, 2023 to Dece..</span>
        </div>

        {/* Employee */}
        <div className='flex gap-1 items-center'>
        <img src={EmployeeIcon} />
            <span className='text-[#1492E6]'>Faria Abbashi</span>
            <img src={ArrowDownIcon} />
        </div>
        
        {/* Department */}
        <div className='flex gap-1  items-center'>
        <img src={DepartMentIcon} />
            <span >Department:</span>
           <span className='text-[#1492E6]'>Web Development</span>
           <img src={ArrowDownIcon} />
         </div>

    </div>
  )
}

export default Header