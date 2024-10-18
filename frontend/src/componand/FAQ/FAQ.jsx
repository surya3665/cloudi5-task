import React from 'react'
import {faqData} from "../../utils/data.js"
import "./FAQ.css"
import FAQ from './FAQCard/FAQCards'

const FAQCard = () => {
  const renderFAQs = () => {
  return  faqData.map((faq) => {
      return (
        <FAQ key={faq.id} 
        question={faq.question} 
        answer={faq.answer}/>
      )
    })
  }
  return (
    <div>
       <div className='heading'>
            <h1>Frequently Asked Questions</h1>
            <p>(FAQ's)</p>
        </div>
      {renderFAQs()}
    </div>
  )
}

export default FAQCard