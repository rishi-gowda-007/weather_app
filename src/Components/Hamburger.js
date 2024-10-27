import React from 'react'
import './Hamburger.css'

function Hamburger({ham,setHam}) {
  const hamburger_style={
    display:ham?'flex':'none'
  }
    return (
        <div id='nav_anchors_panel_hamburger' style={hamburger_style}>
            <a className='nav_anchor' href='https://openweathermap.org/products'>Products</a>
            <a className='nav_anchor' href='https://dashboard.openweather.co.uk/'>Dashboard</a>
            <a className='nav_anchor' href='https://openweathermap.org/pricing-corp'>Pricing</a>
            <a className='nav_anchor' href='https://openweathermap.org/industries'>Industries</a>
            <a className='nav_anchor' href='https://openweathermap.org/customer-stories'>Customer stories</a>
            <a className='nav_anchor' href='https://openweathermap.org/blog'>Blog</a>
            <a className='nav_anchor' href='https://openweathermap.org/technology'>Technology</a>
            <a className='nav_anchor' href='https://openweather.co.uk/about'>About us</a>
            <a className='nav_anchor' href='https://openweathermap.org/careers'>careers</a>
            <button id="nav_contactus" >Contact Us</button>
            <button id='hamburger_close'  onClick={()=>setHam(!ham)}>close</button>
        </div>
  )
}

export default Hamburger