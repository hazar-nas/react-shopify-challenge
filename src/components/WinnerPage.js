import React, { useContext } from 'react'
import { DataContext } from '../store/DataStore'
import { useNavigate } from 'react-router-dom'
import { GiPodiumWinner } from 'react-icons/gi'

const WinnerPage = () => {
  let navigate = useNavigate()

  const { dispatch } = useContext(DataContext)

  const {
    state: { selectedItems },
  } = useContext(DataContext)

  let winnerItem =
    selectedItems[Math.floor(Math.random() * selectedItems.length)]

  const listItems = selectedItems?.map((item, index) => {
    if (item !== winnerItem) {
      return (
        <img
          alt={`selected${index}`}
          className='w-12 h- mr-1 rounded-md'
          key={index}
          src={item?.Poster}
        />
      )
    }
    return null
  })

  return (
    <div className='bg-[#004c3f] min-h-screen flex flex-col items-center'>
      <h1 className='pt-6 font-bold text-[#c1f0d0] mt-16 md:mt-20 lg:mt-24 text-3xl md:text-4xl lg:text-5xl tracking-wider'>
        The Winner
      </h1>
      <GiPodiumWinner className='w-28 h-14 text-[#008060] mt-8' />
      <div className=' flex flex-col justify-center items-center mt-5'>
        <img
          alt='poster.png'
          className='z-10 w-32 h-44 md:w-40 md:h-52 lg:w-40 lg:h-52 rounded-lg  mb-5 border-solid border-2 border-[#008060] p-1 '
          src={winnerItem?.Poster}
        />
        <h3 className=' font-semibold mb-5 w-full text-center text-lg md:text-xl lg:text-2xl text-[#c1f0d0]'>
          {winnerItem?.Title}
        </h3>
        <div className='flex'>{listItems}</div>
        <button
          onClick={() => {
            navigate('/')
            dispatch({ type: 'RESTART_GAME' })
          }}
          className='text-white  bg-[#008060] mt-8 rounded-md text-lg font-bold w-32 hover:bg-green-800 hover:scale-105 transition-colors '
        >
          Restart
        </button>
      </div>
    </div>
  )
}

export default WinnerPage
