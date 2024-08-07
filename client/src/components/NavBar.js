import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const NavBar = () => {
  return (
    <header className='header'>
    <nav className='nav'>
      <div className="logo">Sheclient.co</div>
      <ul className='nav-list'>
        <li className='nav-item'><Link to='/Home' className='nav-link'>Home</Link></li>
        <li className='nav-item'><Link to='/partners' className='nav-link'>Partners</Link></li>
        <li className='nav-item'><Link to='/' className='nav-link'>About us</Link></li>
        <li className='nav-item'><Link to='/Services' className='nav-link'>Services</Link></li>
        <li className='nav-item'><Link to='/Signup' className='nav-link'>Signup</Link></li>
      </ul>
      <div className="button-group">
        <button className='login-btn'>Log in</button>
        <button className="donate-btn">Donate</button>
      </div>
      
    </nav>
  </header>
  )
}

export default NavBar