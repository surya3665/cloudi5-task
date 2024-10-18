import React from 'react'
import "./ourServicesCard.css"

const OurServicesCard = ({icon,text,text2}) => {
  return (
    <div className='icon'>
        <div>
            <div className='icon-1'>
            <h2>{icon}</h2>
            </div>
            <h3>
                {text} <br />
                {text2}
            </h3>
        </div>
    </div>
  )
}

export default OurServicesCard