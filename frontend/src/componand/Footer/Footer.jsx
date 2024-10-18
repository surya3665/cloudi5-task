import React from 'react'
import "./footer.css"
import footerCloud from "/assets/image/cloudi5.png"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className='footer-all'>
        <div className='footer-list'>
        <div>
            <h1>SERVICES</h1>
            <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Digital Marketing</li>
                <li>Mobile Application</li>
                <li>Logo Design</li>
            </ul>
        </div>
        <div>
            <h1>OUR PRODUCTS</h1>
            <ul>
                <li>E-Commerce</li>
                <li>School Software</li>
                <li>ERP</li>
                <li>CRM</li>
                <li>Lead Management</li>
            </ul>
        </div>
        <div>
            <h1>LEGAL PAGES</h1>
            <ul>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Cancellation Policy</li>
                <li>Customer Policy</li>
                <li>Return Policy</li>
            </ul>
        </div>
        <div>
            <h1>COMPANY</h1>
            <ul>
                <li>About Us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div>
            <h1>NEED SUPPORT</h1>
            <ul>
                <li>FAQs</li>
            </ul>
        </div>
        </div>
        <hr />
        <div className='bottom'>
        <div className='footerCloud'>
            <img src={footerCloud} alt="" />
        </div>
        <div className='social-font'>
            <h1>Social Media</h1>
            <p>Follow us on social media to find out <br /> the latest updates on our progress</p>
            <div className='socialmedia-icon'>
            <FaLinkedinIn />
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            </div>
            </div>
        </div>
            <div className='cloud-text'>
            <p>We are committed to excellence in everything we do. From the quality <br /> of our work to the level of service we provide, we strive for nothing less <br /> than perfection.</p>
            </div>
    </div>
    <div className='foot'>
        <p>Cloudi5 Techologies 2024. All Rights Reserved</p>
    </div>
    </>
  )
}

export default Footer