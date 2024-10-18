import React from 'react'
import "./pinkContantCard.css"

const PinkContantCard = ({title,title1,title2,title3,phara1,phara2,phara3,icon}) => {
  return (
    <>
        <div className='pinkbox'>
            <h1 className='title'>
                {title} <span>{title1}</span>
            </h1>
            <h4 className='contant-phara'>
            {icon} {phara1} <br /> {phara2}
            </h4>
        </div>
        <div>
            <h3>
            {title2} <br />{title3}
            </h3>
            <p>
                {phara3}
            </p>
        </div>
    </>
  )
}

export default PinkContantCard