import React, { useContext, useState } from 'react'
import { DataContext } from '../store/DataStore'
import { FaShopify } from 'react-icons/fa'
import Results from './Results'
import EndSelection from './EndSelection'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchType, setSearchType] = useState('movie')
  const { state, dispatch } = useContext(DataContext)

  let formatQuery = searchTerm.replaceAll(' ', '+').toLowerCase()
  const getData = async (e) => {
    e.preventDefault()
    dispatch({ type: 'RESET_RESULTS' })
    let res = await fetch(
      `http://www.omdbapi.com/?s=${formatQuery}&type=${searchType}&apikey=b8767efb`
    )
    let fetchData = await res.json()
    if (fetchData.Response != 'True') {
      dispatch({ type: 'SET_ERROR_RESULTS', payload: fetchData.Error })
      setSearchTerm('')
    }
    dispatch({ type: 'SET_SEARCH_RESULTS', payload: fetchData.Search })
    setSearchTerm('')
  }

  const handleSearchType = (e) => {
    setSearchType(e.target.value)
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className=' ml-0 lg:ml-20 w-full lg:max-w-sm  lg:flex lg:flex-col lg:items-center lg:h-full'>
      <div className='flex mt-8 my-8 md:my-12 lg:my-14 h-22 w-full '>
        <FaShopify className=' w-16 h-11  lg:w-20  lg:h-10 text-green-600 ' />
        <span className=' self-center font-bold lg:text-2xl'>
          the movies & series
        </span>
      </div>
      <h1 className=' pl-3 text-3xl w-full block lg:text-5xl lg:pl-0 font-bold mb-2 text-amber-600 text-left '>
        Nominate —
      </h1>
      <h2 className=' pl-3 w-full text-2xl lg:text-4xl lg:pl-0 -tracking-tighter text-green-800 font-bold mb-2'>
        amazing cinema
      </h2>
      <p className=' pl-3 text-gray-500 text-md w-1/2 lg:text-2xl lg:pl-0  lg:w-full lg:mb-6'>
        Search below to nominate your top 5 favorite movies & series.
      </p>

      <div className='flex items-center h-16 w-full'>
        <div>
          <select
            className='pl-2 lg:pl-0 rounded-md bg-[#fbf7ed] outline-none'
            onChange={handleSearchType}
          >
            <option>movie</option>
            <option>series</option>
          </select>
        </div>
        <form onSubmit={getData}>
          <input
            className='py-0.5 h-8 lg:mx-1.5  lg:py-1 lg:px-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-green-600  rounded-md sm:text-sm focus:ring-1 '
            type='text'
            disabled={state?.selectedItems?.length >= 5}
            value={searchTerm}
            onChange={handleChange}
          />
          <button
            className=' px-3.5 ml-1 lg:ml-0 font-thin lg:font-medium rounded-md border-solid border-2 border-green-600 lg:px-5 hover:bg-[#008060] hover:text-white'
            type='submit'
          >
            search
          </button>
        </form>
      </div>
      {state.error && (
        <div className='bg-red-300 p-2 w-full text-md text-red-700'>
          {state.error}
        </div>
      )}

      {state.data &&
        (state.selectedItems && state?.selectedItems?.length >= 5 ? (
          <EndSelection />
        ) : (
          state.data.map((s) => {
            return <Results key={s.imdbID} data={s} />
          })
        ))}
    </div>
  )
}

export default Search
