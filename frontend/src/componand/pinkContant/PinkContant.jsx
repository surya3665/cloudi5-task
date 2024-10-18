import React from 'react'
import "./pinkContant.css"
import PinkContantCard from './PinkContantCard/PinkContantCard'
import women from "/assets/image/women.png"
import NumberCard from './numberCard/NumberCard'
import { SiTicktick } from "react-icons/si";

const PinkContant = () => {
  return (
    <>
        <div className='pink'>
            <div>
                <PinkContantCard title={"Why Choose Cloudi5"} title1={"for Your Web Design Needs :"}/>
            </div>
            <div className='pink2'>
                <PinkContantCard icon={<SiTicktick />} phara1={"With years of experience in the industry, our team brings a wealth"} phara2={"of expertise to every project."}/>
                <PinkContantCard icon={<SiTicktick />} phara1={"We have successfully designed and developed websites for a diverse"} phara2={"range of clients across various industries."}/>
                <PinkContantCard icon={<SiTicktick />} phara1={"From seamless navigation to compelling calls-to-action, we ensure "} phara2={"that every aspect of your website is designed with the user in mind."}/>
                <PinkContantCard icon={<SiTicktick />} phara1={"We understand that every business is unique."}/>
            </div>
        </div>
        <div className='women'>
        <img src={women} alt="img" width={160} height={300} />
        </div>
        <div className='green'>
          <div>
          <PinkContantCard title2={"Ready to elevate your online presence?"} title3={"Let's turn your vision into reality!"}/>
          </div>
          <div>
            <PinkContantCard phara3={"Contact us today to schedule a consultation and discover our exceptional web design services."} />
          </div>
          <div className='green-btn'>
           <button>Register Now</button>
          </div>
        </div>
        <div className='register'>
        <div className='register-phara'>
          <h1>Register your interest and wait for callback</h1>
          <p>You can own a branded licensed website in 5 simple steps</p>
        </div>
        <div className='register-num'>
          <NumberCard number={"01"}  phara4={"Register your interest"}/>
          <div className='line'></div>
          <NumberCard number={"02"} phara4={"Team connects with you"}/>
          <div className='line'> </div>
          <NumberCard number={"03"} phara4={"Submit your proposal"}/>
          <div className='line'></div>
          <NumberCard number={"04"} phara4={"Connect our Agency"}/>
          <div className='line'></div>
          <NumberCard number={"05"} phara4={"Start business operation"}/>
        </div>
        </div>
    </>
  )
}

export default PinkContant