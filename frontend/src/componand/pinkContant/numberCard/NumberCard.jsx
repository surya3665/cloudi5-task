import React from 'react'
import "./NumberCard.css"

const NumberCard = ({number,phara4}) => {
  return (
    <div>
        <div className='num'>
            <h1>{number}</h1> <br /> <div className='border-textLine'> <p>{phara4}</p></div>
        </div> 
    </div>
  )
}

export default NumberCard