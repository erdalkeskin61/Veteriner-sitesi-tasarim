import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Services from './Components/Services'
import CTA from './Components/CTA'
import Footer from './Components/Footer'

function App() {

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <CTA />
      </main>
      <Footer />

    </div>
  )
}

export default App
