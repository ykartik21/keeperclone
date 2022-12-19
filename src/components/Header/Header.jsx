import React from 'react'

const Header = ({toggleTheme,theme}) => {
    
    const color = theme === "light" ? "black" : "white"; 
  return (
    <div className='header'>
        <span className='heading' style={{ color: color }}>Notes </span>
        <button className='toggle' onClick={()=>toggleTheme()}>{color == 'black' ? "Dark" : "Light"}</button>
    </div>
  )
}

export default Header