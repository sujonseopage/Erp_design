import React from 'react'
import point from '../assets/point.jpg'
import { Modal, Button } from 'react-bootstrap';
import {useState} from 'react'

const GraphReport = () => {

    const [isModalOpen, setModalOpen] = useState(false);

  const handleNoteClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

    
  return (
    <div className="grid grid-cols-4 gap-[20px] h-full p-8">
    {/* First Div */}
     <div className='flex flex-col gap-[37px] h-full w-[250px] '>
        <span>Revision vs Task Ration:</span>
        <span className='text-orange-400'>Goal achieve rate:</span>
        <span>Negative points vs Positive Points:</span>
        <span>Percentage of delayed Projects:</span>
        <span>Milestone cancelation rate:</span>
        <span>Unreleased payment amount</span>
        <span>Deadline miss rate </span>
        <span className='text-orange-400'>Average</span>
     </div>

    {/* Second Div */}
    <div className='flex flex-col gap-[37px] h-full  ml-[-30px]'>
        <span className='text-orange-400'>Achieved: 80%</span>
        <span>Achieved: 00%:</span>
        <span>Achieved: 80% </span>
        <span>Achieved: 29%</span>
        <span>Achieved: 03%</span>
        <span>Achieved: 70%</span>
        <span>Achieved: 40% </span>
        <span className='text-orange-400'>0.00%</span>
     </div>

    {/* Third Div */}
    <div className='flex flex-col gap-[14px] h-full  ml-[-150px] mr-[200px]'>
       <div>
        <div className='flex justify-between'>
            <span>Revision vs task ratio</span>
            <span>50/100%</span>
        </div>
        <div>
        <div className='bg-gradient-to-r from-blue-300 to-blue-500 h-[17px] rounded-r-lg w-[50%]'> </div>
        </div>
       </div>

       <div>
        <div className='flex justify-between'>
            <span>Goal achieve rate</span>
            <span>00/100%</span>
        </div>
        <div className='bg-gradient-to-r from-orange-300 to-orange-500 h-[17px] rounded-r-lg w-[8%]'> </div>
       </div>

       <div>
        <div className='flex justify-between'>
            <span>Negative points vs positive points</span>
            <span>80/100%</span>
        </div>
        <div className='bg-gradient-to-r from-blue-300 to-blue-500 h-[17px] rounded-r-lg w-[80%]'> </div>
       </div>

       <div>
        <div className='flex justify-between'>
            <span>Percentage of delayed projects:</span>
            <span>29/120%</span>
        </div>
        <div className='bg-gradient-to-r from-blue-300 to-blue-500 h-[17px] rounded-r-lg w-[29%]'> </div>
       </div>

       <div>
        <div className='flex justify-between'>
            <span>Milestone cancelation rate:</span>
            <span>03/100%</span>
        </div>
        <div className='bg-gradient-to-r from-blue-300 to-blue-500 h-[17px] rounded-r-lg w-[3%]'> </div>
       </div>

       <div>
        <div className='flex justify-between'>
            <span>Payment release rate:</span>
            <span>$8350/$10000</span>
        </div>
        <div className='bg-gradient-to-r from-blue-300 to-blue-500 h-[17px] rounded-r-lg w-80'> </div>
       </div>

       <div>
        <div className='flex justify-between'>
            <span>Deadline miss rate </span>
            <span>40/100%</span>
        </div>
        <div className='bg-gradient-to-r from-blue-300 to-blue-500 h-[17px] rounded-r-lg w-[40%]'> </div>
       </div>

       <div>
        <div className='flex justify-between'>
            <span>Average:</span>
            <span>00/100%</span>
        </div>
        <div className='bg-gradient-to-r from-orange-300 to-orange-500 h-[17px] rounded-r-lg w-[8%]'> </div>
       </div>
     </div>

    {/* Fourth Div */}
    <div className='flex flex-col justify-center gap-[29px]'>
      
      {/* first */}
    <div className='flex items-center justify-center gap-[12px]  '>
  <div  className='bg-[#CEEBFF] p-2 flex justify-center items-center rounded-lg'>
    <img src={point} alt="upsale_crosssale_point" />
  </div>
  <div className='text-[16px] font-medium'>
      Your upsale/cross sales points: 
      <span className='text-[21px] font-semibold text-orange-400 underline'><span className='ml-1 mr-1 cursor-pointer'onClick={handleNoteClick}>00</span>pt</span>
    </div>
</div>
    {/* second */}
    <div className='flex items-center justify-center gap-[12px]  '>
  <div  className='bg-[#CEEBFF] p-2 flex justify-center items-center rounded-lg'>
    <img src={point} alt="upsale_crosssale_point" />
  </div>
  <div className='text-[16px] font-medium'>
      Your upsale/cross sales points: 
      <span className='text-[21px] font-semibold text-orange-400 underline'onClick={handleNoteClick}><span className='ml-1 mr-1 cursor-pointer'>400</span>pt</span>
    </div>
</div>

    <div>
    <span className='text-orange-500 cursor-pointer' onClick={handleNoteClick}>Note:</span> If you fail to maintain the minimum incentive slab for
any of the criteria, your overall incentive percentage will be zero. 

    </div>

    </div>

    {/* Modal */}
    <Modal show={isModalOpen} onHide={closeModal} centered className='w-[400px] h-[300] bg-blue300'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <p>This is after multiplying your regular points with the average percentage calculated earlier</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


  </div>
  )
}

export default GraphReport