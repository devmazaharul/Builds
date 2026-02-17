import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Project'
import Tools from './components/Technology'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Services from './components/Offer'
import Education from './components/Education'

export default function page() {
  return (
    <div >
      <Hero/>
      {/* <About/> */}
      <Skills/>
      <Projects/>
      <Services/>
       <Tools/>
       <Education/>
       <Faq/>
         <Contact/>
         <Footer/>
    </div>
  )
}
