import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Signup from './Signup'

const Homework9 = () => {
  return (
   <React.Fragment>
     <div className='salom'>
      <h1 className="hello">
        Hello Friend!
      </h1>
      <p className="about">
        Enter your personal details and start your journey with us
      </p>
      <button className="up">
        <Link to={"/"}>SIGN UP</Link>
      </button>
    </div>
    <Routes>
        <Route index element={<SIGN UP />} />
    </Routes>
   </React.Fragment>
    
  )
}

export default Homework9
