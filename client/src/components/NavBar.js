import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
    <nav>
      <div className="logo">Sheclient.co</div>
      <ul>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/partners'>Partners</Link></li>
        <li><Link to='/'>About us</Link></li>
        <li><Link to='/Services'>Services</Link></li>
        <li><Link to='/Signup'>Signup</Link></li>

      </ul>
      <button>Log in</button>
      <button className="donate-btn">Donate</button>
    </nav>
  </header>
  )
}

export default NavBar