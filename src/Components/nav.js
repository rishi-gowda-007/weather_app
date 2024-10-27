import React from 'react';
import './navstyle.css';

function Nav({ham,setHam}) {
  return (
    <div id='nav_main'>
        <div id="navimg"></div>
        <div id='nav_anchors_panel'>
            <a className='nav_anchor' href='https://openweathermap.org/products'>Products</a>
            <a className='nav_anchor' href='https://dashboard.openweather.co.uk/'>Dashboard</a>
            <a className='nav_anchor' href='https://openweathermap.org/pricing-corp'>Pricing</a>
            <a className='nav_anchor' href='https://openweathermap.org/industries'>Industries</a>
            <a className='nav_anchor' href='https://openweathermap.org/customer-stories'>Customer stories</a>
            <a className='nav_anchor' href='https://openweathermap.org/blog'>Blog</a>
            <a className='nav_anchor' href='https://openweathermap.org/technology'>Technology</a>
            <a className='nav_anchor' href='https://openweather.co.uk/about'>About us</a>
            <a className='nav_anchor' href='https://openweathermap.org/careers'>careers</a>
            <button id="nav_contactus">Contact Us</button>
        </div>
        <button id='nav_hamburger' onClick={()=>setHam(!ham)}>☰</button>
    </div>
  )
}

export default Nav;