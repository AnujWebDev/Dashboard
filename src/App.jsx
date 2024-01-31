import React from 'react'
import './App.css'
import Dashboard from './Components/Dashboard'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import AdminLogin from './Components/AdminLogin'
import AdminDashboard from './Components/AdminDashboard'


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/adminlogin' element={<AdminLogin/>}></Route>
          <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
      </Routes>
      </Router>
    </>
  )
}

export default App
