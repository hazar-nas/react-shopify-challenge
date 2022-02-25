import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { DataStore } from './store/DataStore'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <DataStore>
    <Router>
      <App />
    </Router>
  </DataStore>,
  document.getElementById('root')
)
