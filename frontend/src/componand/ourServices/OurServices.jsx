import React from 'react'
import "./ourServices.css"
import OurServicesCard from './ourServicesCard/OurServicesCard'
import { FiArrowRightCircle } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { PiHandSwipeLeftLight } from "react-icons/pi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import { FaHandHolding } from "react-icons/fa6";
import { BsShop } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";



const OurServices = () => {
  return (
    <div>
      <div className='ourServices-all'>
        <div className='ourSevices-contant'>
        <div className='ourServices'>
            <h2>Our Services</h2>
        </div>
        <div className='ourServices-h2'>
            <h2>“User-Centric Design, Responsive Solutions, Tailored Solutions”</h2>
        </div>
        </div>
        <div className='card'>
        <OurServicesCard icon={<FiArrowRightCircle />} text={"Access to Existing"} text2={"Customers"} />
        <OurServicesCard icon={<IoEyeOutline />} text={"Brand and"} text2={"Visibility"} />
        <OurServicesCard icon={<PiHandSwipeLeftLight />} text={"Easy to use Admin"}  text2={"Panel"}/>
        <OurServicesCard icon={<HiOutlineSpeakerphone />} text={"Gain from our digital"} text2={"marketing initiative"} />
        <OurServicesCard icon={<CiSettings />} text={"Dedicated Success"} text2={"Executive"} />
        <OurServicesCard icon={<FaHandHolding />} text={"Training and"} text2={"guidance"} />
        <OurServicesCard icon={<BsShop />} text={"Feature at your"}  text2={"service"}/>
        <OurServicesCard icon={<FaHandHoldingDollar />} text={"Working capital"} text2={"support"} />
        </div>
        </div>
    </div>
  )
}

export default OurServices