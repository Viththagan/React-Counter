import { useState } from 'react'
import './App.css'
import { CountdownTimer } from './components/CoundownTimer'

function App() {

  return (
    <div className="App">
      <h1 className="title">React Timer</h1>
      <CountdownTimer />
    </div>
  )
}

export default App
