import React, { useContext, useEffect } from 'react'
import HomePage from './components/HomePage'
import { DataContext } from './store/DataStore'
import { Routes, Route, useNavigate } from 'react-router-dom'
import WinnerPage from './components/WinnerPage'
import Footer from './components/Footer'

function App() {
  const {
    state: { selectedItems },
  } = useContext(DataContext)

  let navigate = useNavigate()

  useEffect(() => {
    selectedItems.length < 5 && navigate('/')
  }, [selectedItems.length, navigate])

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/winner' element={<WinnerPage />} />
      </Routes>
    </div>
  )
}

export default App
