import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import { Experience } from './components/Experience'

export default function Home() {
  return (
    <div className='flex flex-col gap-40'>
      <Hero />
      <About />
      <Experience />
      <Project />
    </div>
  )
}
