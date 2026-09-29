import React from 'react'
import Card from './components/Card.jsx'
import './index.css'
import './App.css'
import Navabar from './components/Navabar.jsx'

const App = () => {

  const name = "Rakshitha";
  const age = 21

  return (
    <div>
      <Navabar/> 
      <Card/>
    </div>
  )

}

export default App
