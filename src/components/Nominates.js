import React, { useContext } from 'react'
import { DataContext } from '../store/DataStore'
import NominateItem from './NominateItem'

const Nominates = () => {
  const { state } = useContext(DataContext)

  return (
    <div className='bg-[#004c3f] w-full lg:h-full'>
      <div className='ml-2 lg:ml-8'>
        <p className='text-white mt-3 my-6'>
          Nominated {state?.selectedItems?.length} /5
        </p>
        {!!state.selectedItems
          ? state.selectedItems.map((item) => (
              <NominateItem key={item.imdbID} item={item} />
            ))
          : null}
      </div>
    </div>
  )
}

export default Nominates
