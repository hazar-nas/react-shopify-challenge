import React, { useContext } from 'react'
import { DataContext } from '../store/DataStore'

const Results = ({ data }) => {
  const { state, dispatch } = useContext(DataContext)
  // console.log(data.imdbID)

  const addNominatedItems = (data) => {
    fetch(`http://www.omdbapi.com/?i=${data.imdbID}&page=13&apikey=b8767efb`)
      .then((res) => res.json())
      .then((fetchData) => {
        if (state.selectedItems.length < 5) {
          dispatch({ type: 'ADD_ITEM', payload: fetchData })
        }
      })
  }

  // console.log(state.selectedItems)

  return (
    <div className='grid grid-cols-2 px-2 md:px-2  w-full justify-between mr-auto items-center lg:px-0 mb-2  last:border-b-0 border-solid border-b-2 border-b-gray-300'>
      <div className='flex flex-col'>
        <h2 className='text-green-700 font-bold'>{data.Title}</h2>
        <p className='font-light'>
          {data.Year} &#9737; {data.Type}
        </p>
      </div>
      <div className='text-right'>
        <button
          disabled={state.selectedItems.find(
            (selectedItem) => selectedItem.imdbID === data.imdbID
          )}
          onClick={() => addNominatedItems(data)}
          className=' hover:bg-[#2b7461] hover:scale-105 rounded-md bg-[#008060] px-3 py-1 text-white disabled:bg-green-100 disabled:text-gray-400'
        >
          Nominate
        </button>
      </div>
    </div>
  )
}

export default Results
