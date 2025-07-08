import About from '@/components/About'
import Experience from '@/components/Experience'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import React from 'react'

const page = () => {
  return (
    <div className='mt-24 md:mt-0'>
      <Header/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Services/>
      <Reviews/>
    </div>
  )
}

export default page
