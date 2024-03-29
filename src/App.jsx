import "./app.scss"
import Home from "./home/Home";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Api_App from './api'
import app from "./Movies"
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Cast_api from './pages/detail/cast_api'
import Login from './pages/login/login' 


const App = () => {


  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/detail' element={<Cast_api />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
    // <div>
    //   <Api_App />
    // </div>
  )
}

export default App
