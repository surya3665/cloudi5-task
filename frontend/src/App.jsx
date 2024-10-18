import React from 'react'
import "./app.css"
import Header from './componand/Header/Header'
import Contant from './componand/Contant/Contant'
import OurServices from './componand/ourServices/OurServices'
import PinkContant from './componand/pinkContant/PinkContant'
import FormData from './componand/FormData/FormData'
import FAQ from './componand/FAQ/FAQ'
import Footer from './componand/Footer/Footer'


const App = () => {
  return (
    <div className='fullWeb'>
      <Header/>
      <Contant/>
      <OurServices/>
      <PinkContant/>
      <FormData/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App
