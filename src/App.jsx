import React from 'react'
import './App.css'
import Dashboard from './Components/Dashboard'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      </Router>
    </>
  )
}

export default App
