import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Project'
import Tools from './components/Technology'
import Faq from './components/Faq'

export default function page() {
  return (
    <div >
      <Hero/>
      {/* <About/> */}
      <Skills/>
      <Projects/>
       <Tools/>
       <Faq/>
         <Contact/>
    </div>
  )
}
