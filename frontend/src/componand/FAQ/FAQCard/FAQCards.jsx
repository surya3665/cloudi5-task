import React, { useState } from 'react'
import "./FAQCards.css"
import { FaAngleDown } from "react-icons/fa";

const FAQ = ({question,answer}) => {
  const [isVisible,setIsVisible] = useState(false)
  const toggleFaq = () => {
    setIsVisible(!isVisible)
  }
  return (
    <div>
        <div className='faq' onClick={toggleFaq}>
        <div className='faq-item'>
          <p className="faq-text">{question}</p>
          <div className={`faq-icon ${isVisible ? 'rotate' : ""}`}>
          <FaAngleDown />
          </div>
          <div className={`hidden-box ${isVisible?'active-box':""}`}>
            <p>{answer}</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default FAQ