import React, { useContext } from 'react'
import { FaRegWindowClose } from 'react-icons/fa'
import { DataContext } from '../store/DataStore'
import { FaRegStar } from 'react-icons/fa'

const NominateItem = ({ item }) => {
  const { dispatch } = useContext(DataContext)

  const removeItem = (deletedItem) => {
    dispatch({ type: 'REMOVE_ITEM', payload: deletedItem })
  }

  // console.log(item)

  return (
    <div className='flex px-10 pb-2 mr-5 mb-4 border-solid border-2 border-green-100'>
      <img
        alt='posterr.png'
        className='w-24 h-32 rounded-md z-10 -mt-2'
        src={item.Poster}
      />
      <div className='pl-8 pt-2 flex flex-col '>
        <h3 className='text-gray-100 font-semibold'>{item.Title}</h3>
        <div className='flex items-center mt-2'>
          <FaRegStar className='text-white mr-1 ' />
          <span className='text-white'>{item.imdbRating}</span>
        </div>
        <p className='text-white mt-2 font-light'>{item.Genre}</p>
      </div>
      <div className='ml-auto self-center'>
        <FaRegWindowClose
          className='text-white text-2xl  rounded-lg hover:cursor-pointer'
          onClick={() => removeItem(item.Title)}
        />
      </div>
    </div>
  )
}

export default NominateItem
