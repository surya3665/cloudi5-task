import React from 'react'
import "./header.css"
import cloudi5 from "/assets/image/cloudi5.png"
import grp from "/assets/image/grp.jpg"
import { SiTicktick } from "react-icons/si";


const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='img'>
           <img src= {cloudi5} alt="img"/>
        </div>
        <div className='phara'>
        <div className='h2'>
            <h2>Crafting Digital Experiences,<br /> One Pixel at a Time.</h2>
        </div>
        <div className='list'>
            <ul>
            <SiTicktick /><li>Innovation</li>
            <SiTicktick /><li>Online Presence</li>
            <SiTicktick /><li>Creative</li>
            </ul>
        </div>
        <div className='btn'>
            <button className='btn1'>Register Now</button>
        </div>
        </div>
    </div>
    <div className='grp'>
        <img className='grp1' src={grp} alt="img"/>
    </div>
    </>
  )
}

export default Header