import React from 'react'
import Nominates from './Search'
import Search from './Nominates'

const HomePage = () => {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 min-h-screen'>
      <Nominates />
      <Search />
    </div>
  )
}

export default HomePage
