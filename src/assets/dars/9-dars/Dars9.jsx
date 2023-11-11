import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './Home'
import SinglaPage from './SinglaPage'
import News from './News'

const Dars9 = () => {
    let navigate = useNavigate()
    cohandleGo = () =>{
    nsole     
    }
  return (
    <React.Fragment>
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/news"}> News</Link>
        </div>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/news' element={<News />} />
            <Route path='/new:id' element={<SinglaPage />} />
            <Route path='*' element={<h1>404</h1>} />
        </Routes>
    </React.Fragment>
  )
}

export default Dars9

