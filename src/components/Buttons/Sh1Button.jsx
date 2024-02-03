import React from 'react'

const Sh1Button = ({ButtonName, active}) => {
  return (
    <div className={`${active==='true'?"bg-[#1492E6] text-white" : "bg-white text-[#1492E6]"} flex min-w-[145px] h-[52px] justify-center items-center  rounded-lg border border-solid border-[#1492E6]  py-[40px] px-[20px] `}  >{ButtonName}</div>
  )
}

export default Sh1Button