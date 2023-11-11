import React from 'react'


const Welcom = () => {
  return (
    <div className='all'>
       <div className='login-main'>
        <img src="https://i.ytimg.com/vi/4JA_OY5OZF8/maxresdefault.jpg" alt="" className='salom' />
       </div>
       <div className='login-btn'>
            <h2 className='well'>Welcome</h2>
            <p className='log'>Let’s log you in quickly</p>
            <input type="email"  placeholder='Enter oyur email'/>
            <input type="password" placeholder='Enter your password'/>
            <button className='uplogin'>LOGIN</button>
       </div>
    </div>
  )
}

export default Welcom
