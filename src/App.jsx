import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Animation from './sections/Animation'
import AppDevelopment from './sections/AppDevelopment'
import Digital from './sections/Digital'
import Web from './sections/Web'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Animation/>
      <AppDevelopment/>
      <Digital/>
      <Web/>
      <Footer/>
    </main>
  )
}

export default App
