import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
    </div>
  )
}

export default App