import React from 'react'
import { useNavigate } from 'react-router-dom'

const EndSelection = () => {
  let navigate = useNavigate()
  return (
    <div className='flex bg-[#ede8db] py-14 flex-col justify-center items-center w-full '>
      <h1 className='text-green-800 text-3xl'>Great Choices!</h1>
      <p className=' m-3 text-sm w-2/3  text-center  '>
        You have reached the 5 film limit. Remove any film to select a new one.
      </p>
      <button
        onClick={() => navigate('/winner')}
        className='bg-[#004c3f] text-white py-2 px-6 text-md font-semibold hover:bg-green-900 hover:scale-105'
      >
        Reveal Winner!
      </button>
    </div>
  )
}

export default EndSelection
