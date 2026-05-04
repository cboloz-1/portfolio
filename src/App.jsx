import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
    </div>
  )
}

export default App